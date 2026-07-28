# PROSE_PATCHES_stiffness.md — new Chapter 7 section: where the strut might come from
*For code-claude. Author-requested. Applies on top of v5.2. Build-validated: both editions, 0 errors, 0 overfull, **163 pages** (was 157). Ships with `SECTION_stiffness.tex` and a regenerated `SECTION_collapse.tex`.*

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

## Patch 5 — the literal-spin passage (author-requested, folded into the fragment)

Already inside `SECTION_stiffness.tex`; no separate string patch. Five paragraphs inserted before "Three difficulties, stated plainly", plus one sentence changed in the Finkelstein–Rubinstein paragraph so that it explicitly answers the half-unit of spin as well as the statistics ("the same difficulty wearing two hats").

Content: the third wound's tumbling charges, taken literally, are spin. The standard objection is superluminal surface speed (~171c at the classical electron radius, ~5×10⁷c at the book's own size bound) — which is a violation only against *our* layer's light, and the chapter has already twice established that c is a local ordinance. The passage is careful: "That is not a proof that spin is rotation. It is the removal of the reason for saying it cannot be."

The magnitude then comes free from the section's own confinement relation: L = p·d = ℏ, with both d and m cancelling. And two honest failures are stated — it gives one unit not a half, and a rotating charged ball's magnetic moment is wrong by a factor of two — closing on the observation that the book now owes **three twos** (two per state; two turns to come home; g = 2), that in the standard picture these are one fact rather than three, and that whoever supplies the packing rule "will not be paying three debts. They will be paying one."

New fact-check rows: `TODO.md` §3D-spin, including a STOP instruction if the Dirac-unification sentence overstates.

## Notes for whoever reads this next

- The section contains the book's only display equation. If that is unwanted house style, it can be inlined — ask Niels, do not change it unilaterally.
- `fig:circulationpair` uses bbuBlue and bbuRed for the two circulation senses, consistent with the frozengas convention (colour is redundant with arrowhead direction, so grayscale keeps the distinction).
- The section is deliberately the least finished thing in the book and says so twice. Do not tidy the hedges out of it.

## After applying
1. `build.bat`; zero errors, zero overfull; one print-edition build; revert the flag.
2. Commit: `ch7: new section — where the stiffness might come from (superfluid circulation, unverified)`.
3. Append to `FACTCHECK_REPORT.md`: "New unverified section; 6 new VERIFY flags; see TODO §3D-stiffness."
