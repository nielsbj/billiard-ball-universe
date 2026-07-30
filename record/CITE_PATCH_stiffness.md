# CITE_PATCH_stiffness.md — the stiffness section has no citations
*For code-claude. Written fresh, not derived from any earlier patch (per the new §9(8)). Found by auditing the uploaded masters rather than assuming — this one had gone quiet.*

## The gap

The stiffness section, *Where the Stiffness Might Come From*, is **17,315 characters — the longest section in Chapter 7 — and carries zero `\cite` calls.** Seven verified entries sit in `ref.bib` specifically for it and none is referenced:

`onsager1949`, `feynman1955`, `vinen1961`, `shin2004`, `finkelstein1968`, `skyrme1962`, `witten1983`

All seven have cleared the fact-check (no live VERIFY flags anywhere in the bibliography). They were added *uncited by design*, pending verification; verification cleared them; the follow-up citation pass was never run. As things stand, none of them will appear in References, and the most technically unfamiliar section in the book is unsourced.

For contrast, the neighbouring sections are fine: the ladder carries four, the dark-matter section four, the sixth wound one.

## Five placements

Each OLD string below occurs exactly once. Where a claim rests on two sources, both are cited together, matching the `oppenheimervolkoff1939,ligo2017` pattern already used in the ladder section.

**1 — the quantum of circulation.** Two sources because priority is genuinely tangled and your earlier run advised reporting rather than asserting it; citing both states the record without adjudicating it.

OLD:
```
It is \emph{exactly} the same: a fixed quantum, $\kappa = h/m$, about a ten-millionth of a square metre per second in helium, with $h$ Planck's constant and $m$ the mass of one atom.
```
NEW:
```
It is \emph{exactly} the same: a fixed quantum, $\kappa = h/m$, about a ten-millionth of a square metre per second in helium, with $h$ Planck's constant and $m$ the mass of one atom~\cite{onsager1949,feynman1955}.
```

**2 — that it was measured, not merely proposed.** `vinen1961` is the detection, and the sentence it belongs to is the one asserting exactness.

OLD:
```
You cannot have two thirds of a vortex.
```
NEW:
```
You cannot have two thirds of a vortex, and the quantum has been measured directly~\cite{vinen1961}.
```
*(This adds five words of prose. If Niels would rather not have the clause, the alternative is to attach `vinen1961` to placement 1 as a third key and leave the sentence alone — your call to raise with him, not to decide.)*

**3 — the lattice and its spacing.**

OLD:
```
they arrange themselves into a lattice with a definite spacing, set by how hard you are rotating.
```
NEW:
```
they arrange themselves into a lattice with a definite spacing, set by how hard you are rotating~\cite{feynman1955}.
```

**4 — the observed splitting.** This is the section's strongest empirical claim and currently its least supported.

OLD:
```
Which is exactly what doubly-quantized vortices are observed to do.
```
NEW:
```
Which is exactly what doubly-quantized vortices are observed to do~\cite{shin2004}.
```

**5 — fermions from a bosonic medium.** Three sources across one sentence, each at its own clause, so the attribution the prose already makes carefully is matched by the citations.

OLD:
```
Finkelstein and Rubinstein showed the possibility in 1968, and Skyrme's model of the nucleon is the working example everyone knows: a soliton in a field of bosons which, quantized properly --- Witten settled that point in 1983, two decades after Skyrme proposed the model --- comes out as a spin-one-half fermion.
```
NEW:
```
Finkelstein and Rubinstein showed the possibility in 1968~\cite{finkelstein1968}, and Skyrme's model of the nucleon~\cite{skyrme1962} is the working example everyone knows: a soliton in a field of bosons which, quantized properly --- Witten settled that point in 1983~\cite{witten1983}, two decades after Skyrme proposed the model --- comes out as a spin-one-half fermion.
```

## Note on the remaining uncited entries — these are correct as they stand

After this patch, six entries remain uncited, and each is deliberate: `searle1980`, `holt2012`, `krauss2012` (ruled uncited in the Stage-2 pass), `baadezwicky1934` and `eht2019` (superseded, retained with explanatory notes), and `edwards2002` (cited only inside another entry's note). **No action wanted on any of them.** I list them so that a future audit finding "six uncited entries" does not re-open a closed question.

## After applying
1. `build.bat`; zero errors, zero overfull; one print-edition build; revert the flag.
2. Confirm the seven entries now appear in References, and report the page count — a handful of new reference lines may add one.
3. Commit: `ch7: cite the stiffness section's sources (verified but never placed)`.
