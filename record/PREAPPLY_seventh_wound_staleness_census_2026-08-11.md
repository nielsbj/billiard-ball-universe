# PRE-APPLY CENSUS — every place a seventh wound changes the count

*Written 2026-08-11 by code-claude, ahead of patch **P1** (the seventh wound: "one wound, two rooms" —
UFF/MICROSCOPE as asset-and-price, then GR's classical tests as the unpaid bill). Companion to
`PREVERIFY_hostile_read_citations_2026-08-11.md`, which pre-verified P1–P6's citations. That file is
the apply-time gate for **sources**; this one is the apply-time gate for **counts**.*

**Baseline this census was taken at:** commit `9e4cfc2`, manuscript byte-identical to `fa023d8`.
Build at that baseline: **184 pp, 0 errors, 0 Overfull \hbox, 0 Overfull \vbox, 0 undefined.**

## How to use this file

Ch. 7 does not merely contain six wounds; it *counts* them, in prose, out loud, nine times, in four
different registers (the chapter's opening enumeration, two mid-chapter forward references by
ordinal, the table and its two framing sentences, the closing lesson, and the how-made note two
chapters later). A seventh wound is therefore not a section insert — it is a renumbering event.

At apply time: **diff P1's edit list against the table below.** Any row not covered by the patch is
either a deliberate exception (record why) or a staleness bug (STOP and report — do not fix prose
unilaterally; that is the standing cardinal rule). Rows are in file order.

## A. Hard count-bearing — the patch MUST touch these

| line | what it says now | why it breaks |
|---|---|---|
| **1109** | `Six wounds: one three hundred years old, … one still …` — the chapter's opening enumeration, one clause per wound | Both the numeral **and** the six-clause list. The seventh needs its own clause, in the same cadence. This is the hardest single edit in P1. |
| **1458** | `Six wounds, six responses, six invoices.` — opens *The State of the Wounds* | Three numerals in five words. |
| **1469–1479** | `tab:wounds` — six body rows (`drag \& heat` / `the wave in nothing` / `charge orientation` / `exactness` / `the correlations (Bell)` / `the saturated shadow`) | Needs a seventh row. See §C for the float risk. |
| **1486** | `Read forward, it is a defence: six attacks, six replies, six invoices.` | Three more numerals. |
| **1738** | `Six wounds, and the table above holds their state.` — opens *What That Teaches* | Numeral. |
| **1813** | `Two of the six wounds in Chapter~7 reached their final form because a machine told me a number…` | **Easiest to miss** — it is in *A Note on How This Book Was Made*, 350 lines below the chapter, and no wound-count sweep of Ch. 7 alone will find it. |

## B. Soft — true today, and the seventh wound may falsify them

Judgement calls, not mechanical edits. Flag each in the apply report whether P1 addresses it.

| line | text | the question |
|---|---|---|
| **1365** | `This wound is the deepest of the five that were handed to me` (Fifth Wound) | UFF/MICROSCOPE **is** a handed-down objection. Appended as the seventh, it makes the handed-down total **six**, not five — so this becomes a false count even though the sixth wound (self-found) sits between them. Either the numeral moves to six, or the sentence is rephrased to "the five handed to me *so far*". |
| **1413** | `The five wounds above were handed to me… This one nobody handed me` (Sixth Wound opener) | Positionally still true — five *above* it. But it reads as a total, and the seventh will follow it. If §B/1365 changes, this must be checked in the same pass for consistency of the same claim. |
| **1482** | caption: `Two purchases recur in the price column --- the hidden frame and the downward regress --- and one assumption, lower layers are faster, does duty in two separate rescues.` | A seventh price either joins one of the two recurring purchases (caption strengthens, numeral may move to three rescues) or introduces a third. Recompute against the new row; do not leave the caption asserting an arithmetic the table no longer shows. |
| **1486** | `…the reading the second and sixth wounds each found for themselves` | If the seventh wound also reads backward as a specification of the layer below (the UFF price plausibly does), this becomes "the second, sixth and seventh". |
| **1486** | `It is the first wound, which until this page has only taken, that supplies the two rows with numbers in them.` | If the seventh wound's room-one (MICROSCOPE) carries a number — and it does — this is **three** rows with numbers, and the first wound is no longer alone in supplying them. Load-bearing sentence; check carefully. |

## C. Structural / build risks P1 creates

1. **Insertion point** is line 1456, immediately before `\section{The State of the Wounds}` — that is
   the only position that preserves every ordinal in §D. Any other placement is a full renumbering.
2. **Scoreboard line.** Four wounds carry a closing `Scoreboard: \emph{…}` line (1340 third, 1361
   fourth, 1409 fifth, 1454 sixth); the first and second close differently. A seventh wound sitting
   directly after the sixth should carry one — its absence would read as an omission, not a choice.
3. **`tab:wounds` float.** Six `P{}` rows at `\footnotesize`, columns 1.85+3.05+2.9+2.6 cm. A seventh
   row is the change most likely to tip this float past the block. After applying, check
   **`Overfull \vbox` specifically** — the failure mode that put `fig:saturation` four lines off the
   bottom (TODO.md §6.8). Do not pre-emptively shrink; measure first.
4. **Pagination.** P1 is estimated at part of the net +4–5 pp on 184. The cover spine stays held
   until the final count (`billiard-cover-state`); the reader draft's `[N] = 180` is a *separate*
   apparatus-off build and is unaffected by P1 until it is re-cut.

## D. Ordinal cross-references — SAFE if and only if the seventh is appended seventh

Recorded so the applier can confirm at a glance rather than re-derive. All of these name a wound by
ordinal and would silently go wrong under any insertion earlier than position seven:

- **1141** — `the fourth wound of this chapter, waiting below, supplies the valve unbidden` (forward ref from the first wound)
- **1305** — `the fifth wound of this chapter will demand … influences faster than …` (forward ref from the second wound)
- **1611**, **1615**, **1621**, **1731** — four back-references to `the sixth wound` from the collapse, stiffness and dark-matter sections
- **1815** — `the sixth wound shrank to its true size` (how-made note)
- **1831** — Dictionary, `The violation is the Fifth Wound`
- **1887** — Dictionary, `the exactness this book's fourth wound must explain`
- **278** — `this book's first and worst wound` (Ch. 2); **844** — `the next chapter's first wound` (Ch. 6). Both ordinal-safe regardless.

## E. Post-apply sweep to run

```
findstr /C:"Six wounds" billiard_ball_universe.tex      → expect 0
findstr /C:"six attacks" billiard_ball_universe.tex     → expect 0
findstr /C:"six invoices" billiard_ball_universe.tex    → expect 0
findstr /C:"six responses" billiard_ball_universe.tex   → expect 0
findstr /C:"six wounds" billiard_ball_universe.tex      → expect 0   (catches L1813)
findstr /C:"Seventh Wound" billiard_ball_universe.tex   → expect 1
```
Then both editions (`\digitaleditiontrue` → `false` and back): 0 errors, 0 Overfull hbox, **0 Overfull
vbox**, 0 undefined. Report the new page count against the 184 pp baseline.

*No prose was touched in making this file.*
