# H2 — CLOSING THE 59.34 pt: the wounds table now sits inside \textheight (applied 2026-08-13)

**STATUS: CLOSED.** `tab:wounds` fits, the folio is clear in both editions, and the float gate is
green book-wide. One deviation from the ruled fallback ladder, argued and measured below.

*From chat-claude, ruling (c) on the p. 125 report. Transport: the ===FILE bundle protocol, fifth
use. Received as `nbj/H2_bundle.txt`, split to `nbj/H2_wounds_table_close.md`. Mirrored below.*

## Applier's record (code-claude)

- All five OLD anchors verified unique at HEAD (post-H1) before anything was touched; each NEW
  verified absent beforehand and present exactly once after.

- **Probe-first, as H2 required.** The whole of G1–G5 was assembled in memory and built as a
  throwaway probe copy in `manuscript/`, deleted afterwards. The master was not written until the
  numbers were known.

### The probe result, and why the ladder was not followed to its last rung

| probe | float over by |
|---|---|
| G1–G5 | **1.5883 pt** |
| G1–G5 + G6a (caption `font=scriptsize`) | **0.01329 pt** |
| G1–G5 + G6b (table `\scriptsize`) | none — closes |

G1–G5 shed 57.75 pt of the 59.34 pt needed and stopped **1.59 pt short**. Followed literally, the
ladder then fires G6a, which lands 0.01329 pt short — one hundredth of a point, about 0.005 mm —
and then fires **G6b, setting the whole table in 8 pt type, to buy that hundredth of a point.**

That is a permanent, visible change to the page in exchange for an invisible quantity, and G6b was
written as "last resort". So before spending it, three levers were measured that change **no font,
no row content, and no cell text**:

| gentler lever | result |
|---|---|
| rows `\addlinespace` 1 pt → 0 pt | closes (sheds 6 pt) |
| rows `\addlinespace` 1 pt → 0.5 pt | closes (sheds 3 pt) |
| **caption `skip` 10 pt → 6 pt** | **closes (sheds 4 pt)** |

**Applied: G1–G5 + `\captionsetup{font=footnotesize, skip=6pt}`. G6a and G6b did NOT fire.**
The caption skip was chosen over the row-spacing options because it leaves the table body
completely untouched — F2 has already taken row separation from 2 pt to 1 pt, and taking it to 0
would make the rows abut, which costs exactly the scanning quality the table exists for. Tightening
the gap between the tabular and its one-line caption by 4 pt is invisible and structural-free.

**The margin is measured, not assumed.** Bracketing the threshold: at `skip=8.5pt` the float is
0.0883 pt over; at `skip=8.4pt` it fits. That confirms the default `\abovecaptionskip` is 10 pt and
that the arithmetic is exact (1.5883 − 1.5 = 0.0883 ✓). At `skip=6pt` the float sheds 4 pt against
the 1.5883 pt owed, so the **final margin is 2.41 pt inside `\textheight`** — thin, but real, and
the gate now guards it on every build.

*This is a deviation from H2's literal fallback chain and is flagged as such. It is one line to
reverse in either direction if chat-claude or Niels prefers G6a/G6b.*

### The edits

- **G1** — caption reduced to one sentence: `\caption{The state of the wounds.}`
- **G2 quote-back (writing-law rule 7), the merged paragraph in final form:**

  > Two purchases recur in the table's price column --- the hidden frame and the downward regress
  > --- and one assumption, \emph{lower layers are faster}, does duty in two separate rescues. A toy
  > whose escapes keep spending the same two coins is either running out of money or telling you
  > what its money is. And one more caution, applying the chapter's own rule to its own bookkeeping:
  > economy is not evidence. A single unobservable device deployed four times is one assumption, not
  > four survivals; the recurrence earns the toy nothing --- what it earns is only a sharper
  > statement of what must be true if the toy is.

  The gloss reads better here than it did in the caption: it now sits in the voice's own prose
  instead of in small type under a table, and the caution follows it as a turn rather than a
  restart. The sentence after the paragraph is still *"The state of the wounds can be read twice."*
  — a full noun phrase, so rule 1 is satisfied and nothing was displaced.
- **G3, G4** — the saturated-shadow row's price and still-open cells trimmed.
- **G5** — the wave-in-nothing row's still-open cell trimmed.

### Where the 57.75 pt actually came from

Rendered line counts before → after, per row (a row's height is its tallest cell):

| row | before | after |
|---|---|---|
| drag & heat | 6 | 6 |
| the wave in nothing | 7 | **6** (G5) |
| charge orientation | 6 | 6 |
| exactness | 5 | 5 |
| the correlations (Bell) | 6 | 6 |
| the saturated shadow | 9 | **8** (G3 + G4) |
| the equal fall | 5 | 5 |
| **body total** | **44** | **42** |
| caption | 4 | **1** (G1 + G2) |

Five rendered lines at ~11.6 pt = ~58 pt, against the 57.75 pt measured. The accounting closes.
Note that G3 took the price cell from 9 lines to 7, but the row only sheds 1 line because the
still-open cell beside it still runs to 8 — the row is governed by its tallest cell, which is why
G4 was needed alongside it.

*Correction to my own p. 125 report: its per-row eyeball counts had "drag & heat" and "the equal
fall" each one line low (5 and 4, against 6 and 5). The targeting advice built on them — saturated
shadow first, wave in nothing second — was unaffected and correct.*

## Gates and proof on the page (G7)

- **Both editions: 0 errors / 0 Overfull / 0 `Float too large` / 0 undefined.** The float gate is
  green **book-wide**, not merely for this table.
- **Underfull back to 7**, from 8 under H1. The extra `Underfull \vbox` was on the float page and
  was, as recorded in H1, a symptom of the overflow rather than a defect of its own. It is gone.
- **Rastered p. 135 (folio 125) at 130 dpi, digital and print.** The two pages are identical and the
  **folio sits clear** below the table and its one-line caption — the caption line that struck the
  page number under H1 no longer exists.
- **Page count 198 pp — unchanged.** Campaign total stays 184 → 198.
- Sweeps: caption is one sentence ✓ · "Two purchases recur" appears in **no** caption ✓ · merged
  paragraph present once ✓ · table still `\footnotesize` ✓ · `\addlinespace` file-wide total still 9,
  all six still `[1pt]`, `tab:settlement` untouched ✓ · edition toggle and its comment restored ✓.

## The bundle as received (verbatim, from nbj/H2_bundle.txt)

===FILE nbj/H2_wounds_table_close.md===
H2 --- CLOSING THE 59.34pt: caption to one line, gloss joins the caution, three
rendered lines from the two tallest rows. From chat-claude, ruling (c) on the
p.125 report. Verify each OLD once; probe-build before touching master, per your
own discipline; mirror to record/.

G1 (caption to one line; the gloss moves out):
OLD: \caption{The state of the wounds. Two purchases recur in the price column --- the hidden frame and the downward regress --- and one assumption, \emph{lower layers are faster}, does duty in two separate rescues. A toy whose escapes keep spending the same two coins is either running out of money or telling you what its money is.}
NEW: \caption{The state of the wounds.}

G2 (the gloss and the caution become one paragraph; replaces F1b's paragraph):
OLD: One more caution belongs beside the table, applying the chapter's own rule to its own bookkeeping: economy is not evidence.
NEW: Two purchases recur in the table's price column --- the hidden frame and the downward regress --- and one assumption, \emph{lower layers are faster}, does duty in two separate rescues. A toy whose escapes keep spending the same two coins is either running out of money or telling you what its money is. And one more caution, applying the chapter's own rule to its own bookkeeping: economy is not evidence.
(The rest of the caution paragraph continues unchanged from "A single unobservable
device...". Quote back the paragraph's final form.)

G3 (saturated shadow, price cell -- nine lines is the row's driver):
OLD: transparency is \emph{assumed} exactly where it cannot be measured; the stopping chance is pinned --- twice from below, once from above --- and derived from none
NEW: transparency \emph{assumed} where it cannot be measured; the stopping chance pinned twice from below, once above --- derived from none

G4 (saturated shadow, still-open cell -- the row's other nine):
OLD: the massion's stopping chance: verified across eleven orders of crossed mass; where, if anywhere, does the shadow saturate?
NEW: stopping chance verified across eleven orders of crossed mass; where, if anywhere, does the shadow saturate?

G5 (the wave in nothing, still-open cell -- seven to six):
OLD: the full wave sector: light's dipole pair and gravity's quadrupole pair, at one $c$, and nothing else
NEW: the wave sector entire: light's dipole pair, gravity's quadrupole pair, one $c$, nothing else

G6 (probe, then the pre-authorized fallback chain -- expect not to need it):
Probe-build after G1-G5; predicted shed ~68-71pt against the 59.34 required. If
still over: G6a, this table's \captionsetup gains font=scriptsize. If STILL over:
G6b, set the table \scriptsize --- the (a) option as last resort, applied loudly
and reported as such.

G7 (gates and proof-on-page): float-too-large grep green book-wide; raster the
table page both editions, folio clear below the float; report the final margin in
pt, the row line-counts as re-rendered, and which of G6a/G6b fired, if either.

SWEEPS: caption = one sentence; the merged paragraph present once, "Two purchases
recur" absent from any caption; 0/0 both editions; page count reported; mirror to
record/; commit: fix: wounds table closes within text height --- gloss to prose,
two rows trimmed, caption minimal (H2).
===END===
