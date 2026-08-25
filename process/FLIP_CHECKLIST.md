# Flip-day checklist (REPO-3)

Run on publication day, in order. The flip must be a visibility toggle, not a cleanup crisis — if
anything below requires real work, the airlock rule ("commit as if public") was violated earlier.

- [ ] **All `[RULING PENDING]` markers resolved** — currently the `first-edition-1.0` tag lines in
      `README.md` and `ERRATA.md`, and nothing else. Use:
      `grep -rn "RULING PENDING" --exclude-dir=.git --exclude-dir=nbj --exclude=FLIP_CHECKLIST.md --exclude=FLIP_DRYRUN_*.md`
      **The exclusions are not optional and the bare grep can never return zero** (found by the
      2026-08-20 dry run): this checklist line contains the string it greps for, `nbj/` is the
      gitignored drop-zone, and the dry-run report quotes the marker while reporting on it. The same
      trap applies to the personal-residue sweep below — the audit reports quote the very patterns
      they audit, so `record/FLIP_DRYRUN_*.md` and `record/REPO1_SCRUB_*.md` must be excluded there
      too or the sweep will report itself and someone will chase ghosts on release day.
- [ ] **Scrub gate re-run** on the final state (REPO_SPEC §5), clean.
- [ ] **Float gate clean, both editions** — grep the full build log for `Overfull` *and* for
      `Float too large for page by`; zero hits of either, same tolerance as the zero-overfull
      policy. Added by H1 (2026-08-13): `tab:wounds` overran the text height by 123 pt and struck
      the folio on p. 125, and the log had been saying so for several builds while the gate
      watched only `Overfull`. A truncated log does not count as a pass — if the log ends at
      `\begin{document}` the PDF was locked by an open viewer; close it and rebuild.
- [ ] **Collision gate clean, both editions** — `python manuscript/check_collisions.py <pdf>`;
      zero collisions, exit 0. Added by H3 (2026-08-16): figure 7.5 was printing into the last two
      lines of its paragraph on p. 105, and figure 4.2's plate box was cutting *"is an inventory."*
      in half on p. 43 — and **the float gate above cannot see either one.** A float that overlaps
      its own page's text produces no `Overfull`, no `Float too large`, nothing; at most an
      `Underfull \vbox`, which eight healthy pages of this book also produce. The check reads the
      built PDF, not the log: text lines from different blocks sharing space (TEXT), foreign ink
      inside a paragraph (INK), and prose whose glyphs stop short of their own baseline, which is
      what a plate's white background painted over text looks like (BLANK). It needs Python with
      `pymupdf` and `numpy`; if it cannot run it says so and exits 2, and **a build where it did
      not run is not a build that passed** — same trap as the truncated log above. Expect the
      trailing note "5 stacked-fraction overlap(s) below the 8 pt width threshold, not counted":
      those are the inline `\frac`s on folios 90, 93, 142, 170 and 178, measured at 4.0–5.5 pt
      against 25.5 pt for the real p. 105 collision. If that count moves, look at why.
- [ ] **Real gitleaks CI pass** — the pre-flip manual scan was regex/keyword only and honestly
      could not do entropy detection; run gitleaks-the-tool (GitHub Action or a machine with it
      installed) over full history for the entropy pass before going public.
- [ ] **`reuse lint` clean** — LIC-1 built the REUSE structure but the `reuse` tool was not
      installable in the authoring environment; run `reuse lint` in CI and confirm zero errors.
- [ ] **Beta-name sweep** — grep full history for the reader list held in `archive/`; expect zero
      (readers live only outside the repo).
- [x] **Paper stock — CREAM, ruled 2026-08-20.** `cover_wrap.tex` now computes the spine at
      **0.0025 in/page** (was 0.002252, KDP white — an inherited default, not a decision). At 202 pp
      that is **0.5050 in**, and the wrap **12.7550 × 9.25 in**. The constant and `\PAGECOUNT` must
      be correct *together*: get one right and the other wrong and the wrap is wrong twice over.
      **Carries a known cost:** cream muddies halftones, and this interior has ten grayscale plates.
      The recommendation had been white on that ground; the ruling went the other way with the cost
      accepted, so the plates are now a proof-day inspection item rather than a settled matter.
- [x] **Imprint placeholders filled — ALL THREE DONE.** Repository URL ✅ (2026-08-17), ISBN ✅
      (2026-08-20, `978-87-977519-1-6`, in the kolofon with the publisher line), and `\PAGECOUNT` ✅
      (2026-08-21, on the author's declaration that the interior is final): **206 pp → spine
      0.5150 in → full wrap 12.7650 × 9.25 in**, built and measured.
      *Corrected 2026-08-25: this line said 202 pp / 0.5050 / 12.7550 — the figures from before the
      final count landed at 206 — while the staged release package and every gate already ran at
      206. Second time this row has held stale numbers; it is the file's own warning, twice proven.*
      *This line previously read "spine 0.4549 in → full wrap 12.7049 × 9.25 in" — the **white**-stock
      figures, left behind by the cream ruling of 2026-08-20 and contradicting §"Paper stock" above
      it in this same file. Corrected. It is precisely the failure that section warns about: the
      constant and the count must be right together, or the wrap is wrong twice over.*
- [ ] **Release PDF** — `git add -f manuscript/billiard_ball_universe.pdf` in that release commit
      (see `PDF_POLICY.md`).
- [ ] **OpenTimestamps Phase 2 (OTS-3)** — anchor the release in a new batch folder per the `timestamps/README.md` convention: `timestamps/YYYY-MM-DD-first-edition-1.0/ANCHOR-first-edition-1.0.txt` (tagged commit hash + sha256 of the final interior PDFs (digital + print), the final cover PDF, and the tex); stamp, upgrade, record block heights in `timestamps/README.md` (anchors stay frozen), commit. Add one sentence to `README.md`: *"Release artifacts are OpenTimestamps-anchored; proofs in `timestamps/`, verifiable with the `ots` client against the Bitcoin blockchain."*
- [ ] **billiardballuniverse.com resolves AND links the repository — BEFORE the book is live.**
      **[NIELS]** The imprint page prints that URL as where "the manuscript, sources, and the full
      correction record" live, and the how-made note promises a repository anyone can inspect. If the
      site is up but does not link the repo on day one, the book's most distinctive claim — that you
      can go and see the seams — dead-ends on a landing page. Hard gate, same moment as the flip.
      *Resequenced by Niels's ruling 2026-08-25 (below): the gate is the book going live, not the
      publish button — no copy can exist before the listing is live, so the claim stays honest.*
- [ ] **Tag** the release commit `first-edition-1.0`; `README.md` names it "the book you are holding."
- [ ] **[NIELS] Press Publish on KDP — with the repository still private.** Ruled 2026-08-25,
      inverting the original order: the flip is the irreversible act (public is public, cached is
      cached), while a KDP draft that hits review trouble can still be fixed quietly. Publish first,
      let the review clear (up to 72 h), and only show the record once the book is real.
- [ ] **Flip repository visibility to public — when the listing goes live**, not on a timer. KDP
      review can clear in hours; "live" is the event, watched via the Bookshelf status / KDP's
      email. From that moment a buyer can follow the listing's open-record sentence and the site's
      repo link, so live and public must be the same moment. Nothing else should need touching.
