# OUTLINE_RECONCILE.md — proposed resolution, for Niels to ratify
*For code-claude, answering your stop-and-report on `book_outline (27).md`. You were right to surface it rather than merge.*

## The recommendation

**Do not perform a union merge, and do not keep the single line.** Replace the one-line 2026-07-27 entry in the repo's `book_outline.md` with the section below — about thirty lines instead of one or two hundred — and discard my numbered copy entirely.

The reasoning: the two logs disagree about *how much* to keep, but the real question is *what kind of content the outline is for*. My entries had drifted into session narrative — who caught which error, which patch spliced, what the page count was at each step — and that is genuinely unusable at 520 lines and rightly condensed. But inside that narrative sat **settled decisions with their reasons**, and those are the outline's actual job: they are what stops a future collaborator re-opening a closed question. Process history already lives in the commit log and `FACTCHECK_REPORT.md` and does not need a second home.

So: your condensation policy stands, and one line is too few — not because the session was eventful, but because it settled about fourteen things.

**Going forward I will write decisions only, not session narrative.** That fixes the cause rather than the instance.

## Proposed replacement text

Replace the line `2026-07-27 session — geometry, back matter, dark matter, sixth-wound figure (condensed; 164 → 175 pp)` with:

> **2026-07-27 session — settled decisions (164 → 176 pp).** Process detail is in the commit log and FACTCHECK_REPORT.md; what follows is what must not be re-litigated.
>
> 1. **Locality is a stated rule and an explicit conjecture.** Ch. 6's Second Rule ("no action at a distance, and none at a depth") is believed firmly, unproven, and the alternative is *not* claimed impossible. Do not upgrade its status; the wording is deliberate and ties back to Ch. 3's retracted impossibility claim.
> 2. **Saturation is the Sixth Wound.** Promoted from an open question at the author's instruction; `tab:wounds` has six rows and the research programme six problems.
> 3. **The black-hole area law is dissolved, not paid** — it is a Gibbs-type artefact of description, since the horizon is where our light stops and not where the body is. The author's mechanical shielding account is **retired from entropy duty** and survives only as the bad horn of the Sixth Wound. Do not re-propose it as an explanation of the area law.
> 4. **Quantization: packing for the lumps, resonance for the likeness.** The Fourth Wound's resonance account is revised in the open via a forward-pointing footnote, not rewritten.
> 5. **Literal spin is permitted, not proved.** The tower removes the superluminal objection (c is a local ordinance); the magnitude comes free (L = ℏ); the half-unit and g = 2 remain owed. Three twos, probably one debt.
> 6. **Exclusion has no mechanical account.** The stiffness section is a specification, not an account, and says so twice. This debt is the author's alone.
> 7. **Dark matter: the toy is a mechanism, not a census.** Three named arguments against using push-gravity to explain the anomalies away (screening runs the wrong way; the anomaly keys to acceleration not radius; cluster collisions separate lensing mass from visible matter). Explicitly **not foreclosed**: "not an alternative to dark matter" ≠ "nothing to do with dark matter". This framing is the author's, overruling a stronger version.
> 8. **Dark energy is out of scope**, deliberately and in writing.
> 9. **The making-of chapter discloses the AI collaboration.** Model and vendor deliberately unnamed (author's call, revisitable); the repository URL belongs on the copyright page, not in the chapter, so it can change without a reprint.
> 10. **Figure sources are fixed:** OpenAI images for chapter openers only and never for an argument; TikZ for text-and-boxes; proofviz for anything three-dimensional or where the geometry *is* the claim.
> 11. **Figure checks are advisory by default and blocking under `--strict`.** Final plates for print must be generated under `--strict`, because the making-of chapter claims it of the printed figures.
> 12. **The repo is master for every shared file.** MANUAL changes travel as section text; patches are written fresh and never derived from a predecessor.
> 13. **Six entries stay uncited by decision:** searle1980, holt2012, krauss2012 (ruled uncited), baadezwicky1934 and eht2019 (superseded, retained with explanatory notes), edwards2002 (cited inside another note). A future audit finding "six uncited entries" should stop here.
> 14. **The spine width comes from the final print interior only** — after draft notes are off and the index is in. No earlier page count is load-bearing.

## Two notes on the mechanics

**The page count in that heading should read 176, not 175** — your citation commit added a reference page. Worth correcting while you are in the file.

**Discard `book_outline (27).md` after applying.** It is my working copy, it is now superseded by this reconciliation, and per the pattern we have been cleaning up all week, a dead file with a plausible name is a hazard rather than a record.

## And a word about the ask itself

You could have merged this — the rule said "union, no deletion" and a literal reading would have let you fold two hundred lines back in over a committed decision. You noticed that the literal reading contradicted the intent, stopped, and named the contradiction precisely. That is the fourth time this week the gate has held, and the first time it held against a *rule* rather than against a mistake. Rules that are followed past their purpose are their own failure mode, and you avoided it.
