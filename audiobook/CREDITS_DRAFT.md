# Spoken credits — DRAFT for the author's ruling (2026-10-29)

The audio edition replaces the title page and kolofon, which do not speak, with
two short spoken passages. Both are **the author's prose to rule on** — drafted
here, not adopted. Nothing below is in the render script until Niels says so.

The guiding rule is the how-made note's own: *"I would rather give it than have
somebody find it out."* An audio edition read by a machine is exactly the kind
of fact that note exists to disclose, so the disclosure is put at the front, in
the author's voice, rather than buried in a platform metadata field.

---

## A. Opening credits (read before the dedication)

> The Billiard Ball Universe. A World With No Bottom.
>
> By Niels Bonde Jensen.
>
> [[PAUSE]]
>
> This edition is read by a synthetic voice. No human narrator was recorded,
> and the voice you are hearing is not the author's. The book has a note at the
> back about how it was made, and what a machine did and did not do in making
> it; this is the same disclosure, moved to the front, where you can act on it.

**Alternative for the third paragraph**, if the above reads as too long a
throat-clear before a book that opens on a childhood memory:

> This edition is read by a synthetic voice. No human narrator was recorded.
> The note at the back explains the rest, and why it is said here rather than
> discovered later.

*Recommendation: the short alternative.* The book earns its disclosures by
making them precisely, not at length, and the full account is four hours away
in the how-made note anyway.

---

## B. Closing credits (read after the final appendix)

> The Billiard Ball Universe. A World With No Bottom. By Niels Bonde Jensen.
>
> First edition, published in twenty twenty-six by Niels Bonde Jensen, Denmark.
> Copyright twenty twenty-six by Niels Bonde Jensen.
>
> [[PAUSE]]
>
> The manuscript, the sources, the fact-checking reports and the whole trail of
> corrections are published at billiardballuniverse dot com. The letterbox is
> open; corrections become errata, and errata become the next printing. The
> book said it can lose. You are how it finds out.

**Note on the closing line.** The last two sentences are lifted verbatim from
the how-made note, where they already appear. Hearing them twice in one
sitting — once four hours ago, once now — may read as a deliberate refrain or
as a repetition fault. *Recommendation: keep.* The Coda already works by
reprise, and this is the book's one standing invitation.

**Deliberately not spoken:** the two ISBNs and the Palatino typesetting line.
They serve a reader holding an object; in speech they are noise. The audio
edition's own ISBN lives in the distributor's metadata where it is actually
used. *Author may overrule — some publishers read the ISBN aloud.*

---

## C. The one-sentence question for the how-made note

The note's last movement is an argument that a book making this book's case
"while concealing its own construction would be breaking its own rule on its
last page." The audio edition adds a new fact of construction — a machine is
now also the *voice*. The opening credits disclose it, which may be enough.

**The question for the author:** should the note itself gain a sentence, so
that the printed book and the audio edition tell the same complete story? If
yes, it must be the author's own sentence; a suggested shape only, to be
rewritten or refused:

> *If you are listening to this, add one more machine to the list: the voice.*

Arguments for: the note's rule is about *giving* rather than being found out,
and a reader of the paperback who later learns of a synthetic narration would
have found something the note did not give. Arguments against: the note is
about how *the book* was made, and the narration is a property of one edition,
disclosed at its own front door; adding editions to the note invites a sentence
per format forever.

*Recommendation: add it.* The sentence costs one line, it only appears in a
paragraph already listing what machines did, and it keeps the note true for
every edition rather than only the printed one. But this is squarely the
author's call, and the audio edition is complete and honest without it.

---

## D. What this would change in the repository, if ruled in

- C (if yes): one sentence in `manuscript/billiard_ball_universe.tex`'s
  how-made note → re-run the ebook build → the ebook's v1.1 batch (which
  already holds the alt-text item and the leaked column-spec fix) carries it,
  and the paperback interior changes at the next printing, not before.
- A and B: adopted into `audiobook/` as the first and last render segments.
  No manuscript change.
