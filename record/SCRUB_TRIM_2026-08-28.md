# Scrub-gate trim — a personal-finance detail leaves the surface (2026-08-28)

*Applied the day after the flip, on the author's ruling, during a post-flip privacy audit. The
gate's rule is "no silent fixes" — this file is the noise. Per the 2026-08-24 lesson, this record
describes and does not reprint: a trim record that reprints what it trimmed has trimmed nothing.*

## The finding and the ruling

The 2026-08-24 surface scrub moved the author's personal-finance rows to the private drop-zone and
classified the same material as a cut category in the forthcoming `conversations/` tier — yet one
public process file still stated the underlying fact plainly, with its timing, and the flip-day
completion note (written 2026-08-28) had repeated the topic by name. The audit flagged the
inconsistency; the author ruled the trim. The boundary applied is the one already public in
`conversations/README.md`: life details beyond "Danish software engineer" stay off the surface.

## What changed

| file | change |
|---|---|
| `process/STATE_2026-08-24.md` | the evening-supersession paragraph's stated personal reason for August timing generalized to "private timing considerations", pointing at the private drop-zone and this record; the scrub-summary bullet's category name generalized to "personal-finance line" (matching the 2026-08-24 trim record's own vocabulary) |
| `process/FLIP_CHECKLIST.md` | the completion note's named topic generalized to "a personal-finance conversation" |

## What did not change

- **Every release fact**: the ruling to publish without a physical proof, its cause (the
  proof-shipping matrix), and the whole release sequence stand exactly as recorded.
- **History.** The pre-trim wording exists in past commits and stays there, per the standing
  2026-08-25 ruling: the timestamp anchors name commit hashes, and rewriting history would break
  the proofs. This trim narrows what the current surface *advertises*, not what history holds.

## Honesty note

Unlike the 2026-08-24 trims, this one ran **after** the repository went public: the pre-trim
wording was on the public surface for roughly a day (2026-08-27/28) and may be cached. The trim is
still worth making — a surface detail and a history detail differ in discoverability — but this
record does not pretend the words were never public.

## Second trim, same day — one word in the P19 record

Found by the transcript-scrub re-read, then traced back to the public surface: the P19 record's
note on the flagged wording change characterized the *earlier draft* phrasing in a way that
connected the invited readers to a category of people the 2026-08-24 trim record exists to keep
unconnected. The connection is precisely what P20 removed from the printed book ("hands
recognizable people guilt") and what the conversations tier's redaction policy cuts. One word
generalized in `record/P19_CONCESSION_AND_RELEASE_PACKAGE_2026-08-21.md`, with an inline note at
the site; the sentence stays true — the earlier phrasing did imply readers existed, and none did.
Same honesty caveats as above: the record file is edited only at this gate and says so in place,
and the pre-trim wording remains in public history (commit `7c81cfc` onward), per the standing
ruling that history is never rewritten. This trim, like every trim in this file, narrows what the
surface advertises — not what history holds.

## Third trim, same day — the five-agent scan

After the flip, five independent fresh-context reviewers were run over the entire public surface
and the full history, each briefed on the disclosure boundary and told to read everything rather
than sample. Their findings, deduplicated, produced this trim — the largest of the three because
it is the first sweep since the boundary rules matured that read *every* public file against them.
On the author's ruling ("yes cut it"), the following changed. Descriptions are deliberately
neutral; per this file's standing rule, nothing trimmed is reprinted.

| file | change |
|---|---|
| `process/TODO-NIELS.md` | the dedication row loses the private process around the printed line (the ruling's editorial reasoning stays); the reader-slot rows lose their seat characterizations, a pronoun, and a closeness implication; the thank-the-readers row loses a clause pointing at private matters |
| `process/STATE_2026-08-24.md` | the KDP account line loses its banking and tax particulars (the fact that setup completed stays); a grep-category list generalized; the proof-route line loses a third party's countries |
| `process/FLIP_CHECKLIST.md` | the beta-name-sweep row no longer names where the private reader list is held |
| `record/HOSTILE_READ_REPORTS_2026-08-10.md`, `record/HOSTILE_PHYSICS_READ_2026-08-10.md` | openings generalized — they characterized an unfilled reader seat by profession (the 2026-08-24 gate swept the process files but not these siblings) |
| `record/FLIP_DRYRUN_2026-08-20.md`, `record/RELEASE_PREP_2026-08-20.md` | pseudonym-scheme wording generalized (it disclosed the count of planned seats, exceeding the public two); a beta-close phrasing that implied replies had been received corrected to "empty" — the P18 record had already superseded that wording, these two files still carried it |
| `record/PLATES_2026-08-20.md` | two phrasings that implied replies had been received → "the beta window", same reason |
| `record/PROSE_PATCH_local_surplus_heading_2026-08-20.md` | a present-tense attribution of a draft copy to a pseudonymous reader generalized — the identical construction the 2026-08-24 gate fixed in the ISBN record, missed here |
| `record/SCRUB_TRIM_2026-08-24.md` | two of its own table cells tightened — they described what they moved closely enough to leak it (a trim record that describes what it trimmed too well has the same problem as one that reprints it) |
| `record/PROSE_PATCH_P22_felt_not_decided_2026-08-24.md` | a sibling project's absolute path genericized — the class the 2026-08-24 gate ruled on, missed same-day |
| `CLAUDE.md` | two stale facts corrected: the repo is public (the "private" flag was a hazard — the airlock habit depends on accurate flags) and the book is published at 206 pp, not a 93 pp draft |
| `README.md` | the Map's "editions note" (a file that does not exist) → the collision check (which does) |
| `.gitignore` | the drop-zone and reader-draft commentary shortened to the rules alone — explanatory prose about private material's nature and delivery removed |

**Considered and deliberately KEPT, so the next sweep does not re-litigate them:** the P20
rationale sentence in its three record sites (it is the record's honesty about *why* the printed
book changed; the author may still rule otherwise); the committer email everywhere (ruled);
the frozen anchor files in `timestamps/` including one email occurrence and two export-file
identifiers (stamped — editing them breaks their own proofs, and the email is ruled public);
the `C:\Users\niels` shim path in the timestamps runbook (accepted class); the flip-dry-run's
own quoted paths (it is the audit of exactly that exposure); the art-delivery provenance JSONs'
paths (machine provenance, graded and accepted by that same dry run); the two short attributed
quotations printed in the book's bibliography (the book's own disclosure). **History:** all
pre-trim wording, five commit messages carrying trimmed-class content, and the recoverable
deleted files are permanent per the standing ruling; the scan cataloged them (the catalog lives
with the author, not in the repo) so their retention is a decision, not an oversight.
