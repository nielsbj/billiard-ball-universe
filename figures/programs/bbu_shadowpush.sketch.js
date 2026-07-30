// Le Sage shadow gravity in one picture — book illustration for
// "The Billiard Ball Universe" (fig:shadowpush replacement, exports/everything/).
//
// The universal rain of massions arrives from EVERY direction. A lone body is
// hit equally from all sides — the flux is omnipresent and, alone, undetectable:
// no net force. Put two bodies near each other and each shades the other: the
// corridor of directions between them is thinned, so the unshaded rain from
// outside presses them together. That imbalance is gravity — not a pull, but
// mutual sheltering.
//
// Two steps, one camera (export-one-camera-per-scene): "alone" and "together".
// Rain is drawn as genuinely 3D arrows placed on a spherical shell of incoming
// directions (tails on the shell, heads pointing inward but stopping short of
// the ball). Far-side arrows are drawn first, then the balls, then near-side
// arrows, so the balls occlude the rain behind them and it reads as space.

sketch("3D", { yUp: true });
theme("ink");
steps("alone", "together");

const INK = "#222019";
const GOLD = "#C08A2D"; // the rain (book accent: light & depletion)
const BLUE = "#2E5A78"; // the net push (book accent: momentum & gravity)
const RAIN = "#6b675c"; // soft ink-gray rain, for near-side arrows
const BALLGRAY = "#4a4841";

const RHO = 0.85; // body radius
const SHELL = 3.1; // radius of the incoming-direction shell
const GAP = 0.5; // arrowhead stops this far short of the ball surface
const SEP = 3.4; // centre-to-centre separation in the "together" panel

// ---- the one camera, and vector helpers for billboards -------------------
const LOOK = [0, 0, 0];
const EYEDIR = [-1.4, 1.1, 6.0]; // eye = LOOK + k·EYEDIR
const norm = (v) => Math.hypot(v[0], v[1], v[2]);
const unit = (v) => { const n = norm(v); return n ? [v[0] / n, v[1] / n, v[2] / n] : v; };
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const add = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
const scl = (a, s) => [a[0] * s, a[1] * s, a[2] * s];
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const E = unit(EYEDIR); // toward the eye
const BU = unit(cross([0, 1, 0], E)); // billboard basis: right
const BV = cross(E, BU); //                  up

// ring of points around C, radius r, in the plane spanned by (u, v)
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

// a ball drawn as its silhouette toward the camera: filled disk + rim + a
// shadowed limb (a darker inner disk offset toward lower-left, kept inside)
function ball(C, r, fill) {
  const rim = ring(C, r, BU, BV);
  const dir = unit([-(BU[0] + BV[0]), -(BU[1] + BV[1]), -(BU[2] + BV[2])]);
  const off = [C[0] + 0.14 * r * dir[0], C[1] + 0.14 * r * dir[1], C[2] + 0.14 * r * dir[2]];
  emit(area(...rim), { fill, opacity: 1, weight: 0 });
  emit(area(...ring(off, r * 0.84, BU, BV)), { fill: "#25231e", opacity: 0.22, weight: 0 });
  emit(curve(...rim), { color: INK, weight: 1.1 });
}

// A spread of incoming directions on the sphere, near-uniform via a Fibonacci
// spiral. Returns unit vectors D (pointing OUTWARD from the shell centre).
function directions(n) {
  const out = [];
  const phi = Math.PI * (3 - Math.sqrt(5)); // golden angle
  for (let i = 0; i < n; i++) {
    const y = 1 - (2 * (i + 0.5)) / n; // -1 .. 1
    const r = Math.sqrt(Math.max(0, 1 - y * y));
    const a = phi * i;
    out.push([Math.cos(a) * r, y, Math.sin(a) * r]);
  }
  return out;
}

// draw one rain arrow: from the shell toward centre O, along inward dir (=-D),
// stopping GAP short of the ball of radius r at O. Depth cue: directions on the
// FAR side of the ball (pointing toward the eye, i.e. D·E > 0 so the tail is
// behind) are drawn shorter and fainter. Returns the actual drawn inward unit
// vector contribution (for the symmetry check), or null if skipped.
function rainArrow(O, r, D, { color = RAIN, near = true } = {}) {
  const facing = dot(D, E); // >0: tail is on the far side (behind the ball)
  const far = facing > 0.12;
  const len = far ? 0.62 : 0.9;   // shorter arrows for far-side directions
  const op = far ? 0.32 : 0.62;   // fainter, too
  const tail = add(O, scl(D, r + GAP + len));
  const head = add(O, scl(D, r + GAP));
  emit(arrow(pt(...tail), pt(...head)), {
    color, weight: far ? 0.9 : 1.15, opacity: op, head: "open",
  });
  return D;
}

build(() => {
  viewpoint("iso", {
    eye: pt(LOOK[0] + 2.9 * EYEDIR[0], LOOK[1] + 2.9 * EYEDIR[1], LOOK[2] + 2.9 * EYEDIR[2]),
    look: pt(LOOK[0], LOOK[1], LOOK[2]),
  });

  // ------------------------------------------------------------------ ALONE
  // A single body hit equally from all directions of a spherical shell.
  const dirsAlone = directions(30);
  let sumAlone = [0, 0, 0];
  tag("alone", {
    show: "only alone",
    caption: "alone: a body in the universal rain of massions is struck equally from every direction — the flux is omnipresent and, alone, undetectable: no net force",
  }, () => {
    // far-side arrows first (tails behind the ball), then the ball, then near
    const far = [], near = [];
    for (const D of dirsAlone) (dot(D, E) > 0.12 ? far : near).push(D);
    for (const D of far) rainArrow([0, 0, 0], RHO, D, { near: false });
    ball([0, 0, 0], RHO, BALLGRAY);
    for (const D of near) rainArrow([0, 0, 0], RHO, D, { near: true });
    // the vector sum of sampled inward directions — balanced by symmetry
    for (const D of dirsAlone) sumAlone = add(sumAlone, scl(D, -1)); // inward = -D
  });

  // -------------------------------------------------------------- TOGETHER
  // Two bodies, a couple of diameters apart along x. Rain arrives from the
  // OUTWARD hemisphere of each (few arrows land in the corridor between them),
  // and a bold BLUE net-push arrow points each toward the other.
  const CL = [-SEP / 2, 0, 0]; // left body centre
  const CR = [SEP / 2, 0, 0];  // right body centre
  const dirsPair = directions(34);
  tag("together", {
    show: "only together",
    caption: "together: each body shades the other, so the rain between them is thinned (the quiet corridor) — the unshaded rain from outside presses them together",
  }, () => {
    // the quiet corridor: a faint gold wash spanning the gap, drawn flat as a
    // billboard quad (a revolved band self-overlaps and cancels to nothing)
    // the quiet corridor drawn as a flat hexagonal wash between the balls,
    // tapered at the ends so it reads as a THINNING of the rain in that region
    // rather than a solid card (soft, low opacity, billboard-up so it faces us)
    const half = (SEP - 2 * RHO) / 2 + RHO * 0.35; // reach slightly onto the balls
    const wY = RHO * 0.66;   // corridor half-height at the middle
    const wYe = RHO * 0.34;  // tapered half-height at the ends
    const AXx = [1, 0, 0];
    const corner = (x, y) => add(add([0, 0, 0], scl(AXx, x)), scl(BV, y));
    emit(polygon(
      pt(...corner(-half, -wYe)), pt(...corner(-half * 0.55, -wY)),
      pt(...corner(half * 0.55, -wY)), pt(...corner(half, -wYe)),
      pt(...corner(half, wYe)), pt(...corner(half * 0.55, wY)),
      pt(...corner(-half * 0.55, wY)), pt(...corner(-half, wYe)),
    ), { fill: GOLD, opacity: 0.13, weight: 0 });

    // Decide, per body, which directions are "outward" (not pointing at the
    // partner) and thus still lit; corridor directions are shaded (dropped).
    const toPartner = (C, other) => unit(sub(other, C));
    const outward = (D, C, other) => {
      const p = toPartner(C, other);
      return dot(D, p) < 0.42; // arrows aimed toward the partner are shaded out
    };

    const farL = [], nearL = [], farR = [], nearR = [];
    for (const D of dirsPair) {
      if (outward(D, CL, CR)) (dot(D, E) > 0.12 ? farL : nearL).push(D);
      if (outward(D, CR, CL)) (dot(D, E) > 0.12 ? farR : nearR).push(D);
    }
    // far-side rain (behind both balls)
    for (const D of farL) rainArrow(CL, RHO, D, { near: false });
    for (const D of farR) rainArrow(CR, RHO, D, { near: false });
    // the balls
    ball(CL, RHO, BALLGRAY);
    ball(CR, RHO, BALLGRAY);
    // near-side rain
    for (const D of nearL) rainArrow(CL, RHO, D, { near: true });
    for (const D of nearR) rainArrow(CR, RHO, D, { near: true });

    // a couple of faint dashed strokes in the corridor: blocked flux, no heads
    for (const s of [0.34, -0.34]) {
      emit(seg(
        pt(CL[0] + RHO + 0.12, s * RHO * 0.55, 0),
        pt(CR[0] - RHO - 0.12, s * RHO * 0.55, 0),
      ), { color: RAIN, weight: 0.7, dash: "4,4", opacity: 0.5 });
    }

    // the bold BLUE net push on each body, pointing toward the other, drawn
    // just outside the ball so it reads as a resultant force
    const push = 1.15;
    emit(arrow(pt(CL[0] - RHO - 0.1 - push, 0, 0), pt(CL[0] - RHO - 0.1, 0, 0)), {
      color: BLUE, weight: 2.4, head: "open", opacity: 1,
    });
    emit(arrow(pt(CR[0] + RHO + 0.1 + push, 0, 0), pt(CR[0] + RHO + 0.1, 0, 0)), {
      color: BLUE, weight: 2.4, head: "open", opacity: 1,
    });

    // corridor label under the gap
    mathbox("\\text{thinned rain}", at(pt(0, -(RHO + 0.55), 0), "center", "top"), { size: 0.34, color: GOLD });
  });

  // ---- the fact: the sampled rain on the lone body sums to zero per axis,
  // so there is no net force (the panel's whole point). Symmetry gives ≈ 0.
  check.equal("alone: net rain Σ(-D)·x ≈ 0", sumAlone[0], 0, 0.35);
  check.equal("alone: net rain Σ(-D)·y ≈ 0", sumAlone[1], 0, 0.35);
  check.equal("alone: net rain Σ(-D)·z ≈ 0", sumAlone[2], 0, 0.35);
});
