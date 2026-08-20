# P16 — the how-made note discloses the generated pictures (applied 2026-08-20)

*From chat-claude (`nbj/P15_bundle.txt`, split to `nbj/P15_howmade_images.md`) on code-claude's gap
report. **Renumbered P15 → P16 on the author's ruling:** `record/PROSE_PATCH_P15_tennis_ball_recoil_2026-08-16.md`
already owns P15 at commit `ee6ca7f`, and a "b" suffix would imply a dependency that does not exist.
Chat-claude's process ledger gains the corrective: patch numbers are checked against `record/` before
christening, like any other uniqueness claim.*

## The gap it closes

The note accounted in detail for the AI-drafted prose and the code-drawn diagrams but never mentioned
the AI-generated illustrations — zero occurrences of *engraving*, *illustration*, *image* or
*generated* across the whole note. A hole in a note whose opening premise is *"I would rather give it
than have somebody find it out"*, and the omitted category is the one a reader is likeliest to notice
unaided. KDP also asks about AI text and AI images as separate questions.

## E1 — the insertion

New paragraph after the one ending *"a number I had used was wrong, and it was."* and before the
*"What … did not do was have the ideas"* paragraph. Placement matters: the paragraph beginning
*"I should say what it cannot do, since I have just made rather a lot of it"* refers back to the
diagram praise directly above it, so nothing may be inserted between those two.

> The pictures that are not diagrams are machine work too, and of a different kind. The engravings at
> the head of every chapter and the Coda, the two full-page plates, and the ball on the cover — which
> returns, in grey, to face the Coda — were generated from written specifications of mine by an image
> model; no hand drew them, and I would rather say so here than have it noticed elsewhere. The
> cover's recursion — a ball built of balls built of balls — was beyond any single request, so I
> generated four pieces separately and assembled them into one myself. And one distinction, since
> this note has made much of diagrams that refuse to draw when their claims break: these can refuse
> nothing — they decorate, they do not argue, and you could cut every one of them without moving
> anything in the case this book makes.

**Held and corrected before applying.** The patch as delivered read *"which returns, in grey, to face
**the last page**."* False: the Coda opens on PDF page 165 of 202, and thirty-seven pages follow it —
the Epilogue, this Note, both appendices, the References and the Index. Reported rather than
silently fixed; the author ruled **"to face the Coda"** — true, same rhythm, the detail survives.
Logged by chat-claude as its **fifth memory-class error**: page geography asserted for a build never
held, in the one paragraph about not getting caught out.

Facts in the paragraph verified against the built book before insertion: eight chapter-opening
engravings (seven chapters + Coda) ✓ · two full-page plates, `plate_spear_edge` and
`plate_two_ships` ✓ · the cover ball reprised in grayscale facing the Coda ✓ · four tiles generated
separately (`engraved_ball`, `crowd_of_balls`, `orbit_of_balls`, `vortex_of_balls`) and assembled by
`cover/cover_art_build.tex` ✓.

## E2 — the referent repair (rule 7)

E1 installs a nearer antecedent, so *"What **it** did not do"* would have reached for the image model
rather than the prose-writer.

The patch proposed *"the machine"*. Checked against the note's own usage as the patch instructed:
the note uses *"an artificial intelligence"* once and *"a machine"* twice, both indefinite, and
*"the machine"* **never** — so it was a new definite form, and worse, E1 has just introduced a second
machine. The author ruled **"that intelligence"**: the demonstrative reaches past E1's nearer machine
to *"drafted by an artificial intelligence"* by agreement of kind.

Final sentence: *"What that intelligence did not do was have the ideas, decide the physics, or supply
the memories."*

**Anchor correction, taken silently as clerical:** the patch's `OLD` ended *"…have the ideas."* with a
terminal period. No such string exists — the sentence continues *", decide the physics, or supply the
memories."* The anchor without the period matches exactly once.

## Sweeps

| check | result |
|---|---|
| `image model` in the note | 1 ✓ |
| `engraving` in the note | 1 (was 0) ✓ |
| `to face the last page` anywhere in the book | 0 ✓ |
| `What it did not do` anywhere | 0 ✓ |
| `What that intelligence did not do` | 1 ✓ |

Rule 8 (every sentence pays its own way): all four sentences carry literal, self-contained content
and survive the black-rectangle test — the inventory in sentence two is literal, and the closing
verdict spends only what its own paragraph earned.

## Build

| | pages | errors | Overfull | Float too large | undefined | collisions |
|---|---|---|---|---|---|---|
| digital | 202 | 0 | 0 | 0 | 0 | 0 (exit 0) |
| print | 202 | 0 | 0 | 0 | 0 | 0 (exit 0) |

**Page count unmoved at 202** — the paragraph was absorbed. (A shift would have been acceptable while
`\PAGECOUNT` is unset, but there was none to report.)
