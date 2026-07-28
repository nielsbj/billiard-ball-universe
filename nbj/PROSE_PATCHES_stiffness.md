# PROSE_PATCHES_stiffness.md — new Chapter 7 section: where the strut might come from
*For code-claude. Author-requested. Applies on top of v5.2. Build-validated: both editions, 0 errors, 0 overfull, **161 pages** (was 157). Ships with `SECTION_stiffness.tex` and a regenerated `SECTION_collapse.tex`.*

## Why

The collapse section left an unpaid debt: degeneracy pressure explained by a prohibition is action at a distance in another costume, and the book cannot use it. The author went to look at superfluids, where circulations are packed and measured. Two of the three pieces turn out to be lying there already:

- **Quantized circulation gives the confinement relation for free.** Confine a circulation of fixed quantum κ = h/m to size d and its momentum is mκ/2πd = **ℏ/d**, mass cancelling. Squeeze it and it must turn faster, for a mechanical reason.
- **Packed one to a cell, that yields the degenerate exponent exactly.** n = 1/d³, energy each ~ℏ²n^(2/3)/2m, energy density ∝ **n^(5/3)** — and the crudest possible geometry lands within a factor of ~6 of the true value.
- **The fluid also supplies the same/opposite asymmetry.** Energy goes as circulation squared and circulations add at a distance, so two like circulations seen from outside look like one of twice the strength — four units where two apart cost two. Hence a double quantum splits, which is observed. Opposite senses cancel, attract, annihilate.

**The section states immediately that this does not prove exclusion:** the calculation assumed one circulation per cell, and that assumption *is* the exclusion. What changed is which half is missing — the kinematics is now free, the packing rule is not.

## Patch 1 — insert the new section

Insert the entire contents of **`SECTION_stiffness.tex`** immediately before
```
\section{What That Teaches}
```
Chapter 7 then reads: five wounds → Sixth Wound → State of the Wounds → entropy counter-invoice → The Ladder Under Load → **Where the Stiffness Might Come From** → What That Teaches.

## Patch 2 — replace the collapse section

Replace from `\section{The Ladder Under Load` up to (not including) `\section{Where the Stiffness Might Come From}` with the regenerated **`SECTION_collapse.tex`**. One sentence changed: the debt paragraph now points forward — "I did not have the account when I first wrote that sentence… Since then I have been to look, and the section after this one reports what is there: further along than I expected, and not far enough."

## Patch 3 — two Dictionary entries

**Before** `\paragraph{Quasar.}` insert:
```
\paragraph{Quantized circulation.} In a superfluid, the flow summed around any loop enclosing a vortex is not arbitrary but a whole multiple of a fixed quantum, $\kappa = h/m$. A consequence: confine such a circulation to a region of size $d$ and its momentum must be $\hbar/d$ --- squeeze it, and it must turn faster.

```

**Before** `\paragraph{Sufficient reason.}` insert:
```
\paragraph{Soliton; skyrmion.} A stable knot or twist in a continuous medium that behaves like a particle. Skyrme's model treats the proton as one; Finkelstein and Rubinstein showed such structures can carry half-integer spin and fermion statistics, though the medium they live in is bosonic.

```

## Patch 4 — six bibliography entries

Add before `@article{michelsonmorley1887,`. **All six are VERIFY-flagged deliberately** and must clear the normal gate before publication; the section ships uncited, as the collapse material did.

`onsager1949`, `feynman1955`, `vinen1961`, `shin2004`, `finkelstein1968`, `skyrme1961` — full entries are in chat-claude's `ref.bib`; copy them verbatim from there rather than retyping.

## Fact-check rows

New section **`§3D-stiffness`** added to `TODO.md`. Flagged as highest-risk: the Finkelstein–Rubinstein claim (structures in a bosonic medium can be fermions) and the Onsager/Feynman priority question, which is genuinely tangled — the instruction is to report what can honestly be cited and **not** to assert priority in prose.

## Notes for whoever reads this next

- The section contains the book's only display equation. If that is unwanted house style, it can be inlined — ask Niels, do not change it unilaterally.
- `fig:circulationpair` uses bbuBlue and bbuRed for the two circulation senses, consistent with the frozengas convention (colour is redundant with arrowhead direction, so grayscale keeps the distinction).
- The section is deliberately the least finished thing in the book and says so twice. Do not tidy the hedges out of it.

## After applying
1. `build.bat`; zero errors, zero overfull; one print-edition build; revert the flag.
2. Commit: `ch7: new section — where the stiffness might come from (superfluid circulation, unverified)`.
3. Append to `FACTCHECK_REPORT.md`: "New unverified section; 6 new VERIFY flags; see TODO §3D-stiffness."
