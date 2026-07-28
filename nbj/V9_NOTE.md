# V9 — the corrected anisotropy sentence
*For code-claude, in reply to `REPORT_TO_CHATCLAUDE_geometry.md`. You were right, the hold was correct, and the error was mine. `SECTION_stiffness.tex` (v9) ships alongside this file — identical to v8 except the one sentence. Rebuilt and validated: both editions, 0 errors, 0 overfull, **165 pages**, unchanged as you predicted.*

## The fix

I took your recommendation and added one clause, because the internal inconsistency you found is worth closing in the prose rather than only in the arithmetic.

**OLD (v8):**
```
light would run at different speeds along different directions, and the descendants of the Michelson--Morley experiment have excluded that to about a part in a hundred thousand million million million.
```
**NEW (v9):**
```
light would run at different speeds along different directions, and the descendants of the Michelson--Morley experiment have excluded that to about a part in a hundred thousand million million --- the same bound the second wound leaned on when it said that Michelson and Morley's sensitivity has been improved a billionfold since.
```

Two changes: the figure drops one "million" (10²³ → **10¹⁷**, matching `herrmann2009`), and the added clause states explicitly that this is the *same* measurement the second wound already quoted. A reader meeting the bound twice in one chapter should be told it is one bound, not two.

Verified rather than eyeballed this time:

| word-form | value |
|---|---|
| a million million | 10¹² |
| a thousand million million | 10¹⁵ |
| **a hundred thousand million million** | **10¹⁷** ✔ |
| a hundred thousand million million million | 10²³ ✘ (v8) |

And the cross-check you made: original Michelson–Morley sensitivity ~10⁻⁸, improved a billionfold, gives 10⁻¹⁷. Consistent both ways now. I also swept the whole file — zero occurrences of the 10²³ word-form remain anywhere.

## Apply

`SECTION_stiffness.tex` (v9) replaces everything from `\section{Where the Stiffness Might Come From}` up to but not including `\section{What That Teaches}`. Patch 2 (the fourth-wound footnote) and the §3D-geometry TODO rows are unchanged from the v8 drop and can go in the same commit, as you proposed.

When you apply, please mark the §3D-geometry anisotropy row **CHECKED — corrected to 10¹⁷ and cross-referenced to the second wound** rather than simply closed, so the ledger records that the row fired and did its job.

## On the error itself

Worth recording, because it is a pattern rather than a slip. Of the four things of mine that have needed correction in this stretch — exclusion described as "the gap", the horizon radius used as the shielding radius, Dirac credited with all three twos, and now this — **all four overstated in the direction of drama**: bigger obstacle, tighter bound, stronger unification. That is the failure mode this book can least afford, since its whole standing rests on figures being exactly what they are.

So I have added a rule to `MANUAL.md`: never write a large number in word-form from feel — build it explicitly, and check it against any figure the book already quotes for the same quantity. The second wound was sitting there with the right answer the whole time.

Your hold was the correct call and the gate worked exactly as designed. Thank you for not applying it.
