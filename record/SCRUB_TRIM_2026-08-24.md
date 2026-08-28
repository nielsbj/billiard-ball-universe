# Scrub-gate trim — the repo surface adopts P20's ruling (2026-08-24)

*Applied at the pre-flip scrub gate, on the author's ruling, before the repository went public. The
gate's rule is "no silent fixes" — this file is the noise.*

## The ruling

P20 removed the invited-readers clause from the printed book because *the invited-readers clause
hands recognizable people guilt*. On 2026-08-24, reading the repository before its flip, the author
extended the same ruling to the repo's surface: the working notes carried per-person accounts of the
beta window — who was invited, who answered, what was contingent on whom — that the book itself had
already been stripped of. The facts stay; the attribution goes. (This record deliberately does not
quote the removed sentences: a trim record that reprints what it trimmed has trimmed nothing.)

## What changed

| file | change |
|---|---|
| `process/TODO-NIELS.md` | beta-close row generalized to "closed empty: no invited reader replied, and no seat was filled"; the thank-the-readers row loses its per-person line; two private rows moved verbatim to the private drop-zone *(this cell's own description of them was tightened 2026-08-28 — it described what it moved closely enough to leak it; see `record/SCRUB_TRIM_2026-08-28.md`)*; one absolute local path (external-mirror location) trimmed to "the external mirror" |
| `process/STATE_2026-08-21.md` | the standing-fact paragraph generalized the same way — the fact ("the window closed empty, conceded in print") is untouched |
| `process/TODO-NIELS.md` §1 | the reader-slot row loses a characterization *(cell tightened 2026-08-28, same reason as above)*; the ask-design mechanics stay |
| `record/ISBN_AND_BARCODE_2026-08-20.md` | "the one sent to R1" → "the reader draft that went out" |
| `figures/FIGURES_NOTE.md`, `figures/PROVENANCE.md` | local `D:\…` upstream paths genericized to "a sibling private project" — the July scrub's "genericize or accept" finding, now genericized |
| `record/P18_REMAINDER_AND_BETA_CLOSE_2026-08-21.md` | the same three sentences generalized, with an inline note pointing here — a record file is edited only at the gate, never silently |

## What did not change

- **Every fact the book prints**: the window ran 30 July–20 August; it closed empty; no external
  human read the book before publication; the concession is on the page.
- **History.** The pre-trim wording exists in past commits and stays there — the timestamp anchors
  name commit hashes, and rewriting history would break the proofs while deleting the record this
  repository exists to publish. The readers are pseudonymous (R1/R2) everywhere in history; no name
  has ever entered the repository.

## Why this is not concealment

The book's disclosure is the boundary, in both directions: what the printed book says, the
repository says; what the printed book deliberately declined to say about identifiable people, the
repository's surface declines too. The same rule already governs the forthcoming `conversations/`
tier, stated publicly in its README.
