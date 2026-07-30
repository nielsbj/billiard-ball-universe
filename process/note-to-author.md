# Note to the author — illustration run, 3 July 2026

All artistic illustrations for the book were generated, selected, and wired in.
The build is clean: **zero Overfull**, biber runs with `ref.bib`, references print.
This note records what exists, why each choice was made, and what still needs you.

## What was generated

One batch, 23 images, 11 ids — OpenAI `gpt-image-2`, all at `high` quality (your
call, upgraded from the specced `medium` for the openers). Dry-run estimate
**~$4.85** (the tool reports estimates only). Zero generation errors.

House style baked into every prompt: black-and-white copperplate engraving /
woodcut, fine hatching, no text, no borders. Spec: `art_specs/book_illustrations.json`.

## The winners (and why)

| File in `art/` | Variant | Reason for the pick |
|---|---|---|
| `cover_recursive_ball.png` | v3 of 3 | Cleanest three-level zoom chain. v2 was disqualified: it drew a "0" numeral on the ball (no-lettering rule). v1 is a strong runner-up if you disagree — see `art/unused/`. |
| `ch1_child_window.png` | v1 of 2 | Crisper, vignetted edges suit a chapter opener; v2 is darker and could muddy at 0.62\textwidth. |
| `ch2_spear_edge.png` | v2 of 2 | Single spear mid-flight through the breach. v1 accidentally shows two spears (one in hand, one flying). |
| `ch3_library_debate.png` | v1 of 2 | The face in the shelves is *faint*, as asked. v2's face is a giant carved monument — too literal. |
| `ch4_repeated_figure.png` | v1 of 2 | Identical pose held rigidly down the whole receding line — "reflections without mirrors". v2's copies vary their poses. |
| `ch5_local_garden.png` | v2 of 2 | Better tonal separation; the watering gesture reads clearly. v1 is murkier. |
| `ch6_bubbles.png` | v2 of 2 | The calm channel *between* the bubbles is legible, streams on the outer sides — matches the shadow-push argument. |
| `ch7_cracked_orrery.png` | v1 of 2 | Classical engraving on white, one long clean crack top to bottom. v2 is squatter. |
| `coda_open_door.png` | v1 of 2 | Stronger light streaming through, cast shadow toward the viewer. |
| `plate_spear_edge.png` | v2 of 2 | Taller, more dramatic torn boundary; the spear reads as released into the stars. |
| `plate_two_ships.png` | v2 of 2 | The flat calm lane between the hulls is very legible against the breaking outer waves. |

Every rejected variant is preserved in `art/unused/` (timestamped; never deleted —
they cost credits and are not reproducible). The winners' untouched pre-grayscale
originals are the `*_master.png` files there. To swap a pick: copy the variant from
`art/unused/` over `art/<id>.png`, re-run the grayscale conversion
(`python -c "from PIL import Image; p='art/<id>.png'; Image.open(p).convert('L').save(p)"`),
rebuild.

All 11 winners were converted to true grayscale (RGB → L) since the generator can
leave a faint color cast.

## What is wired where

- Preamble: `\usepackage{graphicx}` + a `\chapterart{...}` helper
  (centered, 0.62\textwidth).
- Each chapter (Ch. 1–7) has its opener immediately after `\chapter{...}`;
  the Coda's follows `\addchap` + `\markboth`.
- `plate_spear_edge`: uncaptioned `[p]` float right after the Lucretius spear
  paragraph in Ch. 2. `plate_two_ships`: uncaptioned `[p]` float directly after
  `fig:shadowpush` in Ch. 6. Plates are atmosphere, not argument — no captions,
  deliberately.
- Plate includes use `height=0.92\textheight, width=\textwidth, keepaspectratio` —
  the width cap matters: without it the 2:3 plates overflow the 4.5 in text block
  by 2.79 pt. Don't remove it.
- **The cover (`art/cover_recursive_ball.png`) is NOT in the document body** —
  it is for the cover designer / KDP upload only.

## Print-resolution caveat (action needed before a print run)

The API's max size (1024×1536) gives **~170 DPI** at full 6×9 in page — fine for
this draft and for screens, below the 300 DPI print ideal. Before sending to
print, upscale the cover and both plates 2× with an upscaler, re-grayscale, and
rebuild. The chapter openers at 0.62\textwidth (~2.8 in tall) are already
comfortably above 300 DPI — no action needed there.

## Provenance

- Spec (as-built prompts + params): `art_specs/book_illustrations.json`
- Run manifest: `art/provenance/delivery_book_illustrations_20260703_085757_2240.json`
- Both are committed; together they are the durable record of exactly what was
  asked of the model and what came back. Rights: OpenAI assigns image ownership
  to you; usable and sellable, attribution optional.

## Not touched (still on the revision list)

- Diagrams stay TikZ — nothing generated for shadow cones, the triangle, the
  pincer, circulation, layers, or the still-missing induction diagram (Ch. 3).
- `ref.bib` has 17 `VERIFY` tags awaiting the fact-check pass; `\nocite{*}` still
  needs replacing with per-passage `\cite` calls.
- The Ch. 1 childhood ages/details and the Ch. 5 comfort scene are still marked
  in draftnotes.
