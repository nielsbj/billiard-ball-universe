# TODO-CODE-CLAUDE.md — fact-check and citation run
*Operating instructions for code-claude on The Billiard Ball Universe. The ledger of items lives in `TODO.md` §3–§4 — that file is the single source of truth for WHAT to check; this file defines HOW you work, what you may touch, and what you must hand back.*

## Your permissions — read carefully

**You MAY edit directly:**
- `ref.bib` — fill missing pages/volumes/DOIs, add `url` fields, correct details, and delete a `VERIFY` note once its item is confirmed.
- Text **inside `draftnote` environments only** in `billiard_ball_universe.tex` — these are working apparatus, not book prose. When a numbered sub-item in a craft note is resolved, delete that sub-item (and delete the whole environment when it is empty).
- In **Stage 2 only** (see gate below): insert `\cite{...}` commands per the rules in `TODO.md` §4, and delete `\nocite{*}`.

**You MUST NOT edit:**
- Any book prose outside `draftnote` environments. Not one word, not punctuation, regardless of what you find.
- Figures, captions, footnotes, appendices, the Dictionary.
- The markdown chapter sources (`chapter*_draft.md`) — frozen.

**The cardinal rule:** if a source's fact or number disagrees with what the book's prose says, you do NOT fix the prose. You record a **DISCREPANCY** in the report (see format) and move on. Niels decides all prose changes.

## Stage 1 — the fact-check run (do now)

1. Open `TODO.md` §3. Work every row tagged **[CC]** that is still OPEN, in order (3A stale-flag cleanup, then 3B, 3C, 3D). Skip every row tagged **[NIELS]** or **[ASK]** — list them untouched at the end of your report.
2. For each row: fetch the named source at the given link, or find it via the given venue (Wikisource, Internet Archive, arXiv, Perseus, Newton Project, earlymoderntexts.com, PDG, NASA ADS, KNAW, APS-free PPF, Einstein Papers). If a domain is unreachable from your network, mark **NOT-REACHED** with the URL you tried and continue — never guess a detail to fill a gap.
3. Confirm exactly the detail listed under "check" in the ledger row — usually one number, one date, one page range, or one quotation's wording.
4. Apply your permitted edits (`ref.bib`, resolved craft-note sub-items).
5. After all rows: run `build.bat`. Required: zero errors, zero `Overfull`. If the build breaks, fix your own edit or revert it — never "fix" by touching prose.
6. Commit in two commits: `factcheck: ref.bib confirmations and corrections` and `factcheck: resolved craft-note items`.

### Report format — write `FACTCHECK_REPORT.md`

One table, one row per ledger item, in ledger order:

| key / item | detail checked | source used (link) | verdict | note |
|---|---|---|---|---|

Allowed verdicts: **CONFIRMED** (matched; flag deleted) · **CORRECTED-IN-BIB** (bib detail was wrong; fixed; say old → new) · **DISCREPANCY** (source disagrees with book prose — quote the book's exact sentence, give the source's value, link; prose untouched) · **NOT-FOUND** (source located but detail absent — say what you did find) · **NOT-REACHED** (network; give URL).

After the table: (a) the list of [NIELS]/[ASK] rows left untouched; (b) the build result line (`errors: 0, overfull: 0, pages: N`); (c) count of remaining `VERIFY` flags (`findstr /C:"VERIFY" ref.bib`).

**Then STOP.** Do not proceed to Stage 2 in the same run.

## Stage 2 — the citation pass (GATED)

**Gate: only proceed if Niels has read FACTCHECK_REPORT.md and explicitly tells you "stage 2 go".** Discrepancy rows must be resolved by him first — a passage should not be cited to a source it disagrees with.

1. Follow `TODO.md` §4 exactly: cite at the first invoking passage; numeric style; one `\cite` per claim–source pair; use the three worked examples as the pattern for spacing and placement (`~\cite{key}` before terminal punctuation).
2. Every bib entry should end up cited at least once **if the text actually invokes it**. Build the mapping first (entry → passage) as a list in your working notes; if an entry has no natural invoking passage, do NOT force a citation — list it in the report under "uncited entries" for Niels to decide (cite somewhere or accept its removal).
3. Delete `\nocite{*}`. Rebuild fully (`build.bat`). The References section will now list only cited works — diff its contents against the previous build and report any entry that vanished.
4. Also rebuild the print edition once (`\digitaleditiontrue` → `false`, build, revert) — both must be clean.
5. Commit: `citations: per-passage \cite pass, \nocite removed`.
6. Append to `FACTCHECK_REPORT.md`: a "Stage 2" section with the entry→passage mapping, the uncited-entries list, vanished-entries diff, and the build lines for both editions.

## Style and conduct
- Work in the repo root; never `cd` away from it.
- No prose edits means no prose edits — including "obvious typos". Report them instead (a "typos noticed" list at the report's end is welcome).
- When quoting the book or a source in the report, quote exactly; the whole point of this run is exactness.
- If anything in these instructions conflicts with `CLAUDE.md`, `CLAUDE.md` yields on scope of edits (this file is stricter) but wins on build discipline and voice rules.
- If you are uncertain whether an edit is permitted: it is not. Put it in the report.
