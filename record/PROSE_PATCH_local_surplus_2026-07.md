# PROSE_PATCH — the local ratio becomes the local surplus
*Applied via inline transport (chat-claude → Niels → code-claude) and mirrored to record/ under the standing rule that transport-era patches leave files. Commits: 7ccb004 (manuscript + cover + CLAUDE.md, 18 edits) and a27ce94 (process/, 3 edits). Rulings by Niels: B (record the movement in prose), "Grow," "update." Date: per the commits.*

## Why
The author, mid cold-read, flagged that Chapter 5's central term — "the local ratio of joy to suffering" — is the wrong functional. The arithmetic at the boundaries: a ratio is improved by shrinking the denominator, so the numb, riskless life with a crumb of joy and zero suffering scores infinity — the opposite of the chapter's instruction in a chapter that says suffering does not exempt you from the task. At the other boundary, with joy near zero, improving a ratio reads as hopeless bookkeeping while a difference moves with the next act. And a ratio is scale-blind — double both entries and it does not register, though the copies-as-lever section requires magnitude to register. The surplus — joy minus suffering, in the book's ledger register — behaves rightly at both edges and at scale. The book now records this movement itself, in a parenthesis at the definition (E2 below).

## Edits — manuscript (Ch. 5, and the how-made chapter)
E1: `what we get back in exchange --- the local ratio --- turns out` → `...the local surplus...`
E2: `Not the total of joy --- the \emph{ratio} of joy to suffering, in the region you actually touch.` → `Not the total of joy --- the \emph{surplus} of joy over suffering, in the region you actually touch. (The first draft said \emph{ratio}, and a reader of arithmetic will see why it could not stay: a ratio is improved by shrinking the denominator --- the small, numb, riskless life scores best of all --- and that is the opposite of the instruction. A surplus grows only one way: more joy, less suffering, both counted at full size.)`
E3: `whether the ratio tilts toward joy or toward suffering` → `whether the balance tilts...`
E4: `The local ratio: those are the keywords of this whole chapter. Optimize the ratio where you are.` → `The local surplus: those are the keywords of this whole chapter. Grow the surplus where you are.`
E5: `begins simply: tend your ratio.` → `...tend your surplus.`
E6: `the emotions of the universe --- the ratio, wherever you can reach it ---` → `--- the surplus, wherever you can reach it ---`
E7: `has improved the ratio exactly as much` → `has improved the surplus exactly as much`
E8: `the totals are unreachable, tend the local ratio.` → `...tend the local surplus.`
E9: `Tend the ratio of joy to suffering within your reach` → `Tend the surplus of joy over suffering within your reach`
E10: `charge as circulation, the copies, the local ratio: those were in my notes` → `...the local surplus: those were in my notes`
C3: `When you tilt your local ratio toward joy` → `When you grow your local surplus` (tilt is a ratio verb; direction absorbed)
C4: `the local ratio, at every one of its infinite occurrences` → `the local surplus, ...`
C5: `a feeling being spending effort to move a local ratio toward joy` → `...to grow a local surplus`
C6: `the ratio, wherever beings can act on it, gets \emph{worked on}` → `the surplus, ...`
C7: `the ratio, where you are, among those you touch` → `the surplus, ...` (the chapter's closing line now matches its keyword)

## Edits — cover, agent notes, process
E11 cover/cover_wrap.tex and E12 cover/BOOK_COVER.md (byte-identical): `why your responsibility is the local ratio of joy to suffering;` → `...the local surplus of joy over suffering;`
C8 CLAUDE.md key-phrase list: `the local ratio` → `the local surplus` (the old line would have instructed a future agent to restore the retired phrase)
C9 process/book_outline.md illustration title → swapped, marked `[unbuilt; superseded by the shipped ch5_local_garden opener, which renders the same image]` — verified by a full fig:/includegraphics census: Ch. 5 ships no diagram
C10 outline description, C11 process/TODO.md index-starter entry → swapped (C11 was the live hazard: the index pass would have tagged a term the book no longer contains)

## Final state, sweep-verified
Manuscript: surplus = 16; prose "ratio" = 6, all deliberate — two inside E2's parenthesis quoting the retired word, four physics senses (flux-speed ratio; momentum-cheap by the ratio of the two speeds; cube root of the mass ratio; magnetic moment in fixed ratio to spin) — plus two keepaspectratio in figure code. Repo-wide "local ratio" = 0 outside this file and the archived history, which quote it deliberately: the record keeps retired words, because history said ratio. Both editions rebuilt 0/0; reader copy holds at 180 pp (the parenthesis absorbed into existing lines); [N] = 180 unchanged.

## Process finding, kept with the patch
The original sweep specification expected one residual prose "ratio"; the true count was six-plus-five-strays. Cause: the site census was read from a line listing truncated at 180 characters, in a manuscript whose lines are paragraphs. Corrective now standing: censuses count with an independent occurrence count beside any line listing. The gate (code-claude) held the build at the failed sweep, sorted strays into mechanical-vs-prose, and surfaced the CLAUDE.md landmine — the layered-gates design working as intended.
