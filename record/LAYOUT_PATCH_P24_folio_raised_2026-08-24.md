# P24 — the folio rises 12 points, and the previewer goes quiet (2026-08-24)

*Layout, not prose: not one word of the book changed. The KDP previewer, on upload day, rejected the
print interior with "text outside the margins" on twenty listed pages. Measurement showed the twenty
were a truncated sample of 191, all with the same single cause. Nothing is tagged and the repo is not
flipped; both still wait on the physical proof — which will now be the P24 interior.*

## The diagnosis, measured not guessed

Ghostscript's bbox device over all 206 pages of the gated print PDF, against KDP's paperback rules
(ink ≥ 0.25 in = 18 pt from every trim edge; gutter ≥ 0.375 in = 27 pt at 206 pages):

- **191 pages violated, every one identically: ink bottom at 13 pt from the trim** — the folio. KDP's
  error list ("5, 6, 7, 9–11, 13–17, 19–27") was exactly 20 entries, a truncated prefix; the gaps
  (4, 8, 12, 18…) are blank versos with no folio, which is what confirmed the diagnosis.
- **No other violation anywhere**: top ink at 25 pt, outer at ~44 pt, gutter at ~59 pt on every page.
  The text block was always legal; only the page number sat too deep in the bottom margin.

The previewer's separate "non-printable markup removed" notices are the hyperlink annotations from
the TOC, citations and index being stripped — expected (the print edition's links are black precisely
so this costs nothing) and not an error.

## The fix

One line in the `\geometry` block of `manuscript/billiard_ball_universe.tex`:

```
footskip=36pt  % folio baseline 25pt above trim --- KDP demands ink >=18pt
```

The bottom margin is 0.85 in = 61.2 pt; `footskip=36pt` puts the folio baseline at 25.2 pt above the
trim — 7 pt of cushion over KDP's 18 pt floor, and visually closer to the text block, further from
the paper's edge. The text block's size and position are untouched, so the fix **cannot** reflow
anything — a claim the verification then tested rather than trusted.

## The checks

**Both editions rebuilt from scratch**, full cycle run directly — `pdflatex · biber · makeindex ·
pdflatex · pdflatex` — with the edition toggle flipped to `\digitaleditionfalse` for the print build
and back after. Genuine-build check passed on both (PDF mtimes moved from 23/24 Aug to the run).

| | print | digital |
|---|---|---|
| pages | **206** | **206** |
| LaTeX errors | 0 | 0 |
| Overfull | 0 | 0 |
| Float too large | 0 | 0 |
| undefined references | 0 | 0 |

**The margin scan, re-run on the new print PDF: zero violations.** All 191 folio bottoms moved
13 pt → 25 pt.

**Pagination proven identical, not assumed.** Old and new bounding boxes compared page by page across
all 206 pages: **zero pages changed in x-extents or top edge**; the only change anywhere is the folio
ymin 13 → 25 on the 191 folio-bearing pages. The H3 collision gate's result is inherited unchanged by
construction — no figure or text moved.

**The manuscript diff is the geometry lines and nothing else** (1 line changed to 3, all inside the
`\geometry` block; committed state keeps `\digitaleditiontrue`).

**Visual check:** page 15's footer read from a render — the folio sits naturally, clear air both
sides.

## Release mechanics

Page count did not move, so `\PAGECOUNT`, the spine (0.5150 in) and the P23 cover are untouched.
Re-staged in `FINAL/1_upload/` with `CHECKSUMS.sha256` and the `FINAL/README.md` table refreshed:

```
2b72c2f22a50ad4549f727f3485193a0aa677d344fccafe2c1d157cbaed40bf0  BBU_interior_print_206pp.pdf     (NEW)
082509677693068ba1ec3de43339ca552eda03445cbe25dc995c88102ec52af6  BBU_interior_digital_206pp.pdf   (NEW)
b2c80fb06f11dafe3e89b3d84bc6c1824db81b2506f0939e4259cc4c172321a0  BBU_cover_wrap_206pp.pdf         (unchanged, P23)
```

The superseded P20 interiors carried no travelling `.ots` (P20 took no re-stamp), so there was
nothing to move; the old bytes are simply replaced.

## The timestamp consequence

The tex changed (a geometry line and its comment — machine-set, no authorship stake, but the day's
rule is kept simple: every restaged artifact carries a fresh anchor). New interim batch
`timestamps/2026-08-24-p24-interior/`: anchor + the new tex + both new interior PDFs. Status and
blocks live in `timestamps/README.md`; all four of the day's pending batches upgrade together. The
21 August tex proof continues to verify against a checkout of `2de4de2`, as it has since P20. OTS-3
unaffected.

## For the next margin question

The eight proof checks in `FINAL/README.md` are unchanged and still apply. If KDP's previewer ever
complains again, measure before editing: `gswin64c -sDEVICE=bbox` over the PDF, against 18 pt edges
and a 27 pt gutter — the twenty pages it lists may be a truncated sample of a single systemic cause,
as they were here.

## Still not done, by design

No tag. No OTS-3. No repo flip. No publish. The physical proof will be ordered from the P24 interior
and the P23 cover.
