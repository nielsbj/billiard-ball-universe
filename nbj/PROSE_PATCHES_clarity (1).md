# PROSE_PATCHES_clarity.md — Sixth Wound rewritten; area-law dissolved (v5)
*For code-claude. Author-requested. Applies on top of v4. Build-validated: both editions, 0 errors, 0 overfull, **157 pages** (unchanged).*

## Why

Two author instructions. (1) The Sixth Wound was hard to follow — it needed to be set out step by step. (2) The author observed that black-hole entropy is tied to the **horizon**, which is where our *light* stops, and that this is demonstrably **not where the collapsed body is** — so the area law may be an artefact of description, like the Gibbs paradox, rather than a debt the tower owes.

That observation is right and it simplifies the chapter. The consequence: **the entropy question leaves the Sixth Wound entirely.** The wound is now purely about gravity — does dense matter stay transparent to the crowd? — which is one question with one answer, instead of two entangled ones. The area law is handled where it belongs, in the collapse section, and is dissolved rather than paid.

## Patch 1 — replace the Sixth Wound section wholesale

Replace everything from
```
\section{Sixth Wound: The Saturated Shadow}
```
up to (but **not** including)
```
\section{The State of the Wounds}
```
with the full contents of **`SECTION_sixthwound.tex`** (v5). Do not retype.

The section is now a stepwise argument: (i) the shadow push needs matter to be nearly transparent, and why — with the transparent/opaque regimes named explicitly and the requirement stated in italics; (ii) the requirement is verified for ordinary matter and, via binary-pulsar timing, up to nuclear density; (iii) the open question is whether it survives collapse; (iv) if not, the corrected arithmetic (horizon is not the shielding surface; body radius as the cube root; silhouette as the two-thirds power; ~75× and ~1000×); (v) the observational test restated as *consistency* of independently measured masses; (vi) the wound stated in three plain sentences; (vii) the best reply (a horizon is our layer's optical fact, not the crowd's); (viii) its price — transparency is *assumed* exactly where nothing can be measured, and the toy acquires a hidden number; (ix) what would settle it.

**Removed from the section:** all entropy material, and the "pincer / second charge" framing. With entropy gone the wound has one horn, not two, which is the point of the rewrite.

## Patch 2 — `tab:wounds`, sixth row

**OLD:**
```
the saturated shadow & a horizon is our layer's optical fact, not the crowd's: collapsed bodies may trap light and still pass the rain & then the area law keeps only its bookkeeping account; and the shell, growing as $M^{2/3}$, cannot supply a law that grows as $M^{2}$ & the massion's stopping chance: transparency is verified to neutron-star density --- where, if anywhere, does the shadow saturate? \\
```
**NEW:**
```
the saturated shadow & a horizon is our layer's optical fact, not the crowd's: a collapsed body may trap light and still pass the rain & transparency is \emph{assumed} exactly where it cannot be measured --- a hidden number, small because the toy needs it & the massion's stopping chance: verified to nuclear density; where, if anywhere, does the shadow saturate? \\
```

## Patch 3 — research problem six

**OLD:**
```
Sixth: fix the massion's stopping chance per unit of matter and find the density at which the shadow saturates, given that transparency is already verified through neutron-star densities by the timing of binary pulsars --- showing either that saturation lies far beyond even collapsed matter, which saves the proportionality to mass and costs the area law its mechanical account, or that it does not, in which case the gravity of collapsed bodies must be shown to track their mass rather than their silhouette.
```
**NEW:**
```
Sixth: fix the massion's stopping chance per unit of matter and find the density at which the shadow saturates --- transparency being already verified through nuclear densities by the timing of binary pulsars --- and show either that saturation lies far beyond even collapsed matter, together with a reason why the number should be so small, or that it does not, in which case the gravity of collapsed bodies must somehow be made to track their mass rather than their outline.
```

## Patch 4 — replace the collapse section wholesale

Replace everything from
```
\section{The Ladder Under Load: What a Star Does When It Loses}
```
up to (but **not** including)
```
\section{What That Teaches}
```
with the full contents of **`SECTION_collapse.tex`** (v5). Do not retype.

Changed: only the invoice's second item, now five paragraphs instead of two. The area law is dissolved rather than paid — the horizon is where our light stops, not where the body is, so an area law is what layer-indexed entropy *must* give at a censored boundary; the parallel to the Gibbs paradox (already introduced and closed in this chapter's entropy section) is drawn explicitly; the tower is shown to have room for both counts, ours and the interior's, at their own layers; the contrary reading (black-hole entropy as a census of real interior states) is acknowledged as a live position that would put the tower back in debt; and the author's own shielding idea is explicitly retired from entropy duty, surviving only as the hazard the Sixth Wound describes.

## Fact-check rows — one change, one addition

In `TODO.md` §3D-sixthwound, **delete** the row about black-hole entropy scaling as M² versus a shell as M^(2/3) (that comparison no longer appears anywhere in the book). **Add:**
- **The Gibbs paradox as characterised** — "the entropy of mixing appears or vanishes according to whether the experimenter can tell the gases apart." This wording already exists in the entropy section and is cited to `jaynes1965`; confirm the new collapse-section restatement doesn't overreach beyond it. [CC]
- **"Not everyone reads black-hole entropy this way"** — the book acknowledges programmes that read it as a count of real interior states. Confirm this is a fair characterisation (string-theoretic microstate counting is the obvious referent). If a citation would help, propose one and report; **do not add one unprompted.** [CC]

## Patch 5 — terminology (author correction)

The Sixth Wound must not call gravity's flux "the crowd." Two reasons, both the author's: it presumes an interpretation of what massions are, and there are *many* crowds — one per layer — so the bare phrase is imprecise. These are folded into `SECTION_sixthwound.tex` and `SECTION_collapse.tex` (v5.1) already; the table row is separate:

**OLD:** `the saturated shadow & a horizon is our layer's optical fact, not the crowd's:`
**NEW:** `the saturated shadow & a horizon is our layer's optical fact, not the massions':`

Inside the fragments: the wound's central statement now reads "The shadow push requires matter to be **at least** nearly transparent to **gravity's massions**"; the best reply now reads "The massions are not our light. They belong to **a** layer below ours…"; and the retired shielding sentence now says "the massions themselves stopped at the body's surface."

**Scope note:** "crowd" is left untouched elsewhere (121 uses). It remains correct where the book means the sub-layer population whose *structure* carries waves — the second wound, the light section, the rain-and-song figure. Only the gravity-flux usages inside the sixth wound were imprecise.

## Patch 6 — Dictionary entry for the book's own coined word

`massion` is coined in Chapter 6 and used thirteen times but has **no Dictionary entry**. Insert **before** `\paragraph{Michelson--Morley experiment.}`:

```
\paragraph{Massion.} The word this book's original notes coined for the small, fast particles whose streaming makes gravity: they arrive from every direction at once, and bodies are pushed together by the shadows they cast in one another's supply. Nothing in the name settles what a massion is made of, which layer it belongs to, or whether it is the same population whose structure carries light.

```

The final sentence is deliberate: it refuses the interpretation the author objected to.

## After applying
1. `build.bat`; zero errors, zero overfull; one print-edition build; revert the flag.
2. Sweep: `findstr /C:"twice over" billiard_ball_universe.tex` should return exactly one hit — "the sky demonstrates twice over", which is correct (two observed rungs). `findstr /C:"hundreds of thousands" /C:"square of its mass"` must return nothing.
3. Commit: `ch7: rewrite the sixth wound stepwise; dissolve the area law as a Gibbs-type artefact`.
