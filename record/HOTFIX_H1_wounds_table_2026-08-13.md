# H1 — HOTFIX: tab:wounds exceeds \textheight; float gate learns the warning class (applied 2026-08-13)

**STATUS: PARTIAL. F1–F5 all executed; the overflow is cut from 123.09 pt to 59.34 pt but is
NOT closed. The sweep's "zero float-too-large hits" is unmet and one ruling is needed — see
"The open item" below, which carries measured numbers for every candidate.**

*From chat-claude, reported by Niels off the page. Transport: the ===FILE bundle protocol, fourth
use. Received as `nbj/H1_bundle.txt`, split to `nbj/H1_wounds_table_overflow.md`. Mirrored below.*

## F4 first: the book-wide float census, before any fix

F4 asked for every hit book-wide before anything was touched. On the pre-H1 (P10) build:

| warning class | hits |
|---|---|
| `Float too large for page by` | **1** — line 1526, by 123.08864 pt |
| `Overfull \vbox` | 0 |
| `Overfull \hbox` | 0 |

Line 1526 is `tab:wounds`'s `\end{table}`. **Nothing else in the book is over** — `tab:settlement`
(the other table, lines 516–535), the cascade figure, and every full-page plate are all clear. The
defect was singular, and the log had been reporting it for several builds while the gate watched
only `Overfull`.

## Applier's record (code-claude)

- **F1a** — caption anchor verified unique; caption now ends at *"telling you what its money is.}"*.
- **F1b** — the caution inserted as its own paragraph immediately after `\end{table}`.
  **Quote-back (writing-law rule 7), the sentence that now follows it:**
  > The state of the wounds can be read twice. Read forward, it is a defence: seven attacks, seven
  > replies, seven invoices. Read backward, the same rows are a description of the layer below…

  Rule 1 check: *"The state of the wounds"* is a full noun phrase, not a bare anaphor. The
  insertion displaces nothing and **no repair is needed**.
- **F2** — `\addlinespace[2pt]` → `[1pt]`, **6 replaced, exactly as expected**. Scoped to the
  `tab:wounds` block by locating `\label{tab:wounds}` and walking out to its own
  `\begin{table}`/`\end{table}`; `tab:settlement` contains none of them, and the file-wide
  `\addlinespace` total is unchanged at 9, so no other table was touched.
- **F3 — FIRED, and reported prominently as instructed.** After F1–F2 the table still overran, so
  the pre-authorized cell trim was applied: the correlations row's "still open" cell loses
  *"faster than ours,"*. Niels-visible by design — the phrase is gone from that cell, though
  *lower layers are faster* still does its work in the caption's neighbouring prose and in the
  chapter body.
- **F5 — verification on the page, both editions.** Table renders on **PDF p. 135 (folio 125)**.
  Rastered at 130 dpi, digital and print: **the folio does NOT sit clear.** The caption's third
  line ("…keep spending the") runs across the page number, identically in both editions. This is
  the visible face of the 59.34 pt still outstanding.
- **Float height vs `\textheight`:** `\textheight` = **534.79756 pt** (geometry's value; KOMA's
  typearea line reports 595.80026 pt before the override, which is not the operative number).
  Float ≈ **594.14 pt**. It must shed **59.34 pt, about 11%**.

### Progress of the three height edits

| stage | float over by |
|---|---|
| pre-H1 (P10) | 123.09 pt |
| after F1a+F1b+F2 | 70.89 pt |
| after F3 | **59.34 pt** |

## The open item — one ruling needed, with the numbers already measured

F3 was the last pre-authorized lever and it was not enough. Rather than leave the next round
guessing, each candidate was measured on throwaway probe copies (built and deleted; the master was
never touched):

| candidate | still over by | verdict |
|---|---|---|
| baseline (H1 as committed) | 59.34 pt | still over |
| **A — set the table `\scriptsize` (from `\footnotesize`)** | — | **closes it** |
| B — `\tabcolsep` 3.5 pt → 2 pt | 59.34 pt | **buys nothing**; the columns are fixed-width `P{}`, so tightening the gutters does not change a single wrap |
| C — cut the caption to one line | 24.69 pt | buys 34.65 pt, still over |
| D — A + B | — | closes it, but B contributes nothing to the result |

**Recommendation: A alone.** It is the only lever that closes the gap, it needs no further prose
cut, and it is one step on the same size ladder the table already sits on. The cost is legibility:
8 pt type in a 6×9 interior, on a seven-row reference table meant for scanning and flip-back. That
is an author's aesthetic call on how a page looks, not an applier's, so it was **not** applied
unilaterally — the same reason F3 was written as pre-authorized rather than assumed.

Note that C does **not** close it even though F1a already moved the caution out of the caption; the
caption is still four lines because it carries the two-purchases gloss.

## Build state as committed

- Both editions: **0 errors / 0 Overfull hbox / 0 Overfull vbox / 0 undefined.**
- **1 `Float too large` hit remains** (59.34 pt) — the open item above.
- **Page count 198 pp, unchanged.** Campaign total stays 184 → 198.
- Underfull 7 → 8: one new `Underfull \vbox`, on the float page itself. It is a symptom of the
  unresolved overflow, not a separate defect, and should go when the table fits. (`\vbadness=8000`,
  so only badness-10000 cases are reported at all.)
- **Commit message deviates from the bundle's**, deliberately. The bundle specified
  *"fix: wounds table within text height…"*, and the table is **not** within the text height. A
  commit subject asserting a fix that did not land would be false in the permanent record, so the
  subject states what actually happened and flags the pending ruling.

## F4 as implemented, permanently

- `manuscript/build.bat` — pass criteria now print `Overfull` **and**
  `Float too large for page by`, with a comment recording why the class was added.
- `process/FLIP_CHECKLIST.md` — new gate item, both editions, zero hits of either class. It also
  records a trap hit twice during this session's work: **a truncated log does not count as a
  pass.** If the log ends at `\begin{document}` with "I can't write on file …pdf", the PDF was
  locked by an open viewer and the build never reached the body — such a log reports 0 Overfull
  and 0 float warnings because it typeset nothing.

## The bundle as received (verbatim, from nbj/H1_bundle.txt)

===FILE nbj/H1_wounds_table_overflow.md===
H1 --- HOTFIX: tab:wounds exceeds \textheight on p. 125; plus the gate learns the
float-warning class. From chat-claude, reported by Niels off the page. Verify each
OLD once; edits F1-F2 are the fix, F3 fires only conditionally; mirror to record/.

F1a (caption surgery -- the caution moves out):
OLD: telling you what its money is. One more caution, applying the chapter's own rule to its own bookkeeping: economy is not evidence. A single unobservable device deployed four times is one assumption, not four survivals; the recurrence earns the toy nothing --- what it earns is only a sharper statement of what must be true if the toy is.}
NEW: telling you what its money is.}

F1b (the caution becomes body prose): insert immediately after this table's
\end{table}, as its own paragraph:
One more caution belongs beside the table, applying the chapter's own rule to its
own bookkeeping: economy is not evidence. A single unobservable device deployed four
times is one assumption, not four survivals; the recurrence earns the toy nothing ---
what it earns is only a sharper statement of what must be true if the toy is.
(Quote back the sentence that now follows it, per writing-law rule 7.)

F2 (row spacing, this table only): within the tab:wounds table block, replace every
\addlinespace[2pt] with \addlinespace[1pt] --- report the count replaced (expect 6);
no other table touched.

F3 (conditional, pre-authorized by chat-claude, Niels-visible): rebuild after F1-F2
and grep the log for "Float too large". If tab:wounds still overflows by any amount,
apply this one cell trim and report it prominently:
OLD: sub-layer channels --- the lower layer's own light --- faster than ours, in the frame already bought and hidden: Bell's recommended ether
NEW: sub-layer channels --- the lower layer's own light --- in the frame already bought and hidden: Bell's recommended ether
If F1-F2 sufficed, F3 does not fire.

F4 (the gate, permanently): the build script's pass criteria gain: grep the full log
for "Float too large for page by" and "Overfull \vbox" --- zero tolerance, same as
Overfull hbox. Run it on THIS build and report every hit book-wide, not only
tab:wounds --- if tab:settlement, the cascade figure, or any full-page plate is also
over, report before fixing anything else. Add the same line to FLIP_CHECKLIST.

F5 (verification on the page, not the log alone): raster the rebuilt table page both
editions; confirm the folio (page number) sits clear below the float; report the
float's height vs \textheight from the log.

SWEEPS: caption ends at "money is."; the caution paragraph present once, after the
table; 0/0 both editions AND zero float-too-large hits; page count reported; mirror
to record/; commit: fix: wounds table within text height --- caution to prose, row
spacing, float gate learns the warning class (H1).
===END===
