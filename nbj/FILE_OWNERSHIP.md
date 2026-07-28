# FILE_OWNERSHIP.md — who owns what, and one reconciliation job
*For code-claude. Answering your closing question: yes, please reconcile the numbered files in `nbj/` — and then let's close the drift permanently, because those duplicates are the predicted failure and they will get worse now that Chapter 7 is finished and attention moves to production.*

## Where the numbered files came from

`TODO (21).md`, `ref (24).bib`, `book_outline (22).md` are browser-download collisions: Niels downloads chat-claude's outputs and drops them in the repo folder, and the numbering is his browser disambiguating, not a version scheme. They are chat-claude's copies at some past moment. **None of them should be trusted over the repo for the manuscript files.**

## The rule, going forward

| file | master | how changes travel |
|---|---|---|
| `billiard_ball_universe.tex` | **repo** | chat-claude ships patch files with exact strings or whole-section fragments; code-claude applies |
| `ref.bib` | **repo** | same |
| `TODO.md` | **repo** | chat-claude ships *new ledger rows* as patch text; code-claude merges and marks rows CHECKED/CLOSED as it works |
| `book_outline.md` | **repo** | chat-claude ships *appended entries*; code-claude appends. Nobody rewrites history already written |
| `MANUAL.md`, `VOICE.md`, `BOOK_COVER.md`, `TODO-CODE-CLAUDE.md` | **repo** | chat-claude ships replacements or sections; low churn |

chat-claude keeps working copies for building and drafting; those are **never** authoritative and should never be pasted over repo files wholesale.

## The reconciliation job

For each of the three numbered files, produce one merged master in the repo and delete the numbered copy:

**`ref (24).bib`** — mechanical. The repo is strictly ahead (DOIs, cleared flags, `witten1983`, `baadezwicky1934cr`, `eht2022`). Diff to confirm the numbered copy contains no entry the repo lacks; if it does, report it rather than merging blind. Otherwise delete the duplicate.

**`TODO (21).md`** — mostly mechanical, one rule: **union, never subtraction.** Any row present in either copy survives. Where the two disagree on a row's *status*, the repo wins (you have been marking them as you worked). Where the numbered copy has a row the repo lacks, keep it — it is a check chat-claude opened that has not reached you yet. Report the list of rows you added from the duplicate.

**`book_outline (22).md`** — this one needs judgement, so here are the rules. It is a project log, so: union of content, chronological order, **no deletion of anything either copy records**. The two copies will each hold history the other lacks — chat-claude's has the drafting and argument history, yours has the fact-check and commit history, and both are worth keeping. Where they describe the same event differently, keep both descriptions rather than choosing; where they *contradict* on a fact (a page count, a decision, who did what), **stop and report that contradiction** instead of resolving it. Contradictions in the log are usually a sign one of us misremembered something that matters.

After each merge, commit separately: `hygiene: reconcile <file>`.

## What this leaves open

Nothing on Chapter 7. Confirmed on my side: `witten1983` was already resolved in 78d0760 and my local copy has been brought into line (DOI added, flag cleared, companion noted as the Wess–Zumino co-citation). Live VERIFY flags remaining in the whole bibliography: **none for Chapter 7**; my local shows three stale ones on `chandrasekhar1931`, `oppenheimervolkoff1939` and `bekenstein1973` which your run-4 already cleared — repo is master, ignore mine.

The remaining project work is Niels's and not ours: the cold read-through, the index population pass (`TODO.md` §5), and production. The fact-check era is over.
