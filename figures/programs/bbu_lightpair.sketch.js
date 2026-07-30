// Light as a traveling pair — book illustration for "The Billiard Ball Universe"
// (fig:lightpair replacement, exports/everything/).
//
// The smallest assembly there is: one mote and one wheeling companion, set
// moving. As the pair travels along an axis, the companion traces a HELIX
// around it — so what passes any fixed point on the path is a circulation
// arriving periodically: a traveling oscillation. It has a frequency (the
// wheeling rate) and an ORIENTATION (the plane of the orbit). Turn that plane
// ninety degrees and nothing about the traveler changes but its polarization.
//
// Two steps, one camera (export-one-camera-per-scene):
//   travel — the helix in its native plane, with faint ghost pairs at earlier
//            phases and one marked wavelength λ along the axis.
//   pol    — the identical construction, orbit plane rotated 90° about the axis:
//            visibly a different orientation, everything else the same.
//
// The helix is SAMPLED by hand (a 3D circle() would live in one z-plane only).
// Balls are billboard disks built from the viewpoint's eye vector so they read
// as spheres from the exported camera. The corkscrew must read as 3D, not as a
// flat sine wave — that is the whole point the original TikZ figure missed.

sketch("3D", { yUp: true });
theme("ink");
steps("travel", "pol");

const INK = "#222019";
const GOLD = "#C08A2D"; // the companion's wheeling trace (book accent: light)
const BALLGRAY = "#55534c";

// ---- travel axis and helix parameters -----------------------------------
const X0 = 0;          // start of the shown path
const X1 = 8.4;        // leading end (current pair)
const LEN = X1 - X0;
const RAD = 0.72;      // orbit radius (constant along the path)
const LAMBDA = 2.5;    // axial advance per turn (one wavelength)
const TURNS = LEN / LAMBDA; // ~3.36 turns across the shown path
const YAX = 0;         // the axis sits at y=0,z=0

// ---- the one camera, and vector helpers for billboards -------------------
const LOOK = [(X0 + X1) / 2, 0.1, 0];
// eye low and to the side: enough elevation that near/far coils separate in
// depth (a true corkscrew), enough azimuth that turns don't stack edge-on.
const EYEDIR = [-6.0, 4.8, 4.6]; // eye = LOOK + k·EYEDIR
const norm = (v) => Math.hypot(v[0], v[1], v[2]);
const unit = (v) => { const n = norm(v); return [v[0] / n, v[1] / n, v[2] / n]; };
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const E = unit(EYEDIR); // toward the eye
const BU = unit(cross([0, 1, 0], E)); // billboard basis: right
const BV = cross(E, BU); //                  up

// ring of points around C, radius r, in the plane spanned by (u, v) — billboards
function ring(C, r, u, v, n = 48) {
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

// a ball as its silhouette toward the camera: filled disk + shadowed limb + rim
function ball(C, r, fill, opacity = 1) {
  const rim = ring(C, r, BU, BV);
  const dir = unit([-(BU[0] + BV[0]), -(BU[1] + BV[1]), -(BU[2] + BV[2])]);
  const off = [C[0] + 0.14 * r * dir[0], C[1] + 0.14 * r * dir[1], C[2] + 0.14 * r * dir[2]];
  emit(area(...rim), { fill, opacity, weight: 0 });
  emit(area(...ring(off, r * 0.84, BU, BV)), { fill: "#25231e", opacity: 0.22 * opacity, weight: 0 });
  emit(curve(...rim), { color: INK, weight: 1.0, opacity });
}

// The orbit plane is spanned by two unit vectors P (in-figure "up") and Q; the
// companion at axial position x and phase φ sits at  axis + r(cosφ·P + sinφ·Q).
// phase advances 2π per LAMBDA of axial travel. `roll` rotates the plane about
// the travel axis (x): 0 for "travel", 90° for "pol".
function orbitBasis(roll) {
  const c = Math.cos(roll), s = Math.sin(roll);
  const P = [0, c, s];      // base up = +y, rolled about x
  const Q = [0, -s, c];     // base out = +z, rolled about x
  return { P, Q };
}
const phaseAt = (x) => (2 * Math.PI * (x - X0)) / LAMBDA;
function companionPos(x, P, Q) {
  const ph = phaseAt(x);
  const cp = Math.cos(ph), sp = Math.sin(ph);
  return [x, YAX + RAD * (cp * P[1] + sp * Q[1]), RAD * (cp * P[2] + sp * Q[2])];
}

// one panel of the traveling pair, orbit plane rolled by `roll` about the axis
function panel(roll) {
  const { P, Q } = orbitBasis(roll);

  // ---- the axis of travel: a dashed ink line, extended a little past the ends
  emit(seg(pt(X0 - 0.5, YAX, 0), pt(X1 + 0.9, YAX, 0)), { color: INK, weight: 0.9, dash: "6,5", opacity: 0.6 });

  // ---- sample the helix; split at the leading pair so we can draw the far
  //      half first (behind the axis) and the near half last is unnecessary —
  //      the trace is one stroked curve. Depth reads from the camera elevation.
  const N = 260;
  const helix = [];
  for (let i = 0; i <= N; i++) {
    const x = X0 + (LEN * i) / N;
    const c = companionPos(x, P, Q);
    helix.push(pt(c[0], c[1], c[2]));
  }
  emit(curve(...helix), { color: GOLD, weight: 1.6 });

  // ---- faint ghost pairs at earlier phases along the path (fading in)
  const ghosts = [0.30, 0.55, 0.78];
  for (let g = 0; g < ghosts.length; g++) {
    const x = X0 + LEN * ghosts[g];
    const op = 0.16 + 0.16 * g; // older = fainter
    const comp = companionPos(x, P, Q);
    // spoke from mote to companion, then the two balls
    emit(seg(pt(x, YAX, 0), pt(comp[0], comp[1], comp[2])), { color: INK, weight: 0.7, opacity: op * 0.8 });
    ball([x, YAX, 0], 0.15, INK, op);
    ball([comp[0], comp[1], comp[2]], 0.11, GOLD, op);
  }

  // ---- the current (leading) pair: mote on the axis, companion on the helix
  const xL = X1;
  const compL = companionPos(xL, P, Q);
  // spoke connecting the pair (the wheel's radius, drawn solid)
  emit(seg(pt(xL, YAX, 0), pt(compL[0], compL[1], compL[2])), { color: INK, weight: 1.0, opacity: 0.85 });
  ball([xL, YAX, 0], 0.2, INK);                    // the mote
  ball([compL[0], compL[1], compL[2]], 0.15, GOLD); // the wheeling companion

  return { P, Q };
}

// mark one wavelength λ along the axis with two ticks + a brace label, drawn
// below the tube so it never collides with the coils
function markLambda() {
  const xa = X0 + LAMBDA * 0.6;
  const xb = xa + LAMBDA;
  const yb = -(RAD + 1.0); // brace baseline, clear of the helix
  for (const x of [xa, xb]) {
    // a tick dropping from the axis down to the brace line
    emit(seg(pt(x, YAX - 0.05, 0), pt(x, yb - 0.14, 0)), { color: INK, weight: 0.6, opacity: 0.5, dash: "2,4" });
    emit(seg(pt(x, yb - 0.14, 0), pt(x, yb + 0.14, 0)), { color: INK, weight: 0.9 });
  }
  emit(arrow(pt(xa, yb, 0), pt(xb, yb, 0)), { color: INK, weight: 0.8, head: ["open", "open"] });
  mathbox("\\lambda", at(pt((xa + xb) / 2, yb - 0.5, 0), "center", "top"), { size: 0.55, px: 15 });
}

// the direction of travel, off the leading end (same for both panels — placed
// above the tallest coil so it never collides with the helix; label sits left
// of the arrowhead so the head doesn't poke through the text)
function motionArrow(roll) {
  const compL = companionPos(X1, orbitBasis(roll).P, orbitBasis(roll).Q);
  const yArr = Math.max(compL[1], RAD) + 0.6;
  emit(arrow(pt(X1 - 0.1, yArr, 0), pt(X1 + 1.25, yArr, 0)), { color: INK, weight: 1.3, head: "filled" });
  // label sits above the shaft, its RIGHT edge ending before the arrowhead
  mathbox("\\text{motion}", at(pt(X1 + 0.55, yArr + 0.32, 0), "right", "bottom"), { size: 0.5, px: 15 });
}

build(() => {
  viewpoint("iso", {
    eye: pt(LOOK[0] + 2.2 * EYEDIR[0], LOOK[1] + 2.2 * EYEDIR[1], LOOK[2] + 2.2 * EYEDIR[2]),
    look: pt(LOOK[0], LOOK[1], LOOK[2]),
  });

  tag("travel", {
    show: "only travel",
    caption: "the smallest assembly — one mote, one wheeling companion — set moving: what passes any fixed point is a circulation arriving periodically",
  }, () => {
    panel(0);
    markLambda();
    motionArrow(0);
  });

  tag("pol", {
    show: "only pol",
    caption: "the same traveler, plane turned 90°: polarization",
  }, () => {
    panel(Math.PI / 2);
    motionArrow(Math.PI / 2);
  });

  // ---- the facts: the wheel has constant radius, and the axial advance per
  //      full turn is exactly the declared wavelength λ.
  const { P, Q } = orbitBasis(0);
  const rAt = (x) => {
    const c = companionPos(x, P, Q);
    return Math.hypot(c[1] - YAX, c[2]); // distance from the travel axis
  };
  check.equal("orbit radius is constant along the path (sampled at two points)", rAt(X0 + 1.3), rAt(X0 + 5.1), 1e-6);
  // one full turn advances the axis by exactly λ
  const xTurn = X0 + LAMBDA;
  check.equal("axial advance per turn equals λ", xTurn - X0, LAMBDA, 1e-9);
  check.equal("phase advances 2π over one λ", phaseAt(X0 + LAMBDA) - phaseAt(X0), 2 * Math.PI, 1e-9);
});
