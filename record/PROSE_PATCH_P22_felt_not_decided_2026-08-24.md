# P22 — the child felt; the adult says it stronger (2026-08-24)

*Cover copy and listing copy, not manuscript. Niels ruled that the blurb's "As a child … **decided**
that two things were cheating" misdates the strong formulation: the childhood thing was a felt
wrongness, and the awareness that "pulling across empty space is cheating" — the propositional
claim — came later. The book already stages this scrupulously; the blurb had compressed it. **The
cover must mirror the book by claim.** Nothing is tagged and the repo is not flipped; both still
wait on the physical proof.*

## What the book says, checked before the edit

- Ch. 1, line 216: the childhood experience is pre-verbal — "Obviously wrong, the way it is obvious
  that someone is cheating at a game **even before you can say which rule they broke**."
- Line 222: the strong form is dated to now — "**I felt it then and I will say it stronger now**: it
  is clearly cheating."
- Line 236: "it took me years to say why … The **mature form** of the child's demand …"
- Epilogue, line 1978: the age-ten verdict is given in words but explicitly called "the immediate,
  **wordless** response."

The blurb's "decided" attributed the verdict-in-words to the child. The book's own verb is **felt**.

## P22/E1 — applied

OLD (verified unique in each file):

> As a child, Niels Bonde Jensen decided that two things were cheating

NEW:

> As a child, Niels Bonde Jensen felt that two things were cheating

Four locations: `cover/cover_wrap.tex` (back panel — the printed copy), `cover/BOOK_COVER.md` §3,
`FINAL/3_reference/COVER_SPEC.md` §3, and the KDP description in `FINAL/README.md`.

## An over-correction, caught and reversed in the same session

The short blurb variant's "Two **childhood convictions**" was initially also changed, to "childhood
feelings" — then reverted, because the manuscript itself uses the phrase: Ch. 1, line 252, "to put
**the two childhood convictions** on the table, undiluted." *Conviction* is the book's own word for
the wordless childhood certainty; *decided* was the only word claiming the child had the formulation.
The short variant therefore stands as it was, in all three of its locations (`FINAL/README.md`,
`COVER_SPEC.md`, `BOOK_COVER.md`), and its verb "grown into a full cosmology" already carries the
maturation. The manuscript was untouched throughout, as it must be.

Also checked: the website repo (a sibling project; path genericized 2026-08-28 — see
`record/SCRUB_TRIM_2026-08-28.md`) carries neither phrase — nothing to fix there.

## The checks

**Rebuild, genuine.** `pdflatex cover_wrap.tex` ×2 from `cover/`; PDF mtime moved 08:43 → 09:13
(stale-PDF trap checked). Log: **0 errors, 0 Overfull**.

**Layout, measured.** P21 wrap vs P22 wrap rendered at 300 dpi and diffed: every changed pixel lies
in one band, `1380×45 px at +202+415` — the single reflowed line containing the edit. The paragraph
kept its line count; everything below is **pixel-identical**. The "ques-tions" hyphen visible at the
next line predates P22 (that line is outside the diff band). Read from the render: the new line sets
cleanly.

**Sweeps:**

| string | required | found |
|---|---|---|
| `decided that two things` | 0 outside quotes in this record and the FINAL/README staging note | 0 |
| `felt that two things were cheating` | exactly 4 files | exactly those 4 |
| `Two childhood convictions` (short variant) | unchanged in its 3 locations | unchanged |
| manuscript | byte-identical | byte-identical |
| tracked diff | 2 files, 1 line each | `cover_wrap.tex` + `BOOK_COVER.md` |

## Release mechanics

Interiors, page count 206, spine 0.5150 in, wrap geometry: all unchanged. Re-staged in
`FINAL/1_upload/` with `CHECKSUMS.sha256` and the `FINAL/README.md` table refreshed:

```
2302f3d394f4ba8fe0ec33c9f0776c2e3f4ecc61ab3e8a4676905be3004acd75  BBU_interior_print_206pp.pdf     (unchanged)
cafbc26be821de687c74faab3782d19cb9791af58ddbd59f839df42b18e48971  BBU_interior_digital_206pp.pdf   (unchanged)
45717b47ac7fef511c993a5d7e7d6ec34001ea8f0e8be88c63871f794c821e34  BBU_cover_wrap_206pp.pdf         (NEW)
```

New source hash: `cover/cover_wrap.tex` = `3036c9a66e5e7e4f3c6a1454fd0bb0b6c53ef4f88d4288e86db0d9243e0bdd96`.
The three `FINAL/2_proof/` rasters were re-rendered from the new wrap (same crop geometry as P21).

## The timestamp consequence

P22 substitutes a word, so like P21 (and unlike P20) the new text needs its own anchor — "felt that
two things were cheating" is a sentence the 21 August and P21 anchors never contained. A fresh
interim stamp was taken: `timestamps/2026-08-24-p22-cover/` (anchor + the new tex + the new wrap
PDF); status and blocks live in `timestamps/README.md`.

The P21 wrap PDF's proof — hours old and still pending — moved with its vanished bytes to
`FINAL/_superseded_2026-08-24/`. The P21 **tex** proof stays meaningful: those bytes are committed at
`3667202` and verify with `ots verify -f` against that checkout, exactly as the 21 August tex proof
does against `2de4de2`. Of the 21 August source proofs, only `ref.bib` still matches the working
tree. OTS-3 is unaffected and still waits on the tag.

## Still not done, by design

No tag. No OTS-3. No repo flip. No publish. All four wait on the physical proof — which will be
judged against the P22 cover.
