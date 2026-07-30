# BIB_PATCH_annotations_2026-07-29.md
*From chat-claude. Fresh document, no predecessor. Two edits to `ref.bib`. Found by reading the reader draft's printed References (p. 172): the annotated bibliography quotes the book's prose, and two annotations still quote wordings the last two patches retired. The bib was outside every sweep --- the simulations and the gate were both honest and both blind to it. From now on `ref.bib` notes join the staleness-sweep surface (ledger row below).*

## EDIT 1 --- fan2023: the note quotes retired prose
The paper's own framing ("0.13 parts per trillion", "1 part in $10^{12}$") stays --- those are the source's words and belong in a verification note. Only the clause quoting *the book* changes, because the book now speaks in chains.

**OLD:** `the book's ``one part in a trillion'' matches`
**NEW:** `the book's ``one part in a million million'' matches`

## EDIT 2 --- tegmark2014: the note attaches the wrong figure to "nearest-copy"
The note described exactly the mispairing that correction A1 removed from Chapter 5; as written it re-plants the error at the back of the book.

**OLD:** `Source of the $10^{10^{118}}$ nearest-copy estimate and the discussion`
**NEW:** `Source of the nearest-copy ($10^{10^{29}}$) and nearest-universe ($10^{10^{118}}$) estimates and the discussion`

## VERIFY, BUILD, LEDGER, COMMIT
- Each OLD occurs exactly once at HEAD (verified against the uploaded ref.bib; disjoint from the daviesdavies2010 addition). Apply; rebuild both editions 0/0; confirm the References page renders both notes with the new wording.
- **Re-cut the reader draft after this lands** (same BETA-1 spec, same filename) --- the annotated bibliography is this book's signature honesty artifact, and the beta copy should not ship with a stale quote in it.
- Ledger: `BIB-1 | [CC] | apply BIB_PATCH_annotations (2 edits); rebuild; re-cut reader draft` and `MAN-1 | [CC] | MANUAL: add ref.bib note fields to the staleness-sweep surface --- any prose patch that changes a phrase must grep ref.bib for it too`.
- Commit: `bib: annotations follow the prose --- chains wording, Tegmark figure pairing (2 edits)`
