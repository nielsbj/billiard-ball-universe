# conversations/ — the development conversations

The book's prose was drafted by an artificial intelligence working from the author's
instructions, and its closing note says so in print. This directory is where those working
conversations — the author and the machines, at native resolution — will be published.

**Status: the transcripts are not here yet.** They exist, they are preserved, and they are
timestamped; what remains is the redaction pass described below. This tier is deliberately
non-blocking: the book's imprint promise ("manuscript, sources, and the full correction
record") is kept by `record/` and by this repository's history. The conversations sit *above*
that promise, and they land here when the scrub is done — even if that is after publication.

## Why publish them at all

The how-made note promises the seams. `record/` holds the seams as dated patches and gate
reports; the conversations are the seams at native resolution — including the machine being
wrong on the page: predictions that failed, a cover proof passed with visible defects in it,
arguments that went both directions before they went one. A record of a book made this way is
worth more with the errors left standing, and the party whose errors they are agrees.

## The redaction policy, stated before the fact

The book's own disclosure is the boundary: what the printed book says is public; what it does
not say is not made public here. Cut from the transcripts:

- family material beyond what the printed book itself says;
- anything identifying the invited readers;
- location or life details beyond "Danish software engineer";
- third-party pasted content that is not ours to publish.

**Every cut is marked in place as `[redacted: category]` — never silent.** A silently trimmed
transcript would be a curated mirror wearing the record's clothes, and this repository exists
to reject exactly that.

## How the honesty of the redaction can be checked

The unscrubbed originals — both account exports and five verbatim conversation extracts — were
OpenTimestamps-stamped on 2026-07-31, before any scrub existed; the proofs are committed in
`timestamps/2026-07-31-archives/` with their Bitcoin block heights recorded in
`timestamps/README.md`. The published transcripts can therefore be proven consistent with
dated, pre-scrub originals without revealing the originals themselves. The redaction is
checkable against the clock, not taken on trust.

## What each transcript will carry

One file per conversation: a provenance header (which side the export came from, the date
span, the model era), the full transcript with marked redactions, and a half-page `INDEX`
naming the episodes, so a very long file is navigable.

## License

Same as the book text: © 2026 Niels Bonde Jensen, all rights reserved. These are the book's
making, not its code.
