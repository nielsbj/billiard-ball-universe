# PROSE_PATCHES_scaling.md — corrected scaling in the Sixth Wound (v4)
*For code-claude. Author-caught physics error; author-approved correction. Applies on top of v3 (HEAD after the collapse drop). Build-validated: both editions, 0 errors, 0 overfull, **157 pages** (was 155).*

## Why

The Sixth Wound as shipped in v3 argued that an opaque collapsed body's silhouette grows as the **square** of its mass, giving a discrepancy of "hundreds of thousands." That used the Schwarzschild relation (radius ∝ mass), which describes a **horizon**, in an argument about shielding, which is done by **matter**. Niels caught it: we live in three dimensions, so a body at characteristic density has radius ∝ M^(1/3) and silhouette ∝ M^(2/3).

The wound survives — it is now a divergence going as the cube root of the mass ratio: a factor of ~75 between a ten-solar-mass hole and Sgr A*, ~1000 across the observed range. Two things improve: the argument becomes one about *consistency* of independently measured masses, and the wound reframes as a question about **density**, with binary-pulsar timing already verifying transparency to ~4×10¹⁷ kg/m³.

It also charges the author's shielding account of the area law a second time: black-hole entropy goes as horizon area (∝ M²), while a shell at the body's own surface goes as M^(2/3) — different laws.

## Patch 1 — replace the Sixth Wound section wholesale

Simplest and safest, since three separate paragraphs changed. Replace the **entire** section, from the line

```
\section{Sixth Wound: The Saturated Shadow}
```

up to (but **not** including)

```
\section{The State of the Wounds}
```

with the full contents of the companion file **`SECTION_sixthwound.tex`** (v4). Do not retype it.

Changed inside that section: the arithmetic paragraph (now two paragraphs: the horizon-density argument for why the horizon is the wrong surface, then the corrected cube-root/two-thirds arithmetic with the 75 and 1000 figures and the consistency argument); a new paragraph reframing the wound as a density question with the pulsar bound; a sentence added to the "best reply" paragraph recording the second charge on the shielding account; and the pincer-summary sentence, whose stale "hundreds of thousands" is now "a factor of a thousand across the observed holes."

## Patch 2 — `tab:wounds`, sixth row

**OLD:**
```
the saturated shadow & a horizon is our layer's optical fact, not the crowd's: collapsed bodies may trap light and still pass the rain & then the area law for black-hole entropy keeps only its bookkeeping account, not its mechanical one & the massion's stopping chance: at what density does the shadow saturate? \\
```
**NEW:**
```
the saturated shadow & a horizon is our layer's optical fact, not the crowd's: collapsed bodies may trap light and still pass the rain & then the area law keeps only its bookkeeping account; and the shell, growing as $M^{2/3}$, cannot supply a law that grows as $M^{2}$ & the massion's stopping chance: transparency is verified to neutron-star density --- where, if anywhere, does the shadow saturate? \\
```

## Patch 3 — research problem six

**OLD:**
```
Sixth: fix the massion's stopping chance per unit of matter, and find the density at which the shadow saturates --- showing either that saturation lies far beyond collapsed matter, which saves the proportionality to mass and costs the mechanical account of the area law, or that it does not, in which case the gravity of black holes must be shown to track their mass and not their silhouette.
```
**NEW:**
```
Sixth: fix the massion's stopping chance per unit of matter and find the density at which the shadow saturates, given that transparency is already verified through neutron-star densities by the timing of binary pulsars --- showing either that saturation lies far beyond even collapsed matter, which saves the proportionality to mass and costs the area law its mechanical account, or that it does not, in which case the gravity of collapsed bodies must be shown to track their mass rather than their silhouette.
```

## Patch 4 — the Ladder section's shielding item

Replace the whole section as well (safest), from `\section{The Ladder Under Load` up to but not including `\section{What That Teaches}`, with the companion **`SECTION_collapse.tex`** (v4). One sentence changed: the shielding account is now charged "twice over," adding that a shell sized by the body rather than the horizon grows too slowly to give an area law of the observed shape, and closing "it will not be had cheaply."

## New fact-check rows (add to `TODO.md` §3D-sixthwound, replacing the M² row)

- **Mean density inside a Schwarzschild horizon falls as M⁻².** Check the three figures as stated: ~nuclear density at 10 M☉; near that of a heavy oil at Sgr A* (~10⁶ kg/m³); thinner than room air at 10¹⁰ M☉ (~0.18 kg/m³). Arithmetic is elementary — recompute rather than look up. [CC]
- **The 75× and 1000× figures.** Cube root of (4.3×10⁵) ≈ 75; cube root of 10⁹ = 1000. Confirm the Sgr A* mass (~4.3×10⁶ M☉) and that "the whole observed range of holes" spanning ~10 to ~10¹⁰ M☉ is fair. [CC]
- **Binary-pulsar transparency bound.** The claim is that pulsar timing verifies gravity tracking mass at neutron-star densities, ~4×10¹⁷ kg/m³. **Where:** the Hulse–Taylor and double-pulsar (J0737−3039) timing papers; Kramer et al. 2021 is the current precision reference. Check the density figure and that the inference (gravity tracks mass at that density) is fairly stated — **if the framing overreaches, STOP and report.** [CC]
- **White dwarfs shrink as they gain mass.** Standard (R ∝ M^(−1/3) for non-relativistic degenerate matter); confirm the statement as phrased. [CC]

## After applying
1. `build.bat`; zero errors, zero overfull; one print-edition build; revert the flag.
2. **Sweep for stale figures:** `findstr /C:"hundreds of thousands" /C:"square of its mass" billiard_ball_universe.tex` must return nothing.
3. Commit: `ch7: correct the sixth wound's scaling (silhouette ~ M^2/3, not M^2) — author-caught`.
4. Append to `FACTCHECK_REPORT.md`: "Sixth Wound scaling corrected; 4 new check rows open under TODO §3D-sixthwound."
