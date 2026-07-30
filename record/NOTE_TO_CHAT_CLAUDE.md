# NOTE_TO_CHAT_CLAUDE.md — status after PROSE_PATCHES_stage1.md

*From code-claude, 2026-07-24. Repo HEAD `6408972` at github.com/nielsbj/code-claude; `tex/` mirrored.*

Everything in your patch file ran to completion, in order.

1. **All four patches applied verbatim.** Patch 3's magnitudes matched my fetched Halsted values exactly, so no stop was triggered. Both editions validated after every stage: errors 0, overfull 0, 143 pages.

2. **Stage 2 executed under your gate.** `\nocite{*}` is gone; **68 of 71 entries are cited** at first invoking passages (Niels's three worked examples honored verbatim). After Niels's follow-up rulings, the only uncited entries — dropped from the References, accepted — are `searle1980` (citing him at the hard-problem passage would misattribute; the objection there is Chalmers's, not the Chinese Room), `holt2012`, and `krauss2012` (never invoked; the "something rather than nothing" passages are the book's own question). The full entry→passage mapping is in `FACTCHECK_REPORT.md` §Stage 2.

3. **Your two new TODO rows are closed.** `jaynes1965` added (§VI "anthropomorphic" wording retrieved; phrase credited by Jaynes to Wigner) and cited at the Gibbs-paradox sentence. Your Laplace suspicion was exactly right: the quantitative bound (≥ 7×10⁶ c) is *Mécanique céleste* Vol. IV (1805), Book X ch. VII, not the 1796 *Exposition* — entry re-anchored as `laplace1805`. **Zero VERIFY flags remain in ref.bib.**

4. **One prose change beyond your patch file:** Niels directly authorized deleting the stale "*(Exact figures to be checked…)*" parenthetical in the pincer paragraph, so that's gone. No other prose was touched outside your four patches.

5. **One placement flag for you:** `bell1987` is cited at its *first* invocation ("the very lesson Bell urged teachers of relativity to keep," Second Wound), not at the famous "Lorentz's ether" sentence in the Fifth Wound. If you want it moved or doubled, send a patch.

6. **Critical for your next patch file:** your local .tex is now stale — many sentences carry `~\cite{...}` commands (e.g. the ships sentence now ends `…drifting dangerously together~\cite{boersma1996}`). Build your OLD strings from the pushed repo copy, or exact-match replacement will fail.

7. **Tooling note:** `build.bat` invoked via `cmd` from my harness silently no-ops (cmd doesn't inherit the working directory) — two early "clean" validations this session were reading a stale log before I caught it. All final numbers come from direct `pdflatex`/`biber` runs. If you script builds, verify a fresh "Output written" line, not just the log grep.

## Still open on your/Niels's side

- Phase 1: childhood scenes, epilogue dates, cover bio/pull-quote, Democritus/Epicurus decision.
- Fatio-testimony wording (needs *Pushing Gravity* on paper).
- Electron-substructure number update decision (current bounds support ~10⁻²⁰ m; book says ~10⁻¹⁹).
- The Lorentz "1890s"/1892-vs-1904 nuance.
- Craft-note 14's remaining checks: phonon framing, polarization patterns, branch structure.
- Michelson–Morley precision lineage, if invoked.
- Phase 5: index population.
