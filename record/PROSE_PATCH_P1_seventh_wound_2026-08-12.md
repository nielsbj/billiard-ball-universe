# P1 — THE SEVENTH WOUND: THE EQUAL FALL (applied 2026-08-12)

*From chat-claude, ruled by Niels (go; one wound, two rooms). Received inline 2026-08-12; mirrored
verbatim below per the standing rule. Applied at HEAD `bdd7eed` (manuscript byte-identical to
`fa023d8`), first of the P1→P6 sequence.*

## Applier's record (code-claude)

- **Gate correction, ruled before apply** (see `RULINGS_P1P6_preflight_2026-08-12.md` §2): the
  shipped E1 fourth paragraph read "watched to fall alike **to a few parts in ten million**" against
  archibald2018's |Δ| ≤ 2.6×10⁻⁶ — parts in a *million*. Chat-claude's error, caught by the
  pre-verification gate (`PREVERIFY_hostile_read_citations_2026-08-11.md` §5); applied as
  **"to a few parts in a million"** per the ruling. This is the only word changed from the patch as
  shipped.
- **Census residuals R1–R4 folded into this commit** (ruled same day): L1738 "Six→Seven wounds, and
  the table above"; L1365 "the five **the tradition** handed me"; L1486 "the second, sixth, and
  seventh wounds"; L1486 "supplies **two of the three** rows with numbers in them; the seventh
  supplied its own, and was the only wound to arrive with one." (R5 rides with P3 — it speaks P3's
  crossed-mass variable.)
- E3's preview append and E4's Problem Seven landed at the junctions quoted back in the pre-flight
  report (sixth's clause end at L1109; after "finished cleanly." at L1490). E1's inline Scoreboard
  matches the sibling convention (fifth wound's is inline too).
- Bib: touboul2022, archibald2018, will2014 composed in house `url = {https://doi.org/...}` form
  (MANUAL §9(3)), placed after `daviesdavies2010` in the Ch. 7 measurement-anchor block.
  archibald2018 uses the published Nature title (arXiv title differs — the hensen2015 trap).
  All three gate-cleared (touboul/archibald pre-verified 2026-08-11; will2014 verified 2026-08-12).
- **Sweeps:** six attacks/invoices/responses → 0; "six wounds" (lowercase, catches L1813) → 0;
  "Six wounds" = 1 — the L1109 head, deliberately left for P6-B19 per the patch's own contingency;
  "Seventh Wound" = 1; "equal fall" = 6 (≥6 ✓); "Seven wounds" = 2 (L1458 + R1).
- **Build:** both editions 0 errors / 0 Overfull hbox / 0 Overfull vbox / 0 undefined
  (`tab:wounds` took the seventh row without tipping — the census §C3 risk did not fire).
  **Page count: 189 pp both editions** (baseline 184; patch estimated +2–3, actual +5 including
  the three bibliography entries and the table growth).
- **Incident, resolved before commit:** the first print-edition flip used PowerShell
  `Get-Content`/`Set-Content`, which mojibaked every non-ASCII line (Ørsted, α/≈/ρ in comments) and
  let the flip's replace-all corrupt the flip comment itself. Fully reversed by a cp1252 round-trip
  re-encode + one comment restore; `git diff` then showed exactly the 9 intended edited lines + the
  insertions, and both editions were rebuilt from the clean source. No corrupted PDF was kept.
  Standing lesson: edition flips use .NET `ReadAllText`/`WriteAllText` (UTF-8, no BOM) only.

## The patch as received (verbatim)

P1 — THE SEVENTH WOUND: THE EQUAL FALL. From chat-claude, ruled by Niels (go; one wound, two rooms). Applies at HEAD fa023d8, before P2–P6. Verify every OLD once; all new citations are [VERIFY — gate before commit]; mirror to record/ per standing rule.

E1 — insert the wound. OLD (anchor, verbatim, occurs once): Scoreboard: \emph{open --- pinned from three sides, and derived from none.} followed by blank line and \section{The State of the Wounds}. NEW: the anchor line, blank line, then:

\section{Seventh Wound: The Equal Fall}

This wound was not handed down by the tradition either. It was handed to me late, by readers hired to hurt the book --- the Note at the back says how --- and the book's own rules oblige me to record that, because it means the previous section's claim to have collected the strongest objections was, for a while, false. It is the oldest fact in gravity arriving as the newest bill. Drop a feather and a cannonball in vacuum and they fall together; Galileo said it, the Moon landing filmed it, and a satellite named MICROSCOPE has now flown titanium and platinum side by side around the Earth and bounded any difference in their fall at about one part in a thousand million million~\cite{touboul2022}. Everything falls alike, whatever it is made of, to fifteen decimals.

Now watch that fact bite this toy in particular. Gravity, here, is blocking: the push on a body is set by how much of the rain it stops. Stops --- \emph{with what}? If a massion is stopped by particles --- by count of protons and neutrons --- the toy dies on the spot, and it is worth seeing how fast. About one part in a hundred of every nucleus's mass is binding energy: not particles but arrangement, pure energy of assembly, and the fraction differs from element to element at the level of a part in a thousand. Titanium and platinum of equal mass then cast unequal shadows and fall unequally at a part in a thousand --- and the satellite says any inequality sits twelve orders of magnitude below that. So the specification, and it is the third numbered row this chapter has produced: \emph{the shadow must be cast by energy itself --- joule for joule, at exactly the rate energy carries mass --- to fifteen decimals.} Binding energy must block rain precisely as well as the particles it binds.

I will say the hopeful thing first, because for once the toy has one, and it is the only picture of the three that does. Newton has the equal fall as a coincidence: two conceptually distinct masses, gravitational and inertial, that merely happen to agree. Einstein has it as an axiom: the equivalence principle is assumed at the front door. The toy could, in principle, \emph{derive} it --- because in a crowd, the coupling that casts the shadow and the coupling that resists the push may be one coupling. Inertia, in the sketch of Chapter~6, is itself a crowd effect; if weight and inertia are bought from the same crowd at the same counter --- perhaps a layer down, where the momentum is actually traded --- then their ratio cancels by construction and the equal fall is not a miracle but a receipt. Nothing derives this. It is a hope with a computation named, and I price it as a hope. But it is the right \emph{shape} of answer, and neither rival has even the shape.

The measurements that pin it are worth naming precisely, because two of the tests this chapter leaned on earlier turn out to lean back. The masses in the pulsar and silhouette comparisons are themselves weighed gravitationally, so a push that mistracked mass would move all those readings together --- the comparison is softer than I first sold it. The versions that escape the circle are these: the waveforms of inspiralling pairs, where one and the same mass must serve as both the source of gravity and the resistance to it; and a neutron star falling, together with its white-dwarf companion, in the gravity of a third --- a stellar triple in which the strong-field body and the ordinary one have been watched to fall alike to a few parts in ten million~\cite{archibald2018}. [APPLIED AS "to a few parts in a million" — ruled §2.] The equal fall holds even for a body whose mass is a tenth binding energy. The specification above is not a formality; nature enforces it in the hardest case available.

That is the first room of this wound. The second is a bill this ledger has been dodging, and a referee would have named the dodge in a paragraph: \emph{the toy is a Newtonian force law, and gravity has been measured past Newton.} Four times, classically~\cite{will2014}. Mercury's orbit turns forty-three seconds of arc per century more than Newton allows. Light passing the Sun bends by twice the Newtonian value. Radio signals grazing the Sun arrive late --- the Shapiro delay. And orbiting pairs spiral inward exactly as gravitational radiation demands. Every one is a measured difference between Newton and the world; this book banks the pulsars and the inspirals as assets in the sixth wound while never charging the toy for the difference --- which is bookkeeping of a kind the rest of the chapter was written to forbid. So, charged now, in full.

The replies the toy can offer have shapes and no numbers, and each is admitted exactly once, on the discipline that ``a deeper layer does it'' is a solvent unless a computation is named. The bent light and the delay have the most promising shape: light here is the crowd's own song, and a crowd made denser near mass slows its song --- a medium with the right profile reproduces both effects at first order, and the doubling that famously killed the naive corpuscle is, in a medium, a statement about that profile, which nobody has derived from the shadow. The perihelion needs velocity-dependent terms in the force --- and velocity-dependence is precisely the regime where the first wound's market already trades. The inspiral needs radiation reaction in the quadrupole branch the second wound already carries. Three shapes, one discipline, zero calculations. Scoreboard: \emph{open --- four measured differences, zero calculated replies: the largest unpaid bill in the book.}

E2 — table row. In tab:wounds, after the saturated-shadow row, add: the equal fall & weight and inertia bought at one counter --- the ratio cancels by construction (underived) & the shadow must price energy itself, joule for joule, to fifteen decimals & the four classical tests: booked, unpaid \\

E3 — the count sweep, each verified once. Six wounds, six responses, six invoices. → Seven wounds, seven responses, seven invoices. · six attacks, six replies, six invoices → seven attacks, seven replies, seven invoices · Six problems, then, constitute → Seven problems, then, constitute · Any one of the six, solved → Any one of the seven, solved · and of the six it is the one → and of the seven it is the one · Two of the six wounds in Chapter~7 → Two of the seven wounds in Chapter~7 · in the chapter opener's preview list, append after the sixth's clause: ; and a seventh, delivered late by readers hired to wound the book --- the oldest fact in gravity, the equal fall, presented as the newest bill (locate the preview sentence, quote it back if structure resists).

E4 — Problem Seven. In the research-programme paragraph, after the sixth problem's sentence, insert: Seventh: derive the equal fall --- show that the coupling which casts the shadow and the coupling which resists the push are one purchase, so that weight and inertia cancel to the measured fifteen decimals; and compute even one of the four classical differences --- the perihelion, the doubled bending, the delay, the decay --- from the toy's own medium.

E5 — the circularity clause in wound six. OLD A push that tracked outline rather than mass would show up as those numbers refusing to agree with one another. They agree. → NEW A push that tracked outline rather than mass would show up as those numbers refusing to agree with one another. They agree --- though I must add, and the seventh wound collects the point properly, that every mass in that comparison is itself weighed gravitationally, so the agreement is softer than it looks.

Bib [VERIFY all three before commit]: touboul2022 (MICROSCOPE final result, PRL 129, 121102 (2022), η(Ti,Pt) ≈ (−1.5±2.3)×10⁻¹⁵); archibald2018 (Nature 559, 73 (2018), PSR J0337+1715, |Δ| ≲ 2.6×10⁻⁶); will2014 (Will, Living Reviews in Relativity 17, 4 (2014)).

Sweeps: six in Ch. 7's wound-count senses → 0 (the E3 list is exhaustive; report any residual rather than fixing); Seventh Wound = 1; equal fall ≥ 6; both editions 0/0; report page count (expect +2 to +3); mirror to record/; commit: prose: seventh wound --- the equal fall (two rooms; UFF specification + the classical-tests bill; counts swept six→seven).
