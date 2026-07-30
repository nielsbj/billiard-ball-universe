// The inverse square from shadow geometry — book illustration for
// "The Billiard Ball Universe" (fig:inversesquare replacement, exports/everything/).
//
// A test body sits at the centre of its SKY — the sphere of directions the
// corpuscle rain arrives from. A neighbour ball at distance d blocks the cone
// of directions behind it: a small cap of the sky, of half-angle α = asin(ρ/d).
// Move the neighbour to 2d and the cap's angular WIDTH halves — its AREA (the
// count of blocked directions, the solid angle) drops to a quarter. That is
// the inverse square, read straight off the geometry of shadows.
//
// Two steps, one camera (export-one-camera-per-scene): near (distance d) and
// far (distance 2d). Balls and the sky silhouette are billboard rings built
// from the viewpoint's own eye vector, so they read as spheres from the
// exported camera.

sketch("3D", { yUp: true });
theme("ink");
steps("near", "far");

const INK = "#222019";
const GOLD = "#C08A2D"; // the rain / blocked cone (book accent: light & depletion)
const RED = "#B3432B"; // the blocked cap (book accent: energy & repulsion)
const BALLGRAY = "#55534c";

const R = 1.6; // sky (direction) sphere radius
const RHO = 1.2; // neighbour ball radius
const D1 = 3.2; // near distance
const D2 = 6.4; // far distance = 2d

// ---- the one camera, and vector helpers for billboards -------------------
const LOOK = [3.0, 0, 0];
const EYEDIR = [-2.2, 1.6, 6.0]; // eye = LOOK + k·EYEDIR
const norm = (v) => Math.hypot(v[0], v[1], v[2]);
const unit = (v) => { const n = norm(v); return [v[0] / n, v[1] / n, v[2] / n]; };
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const E = unit(EYEDIR); // global view vector — used only for the flat wash orientation
const EYE = [LOOK[0] + 2.4 * EYEDIR[0], LOOK[1] + 2.4 * EYEDIR[1], LOOK[2] + 2.4 * EYEDIR[2]];

// Camera-facing silhouette of a sphere (centre C, radius r) under the PERSPECTIVE
// export camera. A billboard built from the constant EYEDIR is ~11° off for a
// sphere the camera is not looking straight at (it looks at LOOK, not the origin),
// which tilts the drawn outline. For the origin-centred sky that let the equator
// great circle poke OUTSIDE the silhouette — two crossings on one side, a tangent
// touch on the other. The exact fix is the sphere's horizon circle: a basis ⟂ the
// TRUE C→eye direction, retracted r²/dist toward the eye, radius r·√(dist²−r²)/dist.
// Used for the sky outline AND every ball, so no billboard is drawn from a stale
// global vector and the equator reads tangent-inside, as a sphere must.
function silhouette(C, r) {
  const toEye = [EYE[0] - C[0], EYE[1] - C[1], EYE[2] - C[2]];
  const dist = norm(toEye);
  const n = unit(toEye);
  const u = unit(cross([0, 1, 0], n)); // silhouette basis: right
  const v = cross(n, u); //                          up
  const rs = (r * Math.sqrt(dist * dist - r * r)) / dist; // horizon radius
  const c = [C[0] + n[0] * (r * r / dist), C[1] + n[1] * (r * r / dist), C[2] + n[2] * (r * r / dist)];
  return { c, rs, u, v }; // horizon centre (retracted toward eye), radius, and in-plane basis
}

// tangent ring of the blocked cone — where the silhouette generators graze the
// ball. SHARED by panel() (which draws it) and the tangency check below, so the
// two can never drift apart: the check tests exactly the geometry that is drawn.
const tangentRing = (d) => ({
  axial: d - (RHO * RHO) / d,                       // ring centre along the cone axis
  radius: (RHO * Math.sqrt(d * d - RHO * RHO)) / d, // ring radius
});

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
  const { c: sc, rs, u, v } = silhouette(C, r); // camera-facing outline, per-centre
  const rim = ring(sc, rs, u, v);
  const dir = unit([-(u[0] + v[0]), -(u[1] + v[1]), -(u[2] + v[2])]);
  const off = [sc[0] + 0.14 * rs * dir[0], sc[1] + 0.14 * rs * dir[1], sc[2] + 0.14 * rs * dir[2]];
  emit(area(...rim), { fill, opacity: 1, weight: 0 });
  emit(area(...ring(off, rs * 0.84, u, v)), { fill: "#25231e", opacity: 0.22, weight: 0 });
  emit(curve(...rim), { color: INK, weight: 1.1 });
}

// one panel: the sky sphere at O, the neighbour at distance d, the blocked cone + cap
function panel(d) {
  const alpha = Math.asin(RHO / d); // half-angle of the blocked cone
  const AX = [1, 0, 0]; // cone axis
  // basis perpendicular to the axis (for cap + tangent rings)
  const P = [0, 1, 0], Q = [0, 0, 1];

  // ---- the sky: dashed silhouette + dashed equator, a sphere of directions
  const sky = silhouette([0, 0, 0], R);
  emit(curve(...ring(sky.c, sky.rs, sky.u, sky.v)), { color: INK, weight: 0.9, dash: "5,4", opacity: 0.75 });
  emit(curve(...ring([0, 0, 0], R, AX, Q)), { color: INK, weight: 0.7, dash: "3,4", opacity: 0.45 });

  // ---- the blocked cone: apex at the test body, out along the tangents to the ball
  const { axial: tAxial, radius: tRad } = tangentRing(d); // the drawn tangent ring
  const capC = [R * Math.cos(alpha), 0, 0];
  const capR = R * Math.sin(alpha);
  // the wash is drawn FLAT, spanning the silhouette generators (a revolved band
  // would self-overlap in projection and even-odd-cancel to nothing):
  // denser for the lost-direction bundle inside the sky, lighter out to the ball
  const W = unit(cross(E, AX));
  const capS = (s) => pt(capC[0] + s * capR * W[0], s * capR * W[1], s * capR * W[2]);
  const tanS = (s) => pt(tAxial + s * tRad * W[0], s * tRad * W[1], s * tRad * W[2]);
  emit(polygon(pt(0, 0, 0), capS(1), capS(-1)), { fill: GOLD, opacity: 0.3, weight: 0 });
  emit(polygon(capS(1), tanS(1), tanS(-1), capS(-1)), { fill: GOLD, opacity: 0.14, weight: 0 });
  // silhouette generators, extended a touch past tangency so they read as grazing
  const ext = (tAxial + 0.18 * RHO) / tAxial;
  for (const s of [1, -1]) {
    emit(seg(pt(0, 0, 0), pt(tAxial * ext, s * ext * tRad * W[1], s * ext * tRad * W[2])), { color: GOLD, weight: 1.0 });
  }

  // ---- the blocked cap: where the cone crosses the sky — the count of lost directions
  const capRow = ring(capC, capR, P, Q, 40);
  emit(area(...capRow), { fill: RED, opacity: 0.35, weight: 0 });
  emit(curve(...capRow), { color: RED, weight: 1.5 });

  // ---- the bodies
  ball([d, 0, 0], RHO, BALLGRAY); // the neighbour
  ball([0, 0, 0], 0.16, INK); // the test body

  // ---- the distance, centre to centre, measured under the figure
  const yM = -(R + 0.7);
  emit(seg(pt(0, yM, 0), pt(d, yM, 0)), { color: INK, weight: 0.7 });
  for (const x of [0, d]) emit(seg(pt(x, yM - 0.12, 0), pt(x, yM + 0.12, 0)), { color: INK, weight: 0.9 });
  return alpha;
}

build(() => {
  viewpoint("iso", {
    eye: pt(LOOK[0] + 2.4 * EYEDIR[0], LOOK[1] + 2.4 * EYEDIR[1], LOOK[2] + 2.4 * EYEDIR[2]),
    look: pt(LOOK[0], LOOK[1], LOOK[2]),
  });

  let a1 = 0, a2 = 0;
  tag("near", { show: "only near", caption: "At distance d the neighbour blocks a cap of the sky of half-angle α = asin(ρ/d) — the red patch of lost directions" }, () => {
    a1 = panel(D1);
    mathbox("d", at(pt(D1 / 2, -(R + 1.15), 0), "center", "center"), { size: 0.5 });
    // label well clear of the cone, with a leader down to the cap rim
    mathbox("\\text{the blocked patch}", at(pt(-0.4, R + 1.05, 0), "center", "bottom"), { size: 0.38, color: RED });
    const capTop = [R * Math.cos(a1), R * Math.sin(a1), 0];
    emit(seg(pt(0.15, R + 0.95, 0), pt(capTop[0] - 0.08, capTop[1] + 0.1, 0)), { color: RED, weight: 0.6, opacity: 0.7 });
  });

  tag("far", { show: "only far", caption: "At distance 2d the cap has half the angular width — a quarter of the directions. Solid angle falls as 1/d²: the inverse square, from shadows alone" }, () => {
    a2 = panel(D2);
    mathbox("2d", at(pt(D2 / 2, -(R + 1.15), 0), "center", "center"), { size: 0.5 });
  });

  // ---- the facts: tangency, and the quarter (exact as ρ/d → 0)
  const cap = (a) => 2 * Math.PI * (1 - Math.cos(a)); // solid angle of the cap
  // The silhouette generator is truly TANGENT: at the grazing point T the ray
  // O→T (from the test body at the origin) meets the ball's radius C→T (C at the
  // ball centre (D1,0)) at a right angle, so OT·CT = 0. This reads the DRAWN ring
  // (tangentRing) — a wrong placement formula fails it. The old form,
  // (D1²−ρ²)+ρ² = D1², was an identity true for any input and tested nothing.
  const { axial: tA, radius: tR } = tangentRing(D1);
  check.equal("tangent: generator ⟂ ball radius at the grazing point (OT·CT = 0)", tA * (tA - D1) + tR * tR, 0, 1e-9);
  check.equal("half-angle halves (small-angle): α(2d) ≈ α(d)/2", Math.asin(RHO / D2), Math.asin(RHO / D1) / 2, 0.02);
  // ≈¼ is a genuine approximation (exact only as ρ/d→0); at ρ/d≈0.375 the true
  // ratio is 0.243, so the tolerance is the approximation's honest slack, not a
  // fudge tuned to just pass.
  check.equal("blocked sky at 2d ≈ one quarter (→ exact as ρ/d→0)", cap(Math.asin(RHO / D2)) / cap(Math.asin(RHO / D1)), 0.25, 0.02);
});
