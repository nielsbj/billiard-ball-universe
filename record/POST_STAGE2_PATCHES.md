# POST_STAGE2_PATCHES.md — closures and micro-patches after your Stage-2 report
*For code-claude. Author-approved. Your point 6 is respected throughout: every OLD below is either (a) a sentence you reported cite-free, or (b) an **interior fragment** that citation insertion cannot have touched (your cites land at sentence ends). If any OLD is not found verbatim: **STOP for that patch only**, paste the current full sentence into the report, and continue with the rest. All patches build-validated on my side (0 errors, 0 overfull).*

## Patch A — bell1987 doubled at the star-witness sentence (your point 5: yes, double it)
An attributed quotation is cited where attributed; numeric style permits the same key twice.

**OLD** (verbatim from my Patch 4; you report it cite-free):
```
The \emph{cheapest} resolution, he called it --- and the least crazy on offer, I would add, though those last words are mine, not his.
```
**NEW:**
```
The \emph{cheapest} resolution, he called it~\cite{bell1987} --- and the least crazy on offer, I would add, though those last words are mine, not his.
```

## Patch B — substructure bound strengthened (decision: update to the current bound)
The current limits support ~10⁻²⁰ m; the stronger number makes the wound sharper, so the book takes it. **Interior fragment — leave the sentence's existing citation untouched.**

**OLD (fragment):** `down to a scale ten thousand times smaller than a proton`
**NEW (fragment):** `down to a scale a hundred thousand times smaller than a proton`

## Patch C — Lorentz history made exact (decision: 1892-onward wording)
"Showed…derives" overstated 1892; the hypothesis is 1892 (FitzGerald 1889), the full machinery 1904. **Interior fragment.**

**OLD (fragment):**
```
Lorentz showed, in the 1890s, that exactly this assumption \emph{derives} the contraction that hides the frame
```
**NEW (fragment):**
```
Lorentz argued, from 1892 onward, that exactly such motion-altered forces would \emph{produce} the contraction that hides the frame
```

## Patch E — modern Michelson–Morley citation
First verify via https://arxiv.org/abs/1002.1284 that the Herrmann et al. rotating-cavity bound is at the 10⁻¹⁷ level (original MM ~10⁻⁸ ⇒ "billionfold" holds); then add this entry to `ref.bib` **without** a VERIFY flag, and apply the cite to the **main-text** occurrence only (the Appendix B occurrence stays uncited by design):

```bibtex
@article{herrmann2009,
  author    = {Herrmann, S. and Senger, A. and M{\"o}hle, K. and Nagel, M. and Kovalchuk, E. V. and Peters, A.},
  title     = {Rotating Optical Cavity Experiment Testing {L}orentz Invariance at the $10^{-17}$ Level},
  journal   = {Physical Review D},
  volume    = {80},
  pages     = {105011},
  year      = {2009},
  url       = {https://doi.org/10.1103/PhysRevD.80.105011},
  note      = {Modern Michelson--Morley-type bound; underwrites ``improved a billionfold''}
}
```
**OLD:** `improved a billionfold. Every medium theory`
**NEW:** `improved a billionfold~\cite{herrmann2009}. Every medium theory`

## Patch D — craft-note closures (apparatus only; all reviewed and approved by chat-claude)
Delete the following sub-items, recording "closed per POST_STAGE2 §D" in your report:

1. **Craft-note 14, phonon framing** — APPROVED as stated: "a quantized medium's waves come in lumps" is the textbook content of the phonon concept; no source dispute exists.
2. **Craft-note 14, polarization patterns** — APPROVED: light's action on a sub-wavelength ring of charges is a uniform (dipole-pattern) swing along the E-axis; GW's is the quadrupole plus/cross. Both are standard; fig:dipolequadrupole depicts them correctly.
3. **Craft-note 14, vortex-lattice branch structure** — APPROVED: rotating-superfluid lattices carry multiple wave branches (Tkachenko, Kelvin, inertial modes; Sonin's reviews); the book claims only "multiple branches exist," which holds. The *specific* dipole+quadrupole pair remains an open research-program item, as the text already says.
4. **Fatio testimony wording** — RULING: the hedge is the FINAL form. The prose already attributes the remark to Fatio's own testimony; a paper copy of *Pushing Gravity* would decorate, not change, the sentence. Close the item; remove it from TODO tracking.

## Patch F — build.bat hardening (your point 7; tooling edit authorized)
Prepend to `build.bat`, as its first two lines:
```bat
cd /d "%~dp0"
echo BUILD-STAMP %date% %time%
```
And append to `MANUAL.md` §1: "Automation note: always verify a fresh 'Output written' line (or the BUILD-STAMP) from the current run — never trust a log grep alone; cmd-invoked runs from harnesses can silently no-op on working directory."

## After applying
1. Full build + one print-edition build; zero errors, zero overfull, both.
2. Commits: `post-stage2: micro-patches A–C, E (author-approved)` · `post-stage2: craft-note closures per chat-claude review` · `tooling: build.bat cwd hardening`.
3. Append a "Post-Stage-2" section to FACTCHECK_REPORT.md: per-patch applied/STOPPED status, the herrmann2009 verification line, and the new remaining-open list (expected: Phase 1 [NIELS], Phase 5 index, production).
