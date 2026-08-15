# P11b — THE SPLIT-LEDGER BOX NAMES ITS TRUE BOUNDARY: floor measured, cascade owed (applied 2026-08-15)

**STATUS: APPLIED, with one flagged layout deviation.** The ruled prose went in verbatim. It grew
the box from 20 rendered lines to 26, which made the box too tall for its page by ~20 pt — so the
whole box migrated to the next page and left **folio 94 two-thirds empty**. Closed with one line,
`\enlargethispage{\baselineskip}`, chosen after measuring three levers. Both editions 0/0, float
gate green, **198 pp — unchanged**, and the book's `Underfull \vbox` count is back to its exact
pre-P11b value.

*From chat-claude, ruled by Niels. Transport: the `===FILE` bundle protocol, seventh use. Received
as `nbj/P11b_bundle.txt`, split to `nbj/P11b_boundary_exact.md`. Mirrored verbatim at the foot.*

## Applier's record (code-claude)

### E1 — applied verbatim

OLD verified **unique** at HEAD, NEW verified absent, before anything was touched. After: OLD → 0,
NEW → 1. The two-sentence disclaimer

> Neither case is the toy; the analogy stops at the split itself. But the split itself is measured
> physics.

is replaced by the four-sentence boundary statement ending *"The floor is measured physics; the
cascade is the debt."* No other prose was touched; `ref.bib` is untouched by P11b.

### The pointer sweep the gate demanded

`"thirty-three orders of refusal"` occurs **twice** in the book:

| line | where | role |
|---|---|---|
| 1155 | **the cascade paragraph** — the one the box sits under | the demand, stated (installed by P3, A2) |
| 1535 | the wounds table's read-back | the same figure, recalled |

Line 1155 falls inside `\section{First Wound: The Pincer of Drag and Heat}` (lines 1127–1237), so
the new text's phrase *"at the first wound's thirty-three-order price"* points at a figure that (a)
exists, (b) stands in the immediately preceding paragraph, and (c) is indeed the first wound's.
**The pointer is true.** One honest note attached: the manuscript states the figure as *"already on
the books"* and does not derive the 33 anywhere in words — the nearest derivation available to a
reader is the first wound's own pair of Poincaré numbers ($10^{26}$ degrees per second of heating).
That is a pre-existing property of the sentence P3 installed, not something P11b introduces, and it
is recorded here rather than repaired.

### The layout failure the gate anticipated — and the larger one it did not

The bundle predicted *"the box grows ~4 lines, text below may flow to the next page."* Measured
reality: the box grew **6** lines, and because an `\fbox{\parbox{}}` is unbreakable, **the box
itself** moved to the next page, taking the following paragraph with it.

**Measured at the insertion point**, by `\sbox`-ing the box and reading `\pagegoal`/`\pagetotal`:

| quantity | value |
|---|---|
| box height + depth | **316.65 pt** |
| space left on folio 94 at that point | `534.80 − 225.20` = **309.60 pt** |
| deficit, box alone | **7.05 pt** |
| deficit including the `center` environment's above-skip | **≈ 20 pt ≈ 1.4 lines** |

Consequence, rastered and counted: folio 94 fell from **39 rendered lines to 18** — a hole of about
55% of the page — and the book's `Underfull \vbox` count went **4 → 9**, with new short pages at
folios 94, 99, 122, 147 and 150. Folio 94 did "print clear" in the bundle's literal sense (nothing
struck the folio), but reporting that as a pass would have been dishonest, so it is reported as a
failure instead.

### Three levers measured, one adopted

| lever | what it does | result |
|---|---|---|
| **L1** — move `fig:cascade` before the box in source, to fill the hole | no dimension change, reading order changes | **rejected**: introduces **1 Overfull**, and folio 94 stays underfull |
| **L2** — tighten the surround: drop the `center` environment's skips, `\fboxsep` 3 pt → 2 pt | recovers ~12 pt of the ~20 pt owed | **rejected**: `Underfull \vbox` only 9 → 8; folio 94 unchanged |
| **L3** — `\enlargethispage{\baselineskip}` before the box | folio 94 alone gains 14.28 pt | **adopted**: `Underfull \vbox` **9 → 4**, the exact baseline set (25, 43, 82, 96); no other page changed |

**Adopted: L3.** One line, placed immediately above the box and carrying its own comment naming why
it exists and when to remove it. It is the standard TeX remedy, it is reversible by deleting the
line, and it restores the whole book — not just this page — to the typographic state it had before
P11b. Two levers that would have worked were *not* taken, and are named here because they remain
available if the ruling prefers them: **widening the box to `0.95\linewidth`** (saves ~1.4 lines,
but breaks the deliberate width parity with the chapter-head box that P11 was told to match), and
**shortening the ruled prose by one line and a half** (which is chat-claude's and Niels's call, not
the applier's).

**The cost of L3, stated plainly:** folio 94's text block now runs one line — 14.28 pt, about 5 mm —
lower than its neighbours'. On a facing-page spread a designer would see it; a reader almost
certainly would not. There is **no prior use of `\enlargethispage` in this book**, so this is a new
device in the manuscript and is flagged as such.

### Rule 7 recheck — the dovetail, and what now sits inside it

The box's last words are *"the cascade is the debt."* The next body sentence is *"Now the price of
the cascade, because this book does not sell escapes without their invoices."* — the noun P11's own
rule-7 repair put there. **The handoff works, and it works better than it did**: "debt" hands
directly to "price", and "the cascade" is now the box's own closing subject as well as the
paragraph's, so the referent stands adjacent on both sides.

One honest qualification, because the page moved under it: the two sentences are **no longer on the
same page**. Final layout is folio 94 = cascade paragraph + box; folio 95 = `fig:cascade` + "Now the
price of the cascade…". So a page turn *and* the cascade figure now sit inside the dovetail. The
**reference** survives intact — that is exactly what rule 1 re-nouning buys, and P11's repair is
what pays for it here — but the **rhythm** of "debt → price" is softened by the crossing. The
figure landing between them is at least thematically apt: it is the cascade itself, drawn. Flagged,
not repaired; repairing it would mean moving the figure, and L1 shows what that costs.

### Gates and proof on the page

- **Both editions — digital and print: 0 errors / 0 `Overfull` / 0 `Float too large for page by` /
  0 undefined.** Float gate green book-wide.
- **`Underfull \vbox` 4, `Underfull \hbox` 2** — identical to the pre-P11b baseline, on the same
  pages (25, 43, 82, 96). The 4 → 9 regression is fully closed, not merely reduced.
- **Rastered folio 94 (physical p. 104) at 110 dpi, digital and print.** The two are identical; the
  full 26-line box sits on the page with its paragraph, clear of both margins, and **the folio
  prints clear** below it.
- **Page count 198 pp — unchanged.** Campaign total stays 184 → 198.
- Sweeps: OLD → 0 ✓ · NEW present exactly once ✓ · `"thirty-three orders of refusal"` still 2 ✓ ·
  `\digitaleditiontrue` restored with its comment after the print build ✓ · `\draftnotestrue`
  untouched ✓ · `ref.bib` untouched ✓ · manuscript diff is exactly the one prose line plus the one
  `\enlargethispage` line ✓ · all probe files deleted ✓.

### Two traps hit during this session, both already on the books

1. **The locked-PDF trap (H1, `FLIP_CHECKLIST`).** The master build failed with
   `! I can't write on file billiard_ball_universe.pdf` — a **1340-line log** ending in
   `Fatal error occurred, no output PDF file produced`, which nonetheless greps as **0 Overfull, 0
   Float-too-large, 0 undefined** because it typeset nothing. The gate was therefore run against a
   byte-identical copy of the master under a different jobname, which is what every number above is
   measured from. The truncated log and the 5-line `.aux` it left behind have been **deleted** so
   that nobody reads them as a pass.
   **Action for Niels: close the open PDF viewer and run `manuscript/build.bat` once** to refresh
   `billiard_ball_universe.pdf` and its aux state. The `.tex` is correct and committed; only the
   build artifact is stale.
2. **The biber settling cycle (P11).** A probe built with a single biber pass rendered the box's
   citation as `[65, 46]` instead of `[66, 47]` — `edwards2002`, cited only inside a printed `note`
   field, was missing from the bibliography and shifted every later number down by one. Confirmed
   as the same artifact recorded in P11: any build from a cleared aux state needs the extra
   `biber` pass before its numbers can be trusted. The final builds ran `pdflatex → biber →
   pdflatex ×2 → biber → pdflatex ×2` and render `[66, 47]` correctly in both editions.

## The bundle as received (verbatim, from nbj/P11b_bundle.txt)

```
===FILE nbj/P11b_boundary_exact.md===
P11b --- THE BOX'S BOUNDARY, DRAWN WHERE IT ACTUALLY RUNS. From chat-claude,
ruled by Niels (the disclaimer fenced off a true connection; the honest sentence
states the connection and its limit). One edit inside the p.94 box. Verify OLD
once; probe-build; mirror to record/.

E1:
OLD: Neither case is the toy; the analogy stops at the split itself. But the split itself is measured physics.
NEW: And I owe the reader the boundary's exact location, because half of this is closer than analogy. The refusal here is the book's own gap doing its floor-work --- a quantized receiver that cannot take energy in sips --- the very lock the cascade escape leans on, at the first wound's thirty-three-order price. What has no laboratory address is the other half: the crystal needs no basement to sell into, and the toy does. The floor is measured physics; the cascade is the debt.

GATES: sweep-confirm the standing figure the new text points at ("thirty-three
orders" appears in the cascade paragraph, per P3) so the pointer is true; probe
the page --- the box grows ~4 lines, text below may flow to the next page, folio
94 must print clear (raster both editions); rule-7 recheck: the following body
sentence is "Now the price of the cascade..." --- confirm the dovetail reads as
intended, box's last word handing to the paragraph's subject; 0/0 both editions,
float-grep green; page count reported; mirror to record/; commit:
prose: the split-ledger box names its true boundary --- floor measured, cascade
owed (P11b).
===END===
```

## Open, for chat-claude and Niels

1. **`\enlargethispage{\baselineskip}` on folio 94** — keep, or prefer one of the two alternatives
   named above (widen the box to `0.95\linewidth`, breaking parity with the chapter-head box; or
   shorten the ruled prose by ~1.4 lines)? Applier's recommendation: **keep**. It is the only lever
   measured that returns the entire book to its baseline typography, and it is one line to reverse.
2. **The box is now 26 lines** — over two-thirds of a page, and it fills folio 94 completely. If any
   further text is ever added to it, the page will fail again and no single line of slack will save
   it. The `\enlargethispage` comment says so in the file.
3. **The dovetail now crosses a page turn and the cascade figure.** Left as is; noted above.
4. **The "thirty-three orders" figure is asserted, not derived**, anywhere in the book. Pre-existing,
   inherited from P3, and now pointed at twice. Worth a ruling before the flip.
