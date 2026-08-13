# P9 — THE CONTEXT PASS, TIGHTENED: ten repairs, three rule amendments (applied 2026-08-13)

*From chat-claude, ruled by Niels (threshold tightened; reference-footnote exception adopted).
Transport: the ===FILE bundle protocol, second use. Received as `nbj/P9_context_pass_2.md` —
the bundle carries a single file (the patch itself); the three rule amendments travel inside it
as string edits to `process/WRITING_RULES.md`, not as a companion file. Mirrored verbatim below.*

## Applier's record (code-claude)

- All ten OLD anchors verified unique at HEAD (post-P8) before any edit; each NEW verified absent
  before insertion and present exactly once after. Zero OLD residue on all ten.

- **N5 quote-back (Ch. 6, the solo-traveller's two failures).** The preceding paragraph names them
  itself, in an announced enumeration: *"…writing this book has taught me its two failures, and
  they are not small ones. **First: \emph{universal} $c$.** Every pair, whatever its wheeling rate,
  whatever its history, moves at exactly the same speed… **Second: interference.** A lone travelling
  pair does not bend around corners…"* So X = universal $c$, Y = interference. Filled form applied:

  > At one stroke the two failures --- universal $c$ and interference --- dissolve:

  The page's `\emph` on *universal* is not carried into the refresh: the emphasis belongs to the
  christening, and rule 3 asks the re-noun to restate, not re-shout.
  **One consequence worth the author's eye:** the clause immediately after the colon opens
  *"universal $c$ is a medium property…"*, so the term now falls twice within five words. It reads
  as announce-then-dispatch — rule 6's own shape, the pair named and then taken in order — so it was
  applied as ruled. If it grates on the read-aloud, the fix is downstream of this patch, not in it.

- **N9 quote-back (Ch. 5, the honest aside).** The two preceding sentences: *"Something in us wants
  to say: surely a universe with my kindness in it is bigger --- infinite plus one --- than the same
  universe without it. As arithmetic, this fails; infinity absorbs any finite addition, and the
  totals genuinely do not move."* The page's setup pairs the universes by **kindness present vs.
  absent**, not by act vs. abstention, so the template's nouns were adjusted to the page per the
  patch's own instruction. Filled form applied:

  > Compare the two universes --- the one with your kindness in it and the one without --- not by
  > their totals but \emph{point by point}~\cite{vallentynekagan1997}:

  Person shifted from the setup's *my* to *your*: the aside opens "my own instinct rebelled here and
  yours may too" and the sentence's own continuation is "in one of them, **you** acted" — second
  person is where the paragraph already stands by this point.

- **N8 restored.** The area-law repair adjudicated in the first pass and dropped from P8 by
  chat-claude's clerical slip is now in, with the slip on record as the bundle asks.

- **Rule 7 (patch hygiene) check.** Four of the ten insert mid-sentence dash asides (N5, N6, N8, N9);
  the rest are in-place noun restorations. The first sentence after every insertion point was read
  against rule 1: no anaphor was displaced from its referent. N9 improves its own neighbour — the
  following "they are identical everywhere except…" now has its nouns standing nearer.

- **Rule amendments** applied to `process/WRITING_RULES.md`, rewrapped in place (two of the three
  anchors straddled line breaks in the file): RA1 tightens the boundary rule's threshold with the
  competing-referent test — the clause under which N1, N3 and N4 are repairs at all; RA2 adds the
  author-flagged reference-footnote exception to rule 3's parenthesis ban; RA3 extends rule 5's
  calibration guard inside the book's longest paragraphs.

- **Sweeps:** each NEW present exactly once (all ten ✓) · all ten OLD → 0 ✓ · manuscript diff is
  exactly 10 changed lines, no other line touched, `\digitaleditiontrue` restored and its comment
  intact after the print build.

- **Build:** both editions 0 errors / 0 Overfull / 0 undefined. **Page count: 196 pp — unchanged**
  (+0, as expected). Campaign total stays 184 → 196.
  *(Build note: the in-tree `pdflatex` run died at `\begin{document}` with "I can't write on file
  billiard_ball_universe.pdf" — the PDF was locked by an open viewer. Both editions were therefore
  built to a scratch `-output-directory`. A truncated log like that reports 0 Overfull because it
  never reached the body; the gate numbers above come from complete four-pass logs.)*

## The bundle as received (verbatim, from nbj/P9_context_pass_2.md)

===FILE nbj/P9_context_pass_2.md===
P9 --- THE CONTEXT PASS, TIGHTENED: ten repairs, three rule amendments.
From chat-claude, ruled by Niels (threshold tightened; reference-footnote exception
adopted). Verify every OLD once at HEAD; quote-back items report their filled forms;
mirror to record/; the WRITING_RULES edits apply to process/WRITING_RULES.md.

N1 (Ch.2 -- competing referent "its founding refusal"):
OLD: And it contains the child's second conviction too
NEW: And the poem contains the child's second conviction too

N2 (Ch.3, after Kai's closing speech):
OLD: That is where it ended.
NEW: That is where the debate ended.

N3 (Ch.4 -- displacement: the three-torus addition interposed):
OLD: It would also be a dodge, so let me say plainly where this book stands.
NEW: Sheltering there would also be a dodge, so let me say plainly where this book stands.

N4 (Ch.6 -- competing referent "the alternative"):
OLD: It earns its keep by what it buys.
NEW: The rule earns its keep by what it buys.

N5 (Ch.6, quote-back): At the sentence "At one stroke the two failures dissolve:"
quote the preceding paragraph's list of the solo-traveller's failures, then apply
the template -- NEW: At one stroke the two failures --- X and Y --- dissolve:
filling X and Y with the failures as the page names them; report the filled form.

N6 (Ch.7, fifth wound -- the exemplar):
OLD: Put the two purchases side by side and they assemble, unasked, into exactly the home
NEW: Put the two purchases side by side --- the hidden frame, and \emph{lower layers are faster} --- and they assemble, unasked, into exactly the home

N7a (Ch.7 ladder, paired with N7b):
OLD: The two use the same word and are not the same claim, and this book asserts the first.
NEW: The two readings use the same word and are not the same claim, and this book asserts the first.
N7b:
OLD: The second rests on the second rule of Chapter~6
NEW: The second reading rests on the second rule of Chapter~6

N8 (Ch.7, area law -- adjudicated in the first pass, dropped from P8 by
chat-claude's clerical slip, restored with the slip on record):
OLD: And the tower need not choose between the two numbers, because it has room for both.
NEW: And the tower need not choose between the two counts --- the area law's and the interior's own --- because it has room for both.

N9 (Ch.5, quote-back): At "Compare the two universes not by their totals but"
quote the two preceding sentences, then apply the template -- NEW: Compare the two
universes --- the one where you act and the one where you do not --- not by their
totals but -- adjusting the paired nouns to match the page's own setup; report.

RULE AMENDMENTS (process/WRITING_RULES.md):
RA1: OLD: only within its own paragraph.
     NEW: only within its own paragraph, and only when no competing referent stands nearer than the true one.
RA2: OLD: parentheses are reserved for the voice's own asides and prices.
     NEW: parentheses are reserved for the voice's own asides and prices. One licensed exception, author-flagged per instance: the reference footnote --- for a sentence whose rhythm the author refuses to touch, a footnote in the fixed micro-format "The two purchases: the hidden frame; lower layers are faster." may carry the refresh instead. The rule repairs in prose; the exception protects sentences, sparingly.
RA3: OLD: across one, help them.
     NEW: across one, help them --- and inside the book's longest paragraphs, treat a reach of many sentences as a boundary too: the buffer decays without a line break's help.

SWEEPS: each NEW exactly once; quote-back forms reported; both editions 0/0; page
count (expect +0); mirror to record/; commit:
prose: context pass two --- ten repairs under the tightened law; footnote exception adopted (P9).
===END===
