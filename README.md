# The Billiard Ball Universe: A World With No Bottom

*Niels Bonde Jensen*

This repository is the book's making, opened to the public — the record of a book being
corrected in public view. It keeps two promises the book itself makes:

> "…a repository that I intend to open to the public when this book is published."
> — *A Note on How This Book Was Made*

> "Manuscript, sources, and the full correction record."
> — the imprint page

Its value is the **seams**: not a clean snapshot of a finished book, but the patches, gates,
reports, reversals, and wrong predictions that made it. The history is part of the record;
please read it as such.

## Map
- **`manuscript/`** — `billiard_ball_universe.tex`, `ref.bib`, the build script, editions note.
- **`figures/`** — the 16 machine-checked vector plates, plus `programs/` (the book's figure
  sources) and `harness/` (the strict self-checks, reproduced from proofviz for verification:
  **inspectable, not turnkey** — the engine stays in proofviz) and `PROVENANCE.md`.
- **`art/`** — chapter openers and plates, with generation provenance.
- **`cover/`** — the cover builder, integrated art, and `PROVENANCE.md`.
- **`record/`** — the correction record: dated patches, the fact-check report, gate reports.
- **`memos/`** — research beyond the frozen first edition (e.g. `RM-1`).
- **`process/`** — `MANUAL`, `FILE_OWNERSHIP`, the outline and working notes: how the book was made.
- **`ERRATA.md`** — post-publication corrections, versioned against printings.

## Build
From `manuscript/`: `pdflatex` → `biber` → `pdflatex` ×2 (or run `build.bat`). Zero `Overfull
\hbox` is the standard; a build with any is not done.

## Report an error
The book's research programme says it can lose — this is the letterbox. Found something wrong?
**Open an issue.** The loop: issue → gate → dated patch in `record/` → fix → a line in
`ERRATA.md` → the next printing.

## Which tag is the printed book
[RULING PENDING: at publication, the commit matching the printed interior is tagged
`first-edition-1.0`; this README will name it "the book you are holding." Everything after that
tag is visibly *after* the book.]

## License
Split by directory — **book text and art: © 2026 Niels Bonde Jensen, all rights reserved**;
**code (figure programs, self-checks, cover/build scripts): MIT**. See `LICENSE.md`. A public
repo is assumed free unless told otherwise: the book is not.
