// Transparent versus opaque — book illustration for "The Billiard Ball
// Universe" (Chapter 7, the Sixth Wound; exports/everything/).
//
// The wound turns on two regimes of the same body under the same incoming flux:
//   transparent — a body that stops only a small fraction of what passes through
//                 it. Every absorber blocks independently; nothing hides behind
//                 anything else; absorbers deep inside are still being hit. Double
//                 the matter and you double the blocking → the push tracks MASS.
//   opaque      — the same outline, packed dense. Rays are stopped at the front
//                 face; the far side stands in the near side's shadow and does
//                 nothing. Adding matter behind changes nothing → the push tracks
//                 the SILHOUETTE (the outline area), and forgets the count.
//
// Two steps, ONE camera and ONE ray bundle (shared below), so the comparison is
// honest — in the visual language of fig:layers / fig:actorsbelow. Body and
// absorbers are billboard disks built from the viewpoint's own eye vector (they
// read as spheres from the exported camera); rays run along world +x, sampled at
// a fixed set of heights used by BOTH panels.

sketch("3D", { yUp: true });
theme("ink");
steps("transparent", "opaque");

const INK = "#222019";
const GOLD = "#C08A2D"; // the rays / flux (book accent: light, depletion, counting)
const RED = "#B3432B"; // the stop mark where a ray is absorbed (energy)
const BALLGRAY = "#55534c"; // matter: the body and its absorbers

// ---- the body, and the shared incoming ray bundle ------------------------
const BR = 1.7; // body radius (the same outline in both panels)
const XL = -3.4; // rays enter here, to the left of the body
const XR = 3.4; // ...and, if unobstructed, exit here to the right
// heights of the sampled rays (all within the frontal disk, |y| < BR). SHARED by
// both panels so the two are the same flux meeting the same outline.
const RAYS = [-1.35, -1.0, -0.6, -0.25, 0.1, 0.45, 0.8, 1.15];

// The transparent body's absorbers, hand-placed so the read is deliberate: three
// sit on a ray (one deep, past centre — proof that the interior is still being
// hit), the rest lie off the sampled rays (in z) — sparse matter these particular
// rays happen to miss. Doubling this cloud would double the stops; that claim is
// the CHECK below, not the count of drawn dots.
const ABSORBERS = [
  [-0.85, 0.1, 0.2], // on ray y=0.1  — a shallow hit near the front
  [-0.15, -0.6, 0.1], // on ray y=-0.6 — a mid-depth hit
  [0.75, 0.8, -0.1], // on ray y=0.8  — a DEEP hit, past centre: no shadowing
  [-0.5, -1.175, 0.45], // off-ray (z-offset): sparse matter the rays miss
  [0.5, -0.8, -0.45],
  [-0.9, -0.075, -0.5],
  [0.9, 0.275, 0.5],
  [-0.3, 0.625, -0.45],
  [0.4, 0.975, 0.5],
  [-1.0, -0.425, 0.4],
];
const HITR = 0.24; // a ray is stopped by an absorber within this distance of its line

// optical model (Beer–Lambert, discrete): N absorbers each of cross-section s in
// a frontal area A block a fraction 1 − (1 − s/A)^N of the flux.
const blocked = (sA, n) => 1 - Math.pow(1 - sA, n);
const SA = 1e-5; // a single absorber's cross-section as a fraction of the frontal area
const N_THIN = 1000; // transparent regime: s/A·N = 0.01 ≪ 1  (blocking ∝ N)
const N_THICK = 1_000_000; // opaque regime: optical depth ≈ 10  (blocking saturated)

// ---- the one camera, and vector helpers for billboards -------------------
const LOOK = [0, 0, 0];
const EYEDIR = [0.55, 0.4, 7.0]; // near head-on, a slight tilt so the body reads round
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

// a ball drawn as its silhouette toward the camera: filled disk + a shadowed limb
// (a darker inner disk offset toward lower-left) + an ink rim.
function ball(C, r, fill, opacity = 1, rim = 1.0) {
  const rimRing = ring(C, r, BU, BV);
  const dir = unit([-(BU[0] + BV[0]), -(BU[1] + BV[1]), -(BU[2] + BV[2])]);
  const off = [C[0] + 0.15 * r * dir[0], C[1] + 0.15 * r * dir[1], C[2] + 0.15 * r * dir[2]];
  emit(area(...rimRing), { fill, opacity, weight: 0 });
  emit(area(...ring(off, r * 0.82, BU, BV)), { fill: "#25231e", opacity: 0.22 * opacity, weight: 0 });
  if (rim > 0) emit(curve(...rimRing), { color: INK, weight: rim, opacity });
}

// a small filled arrowhead at tip P pointing along world +x (rays travel +x)
function arrowRight(x, y) {
  const ah = 0.17;
  emit(polygon(pt(x, y, 0), pt(x - ah, y + ah * 0.6, 0), pt(x - ah, y - ah * 0.6, 0)), { fill: GOLD, weight: 0 });
}

// a short stop bar perpendicular to the ray, marking where a ray is absorbed
function stopMark(x, y, col) {
  emit(seg(pt(x, y - 0.13, 0), pt(x, y + 0.13, 0)), { color: col, weight: 1.6 });
}

// depth 0..1 (far..near) of an absorber, for size/shade with real z
const nearOf = (z) => (z + 0.9) / 1.8;

// The shared window: a thin rectangle drawn IDENTICALLY in both panels. It is the
// outermost ink in each, so both stages auto-fit and crop to the same box — which
// is the whole point: the body must render at the same size and place in each, or
// the transparent/opaque comparison is not honest. (This is how fig:layers and
// fig:actorsbelow keep their panels consistent; same visual language.)
const FWX = 3.6; // window half-width  (holds the ray bundle, XL..XR)
const FWY = 2.75; // window half-height (holds the flux cue, titles, takeaway)
function windowFrame() {
  const c = [pt(-FWX, -FWY, 0), pt(FWX, -FWY, 0), pt(FWX, FWY, 0), pt(-FWX, FWY, 0)];
  for (let i = 0; i < 4; i++) emit(seg(c[i], c[(i + 1) % 4]), { color: INK, weight: 1.1, opacity: 0.5 });
}

build(() => {
  viewpoint("iso", {
    eye: pt(LOOK[0] + 2.5 * EYEDIR[0], LOOK[1] + 2.5 * EYEDIR[1], LOOK[2] + 2.5 * EYEDIR[2]),
    look: pt(LOOK[0], LOOK[1], LOOK[2]),
  });

  const CAP_Y = -(BR + 0.5); // per-panel label baseline, under the body (inside the window)

  // small "incoming flux" cue at the left, shared framing for both panels
  function fluxLabel() {
    mathbox("\\text{flux}", at(pt(XL, BR + 0.5, 0), "left", "bottom"), { size: 0.34, color: INK });
    arrowRight(XL + 1.0, BR + 0.62);
  }

  // ============================================================ TRANSPARENT
  tag("transparent", { show: "only transparent", caption: "transparent body: sparse absorbers, most rays pass through; the few stopped are stopped independently, deep interior included" }, () => {
    windowFrame();
    fluxLabel();

    // the body outline — faint and dashed: you can see through it
    emit(curve(...ring([0, 0, 0], BR, BU, BV)), { color: INK, weight: 0.9, dash: "5,4", opacity: 0.6 });

    // for each ray, the first (smallest-x) absorber within HITR of its line
    const stops = RAYS.map((y) => {
      let best = null;
      for (const [ax, ay, az] of ABSORBERS) {
        if (Math.hypot(ay - y, az) <= HITR && (best === null || ax < best)) best = ax;
      }
      return best; // x of the stop, or null if the ray passes
    });

    // rays first (so absorbers sit on top of the gold lines)
    RAYS.forEach((y, i) => {
      const xStop = stops[i];
      const xEnd = xStop === null ? XR : xStop;
      emit(seg(pt(XL, y, 0), pt(xEnd, y, 0)), { color: GOLD, weight: 1.5, opacity: 0.95 });
      if (xStop === null) arrowRight(XR, y); // passed clean through — exits the far side
      else stopMark(xStop, y, RED); // absorbed
    });

    // the sparse matter, painted far-to-near so nearer dots overlap
    [...ABSORBERS].sort((a, b) => a[2] - b[2]).forEach(([x, y, z]) => {
      const nr = nearOf(z);
      ball([x, y, z], 0.13 + 0.05 * nr, BALLGRAY, 0.55 + 0.4 * nr, 0.5);
    });

    mathbox("\\text{transparent}", at(pt(0, BR + 0.35, 0), "center", "bottom"), { size: 0.4, color: INK });
    mathbox("\\text{blocking} \\propto \\text{mass}", at(pt(0, CAP_Y, 0), "center", "top"), { size: 0.4, color: INK });
  });

  // ================================================================= OPAQUE
  tag("opaque", { show: "only opaque", caption: "opaque body: same outline packed dense; every ray is stopped at the front face, the interior stands in shadow and contributes nothing" }, () => {
    windowFrame();
    fluxLabel();

    // the body, solid and dark — packed matter; the interior is in shadow
    ball([0, 0, 0], BR, "#403d37", 1, 0);
    // an inner shadow, offset away from the lit front, to read "the far side is dark"
    emit(area(...ring([0.35, -0.1, 0], BR * 0.72, BU, BV)), { fill: "#211f1b", opacity: 0.55, weight: 0 });
    // the SILHOUETTE — the outline that does the blocking — drawn crisp and gold
    emit(curve(...ring([0, 0, 0], BR, BU, BV)), { color: GOLD, weight: 2.0 });

    // every ray stops at the front face: x = −√(BR² − y²) at height y (z = 0)
    RAYS.forEach((y) => {
      const xFront = -Math.sqrt(Math.max(0, BR * BR - y * y));
      emit(seg(pt(XL, y, 0), pt(xFront, y, 0)), { color: GOLD, weight: 1.5, opacity: 0.95 });
      stopMark(xFront, y, RED);
    });

    mathbox("\\text{opaque}", at(pt(0, BR + 0.35, 0), "center", "bottom"), { size: 0.4, color: INK });
    mathbox("\\text{blocking} \\propto \\text{area}", at(pt(0, CAP_Y, 0), "center", "top"), { size: 0.4, color: INK });
  });

  // ---- the two regimes, made falsifiable (§11f) ----------------------------
  // Transparent = the thin limit: blocked fraction ≈ N·s/A, and linear in N.
  check.equal("transparent: thin limit, blocked fraction ∝ N (blocked ≈ N·s/A)", blocked(SA, N_THIN), N_THIN * SA, 2e-4);
  check.equal("transparent: doubling the absorbers doubles the blocking", blocked(SA, 2 * N_THIN), 2 * blocked(SA, N_THIN), 1e-3);
  // Opaque = the thick limit: blocked fraction saturated at ~1, and indifferent to
  // how much more matter is stacked behind — "forgets the count".
  check.equal("opaque: thick limit, blocked fraction saturated near 1", blocked(SA, N_THICK), 1, 0.01);
  check.equal("opaque: tripling the absorbers barely moves the blocking (forgets count)", blocked(SA, 3 * N_THICK), blocked(SA, N_THICK), 1e-3);
});
