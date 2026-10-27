# ebook/ — the Kindle/EPUB edition pipeline

*Started 2026-10-27 (author's decision same day: ebook before IngramSpark).
Ebook ISBN **978-87-977519-4-7**; the paperback stays 978-87-977519-1-6 —
the editions never share a number. KDP Select stays OFF (the free repo PDF
forecloses digital exclusivity, deliberately).*

## What this is

A scripted, repeatable conversion of the master tex
(`manuscript/billiard_ball_universe.tex`, never modified) into a reflowable
**EPUB 3**: `ebook/build/billiard_ball_universe_ebook.epub`. One entry point:

```
python ebook/build_ebook.py            # all stages
python ebook/build_ebook.py --stage html   # or figures | cover | html | pack
```

Prerequisites on PATH: `pdflatex` (TeX Live), `pdftoppm` (poppler), `magick`
(ImageMagick), Python 3. The **oracle files** `manuscript/*.aux` and `*.bbl`
must come from a fresh full build of the digital edition — citation numbers
and figure numbers are read from them, so a stale oracle mis-numbers the book.

## How it works

1. **figures** — every `figure` environment is compiled standalone
   (article + mathpazo + tikz at the print text width) and rendered to PNG at
   300 dpi; captions are kept as real, searchable HTML text. The two
   full-page art plates pass through from `art/` as JPEG.
2. **cover** — the ebook cover is the front panel cropped out of
   `cover/cover_wrap.pdf` at 300 dpi (1800×2700), so it is always the same
   cover as the paperback, including the 2026-10-27 headline state.
3. **html** — a bespoke tex→XHTML converter for this one manuscript: real
   footnotes (EPUB 3 popup `noteref`/`footnote`), numeric citations linked to
   the references list (numbers taken from the `.bbl` entry order, verified
   against the printed page), figure numbers from the `.aux`, dialogue
   speakers, drop caps, the ❦ separators, both tables, display and inline
   math as HTML (sup/sub + entities). Anything unrecognised is a build
   WARNING and the build exits non-zero — same spirit as zero-overfull.
4. **pack** — EPUB 3 container, nav/landmarks, metadata
   (`urn:isbn:9788797977519 4 7` form, title, author, language), XML
   well-formedness check of every file.

`ebook/build/` is generated and gitignored; only the pipeline is tracked.

## Verification record (2026-10-27, first complete build)

- 0 converter warnings; every XHTML file parses as XML.
- Calibre `ebook-convert` → AZW3 succeeds (Kindle-format smoke test).
- Word count vs `pdftotext` of the print PDF: ratio 0.950 (the missing 5 %
  is the index, TOC pages, and running heads — expected).
- Key-phrase sweep (voice-rule phrases, chapter openers, dedication, closing
  lines): all present.
- Footnotes: 38 = 38 (the two extra `\footnote` regex hits in the source are
  `\footnotesize`).
- Citation numbering spot-checked against the printed page: `[66]` Maxwell
  and `[81, pp. 517–522]` Poincaré match print exactly.
- Visual review via a Calibre PDF render: part pages, chapter openers,
  dialogue, Figure 3.1, the wounds scoreboard prose, references all read
  correctly.

## Deliberate deviations from the print interior (the complete list)

1. **Kolofon**: the ebook ISBN line is added above the paperback ISBN line,
   and "Typeset by the author in Palatino." becomes "Typeset by the author;
   the print edition is set in Palatino." (a reflowable edition cannot
   truthfully claim a typeface). ← author to approve.
2. **Index omitted** (v1). Page-number references are meaningless in reflow;
   the EPUB nav plus device search stand in. The 77 anchors remain in the
   source, untouched, if a linked index is ever wanted. ← author to approve.
3. **References** are re-rendered from the `.bbl` fields in an approximation
   of the print's numeric style (authors, title, venue, year, pages, note,
   DOI link) — close but not byte-identical to the print page.
4. Nothing else. No prose differs.

## Still open before it goes on sale

- Niels judges the EPUB on an actual Kindle (Send-to-Kindle accepts EPUB) or
  the KDP previewer at upload time.
- KDP ebook setup: price (70 % band is $2.99–9.99), territories, the
  AI-content questions again, Select = NO.
- Optional: run epubcheck (not installed here; Calibre + XML checks stood in).
- The listing may say the PDF is free at the repository — author's wording.
