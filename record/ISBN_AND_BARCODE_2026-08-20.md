# ISBN in the kolofon, and a real EAN-13 on the cover (2026-08-20)

*Closing the two Phase-1 items that `LAUNCH_PLAN_2026-08-16_v2.md` recorded as `[CC done]` but
which were not, in fact, done in the repo. Both are now done and both are verified, not asserted.*

## What the launch plan believed, and what was actually at HEAD

| Plan says | Repo at HEAD `3618286` |
|---|---|
| Phase 1: *"kolofon ISBN and publisher are already filled, per the registry's requirement that the ISBN appear in the kolofon"* | `billiard_ball_universe.tex:157` read `ISBN: [paperback ISBN --- assigned at publication]`, and the imprint page carried **no publisher line at all** |
| Ledger: `[CC done]: kolofon ISBN + publisher · barcode block (scan check pending proof)` | `cover_wrap.tex:79` was a bare white rectangle commented *"KDP barcode zone"*; `BOOK_COVER.md:80` documented it as *"KDP overlays the ISBN barcode there."* The digits `9788797751916` appeared **nowhere in the repo** |

The barcode gap was the more consequential of the two: a white reserve for KDP to overlay is the
*old* free-ISBN plan, the one this launch plan deliberately abandons. Shipping it would have put
**KDP's Amazon-locked ISBN** on the back cover and split the single edition Phase 2 exists to keep
whole. It would not have failed a build; it would have failed the plan.

## 1. Kolofon

```diff
  \noindent First edition, 2026.
+
+ \noindent Published by Niels Bonde Jensen, Denmark.

- \noindent ISBN: [paperback ISBN --- assigned at publication]
+ \noindent ISBN: 978-87-977519-1-6 (paperback)
```

Publisher of record exactly as registered with DBC on 2026-08-10. Rendered and read back off the
built PDF (page 2 of the interior): the block now runs copyright → rights → *First edition, 2026* →
*Published by Niels Bonde Jensen, Denmark.* → *ISBN: 978-87-977519-1-6 (paperback)* → figures note
→ `billiardballuniverse.com` → typesetting note. **Pagination unchanged** — still 202 pp; the
imprint page is `\vfill`-set and absorbed the extra line.

## 2. The barcode

New files in `cover/`:

- **`gen_ean13.py`** — computes the symbol from the EAN-13 specification and emits TikZ. It
  **decodes its own bit string back to the thirteen digits before it writes anything**, so a
  mistake in the L/G/R or parity tables halts the generator instead of reaching the cover.
- **`ean13.tex`** — generated; defines `\EANthirteen{x}{y}`. 30 merged bar rectangles, quiet-zone
  white ground, human-readable text. Do not hand-edit.
- **`scan_ean13.py`** — the independent check. Rasterises the *built* wrap at 1200 dpi, finds the
  bars as pixels, measures the module width from the symbol's own extent, samples all 95 modules
  and decodes. It trusts nothing the generator says.

Wired into `cover_wrap.tex` with `\input{ean13}` and one placement call. The 2.0 × 1.2 in reserve
stays exactly where it was — 0.35 in from the trim edges at the bottom of the back panel, nearest
the spine, which satisfies KDP's reserve and DBC's *"nederst nærmest ryggen"* at the same time.
The symbol is centred inside it.

**Specification.** 90 % magnification (EAN-13 permits 80–200 %): module 0.297 mm, symbol
1.3213 × 0.8681 in including quiet zones — which leaves room inside the 1.2 in reserve for both text
lines, where 100 % would not. Guard bars run five modules long, standard. `ISBN 978-87-977519-1-6`
set above the bars (Bookland convention); the thirteen EAN digits below in the standard 1 + 6 + 6
layout, leading `9` in the left quiet zone.

**Verification, from the built PDF and not from the source:**

```
raster   : 2400 x 1440 px at 1200 dpi
bar field: 1333 px wide -> module 14.032 px (0.0117 in)   [intended 0.011693 in]
scanned  : 10101110110001001000100101110110010111011101101010100010010011101100110111010011001101010000101
decoded  : 9788797751916
check dig: valid
expected : 9788797751916
VERDICT  : SCANS CORRECTLY
quiet zones: 0.4683 in left, 0.4208 in right (need >= 0.0819 in / 7 modules)
```

Check digit independently re-derived: weighted sum 144 → 6. ✓

This is a software decode of the digital artwork. It is strong evidence the geometry is right, and
it is **not** a substitute for the physical scan test on the printed proof — ink gain, paper and
the scanner's optics are what that test is for. The launch plan already lists it as a proof-day
checklist item; it stays listed.

## Builds

| | pages | Overfull | Float too large | errors | collisions |
|---|---|---|---|---|---|
| interior, digital | 202 | 0 | 0 | 0 | 0 (exit 0) |
| interior, print | 202 | 0 | 0 | 0 | 0 (exit 0) |
| `cover_wrap.pdf` | — | 0 | — | 0 | — |

## Still open, and deliberately so

- **`\PAGECOUNT` is still 182** in `cover_wrap.tex`, against a 202 pp interior. Untouched on
  purpose: the spine is computed last, after the two plate rulings, per the standing convergence.
  The cover built above therefore has a spine 20 pages too thin. That is expected, not a defect —
  but it means **this cover PDF is not the one to upload.**
- The physical scan test, per above.

## One thing found on the way — reported, then ruled and fixed

> **RULED same day: "local surplus it must be."** Applied as a single exact-string edit; see
> `record/PROSE_PATCH_local_surplus_heading_2026-08-20.md`. `local ratio` is now ×0 in the built
> PDF and `local surplus` ×9. The original finding is kept below as it was written.

`manuscript/billiard_ball_universe.tex:731` still reads `\section{The Local Ratio}`. The prose in
that chapter was rewritten to *the local surplus* — the phrase `CLAUDE.md` lists among the author's
key phrases to preserve verbatim — and the built PDF now contains **`local surplus` ×6 and
`local ratio` ×3**, the three being the section heading, its table-of-contents entry, and its
running head. The section is titled one thing and argues another.

Worth knowing *why* it survived: the 2026-08-03 reader-draft verification recorded
*"`local surplus` ×6, `local ratio` ×0 — exactly the mirror of July's ×0/×6"* and passed. That
check was case-sensitive, so it never saw `The Local Ratio`. The heading has been in every draft
since, including the reader draft that went out.

It is a section title, so it is prose and it is the author's call — not edited. If the answer is
the obvious one, it is a single exact-string change plus a rebuild, and it will move nothing but
three lines.
