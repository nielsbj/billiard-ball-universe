# PROSE_PATCH_state_of_wounds_specification.md
*From chat-claude, 2026-07-29. Fresh document, no predecessor --- nothing supersedes, nothing to cross-check against older patch files.*
*Placement ruled by Niels (chat, 2026-07-29): The State of the Wounds, as the collection point for everything the chapter has learned about the layer below.*

## What this does

Adds two paragraphs to `billiard_ball_universe.tex` between the wounds table and the "Six problems" research-program paragraph: the table read backward as a conditional specification of the layer below, including the first two quantitative rows (Poincare's speed floor; the 10^-33 leak bound), followed by the honesty clauses (no probability gained; specification-or-epitaph). Adds one bibliography entry anchoring the terrestrial heat-flow figure. One commit, both files together.

## PATCH 1 --- billiard_ball_universe.tex

Before applying, confirm the OLD string occurs exactly once (it did, at my copy's state of 2026-07-29). Replace OLD with NEW.

**OLD:**

```
\label{tab:wounds}
\end{table}

Six problems, then, constitute the toy's open research program
```

**NEW:**

```
\label{tab:wounds}
\end{table}

The state of the wounds can be read twice. Read forward, it is a defence: six attacks, six replies, six invoices. Read backward, the same rows are a description of the layer below, assembled from measurements made at this one --- the reading the second and sixth wounds each found for themselves, and which I did not see whole until the chapter was finished. Every survival above was bought by conceding what the basement must be like, and the concessions, collected, are no longer nothing: a crowd transversely stiff yet swimmable, carrying exactly two branches --- light's dipole pair, gravity's quadrupole pair --- at one speed, with no sound-like mode at all, its rest frame never showing; matter gapped and exact, sealing each layer's books; the whole of it nearly transparent to the flux, through nuclear densities and across the visible reach of gravity; and channels one floor down that outrun our light, in the frame already hidden. All of it conditional --- the specification of a thing not shown to exist --- and almost all of it qualitative. It is the first wound, which until this page has only taken, that supplies the two rows with numbers in them. To spare the orbits, the flux must move at no less than $24\times10^{17}$ times the speed of light --- so the assumption the wounds table prices as doing duty in two rescues, \emph{lower layers are faster}, has its first rung measured, and by the toy's executioner. And the heat figure prices the valve. The demanded intake is some $10^{20}$ times the sun's whole output, while the Earth's entire outflow of internal warmth --- about fifty million million watts, and geology has already spoken for it~\cite{daviesdavies2010} --- is a vanishing fraction of that. Whatever the first wound's escape does with the energy, then, it leaks into our thermometers less than roughly one part in $10^{33}$ of it --- a bound that only tightens, since the speed is a floor and the heat rides with the speed. The fourth wound's gap stops being a hope with a job and becomes a component with a specification: thirty-three orders of refusal.

I take back at once half of what that seems to give. A specification is what a hypothesis must satisfy, not evidence that it does; the toy earns nothing --- not a hair of probability --- from the precision of the figures that nearly killed it, and this reading sits downstream of the refutations, never in their place. Poincar\'e's numbers are still not figures a model recovers from; they are figures a survivor would have had to live by. And the fork here already has a name in this chapter: \emph{specification or epitaph}. The last specification of this extremity that physics wrote was the ether's --- the solid you could walk through --- and it was an epitaph. The second wound stood at that fork and recorded which way I moved; its comfort was a laboratory address. These two rows have no address --- nothing in any glassware moves at a million million million times the speed of light --- and what they have instead is the agreement the fifth wound already banked: the same direction demanded twice, for unrelated reasons --- sparing the orbits, carrying the correlations --- and then spent again wherever the tower needed speed. Agreement is thinner than glassware. I price it accordingly, and I keep it, for what it hands the program below: the first problem's arithmetic now has its starting numbers --- supplied by the prosecution.

Six problems, then, constitute the toy's open research program
```

## PATCH 2 --- ref.bib

Add the entry below among the Chapter 7 measurement anchors (the section holding `hofmann2018` / `armano2018`; exact placement per the bib's part organization). Details verified by chat-claude on 2026-07-29 against the journal page (se.copernicus.org/articles/1/5/2010) and the DOI record: Solid Earth vol. 1, pp. 5--24, 2010; the paper's preferred estimate is 47 +/- 2 TW. Add a `url` field only if that matches house convention for the neighbouring entries. No VERIFY flag needed, but an independent confirmation is welcome --- report CORRECTED-IN-BIB if anything differs.

```
@article{daviesdavies2010,
  author  = {Davies, J. Huw and Davies, D. Rhodri},
  title   = {Earth's surface heat flux},
  journal = {Solid Earth},
  volume  = {1},
  number  = {1},
  pages   = {5--24},
  year    = {2010},
  doi     = {10.5194/se-1-5-2010}
}
```

## VERIFICATION (the gate --- run this before committing)

The new prose contains one derived number, "less than roughly one part in $10^{33}$". Re-derive it from these inputs; if your result disagrees, stop and report rather than applying.

- Intake: the book's own pincer figure, "some $10^{20}$ times everything the sun emits." With the nominal solar luminosity L_sun = 3.828e26 W: intake = 1e20 x 3.828e26 = 3.828e46 W.
- Ceiling on any leak into our layer's heat: Earth's total surface heat outflow, 47e12 W (daviesdavies2010; 47 +/- 2 TW). At steady state, power leaked in cannot exceed power flowing out, so this is conservative even before noting that geology already accounts for the 47 TW.
- Leak fraction <= 4.7e13 / 3.828e46 = 1.23e-33 -> "less than roughly one part in $10^{33}$". (Equivalent shortfall factor: 8.1e32.)
- Monotonicity claim in the prose ("a bound that only tightens"): energy per unit momentum in the flux is v/2 --- the exchange-rate sentence already in the pincer section --- so at fixed gravitational force the intake scales with v; the drag bound is a floor on v; hence the true leak bound is at or below 1.2e-33.
- Word-forms, per MANUAL section 10, built explicitly: "fifty million million watts" = 50 x 10^12 = 5.0e13 W ~ 47 TW (rounded, flagged by "about"). "a million million million" = 10^18, versus the floor 2.4e18 --- an understatement, deliberately safe.
- **Do NOT cross-reconcile Poincare's two quoted figures** ($10^{26}$ degrees per second and $10^{20}$ suns) against a modern heat capacity of the Earth. Both are Poincare's 1908 figures, fact-checked as quotations, and the derivation above deliberately uses only the intake figure. A mismatch between the two under modern constants is not a DISCREPANCY for this patch.

## STALENESS SWEEP (after applying, before committing)

- `findstr /C:"recovers from" billiard_ball_universe.tex` --- expect exactly 2 hits: the pincer's original sentence, unchanged, and the deliberate callback in the new paragraph.
- `findstr /C:"specification or" billiard_ball_universe.tex` --- expect 2 hits: the second wound's original fork sentence, unchanged, and the new paragraph's named fork.
- `findstr /C:"10^{33}" billiard_ball_universe.tex` --- expect exactly 1 hit (the new paragraph). No other passage states a leak bound; if one appears, stop and report.
- Confirm the scoreboard line "one escape, uncalculated" is untouched --- the new text says *specified*, never *calculated*, and must not be read as revising that verdict.

## BUILD AND REPORT

1. `build.bat`; then the print edition once (`\digitaleditiontrue` -> `false`, build, revert). Required for both: zero errors, zero `Overfull` (hbox and vbox).
2. Report the new page count. (Chat-side estimate: about a page and a half added. The snippet was compiled in isolation at the book's 11.43 cm measure: zero errors, zero overfull.)
3. Spine: nothing to do now --- it is computed from the final interior last, per standing rule, and the two-build-trees blocker still gates the print interior regardless.

## LEDGER

Merge into `TODO.md` per FILE_OWNERSHIP a row equivalent to (mark CLOSED as completed):

> SW-spec | [CC] | gate the State-of-the-Wounds addition: re-derive the leak bound from this patch's VERIFICATION block; independently confirm daviesdavies2010; both editions build zero/zero; report new page count.

## COMMIT

One commit, both files: `prose: State of the Wounds --- read the table backward (specification paragraphs + daviesdavies2010)`

## NOTES FOR NIELS

- Your paper copy predates this; the section needs a re-read on screen or in the next printing.
- The index pass (yours, TODO section 5) may want entries here --- e.g. *specification*; your call, not part of this patch.
- If any line lands wrong on paper --- "supplied by the prosecution" is the one I am least sure of --- say so and I will cut a fresh patch rather than revise this one.
