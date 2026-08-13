# P10 — THE BACK-HALF ACCESS KIT: licence, box, breather; toy-map figure commissioned (applied 2026-08-13)

*From chat-claude, all items ruled yes by Niels. Transport: the ===FILE bundle protocol, third use.
Received as `nbj/P10_bundle.txt` and split to its one declared file, `nbj/P10_accessibility.md`.
Mirrored verbatim below.*

## Applier's record (code-claude)

- All four prose anchors verified unique at HEAD (post-P9) before any edit; each inserted text
  verified absent beforehand and present exactly once after.

- **E1 quote-back (the junction).** "How to Read This Book" does not end at its prose. It ends with
  a centred, boxed formal notice:

  > …The physicist may ignore the apparatus entirely; the layman may lean on it without missing
  > anything the physicist gets.
  >
  > `\begin{center}` **A Note to the Reader** — *"This book blends established material with
  > original ideas and interpretations…"* `\end{center}`
  >
  > `\mainmatter` → `\part{The Demand}`

  So "before the following heading" had two readings. **The licence was appended after the prose
  paragraph and before the Note box**, not after it. Reason: the licence is reading guidance and
  belongs with the helps-and-promise prose; the Note is a formal disclaimer in a different register
  that closes the front matter. Placing body prose *after* it would strand the notice mid-section.
  **Consequence to eye:** the added paragraph pushes the Note box onto its own page (p. 10), which
  was previously a blank verso before Part I. The front matter therefore did **not** grow — the
  blank was absorbed — but the Note now stands alone as a notice page facing the part opening.
  It reads as deliberate; if it is not wanted, the fix is to move the licence after the Note.

- **E2** applied to the paragraph closing the chapter-7 preamble ("…which one the sentence names.").
  Its promise "the box below holds the machine" is now literally true: E3 sits between the
  following paragraph ("Here are the places.") and the First Wound heading.

- **E3 box — margin check.** The text block is 4.5 in = 325.2 pt. The box measures
  0.90×325.2 + 2×`\fboxsep`(3 pt) + 2×`\fboxrule`(0.4 pt) = **299.5 pt**, leaving **12.85 pt
  (≈0.18 in) inset on each side**. Neither `\fboxsep` nor `\fboxrule` is redefined anywhere in the
  manuscript, so the LaTeX defaults hold; and an over-wide box inside `center` would have raised an
  Overfull `\hbox` — there are none, in either edition. Renders on p. 98, inside the margins.

- **E4 breather — placement confirmed in the rendered PDF**, not just the source: p. 119 runs
  *"…Scoreboard: open --- and the only wound with a growing literature on the side of the toy."*
  directly into *"Halfway. Four wounds in, three still to come…"*, with the Fifth Wound heading
  after it. The arithmetic checks too: four wounds down, three (fifth, sixth, seventh) to come.

- **The null finding, recorded so the audit leaves a trace.** The bundle reports item 3 of
  chat-claude's five-item audit closed with no edit — every back-half section already opens
  oriented. Carried into the record as received and ruled; code-claude did not independently
  re-audit the back half to confirm it.

- **E5 — the figure, commissioned and drafted, NOT in the book.** Built in the book's own TikZ
  idiom rather than a new one: layer bands and downward cascade arrows from `fig:cascade`, the
  displaced-ring lattice carrying its own wave from `fig:rainandsong`/`fig:ringlattice`, the house
  accent palette (blue = momentum/push, red = energy/cascade, gold = light/depletion). Contents per
  the commission: our-layer band with a ring-lattice patch, rain arrows through it, two bodies with
  mutual shadow and inward push, the song running along the lattice; the gap on the boundary; a
  faster band below with the cascade; and the ledger corner. Delivered beside the Coda-plate preview:
  - `nbj/toymap_preview.tex` — source, with the insertable block between `FIGURE-BEGIN` /
    `FIGURE-END` markers and `\label{fig:toymap}`, ready to lift on a yes.
  - `nbj/toymap_preview.pdf` — one page, colour, interior spec (6×9, 11 pt mathpazo).
  - `nbj/toymap_preview_print.pdf` — one page, grayscale, the print interior's palette.

  Both build 0 errors / 0 Overfull. Checked by eye at 150 dpi through three drafts: label/arrow
  collisions were found and fixed (the song label was sitting on the left body and hiding its push
  arrow; the cascade arrows ran through the lower band's label; the gap line was double-dashed; a
  rain arrow clipped "the shadow push"). The grayscale twin keeps every distinction — song 0.60,
  cascade 0.42, push 0.22, each redundant with position and form, per the colour policy.
  It enters the book only on the pencil-test yes, before the count locks; on a yes the E3 box
  **stays** (box for the flip-back, figure for the first read). Logged in `process/TODO-NIELS.md` §2
  beside the Coda-reprise ruling, which has the same before-the-count-locks deadline.

- **Sweeps:** licence wording present in both variants, once each (E1 "skip the fight" ✓,
  E2 "skips the fight" ✓) · box present once ✓ · breather present once ✓ · breather sits between
  wound four's scoreboard and wound five's heading ✓ · box inside margins, both editions ✓ ·
  no stray control characters introduced ✓.

- **Build:** both editions 0 errors / 0 Overfull / 0 undefined. The 7 Underfull are byte-identical
  to the P9 baseline — all pre-existing, all in the bibliography at `\printbibliography`; P10 added
  none. **Page count: 198 pp — +2, where the patch expected +1.** The accounting: the front matter
  did not grow (the licence absorbed the blank verso at p. 10); both pages come from Chapter 7,
  where E2 (~60 words), E3 (the box), and E4 (~250 words) add roughly 400 words plus a framed
  block. Campaign total 184 → 198.

- *Applier's note on tooling, for the next agent: shell heredocs in this environment halve
  backslashes, so a Python patch script written inline turned `\\begin` into a literal backspace.
  P9's `\emph` survived only because `\e` is an invalid Python escape that is left alone. Patch
  scripts are now written to a file with raw strings and run from disk; assertions fire before the
  write, so the mangled attempt left the manuscript untouched.*

## The bundle as received (verbatim, from nbj/P10_bundle.txt)

===FILE nbj/P10_accessibility.md===
P10 --- THE BACK-HALF ACCESS KIT: the licence, the box, the breather; figure
commissioned behind the pencil test. From chat-claude, all five items ruled yes by
Niels; item 3 closed as a null finding (every back-half section already opens
oriented --- recorded here so the audit leaves a trace). Verify anchors once;
mirror to record/.

E1 (locate-and-quote-back): at the end of the "How to Read This Book" section,
before the following heading, append as its own paragraph, and quote the junction:
One more licence, for Chapter 7 especially. Every wound there has the same anatomy:
the attack stated plainly at the top, the fight in the middle, and an italic
\emph{Scoreboard} verdict at the close --- with a single table at the chapter's end
holding the whole state, and a small box at the chapter's head holding the machine.
Read every word if you want to watch the blows land. But you may also, with the
author's blessing, read each wound's opening and its scoreboard and skip the fight
between them: you will lose the choreography and none of the score.

E2: OLD: which one the sentence names.
NEW: which one the sentence names. And a licence, issued once and good for the whole
chapter: each wound opens by stating its attack and closes with a scoreboard stating
its verdict; the reader who skips the fight between them loses choreography, never
score --- the box below holds the machine, and the table at the end holds the state.

E3 (insert immediately before \section{First Wound: The Pincer of Drag and Heat}):
\begin{center}\fbox{\parbox{0.90\linewidth}{\small \textbf{The toy, for the road.}
The \emph{flux} makes gravity: bodies shadow one another's rain and are pushed
together. The \emph{lattice} carries light: the crowd's own transverse song. The
\emph{gap} seals each layer's books; the \emph{cascade} sells the intake downward.
One assumption does double duty: \emph{lower layers are faster}. Two purchases stand
on the books: the hidden rest frame, and energy's regress, downward forever. The
running state: the table at this chapter's end.}}\end{center}

E4 (insert immediately before \section{Fifth Wound: The Correlations}, as its own
paragraphs, exactly as follows):
Halfway. Four wounds in, three still to come, and I want to put the pen down for one
paragraph and say what it is like to sit here.

I suppose that for some people the point of a life is wonderful cuisine --- the best
a great kitchen can offer --- and they might even measure a life by how much of it
they got to taste. I am that person about exactly one thing: understanding what is
really going on. Not understanding that stops at the counter --- \emph{aren't we
clever to have figured this out, and doubly clever because what we figured out is
unintuitive} --- that is a meal I push away half-eaten. I want the kitchen. So I toil
on, mostly alone, with little understanding from most of the people around me, and I
suspect the person whose life is given to cuisine would understand me perfectly.
Dedication recognizes dedication across any menu. Which is also why the physicists
whose theorems have spent four wounds hitting this toy have my respect and not my
resentment: they are dedicated people, most of them hungrier than their textbooks let
on, and the wounds they forged are the best food in this book. Three more courses.
Back to it.

E5 (commission, not an edit): draft the toy-map figure at interior spec, in the
book's TikZ idiom: one horizontal our-layer band --- a patch of ring-lattice, rain
arrows passing through it, two bodies with mutual shadow cones and inward push
arrows, a wavy song-line along the lattice --- over a faster-layer band with
downward cascade arrows; labels: the flux, the lattice, the song, the shadow push,
the gap (at the band boundary), the cascade; a small ledger corner: "one assumption,
twice: lower layers are faster / two purchases: the hidden frame; the downward
regress." Render a one-page preview to nbj/ beside the Coda-plate preview. It enters
the book only on Niels's pencil-test yes, before the count locks; on yes, the box
(E3) stays --- box for the flip-back, figure for the first read.

SWEEPS: licence wording present twice (E1, E2 variants); box renders inside margins
both editions; the breather sits between wound four's scoreboard and wound five's
heading; 0/0 both editions; page count reported (expect +1); mirror to record/;
commit: prose: back-half access kit --- licence, box, breather; toy-map figure
commissioned (P10).
===END===
