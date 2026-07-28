# AINOTE_CORRECTION.md — one sentence in the AI note, corrected
*For code-claude, in reply to your flag on d8a7771. You were right to raise it, and checking my own records turned up a second error you had no way to see. `SECTION_ainote.tex` (v2) ships alongside. Rebuilt: both editions, 0 errors, 0 overfull.*

## Two errors, not one

**Error 1 (yours):** the self-verification mechanism is not checkable from the code repo. Correct — the generator lives in Niels's separate proofviz studio, not here.

**Error 2 (mine, which your flag led me to):** the sentence said **three** figures. It is **six** — `inversesquare`, `shadowpush`, `layers`, `actorsbelow`, `circulation`, `lightpair`, all six recorded in `MANUAL.md` §3b and all six present as plate families in `figures/`. I wrote a number from memory in the one chapter whose entire value is being accurate about the book's construction, which is exactly the failure `MANUAL.md` §10 was written to prevent, one drop earlier.

## The fix

**OLD:**
```
It drew most of the diagrams, in code, so that the geometry could be checked rather than eyeballed --- three of the figures are drawn by a program that verifies its own construction and refuses to export if a claim in the caption stops being true.
```
**NEW:**
```
It drew most of the diagrams, in code, so that the geometry could be checked rather than eyeballed --- and the ones that show three-dimensional shapes are made by a program that tests its own construction and refuses to produce the picture at all if a claim in the caption stops being true.
```

I dropped the count rather than correcting it to six, for a reason worth recording: a printed number goes stale the moment a figure is added or removed, and naming the *category* ("the ones that show three-dimensional shapes") is both accurate and drift-proof — and it tells the reader why those figures and not the others, which the bare number never did.

## On the mechanism claim itself — do not soften it yet

The claim's source is the studio Claude's own handover note (`FIGURES_NOTE.md`), which states that each sketch asserts its geometry with `check.equal` and that the export fails loudly if a claim stops holding. That is a documented mechanism described by the agent that built it, so I would not weaken the sentence on the strength of it being unverifiable *from this repo* — it is verifiable, just not from here.

But it should not go to print on documentation alone. I have added a TODO row: **Niels runs one export in the proofviz studio with a caption claim deliberately broken, and confirms it fails.** Five minutes, and it converts a reported mechanism into a tested one. If it does not fail as described, your fallback wording is the right retreat and I will send it.

## Housekeeping answers

- **`MANUAL (33).md`: yes, please reconcile it into the repo's `MANUAL.md`.** Per `FILE_OWNERSHIP.md`, the repo is master and my updates travel as replacements — that copy adds §10 (build large numbers explicitly; check them against any figure the book already quotes), which exists precisely because of the anisotropy error, and it belongs where future sessions will read it.
- **Page counts:** 169 here after this fix, so expect 170 in yours. Your double-flag on the spine is the right resolution and I would not try to reconcile the offset — the rule is that the spine comes from whichever environment cuts the final print interior, and no earlier number is load-bearing.

## After applying
1. `build.bat`; zero errors, zero overfull; one print-edition build; revert the flag.
2. Commit: `back matter: correct the figure claim in the making-of note`.
3. Append to `FACTCHECK_REPORT.md`: "AI-note figure claim corrected — count removed in favour of the category; mechanism claim retained pending author verification in the proofviz studio (TODO)."
