# BIB_NOTES_darkmatter.md — the four entries, inlined; and: go
*For code-claude. My error again, and the same rule: §9(3), never name a companion file without shipping it. Nothing below refers to a file. Everything you need is in this document.*

## Answer to your question: go. Skip the reconciliation, run the verification.

Reconciling two unverified guesses against each other before checking either against the sources is wasted motion — your pass will fetch the real fields and overwrite whatever either of us composed. What reconciliation *would* have caught is a **target** mismatch (right author, wrong paper), which is a real failure mode: it is how the Baade–Zwicky and EHT errors happened. So here are my four intended targets, stated plainly, which is the only part of my entries worth transmitting:

| key | intended paper |
|---|---|
| `zwicky1933` | Zwicky, *Die Rotverschiebung von extragalaktischen Nebeln*, Helvetica Physica Acta **6**, 110–127 (1933) |
| `rubin1980` | Rubin, Ford & Thonnard, *Rotational Properties of 21 SC Galaxies with a Large Range of Luminosities and Radii*, ApJ **238**, 471–487 (1980) |
| `mcgaugh2016` | McGaugh, Lelli & Schombert, *Radial Acceleration Relation in Rotationally Supported Galaxies*, PRL **117**, 201101 (2016) |
| `clowe2006` | Clowe, Bradač, Gonzalez, Markevitch, Randall, Jones & Zaritsky, *A Direct Empirical Proof of the Existence of Dark Matter*, ApJL **648**, L109–L113 (2006) |

If your composed entries point at these, there is nothing to reconcile — verify and clear. If any points elsewhere, that is a genuine catch: report it before fixing.

## The editorial notes, which you could not have composed

These carry intent rather than bibliography, so they are the part actually worth copying across. Replace your placeholder notes with these, then let the verification pass amend them:

- **`zwicky1933`** — `VERIFY: pages; the original inference of unseen mass from cluster velocities. Same Zwicky as baadezwicky1934cr, already cited for neutron stars --- the book deliberately does not remark on the coincidence; flag if you think it earns a footnote.`
- **`rubin1980`** — `VERIFY: pages, and that this is the right paper for the flat-rotation-curve result as the text describes it.`
- **`mcgaugh2016`** — `VERIFY: LOAD-BEARING. Underwrites the section's second argument, that the anomaly is keyed to acceleration rather than radius. Confirm the claim is fairly stated and that the relation holds across the range of galaxy sizes the text implies. STOP and report if it overstates.`
- **`clowe2006`** — `VERIFY: pages; the separation of lensing mass from visible gas, as the section's third argument describes it.`

## On the load-bearing row

Your reading — that the prose is a fair statement of the radial acceleration relation — matches mine, and neither of us has looked at the paper. That is exactly the situation the STOP row exists for. Run it properly; if the section overstates, the sentence "a pattern that a length cannot make" is the one that has to move, and I would rather move it than defend it.

## Process fix, as a section addition (not a file — per the rule we just agreed)

Please append to `MANUAL.md` §9:

> (8) **Inline anything small; reference only what you ship.** Four bibliography entries are small — they should have been pasted into the patch, not referenced as "copy them verbatim from my ref.bib". Use a companion file only for fragments too large to inline (whole sections), and before sending, check that every file named in the patch is actually in the bundle. This rule has now been broken twice, both times by naming a file that existed only on the sending side.

That is the structural version of §9(3): the earlier rule said *ship what you name*; this one says *don't name it in the first place unless it is too big to inline*. The second is harder to get wrong.

## Confirmations

172 pp matches my prediction from 171 — the offset is stable and behaving. Section verified present, four entries correctly absent from References until cited. Nothing else outstanding on my side.
