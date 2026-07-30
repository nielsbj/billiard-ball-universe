// Figure linter (IMPROVEMENTS.md §3) — a pure, ADVISORY post-fit pass over a
// Scene + chosen camera. It consumes the projected shape model (figureShapes),
// so it measures exactly what the exporters draw; it never mutates Scene or
// source and never blocks a run (same contract as checks/conflicts/todos).
//
//   lintFigure(scene, { step, camera, size }) -> [{ code, severity, message, span? }]
//
// Checks (docs/IMPROVEMENTS.md §3):
//   offframe        — a shape's projected AABB extends beyond the viewport by
//                     more than OFFFRAME_TOLERANCE of the frame dimension
//   underfill       — the visible ink's overall AABB fills too little of the
//                     frame (the symptom per-step framing fixes)
//   tiny-text       — a label's projected height is sub-legible at print
//   label-overlap   — two label/math boxes overlap by more than a fraction of
//                     the smaller box
//   label-collision — a label box is crossed/covered by geometry it is not
//                     anchored to (same-span shapes are its own anchor marks)
//
// Label boxes use ESTIMATED glyph widths (TEXT_CHAR_ASPECT), so the overlap /
// collision checks are advisory with deliberately loose thresholds.
// Thresholds are heuristics, kept together here for calibration on the corpus.

import { figureShapes } from './figure-shapes.js';

// ---- thresholds (starting points; tune against the delivered proofs) ----
const OFFFRAME_TOLERANCE = 0.02; // beyond-edge overhang allowed, as a frame fraction
// A correctly fitted panel fills ~60% of its long frame dimension (frameBox's
// 1.6 back-off), so linear coverage is the robust "sits small" measure — an
// AREA threshold would misfire on legitimately flat panels (number lines).
const UNDERFILL_MAX_LINEAR = 0.35; // warn when max(w/W, h/H) of the ink AABB is below
// Text width per character, as a fraction of the glyph height (AABB estimate).
const TEXT_CHAR_ASPECT = 0.6;
const TINY_TEXT_PX = 9; // projected glyph height below this is sub-legible at print
const LABEL_OVERLAP_FRAC = 0.15; // of the SMALLER box's area
// A stroke "collides" when its clipped run through the CORE of the label box
// (the central fraction below — glyph widths are estimates, and labels
// legitimately sit right beside lines) is at least LABEL_COLLISION_CROSS of
// the core's smaller dimension — i.e. it passes through the glyphs, not
// merely clips a corner. (An area fraction under-fires: a thin line straight
// through a wide label covers little area but ruins it.) Polylines only —
// the polygon shape model always carries a stroke, so a fill-only region
// cannot be told from an outlined one.
const LABEL_CORE = 0.5;
const LABEL_COLLISION_CROSS = 1.2;

/**
 * @param {any} scene
 * @param {{ step?: any, camera?: any, size?: { width?: number, height?: number } }} [o]
 */
export function lintFigure(scene, { step = null, camera, size = {} } = {}) {
  const fig = figureShapes(scene, { step, mode: 'MONO', camera, size });
  const { width: W, height: H } = fig;
  const shapes = fig.eyes[0] ? fig.eyes[0].shapes : [];
  if (!shapes.length) return []; // an empty stage has no layout to lint

  const warnings = [];

  // ---- offframe: aggregate the worst overhang per source span, so a multi-
  // shape primitive (hatch, arrowheads) reports once ----
  const tolX = OFFFRAME_TOLERANCE * W;
  const tolY = OFFFRAME_TOLERANCE * H;
  const bySpan = new Map(); // spanKey -> { span, over, edges:Set }
  const inkLo = [Infinity, Infinity];
  const inkHi = [-Infinity, -Infinity];
  const labels = []; // { s, b, key } — text/math boxes, for the label checks
  const geoms = []; // { s, b, key }  — non-label shapes
  for (const s of shapes) {
    const b = shapeBounds(s);
    if (!b) continue;
    const key = s.span ? `${s.span[0]}:${s.span[1]}` : null;
    if (s.t === 'text' || s.t === 'math') labels.push({ s, b, key });
    else geoms.push({ s, b, key });
    inkLo[0] = Math.min(inkLo[0], b[0]);
    inkLo[1] = Math.min(inkLo[1], b[1]);
    inkHi[0] = Math.max(inkHi[0], b[2]);
    inkHi[1] = Math.max(inkHi[1], b[3]);

    const overs = [
      { edge: 'left', over: -b[0], tol: tolX },
      { edge: 'top', over: -b[1], tol: tolY },
      { edge: 'right', over: b[2] - W, tol: tolX },
      { edge: 'bottom', over: b[3] - H, tol: tolY },
    ].filter((o) => o.over > o.tol);
    if (!overs.length) continue;
    const offKey = key || `?${bySpan.size}`; // span-less shapes each report alone
    const rec = bySpan.get(offKey) || { span: s.span || null, over: 0, edges: new Set() };
    for (const o of overs) {
      rec.edges.add(o.edge);
      rec.over = Math.max(rec.over, Math.round(o.over));
    }
    bySpan.set(offKey, rec);
  }
  for (const rec of bySpan.values()) {
    warnings.push({
      code: 'offframe',
      severity: 'warn',
      message: `ink extends ${rec.over}px past the ${[...rec.edges].join('/')} edge`,
      span: rec.span,
    });
  }

  // ---- underfill: the whole panel sits small in its frame ----
  if (isFinite(inkLo[0])) {
    const wFrac = (inkHi[0] - inkLo[0]) / W;
    const hFrac = (inkHi[1] - inkLo[1]) / H;
    if (Math.max(wFrac, hFrac) < UNDERFILL_MAX_LINEAR) {
      warnings.push({
        code: 'underfill',
        severity: 'warn',
        message: `visible ink fills only ${Math.round(wFrac * 100)}% × ${Math.round(hFrac * 100)}% of the frame`,
        span: null,
      });
    }
  }

  // ---- tiny-text: sub-legible projected glyph height (dedupe per span) ----
  const tinySeen = new Set();
  for (const { s, key } of labels) {
    if (s.h >= TINY_TEXT_PX) continue;
    const k = key || `?${tinySeen.size}`;
    if (tinySeen.has(k)) continue;
    tinySeen.add(k);
    warnings.push({
      code: 'tiny-text',
      severity: 'warn',
      message: `"${labelText(s)}" renders ~${Math.round(s.h)}px tall (< ${TINY_TEXT_PX}px)`,
      span: s.span || null,
    });
  }

  // ---- label-overlap: two label boxes covering each other ----
  for (let i = 0; i < labels.length; i++) {
    for (let j = i + 1; j < labels.length; j++) {
      const A = labels[i], B = labels[j];
      if (A.key && A.key === B.key) continue; // same call site (loop-emitted)
      const inter = intersectionArea(A.b, B.b);
      if (!inter) continue;
      const smaller = Math.min(boxArea(A.b), boxArea(B.b));
      const frac = inter / smaller;
      if (frac > LABEL_OVERLAP_FRAC) {
        warnings.push({
          code: 'label-overlap',
          severity: 'warn',
          message: `"${labelText(A.s)}" and "${labelText(B.s)}" overlap ~${Math.round(frac * 100)}% of the smaller box`,
          span: A.s.span || B.s.span || null,
        });
      }
    }
  }

  // ---- label-collision: STROKES crossing a label it is not anchored to.
  // Fill interiors are deliberately NOT counted: a label inside a translucent
  // region is normal authoring (region labels), and dots are tiny — only a
  // stroked path running through the glyphs actually hurts legibility. ----
  for (const L of labels) {
    const cx = (L.b[0] + L.b[2]) / 2, cy = (L.b[1] + L.b[3]) / 2;
    const hw = ((L.b[2] - L.b[0]) / 2) * LABEL_CORE, hh = ((L.b[3] - L.b[1]) / 2) * LABEL_CORE;
    const core = [cx - hw, cy - hh, cx + hw, cy + hh];
    const minDim = Math.min(core[2] - core[0], core[3] - core[1]);
    if (minDim <= 0) continue;
    let worst = 0;
    for (const G of geoms) {
      if (L.key && G.key === L.key) continue; // the label's own anchor marks
      if (G.s.t !== 'polyline') continue;
      if (G.s.hatch) continue; // decorative fill texture — a region's label sits on it by design
      if (!boxesTouch(core, G.b)) continue; // (a straight line's bbox is degenerate)
      // A stroke RADIATING FROM the labelled point (its own path ends at the
      // label) is attached geometry, not a collision — skip it; only paths
      // passing through from afar count.
      const ends = [G.s.pts[0], G.s.pts[G.s.pts.length - 1]];
      const nearBox = [L.b[0] - hw, L.b[1] - hh, L.b[2] + hw, L.b[3] + hh];
      if (ends.some((e) => e[0] >= nearBox[0] && e[0] <= nearBox[2] && e[1] >= nearBox[1] && e[1] <= nearBox[3])) continue;
      let len = 0;
      for (let k = 1; k < G.s.pts.length; k++) len += clippedSegmentLength(G.s.pts[k - 1], G.s.pts[k], core);
      const cross = len / minDim;
      if (cross > worst) worst = cross;
    }
    if (worst > LABEL_COLLISION_CROSS) {
      warnings.push({
        code: 'label-collision',
        severity: 'warn',
        message: `a stroke runs through "${labelText(L.s)}"`,
        span: L.s.span || null,
      });
    }
  }

  return warnings;
}

// ---- small geometry helpers for the label checks ----

function labelText(s) {
  const raw = s.t === 'math' ? String(s.tex) : String(s.s);
  return raw.length > 28 ? raw.slice(0, 25) + '…' : raw;
}

function boxArea(b) {
  return Math.max(0, b[2] - b[0]) * Math.max(0, b[3] - b[1]);
}

function intersectionArea(a, b) {
  const w = Math.min(a[2], b[2]) - Math.max(a[0], b[0]);
  const h = Math.min(a[3], b[3]) - Math.max(a[1], b[1]);
  return w > 0 && h > 0 ? w * h : 0;
}

// Overlap gate that tolerates DEGENERATE boxes (a straight axis-parallel
// stroke has zero width or height).
function boxesTouch(a, b) {
  return Math.min(a[2], b[2]) >= Math.max(a[0], b[0]) && Math.min(a[3], b[3]) >= Math.max(a[1], b[1]);
}

// Length of the part of segment p→q inside box [x0,y0,x1,y1] (Liang–Barsky).
function clippedSegmentLength(p, q, b) {
  const dx = q[0] - p[0], dy = q[1] - p[1];
  let t0 = 0, t1 = 1;
  for (const [num, den] of [
    [b[0] - p[0], dx], // left
    [p[0] - b[2], -dx], // right
    [b[1] - p[1], dy], // top
    [p[1] - b[3], -dy], // bottom
  ]) {
    if (den === 0) {
      if (num > 0) return 0; // parallel and outside
    } else {
      const t = num / den;
      if (den > 0) t0 = Math.max(t0, t);
      else t1 = Math.min(t1, t);
      if (t0 > t1) return 0;
    }
  }
  return Math.hypot(dx, dy) * (t1 - t0);
}

// Projected screen-px AABB [x0, y0, x1, y1] of one figure shape, or null when
// it has no extent. Text/math widths are estimated from the glyph height (the
// exporters centre them at (x, y)). Exported so stage framing (frameStage's
// ink-refinement) measures ink exactly the way the linter does.
export function shapeBounds(s) {
  switch (s.t) {
    case 'polyline':
    case 'polygon': {
      if (!s.pts || !s.pts.length) return null;
      let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
      for (const [x, y] of s.pts) {
        if (x < x0) x0 = x;
        if (y < y0) y0 = y;
        if (x > x1) x1 = x;
        if (y > y1) y1 = y;
      }
      return [x0, y0, x1, y1];
    }
    case 'circle':
      return [s.x - s.r, s.y - s.r, s.x + s.r, s.y + s.r];
    case 'text':
    case 'math': {
      // Estimate glyph count: TeX control words render as ~one glyph each,
      // braces/scripts as none. Rough, but enough for frame/overlap checks.
      const src = s.t === 'math' ? String(s.tex).replace(/\\[a-zA-Z]+/g, 'M').replace(/[{}^_\s]/g, '') : String(s.s);
      const w = Math.max(1, src.length) * s.h * TEXT_CHAR_ASPECT;
      return [s.x - w / 2, s.y - s.h / 2, s.x + w / 2, s.y + s.h / 2];
    }
    default:
      return null;
  }
}
