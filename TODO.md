# TODO — the road from Draft 1 to the published book (v2, expanded)

*You are not a professional physicist, and you do not need to be: almost every check below is **number-matching against a named free source**, not physics judgment. Items are tagged **[NIELS]** (only you), **[CC]** (give to code-claude with web access), or **[EITHER]**. Anything needing judgment beyond matching is tagged **[ASK]** — bring it back to an LLM with the source open.*

---

## 0. How to work this file

- Work top to bottom by phase. One sitting per phase is realistic except Phase 2 (several evenings, or one code-claude session plus your spot-checks).
- **Marking done:** when an item clears, (a) delete its `VERIFY` note in `ref.bib` or its `draftnote` in the `.tex`, (b) tick it here. The book's in-text notes and this file must die together.
- **After every editing session:** run `build.bat`; zero errors, zero `Overfull`. Both editions if you touched figures (`\digitaleditiontrue` → `false` test build).
- **Find all remaining flags at any time:**
  `findstr /C:"VERIFY" ref.bib` and `findstr /C:"draftnote" billiard_ball_universe.tex`
- **A ready prompt for code-claude (Phase 2):** paste this —
  > *Read TODO.md §3. For every row marked [CC] and OPEN: fetch the named source at the given link (or find it via the given venue), confirm the exact detail listed under "check", correct `ref.bib` (fill pages/volumes, delete the VERIFY note) and, if the book's text states a number that disagrees with the source, STOP and report the discrepancy instead of editing prose. Then rebuild and confirm zero errors/overfull. Report a table: key → confirmed/corrected/discrepancy.*

## 1. The phases at a glance

| Phase | What | Who | Effort |
|---|---|---|---|
| 1 | Your scenes, dates, decisions | NIELS | 1–2 evenings |
| 2 | Fact-check ledger (§3) | CC + your spot-checks | 1 CC session + 1 evening |
| 3 | Citation pass (§4) | CC, you approve | 1 CC session |
| 4 | Cold read-through, voice | NIELS | 2–4 evenings |
| 5 | Index population (§5) | EITHER | 1 session |
| 6 | Production: cover, proof (§6) | NIELS + CC | spread over 2 weeks (proof shipping) |
| 7 | Launch (§7) | NIELS | ongoing |

## 2. Phase 1 — only you can do these [NIELS] — **CLOSED (interview 2026-07-24; woven as PROSE_PATCHES_phase1.md)**
*Answers: light = age ~8, father, sleepless evening. Curved space = age ~10, TV-or-radio. Copies idea = same year, comforted at once, brother not comforted. Notes ~age 50 (~2019), charge same season; returns at ~25 and ~40 with little written. Bio: Danish software engineer. Pull quote #1. Ch. 5 echo kept; Democritus one sentence.*

**2.1 The two childhood scenes (Ch. 1 + Epilogue).** For each, one honest sentence of *place* is enough. Memory prompts: How old were you, within two years? Indoors or outdoors? Who was in the room, or was it a book — which book? What did you *do* right after (say something, say nothing, walk somewhere)? Write the answers as plain facts; I/code-claude will weave them in without inflating them.
**2.2 The comfort scene (Ch. 5).** One real occasion the copies idea helped: roughly when, what it displaced (a fear? a grief? an ordinary bad night?). If no single occasion exists, say so — "it has always been background comfort" is itself usable and honest.
**2.3 Epilogue dates.** Fill the `[year?]` placeholders: first massion notes; charge-as-circulation. Approximate is fine; the Epilogue says "as honestly as I can date it" on purpose.
**2.4 Cover decisions.** Bio line (one sentence, honest profession, no inflation); pull-quote pick (recommended: "Globally nothing is special. Locally, you are. Live there.").
**2.5 Two standing decisions.** (a) Ch. 5 opening: trim to lean on Ch. 4, or keep as deliberate echo — my recommendation: **keep as echo**; the reprise of "Somewhere, very far from here…" reads as a refrain, and the lettrine now makes it feel intentional. (b) Ch. 2: does Democritus/Epicurus get its own paragraph or stay one sentence — my recommendation: **stay one sentence**; Lucretius carries the ancestry.

## 3. Phase 2 — the fact-check ledger

*How to read a row: **check** = the one detail to confirm; **where** = a free source. If the source's number matches the book's, delete the flag. If not: [ASK].*

### 3A. Already CONFIRMED this session — just delete any stale flags
- `coddington2003` — Tkachenko waves, PRL 91, 100402 — https://doi.org/10.1103/PhysRevLett.91.100402 (preprint: https://arxiv.org/abs/cond-mat/0305008)
- `einstein1920` — "space without ether is unthinkable" + no-trackable-parts caveat — https://en.wikisource.org/wiki/Ether_and_the_Theory_of_Relativity
- `ligo2017` — GW–GRB speed bound −3×10⁻¹⁵…+7×10⁻¹⁶, delay +1.74±0.05 s — https://doi.org/10.3847/2041-8213/aa920c
- `ligo2016` — GW150914 — https://doi.org/10.1103/PhysRevLett.116.061102
- `asakuraoosawa1954` — depletion force — https://doi.org/10.1063/1.1740347

### 3B. Chapter 2 — history [mostly CC; all sources free]
- `lucretius` — spear argument location (Book I, ~lines 968–983) + pick a citable translation. **Where:** Perseus Digital Library (Latin + English) or Wikisource (W. E. Leonard). [CC]
- Poggio 1417 — scholarly source beyond Greenblatt. **Where:** Ada Palmer, *Reading Lucretius in the Renaissance* (Harvard UP, 2014) — cite it; no reading required beyond the fact. [EITHER]
- `bruno1584` / `rowland2008` — execution date 17 Feb 1600 ✓ standard; the "greater fear" remark is the Schoppe letter tradition — keep the book's hedge ("the accounts we have suggest"). **Where:** Rowland's biography, ch. on the trial. [CC]
- `huygens1690` — his word for attraction ("absurd") in *Discours de la cause de la pesanteur* (1690). **Where:** Oeuvres complètes vol. XXI on gallica.bnf.fr; secondary confirmation in any Huygens–Newton scholarship. [CC]
- Newton–Bentley letter (25 Feb 1692/3), "so great an absurdity" + *hypotheses non fingo* (General Scholium, 2nd ed. 1713 — keep the two attributions distinct). **Where:** The Newton Project, newtonproject.ox.ac.uk — full transcripts, searchable. [CC]
- `leibnizclarke` — third letter, shifted-world argument; Leibniz died Nov 1716. **Where:** earlymoderntexts.com (Bennett's free edition) — search "third paper". [CC]
- `fatio1690` — Royal Society presentation, 1690; Newton's remark survives via Fatio's own testimony — **keep the hedge**. **Where:** the history chapters of *Pushing Gravity*, ed. M. Edwards (2002); Gagnebin's 1949 edition in Notes & Records of the Royal Society. Hardest item in 3B. [CC, then ASK if sources conflict]
- `lesage1782` — *Lucrèce Newtonien*, Nouveaux Mémoires de l'Académie Royale (Berlin, 1782). **Where:** Google Books scan; English translation in *Pushing Gravity*. [CC]
- `maxwell1875` — the "Atom" verdict. **Where:** Wikisource, "Encyclopaedia Britannica, Ninth Edition/Atom" — free full text. [CC]
- `oersted1820` — standard; confirm the bib's edition details and clear. [CC]
- `kelvin1873` — Kelvin's Le Sage paper details. **Where:** "On the ultramundane corpuscles of Le Sage", Phil. Mag. 1873; Internet Archive. [CC]

### 3C. Chapter 7 + physics numbers [CC fetches; you match numbers]
- `poincare1908` — the drag/heat arithmetic as quoted. **Where:** *Science and Method*, Book III — free at Internet Archive (Halsted or Maitland translation); search "Lesage". **Your job:** the book's quoted magnitudes must match the translation's. [CC + NIELS match]
- `fan2023` — electron g−2 to ~1 part in 10¹². **Where:** https://arxiv.org/abs/2209.13084 (Fan et al., PRL 130, 071801). [CC]
- Electron substructure < 10⁻¹⁸ m. **Where:** Particle Data Group review "Searches for Quark and Lepton Compositeness", pdg.lbl.gov — free. [CC]
- Ġ/G ≲ 10⁻¹³/yr. **Where:** Hofmann & Müller 2018, Class. Quantum Grav. 35, 035015 (lunar laser ranging) — abstract number suffices. [CC]
- LISA Pathfinder noise. **Where:** Armano et al., PRL 120, 061101 (2018) — https://doi.org/10.1103/PhysRevLett.120.061101. [CC]
- Graviton-mass / dispersion bound ~10⁻²³ eV. **Where:** LIGO GW170104 paper, PRL 118, 221101 (2017). [CC]
- `ehrenfest1917` (3D stability) — Proc. KNAW 20, 200; free at the KNAW digital archive. `Ehrenfest 1911` UV-catastrophe coinage — Ann. Phys. 36 (1911); attribution also documented in M. J. Klein's Ehrenfest biography. [CC; coinage = ASK if unclear]
- `kelvin1852` — Phil. Mag. ser. 4, vol. 4 — Internet Archive; confirm pages. [CC]
- `planck1900` — Verhandlungen DPG 2, 237–245; translation in ter Haar, *The Old Quantum Theory*. [CC]
- `bell1964` — Physics Physique Fizika 1, 195 — **free at APS**: journals.aps.org/ppf. [CC]
- `aspect1982` + `hensen2015` + companions — Aspect PRL 49, 1804; Hensen Nature 526, 682 (https://arxiv.org/abs/1508.05949); Giustina PRL 115, 250401; Shalm PRL 115, 250402. [CC]
- `bell1987` — the Lorentz-ether "cheapest resolution" remark: get the exact wording. **Where:** *The Ghost in the Atom* (Davies & Brown, CUP 1986), Bell interview — borrowable on archive.org; and "How to Teach Special Relativity" in *Speakable and Unspeakable*. **Quote exactness matters here** — the book calls him the star witness. [CC fetch, NIELS approve wording]
- `couder2006` + Andersen non-replication (PRE 92, 013006, 2015) + Bush review (Annu. Rev. Fluid Mech. 47, 2015 — free PDF on Bush's MIT page). [CC]
- `alfven1942` — Nature 150, 405–406; confirm DOI/pages. [CC]
- `thomson1880` — "Vibrations of a Columnar Vortex", Phil. Mag. ser. 5, vol. 10 — Internet Archive. [CC]
- `lorentz1904` — full translation on Wikisource: "Electromagnetic phenomena in a system moving with any velocity smaller than that of light". [CC]
- `einstein1905photo` — Annalen 17, 132; English in the Princeton *Collected Papers* vol. 2, free at einsteinpapers.press.princeton.edu. [CC]
- Constancy of constants (Ch. 6 selection passage). **Careful item:** Webb et al. *claimed* variation; the safe canonical citation for the *constraints* is J.-P. Uzan, "The fundamental constants and their variation", Rev. Mod. Phys. 75, 403 (2003) — https://arxiv.org/abs/hep-ph/0205340 — plus the Oklo bound (Damour & Dyson 1996). **Your job [NIELS]:** read the book's two sentences there once against Uzan's abstract; the book says "steady to parts per million", which is the constraint side — confirm it still reads that way. [CC + NIELS]
- Two-fluid model — Tisza 1938 (Nature 141, 913); Landau 1941 (J. Phys. USSR 5, 71). A textbook citation is acceptable. [CC]
- Landau critical velocity — any superfluidity textbook (Pitaevskii & Stringari); cite the textbook. [CC]
- G. H. Darwin 1905 elastic Le Sage — Proc. Roy. Soc. A 76 (1905); find exact title/pages via NASA ADS (ui.adsabs.harvard.edu — free). [CC]
- Michelson–Morley 1887 — Am. J. Sci. 34, 333 — everywhere; confirm bib details. [CC]

**RUN-2 STATUS (Stages 1+2 COMPLETE):** repo HEAD 6408972 — zero VERIFY flags in ref.bib; \nocite{*} gone; 68/71 entries cited (searle1980/holt2012/krauss2012 dropped by ruling); jaynes1965 in; laplace re-anchored to 1805. Post-stage-2 micro-patches (Bell double-cite, substructure →10⁻²⁰ m, Lorentz 1892 wording, herrmann2009 MM cite, craft-note closures incl. Fatio-hedge-is-final, build.bat hardening) shipped as `POST_STAGE2_PATCHES.md`. **Remaining after it applies: Phase 1 (§2, NIELS), Phase 4 read-through (now unblocked), Phase 5 index, Phases 6–7 production/launch.**

**RUN-1 STATUS:** Stage 1 executed by code-claude — see `FACTCHECK_REPORT.md` in the repo. All [CC] rows below are closed except as noted there (Fatio wording NOT-REACHED; hedge stays). Four prose fixes shipped as `PROSE_PATCHES_stage1.md`. Only the two NEW rows below remain open.

### 3D-new. Added after run 1 [CC]
- Gibbs paradox / Jaynes's "anthropomorphic" entropy (Ch. 7 craft note, no prior row). **Where:** E. T. Jaynes, "Gibbs vs Boltzmann Entropies", Am. J. Phys. 33, 391 (1965) — free at bayes.wustl.edu/etj (the Jaynes archive). Check: the anthropomorphic/coarse-graining point as invoked in the entropy section. [CC]
- `laplace1796` (last remaining VERIFY, not previously a row). **Where:** Laplace, *Exposition du système du monde* (1796) — Gallica/Internet Archive; note the famous speed-of-gravity bound (≥ ~7×10⁶ c) is from *Mécanique Céleste* (1805). Check: which work the Ch. 2 sentence actually rests on; adjust the bib entry (not the prose) accordingly, or report if the prose implies the wrong work. [CC]

### 3D-collapse. Added by the sixth author-driven expansion (Ch. 7 "The Ladder Under Load") [CC]
Five new bib entries, **all shipped VERIFY-flagged and the section deliberately uncited** until these clear. When they do, run the small Stage-2-style citation placement noted at the end of this block.
- `chandrasekhar1931` — *The Maximum Mass of Ideal White Dwarfs*, ApJ 74, 81–82 (1931). Check: pages/volume, **and** the biographical claim that he computed the limit at nineteen on the voyage from India to England (commonly told; confirm age and voyage before publication). [CC]
- `baadezwicky1934` — *On Super-novae*, PNAS 20, 254–259 (1934). Check: the neutron-star proposal and its companion paper; pages. [CC]
- `oppenheimervolkoff1939` — *On Massive Neutron Cores*, Phys. Rev. 55, 374–381 (1939). Check: pages; the modern maximum-mass value (~2–3 M_⊙) should be cited to a current source (e.g. the GW170817 constraints already in `ref.bib`). [CC]
- `bekenstein1973` — *Black Holes and Entropy*, Phys. Rev. D 7, 2333–2346 (1973). Check: pages. Underwrites the area-entropy invoice item. [CC]
- `eht2019` — *First M87 EHT Results. I*, ApJL 875, L1 (2019). Check: the imaging claim as stated in the saturation invoice. [CC]
- **After all five clear:** place `\cite{chandrasekhar1931}` at the one-and-a-half-solar-mass limit; `\cite{baadezwicky1934}` and `\cite{oppenheimervolkoff1939}` at the neutron-star sentences; `\cite{bekenstein1973}` at the area-entropy invoice item; `\cite{eht2019}` at the Event Horizon Telescope sentence. Report placements; invent no others.

### 3D-sixthwound. Ch. 7 "Sixth Wound: The Saturated Shadow" — REVISED for the v4 scaling correction [CC]
Quantitative claims in the Sixth Wound section — no new bib entries (textbook/standard), but the numbers must clear the fact-check gate. If any disagrees with the source, STOP and report; do not edit prose. **The old M² / "hundreds of thousands" rows are void — v4 replaced that argument (silhouette ∝ M^(2/3), not M²).**
- **Mean density inside a Schwarzschild horizon falls as M⁻².** Check the three figures as stated: ~nuclear density at 10 M☉; near that of a heavy oil at Sgr A* (~10⁶ kg/m³); thinner than room air at 10¹⁰ M☉ (~0.18 kg/m³). Arithmetic is elementary — recompute rather than look up (mean ρ = M / (4/3 π r_s³), r_s = 2GM/c² ⇒ ρ ∝ M⁻²). [CC]
- **The 75× and 1000× figures.** Cube root of (4.3×10⁵) ≈ 75; cube root of 10⁹ = 1000. Confirm Sgr A* ≈ 4.3×10⁶ M☉ (GRAVITY/Genzel–Ghez; Nobel 2020) and that "the whole observed range of holes" spanning ~10 to ~10¹⁰ M☉ is fair. [CC]
- **Binary-pulsar transparency bound.** Claim: pulsar timing verifies gravity tracking mass at neutron-star densities, ~4×10¹⁷ kg/m³. **Where:** Hulse–Taylor and the double pulsar J0737−3039; Kramer et al. 2021 (Phys. Rev. X 11, 041050) is the current precision reference. Check the density figure and that the inference (gravity tracks mass at that density) is fairly stated — **if the framing overreaches, STOP and report.** [CC]
- **White dwarfs shrink as they gain mass.** Standard R ∝ M^(−1/3) for non-relativistic degenerate matter; confirm the statement as phrased. [CC]
- **Earth "eight thousand miles thick."** Mean diameter ≈ 7,918 mi (equatorial 7,926) — "eight thousand" is a fair round figure. (Retained from v3; the sentence is unchanged.) [CC]
- EHT M87 shadow and LIGO inspiral-waveform agreement are already covered by `eht2019` (§3D-collapse) and the existing GW170817 entry; no new rows.

### 3D. Chapter 4/5 + philosophy
- Tegmark numbers (10^{10^{118}}; ~10^{10^{29}} m) — **Where:** https://arxiv.org/abs/astro-ph/0302131 ("Parallel Universes"), §2 — match the two double exponents. [CC]
- `albert2000` — *Time and Chance*, Harvard UP — the Past Hypothesis naming; confirm and clear. [CC]
- `janiak2014` / remaining Ch. 2–3 philosophy keys — Stanford Encyclopedia of Philosophy (plato.stanford.edu) is the fast free checker for all attribution-level claims (Newton on action at a distance; Leibniz PSR; Agrippa's modes). [CC]

## 4. Phase 3 — the citation pass [CC does it, you approve]

Rule: **cite at the first invoking passage**, numeric style, one `\cite` per claim-source pair; then delete `\nocite{*}` from the preamble. Worked examples of the edit:

- *before:* `...their speeds equal to a part in a thousand million million.`
  *after:* `...their speeds equal to a part in a thousand million million~\cite{ligo2017}.`
- *before:* `...directly imaged in the laboratory, in a dilute-gas condensate,`
  *after:* `...directly imaged in the laboratory~\cite{coddington2003}, in a dilute-gas condensate,`
- *before:* `...Bell proved that \emph{no} theory...`
  *after:* `...Bell proved~\cite{bell1964} that \emph{no} theory...`

After the pass: rebuild; the References list will shrink to only cited works — **check nothing beloved vanished** (if a work is context-only, either cite it at its natural spot or accept its removal; do not restore `\nocite`).

## 5. Phase 5 — index population [EITHER]

Tag with `\Ix{...}` (terms; auto-lowercased) and `\Iy{...}` (persons) at each **first or best** occurrence — not every occurrence. Starter list (add as you read): shadow push, massion, the gap, circulation, frozen state, the local ratio, the pincer, cascade, depletion force, ether, Lorentz contraction, Bell inequality, entanglement, superdeterminism, pilot wave, phonon, photon, entropy, coarse-graining, ultraviolet catastrophe, heat death, arrow of time, sufficient reason, trilemma, diagonal theorems, equivalence class; persons: Lucretius, Bruno, Descartes, Huygens, Newton, Leibniz, Fatio, Le Sage, Maxwell, Kelvin, Poincaré, Ørsted, Einstein, Lorentz, Bell, Planck, Ehrenfest, Tegmark, Bohm. Then: uncomment `\printindex`, add `makeindex billiard_ball_universe` between the biber and final pdflatex lines in `build.bat`, rebuild twice.

## 6. Phase 6 — production
1. Fill BOOK_COVER.md checklist (bio, pull quote) → generate/upscale art → wrap PDF.
2. **Print interior:** flip `\digitaleditiontrue` → `false`; rebuild; verify zero errors/overfull; this is the KDP interior PDF. Flip back for the distributed digital PDF.
3. Recalculate spine at the FINAL page count (pages × 0.002252 in) — last step before the wrap PDF.
4. KDP previewer → **order one physical proof** → check: engraving darkness, gray tones in figures distinguishable, gutter comfort on the widest figures (pincer, cascade) → publish.

## 7. Phase 7 — launch
- Early readers: 2–3 people; the ask, in one line: *"I don't need praise — I need to know where it's wrong, and whether the honesty holds. Blurb only if you mean it."*
- Landing page: short blurb variant (BOOK_COVER.md §3) + free/pay-what-you-want PDF.
- The press essay: "I wrote a book by arguing with an AI, and I lost twice on the page" — draft after launch; the Kai chapter is the hook.

---

## 8. Raw in-book notes (verbatim; delete from the .tex as resolved)

**Note block 1:** Author to add, if possible: rough ages for the two experiences (learning about light; learning about curved space), and any physical detail — where you were, who explained it, a book or classroom. Even one sentence of real place per scene grounds the chapter. The border-intuition still has no concrete scene; if a memory exists, add it, but the chapter works without it.

**Note block 2:** Craft notes / verification list for publication: (1) Lucretius dating ($$55 BC) and the spear argument's location (Book I) — standard, confirm edition/line numbers for the endnote. (2) Poggio's 1417 recovery — standard (Greenblatt's The Swerve is the popular source; cite a scholarly one too). (3) Bruno: execution 17 Feb 1600, Campo de' Fiori; the ``greater fear'' remark is reported (Schoppe/Kaspar Schoppe letter tradition) — phrase as ``the accounts we have suggest,'' as drafted, or verify precisely. (4) Huygens's reaction to the Principia and his word for attraction (``absurd'') — verify exact source (Discours de la cause de la pesanteur, 1690). (5) Newton--Bentley letter: 1692/93; quotation as standardly printed — confirm exact text; note ``hypotheses non fingo'' is from the Principia's General Scholium (2nd ed., 1713), keep the two attributions distinct as drafted. (6) Leibniz--Clarke: 1715--16, five exchanges, Leibniz's death Nov 1716; the shifted-world argument is in the third letter — confirm. (7) Fatio 1690 presentation to the Royal Society; Newton's ``only possible mechanical explanation'' remark is via Fatio's own testimony — keep the hedge as drafted. (8) Le Sage: active from late 1740s (often dated 1748); Lucrèce Newtonien 1782 (Berlin Academy). (9) Maxwell's assessment: ``Atom'' article, Encyclopaedia Britannica 9th ed. (10) Ørsted 1820 — standard. (11) Decide whether Democritus/Epicurus deserve a paragraph of their own or remain as the single sentence of ancestry.

**Note block 3:** Craft notes for revision: (1) Rounds compressed from the source transcript; check nothing load-bearing was cut — especially the necessary-vs-brute fork, which arrives quickly here. (2) Kai's two concessions are the chapter's credibility — keep them verbatim-close. (3) Consider a one-page ``scoreboard'' figure after the Settlement: the three positions (floor / regress / agnostic) scored against local grounding, global grounding, arbitrariness. (4) The closing lines should stay quiet — no triumph in either voice.

**Note block 4:** Craft notes: (1) Ch. 5's opening currently re-introduces the copies (``Somewhere, very far from here, there is another you'') — with Ch. 4 in place, revise Ch. 5's opening to lean back on it rather than re-establish it, or embrace the reprise deliberately as an echo. (2) Check Tegmark figures against the source before publication ($10^10^118$ for arrangements/distance; the notes quote his passage). (3) The ink/sentence analogy for functional depth-indifference is load-bearing — test it on early readers. (4) Consider whether ``The Honest Wrinkle'' should cross-reference Ch. 7's quantization section explicitly by name once chapter titles are final.

**Note block 5:** Chapter 5 draft complete. Author to consider on revision: (1) a real scene for the comfort section, if a memory exists; (2) whether the hard-problem paragraph is at the right length — it could grow if early readers push there; (3) whether the Nietzsche/Lucretius paragraph should split into two if the chapter feels rushed at the end.

**Note block 6:** Author to consider: is there a real moment when the copies idea first comforted you — an occasion, a hard time, a night it mattered? One true scene here would do what the light-memory does for Chapter 1.

**Note block 7:** Craft notes: (1) The inverse-square-from-shadow-geometry derivation is the chapter's strongest physics moment — verify the solid-angle argument carefully; it is correct for absorption-shadowing at separations large compared to the bodies, which should be stated or footnoted. (2) The string-harmonics answer to identicalness is doing enormous work — it is, in effect, a claim that quantization could be emergent; Ch. 7 must treat it as a claim, not a fact. (3) The Maxwell disclaimer and the QM disclaimer are load-bearing for credibility — do not soften them in revision. (4) Consider a simple figure: two bodies, the flux, the mutual shadows. One drawing may spare three paragraphs. (5) Constancy-of-constants constraints invoked for the selection answer: quasar absorption-line limits on variation of the fine-structure constant (of order parts per million over Gyr; Webb et al.\ surveys and successors) and the Oklo natural reactor bound — VERIFY current best numbers. (6) The ``sailors/two ships'' claim about waves pushing ships together is a real maritime phenomenon — verify the standard account before publication.

**Note block 8:** Craft notes: (1) Verify before publication: Poincaré's Le Sage heating calculation (exact figure and source); Maxwell's Encyclopaedia Britannica critique; LIGO GW170817/GRB timing bound (one part in $$$10^15$); Michelson--Morley precision lineage; electron g-2 agreement ($$1 part in $10^12$); electron substructure bound ($$$10^-18$ m); Kelvin's re-emission proposal and its failure mode. (8) The elastic-scatterer zero-net-force result — verify best historical attribution (Maxwell's Britannica article; Poincar\'e; G. H. Darwin's 1905 analysis of Le Sage with elastic corpuscles is likely the citable treatment). (9) Superfluid frictionlessness below the Landau critical velocity, and elastic scattering below excitation thresholds, as invoked in the exactness section. (10) The depletion force (Asakura--Oosawa 1954) as elastic short-range shadowing — verify the standard statement of its range (of order one depletant diameter). (11b, Second Wound) Einstein Leiden 1920 wording CONFIRMED against the published text (Wikisource; Methuen 1922), including his no-trackable-parts caveat, now quoted in the passage. GW--GRB speed bound CONFIRMED: between $-3^-15$ and $+7^-16$ of $c$ (Abbott et al.\ 2017, ApJL 848, L13). Tkachenko observation CONFIRMED: Coddington et al., PRL 91, 100402 (2003); their abstract attributes the modes to the vortex lattice's shear modulus, and honestly also reports longitudinal modes at higher frequency. Still to verify: transverse-waves-require-shear as a textbook statement; graviton-mass / dispersion bound ($ 10^-23$ eV); Tisza--Landau two-fluid citations; Alfv\'en 1942 (Nature 150, 405) and W. Thomson 1880 (vibrations of a columnar vortex) exact references. (11) For the cascade escape: current observational bounds on $ G/G$ (lunar laser ranging, binary pulsars; of order $10^-13\,yr^-1$) and on anomalous acceleration noise of free-falling test masses (LISA Pathfinder) — both constrain the resupply steadiness and the absorption shot-noise; get the current numbers. (13, Entropy section) Verify: Gibbs paradox standard statement (and Jaynes's discussion of entropy's ``anthropomorphic'' character); Kelvin 1852 (``On a Universal Tendency in Nature to the Dissipation of Mechanical Energy''); Planck 1900 (Verhandlungen der DPG 2, 237); Ehrenfest's 1911 coinage of ``ultraviolet catastrophe''; the Past Hypothesis as named by David Albert, *Time and Chance* (2000). (14, Light upgrade) Verify: the phonon framing as stated; Einstein 1905 photoelectric (Annalen 17, 132) as the whole-lump absorption claim; Lorentz's derivation of contraction from molecular forces (Lorentz 1892; 1904, ``Electromagnetic phenomena in a system moving with any velocity...''); polarization patterns as stated (light dipole, GW quadrupole); branch structure of vortex-lattice wave spectra. (12, Fifth Wound) Verify: Bell 1964 (Physics Physique Fizika 1, 195); Aspect et al.\ 1982; the loophole-free 2015 trio (Hensen et al., Nature 526, 682; Giustina et al.; Shalm et al.); Nobel 2022 (Aspect, Clauser, Zeilinger); the exact source and wording of Bell's Lorentz-ether remark (the interview in Davies \& Brown, *The Ghost in the Atom*, 1986, and/or ``How to Teach Special Relativity'' in *Speakable and Unspeakable*); walking-droplet literature status (Couder \& Fort 2006; the double-slit non-replication, Andersen et al.\ 2015; Bush's review). (2) The condensed-matter/analog-gravity paragraph should eventually name names in an endnote — Volovik's helium work, analog horizons in BECs, Verlinde's entropic gravity — kept out of the main text to preserve voice. (3) The four scoreboard verdicts (``unanswered / survivable at the price of a conspiracy / open, leaning against / open — with a growing literature'') could become a small table; decide against the book's figure policy. (4) The closing pivot promises a short Coda about ``one thing'' — the Coda must deliver exactly that.

**Note block 9:** Craft notes: (1) The Coda must be read against Ch. 7's closing line (``what we are entitled to keep is one thing'') — the handoff works; keep the two in sync through revisions. (2) The final sentence deliberately fuses the book's two theses — reasons all the way down (Part II) and the endless world (Part III); resist the urge to explain it. (3) Total length $$650 words; it should stay under a thousand no matter what revision adds. (4) Consider whether ``the admission fee of existing at all... every worldview pays it at the same window'' earns a callback in the book's marketing copy; it is the thesis in one image.

**Note block 10:** Author: rough age and one physical detail — who explained it, where. Same scene feeds Chapter 1.

**Note block 11:** Author: age and setting.

**Note block 12:** Author: roughly when were the first notes written?

**Note block 13:** Author: date if possible.
