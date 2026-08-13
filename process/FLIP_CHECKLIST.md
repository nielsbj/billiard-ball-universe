# Flip-day checklist (REPO-3)

Run on publication day, in order. The flip must be a visibility toggle, not a cleanup crisis — if
anything below requires real work, the airlock rule ("commit as if public") was violated earlier.

- [ ] **All `[RULING PENDING]` markers resolved** — `grep -rn "RULING PENDING"` returns zero
      (currently: the `first-edition-1.0` tag lines in `README.md` and `ERRATA.md`).
- [ ] **Scrub gate re-run** on the final state (REPO_SPEC §5), clean.
- [ ] **Float gate clean, both editions** — grep the full build log for `Overfull` *and* for
      `Float too large for page by`; zero hits of either, same tolerance as the zero-overfull
      policy. Added by H1 (2026-08-13): `tab:wounds` overran the text height by 123 pt and struck
      the folio on p. 125, and the log had been saying so for several builds while the gate
      watched only `Overfull`. A truncated log does not count as a pass — if the log ends at
      `\begin{document}` the PDF was locked by an open viewer; close it and rebuild.
- [ ] **Real gitleaks CI pass** — the pre-flip manual scan was regex/keyword only and honestly
      could not do entropy detection; run gitleaks-the-tool (GitHub Action or a machine with it
      installed) over full history for the entropy pass before going public.
- [ ] **`reuse lint` clean** — LIC-1 built the REUSE structure but the `reuse` tool was not
      installable in the authoring environment; run `reuse lint` in CI and confirm zero errors.
- [ ] **Beta-name sweep** — grep full history for the reader list held in `archive/`; expect zero
      (readers live only outside the repo).
- [ ] **Imprint placeholders filled** — repository URL + ISBN — in the same release commit that
      sets the final `\PAGECOUNT`.
- [ ] **Release PDF** — `git add -f manuscript/billiard_ball_universe.pdf` in that release commit
      (see `PDF_POLICY.md`).
- [ ] **OpenTimestamps Phase 2 (OTS-3)** — anchor the release in a new batch folder per the `timestamps/README.md` convention: `timestamps/YYYY-MM-DD-first-edition-1.0/ANCHOR-first-edition-1.0.txt` (tagged commit hash + sha256 of the final interior PDFs (digital + print), the final cover PDF, and the tex); stamp, upgrade, record block heights in `timestamps/README.md` (anchors stay frozen), commit. Add one sentence to `README.md`: *"Release artifacts are OpenTimestamps-anchored; proofs in `timestamps/`, verifiable with the `ots` client against the Bitcoin blockchain."*
- [ ] **Tag** the release commit `first-edition-1.0`; `README.md` names it "the book you are holding."
- [ ] **Flip repository visibility to public.** Nothing else should need touching.
