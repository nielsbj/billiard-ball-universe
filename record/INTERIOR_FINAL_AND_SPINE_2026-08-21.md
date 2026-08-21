# The interior is declared final, and the spine is set (2026-08-21)

*Author's ruling: **"interior is final."** The gate that everything downstream has been waiting
behind since the beta window closed. With it cleared, `\PAGECOUNT` moves off its placeholder for the
first time and the cover becomes upload-ready.*

## What was declared final

| | |
|---|---|
| page count | **202**, both editions |
| build | **0 errors, 0 Overfull**, both editions, trim 432 × 648 pt |
| underfull | 9, pre-existing, outside the zero-**overfull** policy |
| index | live, folios 191–192 |
| plates | both ruled-in plates present (toy map, Coda reprise) |
| ISBN | `978-87-977519-1-6` in the kolofon with the publisher line |

The last patch to touch the master was **P17** (`ce4a7d4`), and it changed no prose: its one
conditional edit did not fire, because the page already carried the paragraph the patch would have
inserted. The interior therefore goes final in the same prose state it was read in.

## The spine, computed and measured

`\PAGECOUNT{182}` → **`\PAGECOUNT{202}`**. One number; everything else follows from it.

| quantity | value |
|---|---|
| spine | 202 × 0.0025 in = **0.5050 in** |
| full wrap | **12.7550 × 9.25 in** |
| at 300 dpi | **3827 × 2775 px** |
| built page size | 918.395 × 666 pt |

**On that 918.395.** The nominal figure is 918.36 pt. The 0.035 pt excess is TeX's fixed-point
arithmetic in `\setlength\spinew{0.0025in * \real{\PAGECOUNT}}` — 0.0005 in, roughly a hundredth of
a millimetre, three orders of magnitude inside KDP's ±0.0625 in tolerance. Recorded so nobody
rediscovers it as a bug.

**Spine ink centring, measured on the built raster rather than assumed:** the ink occupies columns
55–97 of the spine's 151.5 px, leaving **0.1833 in left and 0.1783 in right** — centred to within
0.005 in, and both margins nearly three times KDP's 0.0625 in minimum. The title, the ball glyph and
the byline all sit comfortably at the wider spine; nothing needed refitting.

## Verification

| check | result |
|---|---|
| `pdflatex cover_wrap.tex` ×2 | **0 errors, 0 Overfull** (602-line log — a real build) |
| underfull | 5, identical to baseline, all pre-existing |
| `scan_ean13.py` | decoded `9788797751916`, check digit valid, module 0.0117 in, quiet zones 0.4683 / 0.4208 in against a 0.0819 in minimum — **SCANS CORRECTLY** |
| wrap raster | 3827 × 2775 px, matching the spec's own prediction exactly |
| spine geometry | 0.5050 in, ink centred within 0.005 in |

## A stale contradiction found and fixed

`process/FLIP_CHECKLIST.md` carried, in its imprint-placeholder line, *"202 pp → spine 0.4549 in →
full wrap 12.7049 × 9.25 in."* **Those are the white-stock figures.** Cream was ruled on 2026-08-20
and the same file's paper-stock section says 0.5050 in and 12.7550 in — so the checklist contradicted
itself by 0.05 in, in the one file whose job is to be right on release day.

It is exactly the failure that section warns about in its own words: *the constant and the count must
be right together, or the wrap is wrong twice over.* The cream ruling updated the constant and left
this line's arithmetic behind. Corrected, and the line is now ticked: all three imprint placeholders
(URL, ISBN, `\PAGECOUNT`) are filled.

## State of the release

**Done:** interior final at 202 pp · `\PAGECOUNT` set · spine computed and measured · barcode
re-verified · cover upload-ready at `cover/cover_wrap.pdf`.

**Next, and the author's to do:** KDP previewer, then **order the one physical proof**. The proof
read is deliberately binary on every axis, with each fallback named in advance:

- **parchment right, sanguine not maroon** — resist pushing the midtone redder; POD returns browner
  and that shift is already priced into the ramp.
- **hatching gaps open** — check the sparsest hatching near the glare and the densest at the
  ball-cluster inset and the spiral. Plugged by dot gain → `HIGH` = `#F1E9D6`, and **never darker
  ink**; `SHADOW` is already at the ~240 % coverage ceiling.
- **the black title sits *with* the plate rather than *on* it** — added 2026-08-21. Reads detached →
  `#241812`, a 0.6 % contrast cost. **Never oxblood**, which measures −40 %.
- **plates crisp** — the accepted cost of the cream ruling; ten grayscale plates on warmer stock.

**Still open after the proof:** the release commit (tagged `first-edition-1.0`), force-adding the
release PDF per `PDF_POLICY.md`, OTS-3 anchoring, the flip to public, and publication.

## One item flagged, not actioned

The master's PDF metadata still carries **`pdfsubject = {Draft version}`** (`\hypersetup`, line 67),
and `hyperxmp` is loaded but no `pdfisbn` is set. That string would ship embedded in the released
PDF, where it outlives everyone's memory of writing it, and the flip checklist has no metadata check
to catch it. Not touched here: the interior was declared final minutes earlier, and reaching into the
master on my own initiative immediately afterwards is exactly what that declaration exists to
prevent. It is preamble metadata rather than prose, so it is cheap and safe whenever the author says
the word — but the word is his.
