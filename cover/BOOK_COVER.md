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

As a child, Niels Bonde Jensen felt that two things were cheating: forces that pull across empty space, and borders that end the questions. This book is the adult case for the universe the child demanded — infinitely layered, everything pushing, everything made of something smaller, without end.

It is not a book that claims victory. Its central argument was fought out, round by round, against an artificial mind armed with the strongest objections in the written tradition — and the concessions, in both directions, are kept on the page. Its physics chapter grades its own wounds: the three-hundred-year-old pincer of drag and heat; the gravitational waves of LIGO; Bell's theorem, aimed at the book's first sentence. Where the world wounds the toy, the wounds are shown — in a table, which the book then reads backward, as a specification of the layer below.

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
- **Ink:** near-black `#1A1A1A` for all type and rules. The title stays pure near-black — but **not for the reason this line used to give.** It said the title's contrast "must not be spent on colour"; measured against the ground, that is false. `#1A1A1A` is 13.75:1, warm sepia `#241812` is 13.66:1 (−0.6 %), and the plate's own shadow `#331B17` is 12.66:1 (−8 %); at true 90 px all three arrive indistinguishable. The contrast budget was never the binding constraint. What decides it is that **oxblood `#6B2E2E` is refuted on measurement** (6.08:1, −40 %, visibly paler, and chromatically adjacent to *Sapiens* on the same shelf); that the temperature-clash argument which condemned the grey ball **does not transfer to type** — a halftone field averages into a perceived surface colour, but type stays ink on paper at every scale, and cream stock warms perceived black in the hand; that black type beside a sanguine plate is the historical norm rather than a breach of the one-ink conceit; and that Amazon's chroma-subsampled storefront JPEGs degrade hue while preserving luminance, so near-black puts the title's whole signal in the surviving channel. **Fallback, named in advance:** if the proof shows the black reading detached from the warm system, set the three title nodes to `#241812` — 0.6 % of contrast, invisible at thumbnail. Never oxblood. See `record/COVER_VARIANT_B_2026-08-21.md`.
- **Accent:** one oxblood rule `#6B2E2E` under the title, **1.8 pt** — not the original 1.1 pt, which was invisible below about 150 px and so contributed nothing to the only view most buyers ever get.
- **The plate:** the artwork is printed in sanguine, a three-point ramp `#331B17` → `#874531` → `#EDE4CE`, breaking at luminance **0.68**. Paper plus one ink; the drawing is unchanged. **The highlight endpoint is the ground colour exactly** — see "Tuning" below; nothing in the image is lighter than the page, which is what the engraved-plate conceit claims and what the first build was quietly violating.
- **Frame:** thin double rule (0.6 pt + 1.6 pt, 4 pt apart) inset 0.28 in from trim on front and back, engraving-plate style. Nothing crosses it except the art may touch it.

**Front, zones top to bottom:**
1. Tagline `NO MAGIC ANYWHERE` — small caps, letterspaced +18%, ~13 pt, centered, 0.65 in below top trim.
2. Title `THE BILLIARD BALL UNIVERSE` — Palatino (TeX Gyre Pagella) bold, all caps, centered, two lines (`THE BILLIARD BALL` / `UNIVERSE`), ~58–66 pt, tight leading. Thin rule (or the single oxblood rule) beneath.
3. **The art** — the recursive billiard ball engraving (`cover_recursive_ball` from the illustration spec: a sphere whose magnified inset reveals it is made of spheres, recursively, three zoom levels). Centered, **3.7 in wide** (`\ARTW`; this file previously said ~3.9 in, which never matched what builds — every DPI figure below is computed from 3.7), occupying the middle band. Sanguine engraving on the ivory ground — do NOT box it; let the hatching sit directly on the paper color. The build includes the derivative `cover_recursive_ball_sanguine`, generated from the master by `gen_sanguine.py`; the master itself is never modified.

### The sanguine plate (ruled 2026-08-20)
The thumbnail test was run against the ten current Amazon bestsellers in Physics at true 90 px. The title read well and the pale ground stood out on a dark shelf, but the author's verdict was *"gray is a bit gray, even if it is clear."* Colour direction from a Fable agent identified the fault precisely: the ball is neutral grey on warm cream — a temperature clash, *"a photocopy pasted onto nice paper"* — and at 90 px the hatching optically averages to a grey gradient with a white glare, so it stops reading as an engraving and starts reading as a stock chrome ball-bearing.

Deepening the ground alone was tried and rejected: it produced a better-dressed blank. The fix is the **midtone**. The master is monochrome and bimodal — 40.2 % of the drawing below luminance 64, 46.3 % above 200, only 13.6 % between — and at thumbnail size the eye lands on the ramp's midpoint, exactly where the drawing has nothing. A warm midtone fills that hole.

Two alternatives were built as real covers and rejected on the evidence: **louder oxblood** (ground + accent only, art untouched) improved the cover but left the ball a grey blob; **intaglio blue** (a one-ink blue-black system) was predicted in advance to stay chromatically adjacent to grey and half-solve the problem, and at 90 px proved indistinguishable from as-built. Previews of all four are in `nbj/colour_big.png` and `nbj/colour_shelf.png`.

**On identity:** this does not break the book's monochrome-engraving character. Paper plus one printer's ink is the oldest convention in engraving, and sanguine and red-chalk plates are period-correct; the cover reads as the same plate pulled in red ink. The interior stays grayscale by policy. One hue is a treatment; two would be decoration — do not add a second.

**Print watch-list for the proof:** dark reds shift brown in CMYK, and the hatched field carries more ink than the old black-on-near-white did; the midtone is deliberately desaturated to survive that, so resist pushing it redder. A flat cream field over the whole wrap can band or show handling marks. The proof check formerly written *"ivory right"* now reads **"parchment right, sanguine not maroon."**

### Tuning (same day, and it corrected an error of mine)
The first sanguine build still read milky at 90 px. The number I had used to judge it was wrong twice over: it was measured across a square crop of which **30.6 % is bare ground**, and the histogram behind it was too coarse. The real distribution of the drawing's light mass is **1.9 % at 0.78–0.85, 1.9 % at 0.85–0.90, 3.5 % at 0.90–0.95, and 38.9 % at 0.95+** — almost all of it pinned at effectively pure white, because the paper gaps *inside* the hatching are drawn as opaque white rather than left transparent.

Two consequences. Moving the ramp breakpoint is nearly inert: 0.50 → 0.68 only redistributes the 3.8 % living between 0.78 and 0.90 (drawing-only luminance 137 → 131). And the highlight endpoint owns **38.9 % of the drawing** — so with `HIGH` at `#FAF4E7` (luminance 244) against a ground of 228, a third of the ball was printing *brighter than the paper around it*. That was the milkiness, not the midtone.

`HIGH` therefore comes down to the ground exactly. The specular glare survives because it reads by **local contrast against surrounding line work**, not by absolute luminance above the page — it is an unhatched disc, not a bright one. Tested one step below ground (`#E4D9BE`) the highlight inverts to ink where the drawing says paper, the glare dies and the tint drifts to a dead olive: **the floor is the ground itself.** Arrival at thumbnail scale improved from luminance 182 / saturation 0.168 to **171 / 0.214** on the diluted metric, and the ball reads as a solid warm object (`nbj/final_shelf.png`, `nbj/tune_highlight.png`).

**Fallback, named in advance so the proof read is binary:** if dot gain closes the hatching gaps and the ball's body fuses into a flat brown field, the fix is **not darker ink** — raise `HIGH` a half step to `#F1E9D6` and rebuild. That is the only sanctioned remedy.
4. Subtitle `A World With No Bottom` — italic, **24 pt** (was 22), centered beneath the art.
5. Author `NIELS BONDE JENSEN` — caps, letterspaced +12%, **18 pt** (was 19), centered, 0.6 in above bottom trim.

> **Typographic pass, 2026-08-21** (`record/COVER_VARIANT_B_2026-08-21.md`). Four further changes, none of them touching colour, ink, artwork or copy. The **subtitle now outranks the byline** (22→24 pt against 19→18 pt): for an author with no name recognition the subtitle is the hook and the byline is a credit line, and both sit near the legibility floor at 90 px either way, so the swap costs nothing at thumbnail. The **art rose 0.11 in** (node y `9.125-3.28` → `9.125-3.17`): measured with the frame rules excluded, the drawing's inked gaps were 0.653 in above and 0.377 in below, and are now 0.543 / 0.487 — the old top gap was about ten of the thumbnail's 135 rows doing nothing at the point where the eye drops from title into image. On the back, the **display headline no longer hyphenates** (it broke "an au-/thor") and the **pull quote no longer widows** on "there." — `\hyphenpenalty=10000` plus two forced breaks; the wording is unchanged. Examined and left alone: the oxblood rule at 1.8 pt (sub-pixel at 90 px, already the heaviest rule at print), the art at 3.7 in (4.0 in buys ~2 px of ball and crushes the gaps), and the art's 0.087 in rightward ink offset, which is the drawing's deliberate diagonal — recentring the ink would un-centre the composition.

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
- **Paper stock: CREAM — ruled 2026-08-20.** It had never actually been decided; the white constant was an inherited default that every number in this file silently assumed. It is a design ruling from today forward, not a formula.
  | stock | in/page | spine at 202 pp | full wrap |
  |---|---|---|---|
  | **cream** ✅ ruled | 0.0025 | **0.5050 in** | 12.7550 × 9.25 in |
  | white (rejected) | 0.002252 | 0.4549 in | 12.7049 × 9.25 in |

  Cream is the warmer, more period-correct stock for an engraved-plate book and sits better beside the parchment cover — the whole object then reads as one printed thing rather than a warm cover wrapped round a bright-white block. **The cost is accepted, not overlooked:** cream warms and slightly muddies halftone reproduction, and this interior carries ten grayscale plates. Code-claude's recommendation had been white on exactly that ground; the ruling went the other way, and the plates therefore become a proof-day inspection item rather than a settled matter (see the print watch-list).
- **Spine width = page count × 0.0025 in** (cream paper). At the final **202 pages: 0.5050 in** — and the cover now carries `\PAGECOUNT{202}`, **set 2026-08-21** on the author's declaration that the interior is final. Built and measured: page size 918.395 × 666 pt (the 0.035 pt over the nominal 918.36 is TeX's fixed-point `\real{}` rounding, 0.0005 in, three orders inside any printer tolerance); spine ink centred with 0.1833 in and 0.1783 in margins against KDP's 0.0625 in minimum. ⚠ Anything that changes the interior page count changes this — and the constant and the count must be right *together*, or the wrap is wrong twice over.
- **Full-wrap canvas:** (6 + spine + 6 + 2×0.125) wide × (9 + 2×0.125) tall. At 202 pp on cream: **12.7550 × 9.25 in → 3827 × 2775 px at 300 DPI.**
- **Art resolution:** the live master `cover/cover_recursive_ball.png` is 1417 × 1417 and is placed 3.7 in wide → **383 DPI**, comfortably over the 300 DPI floor. (The 1024 × 1536 figure below refers to `art/cover_recursive_ball.png`, a *superseded* earlier candidate that is not what the cover builds from — do not confuse them.) The plate is no longer tinted by hand: `gen_sanguine.py` produces the printed derivative from the master.
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
