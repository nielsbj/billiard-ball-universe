# Note on the figures — to the author of *The Billiard Ball Universe*

*From: Claude (working in Niels's proofviz studio), 2026-07-24.*
*To: the LLM who wrote this book and drew its original TikZ figures.*

Your figures were conceptually right, every one of them — the captions especially
are doing real argumentative work and none of them were touched. What follows is
what changed underneath them, why, and how to work with the new setup when you
revise the book.

## The headline change: six figures are now rendered plates, not TikZ

Niels's **proofviz** studio (a sibling private project) authors
figures as small JavaScript "sketches" and exports them as cropped vector PDFs.
Six of the book's most geometric figures were rebuilt there, because they are
*about* three-dimensional geometry and the flat TikZ versions were quietly
underselling the argument:

| figure | sketch | why 3D won |
|---|---|---|
| `fig:inversesquare` | `proofs/bbu_inverse_square.sketch.js` | The old 2D version showed an *arc* halving — which is inverse-linear. The plate shows the blocked *cap* on the sphere of directions dropping to a quarter: the square is now literally in the picture. |
| `fig:shadowpush` | `proofs/bbu_shadowpush.sketch.js` | Rain from *all* directions in space, not a 2D asterisk; the thinned corridor and net push read at a glance. |
| `fig:layers` | `proofs/bbu_layers.sketch.js` | The zoom-triptych (body → crowd → world) with consistent depth; panel captions are baked into the plates. |
| `fig:actorsbelow` | `proofs/bbu_actorsbelow.sketch.js` | Same visual language as fig:layers, so the two "zoom" figures no longer each invent their own. |
| `fig:circulation` | `proofs/bbu_circulation.sketch.js` | Case (iii), orthogonal planes, was nearly unreadable flat. With one ring face-on and one edge-on it is finally *visible*. |
| `fig:lightpair` | `proofs/bbu_lightpair.sketch.js` | The wheeling companion is now an actual helix — a corkscrew in space with λ marked — instead of a sine wave with an ellipse glued on. |

Two properties of these plates you should know about as the author:

1. **They carry machine-checked facts.** Each sketch asserts its own geometry
   with `check.equal` (e.g. the inverse-square sketch verifies tangency,
   α(2d) ≈ α(d)/2, and blocked solid angle at 2d ≈ 1/4, exact as ρ/d → 0).
   The export *fails loudly* if a claim stops holding. If you change a caption's
   quantitative claim, check it against the sketch's checks — they are the
   ground truth.
2. **They are regenerable, not frozen.** Workflow, from the proofviz repo root:

   ```
   node scripts/make-deliverables.mjs bbu_<name>
   cp exports/bbu_<name>/bbu_<name>_<step>.pdf exports/everything/figures/
   pdfcrop --margins 6 figures/<f>.pdf figures/<f>.pdf   # canvas has margins; crop is required
   ```

   The same comment sits above each figure in the .tex. The `.sketch.js` file is
   the single source of truth for the drawing — edit it, not the PDF.

## Repairs to the TikZ figures that remain TikZ

These were bugs — text overlapping text or curves — visible in any rendering:

- `fig:cascade` — the "energy sold down…" block collided with the layer-N+1
  label. Both repositioned.
- `fig:pincer` — "planets don't vaporize" sat on the drag-curve label, "orbits
  survive" on the heating label, and after the first fix "heating (kills
  planets)" hit "tolerable". All four labels now live in clear space (zone
  labels inside their zones, "tolerable" at the left end of the dashed line).
- `fig:bellsetup` — the bottom annotation started before the station texts
  ended; moved down.
- `fig:induction` — the P(0) base-case box was narrower than its own text
  (the text "stood alone" outside the box, which is not the kind of joke the
  chapter needed). Box widened.

And some smaller improvements, no semantic changes:

- `fig:lineage` — dots at each event, italic names, wider label columns.
- `fig:picktwo` — edge annotations nudged clear of the triangle.
- `fig:frozengas` — the two interlocking senses in panel (ii) now differ by
  shade (ink vs blue) as well as arrowhead, which was too subtle alone; panel
  (iii)'s push arrows lengthened.
- `fig:ringlattice` — the +/× polarization insets got their heading
  ("the two flavours"); the three identical rows stay, deliberately — the
  columns-in-lockstep *is* the wavefront, as your own caption says.
- `fig:dipolequadrupole` — panel (a) now draws the *displaced ring* (the whole
  ring translated, dots on it), not floating dots; that is what "swings
  together" means. Panel (b) got matching dots on the ellipse.

Untouched because they were already doing their job: `fig:finitedeck` (the two
red cards are generated identical by a loop — nice touch), `fig:wavemodes`,
the rain-and-song pair, the grain ladder, and the settlement table.

## Conventions, if you add figures

- Accent palette stays as you defined it: `bbuBlue` = momentum/gravity/waves,
  `bbuRed` = energy/heat/repulsion, `bbuGold` = light/depletion/counting —
  and the grayscale fallback in the print branch must keep every distinction.
- If a new figure is *about* space, shadows, orbits, or anything genuinely
  three-dimensional, prefer a proofviz sketch (copy the helper style from
  `proofs/bbu_inverse_square.sketch.js` — billboard balls from the eye vector,
  sampled rings, flat polygon washes, one camera for all steps). If it is a
  diagram of *text and boxes* — timelines, flowcharts, graphs with labeled
  curves — TikZ remains the right tool; just leave room around every label.
- The plates live in `figures/` next to the .tex; the book includes them with
  plain `\includegraphics`. Panel-level captions are baked into the plates for
  fig:layers, fig:actorsbelow and fig:circulation; the other plates take their
  panel lines in LaTeX. Either is fine — just don't do both for the same panel.

The book is a pleasure to work on. — C.
