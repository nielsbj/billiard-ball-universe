// Layers inside layers, told as a zoom — book illustration for
// "The Billiard Ball Universe" (fig:layers replacement, exports/everything/).
//
// Three panels, one camera, the same frame and the same ball language throughout:
//   body  — a body at our layer: one shaded ball in a thin ink frame, a few motes.
//   crowd — the same body's matter, one layer down: a 3-D scatter of motes
//           (smaller and fainter with depth), one singled out in a dashed box.
//   world — inside that mote: a small world, a companion on a tilted orbit, faint
//           skies — and on, without end.
//
// The frame is a thin ink rectangle in the z=0 plane; balls are billboard disks
// built from the viewpoint's eye vector (so they read as spheres from the one
// exported camera); the crowd's depth is real z, so nearer motes are larger and
// darker. Only one panel is shown per exported step (show:"only <step>"), all
// sharing a single viewpoint (export-one-camera-per-scene).

sketch("3D", { yUp: true });
theme("ink");
steps("body", "crowd", "world");

const INK = "#222019";
const GOLD = "#C08A2D"; // the upward hint: this whole page is one mote, one layer up
const BLUE = "#2E5A78"; // momentum / gravity accent (the orbiting companion)
const BALLGRAY = "#55534c";

// --- the shared frame: a square window, centred on the origin -----------------
const FW = 3.2; // frame half-width (so the window is FW*2 on a side)

// The two regions the zoom opens, named so the checks below speak about exactly
// the geometry the panels draw: the body ball and the dashed box that opens it,
// and the dashed box that opens one mote of the crowd. (Values unchanged — these
// were inline literals in the panels; hoisting them changes no pixel.)
const BODY = { x: -0.4, y: -0.2, r: 0.95 }; // the body ball (body panel)
const OPEN_BODY = { x: -0.4, y: -0.2, h: 0.42 }; // dashed box opening the body
const OPEN_CROWD = { x: 0.15, y: 0.1, h: 0.4 }; // dashed box opening one mote

// ---- the one camera, and vector helpers for billboards -----------------------
// Nearly front-on, tilted just enough that depth (z) reads as size, not offset.
const LOOK = [0, 0, 0];
const EYEDIR = [0.6, 0.45, 6.8]; // eye = LOOK + k·EYEDIR (mostly +z: we look INTO the frame,
//                                  with just enough tilt that depth reads as size)
const norm = (v) => Math.hypot(v[0], v[1], v[2]);
const unit = (v) => { const n = norm(v); return [v[0] / n, v[1] / n, v[2] / n]; };
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
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

// a ball drawn as its silhouette toward the camera: filled disk + a shadowed
// limb (a darker inner disk offset toward lower-left) + an ink rim.
function ball(C, r, fill, opacity = 1, rim = 1.1) {
  const rimRing = ring(C, r, BU, BV);
  const dir = unit([-(BU[0] + BV[0]), -(BU[1] + BV[1]), -(BU[2] + BV[2])]);
  const off = [C[0] + 0.14 * r * dir[0], C[1] + 0.14 * r * dir[1], C[2] + 0.14 * r * dir[2]];
  emit(area(...rimRing), { fill, opacity, weight: 0 });
  emit(area(...ring(off, r * 0.84, BU, BV)), { fill: "#25231e", opacity: 0.22 * opacity, weight: 0 });
  if (rim > 0) emit(curve(...rimRing), { color: INK, weight: rim, opacity });
}

// the thin ink window every panel shares (a rectangle of four segments)
function windowFrame() {
  const c = [
    pt(-FW, -FW, 0), pt(FW, -FW, 0), pt(FW, FW, 0), pt(-FW, FW, 0),
  ];
  for (let i = 0; i < 4; i++) {
    emit(seg(c[i], c[(i + 1) % 4]), { color: INK, weight: 1.3 });
  }
}

// a small dashed box (in the z=0 plane) singling out a region, centre (x,y),
// half-size h. col defaults to INK; pass a light colour to read over a dark ball.
function zoomBox(x, y, h, col = INK, weight = 0.9) {
  const c = [pt(x - h, y - h, 0), pt(x + h, y - h, 0), pt(x + h, y + h, 0), pt(x - h, y + h, 0)];
  for (let i = 0; i < 4; i++) {
    emit(seg(c[i], c[(i + 1) % 4]), { color: col, weight, dash: "3,3" });
  }
}

// the upward hint: two dashed leaders + an arc above the frame, and a mote,
// saying "all of this is itself one mote in a body, one layer up". Shared by
// every panel so the recursion reads the same on each.
function upwardHint() {
  const yTop = FW;
  // dashed leaders splaying out from the top corners
  emit(seg(pt(-FW, yTop, 0), pt(-FW - 0.9, yTop + 1.0, 0)), { color: GOLD, weight: 0.8, dash: "5,4", opacity: 0.75 });
  emit(seg(pt(FW, yTop, 0), pt(FW + 0.9, yTop + 1.0, 0)), { color: GOLD, weight: 0.8, dash: "5,4", opacity: 0.75 });
  // a shallow arc joining them (a slice of a big circle), sampled
  const arc = [];
  for (let i = 0; i <= 40; i++) {
    const t = i / 40;
    const x = -FW - 0.9 + t * (2 * FW + 1.8);
    const y = yTop + 1.0 + 0.55 * Math.sin(Math.PI * t); // gentle bow up
    arc.push(pt(x, y, 0));
  }
  emit(curve(...arc), { color: GOLD, weight: 0.9, opacity: 0.6 });
  // and the mote this whole page is: a small ball resting on the arc's crown
  ball([0.0, yTop + 1.9, 0], 0.16, GOLD, 0.85, 0.7);
}

// scatter a crowd of motes in the frame, with real depth (z): nearer motes
// (larger z toward the eye) are bigger and darker, far ones small and faint.
// Deterministic pseudo-random so re-runs are stable.
function crowd(seed) {
  let s = seed;
  const rnd = () => { s = (s * 1103515245 + 12345) & 0x7fffffff; return s / 0x7fffffff; };
  const motes = [];
  const N = 26;
  for (let i = 0; i < N; i++) {
    const x = (rnd() * 2 - 1) * (FW - 0.55);
    const y = (rnd() * 2 - 1) * (FW - 0.55);
    const z = (rnd() * 2 - 1) * 1.9; // depth: +z toward the eye
    motes.push([x, y, z]);
  }
  // paint far (small z) first so near motes overlap them — back to front
  motes.sort((a, b) => a[2] - b[2]);
  for (const [x, y, z] of motes) {
    const near = (z + 1.9) / 3.8; // 0 far .. 1 near
    const r = 0.09 + 0.10 * near;
    const op = 0.45 + 0.5 * near;
    ball([x, y, z], r, BALLGRAY, op, 0.6 * near);
  }
  return motes;
}

build(() => {
  viewpoint("iso", {
    eye: pt(LOOK[0] + 2.4 * EYEDIR[0], LOOK[1] + 2.4 * EYEDIR[1], LOOK[2] + 2.4 * EYEDIR[2]),
    look: pt(LOOK[0], LOOK[1], LOOK[2]),
  });

  const CAP_Y = -(FW + 0.55); // per-panel caption baseline, just under the frame

  // ---------------- body: a body at our layer -------------------------------
  tag("body", { show: "only body", caption: "A body at our layer: one ball, a few faint motes for company — and this whole window is itself a mote in a body one layer up (the golden hint above)." }, () => {
    upwardHint();
    windowFrame();
    // three faint small motes elsewhere in the frame
    ball([-2.1, 2.0, -0.3], 0.12, BALLGRAY, 0.5, 0.5);
    ball([2.2, -1.9, 0.2], 0.10, BALLGRAY, 0.5, 0.5);
    ball([2.0, 2.1, -0.5], 0.11, BALLGRAY, 0.45, 0.5);
    // the body itself, shaded, near centre
    ball([BODY.x, BODY.y, 0.4], BODY.r, BALLGRAY, 1, 1.2);
    // the region we will open — a light dashed box, so it reads on the dark ball
    zoomBox(OPEN_BODY.x, OPEN_BODY.y, OPEN_BODY.h, "#E8E2D2", 1.0);
    mathbox("\\text{a body at our layer}", at(pt(0, CAP_Y, 0), "center", "top"), { size: 0.4 });
  });

  // ---------------- crowd: its matter, one layer down -----------------------
  tag("crowd", { show: "only crowd", caption: "Magnify that ball and it is a crowd of motes — the layer below, which makes up its matter and its empty space alike. One mote is singled out to open next." }, () => {
    upwardHint();
    windowFrame();
    crowd(20260724);
    // the one mote we open: a slightly darker, definite mote near centre, boxed
    ball([OPEN_CROWD.x, OPEN_CROWD.y, 0.9], 0.17, INK, 1, 0.7);
    zoomBox(OPEN_CROWD.x, OPEN_CROWD.y, OPEN_CROWD.h);
    mathbox("\\text{its matter: the crowd one layer down}", at(pt(0, CAP_Y, 0), "center", "top"), { size: 0.4 });
  });

  // ---------------- world: inside the mote, a world -------------------------
  tag("world", { show: "only world", caption: "Open that mote and there is structure again: a world, a companion on a tilted orbit, room for faint skies — and so on, without end." }, () => {
    upwardHint();
    windowFrame();

    // very faint motes as distant skies
    ball([-2.2, 1.9, -1.5], 0.07, BALLGRAY, 0.3, 0);
    ball([2.1, 1.7, -1.8], 0.06, BALLGRAY, 0.28, 0);
    ball([1.9, -2.0, -1.4], 0.07, BALLGRAY, 0.3, 0);
    ball([-1.8, -1.7, -2.0], 0.05, BALLGRAY, 0.25, 0);

    const C = [-0.2, 0.0, 0.3]; // the small world's centre
    // the tilted orbit ring, sampled (a 3-D circle() would live in one z-plane
    // only; we build the ellipse in a tilted plane ourselves). Split so the ring
    // passes BEHIND then IN FRONT of the ball, for a proper orbit read.
    const RA = 1.55, RB = 1.55;
    const U = unit([1, 0.18, 0]);          // orbit plane basis: long axis, slight yaw
    const Vv = unit([0.12, 0.55, 0.62]);   // tilted up out of the page
    const orbitPt = (a) => [
      C[0] + RA * Math.cos(a) * U[0] + RB * Math.sin(a) * Vv[0],
      C[1] + RA * Math.cos(a) * U[1] + RB * Math.sin(a) * Vv[1],
      C[2] + RA * Math.cos(a) * U[2] + RB * Math.sin(a) * Vv[2],
    ];
    const sampleArc = (a0, a1, n) => {
      const out = [];
      for (let i = 0; i <= n; i++) { const a = a0 + (a1 - a0) * (i / n); const p = orbitPt(a); out.push(pt(p[0], p[1], p[2])); }
      return out;
    };
    // back half of the orbit (behind the ball), fainter
    emit(curve(...sampleArc(Math.PI, 2 * Math.PI, 40)), { color: INK, weight: 0.9, opacity: 0.4 });
    // the world
    ball(C, 0.62, BALLGRAY, 1, 1.2);
    // front half of the orbit (in front), solid
    emit(curve(...sampleArc(0, Math.PI, 40)), { color: INK, weight: 1.0, opacity: 0.75 });
    // the companion, riding the front of the orbit
    const comp = orbitPt(0.35 * Math.PI);
    ball(comp, 0.16, BLUE, 1, 0.8);

    mathbox("\\text{inside the mote: a world, orbits, skies}", at(pt(0, CAP_Y, 0), "center", "top"), { size: 0.36 });
    mathbox("\\text{---and on, without end}", at(pt(0, CAP_Y - 0.5, 0), "center", "top"), { size: 0.36 });
  });

  // ---- the zoom facts the recursion rests on (§11f) ------------------------
  // Each opened region must be a real patch of THIS window (so the next panel
  // magnifies something actually inside the frame), and the body panel must open
  // a patch OF THE BODY — its matter is the crowd one layer down, not the void
  // around it. Read off the box/ball constants, so a box nudged off the body or
  // past the frame edge fails the check.
  const within = (x, y, h) => Math.max(0, Math.abs(x) + h - FW, Math.abs(y) + h - FW);
  check.equal("body zoom-box lies inside the window", within(OPEN_BODY.x, OPEN_BODY.y, OPEN_BODY.h), 0, 1e-9);
  check.equal("crowd zoom-box lies inside the window", within(OPEN_CROWD.x, OPEN_CROWD.y, OPEN_CROWD.h), 0, 1e-9);
  const bodyCorner = Math.hypot(OPEN_BODY.x - BODY.x, OPEN_BODY.y - BODY.y) + OPEN_BODY.h * Math.SQRT2;
  check.equal("the opened patch lies on the body (its matter = the crowd below)", Math.max(0, bodyCorner - BODY.r), 0, 1e-9);
});
