// Space is the actors below — book illustration for "The Billiard Ball
// Universe" (fig:actorsbelow replacement, exports/everything/).
//
// The book's first rule of the mechanism: space is nothing in itself, only the
// order of relations among actual things — so the "empty" space of layer N is,
// one layer down, the crowd of layer N+1. Two panels, one camera:
//   bodies — a thin ink frame holding two shaded balls with conspicuously EMPTY
//            space between them; a small dashed box marks a patch of that void.
//   crowd  — that same dashed patch, magnified: the void is a sea of small
//            motes scattered in depth (nearer = larger/darker), no big bodies.
// The story: the void is a crowd; transmission is just what crowds do.
//
// One camera for both steps (export-one-camera-per-scene). Balls and motes are
// billboard disks built from the viewpoint's own eye vector, so they read as
// spheres from the exported camera; the frame is drawn flat in the z=0 plane.

sketch("3D", { yUp: true });
theme("ink");
steps("bodies", "crowd");

const INK = "#222019";
const BALLGRAY = "#55534c";

// ---- the frame (shared proportions for both panels) ----------------------
const FW = 3.9; // frame width
const FH = 3.9; // frame height  (square, like the TikZ original)
const HX = FW / 2;
const HY = FH / 2;

// dashed patch of "emptiness" marked in the bodies panel — this rectangle,
// magnified, IS the crowd panel's whole frame.
const PW = 1.15;
const PH = 1.15;
const PCX = -0.15; // patch centre, in the empty gap between the two bodies
const PCY = 0.1;

// ---- the one camera, and vector helpers for billboards -------------------
const LOOK = [0, 0, 0];
const EYEDIR = [-1.1, 0.9, 7.0]; // near head-on, a slight tilt so balls read round
const norm = (v) => Math.hypot(v[0], v[1], v[2]);
const unit = (v) => { const n = norm(v); return [v[0] / n, v[1] / n, v[2] / n]; };
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const E = unit(EYEDIR); // toward the eye
const BU = unit(cross([0, 1, 0], E)); // billboard basis: right
const BV = cross(E, BU); //                  up

// ring of points around C, radius r, in the plane spanned by (u, v)
function ring(C, r, u, v, n = 44) {
  const out = [];
  for (let i = 0; i <= n; i++) {
    const a = (2 * Math.PI * i) / n;
    out.push(pt(
      C[0] + r * (Math.cos(a) * u[0] + Math.sin(a) * v[0]),
      C[1] + r * (Math.cos(a) * u[1] + Math.sin(a) * v[1]),
      C[2] + r * (Math.cos(a) * u[2] + Math.sin(a) * v[2]),
    ));
  }
  return out;
}

// a ball drawn as its silhouette toward the camera: filled disk + rim + a
// shadowed limb (a darker inner disk offset toward lower-left, kept inside)
function ball(C, r, fill, rim = 1.1, shade = 0.22) {
  const outline = ring(C, r, BU, BV);
  const dir = unit([-(BU[0] + BV[0]), -(BU[1] + BV[1]), -(BU[2] + BV[2])]);
  const off = [C[0] + 0.16 * r * dir[0], C[1] + 0.16 * r * dir[1], C[2] + 0.16 * r * dir[2]];
  emit(area(...outline), { fill, opacity: 1, weight: 0 });
  emit(area(...ring(off, r * 0.82, BU, BV)), { fill: "#25231e", opacity: shade, weight: 0 });
  emit(curve(...outline), { color: INK, weight: rim });
}

// the ink frame: a thin rectangle in the z=0 plane, drawn flat as four crisp
// edges (segments, so the corners stay square — a closed curve() would spline).
function frame(cx, cy, hw, hh) {
  const c = [
    pt(cx - hw, cy - hh, 0), pt(cx + hw, cy - hh, 0),
    pt(cx + hw, cy + hh, 0), pt(cx - hw, cy + hh, 0),
  ];
  for (let i = 0; i < 4; i++) {
    emit(seg(c[i], c[(i + 1) % 4]), { color: INK, weight: 1.4, opacity: 0.9 });
  }
}

// ---- a deterministic little PRNG so the crowd is fixed across re-runs -----
function rng(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

build(() => {
  viewpoint("iso", {
    eye: pt(LOOK[0] + 2.2 * EYEDIR[0], LOOK[1] + 2.2 * EYEDIR[1], LOOK[2] + 2.2 * EYEDIR[2]),
    look: pt(LOOK[0], LOOK[1], LOOK[2]),
  });

  // ===================================================================
  // STEP "bodies": layer N — two bodies and conspicuously empty space
  // ===================================================================
  tag("bodies", {
    show: "only bodies",
    caption: "Layer N: two bodies and the 'empty' space between them. The dashed patch marks a scrap of that emptiness — the void through which the bodies supposedly act at a distance",
  }, () => {
    frame(0, 0, HX, HY);

    // two handsome shaded balls, opposite corners, with a wide empty gap
    ball([-HX + 0.85, HY - 0.85, 0.0], 0.48, BALLGRAY);
    ball([HX - 0.85, -HY + 0.9, 0.0], 0.48, BALLGRAY);

    // the dashed box marking a patch of the emptiness in the gap between them
    const p = [
      pt(PCX - PW / 2, PCY - PH / 2, 0), pt(PCX + PW / 2, PCY - PH / 2, 0),
      pt(PCX + PW / 2, PCY + PH / 2, 0), pt(PCX - PW / 2, PCY + PH / 2, 0),
    ];
    for (let i = 0; i < 4; i++) {
      emit(seg(p[i], p[(i + 1) % 4]), { color: INK, weight: 1.1, dash: "4,3", opacity: 0.9 });
    }

    mathbox("\\text{layer } N", at(pt(-HX + 0.1, HY + 0.32, 0), "left", "bottom"), { size: 0.42, color: INK });
    // the word sits inside the marked patch — the "emptiness" itself
    mathbox("\\text{``empty''}", at(pt(PCX, PCY, 0), "center", "center"), { size: 0.3, color: INK });
  });

  // ===================================================================
  // STEP "crowd": layer N+1 — the same patch, magnified into a crowd
  // ===================================================================
  tag("crowd", {
    show: "only crowd",
    caption: "The same 'emptiness', one layer down: a crowd. Magnify the dashed patch and the void is a sea of actors in depth. Their arrangement is our geometry; transmission is just what crowds do",
  }, () => {
    frame(0, 0, HX, HY);

    // fill the frame with small motes at varied depth: nearer (bigger z) reads
    // larger and darker, farther reads smaller and lighter — a crowd in 3D.
    const rand = rng(20260724);
    const N = 44;
    const MARGIN = 0.26; // keep every mote's disk clear of the frame edge
    const placed = [];
    let tries = 0;
    while (placed.length < N && tries < 5000) {
      tries++;
      const z = (rand() * 2 - 1) * 1.5; // depth: -1.5 (far) .. +1.5 (near)
      const t = (z + 1.5) / 3.0; // 0 far .. 1 near
      const r = 0.075 + 0.11 * t; // nearer = larger
      const x = (rand() * 2 - 1) * (HX - MARGIN - r);
      const y = (rand() * 2 - 1) * (HY - MARGIN - r);
      // keep motes from piling on top of each other (in the x,y footprint)
      let ok = true;
      for (const q of placed) {
        if (Math.hypot(x - q[0], y - q[1]) < 0.32) { ok = false; break; }
      }
      if (!ok) continue;
      placed.push([x, y, z, r]);
    }
    // draw far motes first so nearer ones overlap them
    placed.sort((a, b) => a[2] - b[2]);
    for (const [x, y, z, r] of placed) {
      const t = (z + 1.5) / 3.0; // 0 far .. 1 near
      const g = Math.round(0x70 - 0x40 * t); // nearer = darker
      const hex = "#" + g.toString(16).padStart(2, "0").repeat(3);
      ball([x, y, z], r, hex, 0.6, 0.18);
    }

    mathbox("\\text{layer } N{+}1", at(pt(-HX + 0.1, HY + 0.35, 0), "left", "bottom"), { size: 0.42, color: INK });
    mathbox("\\text{a crowd}", at(pt(0, -HY - 0.4, 0), "center", "top"), { size: 0.34, color: INK });
  });

  // ---- the construction the two panels rest on (§11f) ----------------------
  // The whole figure asserts a cross-panel fact: the dashed patch, magnified, IS
  // the crowd panel's frame. For that to hold undistorted the patch must share
  // the frame's aspect ratio; and to be "a scrap of layer N's window" it must lie
  // inside that frame. Both are read straight off the patch/frame constants, so a
  // later edit that breaks the relationship fails the check.
  check.equal("marked patch shares the frame's aspect ratio (magnifies without distortion)", PW / PH, FW / FH, 1e-9);
  check.equal("marked patch lies inside layer N's window", Math.max(0, Math.abs(PCX) + PW / 2 - HX, Math.abs(PCY) + PH / 2 - HY), 0, 1e-9);
});
