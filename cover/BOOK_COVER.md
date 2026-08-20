# BOOK COVER — copy + layout specification
*The Billiard Ball Universe: A World With No Bottom — Niels Bonde Jensen*
*For KDP 6×9 in paperback. Give this file to code-claude for production; art comes from the existing illustration pipeline.*

---

## 1. FRONT COVER COPY

**Tagline (top, small caps, letterspaced):**
> NO MAGIC ANYWHERE

**Title:**
> THE BILLIARD BALL UNIVERSE

**Subtitle (italic):**
> A World With No Bottom

**Author:**
> NIELS BONDE JENSEN

---

## 2. SPINE

> THE BILLIARD BALL UNIVERSE  ·  NIELS BONDE JENSEN

(Plus a single small billiard-ball glyph between title and author if spine width allows. Text runs top-to-bottom, standard.)

---

## 3. BACK COVER COPY

**Headline:**
> A universe with no bottom — argued by an author who shows you where he loses.

**Main blurb (~210 words):**

As a child, Niels Bonde Jensen decided that two things were cheating: forces that pull across empty space, and borders that end the questions. This book is the adult case for the universe the child demanded — infinitely layered, everything pushing, everything made of something smaller, without end.

It is not a book that claims victory. Its central argument was fought out, round by round, against an artificial mind armed with the strongest objections in the written tradition — and the concessions, in both directions, are kept on the page. Its physics chapter grades its own wounds: the three-hundred-year-old pincer of drag and heat; the gravitational waves of LIGO; Bell's theorem, aimed at the book's first sentence by name. Where the toy universe breaks, the breaks are shown — in a table.

What survives is smaller and harder than what the author walked in with: not proof, but a universe with exactly one mystery — why there is anything at all — and no magic anywhere else. Along the way: why an infinite universe contains other yous; why that is comforting rather than crushing; why your responsibility is the local surplus of joy over suffering; and why, globally, nothing is special — while locally, you are.

**Reader line (small, beneath blurb):**
> For physicists, and for the interested layman: footnotes decode every term, a dictionary and a primer wait in the appendices, and nothing essential hides outside the plain prose.

**Pull quote (set apart, italic — CHOSEN):**
> "Globally nothing is special. Locally, you are. Live there."

**Author bio (2 lines):**
> Niels Bonde Jensen is a Danish software engineer. He has believed the universe has no bottom since before he could say why.

**Short blurb variant (~70 words, for online listings):**
> Two childhood convictions — that pulling across empty space is cheating, and that every border only multiplies the questions — grown into a full cosmology: an infinitely layered, mechanical universe with one mystery and no magic anywhere else. Argued against an AI with the concessions kept on the page; its physics graded, wound by wound, in its own tables. Not proof. Something rarer: an honest attempt that shows where it loses.

---

## 4. GRAPHICAL LAYOUT — Concept A (primary): "The Engraved Plate"

**Overall look:** a nineteenth-century scientific monograph, printed yesterday. Matches the interior (Palatino, B/W engravings) and the book's lineage theme.

- **Ground:** aged ivory paper, flat color **`#EDE4CE`**, full wrap (front, spine, back). *(Was `#F4EFE4` until 2026-08-20 — see "The sanguine plate" below.)*
- **Ink:** near-black `#1A1A1A` for all type and rules. The title stays pure near-black: at thumbnail size its contrast against the ground is the cover's single largest asset and must not be spent on colour.
- **Accent:** one oxblood rule `#6B2E2E` under the title, **1.8 pt** — not the original 1.1 pt, which was invisible below about 150 px and so contributed nothing to the only view most buyers ever get.
- **The plate:** the artwork is printed in sanguine, a three-point ramp `#331B17` → `#7E4437` → `#FAF4E7`. Paper plus one ink; the drawing is unchanged.
- **Frame:** thin double rule (0.6 pt + 1.6 pt, 4 pt apart) inset 0.28 in from trim on front and back, engraving-plate style. Nothing crosses it except the art may touch it.

**Front, zones top to bottom:**
1. Tagline `NO MAGIC ANYWHERE` — small caps, letterspaced +18%, ~13 pt, centered, 0.65 in below top trim.
2. Title `THE BILLIARD BALL UNIVERSE` — Palatino (TeX Gyre Pagella) bold, all caps, centered, two lines (`THE BILLIARD BALL` / `UNIVERSE`), ~58–66 pt, tight leading. Thin rule (or the single oxblood rule) beneath.
3. **The art** — the recursive billiard ball engraving (`cover_recursive_ball` from the illustration spec: a sphere whose magnified inset reveals it is made of spheres, recursively, three zoom levels). Centered, ~3.9 in wide, occupying the middle band. Sanguine engraving on the ivory ground — do NOT box it; let the hatching sit directly on the paper color. The build includes the derivative `cover_recursive_ball_sanguine`, generated from the master by `gen_sanguine.py`; the master itself is never modified.

### The sanguine plate (ruled 2026-08-20)
The thumbnail test was run against the ten current Amazon bestsellers in Physics at true 90 px. The title read well and the pale ground stood out on a dark shelf, but the author's verdict was *"gray is a bit gray, even if it is clear."* Colour direction from a Fable agent identified the fault precisely: the ball is neutral grey on warm cream — a temperature clash, *"a photocopy pasted onto nice paper"* — and at 90 px the hatching optically averages to a grey gradient with a white glare, so it stops reading as an engraving and starts reading as a stock chrome ball-bearing.

Deepening the ground alone was tried and rejected: it produced a better-dressed blank. The fix is the **midtone**. The master is monochrome and bimodal — 40.2 % of the drawing below luminance 64, 46.3 % above 200, only 13.6 % between — and at thumbnail size the eye lands on the ramp's midpoint, exactly where the drawing has nothing. A warm midtone fills that hole.

Two alternatives were built as real covers and rejected on the evidence: **louder oxblood** (ground + accent only, art untouched) improved the cover but left the ball a grey blob; **intaglio blue** (a one-ink blue-black system) was predicted in advance to stay chromatically adjacent to grey and half-solve the problem, and at 90 px proved indistinguishable from as-built. Previews of all four are in `nbj/colour_big.png` and `nbj/colour_shelf.png`.

**On identity:** this does not break the book's monochrome-engraving character. Paper plus one printer's ink is the oldest convention in engraving, and sanguine and red-chalk plates are period-correct; the cover reads as the same plate pulled in red ink. The interior stays grayscale by policy. One hue is a treatment; two would be decoration — do not add a second.

**Print watch-list for the proof:** dark reds shift brown in CMYK, and the hatched field carries more ink than the old black-on-near-white did; the midtone is deliberately desaturated to survive that, so resist pushing it redder. A flat cream field over the whole wrap can band or show handling marks. The proof check formerly written *"ivory right"* now reads **"parchment right, sanguine not maroon."**
4. Subtitle `A World With No Bottom` — italic, ~22 pt, centered beneath the art.
5. Author `NIELS BONDE JENSEN` — caps, letterspaced +12%, ~19 pt, centered, 0.6 in above bottom trim.

**Back, zones top to bottom (all inside the frame, left-aligned, measure ≈ 4.6 in):**
1. Headline — bold, ~15 pt.
2. Main blurb — 10.5/14.5 pt roman.
3. Pull quote — italic, ~13 pt, centered, thin rules above and below.
4. Reader line — 9 pt.
5. Bio — 9 pt italic.
6. **Barcode** — pure white rectangle 2.0 × 1.2 in, bottom right of the back panel, 0.35 in from the trim edges (KDP's reserve), i.e. **bottom, nearest the spine**, which is also what the Danish registry instructs ("nederst nærmest ryggen"). **We print the symbol ourselves** — a real EAN-13 for our own ISBN `978-87-977519-1-6`, drawn at 90 % magnification by `gen_ean13.py` into `ean13.tex` and placed by `\EANthirteen`. We do *not* let KDP overlay its barcode: that one carries KDP's free ISBN, which is Amazon-locked and would split the edition IngramSpark has to share. Human-readable `ISBN 978-87-977519-1-6` above the bars, the thirteen EAN digits below in the standard 1 + 6 + 6 layout. Verify after any cover change with `scan_ean13.py`, which rasterises the built wrap at 1200 dpi and decodes the bars back to the digits.

**Spine:** ivory ground continues; title and author in caps, ~11–12 pt, top-to-bottom; ball glyph (a tiny solid circle with one hatched crescent) centered between them.

### Concept B (variant, if A feels too quiet): "The Dark Plate"
Identical layout; invert the palette — charcoal ground `#14161A`, ivory ink `#F4EFE4`, the engraving inverted (white lines on dark). More dramatic on a screen thumbnail; slightly riskier in print (large dark areas show handling). Produce A first; mock B only if A disappoints as a thumbnail.

> **MOCKED AND REJECTED, 2026-08-20.** A did disappoint as a thumbnail, so B was mocked as instructed (`nbj/variants_90_mag4.png`, rightmost). Inversion turns the ball's specular highlight into a shadow, so a billiard ball reads as a **void** — doing B properly would mean re-lighting the engraving, which is a genuine art change. It also surrenders the one advantage the thumbnail test proved real: on a shelf of ten dark covers, being the only pale one is what draws the eye. And a dark ground turns the mandatory white barcode patch into a glowing rectangle. A was fixed instead, by colour rather than by value — see "The sanguine plate" above.

---

## 5. PRODUCTION MECHANICS (KDP)

- **Trim:** 6 × 9 in. **Bleed:** 0.125 in all outer edges.
- **Spine width = page count × 0.002252 in** (white paper). At the current 139 pages: **0.313 in**. ⚠ Recalculate at FINAL page count after the citation/fact-check passes — the spine is the last thing you set.
- **Full-wrap canvas:** (6 + spine + 6 + 2×0.125) wide × (9 + 2×0.125) tall. At 139 pp: **12.563 × 9.25 in → 3769 × 2775 px at 300 DPI.**
- **Art resolution:** `cover_recursive_ball` is generated at 1024×1536; at 3.9 in wide on the cover that is ~260 DPI — acceptable, but 2× upscale to ≥300 DPI before final, per the illustration plan's standing note. Convert to true grayscale, then tint onto the ivory ground (multiply blend or threshold-to-ink).
- **Fonts:** TeX Gyre Pagella (free Palatino clone; matches interior exactly). Embed all fonts; flatten to PDF/X-1a or plain PDF with embedded fonts for KDP.
- **Recommended build route for code-claude:** a standalone LaTeX file — `\documentclass{article}` + `geometry` at full-wrap size + TikZ for zones, rules, and text placement + `\includegraphics` for the art. Same toolchain as the book; deterministic; spine math as a single macro so the final-page-count update is one number. Verify with a 300 DPI raster proof and KDP's online previewer before ordering a physical proof.
- **Order one physical proof copy before publishing.** Ivory + engraving covers live or die on paper; the screen will not tell you.

---

## 6. CHECKLIST

- [x] Bio filled: Danish software engineer.
- [x] Pull quote chosen: #1.
- [ ] Generate / upscale the cover art per the illustration spec.
- [ ] Build wrap PDF (Concept A), raster proof at 300 DPI.
- [ ] Recalculate spine at final page count. Rebuild.
- [ ] KDP previewer check → physical proof → publish.
