// Charge as circulation — book illustration for "The Billiard Ball Universe"
// (fig:circulation replacement, exports/everything/).
//
// Each charged assembly is a mote circulating a stream of its own substance in
// a plane. Two such assemblies, meeting, interact by the GEOMETRY of their
// streams — not by charge-stuff:
//   - SAME sense   → the facing streams meet head-on, pile up, and press the
//                    assemblies apart: like repels like (RED, outward).
//   - OPPOSITE sense → the facing streams run together and cancel, quieting the
//                    space between: unlike attract (BLUE, inward).
//   - ORTHOGONAL planes → the circulations thread past one another and never
//                    transact: no interaction.
//
// Three steps, ONE camera (export-one-camera-per-scene). Each ball is a
// billboard disk built from the viewpoint's eye vector so it reads as a sphere;
// each circulation ring is sampled in its own tilted plane and SPLIT into a back
// arc (drawn before the ball) and a front arc (after), so the ring passes behind
// and in front of the sphere. Tangent arrowheads on the ring show its sense.

sketch("3D", { yUp: true });
theme("ink");
steps("same", "opposite", "ortho");

const INK = "#222019";
const RED = "#B3432B"; // repulsion (energy)
const BLUE = "#2E5A78"; // attraction (momentum / gravity)
const BALLGRAY = "#55534c";
const STREAM = "#6b6960"; // the circulating stream (neutral, reads in grayscale)

// ---- the one camera, and vector helpers for billboards -------------------
const LOOK = [0, 0, 0];
const EYEDIR = [-1.4, 1.5, 6.0]; // eye = LOOK + k·EYEDIR
const norm = (v) => Math.hypot(v[0], v[1], v[2]);
const unit = (v) => { const n = norm(v); return [v[0] / n, v[1] / n, v[2] / n]; };
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const add = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
const scl = (a, s) => [a[0] * s, a[1] * s, a[2] * s];
const E = unit(EYEDIR); // toward the eye
const BU = unit(cross([0, 1, 0], E)); // billboard basis: right
const BV = cross(E, BU); //                  up

const R = 1.15; // circulation ring radius
const RHO = 0.42; // mote-ball radius
const XOFF = 2.35; // ball centres at ±XOFF

// point on a ring around C, radius r, plane spanned by (u,v), at angle a
const ringPt = (C, r, u, v, a) =>
  add(C, add(scl(u, r * Math.cos(a)), scl(v, r * Math.sin(a))));

// a ball drawn as its silhouette toward the camera: filled disk + shaded limb + rim
function ball(C, r, fill) {
  const rim = [];
  for (let i = 0; i <= 40; i++) rim.push(pt(...ringPt(C, r, BU, BV, (2 * Math.PI * i) / 40)));
  const dir = unit([-(BU[0] + BV[0]), -(BU[1] + BV[1]), -(BU[2] + BV[2])]);
  const off = add(C, scl(dir, 0.14 * r));
  const inner = [];
  for (let i = 0; i <= 40; i++) inner.push(pt(...ringPt(off, r * 0.84, BU, BV, (2 * Math.PI * i) / 40)));
  emit(area(...rim), { fill, opacity: 1, weight: 0 });
  emit(area(...inner), { fill: "#25231e", opacity: 0.22, weight: 0 });
  emit(curve(...rim), { color: INK, weight: 1.1 });
}

// A circulation ring around C in the plane (u,v). `sense` = +1 / -1 sets the
// direction of travel. The ring is split at the two angles where it crosses the
// camera's line of sight through C, so the near half (toward the eye) is the
// FRONT arc and the far half is the BACK arc. Returns { back, front, tangents }
// where drawArc(seg) renders it; caller emits back → ball → front.
function circulation(C, u, v, sense, headColor = STREAM) {
  // depth of a ring point toward the eye: dot(point-C, E) = r(cosa·(u·E)+sina·(v·E))
  const ue = dot(u, E), ve = dot(v, E);
  const aFront = Math.atan2(ve, ue); // angle of maximum depth toward the eye
  const N = 96;
  const sample = (a0, a1) => {
    const out = [];
    const steps = Math.max(2, Math.round((Math.abs(a1 - a0) / (2 * Math.PI)) * N));
    for (let i = 0; i <= steps; i++) {
      const a = a0 + (a1 - a0) * (i / steps);
      out.push(pt(...ringPt(C, R, u, v, a)));
    }
    return out;
  };
  // Split cleanly into two halves at aFront and aFront+π; classify by depth.
  const half1 = sample(aFront, aFront + Math.PI);
  const half2 = sample(aFront + Math.PI, aFront + 2 * Math.PI);
  // half2 spans aFront+π..aFront+2π — its midpoint aFront+1.5π; depth there:
  const depthMid = (a) => R * (Math.cos(a) * ue + Math.sin(a) * ve);
  const frontHalf = depthMid(aFront + Math.PI / 2) > depthMid(aFront + 1.5 * Math.PI) ? half1 : half2;
  const backHalf = frontHalf === half1 ? half2 : half1;

  const drawArc = (arr, w, op = 1) => emit(curve(...arr), { color: STREAM, weight: w, opacity: op });

  // tangent arrowheads showing the sense: short arrows along the direction of
  // travel at a few angles, placed on the FRONT half so they read clearly.
  const arrowAt = (a, color) => {
    const p = ringPt(C, R, u, v, a);
    // tangent direction of travel at angle a for sense s: d/da (cos,sin) = (-sin,cos)
    const t = add(scl(u, -Math.sin(a) * sense), scl(v, Math.cos(a) * sense));
    const tu = unit(t);
    const p0 = add(p, scl(tu, -0.16));
    const p1 = add(p, scl(tu, 0.16));
    emit(arrow(pt(...p0), pt(...p1)), { color, weight: 1.4, head: "filled" });
  };

  return { backHalf, frontHalf, drawArc, arrowAt, aFront };
}

// Draw one assembly: back arc, ball, front arc, and `nHeads` tangent arrowheads.
function assembly(C, u, v, sense, headColor) {
  const c = circulation(C, u, v, sense, headColor);
  c.drawArc(c.backHalf, 0.8, 0.6);
  ball(C, RHO, BALLGRAY);
  c.drawArc(c.frontHalf, 1.8, 1.0);
  // arrowheads at three evenly spaced angles, but favour the front half
  const angs = [c.aFront + Math.PI * 0.5, c.aFront + Math.PI * 0.85, c.aFront + Math.PI * 1.15];
  for (const a of angs) c.arrowAt(a, headColor);
  return c;
}

build(() => {
  viewpoint("iso", {
    eye: pt(LOOK[0] + 2.6 * EYEDIR[0], LOOK[1] + 2.6 * EYEDIR[1], LOOK[2] + 2.6 * EYEDIR[2]),
    look: pt(LOOK[0], LOOK[1], LOOK[2]),
  });

  const LC = [-XOFF, 0, 0];
  const RC = [XOFF, 0, 0];
  const capY = -(R + 1.15);

  // A tilted plane for the circulation ring: the ring lies mostly in the x-y
  // screen plane but is TIPPED strongly toward the viewer about the horizontal
  // axis, so it reads unmistakably as a 3-D circle seen in perspective (its top
  // edge recedes, its bottom edge comes forward toward the eye). u along a
  // slightly rolled "horizontal", v the tipped "vertical".
  const roll = 0.14;
  const tip = 0.95; // radians the disc is tipped about u toward the eye
  const tiltU = unit([Math.cos(roll), Math.sin(roll), 0]);
  // v: start from the in-plane "up", then rotate it out of screen toward the eye
  const upBase = unit(cross([0, 0, 1], tiltU)); // ≈ +y
  const tiltV = unit(add(scl(upBase, Math.cos(tip)), scl(E, Math.sin(tip))));

  // ---------- (i) SAME sense ----------
  tag("same", {
    show: "only same",
    caption: "same sense: the facing streams meet head-on — they pile up and press the assemblies apart, so like repels like",
  }, () => {
    assembly(LC, tiltU, tiltV, +1, STREAM);
    assembly(RC, tiltU, tiltV, +1, STREAM);
    // in the gap: two SHORT opposed arrows meeting tip-to-tip (clash)
    emit(arrow(pt(-0.55, 0.5, 0.2), pt(-0.12, 0.5, 0.2)), { color: INK, weight: 1.6, head: "filled" });
    emit(arrow(pt(0.55, -0.5, 0.2), pt(0.12, -0.5, 0.2)), { color: INK, weight: 1.6, head: "filled" });
    mathbox("\\times", at(pt(0, 0, 0.3), "center", "center"), { size: 0.7, color: INK });
    // RED outward net-force arrows on each ball
    emit(arrow(pt(-XOFF - RHO - 0.15, 0, 0), pt(-XOFF - RHO - 1.05, 0, 0)), { color: RED, weight: 2.2, head: "filled" });
    emit(arrow(pt(XOFF + RHO + 0.15, 0, 0), pt(XOFF + RHO + 1.05, 0, 0)), { color: RED, weight: 2.2, head: "filled" });
    mathbox("\\text{repel}", at(pt(0, capY + 0.55, 0), "center", "center"), { size: 0.42, color: RED });
  });

  // ---------- (ii) OPPOSITE sense ----------
  tag("opposite", {
    show: "only opposite",
    caption: "opposite sense: the facing streams run together and cancel — the space between goes quiet and the assemblies are drawn together, so unlike attract",
  }, () => {
    assembly(LC, tiltU, tiltV, +1, STREAM);
    assembly(RC, tiltU, tiltV, -1, STREAM);
    // quiet corridor between them: a faint blue wash (FLAT polygon)
    emit(polygon(pt(-0.42, -0.75, 0.15), pt(0.42, -0.75, 0.15), pt(0.42, 0.75, 0.15), pt(-0.42, 0.75, 0.15)),
      { fill: BLUE, opacity: 0.12, weight: 0 });
    // two SHORT parallel gap arrows (streams align)
    emit(arrow(pt(-0.16, -0.55, 0.2), pt(-0.16, 0.55, 0.2)), { color: INK, weight: 1.5, head: "filled" });
    emit(arrow(pt(0.16, -0.55, 0.2), pt(0.16, 0.55, 0.2)), { color: INK, weight: 1.5, head: "filled" });
    // BLUE inward net-force arrows on each ball
    emit(arrow(pt(-XOFF - RHO - 1.05, 0, 0), pt(-XOFF - RHO - 0.15, 0, 0)), { color: BLUE, weight: 2.2, head: "filled" });
    emit(arrow(pt(XOFF + RHO + 1.05, 0, 0), pt(XOFF + RHO + 0.15, 0, 0)), { color: BLUE, weight: 2.2, head: "filled" });
    mathbox("\\text{attract}", at(pt(0, capY + 0.55, 0), "center", "center"), { size: 0.42, color: BLUE });
  });

  // ---------- (iii) ORTHOGONAL planes ----------
  tag("ortho", {
    show: "only ortho",
    caption: "orthogonal planes: one circulation faces you, the other turns edge-on — the streams thread past one another and never meet, so there is no interaction",
  }, () => {
    // LEFT: ring roughly FACE-ON to the viewer (its normal ≈ toward the eye)
    // build a basis in the plane perpendicular to E
    const fU = BU, fV = BV;
    assembly(LC, fU, fV, +1, STREAM);
    // RIGHT: ring nearly EDGE-ON — plane normal ≈ perpendicular to E, in-screen.
    // Put the plane spanned by (E-ish, vertical): so we see it edge-on.
    const eU = unit(add(scl(E, 0.9), [0, 0, 0])); // toward eye ⇒ edge-on
    const eV = [0, 1, 0];
    assembly(RC, unit(cross(eV, cross(E, eV))), eV, +1, STREAM);
    // the two ring normals are orthogonal — a small gray ⟂ between them
    mathbox("\\perp", at(pt(0, 0.15, 0), "center", "center"), { size: 0.55, color: BALLGRAY });
  });

  // ---------- the facts ----------
  // In the ortho step the two circulation-plane normals are perpendicular.
  const faceNormal = E; // face-on ring: normal along the eye direction
  const edgeU = unit(cross([0, 1, 0], cross(E, [0, 1, 0])));
  const edgeNormal = unit(cross(edgeU, [0, 1, 0])); // edge-on ring normal
  // perpendicular by construction (edgeNormal ⟂ both edgeU and y; the eye
  // direction E splits into an edgeU part and a y part, each ⟂ edgeNormal), so
  // the dot is exactly 0 — a tight tolerance, not the loose 0.05 that would have
  // waved through a several-degree error.
  check.equal("orthogonal step: ring-plane normals are perpendicular (n·n = 0)", dot(faceNormal, edgeNormal), 0, 1e-9);
});
