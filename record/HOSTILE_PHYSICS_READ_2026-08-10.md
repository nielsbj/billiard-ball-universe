# Hostile-physicist read — consolidated findings (2026-08-10)

**What this is.** With the physicist beta-reader slot unfilled, five independent adversarial
AI readers (Opus-class) were run over the full manuscript at HEAD `8901947`, each briefed as
a hostile physicist whose only job was to find overreach, broken arithmetic, misleading
analogies, and anything a dismissive reviewer would quote — and to recompute every derivation
they could. Chunks: Ch. 1–3 / Ch. 4–5 / Ch. 6 / Ch. 7 first half / Ch. 7 second half + Coda +
appendices, with deliberate overlap at the Ch. 7 seam. Line numbers refer to
`manuscript/billiard_ball_universe.tex` at HEAD `8901947`.

**Verification status.** Findings marked **[CONFIRMED]** were independently spot-verified by
code-claude (recomputed, or the contradicting passages read side by side). Findings marked
**[2×]** were found independently by both Ch. 7 readers (the overlap zone). Everything else
is a single reader's judgment: taken seriously, but a ruling should treat it as a claim to
check, not a fact. Literature citations proposed in Tier 3 (Bancal 2012, MICROSCOPE,
Penrose 1965, Buchdahl, PSR J0337+1715) are real, recognized results, but **exact numbers
and bibliographic details must go through the standing fact-check gate before any patch
cites them.**

**Standing rule.** Nothing here has been edited into the tex. Prose changes go
rulings → patches → code-claude, per the standing pipeline.

---

## Tier 1 — confirmed errors. These are checkable, wrong, and must be fixed before print.

1. **[CONFIRMED] L1431 — Sgr A* mean density is wrong by ~10³.** The book: the hole at our
   galaxy's centre "encloses an average nearer that of a heavy oil." Recomputed:
   ρ̄ = 1.84×10¹⁹·(M☉/M)² kg/m³ → at 4.3×10⁶ M☉, **ρ̄ ≈ 1.0×10⁶ kg/m³ — a tonne per litre,
   ~1000× water, denser than any terrestrial solid.** Heavy-oil density (~0.9×10³ kg/m³)
   belongs to a hole of ~1.4×10⁸ M☉. The two flanking anchors in the same sentence are
   correct (10 M☉ → 1.8×10¹⁷ ≈ nuclear ✓; 10¹⁰ M☉ → 0.18 kg/m³, thinner than room air ✓).
   Both Ch. 7 readers found this independently. **Meta-note:** `process/TODO.md` §3D-sixthwound
   itself says "near that of a heavy oil at Sgr A* (~10⁶ kg/m³)" — the ledger row carried the
   same unit slip, and that section has no RESULT/CLOSED block; it appears never to have been
   formally executed. The error survived the fact-check because the ledger was its source.

2. **[CONFIRMED] L1261 vs L1265 — GW170817 distance contradicts itself two pages apart.**
   L1261: signals arrived together "after a billion years." L1265: "across a hundred and
   thirty million years." L1265 is correct (NGC 4993, ~40 Mpc); L1261 is wrong by ~8× — and
   it is the sentence supporting the 10⁻¹⁵ figure, which only comes out right at 130 Myr.

3. **[CONFIRMED] L904/L906 — the charge-geometry prose is inverted against its own figure.**
   Prose L904: same-sense streams "run parallel where they meet." Caption (L929) and the
   machine-checked sketch source (`figures/programs/bbu_circulation.sketch.js` lines 7–10):
   same sense → facing streams meet **head-on**; opposite sense → streams **run together**.
   The caption and sketch are geometrically right (side-by-side rings, same sense →
   antiparallel velocities in the gap); the body prose has both panels backwards. Five-word
   fix, but it is the chapter's own "this follows from geometry" claim contradicting its
   facing figure.

4. **L943 vs L1133 — Ch. 6 states as a triumph what Ch. 7 proves false.** Ch. 6: two frozen
   bodies in the frozen-sea gas drift together because "the pressure of the gas between them
   is lower." Ch. 7 (L1133) proves — correctly, at length — that for a non-absorbing gas the
   interior fills to exactly ambient density and T cancels; the effect exists only with
   absorption or in the depletion regime (range: one massion). A hostile reader quotes 943
   against 1133 and says the author refuted himself without noticing. (Reader-verified against
   both passages; the Ch. 7 passage is the correct one.)

5. **L671 (and L556) — the pigeonhole inference is invalid as stated.** "If space is infinite
   and matter can only arrange itself in finitely many ways within any region, then every
   arrangement recurs." Infinitely many draws from a finite deck guarantee *some* card recurs
   — not *yours*. Tegmark's actual argument adds statistical homogeneity/ergodicity from
   inflation. One-clause fix at both sites ("provided the arrangements are dealt by a process
   genuinely unbiased across the whole — an assumption, not a theorem"). L671 is the worse
   offender (short, unhedged, quotable).

6. **L615 — "three layers down" is off by ~28 orders of magnitude in layer count.** For a
   copy to fit in your room, the room must contain ~10^(10^29) deeper-layer metres; at any
   plausible per-layer scale ratio that is ~10²⁸ layers, not three. "Far enough down" is
   correct and *more* vertiginous.

7. **L935 — annihilation misdescribed.** e⁺e⁻ at rest → two monoenergetic back-to-back
   511 keV photons, not "contents flying loose: the crowd's raw particles, released." Also
   internally inconsistent with L1026 (photons are medium-song, so annihilation products
   should be song, not shrapnel) — the fix unifies §Charge with §Light and is *stronger* for
   the book.

8. **L1069 — the photoelectric claim skips the actual content of the effect.** All-or-nothing
   absorption gives a threshold; the photoelectric effect's content is E ∝ ν with slope h
   (Millikan's line), which nothing in the sketch produces. "There, in one sentence, is the
   photoelectric effect" must be softened to the "kind of thing" register used correctly at
   L933.

9. **L599 footnote — wrong horizon.** The particle horizon is not "an absolute limit on
   contact" — it grows; regions outside it enter it later. The absolute limit is the event
   horizon, which exists only because of Λ. Five-word fix in a definitional footnote.

10. **L1923 (Appendix B) — "specify the standard picture completely" is flatly wrong.** The
    Standard Model has ~19+ free parameters; the listed constants are not independent
    (α = e²/4πε₀ħc); since 2019, c and h are defined, not measured. Recommend "a couple of
    dozen measured numbers — masses, mixing angles, coupling strengths." This sits in the
    appendix whose purpose is to prove the author knows the standard picture.

11. **L200 (Ch. 1) — "Leibniz, who told Newton to his face --- through letters."** The
    correspondence was with Clarke (1715–16), as Ch. 2 itself correctly reports at L268.
    Ch. 1 contradicts Ch. 2.

12. **L1547 / fig. L1579 / L1909 — Chandrasekhar limit stated three ways** ("one and a half"
    / "≈1.4 M☉" / "above about one and a half"). Pick one; also the dictionary phrasing reads
    as though a *star* above 1.5 M☉ makes a neutron star (progenitors ≳8 M☉).

13. **L1843 (dictionary) — "cannot do so consistently" should be "completely."** Gödel gives
    incompleteness, not inconsistency.

---

## Tier 2 — overreach repaired by a clause. Each is a hedge, a forward pointer, or one honest word; none retreats on the thesis.

**Ch. 1 (the concentrated liability — see reader verdict below):**
- L196–198: the GR passage rebuts the TV-popularization ("bent space") and calls it a
  rebuttal of GR. GR removed action at a distance; the metric is a local dynamical field
  propagating at c — by the book's own "something happens between them" criterion, GR passes
  and Newton fails. The author's real objection — *mediators made of stuff* vs. a field — is
  defensible and is not what is on the page. Ch. 2 (L270) already concedes what Ch. 1 denies.
  **The most-quotable dismissal in the book; a reviewer never reaches the good material.**
- L190: light as "a complete, honest chain" — light is a propagating field excitation, same
  as gravity; the standard granted to vision is the one denied to gravity two pages later.
  Must say what distinguishes them (honestly: nothing except the wish for corpuscles).
- L256: "our textbooks have gone soft" — QFT is the most stringently local framework ever
  built; modern physics abolished unmediated attraction twice. The fight is with 1900.

**Ch. 2–3:**
- L238: "I have never seen it answered" (the spear) — the compact-manifold reply *answers*
  the premise (no edge exists to stand at); reframe as "the modern reply concedes the spear's
  conclusion — no edge — while denying its premise."
- L250: "the concession travels" (outward infinity → downward divisibility) is not an
  inference; it survives only as the minimal-arbitrariness symmetry preference. Say so.
- L250: Bruno "first on record" — Cusa (1440) precedes; "first to press it to its full
  conclusion" gets the same work.
- L236: the Epicurean atom is a brute floor with a non-contact primitive (intrinsic weight)
  and an uncaused swerve — the lineage's founding ancestor holds the thesis Ch. 3 rejects.
  Two sentences of acknowledgment convert an embarrassment into a strength.
- L334: Kai's "no stake, no vanity" — LLM agreement bias is documented; replace neutrality
  claim with "judge the concessions by their reasoning, not their provenance."
- L404–406: Kai stakes a round on "name one thing the tower forbids" and it is never
  answered. Either the settlement records "his test stands, unanswered" or the text points by
  name to where Ch. 6/7 answer it.
- L507/L524: the settlement table scores the regress at zero brute facts, but Kai's Round One
  objection (the ruleset holding across all layers is itself un-derived) was never withdrawn.
  A fourth row or a footnote conceding the ruleset. Same family: L522 counts "it terminates"
  and "it never terminates" as one claim each, which is the equivocation Kai objected to at
  L412. **Self-inflicted violation of the book's own "rigged metrics are named" rule.**

**Ch. 4–5:**
- L613: "scale is invisible from within" holds only under exact per-layer scale covariance —
  an enormous unstated assumption (dimensionless constants ARE readable from inside). Name
  the demand.
- L643–645: the finite-but-unbounded rival is refused on curvature grounds, but a flat
  3-torus is finite, edgeless, and zero-curvature. The book's own principles supply the
  answer (a torus is an arbitrary identification — exactly the stipulation the book refuses);
  make it, or the infinite-space commitment at L647 is unearned.
- L639: "the same today and not the same in a year" — chaotic divergence gives seconds, not
  seasons; the honest version (identical at the moment of choosing, futures come apart fast)
  is all the ethics needs.
- L683/L723: "you choose which copy you are" / "you are writing the rule" — evidential vs.
  causal slide; the defensible form ("you are finding out, and the finding out has the
  weight") is stronger and unattackable.
- L717: "that region is finite" is true only given Λ or influence-decay; one sentence of
  argument (influence-decay is congenial to the book) closes it.
- L767: LIGO detections as "watching" the layer below — exceeds the cap; "if Chapter 7 is
  right, we may already be looking at it."
- L556: confirm the 10^(10^118)-metres distance against the cited source — Tegmark's 2003
  figures pair 10^10^118 *arrangements* with ~10^10^115 m; if both exponents really are 118
  in the cited text, say so in a clause, because it reads as a paste error even if it isn't.

**Ch. 6:**
- L849/L1024/L1065: one crowd cannot be both a collisionless rain (gravity needs
  interplanetary mean free paths) and a shear-stiff lattice (transverse waves need
  lattice-spacing coupling). Wants an explicit two-population statement — a frozen lattice
  threaded by a rarefied flux, as phonons and neutrinos coexist in a star. Costs the "one
  medium" rhetoric only.
- L1024: "universal c is a medium property" — a medium buys dispersionlessness (the easy
  half), not observer-independence (the hard half, which a medium destroys via its rest
  frame). One clause: "…and the observer-independence of c is a bill this hands to Chapter
  7's second wound" — which already pays it honestly.
- L1026 + footnote: phonon lumpiness comes from quantum dynamics, not lattice graininess; a
  classical lattice has continuous amplitudes. "Proof by existence" is the hardening the
  craft notes forbid, 60 lines before the honest disclaimer at L1085. Align with L1085.
- L906/L923: "streams align and cancel" — aligned streams add; counter-rotating neighbours
  attract via faster, lower-pressure gap flow (Bernoulli), not "quiet space." Same slip at
  L855 (bubbles attract because the water between is *faster*, not "calmer").
- L877 footnote: far-field is the *lesser* validity condition; F ∝ mass (not cross-section)
  requires optical thinness — which Ch. 7 (L1415) owns. Forward-point from the first page
  that needs it.
- L851: "undetectable" → "undetectable as a force" (Ch. 7 has the same flux heating Earth by
  10²⁶ K/s).
- L943: "captured" (orbital capture) requires dissipation = drag, the first wound's poison.
  Delete or own it.
- L945: "a proton is perhaps frozen, and decays" — proton decay unobserved (τ > 10³⁴ yr);
  the true, stronger datum is quark–gluon plasma: nuclear matter demonstrably melts at
  ~2×10¹² K, "matter as a phase" with a laboratory address.
- L902–908: nothing forces |F(++)| = |F(+−)| — two distinct mechanisms must produce equal
  forces to the 10⁻²¹ neutrality of bulk matter, and no passage addresses it. **The objection
  a referee leads with; currently unanswered anywhere.** At minimum, book it as an open
  invoice in the wounds table.

**Ch. 7:**
- L1123/L1215: the stated reason Kelvin's escape fails ("isotropic re-emission re-emits the
  momentum") is wrong — isotropic emission carries zero net momentum; the right reason
  (refilling the shadow) is already on the page at L1130. Also: the cascade escape is
  Kelvin's secondary-radiation rescue with Poincaré's regress objection inherited — "the
  regress Poincaré treated as a reductio, this book pays" is the honest and *more* defensible
  claim than novelty.
- L1141/L1353–1359/L1486: the "gap valve" misstates the physics three ways: superfluid ⁴He is
  gapless (Landau criterion is a dispersion condition, not a gap); Landau protection is
  low-velocity, the opposite regime from a 10¹⁸c flux; and macroscopic bodies have no gap
  (Earth's phonon spacing ~10⁻¹⁹ eV). The load-bearing joint of the cascade escape, repeated
  in prose, caption, table, and research programme. Needs restating in whatever form
  survives — this is a physics repair, not a wording one. **[2×]**
- L1263–1265: Tkachenko waves fail the second wound's specification qualitatively (ω ∝ k²
  dispersive, hard rotation axis, no characteristic speed) — downgrade "the whole of the
  specification" to "one branch of one property." And "two songs on one string" inverts the
  ledger: two *branches* of one medium generically have different speeds; the 10⁻¹⁵ equality
  is a coincidence the medium must buy, which GR gets free. "At least as natural" cannot
  stand.
- L1338: "a force that cares only about distance" — electrons have magnetic moments;
  spin-dependent interactions are real and enormous (exchange). And the moment *is* an
  oriented circulation-like observable — the book overstates the wound against itself and
  misses its own mechanism's most natural reply.
- L1405: superdeterminism is dismissed in one clause, but this universe is deterministic all
  the way down by construction — the escape that costs the book nothing is set aside in
  favor of one requiring a preferred frame + superluminal channels + no-signalling by decree.
  Keep the choice if wanted, but argue it.
- L1407: Bell "recommended this book's remedy" — he named the Lorentzian view "cheapest,"
  from the Davies & Brown 1986 interview (not bell1987; consider a davies1986 entry), and
  called it uncomfortable. Downgrade the verb; also at L1109.
- L1427/L1435: the pulsar and EHT mass-consistency tests are circular — every mass in them is
  measured gravitationally, so silhouette-scaling would move all readings together. The one
  valid clause is inspiral waveforms (gravity vs. *inertia*); the decisive citation is the
  strong-equivalence-principle test in PSR J0337+1715 (Δ ≲ 2.6×10⁻⁶) — currently absent.
  **[2×]**
- L1346: "checked against theory to one part in a million million" — the theory–experiment
  comparison for g−2 is limited to ~10⁻¹⁰ by α (whose two best determinations disagree);
  the 10⁻¹³ is the measurement alone. Overstates the wound — honest but checkably wrong.
- L1449 vs L1454 vs L1731: "pinned from three sides" — demands one and three push the same
  way (L1731 says so about demand four); it is a two-sided pincer. Reconcile the count.
- L1447: the neutrino analogy — the neutrino's cross-section is *derived* (W/Z masses), the
  massion's is free; and a neutrino-like cross-section delivers a neutrino-like force, so
  the small number and the required flux are the same old pincer. Soften to "smallness alone
  is not a fudge."
- L1496: Gibbs "an open sore for a century and a half" — most physicists regard it settled
  (N!, quantum indistinguishability); Jaynes's point is interpretive. Also the paradox is
  intra-layer; "once per layer" does not engage it.
- L1532: "the heat death is not the tower's fate" — an inexhaustible basement is an infinite
  sink; non-equilibrium forever ≠ free energy forever. The paragraph's own concessions are
  right; the headline sentence oversells them.
- L1613–1619: the area-law argument hand-waves the shape and silently helps itself to the
  coefficient (blindness supplies no Planck-unit scale); the Bekenstein-bound side (horizon
  entropy as a *maximum*, tied to the generalized second law) is the strong form of the
  objection and is understated. Also: "predicts which is larger" — and never says which.
- L1723: "a pattern that a length cannot make" — a length plus a speed makes an acceleration;
  a₀ ≈ cH₀/6 is the standard MOND observation. The RAR argument's conclusion stands via
  arguments one and three; drop or repair the "length cannot make" inference.
- L1642–1644: ideal 2D vortex dynamics — like-sign pairs co-rotate, opposite-sign pairs
  translate at fixed separation; attraction/annihilation is the *dissipative* regime (which
  the cited BEC experiments are in). One clause.
- L1638/L1680: the 5/3 derivation gives the strut; the ladder (Chandrasekhar buckling) comes
  from the relativistic 4/3 softening, which the vortex picture is not shown to produce. Say
  the derivation earns the strut, not the buckling.
- L1694/L1696: h is an action, a spacing is a length (κ = h/m concedes the gap); and the
  sharper price of a grainy vacuum is *dispersion*, which the book's own dictionary (L1847)
  calls "a hard constraint on any grainy medium." The dictionary holds the standard the
  section doesn't pay.
- L1921 (Appendix B): the relativity paragraph states the Lorentzian gloss ("the exact
  conspiracy") as *what mainstream physics holds* — the appendix smuggles the book's thesis
  into its neutral ground. The dictionary (L1871) handles it correctly; match it.
- L1109: the opening summary pre-announces each wound's most favorable verdict in a chapter
  sold as "the reader keeps score." Small tell; consider muting.
- L1403: add one clause acknowledging the Everettian escape (Bell's "channel" conclusion
  assumes single definite outcomes) — the toy can't use it, but the unconditional phrasing
  invites correction.

---

## Tier 3 — structural decisions. Author rulings required; these change content, not wording.

1. **The equivalence principle is nowhere in the manuscript.** Universality of free fall
   (MICROSCOPE: η < ~10⁻¹⁵, Ti vs. Pt) demands the shadow push track *total mass-energy* —
   including the ~1% binding-energy variation across the periodic table — to fifteen
   decimals. This is the sharpest modern wound against any Le Sage mechanism, harder than
   the sixth wound, and a hostile review opens with it. The chapter's own standard ("the
   strongest objections I know") requires it be added as a wound. **[2×, via the circularity
   finding]** Bonus: it converts the currently-circular L1427/L1435 support into the valid
   test (inspiral one-mass waveforms; PSR J0337+1715).

2. **GR's classical tests are never booked as debts.** Mercury's perihelion, light deflection
   at twice the Newtonian value, Shapiro delay, binary-pulsar orbital decay — the toy is a
   Newtonian force law and the ledger never charges it for the difference, while booking
   pulsars and inspirals as assets. The clearest structural rigging a referee will name.

3. **Penrose/Buchdahl are absent from the collapse section.** L1549 argues against "no known
   third strut," but the theorems say no strut *at any stiffness* is available inside GR
   (trapped surface → incompleteness given energy conditions; Buchdahl forbids R < 9/8 rₛ).
   The book survives honestly — the toy replaces GR at that depth — but must name the theorem
   and pay for it, and L1591's "the standard picture offers a completed infinity" reverts to
   the caricature L1549 had just disowned (mainstream expectation — new structure below the
   neutron rung via quantum gravity — is structurally the book's own move).

4. **Hawking radiation is absent from the black-hole section.** "Demoted, kept" is,
   unnamed, the remnant scenario, with known standing objections; and the information
   paradox is about evaporation, which demotion does not answer. Needs at least a named
   acknowledgment.

5. **Bancal et al. 2012 closes the fifth wound's purchased escape as bought.** Finite-speed
   hidden influence in a preferred frame + quantum correlations → superluminal signalling
   (Nature Physics 8, 867). "No-signalling by decree" is not underived — it is provably
   unobtainable for a *finite* speed. The tower's honest reply is that an infinite tower of
   ever-faster layers supplies unbounded speed as a limit — exactly what Bohm needs and what
   one sub-layer cannot give. That reframing turns a refutation into the wound's best
   passage; Problem Five (L1490) must be restated accordingly. **[2×]**
6. **The sixth wound is framed in volume density where transparency is column density**
   (τ = (σ/m)·∫ρ dl). The Earth case is stated correctly; the neutron-star and black-hole
   cases are not, and in the right variable Σ ~ M/R² the argument partly *reverses*
   (big holes are less optically deep; "far inside, on a strut" raises Σ). The wound
   survives — likely sharpened — but must be re-derived in the right variable.
7. **CMB acoustic peaks are absent from the dark-matter section** — the strongest evidence
   for non-baryonic dark matter and the hardest constraint on the book's "engages massions,
   not our light" speculation. The section currently reads as 1980s evidence.
8. **The recurrence of the escapes is scored as economy, not degeneracy.** The table caption
   (L1482) already names the two recurring coins; the chapter reads recurrence as
   corroboration ("they assemble, unasked"). One unobservable device deployed four times is
   not four survivals. Apply L1488's own discipline ("the toy earns nothing") to the
   recurrence itself.
9. **Kochen–Specker is never named.** Non-contextuality is ruled out independently of
   locality and applies squarely to "definite properties laid down in the layers beneath."
   An undersold wound; at minimum a named acknowledgment.
10. **Ch. 1's GR passage** (Tier 2 above, but the decision is structural): the chapter must
    either attack the popularization *as* the popularization, or state the real objection
    (fields are not made of stuff). As written, a hostile reviewer is finished before Ch. 2.

---

## Do not touch — passages every reader independently marked as the book's best defense

- L278 — the Le Sage autopsy ("I have inherited the theory and its autopsy together").
- L495–503, L531, L539 — the two fouls, the concessions, the capped ending of Ch. 3.
- L599–601 — the copies disclaimers; L633–641 — the Honest Wrinkle and its concession.
- L703–719 — the infinite-ethics section (Bostrom, Vallentyne–Kagan, the retired ratio).
- L804, L842, L933, L1005/L1022, L1085 — Ch. 6's disclaimers and self-demolitions.
- L1128–1137 — the elastic-escape burial and gross-vs-net pincer statement ("The force is a
  residue; the heat is the whole meal") — keep verbatim.
- L1181, L1403, L1409, L1445, L1449 (the three-sided pinning *as a form of argument*), L1488
  ("not a hair of probability"), L1490 (the six problems; "it can lose").
- L1431's self-correction sentence, L1441's filed-under-uncertainty, L1549, L1553–1555,
  L1599, L1619–1621, L1640, L1698–1708, L1715–1727 (minus argument two), L1746, L1805–1821
  (the Note on How This Book Was Made).

---

## Arithmetic recomputed and CONFIRMED CORRECT by the readers (no action; recorded so the
fact-check record shows what was re-verified 2026-08-10)

10 M☉ and 10¹⁰ M☉ horizon densities · 75× and 1000× cube roots · 171c at the classical
electron radius (uniform sphere; a ring gives 68c) and ~5×10⁷c at 10⁻²⁰ m · κ = h/m(He-4) =
9.97×10⁻⁸ m²/s · p = ħ/d, u ∝ n^(5/3), factor 5.74 · L = pd = ħ · E = ħω/2 (m and r cancel)
· the one-part-in-10³³ leak bound and its monotonicity · Ω(2d)/Ω(d) → 1/4 in the far-field
limit · 10⁻⁸ → 10⁻¹⁷ = a billionfold · 24×10¹⁷c reconciles with "a million million million"
· Chandrasekhar at 19 on the 1930 voyage · Earth ~13,000 km.

---

## Reader verdicts, one line each

- **Ch. 1–3:** "The damage is concentrated in perhaps five paragraphs, not in the argument…
  Chapter 1 is the liability; because it is Chapter 1, a hostile reviewer never reaches the
  good material."
- **Ch. 4–5:** "The ethical spine would survive… the cosmology would not, and the errors are
  in the connective tissue, each repairable in a sentence without softening a single claim."
- **Ch. 6:** "I would not be able to dismiss this chapter on its framing… What I would do is
  quote the six blockers, and four of them are self-inflicted rather than deep."
- **Ch. 7a:** "The honesty is unevenly distributed, and it thins out at exactly the
  load-bearing joints… Fix the valve, claim the regress as an inherited price, add the two
  missing wounds, and the chapter becomes very hard to dismiss."
- **Ch. 7b:** "A chapter whose method I would defend in print and whose execution has four
  places I would attack in a review… the author has already done the hard part, which is
  being willing to lose."
