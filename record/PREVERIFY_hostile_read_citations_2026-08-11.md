# Pre-verification — hostile-read citation candidates (2026-08-11)

**What this is.** The 2026-08-10 hostile read proposed literature that chat-claude's forthcoming
patches (P1–P6, per the rulings exchange of 2026-08-11) will cite, all shipped VERIFY-flagged for
code-claude's standing fact-check gate. Rather than run the gate after each patch lands, code-claude
pre-verified all seven candidates against primary sources **before** any patch exists, so the gate
clears at apply time. Nothing here touches the manuscript or `ref.bib` — entries are composed by
chat-claude in the patches per MANUAL §9(3); this file is what the applier will check them against.

**Verdicts use the standing vocabulary** (TODO-CODE-CLAUDE.md): CONFIRMED means the detail was
matched against the named source this session.

---

## 1. MICROSCOPE final results — CONFIRMED

- Touboul, P., et al. (MICROSCOPE collaboration), *MICROSCOPE Mission: Final Results of the Test of
  the Equivalence Principle*, **Phys. Rev. Lett. 129, 121102 (2022)**. arXiv:2209.15487.
- **The number:** η(Ti, Pt) = [−1.5 ± 2.3 (stat) ± 1.5 (syst)] × 10⁻¹⁵ (1σ). No violation.
- Gate note for P1: "bounds composition-dependence near 10⁻¹⁵" is exactly right; "one part in a
  thousand million million" is the correct word-form. The wound's 10⁻³ counterfactual (shadow ∝
  particle count) checks: binding fraction of mass is ~0.94% (Ti, B/A ≈ 8.7 MeV) vs ~0.85%
  (Pt, B/A ≈ 7.9 MeV) → differential ~9 × 10⁻⁴ ≈ 10⁻³. "Twelve orders of magnitude" stands.

## 2. Bancal et al. 2012 — CONFIRMED

- Bancal, J.-D., Pironio, S., Acín, A., Liang, Y.-C., Scarani, V., Gisin, N., *Quantum non-locality
  based on finite-speed causal influences leads to superluminal signalling*,
  **Nature Physics 8, 867–870 (2012)**. arXiv:1110.3795.
  (arXiv title uses "nonlocality"/"signaling"; published Nature Physics title uses the hyphenated/
  British forms — bib should use the published title.)
- **The claim:** any hidden-influence model with finite propagation speed v > c reproducing quantum
  correlations permits superluminal signalling. Confirmed against the abstract. This is exactly the
  theorem the fifth-wound restatement leans on; the "only unbounded speed survives" reframing is a
  correct reading of its contrapositive.

## 3. Penrose 1965 — CONFIRMED

- Penrose, R., *Gravitational Collapse and Space-Time Singularities*,
  **Phys. Rev. Lett. 14, 57–59 (1965)**. DOI `10.1103/PhysRevLett.14.57`. Published 18 Jan 1965.
- **The claim:** trapped surface → geodesic incompleteness given energy conditions ("no strut at any
  stiffness inside GR"). Correct primary for the collapse-section acknowledgment.

## 4. Buchdahl 1959 — CONFIRMED

- Buchdahl, H. A., *General Relativistic Fluid Spheres*, **Phys. Rev. 116, 1027–1034 (1959)**.
  DOI `10.1103/PhysRev.116.1027`. Published 15 Nov 1959.
- **The bound:** 2GM/Rc² ≤ 8/9 for a static isotropic-pressure sphere with outward-non-increasing
  density — equivalently R ≥ (9/8) r_s. The consolidated report's "forbids R < 9/8 r_s" is the same
  inequality; either form is citable, but a patch should state the assumptions (static, isotropic
  pressure, non-increasing density) if it says "no stiffness of any kind," since Buchdahl's theorem
  carries those hypotheses (Penrose's carries fewer).

## 5. PSR J0337+1715 — CONFIRMED (both generations)

- Archibald, A. M., et al., *Universality of free fall from the orbital motion of a pulsar in a
  stellar triple system*, **Nature 559, 73–76 (2018)**. DOI `10.1038/s41586-018-0265-1`.
  **The number:** |Δ| ≤ 2.6 × 10⁻⁶ (95% CL) — pulsar vs. inner white dwarf accelerations.
  ⚠ arXiv:1807.02059 carries a DIFFERENT title ("Testing the universality of free fall by
  tracking…") — the bib must use the published Nature title (same trap as `hensen2015`, documented
  in FACTCHECK_REPORT.md row 3C).
- Voisin, G., et al., *An improved test of the strong equivalence principle with the pulsar in a
  triple star system*, **A&A 638, A24 (2020)**. arXiv:2005.01388.
  **The number:** Δ = (+0.5 ± 1.8) × 10⁻⁶ (95% CL) — ~30% improvement on Archibald.
- Gate note: the consolidated report quoted "Δ ≲ 2.6×10⁻⁶" (Archibald). If a patch wants the current
  best bound, Voisin is it; citing Archibald alone is also correct as the discovery-class result.

## 6. Kramer et al. 2021 — CONFIRMED, with one correction to the exchange

- Kramer, M., et al., *Strong-Field Gravity Tests with the Double Pulsar*,
  **Phys. Rev. X 11, 041050 (2021)**. arXiv:2112.06795.
- **The numbers:** SEVEN post-Keplerian parameters detected (more than any other binary pulsar);
  GR's quadrupolar GW description validated at 1.3 × 10⁻⁴ (95% CL).
- ⚠ **Discrepancy with the rulings exchange:** chat-claude's departure note says "mass consistency
  across five post-Keplerian parameters." Kramer et al. 2021 report **seven**. If the
  transparency-caveat sentence quotes a count, it should be seven (or cite without a count).

## 7. davies1986 (Bell's "cheapest" remark) — ALREADY CONFIRMED (RUN-1)

- Davies, P. C. W., and Brown, J. R. (eds.), *The Ghost in the Atom*, Cambridge University Press,
  1986. Bell interview: **ch. 3, pp. ~48–49**.
- **Exact wording, on file since RUN-1** (FACTCHECK_REPORT.md, row 3C bell1987, confirmed via
  arXiv:1209.3685 + 2 independent reproductions): *"the cheapest resolution is something like going
  back to relativity as it was before Einstein, when people like Lorentz and Poincaré thought that
  there was an aether — a preferred frame of reference — but that our measuring instruments were
  distorted by motion…"*
- Gate note: the manuscript attributes only the word "cheapest" to Bell (no quotation marks); the
  hostile read's requested verb downgrade at L1407/L1109 ("recommended" → named it cheapest, called
  it uncomfortable) is consistent with this confirmed wording. A `davies1986` entry fixes the
  follow-the-citation-open-the-wrong-book problem noted at ref.bib:520.

---

## Status

All seven candidates pass the gate as documented above. When patches P1–P6 arrive, the applier
should diff each shipped bib entry against this file (title form, volume/pages, DOI, the quoted
number) and clear the VERIFY flag on match — no fresh fetching needed unless a patch cites a detail
not listed here.
