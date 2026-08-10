# PROSE_PATCH — hostile-read Tier 1 corrections (2026-08-10)

**Origin.** Not a chat-claude patch: these corrections come from the 2026-08-10 hostile-physicist
read (five adversarial AI readers; consolidated findings in `HOSTILE_PHYSICS_READ_2026-08-10.md`,
full reports verbatim in `HOSTILE_READ_REPORTS_2026-08-10.md`). The author instructed code-claude
directly to "fix the obvious errors"; this file is the apply-time mirror the patch workflow
requires. Scope: **Tier 1 only** — checkable errors. Tier 2 (overreach clauses) and Tier 3
(structural decisions) were deliberately NOT applied and await discussion/rulings.

**Base:** HEAD `8901947`. Applied via exact-string replacement, all anchors unique.
**Gate:** working build (draft apparatus on, digital) after apply: 0 errors / 0 Overfull / 184 pp.

---

## E1 — Ch. 1: Leibniz corresponded with Clarke, not Newton (Tier 1 #11)
OLD: `I had picked the same side as Leibniz, who told Newton to his face --- through letters --- that space is not a thing but an order of relations among things.`
NEW: `I had picked the same side as Leibniz, who told Newton --- through letters, with Newton's defender Samuel Clarke holding the pen on the other side --- that space is not a thing but an order of relations among things.`

## E2 — Ch. 4: pigeonhole inference gains its missing ergodicity premise (Tier 1 #5)
OLD: `And a finite deck drawn infinitely many times repeats --- must repeat, each card infinitely often. Somewhere out there is a region arranged exactly as ours is:`
NEW: `And a finite deck drawn infinitely many times repeats --- must repeat, each card infinitely often --- provided the dealing is fair: no arrangement forbidden anywhere, the whole deck genuinely in play from region to region. That fairness is what the standard account of the early universe supplies, and it is an assumption of this argument, not a theorem. Granted it, somewhere out there is a region arranged exactly as ours is:`

## E3 — Ch. 4: horizon footnote defined the wrong horizon (Tier 1 #9)
OLD: `\footnote{The horizon: the distance beyond which light has not had time to reach us since the beginning --- an absolute limit on contact, not a limit on existence.}`
NEW: `\footnote{The horizon: the distance beyond which light has not had time to reach us since the beginning --- and, with the expansion of space now accelerating, the most distant regions never will: a limit on contact, not a limit on existence.}`

## E4 — Ch. 4: "three layers down" was off by ~28 orders of magnitude in layer count (Tier 1 #6)
OLD: `If your pattern recurs three layers down, that occurrence is not in some remote place.`
NEW: `If your pattern recurs far enough down, that occurrence is not in some remote place.`

## E5 — Ch. 5: the reprise stated the pigeonhole fallacy unhedged (Tier 1 #5)
OLD: `If space is infinite and matter can only arrange itself in finitely many ways within any region, then every arrangement recurs.`
NEW: `If space is infinite, matter can only arrange itself in finitely many ways within any region, and the arrangements are dealt out evenhandedly across the whole --- as the standard account of the early universe holds --- then every arrangement recurs.`

## E6 — Ch. 6: same-sense charge prose inverted against its own figure (Tier 1 #3)
OLD: `Two assemblies circulating the \emph{same} way, meeting, superpose --- their streams run parallel where they meet, pile up, and press the assemblies apart.`
NEW: `Two assemblies circulating the \emph{same} way, meeting, clash --- their streams meet head-on where the assemblies face each other, pile up, and press the assemblies apart.`

## E7 — Ch. 6: opposite-sense charge prose inverted against its own figure (Tier 1 #3)
OLD: `Two assemblies circulating \emph{opposite} ways interlock --- their streams at the meeting face run counter to each other, cancel, quiet the space between them.`
NEW: `Two assemblies circulating \emph{opposite} ways interlock --- their streams at the meeting face run together, cancel, quiet the space between them.`
(Prose now matches the caption and the machine-checked `bbu_circulation.sketch.js`. The separate
"aligned yet cancel" fluid-mechanics wording question is Tier 2 and remains open.)

## E8 — Ch. 6: annihilation misdescribed; now consistent with the sketch's own light ontology (Tier 1 #7)
OLD: `What remains is no longer two charged assemblies but their contents, flying loose: the crowd's raw particles, released. A positive and a negative object, meeting exactly, cease to be objects --- which is, in one line, what matter and antimatter have been observed to do since 1932.`
NEW: `What remains is no longer two charged assemblies but the energy of their unwound circulations, dumped into the crowd at a stroke --- and a disturbance dumped into a crowd departs as the crowd's own waves, a claim this chapter will make in earnest a few pages from now. A positive and a negative object, meeting exactly, cease to be objects and leave as radiation --- two equal flashes of light, back to back --- which is what matter and antimatter have been observed to do since 1932.`

## E9 — Ch. 6: frozen-drift consequence reconciled with Ch. 7's elastic-blocking refutation (Tier 1 #4)
OLD: `Between them, each blocks and calms part of the other's agitation; the pressure of the gas between them is lower than the pressure outside; the outside wins.`
NEW: `Between them, each \emph{absorbs} part of the other's agitation --- soaks it into its interlocked circulations, the same capacity that sets its melting point below --- and what is soaked up is not returned: the gas between them runs quieter than the gas outside; the outside wins. (Absorption is doing the work in that sentence. Chapter~7 will show that elastic blocking --- catching and returning --- buys no push at all; the drift is real only because a frozen thing \emph{keeps} part of what it catches.)`
(The "captured" orbital-capture clause later in the paragraph is Tier 2 and remains open;
with absorption now explicit it is at least internally consistent.)

## E10 — Ch. 6: photoelectric claim was missing the effect's actual content (Tier 1 #8)
OLD: `because the gap forbids partial purchase --- and there, in one sentence, is the photoelectric effect that began the quantum century~\cite{einstein1905photo}.`
NEW: `because the gap forbids partial purchase --- and there, in one sentence, is the all-or-nothing half of the photoelectric effect that began the quantum century~\cite{einstein1905photo}. Half, I said: the effect's other half is that the lump's energy climbs in exact step with the light's frequency, and that measured slope the sketch does not deliver. It is owed, not paid.`

## E11 — Ch. 7: GW170817 distance was internally contradictory (Tier 1 #2)
OLD: `a wave and a light-flash from the same catastrophe arrived within seconds of each other after a billion years --- the speeds match to a part in a thousand million million`
NEW: `a wave and a light-flash from the same catastrophe arrived within seconds of each other after a hundred and thirty million years --- the speeds match to a part in a thousand million million`
(Now matches "a hundred and thirty million years" two paragraphs later. The *second* "after a
billion years" in the same passage — the unsmeared-dispersion sentence citing `ligo2017graviton`
= GW170104 at ~3 Gly — is a different event and is left as is.)

## E12 — Ch. 7: Sgr A* mean density was wrong by ~10³ (Tier 1 #1)
OLD: `the hole at this galaxy's centre encloses an average nearer that of a heavy oil, and a hole of ten thousand million suns encloses an average thinner than the air in this room.`
NEW: `the hole at this galaxy's centre encloses an average of about a tonne per litre --- a thousand times water --- and a hole of ten thousand million suns encloses an average thinner than the air in this room.`
(ρ̄ = 1.84×10¹⁹·(M☉/M)² kg/m³ → 1.0×10⁶ kg/m³ at 4.3×10⁶ M☉. NOTE: `process/TODO.md`
§3D-sixthwound row 1 carried the same "heavy oil (~10⁶ kg/m³)" slip and has no CLOSED marker —
that ledger row should be corrected/closed when the ledger is next touched.)

## E13 — Dictionary: degeneracy entry now matches Ch. 7's "plus the strong force" (NIT, applied as consistency fix)
OLD: `It holds up white dwarfs (electrons) and neutron stars (neutrons), and in this book it is the gap doing structural work.`
NEW: `It holds up white dwarfs (electrons) and, with the shove of the strong force, neutron stars (neutrons), and in this book it is the gap doing structural work.`

## E14 — Dictionary: diagonal theorems — Gödel gives incompleteness, not inconsistency (Tier 1 #13)
OLD: `any system rich enough to contain its own complete description cannot do so consistently. Total self-account explodes.`
NEW: `any system rich enough to contain its own complete description cannot do so completely and consistently at once. Total self-account explodes.`

## E15 — Dictionary: neutron-star entry read as a progenitor-mass threshold (Tier 1 #12)
OLD: `the second, above about one and a half solar masses, by neutron degeneracy (the mass of the sun in the space of a city).`
NEW: `the second, when the collapsing core exceeds about one and a half solar masses, by neutron degeneracy plus the shove of the strong force (the mass of the sun in the space of a city).`

## E16 — Appendix B: five constants do not "specify the standard picture completely" (Tier 1 #10)
OLD: `A handful of measured numbers --- the speed of light, Planck's constant, the electron's mass and charge, the fine-structure constant near 1/137 --- specify the standard picture completely, and no accepted theory derives their values.`
NEW: `A couple of dozen numbers put in by hand --- particle masses and coupling strengths, the fine-structure constant near 1/137 the most famous among them --- pin down the standard picture, and no accepted theory derives their values.`

---

**Not applied from Tier 1:** #12's prose/figure "one and a half" vs "≈1.4 M☉" variance was ruled
fair by the 2026-07-26 fact-check and left alone; only the dictionary's misreadable phrasing was
touched. Ch. 1's GR passage (report Tier 2/3 #10) is a structural decision and was not touched.

**Staleness sweep after apply:** `heavy oil` → 0 · `after a billion years` → 1 (the GW170104
dispersion sentence, correct) · `three layers down` → 0 · `told Newton to his face` → 0 ·
`specify the standard picture completely` → 0.
