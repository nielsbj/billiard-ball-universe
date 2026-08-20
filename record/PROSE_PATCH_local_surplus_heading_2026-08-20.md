# PROSE PATCH — the Ch. 5 section heading becomes "The Local Surplus" (2026-08-20)

*One exact-string edit. Found during the launch-plan reconciliation of the same day (see
`ISBN_AND_BARCODE_2026-08-20.md`), reported rather than applied because a section title is prose,
and applied here on the author's ruling: **"local surplus it must be."***

## The edit

`manuscript/billiard_ball_universe.tex:731`

```diff
- \section{The Local Ratio}
+ \section{The Local Surplus}
```

Nothing else. No body prose was touched — it had already been rewritten to *the local surplus*; the
heading was the last place the retired phrase survived.

## Why it mattered

`CLAUDE.md` lists *"the local surplus"* among the author's key phrases to be preserved verbatim.
Until this edit the section was **titled one thing and argued another**: the heading, its
table-of-contents entry and its running head all read *The Local Ratio*, while the six occurrences
in the section's own prose read *local surplus*.

## Why it survived the check that was supposed to catch it

The 2026-08-03 reader-draft verification recorded, and passed on:

> `local surplus` ×6, `local ratio` ×0 — exactly the mirror of July's ×0/×6

That grep was **case-sensitive**. It could not see `The Local Ratio`, so the heading went out in
the reader draft R1 is holding, and in every draft before it. The lesson is narrow and worth
keeping: phrase-retirement sweeps must be case-insensitive, because a retired phrase most often
survives where it is capitalised — headings, running heads, the TOC.

## Sweep after applying

| | before | after |
|---|---|---|
| `local ratio`, any case, built PDF | 3 | **0** |
| `local surplus`, any case, built PDF | 6 | **9** |

The three new hits are exactly the three that changed: the section heading, its TOC line (now
"The Local Surplus … 53"), and the running head. Confirmed in the built PDF, not only the source.

## Build

| | pages | Overfull | Float too large | undefined | errors | collisions |
|---|---|---|---|---|---|---|
| digital | 202 | 0 | 0 | 0 | 0 | 0 (exit 0) |
| print | 202 | 0 | 0 | 0 | 0 | 0 (exit 0) |

Page count unmoved — the heading is one line and the replacement is two characters shorter than the
line it replaced in setting terms.

## Note

The index entry `local surplus` still points at **p. 52**, the first prose use, not at the section
head on p. 53 — the index pass of the same day places one anchor per entry at first-or-best
occurrence, and headings were deliberately left untagged (an `\index` inside a moving argument can
be written twice). If the section head is wanted as a second reference, it goes in with the
second-anchor pass the author still owes the house terms.
