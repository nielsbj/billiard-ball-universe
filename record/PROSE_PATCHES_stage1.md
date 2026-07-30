# PROSE_PATCHES_stage1.md — author-approved prose fixes from the Stage-1 report
*For code-claude. These four patches are Niels-approved author prose responding to FACTCHECK_REPORT.md — applying them is within your permissions because the author is handing you the exact text. Apply verbatim by exact-string replace (each OLD occurs exactly once). Do not rephrase, do not "improve." All four have been build-validated (both editions, zero errors, zero overfull).*

## Patch 1 — Tegmark re-pair (the DISCREPANCY row) — Chapter 4

**OLD:**
```
Tegmark did the distance arithmetic: your nearest exact copy is on the order of $10^{10^{118}}$ meters away.
```
**NEW:**
```
Tegmark did the distance arithmetic, and it comes in two sizes. Your nearest exact copy --- same body, same memories, same half-finished thought --- is on the order of $10^{10^{29}}$ meters away. The nearest exact copy of our \emph{entire visible universe} --- every galaxy, every book, this sentence included --- is on the order of $10^{10^{118}}$ meters away.
```

**OLD:**
```
But it is a distance, and at that distance, you are sitting there now.
```
**NEW:**
```
But these are distances --- places --- and at both of them, you are sitting there now.
```

## Patch 2 — the ships hedge (the CAUTION row) — Chapter 6

**OLD:**
```
Sailors have known a version of this for centuries: two ships in a swell, side by side, are pushed dangerously together, because each blocks the waves from the other and the unblocked waves outside do the rest.
```
**NEW:**
```
A story sailors are said to have told --- the historical record, I must add, is thinner than the story --- makes the same picture at human scale: two ships in a swell, side by side, drifting dangerously together, each blocking the waves from the other while the unblocked waves outside do the rest. Whether or not any bosun ever logged it, the physics of the picture is sound, and it is the physics this book is borrowing.
```

## Patch 3 — Poincaré's figures, inserted (from your fetched values) — Chapter 7, First Wound

**OLD:**
```
Slow flux: orbits decay. Fast flux: planets glow. Every knob the model has, turned to fix one wound, tears the other wider.
```
**NEW:**
```
Slow flux: orbits decay. Fast flux: planets glow. Poincar\'e, in 1908, put numbers to the jaws: to evade the drag, the corpuscles must move at no less than $24\times10^{17}$ times the speed of light; and at the absorption rate gravity requires, the Earth would heat by $10^{26}$ degrees per second --- an intake some $10^{20}$ times everything the sun emits. Those are not figures a model recovers from. Every knob the model has, turned to fix one wound, tears the other wider.
```
*(Sanity-check the three magnitudes against your fetched Science and Method values before applying; if any differs, STOP and report — do not apply a corrected version on your own.)*

## Patch 4 — Bell attribution split (the flagged gloss) — Chapter 7, Fifth Wound

**OLD:**
```
while conspiring never to carry a usable message; he thought it the least crazy resolution on offer.
```
**NEW:**
```
while conspiring never to carry a usable message. The \emph{cheapest} resolution, he called it --- and the least crazy on offer, I would add, though those last words are mine, not his.
```
*(This attributes only the word "cheapest" to Bell — confirmed in your report — and marks the stronger gloss as the author's own.)*

## After applying
1. Delete any remaining craft-note sub-items now resolved by these patches: the Ch. 5 note's Tegmark-figures item; the Ch. 6 note's sailors/two-ships item (or replace with "[resolved: ships lore hedged in prose; physics retained.]"); any Ch. 7 sub-item covering Poincaré's Le Sage figures or Bell's wording.
2. `build.bat` — zero errors, zero overfull; also one print-edition build (`\digitaleditionfalse`), then revert the flag.
3. Commit: `prose: stage-1 patches (Tegmark re-pair, ships hedge, Poincare figures, Bell attribution) — author-approved`.
4. Append to `FACTCHECK_REPORT.md`: "Stage-1 prose patches applied per PROSE_PATCHES_stage1.md; discrepancy and caution rows closed."
5. **Then Stage 2 is GO** — proceed per TODO-CODE-CLAUDE.md Stage 2 (this line is Niels's gate approval, carried by this file).
