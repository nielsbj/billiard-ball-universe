# CLAUDE.md — The Billiard Ball Universe

Book project: **"The Billiard Ball Universe: A World With No Bottom"** by Niels Bonde Jensen.
A philosophical trade book (6×9 in, ~93 pp typeset): an infinitely layered, mechanical
universe, argued on grounds of minimal arbitrariness. Complete illustrated Draft 1;
current work is **revision**, not drafting.

## Repository layout (post REPO-2 restructure, 2026-07-30 — REPO_SPEC §3)
`manuscript/` (tex, ref.bib, build.bat, built PDF) · `figures/` (16 plate PDFs +
`programs/`+`harness/` declared snapshot of proofviz + PROVENANCE) · `art/` (chapter
plates + generation provenance) · `cover/` (cover_wrap.tex, cover_art_build.tex, tiles,
PROVENANCE, BOOK_COVER) · `record/` (correction record: patches, reports, gates) ·
`memos/` (RM-1 + successors) · `process/` (MANUAL, FILE_OWNERSHIP, book_outline, TODOs) ·
README/LICENSE/ERRATA at root. `nbj/` is the private drop-zone (gitignored, never public).
Remote: private `github.com/nielsbj/billiard-ball-universe` (working dir still named code-claude).

## Read these first (in order)
1. `process/book_outline.md` — chapter-by-chapter status, figure plan, illustration plan, to-dos.
2. The philosophical position in the author's voice: the book claims *less arbitrary, one mystery*
   and does NOT claim to explain why anything exists. (The primer file is retired; the position
   lives in the manuscript itself and `process/`.)
3. `manuscript/billiard_ball_universe.tex` is the living master; any `*_draft.md` are reference only.

## Build
- **From `manuscript/`.** Manual: `pdflatex -interaction=nonstopmode billiard_ball_universe.tex`,
  `biber billiard_ball_universe`, then pdflatex twice more. `manuscript/build.bat` wraps this
  (cd's to its own dir). `\graphicspath{{../}}` lets `art/…` and `figures/…` resolve from root.
- Cover builds separately from `cover/`: `pdflatex cover_wrap.tex` (×2); art via `cover_art_build.tex`.
- **Zero-overfull policy**: a build with any `Overfull \hbox` is not done.
- Bibliography is biblatex+biber (`manuscript/ref.bib`); real `\cite{...}` calls (no `\nocite{*}`).

## LaTeX conventions (match, don't reinvent)
- KOMA `scrbook`, 11 pt `mathpazo` (Palatino), 6×9 in, `parskip=half-`,
  serif headings (`\addtokomafont{disposition}{\rmfamily}`), sections unnumbered.
- `\En` = house separator (❦). `\speaker{Kai}` / `\speaker{Me}` for Ch. 3 dialogue.
- Draft apparatus: `\draftstatus{...}` and `draftnote` environment, toggled by
  `\draftnotestrue` / `\draftnotesfalse` in the preamble. Reading copy = false.
- Figures are **TikZ in-document, grayscale**, labels `fig:*`
  (existing: shadowpush, picktwo, inversesquare, circulation, pincer, layers).

### TikZ hard-won lessons (do not relearn these by compiling)
- **Node text does NOT scale with `[scale=...]`** — only coordinates do. Budget widths
  in real cm against the text block: **11.43 cm usable width**.
- Bottom labels: `anchor=north` at a y-coordinate computed BELOW the lowest graphic
  (account for unscaled text height), so wrapping can never cause overlap.
- Give every panel caption a fixed `text width` box; never let two captions share
  unbounded horizontal space.
- Verify after every figure edit: rebuild, check Overfull count, and inspect with
  `pdftotext -layout` around the figure page.

## Content state / open revision tasks
1. **Fact-check pass**: grep `VERIFY` in `ref.bib` and in the in-text craft notes
   (Ch. 2 has an 11-point list; Ch. 7 lists exact figures to confirm: Poincaré's
   Le Sage numbers, LIGO GW170817 speed bound, electron g−2, substructure bound).
2. **Ch. 5 opening reconciliation**: Ch. 5 opens by re-establishing the copies
   ("Somewhere, very far from here...") which Ch. 4 now establishes first —
   trim or make a deliberate echo.
3. **Citations**: replace `\nocite{*}` with per-passage `\cite` calls.
4. **Remaining essential diagram**: induction with vs. without a base case
   (Ch. 3, Round One). Second-tier diagram list is in `book_outline.md`.
5. **Illustrations**: AI-generated engraving-style art per the plan in
   `book_outline.md` (style prefix, specs, placement). Masters go in `art/`,
   inserted with `\includegraphics`. Diagrams stay TikZ — never generate those.
6. **Author scenes**: Ch. 1 wants rough ages/details for the two childhood memories;
   Ch. 5 wants a real moment the copies idea comforted him (marked in draftnotes).

## Voice rules (the most important section)
- The author is Danish, writing in English. Keep sentences direct and declarative;
  the book's voice is personal conviction, not academic hedging — but it is
  scrupulously honest: every objection is stated at full strength, concessions are
  kept on the page, and rigged metrics are named as such.
- Ch. 3 is a real dialogue with an AI ("Kai") — the concessions in both directions
  actually happened and must never be smoothed over.
- Never let the book claim more than "less arbitrary, one mystery." Claims of proof
  of B (no bottom layer) were retracted in Ch. 3 and must stay retracted.
- Preserve the author's key phrases verbatim where they appear: "it is clearly cheating",
  "the local surplus", "locally special, not globally special", "no magic anywhere",
  "the point is: it has to make sense".

## Git
- LF in repo (`.gitattributes`), Windows scripts CRLF. Build artifacts ignored.
- `CLAUDE.md` is committed; `.claude/settings.local.json` is not.
- The compiled PDF is ignored by default; force-add deliberately for releases.
