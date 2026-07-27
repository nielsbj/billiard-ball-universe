# MANUAL — building, revising, and extending the book

This is the operational reference. For *what the book argues*, read
`billiard_ball_primer.md`; for AI-collaborator context, `HANDOFF_OPUS.md`.

---

## 1. Building

Full cycle (Windows): `build.bat`
Manual: `pdflatex -interaction=nonstopmode billiard_ball_universe.tex` →
`biber billiard_ball_universe` → `pdflatex` twice more.

Rules:
- **Zero-overfull policy.** `findstr /C:"Overfull" billiard_ball_universe.log` must be empty.
  An overfull line physically protrudes into the margin; fix it, don't ship it.
- If biber is unavailable somewhere, the document *content* can be preview-built by
  swapping the biblatex block for classic BibTeX (`\bibliographystyle{unsrt}` +
  `\bibliography{ref}`) — styling differs, content identical. The committed master
  stays biblatex/biber.
- Automation note: always verify a fresh 'Output written' line (or the BUILD-STAMP)
  from the current run — never trust a log grep alone; cmd-invoked runs from
  harnesses can silently no-op on working directory.

## 2. Draft mode vs. reading copy

The preamble defines a toggle:

```latex
\draftnotestrue    % draft: shows craft notes + draft-status lines (gray italic)
\draftnotesfalse   % reading copy: all revision apparatus vanishes
```

`\draftstatus{...}` prints a chapter's status line; the `draftnote` environment holds
in-text craft/verification notes. Flip the toggle, rebuild — nothing else changes.

## 3. House LaTeX conventions

- KOMA `scrbook`, 11 pt Palatino (`mathpazo`), 6×9 in, `parskip=half-`,
  serif headings, sections unnumbered (`secnumdepth=0`).
- `\En` — the ❦ scene separator.
- `\speaker{Kai}` / `\speaker{Me}` — Chapter 3 dialogue turns.
- `\chapterart{<id>}` — chapter-opener illustration (art/<id>.png at 0.62\textwidth).
- Figures: TikZ, grayscale, in-document. Labels `fig:*`; the one table is `tab:settlement`.
- Existing labels: `fig:shadowpush, fig:picktwo, fig:inversesquare, fig:circulation,
  fig:pincer, fig:layers, fig:induction, fig:actorsbelow, fig:frozengas, fig:lightpair,
  fig:lineage, fig:wavemodes, tab:settlement`.

### TikZ lessons (paid for in compile cycles — do not relearn)

1. **Node text does NOT scale with `[scale=...]`** — only coordinates scale. Budget all
   widths in real cm against the text block: **usable width = 11.43 cm.**
2. Bottom labels: `anchor=north`, at a y chosen *below the lowest graphic in real cm*
   (remember unscaled text height). Then wrapping can never overlap the drawing.
3. Every panel caption gets a fixed `text width=...` box; two captions must never share
   unbounded horizontal space.
4. Timelines/tables: end-label overhang and `\tabcolsep` (6 pt/side/column!) are the
   usual overfull culprits; use `inner xsep=1pt` and `\setlength{\tabcolsep}{4pt}`.
5. After any figure edit: rebuild, check the Overfull count, and inspect the page with
   `pdftotext -layout` (and your eyes).

### 3b. The figure split (post proofviz overhaul)
Six geometric figures are now rendered PLATES from Niels's proofviz studio (JS sketches → cropped vector PDFs in `figures/`, included via `\includegraphics`): inversesquare, shadowpush, layers, actorsbelow, circulation, lightpair. Rules: (1) the `.sketch.js` is the single source of truth — edit it, never the PDF; regenerate via `node scripts/make-deliverables.mjs bbu_<name>` + pdfcrop (workflow comment sits above each figure in the .tex). (2) All six 3D sketches carry falsifiable `check.equal` assertions on their own constants (the earlier tautological tangent check was replaced by a real perpendicularity test, OT·CT = 0; `layers` and `actorsbelow` gained cross-panel magnification checks). `make-deliverables --strict` (or `PROOFVIZ_STRICT=1`) throws before writing anything and exits 1 if any check fails — verified: zero files written on a broken check. Advisory (write-anyway, print `check ✗`) remains the development default by design, so **final plates for print must be generated under `--strict`** for the making-of chapter's guarantee to describe the files actually shipped. Lesson kept: an earlier version of this entry said "export fails loudly if a claim breaks," inherited verbatim from a studio handover note and false at the time (advisory mode wrote the PDF anyway) — the strong version became true only once the studio implemented strict mode. Read the build output; never assume a bad figure cannot ship unless it was built under strict. (3) Panel captions are BAKED into the plates for layers/actorsbelow/circulation — never double-caption those panels in LaTeX. (4) New figures: genuinely 3D subject (space, shadows, orbits) → proofviz sketch; text-and-boxes (timelines, labeled curves, flowcharts) → TikZ, with room left around every label. (5) Palette unchanged; addendum: bbuBlue may also serve as the second ink for one of two opposed rotation senses where arrowheads alone are too subtle — the binding rule is grayscale separation, always.

## 4. Bibliography workflow

- `ref.bib` is organized by book part; keys are mnemonic (`tegmark2014`, `lesage1782`,
  `ligo2017`, ...).
- Currently the preamble has `\nocite{*}` (draft mode: everything listed). The revision
  task is to delete `\nocite{*}` and add `\cite{...}` at each invoking passage.
- **Fact-check pass:** `grep VERIFY ref.bib` lists every entry with unconfirmed details
  (page ranges, volumes, exact old-source wording). Ch. 2's craft note has an 11-point
  verification list; Ch. 7's lists the physics figures to confirm (Poincaré's Le Sage
  numbers, GW170817 speed bound, electron g−2, substructure bound).

## 5. Illustrations (generated art)

- Pipeline, prompts, and spending rules: `PROMPT_illustrations_for_code_claude.md`
  (uses the generator described in ASSET_GRAPHIC_SPEC_GUIDE.md; **always dry-run,
  always wait for human approval before spending**).
- Masters live in `art/` (committed). Regenerating? **Never delete** — archive the old
  file to `art/unused/<name>_<YYYYMMDD-HHMMSS>.png` first.
- Provenance: the spec JSON + a copy of the run's delivery JSON are committed
  (`art_specs/`); they are the durable record of the as-built prompts.
- Grayscale-convert winners before print (`PIL: Image.open(p).convert("L")`).
- DPI note: API max sizes ⇒ full-page art ≈ 170 DPI (fine for draft; 2× upscale before
  physical print). Chapter openers at 0.62\textwidth are already >300 DPI.
- **Hard rule:** argumentative diagrams are TikZ, never generated. Generators
  approximate; arguments may not.

## 6. Revision workflow

Open tasks, in priority order (details in `CLAUDE.md`):
1. Fact-check pass (all `VERIFY` flags; Ch. 2 + Ch. 7 lists).
2. Ch. 5 opening: currently re-establishes the copies that Ch. 4 now establishes —
   trim to lean on Ch. 4, or keep as a deliberate echo (decide once, note the decision).
3. Replace `\nocite{*}` with per-passage citations.
4. Author scenes: Ch. 1 wants rough ages + one physical detail per childhood memory;
   Ch. 5 wants a real moment the copies idea comforted him (locations marked in
   draftnotes).
5. Voice pass, whole book, reading aloud; then flip `\draftnotesfalse` for a clean copy.

Editing rule: **the .tex is the master.** The `chapter*_draft.md` files are the frozen
generation sources — reference, not edit targets.

## 7. Git conventions

- LF in repo; `.bat` files CRLF (see `.gitattributes`). Build artifacts ignored.
- The compiled PDF is ignored by default; force-add deliberately for a release.
- `CLAUDE.md`, `art/`, `art_specs/`, provenance JSONs: committed.
  `.claude/settings.local.json`, per-run delivery files: not.

## 8. Color policy
Three accents, defined once in the preamble under the `\ifdigitaledition` toggle, at staggered luminance so the grayscale interior keeps every distinction: **bbuBlue** `#2E5A78` (momentum, gravity, waves of space), **bbuRed** `#B3432B` (energy, heat, repulsion, warnings), **bbuGold** `#C08A2D` (light, depletion/quiet zones, counting). Print edition (`\digitaleditionfalse`) maps them to gray 0.22 / 0.42 / 0.60 and blackens links. Rules: color never carries meaning alone — every colored distinction is redundant with line weight, dash, position, or a label; at most one semantic accent family per figure element; body text and headings stay ink. Both editions must build with zero errors and zero overfull before any commit.

## 9. Patch-file hygiene
Patch files are instructions to another agent and must be internally consistent. Rules, earned the hard way: (1) **never hand-splice a patch file into a new version** — regenerate it, or rewrite the affected sections wholesale; splicing preserves stale paragraphs that then contradict the new patches. (2) Before shipping, re-read the file end to end asking one question: does any sentence contradict any other? A patch that says "X is deliberately not done" alongside a patch that does X will cost the receiving agent a judgment call it should never have to make. (3) **Never name a companion file in a patch without shipping it in the same bundle** — if bundle and instructions disagree, the instructions are wrong. (4) **Scale the patch form to the size of the change:** whole-file replacement when several paragraphs move (it prevents rule 1's splicing failure); an exact old→new string when one sentence changes. Never quote a change with an ellipsis in either form — the receiving agent cannot and should not reconstruct prose from an elided quotation. (5) **These rules apply to this file too.** The garbled §3b of 2026-07-27 was produced by hand-splicing `MANUAL.md` — the very document that carries rule (1). Rewrite whole sections; never patch a section's opening and leave its old body attached. (6) **MANUAL changes travel as section replacements, never whole files.** chat-claude's local copy has demonstrably drifted from the repo's (it lacked the build-automation note entirely and would delete it on every whole-file drop, which code-claude has had to silently restore). The repo is master per `FILE_OWNERSHIP.md`: ship "replace §N entirely with this text" and let code-claude apply it. (7) When a decision changes between versions, say so explicitly ("an earlier revision said the opposite; this supersedes it") rather than silently deleting — the receiving agent may have the old file. (8) **Inline anything small; reference only what you ship.** Four bibliography entries are small — paste them into the patch, do not reference "copy them from my `ref.bib`". Use a companion file only for fragments too large to inline (whole sections), and before sending, check that every file named in the patch is actually in the bundle. This is the structural version of rule (3): the earlier rule said *ship what you name*; this one says *don't name it unless it is too big to inline* — the second is harder to get wrong. (Broken twice as of 2026-07-27, both times by naming a file that existed only on the sending side.)

## 10. Numbers in word-form
The book spells large numbers out ("a hundred thousand million million", "fifty million times", "a ten-millionth of a square metre per second") because that is its voice. Two rules, earned by getting one wrong by six orders of magnitude: (1) **never write a word-form from feel** — build it explicitly (million = 10⁶, million million = 10¹², thousand million million = 10¹⁵, hundred thousand million million = 10¹⁷) and confirm the exponent before it goes in. (2) **Check it against any figure the book already quotes for the same quantity** — if the same bound appears twice in different words, the two forms must agree, and the earlier one is usually right because it has already been through the gate. A number stated twice in one chapter should be flagged in prose as the same measurement, not left to look like two.

## 11. Tolerances
`check.equal` tolerances in the studio are **absolute**, not relative. Compute a margin as `|lhs-rhs| / tol`, never as a percentage of the value --- reading an absolute tolerance as a relative one understated a comfortable 82% margin as 7% and produced a warning about spurious failures that was groundless. Related rule, from the same episode: the studio's checks are closed-form expressions on each sketch's own constants, evaluated before rendering, so camera or sampling changes cannot move them.
