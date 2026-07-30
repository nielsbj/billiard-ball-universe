// Geometry verification pass — inspect a RESOLVED Scene (post-solve, world coords)
// for STRUCTURAL flaws an LLM-built proof figure can have, the kind that correct-
// looking formula labels hide. Pure (no DOM/p5), so it runs node-side and on a
// throwaway Editor (like main.js `classifySketch`). Every finding is ADVISORY — it
// flags for a human/AI look, it never blocks; the figure always shows.
//
// The hard part is false positives: legitimate proofs routinely draw nested/overlapping
// filled regions (a region with a highlighted sub-piece, a body over its faint ghost).
// So the CORE check is not "do filled regions overlap?" (the staircase's half-squares
// sit inside their columns — same signature as a real bug). It is REDUNDANT COVERING:
// a filled region whose area ≈ the SUM of smaller pieces that together TILE it — i.e.
// the whole is drawn AGAIN on top of its own dissection (the geometric-series bug:
// slab2 = slab3 + slab4). A region that merely CONTAINS a smaller highlight (area ≠
// sum) is not flagged. What a dissection should SUM to in the abstract is not knowable
// here — that semantic check is the AI audit's job; this module reports the geometry.

import { sampleCurve, circleRadius, sectorPoints, circlePoints } from './geometry.js';
import { boundsOf } from './camera.js';

// One tuning knob for everything.
export const TOL = {
  OPACITY_MIN: 0.6, // a piece must be at least this opaque to count (skip faint ghosts)
  INSIDE_FRAC: 0.9, // overlap fraction at/above which the smaller is "inside" the larger
  SUM_EPS: 0.1, // |sum(sub areas) − whole area| / whole, to call a covering "exact"
  COVER_FRAC: 0.85, // fraction of the whole the sub-pieces must cover to be a "tiling"
  FRAME_FRAC: 0.9, // a redundant "whole" at/above this × the largest area is the legit outer frame, skip
  DUP_FRAC: 0.92, // overlap fraction (of BOTH) to call two regions near-duplicates
  AREA_EPS: 1e-4, // filled area below this × radius² is a collapsed sliver
  COPLANAR: 0.99, // |nA·nB| at/above which two regions are coplanar enough to overlap
  SAMPLES: 44, // grid resolution for the Monte-Carlo overlap/coverage estimate
};

// ---- colour (mirrors withAlpha's parsing in geometry.js) ----
export function parseRgb(color) {
  if (typeof color !== 'string') return null;
  let m = /^#([0-9a-f]{3})$/i.exec(color);
  if (m) return m[1].split('').map((h) => parseInt(h + h, 16));
  m = /^#([0-9a-f]{6})$/i.exec(color);
  if (m) {
    const n = parseInt(m[1], 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }
  m = /^rgba?\(([^)]+)\)$/i.exec(color);
  if (m) {
    const p = m[1].split(',').map((x) => parseFloat(x));
    return [p[0], p[1], p[2]];
  }
  return null;
}

// ---- normalize any FILLED region to a closed world-space ring [[x,y,z]…] ----
// Surface (the legitimate translucent swept body) and non-filled kinds → null.
export function regionRing(prim) {
  const g = prim.geometry;
  const style = prim.style || {};
  if (!g || prim.degenerate || style.fill == null) return null;
  return geomRing(g);
}

// The boundary ring of a geometry VALUE (Polygon/Area/Sector/Circle) as world
// [x,y,z] triples — shared by regionRing (above) and measure.area (interpret's
// claim checks), so a claimed area is measured with exactly the sampling the
// geometry check uses.
export function geomRing(g) {
  switch (g.kind) {
    case 'Polygon': return g.points.map((p) => [p.x, p.y, p.z]);
    case 'Area': return sampleCurve(g.points);
    case 'Sector': return sectorPoints(g.center, g.from, g.to);
    case 'Circle': return circlePoints(g.center, circleRadius(g));
    default: return null;
  }
}

// Planar polygon area of a world ring ([x,y,z] triples): half the magnitude of
// the RAW Newell vector — exact for planar rings in any orientation (a 2D ring
// lies in z = 0, where this equals the shoelace area).
export function ringArea(ring) {
  if (!ring || ring.length < 3) return 0;
  let nx = 0, ny = 0, nz = 0;
  for (let i = 0; i < ring.length; i++) {
    const a = ring[i];
    const b = ring[(i + 1) % ring.length];
    nx += (a[1] - b[1]) * (a[2] + b[2]);
    ny += (a[2] - b[2]) * (a[0] + b[0]);
    nz += (a[0] - b[0]) * (a[1] + b[1]);
  }
  return Math.hypot(nx, ny, nz) / 2;
}

// ---- small geometry helpers ----
const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
function norm(v) {
  const l = Math.hypot(v[0], v[1], v[2]) || 1;
  return [v[0] / l, v[1] / l, v[2] / l];
}
function centroid3(ring) {
  const c = ring.reduce((s, p) => [s[0] + p[0], s[1] + p[1], s[2] + p[2]], [0, 0, 0]);
  const n = ring.length || 1;
  return [c[0] / n, c[1] / n, c[2] / n];
}
// Newell's method — robust polygon normal in world space.
function newellNormal(ring) {
  let nx = 0, ny = 0, nz = 0;
  for (let i = 0; i < ring.length; i++) {
    const a = ring[i];
    const b = ring[(i + 1) % ring.length];
    nx += (a[1] - b[1]) * (a[2] + b[2]);
    ny += (a[2] - b[2]) * (a[0] + b[0]);
    nz += (a[0] - b[0]) * (a[1] + b[1]);
  }
  return norm([nx, ny, nz]);
}
// An in-plane orthonormal basis (u,v) for a normal n.
function planeBasis(n) {
  const t = Math.abs(n[0]) < 0.9 ? [1, 0, 0] : [0, 1, 0];
  const u = norm(cross(t, n));
  const v = cross(n, u);
  return [u, v];
}
// Project a world ring into a plane's 2D basis at origin o.
function toPlane2D(ring, o, u, v) {
  return ring.map((p) => {
    const d = sub(p, o);
    return [dot(d, u), dot(d, v)];
  });
}
export function shoelaceArea(poly) {
  let a = 0;
  for (let i = 0; i < poly.length; i++) {
    const p = poly[i];
    const q = poly[(i + 1) % poly.length];
    a += p[0] * q[1] - q[0] * p[1];
  }
  return Math.abs(a) / 2;
}
function aabbOf(poly) {
  const lo = [Infinity, Infinity];
  const hi = [-Infinity, -Infinity];
  for (const [x, y] of poly) {
    lo[0] = Math.min(lo[0], x); lo[1] = Math.min(lo[1], y);
    hi[0] = Math.max(hi[0], x); hi[1] = Math.max(hi[1], y);
  }
  return { lo, hi };
}
export function pointInPoly(pt, poly) {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i];
    const [xj, yj] = poly[j];
    if ((yi > pt[1]) !== (yj > pt[1]) && pt[0] < ((xj - xi) * (pt[1] - yi)) / (yj - yi) + xi) {
      inside = !inside;
    }
  }
  return inside;
}

// Build a Region record for a filled primitive (precompute plane + 2D polygon + area).
function buildRegion(prim) {
  const ring = regionRing(prim);
  if (!ring || ring.length < 3) return null;
  const n = newellNormal(ring);
  const o = centroid3(ring);
  const [u, v] = planeBasis(n);
  const poly2 = toPlane2D(ring, o, u, v);
  const area = shoelaceArea(poly2);
  if (area < 1e-12) return null;
  return {
    prim, ring, n, o, u, v, poly2, area,
    aabb: aabbOf(poly2),
    fill: parseRgb(prim.style?.fill),
    opacity: prim.style?.opacity ?? 1,
    id: prim.identity ? prim.identity() : null,
  };
}

// Overlap area of B against A's plane/basis, as a fraction of min(area). 0 unless the
// two regions are roughly coplanar (a front and side face of a cube never overlap).
export function overlapFraction(A, B) {
  if (Math.abs(dot(A.n, B.n)) < TOL.COPLANAR) return 0;
  // B's centroid off A's plane?
  const off = Math.abs(dot(sub(B.o, A.o), A.n));
  const extent = Math.hypot(A.aabb.hi[0] - A.aabb.lo[0], A.aabb.hi[1] - A.aabb.lo[1]) || 1;
  if (off > 0.02 * extent) return 0;
  const Bin = toPlane2D(B.ring, A.o, A.u, A.v);
  const Bbox = aabbOf(Bin);
  const lo = [Math.max(A.aabb.lo[0], Bbox.lo[0]), Math.max(A.aabb.lo[1], Bbox.lo[1])];
  const hi = [Math.min(A.aabb.hi[0], Bbox.hi[0]), Math.min(A.aabb.hi[1], Bbox.hi[1])];
  if (lo[0] >= hi[0] || lo[1] >= hi[1]) return 0;
  const N = TOL.SAMPLES;
  const cw = (hi[0] - lo[0]) / N;
  const ch = (hi[1] - lo[1]) / N;
  let both = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      const px = lo[0] + (i + 0.5) * cw;
      const py = lo[1] + (j + 0.5) * ch;
      if (pointInPoly([px, py], A.poly2) && pointInPoly([px, py], Bin)) both++;
    }
  }
  return (both * cw * ch) / Math.min(A.area, B.area);
}

// Fraction of A covered by the UNION of the sub-regions S (grid-sampled in A's plane).
function coverageOf(A, S) {
  const Sin = S.map((B) => toPlane2D(B.ring, A.o, A.u, A.v));
  const { lo, hi } = A.aabb;
  const N = TOL.SAMPLES;
  const cw = (hi[0] - lo[0]) / N;
  const ch = (hi[1] - lo[1]) / N;
  let inA = 0;
  let covered = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      const px = lo[0] + (i + 0.5) * cw;
      const py = lo[1] + (j + 0.5) * ch;
      if (!pointInPoly([px, py], A.poly2)) continue;
      inA++;
      if (Sin.some((p) => pointInPoly([px, py], p))) covered++;
    }
  }
  return inA ? covered / inA : 0;
}

// The main entry: returns advisory findings { kind, severity, message, identities }.
export function checkGeometry(scene) {
  const prims = (typeof scene.primitives === 'function' ? scene.primitives() : scene).filter(
    (p) => regionRing(p),
  );
  const regions = prims.map(buildRegion).filter(Boolean);
  const findings = [];
  const opaque = regions.filter((r) => r.opacity >= TOL.OPACITY_MIN);

  // --- A. REDUNDANT COVERING: an INTERIOR region drawn AGAIN over the pieces that
  // tile it (catches the geometric-series double-count). Excluded cases that share
  // this geometry but are legitimate: a mere highlight (inner area ≠ whole, so the
  // sum test fails); and the outer FRAME of a "whole = sum of parts" proof such as
  // Pythagoras / binomial-square (the redundant whole there is the LARGEST region —
  // the frame — so we skip the dominant region). Deciding intent beyond this is the
  // AI audit's job; this stays advisory.
  const maxArea = opaque.reduce((m, r) => Math.max(m, r.area), 0);
  for (const A of opaque) {
    if (A.area >= maxArea * TOL.FRAME_FRAC) continue; // the outer frame, not an interior double-draw
    const inner = opaque.filter(
      (B) => B !== A && B.area < A.area * 0.97 && overlapFraction(A, B) >= TOL.INSIDE_FRAC,
    );
    if (inner.length < 2) continue;
    const sumInner = inner.reduce((s, B) => s + B.area, 0);
    if (Math.abs(sumInner - A.area) / A.area > TOL.SUM_EPS) continue; // areas don't add up → a highlight, not a double-draw
    if (coverageOf(A, inner) < TOL.COVER_FRAC) continue; // inner pieces don't tile A → not redundant
    findings.push({
      kind: 'redundant',
      severity: 'advisory',
      message: `a filled region is drawn over ${inner.length} smaller pieces that already tile it (its area ≈ their sum) — a dissection should not also draw the whole, or the pieces double-count`,
      identities: [A.id, ...inner.map((B) => B.id)].filter(Boolean),
    });
  }

  // --- B. NEAR-DUPLICATE: the same filled region emitted twice ---
  for (let i = 0; i < opaque.length; i++) {
    for (let j = i + 1; j < opaque.length; j++) {
      const A = opaque[i];
      const B = opaque[j];
      if (Math.min(A.area, B.area) / Math.max(A.area, B.area) < 0.95) continue;
      if (overlapFraction(A, B) < TOL.DUP_FRAC) continue;
      findings.push({
        kind: 'duplicate',
        severity: 'advisory',
        message: 'two filled regions occupy almost exactly the same area — likely the same piece drawn twice',
        identities: [A.id, B.id].filter(Boolean),
      });
    }
  }

  // --- C. NEAR-ZERO AREA (a collapsed sliver the `degenerate` flag misses) ---
  const b = boundsOf(scene);
  const r2 = (b.radius || 1) * (b.radius || 1);
  for (const R of regions) {
    if (R.area < TOL.AREA_EPS * r2) {
      findings.push({ kind: 'sliver', severity: 'info', message: 'a filled region has near-zero area (collapsed sliver)', identities: [R.id].filter(Boolean) });
    }
  }

  return findings;
}

// Render findings as readable lines for an LLM repair turn (sibling of conflictsToWords).
export function geometryToWords(findings = []) {
  return findings.map((f) => `- ${f.message}`).join('\n');
}
