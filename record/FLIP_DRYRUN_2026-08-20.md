# Flip-checklist dry run — report (2026-08-20)

*Rehearsal of `process/FLIP_CHECKLIST.md` at HEAD `3618286`, run early on purpose: the checklist's
own premise is that flip day must be a visibility toggle, not a cleanup crisis, and the only way to
know that is to run it while there is still time to fix what it finds. Nothing was changed except
the `\digitaledition` flag, flipped for the print build and flipped back (working tree clean,
verified after).*

| # | Checklist item | Result |
|---|---|---|
| 1 | `[RULING PENDING]` markers resolved | **EXPECTED-OPEN (2)** + **checklist defect** — see below |
| 2 | Scrub gate re-run (REPO_SPEC §5) | **PARTIAL** — §5.3 finding (widened), §5.4 measured, §5.1/§5.2 not runnable here |
| 3 | Float gate, both editions | **PASS** — 0 `Overfull`, 0 `Float too large`, 0 undefined, 0 errors, both |
| 4 | Collision gate, both editions | **PASS** — 0 collisions, exit 0, both; stacked-fraction count 5 (expected) |
| 5 | Real gitleaks CI pass | **NOT RUN** — tool not installed in this environment; CI-only, as the checklist says |
| 6 | `reuse lint` clean | **NOT RUN** — tool not installed; CI-only, as the checklist says |
| 7 | Beta-name sweep | **NOT RUNNABLE BY CC** — the reader list lives in `archive/`, outside the repo. Proxy checks pass (below) |
| 8 | Imprint placeholders filled | **OPEN (1 of 2)** — repo URL filled; ISBN still bracketed. Plus a stale `\PAGECOUNT` |
| 9 | Release PDF force-add | release-day action, not rehearsable |
| 10 | OpenTimestamps Phase 2 (OTS-3) | release-day action, not rehearsable |
| 11 | Tag `first-edition-1.0` | release-day action |
| 12 | Flip visibility | release-day action |

## The two gates that matter, in full

Both editions built from `manuscript/` with direct `pdflatex` ×3 + `biber` (not `build.bat` —
`cmd //c build.bat` was not found from the Bash tool; the direct sequence is the documented
fallback and is what ran).

| | pages | Overfull | Float too large | undefined | errors | collisions | exit |
|---|---|---|---|---|---|---|---|
| digital (`\digitaleditiontrue`) | 200 | 0 | 0 | 0 | 0 | 0 | 0 |
| print (`\digitaleditionfalse`) | 200 | 0 | 0 | 0 | 0 | 0 | 0 |

Log length 2254 lines both runs — not a truncated log, so not the locked-PDF trap the checklist
warns about. `check_collisions.py` reported the expected trailing note verbatim in both editions:
*"5 stacked-fraction overlap(s) below the 8 pt width threshold, not counted"* — the count has not
moved from the five inline `\frac`s H3 measured, so nothing needs looking at.

**Page count is 200, digital and print, identical.** This is the number every downstream item
depends on, and it is not yet locked: the two pending plate rulings (Coda reprise, toy map) both
move it.

## Findings

### F1 — the marker grep can never return zero (checklist defect, not a repo defect)
`grep -rn "RULING PENDING"` at HEAD returns **7** hits, of which:
- **2 are the real open markers**, both exactly as the checklist predicts: `README.md:40` and
  `ERRATA.md:15`, the `first-edition-1.0` tag lines. Both resolve in the release commit.
- **1 is `process/FLIP_CHECKLIST.md:6` itself** — the checklist line that *describes* the grep
  contains the string it greps for. So the item can never pass as written.
- **4 are in `nbj/`**, which is gitignored and never public.

Suggested repair to the checklist line, so flip day is not spent puzzling at a self-match:
`grep -rn "RULING PENDING" --exclude-dir=.git --exclude-dir=nbj --exclude=FLIP_CHECKLIST.md`
returns zero once the two tag lines are filled. Not applied — the checklist is process prose and
this report is the place to raise it.

### F2 — absolute local paths: REPO-1 §5.3 finding is wider than REPO-1 recorded
`record/REPO1_SCRUB_2026-07-30.md` item 4 left this open ("genericize or accept") naming
`ASSET_SPEC_GUIDE.md` (since removed) and `FIGURES_NOTE.md`. The sweep at HEAD finds **7 tracked
files, 77 lines**, most of them arriving after that scrub with the art provenance:

| file | hits |
|---|---|
| `art/generated/delivery_book_illustrations_20260703_085757_2240.json` | 24 |
| `art/generated/delivery_latest.json` | 24 |
| `art/provenance/delivery_book_illustrations_20260703_085757_2240.json` | 24 |
| `figures/FIGURES_NOTE.md` | 1 |
| `figures/PROVENANCE.md` | 1 |
| `process/TODO-NIELS.md` | 1 |
| `record/REPO1_SCRUB_2026-07-30.md` | 2 |

All are of the form `D:\Niels\Proj-2026\Everything\code-claude\art\generated\…`. **No `C:\Users\…`
hits at all** — no home directory, no Windows username beyond "Niels", which is on the cover. What
they disclose is a drive letter, a folder layout, and the working-directory name `code-claude`
(the public repo is `billiard-ball-universe`).

Severity: low. But it is a §5.3 item that is still formally open, and it is now three orders of
magnitude larger than when it was opened, so it should be closed by a ruling rather than by
forgetting. **No silent fixes** (§5.5) — the three JSONs are generation provenance and rewriting
their recorded `out_dir` would falsify a provenance record, which is the one thing that file exists
to avoid. The honest options are: (a) accept and say so in `art/PROVENANCE`; (b) genericize only the
three prose files (`FIGURES_NOTE.md`, `PROVENANCE.md`, `TODO-NIELS.md`) and accept the JSONs as
machine-written history; (c) genericize everything and note the substitution. Recommendation: **(b)** —
it removes the paths a reader would actually see while leaving the machine record untouched and true.

### F3 — history size, measured (REPO-1 item 7, was PENDING)
`size-pack` = **162.52 MiB**, 354 loose objects, 868 objects across all refs. The weight is the
committed interior PDFs and the art masters, exactly as anticipated. Per §5.4 this is **report, do
not act**: rewriting history to slim it would delete the very record being published. A clone is a
~163 MiB download; that is the cost of publishing the record, and it should simply be known before
the flip rather than discovered by the first person who clones. REPO-1 item 7 can be closed as
measured-and-accepted on a one-word ruling.

### F4 — imprint and cover numbers
- `manuscript/billiard_ball_universe.tex:157` — `ISBN: [paperback ISBN --- assigned at
  publication]`. Open by design; fills at KDP upload (TODO-NIELS §4).
- `cover/cover_wrap.tex:10` — `\newcommand\PAGECOUNT{182}`. Stale by **18 pages** against today's
  200. The spine it computes is 0.410 in against a true 0.450 in. This is already a release-day
  step, so it is not a defect — recorded only so the number is not trusted in the meantime.

### F5 — beta-name sweep, what could be checked without the list
The sweep proper needs the names, which are correctly not in this repo. Proxy checks, all **PASS**:
- `nbj/` is gitignored and no `nbj/` path is tracked.
- No `archive/` content is tracked (the `timestamps/2026-07-31-archives/` matches are `.ots` proof
  files — hashes, no content).
- The only email address anywhere in tracked text is `nielsbj@gmail.com`, and only inside
  `record/REPO1_SCRUB_2026-07-30.md`, where it appears as the subject of the ruling about itself.
- `process/TODO-NIELS.md` refers to readers only by pseudonym throughout, as its own header
  requires *(wording generalized 2026-08-28 — see `record/SCRUB_TRIM_2026-08-28.md`)*.

## What this rehearsal says
The two gates that can actually fail on flip day — floats and collisions — **pass clean in both
editions at 200 pages**. Everything else outstanding is either a release-day action, a CI-only tool
run, or a one-word ruling (F2, F3) and the checklist's own self-matching grep (F1). Nothing here
requires work before publication; it requires three small decisions.
