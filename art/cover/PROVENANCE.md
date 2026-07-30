# Cover art — as-built provenance

*The Billiard Ball Universe: A World With No Bottom.* Cover Concept A ("The Engraved Plate").
The jacket art is a **hybrid**: AI-generated engraved *elements*, composited into the recursion
by hand in TikZ. This record exists so the how-made chapter's honesty extends to the jacket.

## Final art
- `cover_recursive_ball.png` — built by `cover_art_build.tex` (pdflatex → rasterize, transparent).
- Chain (Fable 5 art-direction, ball-built at every level): **billiard ball → crowd of balls →
  orbit of balls → vortex of balls → ellipsis.** Varied structures, same mechanical kit —
  faithful to Ch. 4 ("matter arranging itself, in unimaginable quantity and variety") and Ch. 6–7
  (orbits, circulation/vortices). The recursion, leader cones, inset rings, table-shadow and
  ellipsis are all deterministic TikZ; only the engraved spheres are generated.

## Generated tiles
Model **gpt-image-1.5**, 1024², transparent, high quality, via the sanctioned generator
(`FuncGraph/GetGrafic/get-graphic.py`; key handled by the tool). Embedded provenance in every PNG;
originals archived to `_asset_archive/graphics`. Spec + exact prompts: `cover_tiles.spec.json`.
Masters in `tiles/`; chosen variants (v1) staged as `cover_ball/crowd/orbit/vortex.png`.

| id | role | prompt summary |
|----|------|----------------|
| `engraved_ball` | mother ball; reused scaled for the ellipsis dots | plain billiard ball, steel-engraving hatching, glassy upper-left highlight, no number/stripe |
| `crowd_of_balls` | inset A | close-packed crowd, ~8–9 balls across, visible white gaps (not halftone) |
| `orbit_of_balls` | inset B | mote + smaller companion on a single ruled ellipse, mostly empty |
| `vortex_of_balls` | inset C | spiral arms of tiny balls, open white eye, reads as rotation |

## Build
```
pdflatex cover_art_build.tex
magick -density 300 cover_art_build.pdf -background none cover_recursive_ball.png
```
Then the wrap: drop `cover_recursive_ball.png` beside `cover_wrap.tex`, `\ARTFINALtrue`, pdflatex.

## Wrap fixes (this repo's `cover_wrap.tex` vs chat-claude's origin)
1. Title re-set as a 3-line stack (THE / BILLIARD BALL / UNIVERSE) — the 60pt one-line title was
   473pt wide on a ~393pt panel and ran off the page (no LaTeX warning; absolutely-placed node).
2. Back bio + reader line wrapped in a 2.9in `\parbox` so they clear the KDP barcode reserve.

## Held
`\PAGECOUNT` = 182 is a placeholder. Set the real count last, from the final interior
(index + beta changes), then rebuild the spine and proof. No upload before that.
