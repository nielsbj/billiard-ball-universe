# Narration rulings — for the author (2026-10-29)

*Everything the audio edition needs decided, in one place. Drafted by
code-claude for Niels to rule on; **nothing here is adopted**. The render gate
is zero unresolved `[[` markers in `audiobook/build/script/`, so every item
below must end up either resolved or deliberately struck.*

## How to work this file

Each item carries a **proposed ruling** and the **exact spoken words** that
would be used. You need only disagree — anything you do not touch stands as
drafted. Mark changes however you like; I will apply them and re-run the
generator, which re-checks the whole script.

## What there is to rule

| class | count | proposed | where |
|---|---|---|---|
| FIGURE | 23 | **all silent** | §A |
| FOOTNOTE | 38 | 31 inline · 2 moved · 5 cut | §B |
| MATH | 26 | spoken forms drafted | §C |
| TABLE | 2 | narrated as prose | §D |
| BOX | 3 | read in place | §D |
| PAGEREF | 3 | **needs your prose** | §E |
| credits | 2 | drafted separately | `CREDITS_DRAFT.md` |

## Verification notes — read these first

Four drafters worked in parallel and I checked their load-bearing claims
rather than accepting them. Four things came out of that, and one of them
would have put a false statement into the book's audio.

**1. One drafted option was factually wrong, and is rejected.** In Chapter 4
the printed text reads *"…arranged at roughly 10 to the power $10^{118}$"* —
the base-ten is in the prose, the exponent is in the formula, and the value is
therefore ten to the power of ten to the hundred and eighteenth. The math
drafter correctly flagged the awkwardness but offered as one option reading it
as *"ten to the power of a hundred and eighteen"*, which is a different and
vastly smaller number. **Rejected.** The book's own next sentence settles it:
*"Write a one, then ten-to-the-118 zeroes."* A one followed by 10^118 zeroes
is 10^(10^118). The spoken form in §C is the corrected one.

**2. Two claimed errors in the published book are false alarms.** Both were
checked against `manuscript/billiard_ball_universe.tex`:

- *"Appendix B's five sentences"* (Chapter 4 footnote) was reported as wrong
  because Appendix B runs to five paragraphs. It is **correct**: Appendix B is
  built of sections literally titled *"Quantum mechanics, in five sentences"*
  and *"Relativity, in five sentences"*. The footnote points at that structure.
  The drafter's "correction" is **not applied**.
- *"has a range of one massion"* (Chapter 7) was reported as a dropped word.
  It is **deliberate**: two sentences earlier the text says the attraction
  *"exists only while the gap is smaller than one corpuscle diameter"*, and
  this is the punchline restating it in the book's own coinage, against
  *"Gravity holds the Moon at four hundred thousand kilometres."* **No change.**

Nothing in the published book needs correcting on either count.

**3. The all-silent verdict on figures was checked at its hardest case.** All
23 figures are proposed silent, which is a uniform enough answer to deserve
suspicion. The argument is that the figures were added to already-finished
prose and no prose was trimmed for them, so each one's content is discharged by
nearby sentences — backed by your own promise in *How to Read This Book* that
"everything essential is in the main text, in plain prose". I verified this
independently at Figure 3.1, the induction diagram, which this project's own
to-do list once called the remaining *essential* diagram. The paragraph before
it says, in plain words: induction has a base case and a step; the base is
established independently; your tower's dependency points the other way; it is
"induction with the base case deleted". A listener loses nothing. The verdict
stands, but it is yours to overturn anywhere you remember leaning on a picture.

**4. Five converter bugs were found and fixed before any of this.** Listed in
`README.md` and the commit log; the two that would have reached the ear were
the Tegmark double exponents flattening to nonsense, and every chapter title
being spoken twice. The generator now fails the build on each of them, and on
any of your five voice-rule phrases going missing in conversion.

## §E — Prose that points at the page (3 items, and they need you)

These carry no markup and needed no decision in print: they are ordinary
sentences that direct the reader's **eye**. A listener has nowhere to look.
They are the one class I cannot draft around, because the fix is prose.

1. `ch6` — *"And I owe the reader a structural honesty **before the figure
   below**, because the chapter has now asked the crowd to be two things…"*
   Suggested shape, yours to rewrite: *"…a structural honesty before I go on…"*
2. `ch6` — *"The travelling pair **of the figure** is not discarded; it is
   demoted and preserved."* Suggested: *"The travelling pair I described…"*
3. `ch7` — *"Seven wounds, and **the table above** holds their state."*
   This one is load-bearing: the passage after it reads the table backward as a
   specification of the layer below, so the listener must be told a table was
   just given. Suggested: *"…and that is their state, wound by wound."*

If you would rather not touch the prose at all, the alternative is to leave
them and accept three sentences that quietly assume a page. My recommendation
is to fix all three — they cost a handful of words and they are the only places
where the audio edition would be *untrue* rather than merely different.

---

---


## §A — Figures (23)

**Governing finding.** "How to Read This Book" makes the author's own promise, in his own words:
*"everything essential is in the main text, in plain prose."* The figures were commissioned as
aids to prose that was already complete, and no prose was trimmed to make room for them —
so for every one of the twenty-three, the figure's load is discharged by a sentence of body text
within a paragraph or two of the marker. Each ruling below names that sentence. Writing bridges
here would duplicate the author, not serve the listener. Three editorial dependencies, which are
*not* marker decisions, are flagged at F11, F12 and F13.

---

### F1 — file `05_ch2.txt` — caption: "Figure 2.1: The lineage, not to scale. A demand stated in verse in antiquity; nearly lost, recovered in 1417…"
**Ruling:** SILENT
**Why:** The drawing is a dated timeline — Lucretius, Poggio, Bruno, Descartes, Newton, Fatio, Leibniz, Le Sage, Ørsted, Kelvin and Maxwell, Michelson, Poincaré — and every date and name on it has already been given in the chapter's body, after which the paragraph immediately following the marker retells the whole genealogy in prose ("A demand is stated in antiquity, at full strength, in verse… and killed — fairly, by arithmetic").
**Spoken text:** —

### F2 — file `07_ch3.txt` — caption: "Figure 3.1: Round One in one picture — the objection, drawn. Induction (left) is a benign regress…"
**Ruling:** SILENT
**Why:** Kai's two speeches straight before the marker draw the figure in words, including the one thing a diagram adds — the direction of the arrows: "Notice which way it runs: upward, from a base that is independently established… Your tower runs the other way. Layer N depends on N+1 — the dependency points downward, away from any base."
**Spoken text:** —

### F3 — file `07_ch3.txt` — caption: "Figure 3.2: The trilemma of Round Five: consistent, grounded, floorless — pick at most two…"
**Ruling:** SILENT
**Why:** Kai derives all three corners aloud and then names the figure's title sentence verbatim — "Consistent, grounded, floorless — pick at most two" — with the brute-floor edge already priced in Round Three ("The brute-floor man owes one unexplained thing and admits it") and the empty centre put as a question the listener carries forward ("Which do you drop?"); a narrator's voice interposed between two speaker turns would also smooth over a dialogue the project requires left unsmoothed.
**Spoken text:** —

### F4 — file `09_ch4.txt` — caption: "Figure 4.1: The finite deck. Quantum graininess makes the number of distinguishable arrangements of a universe-sized region finite…"
**Ruling:** SILENT
**Why:** The two paragraphs before the marker are the deck argument entire — finiteness, then infinite dealing, then forced repetition — down to the sentence the figure illustrates: "a finite deck drawn infinitely many times repeats — must repeat, each card infinitely often"; and the caption's parenthetical wrinkle is the section the listener reaches four paragraphs later, under its own heading.
**Spoken text:** —

### F5 — file `09_ch4.txt` — caption: "Figure 4.2: Layers inside layers. The layers are not side by side; they are inside one another…"
**Ruling:** SILENT
**Why:** The paragraph ending at the marker states the figure's whole geometry, including what the nesting means in both directions: "the layers are not side by side. They are inside one another… the fine structure of the matter in your own hand", and "our layer, in turn, is the fine structure of arrangements vaster than we can survey" — with the invisibility of scale established a paragraph earlier.
**Spoken text:** —

### F6 — file `12_ch6.txt` — caption: "Figure 6.1: The first rule of the sketch: space is the actors below…"
**Ruling:** SILENT
**Why:** The sentences immediately before the marker are the caption, almost word for word: "What we move through and call emptiness is, one layer down, a sea of things. Their arrangement is our geometry. Their motions are our physics of 'empty space.'"
**Spoken text:** —

### F7 — file `12_ch6.txt` — caption: "Figure 6.2: The shadow push. (a) A lone body in the universal rain of massions is struck equally from every direction…"
**Ruling:** SILENT
**Why:** Both panels are already spoken — panel (a) as "A lone object in this rain feels nothing net. Hit equally from all sides, it stays put… you do not feel the sea you are in. You feel only its imbalances", and panel (b) as "each casts a shadow — a thinning of the rain on its far side… The imbalance pushes each toward the other" — and the caption's closing inverse-square clause is the next paragraph's business.
**Spoken text:** —

### F8 — file `12_ch6.txt` — caption: "Figure 6.3: Newton's exponent, inherited from geometry. How hard the shadow push acts on a body depends on how much of its sky the neighbour blocks…"
**Ruling:** SILENT
**Why:** The paragraph ending at the marker carries the derivation and the arithmetic the drawing exists to make vivid — "Double the separation and the neighbour blocks a quarter of the directions it blocked before" — and the four-dimensional aside as well.
**Spoken text:** —

### F9 — file `12_ch6.txt` — caption: "Figure 6.4: Charge as circulation. Each charged assembly sheds circulating streams of its own substance…"
**Ruling:** SILENT
**Why:** All three panels have their own paragraph in the body: same sense ("their streams meet head-on… pile up, and press the assemblies apart"), opposite sense ("cancel, quiet the space between them… the shadow-push does the rest"), and crossed planes ("two orbital planes at right angles to each other simply miss… the way two polarizing filters at ninety degrees pass no common light").
**Spoken text:** —

### F10 — file `12_ch6.txt` — caption: "Figure 6.5: States of the crowd. (i) Gas: assemblies wander, all agitation and passage…"
**Ruling:** SILENT
**Why:** The section defines both states in words before the marker — "Call a region gas when its assemblies wander freely, all agitation and passage. Call it frozen when the circulations of neighbouring assemblies have locked" — and the third panel is the paragraph headed "First: two frozen objects in a gas drift together", melting included.
**Spoken text:** —

### F11 — file `12_ch6.txt` — caption: "Figure 6.6: The first sketch of light: an object orbited by another, in motion — a particle doing a wave…"
**Ruling:** SILENT
**Why:** The two paragraphs before the marker give the traveller, its frequency ("the wheeling rate"), its plane, its polarization and its double costume ("it is a particle doing a wave"); note for the editor, not a marker decision — four paragraphs later the body says "The travelling pair *of the figure* is not discarded", a pointer at a picture no listener has, and the clean fix is to read "of the sketch" there.
**Spoken text:** —

### F12 — file `12_ch6.txt` — caption: "Figure 6.7: The rain and the song — the same crowd, doing its two things…"
**Ruling:** SILENT
**Why:** The paragraph ending at the marker makes the two-tenant commitment explicitly and better than the drawing does — "a lattice threaded by a wind… One crowd, two phases, and the books of both must balance" — with the photon's confinement to a lump given a page earlier; same editorial note as F11, since that paragraph opens "before the figure below", which wants to become "before I go on" in the spoken text.
**Spoken text:** —

### F13 — file `13_ch7.txt` — caption: "Figure 7.1: The toy, on one page. Our layer is a crowd doing two things at once…"
**Ruling:** SILENT
**Why:** The figure is a recap of Chapter 6, and the `[[BOX: The toy, for the road]]` sitting directly above the marker is the same recap in prose — flux, lattice, gap, cascade, faster layers below — so this ruling depends on that box being voiced; if the box is cut, the chapter opens with no restatement of the machine and the loss belongs to the box, not to the figure.
**Spoken text:** —

### F14 — file `13_ch7.txt` — caption: "Figure 7.2: The cascade escape, drawn. A body buys its momentum in its own layer's slow flux…"
**Ruling:** SILENT
**Why:** The author has already written the figure as a market, which is stronger than the diagram — "let a body buy its momentum in the slow market… and sell its energy in the fast market… where the same energy carries almost no momentum and cannot repaint the shadow" — and the paragraph after the marker supplies the caption's closing point: "there is no first account."
**Spoken text:** —

### F15 — file `13_ch7.txt` — caption: "Figure 7.3: The pincer of drag and heat, the wound that has not closed in three hundred years…"
**Ruling:** SILENT
**Why:** The non-overlap of the two survival zones is stated in four words of body text — "Slow flux: orbits decay. Fast flux: planets glow" — and the knob-trade-off, Poincaré's two numbers, Kelvin's re-emission failure and the elastic-flux failure each get their own run of prose before the marker.
**Spoken text:** —

### F16 — file `13_ch7.txt` — caption: "Figure 7.4: What the wave does. A lattice of rings of free test particles…"
**Ruling:** SILENT
**Why:** The author wrote the bridge himself, and it is the best passage of description in the chapter — "Imagine a lattice of rings hanging in space… each ring it reaches begins to breathe… wide, then tall, then wide again", through the stadium wave and on to the plus and the cross — so anything added here would be a second telling of a picture the listener already has.
**Spoken text:** —

### F17 — file `13_ch7.txt` — caption: "Figure 7.5: The two songs have different shapes…"
**Ruling:** SILENT
**Why:** The contrast is drawn in the body in the same breath as the demand it generates: "the ring of test charges swings together along one axis; gravity's two are the quadrupole plus and cross of the ring lattice. So the crowd must carry two distinct transverse branches, one of each pattern, at one speed, and no others."
**Spoken text:** —

### F18 — file `13_ch7.txt` — caption: "Figure 7.6: The specification nature hands the layer below…"
**Ruling:** SILENT
**Why:** The paragraph ending at the marker reads the specification out as a list — "transversely stiff yet swimmable… transverse-only, carrying exactly two branches (light's dipole pair, gravity's quadrupole pair) and nothing else, dispersionless, frameless in effect, its waves clocked at exactly c" — and the longitudinal prohibition the lower panel exists to show is priced earlier, where the laboratory lattice is admitted to carry longitudinal modes "as well, at higher frequency".
**Spoken text:** —

### F19 — file `13_ch7.txt` — caption: "Figure 7.7: The Bell experiment. Two particles prepared together are sent far apart…"
**Ruling:** SILENT
**Why:** The experiment is set up in the body in two sentences — "Prepare two particles together and send them far apart — kilometres, or continents. Measure each with a setting chosen freely at the last moment" — and the caption's one remaining clause, that nothing usable crosses, becomes a qualification in its own right a paragraph later: "no signal crosses. The correlations carry no message, no energy, no controllable influence."
**Spoken text:** —

### F20 — file `13_ch7.txt` — caption: "Figure 7.8: The two regimes, which are the whole of this wound…"
**Ruling:** SILENT
**Why:** Both regimes are stated in the paragraph ending at the marker, each with the consequence the panel is drawn to make visible — "every piece of matter in it does its own blocking independently… The push then tracks the body's mass" against "the far side of it stands in the near side's shadow and contributes nothing… the push tracks the silhouette" — and the terms transparent and opaque are given immediately after.
**Spoken text:** —

### F21 — file `13_ch7.txt` — caption: "Figure 7.9: Entropy, layer-indexed…"
**Ruling:** SILENT
**Why:** The figure's two registers are the body's own sentences — "The entropy at layer N counts the arrangements of layer N+1 that are indistinguishable from layer N. The line is drawn by the world, once per layer" — including the caption's closing debt to the fourth wound.
**Spoken text:** —

### F22 — file `13_ch7.txt` — caption: "Figure 7.10: The ladder under load…"
**Ruling:** SILENT
**Why:** The rungs are counted out in the body, in the plainest sentences in the section — "Heat fails; electrons hold. Electrons fail; neutrons hold… It is this book's thesis, observed, twice, in objects we can point a telescope at" — and the missing fourth rung, the singularity, and the charge that "A singularity is a floor" all follow the marker in prose.
**Spoken text:** —

### F23 — file `13_ch7.txt` — caption: "Figure 7.11: Why two like circulations are a bad bargain…"
**Ruling:** SILENT
**Why:** The arithmetic is spoken before the marker, numbers and all — "from a distance, they look like a single circulation of twice the strength: four units of energy, where the two of them apart cost only two. So a double quantum is not forbidden — it is simply a bad bargain, and it splits" — and the asymmetry of the opposite case gets its own paragraph, ending on the author's own guard: "this is a shape and not yet a derivation."
**Spoken text:** —

---


## §B — Footnotes (38)

Thirty-eight `[[FOOTNOTE n: …]]` markers, in order of appearance. Thirty-one INLINE,
two MOVE, five CUT.

Convention used below: **Spoken text** gives only the words *added* to the narration —
the hinge plus the footnote as reworded for speech. Where the aside lands at the nearest
breath rather than at the exact marker, the **Why** line names the seam, quoting the main
text it follows. Em-dashes mark a spoken parenthesis; a full stop means the aside is read
as its own sentence. `(Dictionary.)` and `(Dictionary: …)` cross-references are dropped
throughout — they are print apparatus, and Appendix A is narrated in full at the end.

---

### N1 — file `05_ch2.txt` — fn1
**Ruling:** INLINE
**Why:** It sits at the close of the paragraph already, so nothing is interrupted — and the inverse square is the book's single most reused shape, worth rescuing early.
**Spoken text:** "The inverse-square law, plainly: double the distance and the force falls to a quarter — the observed shape of gravity and, later, of electric attraction. Chapter Six derives it from the geometry of shadows."

### N2 — file `07_ch3.txt` — fn1
**Ruling:** INLINE
**Why:** Read at the marker, after "The trilemma is exhaustive." — a sentence boundary, and the baron in the swamp is what makes the name stick for a listener who will meet "Agrippa's trilemma" twice more in this chapter.
**Spoken text:** "It is an ancient thing — it descends from the sceptic Agrippa's modes — and its modern name is the Münchhausen trilemma, after the baron who claimed to have pulled himself out of a swamp by his own hair."

### N3 — file `07_ch3.txt` — fn2
**Ruling:** CUT
**Why:** The marker splits "Tarski" from its own colon, and the three clauses that follow it — Tarski, then Gödel, then Russell — state the footnote's whole content three times over; what is left is two first names and a decade, and Appendix A's "Diagonal theorems" entry is narrated intact.
**Spoken text:** —

### N4 — file `09_ch4.txt` — fn1
**Ruling:** INLINE
**Why:** The marker stands between the subject and its verb, so the aside waits three words, for "Quantum mechanics is what closes the count." — and it lands exactly where the paragraph turns to graininess, which the gloss prepares.
**Spoken text:** "— quantum mechanics being the physics of the very small, whose signature is that nature deals in discrete steps rather than smooth gradations. A listener meeting it here for the first time may want Appendix B, at the end of this book: the standard picture in five short paragraphs, and worth hearing before Chapter Six."

### N5 — file `09_ch4.txt` — fn2
**Ruling:** INLINE
**Why:** The marker falls just before "forever", which is the sentence's hammer blow; the aside waits for it, and its own last clause then hands straight over to "existence, not communication."
**Spoken text:** "The horizon is the distance beyond which light has not had time to reach us since the beginning — and, with the expansion of space now accelerating, the most distant regions never will: a limit on contact, not a limit on existence."

### N6 — file `09_ch4.txt` — fn3
**Ruling:** INLINE
**Why:** Read at the comma, after "The visible universe is flat as far as we can measure" — "flat here is geometry, not pancake" is the author's own joke and belongs in the audio; the main line then resumes "Flatness is what infinity would look like — but a finite universe curved too gently for our instruments would look the same."
**Spoken text:** "And flat here is geometry, not pancake: parallel lines staying parallel, triangle angles summing to a hundred and eighty degrees — the signature of space without overall curvature."

### N7 — file `09_ch4.txt` — fn4
**Ruling:** INLINE
**Why:** Nobody knows what a three-torus is, and the argument against it turns on the picture; read right after the word, with the main line resuming "A three-torus, then, or its kin — an edgeless edge, stipulated, doing no other work…"
**Spoken text:** "A three-torus is the video-game wrap, in all three directions: leave through the right wall, re-enter through the left, and likewise up and down, front and back. Finite volume, no edge, no centre — and no reason for the wrap except the wrap itself."

### N8 — file `10_ch5.txt` — fn1
**Ruling:** INLINE
**Why:** It already sits inside a dash-pair in the main text, and the gloss is one clause long; a hinge would weigh more than the aside, so it is folded in as the author simply saying what he means.
**Spoken text:** "a black hole — a region where gravity has won completely; nothing that enters, not even light, comes back out —"

### N9 — file `12_ch6.txt` — fn1
**Ruling:** INLINE
**Why:** Read at the marker: it is a sentence boundary, and it is the first of two qualifications the main text itself then makes, so it reads as the author tightening his own claim — which is the register of the whole passage.
**Spoken text:** "Exactly so, in the limit that the bodies are small compared to the distance between them — a condition every orbit in this book satisfies with room to spare."

### N10 — file `12_ch6.txt` — fn2
**Ruling:** INLINE
**Why:** Read after "pass no common light.", because the marker splits "two polarizing filters" from "at ninety degrees"; the footnote's middle clause is dropped as the main text has just said it.
**Spoken text:** "A polarizing filter, if the word is new, passes only light whose sideways vibration lies along one axis — sunglasses and camera filters do it daily."

### N11 — file `12_ch6.txt` — fn3
**Ruling:** INLINE
**Why:** It stands at the end of the paragraph, after "since 1932.", so it costs nothing — and it names the positron, which the annihilation argument has been describing without a name.
**Spoken text:** "That year was Carl Anderson's discovery of the positron, the electron's opposite twin; the mutual destruction of matter and antimatter followed it into the textbooks."

### N12 — file `12_ch6.txt` — fn4
**Ruling:** INLINE
**Why:** It nests inside a main-text parenthesis, which is why it is folded down to a single clause with no hinge — but "stars, flames and lightning" is three words of real rescue and the paragraph's closing line ("what happens to any pond in autumn") cannot be followed by a definition.
**Spoken text:** "the quark–gluon plasma of the collider experiments — a plasma being a gas so hot its atoms have come apart into charged fragments, the state of matter of stars, flames and lightning —"

### N13 — file `12_ch6.txt` — fn5
**Ruling:** MOVE
**Why:** The sentence climbs from the phonon to the photon in one breath and the marker sits mid-climb; moved to the end of the paragraph, after "the way the twentieth century's own field theory rounds it too.", where "proof by existence" actually strengthens the paragraph's last beat.
**Spoken text:** "One more word about the phonon, because it is the whole licence for this move: it is the vibration of a lattice, which quantum mechanics obliges to come in discrete lumps. Proof by existence that a medium's waves can be particles."

### N14 — file `12_ch6.txt` — fn6
**Ruling:** MOVE
**Why:** Mid-sentence it falls between the quasar evidence and the sentence's landing ("can never catch the exception"), which is the point of the whole section; moved to the paragraph end, after "Looking is itself a certificate.", where the hinge can pick up the word "certificate" and make the seam invisible.
**Spoken text:** "A word on quasars, since the certificate is written in their light. A quasar is the violently bright core of a distant galaxy, and its light, crossing most of the visible universe, is stamped on the way with the fingerprints of the atoms it passes through — so it carries a record of whether the constants of physics were the same out there, back then."

### N15 — file `13_ch7.txt` — fn1
**Ruling:** INLINE
**Why:** Read at the marker, which is a comma; the term is load-bearing for the sentence it is in — Kelvin's escape fails *because* re-emission is isotropic — so the listener cannot be made to wait for it.
**Spoken text:** "— isotropic meaning the same in every direction; an isotropic rain pushes nothing anywhere, only its imbalances act —"

### N16 — file `13_ch7.txt` — fn2
**Ruling:** INLINE
**Why:** Read at the marker as a dash-aside; the hemispheres are named and not described in the main text, and the horses are the whole reason a listener will believe the sealed-gap case is real.
**Spoken text:** "— Otto von Guericke, sixteen fifty-four: two evacuated half-spheres of copper, pressed together by nothing but the weight of the air, and teams of horses could not pull them apart —"

### N17 — file `13_ch7.txt` — fn3
**Ruling:** INLINE
**Why:** Read at the marker, folded to one clause so it does not collide with the main text's own apposition that follows; the last sentence of the footnote is dropped because the main text says it next.
**Spoken text:** "— colloids being particles around a thousandth of a millimetre suspended in a fluid; milk and paint are colloids —"

### N18 — file `13_ch7.txt` — fn4
**Ruling:** INLINE
**Why:** The marker splits "LIGO" from "detectors", so the gloss is folded in just behind the noun as a plain apposition; "Louisiana and Washington State" is dropped because the main text supplies it two sentences later.
**Spoken text:** "— two L-shaped machines with four-kilometre laser arms, able to sense a change of length far smaller than a proton —"

### N19 — file `13_ch7.txt` — fn5
**Ruling:** INLINE
**Why:** This one genuinely hurts: it is a parenthesis inside a parenthesis inside the wave's list of credentials, so it is cut down to the six words a listener needs and the satellite clause goes.
**Spoken text:** "— gamma rays are light of the very highest energies —"

### N20 — file `13_ch7.txt` — fn6
**Ruling:** INLINE
**Why:** Read after "superfluid helium is exactly such a two-fluid system", with the main text's dash-pair resolved into sentences — the marker split the adjective from its noun, and this is the chapter's first superfluid, which the Tkachenko argument then leans on for pages.
**Spoken text:** "A superfluid is a liquid cooled until it flows with no viscosity at all — climbing walls, passing through gaps that would stop any ordinary fluid."

### N21 — file `13_ch7.txt` — fn7
**Ruling:** INLINE
**Why:** Read at the marker but reduced to its one image: the main text has already said the waves are of a vortex lattice, and says "observed and directly imaged" immediately after, so only "a crystal made of whirlpools" is new — and this sentence carries another gloss right behind it.
**Spoken text:** "— a crystal made of whirlpools, waving as a crystal does —"

### N22 — file `13_ch7.txt` — fn8
**Ruling:** INLINE
**Why:** Read at the marker, which is a comma; "dilute-gas condensate" is opaque spoken aloud, and "dilute enough to photograph" is what makes the main text's "directly imaged" mean anything.
**Spoken text:** "— a cloud of atoms cooled until they all fall into one shared quantum state, a superfluid made in the laboratory and dilute enough to photograph —"

### N23 — file `13_ch7.txt` — fn9
**Ruling:** CUT
**Why:** The same paragraph already glossed it — "transverse waves require shear rigidity, the stubbornness of a solid" — the marker splits a quotation from its own noun, the sentence is already carrying two other asides, and Appendix A's "Shear; shear modulus" entry keeps the deck of cards.
**Spoken text:** —

### N24 — file `13_ch7.txt` — fn10
**Ruling:** INLINE
**Why:** Read at the marker, absorbed into the main text's own dash-clause rather than added beside it, so one aside does the work of two; "its opposite is isotropy" is dropped, isotropy having been glossed earlier in the chapter.
**Spoken text:** "— direction-dependent, behaving differently along different axes: Alfvén waves care which way the field points —"

### N25 — file `13_ch7.txt` — fn11
**Ruling:** INLINE
**Why:** Read a few words later, folded onto "the quadrupole plus and cross of the ring lattice": the dipole half of the footnote is already the main text's own clause, and only the quadrupole shape is new — at the marker it would be said twice in a row.
**Spoken text:** "— quadrupole being stretch along one axis and squeeze along the perpendicular —"

### N26 — file `13_ch7.txt` — fn12
**Ruling:** INLINE
**Why:** Read after "and nothing else.", because the marker splits "Coulomb's" from the force it owns; it lands before "Scoreboard: open", so the verdict still closes the paragraph.
**Spoken text:** "Coulomb's law is electricity's Newton: like charges repel, opposites attract, with the same inverse-square shape as gravity."

### N27 — file `13_ch7.txt` — fn13
**Ruling:** CUT
**Why:** Superfluid was glossed at its first appearance in this same chapter (N20); a second definition an hour later tells the listener nothing, and the main text here at once supplies what actually matters — the gapless spectrum with a finite slope.
**Spoken text:** —

### N28 — file `13_ch7.txt` — fn14
**Ruling:** INLINE
**Why:** Read at the marker, which is a sentence boundary, so it costs nothing — and it is the only place the word "entangled" is explained, while the main text uses it again unglossed later in the wound.
**Spoken text:** "Particles prepared together and described together like this are called entangled — the word is Schrödinger's."

### N29 — file `13_ch7.txt` — fn15
**Ruling:** INLINE
**Why:** Read at the marker as a dash-aside: "every loophole successively closed" is empty to a listener who does not know what the loopholes were, and the footnote's last sentence is dropped because the main text's next clause gives the same date.
**Spoken text:** "— the loopholes being the sceptic's last refuges: perhaps the detectors sampled unfairly, or the two sides had time to signal each other —"

### N30 — file `13_ch7.txt` — fn16
**Ruling:** CUT
**Why:** The marker splits the subject from its verb, and that verb's own clause says the footnote's substance better and immediately — "reproduces every quantum prediction with particles that always have definite positions — deterministic, exact, and openly nonlocal"; what remains is a first name, a date and the label "pilot-wave", which Appendix A carries.
**Spoken text:** —

### N31 — file `13_ch7.txt` — fn17
**Ruling:** INLINE
**Why:** Read after "blocking is done by matter.", so the sentence lands its point first; the aside is kept in full because a listener cannot see a footnote marker and would otherwise carry Chapter Four's horizon straight into Chapter Seven's.
**Spoken text:** "A word on the word, because it changes hands here. Horizon, from now to the end of the book, means the event horizon: the surface around a collapsed body from inside which light cannot leave. Not Chapter Four's horizon, which was cosmological — the limit of what has had time to reach us. Same word, two different fences, and the book now switches fences."

### N32 — file `13_ch7.txt` — fn18
**Ruling:** INLINE
**Why:** Two markers stand inside one subject phrase here, so both are read at the same seam, after "every glowing coal an apocalypse." — one aside covering both terms, rather than two interruptions inside a single noun phrase. This is its first half.
**Spoken text:** "Equipartition is classical physics' sharing rule: in equilibrium, every independent way of moving gets the same average energy — harmless among few modes, catastrophic among infinitely many."

### N33 — file `13_ch7.txt` — fn19
**Ruling:** INLINE
**Why:** Second half of the same aside as N32, read straight on from it at the same seam; the main line then resumes "And the cure, in nineteen hundred, was Planck's quantum…"
**Spoken text:** "And the radiation field is light itself, considered as a thing that fills space; its modes are the distinct ways it can vibrate — infinitely many, and ever shorter."

### N34 — file `13_ch7.txt` — fn20
**Ruling:** INLINE
**Why:** Read at the marker but reduced to the author's own coinage: the definitional half is already in this sentence's words — "Planck's quantum: a gap, invented for precisely the job of throttling an infinite basement" — and "the width of the throttle" appears nowhere else in the book, so it would be lost by a cut. Three words is all this flourish can carry.
**Spoken text:** "— the width of the throttle —"

### N35 — file `13_ch7.txt` — fn21
**Ruling:** INLINE
**Why:** Read at the marker, which is a sentence boundary; the mechanism is already on the page, so the service is the name — and the ladder argument leans on "degeneracy pressure" for pages afterwards.
**Spoken text:** "The name for that refusal is degeneracy pressure — and note what kind of thing it is: not a force between the electrons, but a prohibition on their arrangement."

### N36 — file `13_ch7.txt` — fn22
**Ruling:** INLINE
**Why:** Read after "the infall cannot be completed within the theory.", because the marker suspends the sentence between subject and verb; the aside still sits beside Penrose, so its last clause lands where it belongs.
**Spoken text:** "A trapped surface is the point of no return made geometric: a closed surface from which even the outward-aimed light is dragged inward. Penrose's theorem needs nothing else to have formed."

### N37 — file `13_ch7.txt` — fn23
**Ruling:** CUT
**Why:** The main text defines it in the same breath — "a place where the density is infinite and the volume is nothing" — and then makes the footnote's second sentence its own, better: "it is not a description of anything. It is the mark left where the theory stopped working."
**Spoken text:** —

### N38 — file `13_ch7.txt` — fn24
**Ruling:** INLINE
**Why:** It stands at the paragraph's end, so nothing is interrupted — and "a hole with a whirl around it" is the picture the next paragraph's arithmetic runs on.
**Spoken text:** "The size of that core is set by the healing length — the distance over which a superfluid can change its density. Inside it the superfluid has been destroyed: the vortex is a hole with a whirl around it."

---

## Notes for the author's ruling

1. **Two reworded facts.** Chapter Four's fn1 sends the reader to "Appendix B's five sentences";
   Appendix B is five *paragraphs*, so the spoken line says so. Chapter Seven's fn4 named
   Louisiana and Washington State, which the main text names two sentences later — dropped
   rather than said twice.
2. **Hinges.** No two are the same shape. Eleven of the thirty-one INLINEs are folded in as
   bare appositions with no hinge at all, because the gloss is shorter than any hinge would be;
   the rest use one of "A word on…", "…, if the word is new", "…being…", "The name for that is…",
   "One more word about…", "plainly", or a flat declarative sentence.
3. **Dates spoken.** "sixteen fifty-four" (fn2), "nineteen hundred" (at the N32/N33 seam).
   Both are in main text or adjacent to it; the number-words rule is applied to anything the
   narrator says that I wrote.
4. **Found in passing, not a footnote matter.** `13_ch7.txt` line 35 reads "has a range of
   one massion" where the sense wants a corpuscle *diameter* — looks like a dropped word in the
   published text, not a narration decision. Batch it with the v1.1 errata.

---


## §C — Spoken math (26)

26 markers, numbered in order of appearance (file order 09 → 10 → 13 → 17).

---

### M1 — file `09_ch4.txt` — marker `10^118`
**Spoken text:** ten to the hundred and eighteenth
**CORRECTED by verification — see §Verification note 1.** The prose around the marker already supplies "ten to the power", so the full sentence reads "…arranged at roughly ten to the power ten to the hundred and eighteenth." That is the true value, 10^(10^118), and the next sentence ("a one, then ten-to-the-118 zeroes") confirms it. The drafter's alternative reading, "ten to the power of a hundred and eighteen", is a different number and is rejected.
**If it is too much of a mouthful aloud — author's call:** one option is to let the marker carry the whole thing and drop the prose's "10 to the power", giving "…arranged at roughly ten to the power of ten to the hundred and eighteenth." That is a prose edit, so it is yours.

### M2 — file `09_ch4.txt` — marker `10^(10^29)`
**Spoken text:** ten to the power of ten to the twenty-ninth

### M3 — file `09_ch4.txt` — marker `10^(10^118)`
**Spoken text:** ten to the power of ten to the hundred and eighteenth
**Note:** The next sentence ("Double exponents behave strangely...") already flags for the listener that this is an unusual stacked figure, so the phrase above should be read plainly, without over-stressing it — the prose itself is doing the work of signalling its strangeness.

### M4 — file `10_ch5.txt` — marker `10^(10^29)`
**Spoken text:** ten to the power of ten to the twenty-ninth

### M5 — file `13_ch7.txt` — marker `24×10^17`
**Spoken text:** twenty-four times ten to the seventeenth

### M6 — file `13_ch7.txt` — marker `10^26`
**Spoken text:** ten to the twenty-sixth

### M7 — file `13_ch7.txt` — marker `10^20`
**Spoken text:** ten to the twentieth

### M8 — file `13_ch7.txt` — marker `1/2mv^2`
**Spoken text:** a half m v squared

### M9 — file `13_ch7.txt` — marker `1/2mv^2`
**Spoken text:** a half m v squared

### M10 — file `13_ch7.txt` — marker `24×10^17`
**Spoken text:** twenty-four times ten to the seventeenth

### M11 — file `13_ch7.txt` — marker `10^33`
**Spoken text:** ten to the thirty-third

### M12 — file `13_ch7.txt` — marker `10^20`
**Spoken text:** ten to the twentieth

### M13 — file `13_ch7.txt` — marker `10^33`
**Spoken text:** ten to the thirty-third
**Note:** Same value as M11, two sentences later in the same paragraph ("...the refusal just computed, thirty-three orders deep"); keep the two readings identical.

### M14 — file `13_ch7.txt` — marker `κ = h/m`
**Spoken text:** kappa, equal to h over m
**Note:** The very next clause already spells out "with h Planck's constant and m the mass of one atom," so the marker itself should stay terse (just name the Greek letter and the ratio) and let the following words carry the definition.

### M15 — file `13_ch7.txt` — marker `κ/2π r`
**Spoken text:** kappa over two pi r

### M16 — file `13_ch7.txt` — marker `κ/2π d`
**Spoken text:** kappa over two pi d

### M17 — file `13_ch7.txt` — marker `n = 1/d^3`
**Spoken text:** n equal to one over d cubed

### M18 — file `13_ch7.txt` — marker `ℏ/d`
**Spoken text:** h-bar over d

### M19 — file `13_ch7.txt` — marker `ℏ^2n^2/3/2m`
**Spoken text:** h-bar squared, n to the two-thirds, over two m

### M20 — file `13_ch7.txt` — marker `n^5/3`
**Spoken text:** n to the five-thirds
**Note:** The sentence immediately glosses this as "the five-thirds that holds up white dwarfs," so the phrase is not redundant to drop, but it should be read lightly since the gloss repeats it a moment later.

### M21 — file `13_ch7.txt` — marker `ℏ/d`
**Spoken text:** h-bar over d

### M22 — file `13_ch7.txt` — marker `p = ℏ/d`
**Spoken text:** p equal to h-bar over d

### M23 — file `13_ch7.txt` — marker `E = ℏω/2`
**Spoken text:** E equal to h-bar omega over two

### M24 — file `17_appA.txt` — marker `1/2mv^2`
**Spoken text:** a half m v squared
**Note:** Dictionary entry already glosses this ("Kinetic energy, ___: the work it can do"); the plain formula-name reading keeps the entry glossary-terse, matching how "Momentum, mv" is handled one clause earlier (left unglossed as letters).

### M25 — file `17_appA.txt` — marker `κ = h/m`
**Spoken text:** kappa, equal to h over m
**Note:** Unlike the Chapter 7 occurrence (M14), this Dictionary entry does not immediately restate "h is Planck's constant" — that is defined in this same Appendix's separate "Planck's constant" entry. The terse reading above is still right for a glossary line, but a narrator reading the appendix out of sequence from Chapter 7 will rely on the adjacent "Planck's constant; quantization" entry to know what h is.

### M26 — file `17_appA.txt` — marker `ℏ/d`
**Spoken text:** h-bar over d

---


## §D — Tables and boxes (5)

## Drafted for author ruling · 2026-10-29

Source of truth read: `audiobook/build/script/02_howtoread.txt`, `07_ch3.txt`,
`13_ch7.txt`; original table structure from `manuscript/billiard_ball_universe.tex`
(`tabular` at lines 554–566 = `tab:settlement`, and 1632–1650 = `tab:wounds`,
each with its caption, which in both cases carries load-bearing content the grid
does not).

Note on line numbers: the script files were being regenerated while this was
drafted (the heading form changed from `Chapter 7: …` to `Chapter 7. …`
mid-session), so every edit below is keyed to its **exact sentence text**, not to
a line number. Line numbers given are as of the latest generation and are
indicative only.

---

### T1 — file `07_ch3.txt` — the scoreboard

**Ruling:** Read in place, scored aloud in Kai's own voice as a four-test spoken
scoreboard (the table sits *inside* Kai's uninterrupted turn, between "The floor
has two." and "What the table endorses is not B"), followed by a short step-out
in the author's voice carrying the caption's conceded row — because that
concession is the author's, not Kai's, and must not be smoothed into dialogue
that never happened. Two caption sentences are deliberately **not** spoken —
"Not *more grounded* — *less arbitrary*" — because Kai says exactly that two
sentences later; printing it twice is a caption's job, saying it twice is a
stammer.

**Spoken text:**

> Let me put the score down plainly, then, in four lines, because I want you to
> be able to hold it. Four tests. Three positions: the brute floor, the infinite
> regress, and the agnostic who declines to say.
>
> First test: local grounding — does every fact have a reason? The floor fails,
> at exactly one point: the floor itself has no reason. The regress is perfect —
> every layer has its reason, the one below, no exceptions, nothing dangling.
> The agnostic makes no claim at all, so there is nothing there to score.
>
> Second test: global grounding — is the totality itself accounted for; why is
> there anything rather than nothing? No. And no. And no — and not because the
> agnostic is being modest: nobody can. All three tie at zero, and so would any
> position you care to invent. That is the shared mystery, it counts against no
> one, and I withdrew it as an objection and will not pick it back up.
>
> Third test: claims about the unreachable region — how much does each position
> assert about what cannot be seen? The floor makes one: it terminates. The
> regress makes one: it never terminates. The agnostic makes none, and that is
> the whole of the agnostic's advantage.
>
> Fourth test — and this is the one that separates the two live positions: brute
> facts beyond the shared mystery. The floor has one: its own bottom level, the
> place where asking is forbidden. The regress has none. For the agnostic the
> question does not arise.

Then, as a marked step-out, spoken under the chapter's existing "Me." label:

> **Me.** — stepping out of the debate for a moment, because I am also the one
> writing it up. One row Kai would add, and I concede it here rather than let a
> tidy score hide it: the regress's own rule — that the ladder-form holds at
> every depth — is not derived either. I count it inside the third test, the one
> scoring claims about the unreachable region; it is part of that standing
> claim, not a second brute fact. The reader is free to count it the other way,
> and if they do, the verdict narrows. I would rather say that out loud than
> have the score do quiet work for me.

Then Kai resumes — and the resumed turn needs its speaker label re-spoken
("**Kai.**"), since the step-out broke the turn.

**Knock-on edits:**

1. `07_ch3.txt`, the sentence immediately after the marker —
   original: "What the table endorses is not B."
   → replacement: "What that score endorses is not B."
2. Same paragraph —
   original: "It is less arbitrary — and that was mine to see sooner, and I didn't."
   → **no change.** Flagged only to record that this is where "less arbitrary"
   lands, and why the spoken scoreboard above withholds it.

---

### T2 — file `13_ch7.txt` — the State of the Wounds

**Ruling:** Read in place, narrated as seven three-beat passages in the chapter's
own vocabulary — the wound named, then *the reply*, then *the price*, then
*still open* — which is the anatomy the chapter has already drilled into the
listener across seven sections and which "How to Read This Book" promised them;
the existing lead-in sentence ("what each objection was, the best answer the toy
can give, what the answer costs, and what remains genuinely open") is left
standing and does the framing, with one handrail sentence added. The later
backward reading restates several of these cells; that redundancy is deliberate
in print and is a gift in audio, so it stays.

**Spoken text:** (the existing sentence "Seven wounds, seven responses, seven
invoices. Here is the whole campaign in one place — what each objection was, the
best answer the toy can give, what the answer costs, and what remains genuinely
open." stays exactly as it is, immediately before this)

> Seven of them, then, in order, each in three beats: the reply, the price, and
> what is left open.
>
> **Drag and heat** — the three-hundred-year-old one. The reply: the momentum is
> taken from the slow flux, our own layer's rain, where the shadow lives and the
> push is delivered; and the energy that rides in with it is handed down the
> faster layers below. The gap refuses, the cascade removes. The price: the
> energy books close only regressively — every layer's account covered by the
> next, and no first account anywhere; and two further costs flagged rather than
> fatal, that the resupply be steady enough that gravity has not drifted
> measurably over the ages, and the graininess of the absorption fine enough to
> hide from the quietest accelerometers ever built. Neither has been checked.
> Still open: Poincaré's arithmetic, run against the cascade.
>
> **The wave in nothing.** The reply: the crowd waves — and its transverse
> stiffness comes from the tension of its own circulations, which is not merely
> hoped for, because a rotating superfluid in a laboratory carries exactly such
> waves. The price: a hidden rest frame — the Lorentz conspiracy, a passenger
> that never once shows itself — and, beyond that, the generic anisotropy such a
> crowd ought to have: a grain, a direction, and our world shows none. Still
> open: the wave sector entire — light's dipole pair, gravity's quadrupole pair,
> one speed for both, and nothing else.
>
> **Charge's indifference to orientation.** The reply: the plane tumbles so fast
> that every encounter samples all orientations, and only the rotation-sense,
> which no tumbling can reverse, survives. The price: a second perfectly hidden
> passenger, boarding the same ship as the ether frame. Still open: Coulomb's
> clean scalar, derived and not hoped for; and attraction matching repulsion
> exactly, though the toy makes the two of them in different ways.
>
> **The exactness of everything.** The reply comes in three parts: selection
> demands the uniformity — wherever structure persists, the substrate beneath it
> had to be uniform; resonance supplies the exactness, as a plucked string
> sounds only its harmonics, because fitting has no almost; and genealogy
> propagates it. The price: the gaps must *emerge* from the crowd, not be
> assumed — and the gap is the thing this book has been quietly borrowing since
> Chapter Six. Still open: the twelve decimals; and the catalogue, so small and
> so strange.
>
> **The correlations** — Bell, the deepest of them. The reply: channels one floor
> down, which are nothing more exotic than the lower layer's own light, running
> in the frame this book has already bought and already hidden — which is, as it
> happens, the very ether Bell himself recommended to teachers of relativity.
> The price: a second conspiracy — fast channels that can never, under any
> circumstances, carry a signal. Still open: Bancal's fork — either the channels
> quicken without end and no-signalling is derived in that unbounded limit, or
> they are finite, and one day a signal outruns light.
>
> **The saturated shadow** — the one nobody handed me, which I found while
> writing this chapter. The reply: a horizon is our layer's *optical* fact,
> defined by what our light cannot climb out of; the massions are not our light,
> and are under no obligation whatever to be stopped by whatever stops a photon.
> A collapsed body may trap light and still pass the rain. The price:
> transparency *assumed*, exactly where it cannot be measured — and the stopping
> chance pinned three ways, twice from below and once from above, and derived
> from none of them. Still open: transparency is verified across eleven orders of
> magnitude in the mass the rain must cross — and where, if ever, the shadow
> saturates, nobody knows.
>
> **The equal fall** — the oldest fact in gravity, arriving as the newest bill.
> The reply: weight and inertia may be bought at one counter, from the same
> crowd at the same price, in which case their ratio cancels by construction and
> the equal fall is not a miracle but a receipt. Nothing derives that; it is a
> hope, and I price it as one. The price: the shadow must be cast by energy
> itself — joule for joule, at exactly the rate energy carries mass, to fifteen
> decimals. Still open: the perihelion, the bending, the delay, the decay —
> booked, and unpaid.

**Knock-on edits:**

1. The sentence immediately after the marker —
   original: "Two purchases recur in the table's price column — the hidden rest
   frame bought for Michelson–Morley, and the downward regress of energy with no
   last account — and one assumption, lower layers are faster, does duty in two
   separate rescues."
   → replacement: "Two purchases recur in those prices — the hidden rest frame
   bought for Michelson–Morley, and the downward regress of energy with no last
   account — and one assumption, lower layers are faster, does duty in two
   separate rescues."
2. Opening of the backward reading —
   original: "Read backward, the same rows are a description of the layer below,
   assembled from measurements made at this one — the reading the second, sixth,
   and seventh wounds each found for themselves, and which I did not see whole
   until the chapter was finished."
   → replacement: "Read backward, the same seven are a description of the layer
   below, assembled from measurements made at this one — the reading the second,
   sixth, and seventh wounds each found for themselves, and which I did not see
   whole until the chapter was finished."
3. Same paragraph —
   original: "Every survival above was bought by conceding what the basement must
   be like, and the concessions, collected, are no longer nothing:"
   → replacement: "Every survival just counted was bought by conceding what the
   basement must be like, and the concessions, collected, are no longer nothing:"
4. Same paragraph —
   original: "It is the first wound — drag and heat, which until this page has
   only taken — that supplies two of the three quantitative rows: the flux's
   speed floor and the heat refusal both trace to Poincaré's arithmetic."
   → replacement: "It is the first wound — drag and heat, which until this page
   has only taken — that supplies two of the three demands carrying a number: the
   flux's speed floor and the heat refusal both trace to Poincaré's arithmetic."
5. Same paragraph —
   original: "— so the assumption the wounds table prices as doing duty in two
   rescues, lower layers are faster, has its first rung measured, and by the
   toy's executioner."
   → replacement: "— so the assumption just priced as doing duty in two rescues,
   lower layers are faster, has its first rung measured, and by the toy's
   executioner."
6. Opening of "What Seven Wounds Taught" (the lessons section) —
   original: "Seven wounds, and the table above holds their state."
   → replacement: "Seven wounds, and their state has just been set down whole."
7. Chapter 7's opening licence paragraph —
   original: "The reader should keep score, and where the wounds close I will keep
   it with you, in a single table."
   → replacement: "The reader should keep score, and where the wounds close I
   will keep it with you, set out whole, in one place."

---

### B1 — file `02_howtoread.txt` — "A Note to the Reader"

**Ruling:** Read in place, at the close of "How to Read This Book" and
immediately before Chapter One, with a two-sentence spoken frame and a long beat
either side — **not** migrated into the opening credits, because the credits
already carry the AI-narration disclosure and two disclaimers back to back blunt
each other; this note belongs where the author put it, as the last thing said
before the argument starts. The note's own words are read verbatim: it is the
book's honesty clause and not a place for adaptation.

**Spoken text:**

> And one note stands apart from all of that — not part of the argument, and the
> shortest thing in the book. In the printed copy it sits alone, in a box, on the
> last page before Chapter One. Here it is.
>
> *[beat]*
>
> A Note to the Reader.
>
> This book blends established material with original ideas and
> interpretations. Some of its claims reflect my own perspective and differ from
> mainstream views — and the text says which is which, every time. I invite you
> to read with curiosity and a healthy measure of critical thinking; nothing
> here asks to be believed on authority.
>
> *[long beat, then Part One]*

**Knock-on edits:**

1. Same file, the Chapter 7 licence paragraph, which names both the table and the
   box in print terms —
   original: "Every wound there has the same anatomy: the attack stated plainly
   at the top, the fight in the middle, and an italic Scoreboard verdict at the
   close — with a single table where the wounds close holding the whole state,
   and a small box at the chapter's head holding the machine."
   → replacement: "Every wound there has the same anatomy: the attack stated
   plainly at the top, the fight in the middle, and a one-line verdict at the
   close, which the book calls the scoreboard — with the whole state of the
   campaign set out in one place, where the wounds close, and the machine itself
   restated briefly at the chapter's head."

---

### B2 — file `13_ch7.txt` — "The toy, for the road"

**Ruling:** Read in place with a spoken frame, and the frame is slightly fuller
than a print box would need, because a listener cannot flip back to it — this is
the one page of Chapter 7 a reader is expected to return to, so the audio has to
announce what it is for. One sentence inside the box is reworded, because it
points at a table by position.

**Spoken text:**

> First, though, the toy itself, for the road — the whole of the last chapter
> compressed into the minute before this one starts taking it apart. Everything
> named here is Chapter Six's, and every wound that follows is aimed at one of
> these pieces.
>
> *[beat]*
>
> The toy, for the road. The flux makes gravity: bodies shadow one another's rain
> and are pushed together. The lattice carries light: the crowd's own transverse
> song. The gap — matter's lowest quantum step, below which energy cannot be
> absorbed at all — seals each layer's energy books; the cascade — the hand-off
> of refused energy to the faster layers below — carries the intake downward and
> away. One assumption does double duty: lower layers are faster. Two standing
> purchases — things assumed, not derived: a hidden rest frame, and energy's
> regress, downward forever. The running state is kept to the end, where the
> wounds close, and set out whole there.
>
> *[beat]*

**Knock-on edits:**

1. Inside the box itself (incorporated in the spoken text above) —
   original: "The running state: the table where the wounds close."
   → replacement: "The running state is kept to the end, where the wounds close,
   and set out whole there."
2. The licence sentence in the paragraph above the box, which points at the box
   by position —
   original: "And a licence, issued once and good for the whole chapter: each
   wound opens by stating its attack and closes with a scoreboard stating its
   verdict; the reader who skips the fight between them loses choreography, never
   score — the box below holds the machine."
   → replacement: "And a licence, issued once and good for the whole chapter:
   each wound opens by stating its attack and closes with a scoreboard stating
   its verdict; the reader who skips the fight between them loses choreography,
   never score — and the machine itself comes next, in a minute, for the road."
3. Adjacency note, no wording change needed: the box now follows "Here are the
   places." The frame's opening "First, though" is what carries that seam; if the
   author prefers, "Here are the places." could move to just after the box, but
   the frame makes the move unnecessary.

---

### B3 — file `13_ch7.txt` — "Two ledgers, separated in the laboratory"

**Ruling:** Read in place as an excursion, clearly opened by a spoken frame and
closed by its own last two sentences, which already make the best possible
curtain — the box's whole function is evidential (it is the one place the
cascade's key move has a laboratory address), so moving it would strand the
first wound's escape with nothing behind it; the only changes are the formula
spoken aloud and breath breaks, no words cut.

**Spoken text:**

> A short excursion here, and then back to the invoice. The move the cascade has
> just asked you to accept — momentum landing on one book and energy on another
> — sounds like an evasion. It is not. You can watch it happen in a laboratory.
>
> *[beat]*
>
> Two ledgers, separated in the laboratory. The split the cascade asks you to
> believe — momentum landing on one book, energy on another — is not
> speculative; nature runs it routinely, because a receiver's energy cost is set
> by the receiver, not the projectile: for one and the same momentum, the energy
> taken is that momentum squared divided by twice the receiver's mass — and a
> heavy enough receiver takes the momentum nearly free.
>
> Kitchen version: a tennis ball bouncing off a wall gives the wall, and the
> Earth behind it, all of its momentum change — and, as recoil, about one part in
> twenty-five million million million million of its energy.
>
> Laboratory version, and the crown: in the Mössbauer effect, a gamma photon
> strikes an iron nucleus bound in a crystal, and the books split three ways.
> The photon's energy lands in the nucleus's internal step. The momentum lands on
> the whole crystal at once. And the recoil heat lands nowhere, because it is
> smaller than the lattice's first available quantum, and the gap refuses the sip.
> The absorption line stays sharp to about one part in three million million
> because the heat was refused — momentum delivered, energy forbidden, by a gap.
>
> And I owe the reader the boundary's exact location, because half of this is
> closer than analogy. The crystal's refusal is the book's own gap at work: a
> quantized receiver cannot take energy below its first step, and that refusal is
> exactly what the toy needs matter to do with the gravitational intake — refuse
> it, by the thirty-three orders of magnitude the first wound just measured: that
> much energy in, that little warmth out. What the crystal does not need is the
> toy's second half: the crystal refuses a sip and the story ends; the toy refuses
> an ocean, and the energy must still go somewhere — down, through layers no
> laboratory has seen. The refusal is measured physics. The disposal is the debt.
>
> *[beat]*

**Knock-on edits:**

1. Inside the box itself (incorporated above) —
   original: "for the same momentum p, the energy taken is p2/2M, and a heavy
   enough receiver takes the momentum nearly free."
   → replacement: "for one and the same momentum, the energy taken is that
   momentum squared divided by twice the receiver's mass — and a heavy enough
   receiver takes the momentum nearly free."
   (This also clears a live rendering defect: the superscript was lost in the
   text build, so the script currently reads "p2/2M", which is wrong on the page
   as well as unspeakable.)
2. Surrounding prose: **none.** Nothing later in the chapter refers back to this
   box — checked for "ledger", "Mössbauer", "two ledgers" across `13_ch7.txt`;
   the only other hits are the elastic-shadow ledger (first wound) and "this
   ledger has been dodging" (seventh wound), both unrelated.

---

## Two things the author should rule on beyond the five

- **"the reader" throughout.** Chapter 7's licence, the How-to-Read note and the
  wounds narration all address "the reader". Changing it to "the listener" is a
  single global decision with real voice consequences, and it is not mine to
  take — flagged, left alone everywhere above.
- **Chapter cross-references spoken as words.** The drafts above say "Chapter
  Six", not "Chapter 6", per the number-words rule. The surrounding generated
  script still carries digits ("Chapter 6", "Chapter 7") inherited from the ebook
  text; if the digits stay, these drafts should match them instead.
