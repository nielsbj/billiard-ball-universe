# PROSE_PATCHES_geometry.md — quantization as packing, not resonance (v8)
*For code-claude. Author-requested. Applies on top of fe5b62f. Build-validated: both editions, 0 errors, 0 overfull, **165 pages** (was 164).*

## Why

Niels's observation: the book explains discreteness by *resonance*, but quantization may instead be a matter of tight packing, "where geometry decides what is possible." That is right, and it is a stronger position — it is topological/geometric quantization rather than standing-wave quantization.

Checking it turned up a result that makes the case: the stiffness section's single assumed fact (a circulation carries a fixed quantum) yields **three** quantum relations exactly, with mass and size cancelling in each — p = ℏ/d, L = pd = ℏ, and **E = ℏω/2**. The third is new; I verified it symbolically and numerically (E/ω = ℏ/2 independent of m and r).

## Patch 1 — replace the stiffness section

Replace from `\section{Where the Stiffness Might Come From}` up to (not including) `\section{What That Teaches}` with the full contents of **`SECTION_stiffness.tex`** (v8). Do not retype.

Five paragraphs added before "Two things it does not give". They: gather the three relations from one geometric fact; **openly revise the fourth wound's resonance account** — resonance explains the *likeness* of survivors, packing explains the *lumps*; propose that the gap is therefore the sub-layer's own spacing, making Planck's constant a fact about how tightly the floor below is packed; state the bill (a crystal has axes, and anisotropy is excluded to ~1 part in 10¹⁷ by the Michelson–Morley descendants already cited, so the packing must be glassy — dense and disordered, isotropic on average, which weakens "geometry decides *exactly*"); and leave both accounts standing with the labour divided, "packing for the lumps, resonance for the likeness."

## Patch 2 — forward pointer in the fourth wound

**OLD** (occurs once):
```
Discreteness, exactness, perfect reproducibility: all emerging from a continuous medium, because persistence is an all-or-nothing affair.
```
**NEW:**
```
Discreteness, exactness, perfect reproducibility: all emerging from a continuous medium, because persistence is an all-or-nothing affair.\footnote{A later section of this chapter revises the first of those three. Resonance explains the \emph{likeness} of the survivors very well; the \emph{lumps} themselves, I now think, come from packing rather than from fitting. The division of labour is set out under ``Where the Stiffness Might Come From''.}
```

This keeps the earlier passage honest without rewriting it — the book's standing practice of revising in the open rather than quietly.

## New fact-check rows (add to `TODO.md` as §3D-geometry)

- **E = ℏω/2 from quantized circulation.** Elementary; recompute rather than look up. v = κ/2πr, ω = v/r, E = ½mv², κ = h/m ⟹ E/ω = ℏ/2 exactly. Confirm m and r both cancel. [CC]
- **The anisotropy bound as phrased** — "about a part in a hundred thousand million million million" for direction-dependence of light speed. Check this against `herrmann2009` (the 10⁻¹⁷ rotating-cavity bound already cited in the second wound) and confirm the word-form matches the figure. **If the word-form is off by an order of magnitude, STOP and report.** [CC]
- **"Real glasses are like that"** — dense amorphous packings having a shortest length scale but no preferred direction, isotropic on average. Confirm this is a fair characterisation. [CC]
- **Topological quantization framing** — the passage says a quantity "comes in whole units because a half-unit is not a shape the world has". No citation is offered and none is needed, but confirm the book does not overstate anywhere in the paragraph. [CC]

## After applying
1. `build.bat`; zero errors, zero overfull; one print-edition build; revert the flag.
2. Commit: `ch7: quantization as packing rather than resonance; fourth-wound revised in the open`.
3. Append to `FACTCHECK_REPORT.md`: "New geometry-of-quantization passage; 4 check rows open under TODO §3D-geometry."
