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

- **Ground:** aged ivory paper, flat color `#F4EFE4`, full wrap (front, spine, back).
- **Ink:** near-black `#1A1A1A` for all type and rules.
- **Accent:** none, or at most one thin oxblood rule `#6B2E2E` under the title. Two colors maximum, total.
- **Frame:** thin double rule (0.6 pt + 1.6 pt, 4 pt apart) inset 0.28 in from trim on front and back, engraving-plate style. Nothing crosses it except the art may touch it.

**Front, zones top to bottom:**
1. Tagline `NO MAGIC ANYWHERE` — small caps, letterspaced +18%, ~13 pt, centered, 0.65 in below top trim.
2. Title `THE BILLIARD BALL UNIVERSE` — Palatino (TeX Gyre Pagella) bold, all caps, centered, two lines (`THE BILLIARD BALL` / `UNIVERSE`), ~58–66 pt, tight leading. Thin rule (or the single oxblood rule) beneath.
3. **The art** — the recursive billiard ball engraving (`cover_recursive_ball` from the illustration spec: a sphere whose magnified inset reveals it is made of spheres, recursively, three zoom levels). Centered, ~3.9 in wide, occupying the middle band. Black engraving on the ivory ground — do NOT box it; let the hatching sit directly on the paper color.
4. Subtitle `A World With No Bottom` — italic, ~22 pt, centered beneath the art.
5. Author `NIELS BONDE JENSEN` — caps, letterspaced +12%, ~19 pt, centered, 0.6 in above bottom trim.

**Back, zones top to bottom (all inside the frame, left-aligned, measure ≈ 4.6 in):**
1. Headline — bold, ~15 pt.
2. Main blurb — 10.5/14.5 pt roman.
3. Pull quote — italic, ~13 pt, centered, thin rules above and below.
4. Reader line — 9 pt.
5. Bio — 9 pt italic.
6. **Barcode zone** — pure white rectangle 2.0 × 1.2 in, bottom right, 0.35 in from trim edges (KDP requirement; KDP overlays the ISBN barcode there).

**Spine:** ivory ground continues; title and author in caps, ~11–12 pt, top-to-bottom; ball glyph (a tiny solid circle with one hatched crescent) centered between them.

### Concept B (variant, if A feels too quiet): "The Dark Plate"
Identical layout; invert the palette — charcoal ground `#14161A`, ivory ink `#F4EFE4`, the engraving inverted (white lines on dark). More dramatic on a screen thumbnail; slightly riskier in print (large dark areas show handling). Produce A first; mock B only if A disappoints as a thumbnail.

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
