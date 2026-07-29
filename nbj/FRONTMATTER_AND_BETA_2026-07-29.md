# FRONTMATTER_AND_BETA_2026-07-29.md
*From chat-claude, on Niels's go ("write what is missing"). Fresh document, no predecessor. Two repo patches plus a one-off build spec and a ready-to-send reader note. Anchors verified unique against the manuscript and disjoint from both applied patches (257a985, 1962fab); code-claude re-verifies at HEAD, applies in order, stops on mismatch.*

## PATCH 1 --- the imprint page (verso of the title page)
Placeholders are bracketed and deliberately visible until release; filling them (ISBN, repository URL) joins the production checklist. The illustrations line points at the how-made chapter rather than restating it; the repository line makes that chapter's promise findable.

**OLD:**
```
\frontmatter
\tableofcontents
```
**NEW:**
```
\frontmatter
% ---- imprint (verso of the title page) ----
\thispagestyle{empty}
\null\vfill
{\small\noindent
Copyright \textcopyright{} 2026 by Niels Bonde Jensen. All rights reserved.

\noindent No part of this book may be reproduced in any form without written
permission from the author, except for brief quotations in reviews or discussion.

\noindent First edition, 2026.

\noindent ISBN: [paperback ISBN --- assigned at publication]

\noindent Interior figures and illustrations: see \emph{A Note on How This Book Was Made}.

\noindent Manuscript, sources, and the full correction record:
[repository URL --- public at publication].

\noindent Typeset by the author in Palatino.
\par}
\cleardoublepage
\tableofcontents
```

## PATCH 2 --- the dedication [APPROVE-OR-STRIKE --- and ask him first]
One line, on the recto after the imprint. The epilogue decodes it ("I told my brother; he was not comforted; Chapter~5 is my long answer to him"), so the dedication and the epilogue close a loop across the whole book. **Two vetoes apply: yours, and his** --- if your brother would rather not stand at the front of the book, strike this patch and nothing else changes. Apply after PATCH 1.

**OLD:**
```
\cleardoublepage
\tableofcontents
```
**NEW:**
```
\cleardoublepage
% ---- dedication ----
\thispagestyle{empty}
\null\vspace*{0.28\textheight}
\begin{center}
{\large\itshape For my brother, who was not comforted.}
\end{center}
\vfill
\cleardoublepage
\tableofcontents
```

## BETA BUILD SPEC (one-off; build-and-revert, nothing committed)
1. Flip `\draftnotestrue` -> `\draftnotesfalse`.
2. Title page line: OLD `{\small Draft 1 --- \today\par}` -> NEW `{\small Reader's draft --- July 2026 --- please do not share\par}` (this swap is for this build only).
3. Build the **digital** edition. Zero errors, zero Overfull.
4. Verify the clean copy is clean: `pdftotext` the output and confirm `Craft notes:` -> 0 hits and `[resolved` -> 0 hits (both live inside draftnote apparatus and must vanish with the flag).
5. Save as `bbu_reader_draft_2026-07.pdf`; report its page count --- **which is not the release count**: the craft notes leave, so it will run shorter than 182, and the spine still waits for the final interior.
6. Revert both flips. Ledger: `BETA-1 | [CC] | build reader draft per spec; verify clean; report page count` -> CLOSED when done.

## NOTE TO BETA READERS (paste into the email that carries the PDF; fill the two brackets)
---
I have written a book and you are one of its first readers from outside. It is called *The Billiard Ball Universe: A World With No Bottom* --- an argument that the universe has no smallest layer and no edge, what follows from that for physics, and what follows from it for how to live. It is finished; you are reading it before the world does because I need to know what a stranger's eyes find. It runs about [N] pages and reads in six to eight hours.

The book promises to serve two readers at once: the physicist, and the interested reader who owns no physics. You are one of these, and I want the book judged as that reader. You do not need to be kind to it. The most valuable sentences you can send me are "I stopped reading here" and "I did not believe this."

What I ask --- notes can be one line each, page number attached:
1. The exact page where you first put the book down, and why.
2. Any passage you had to read twice, and any place you felt lost.
3. Any place the honesty felt performed rather than real.
4. If you are the physics reader: the strongest attack on Chapter 7's toy that the chapter fails to make against itself.
5. If you are the other reader: any term the footnotes and the small dictionary at the back failed to rescue.
6. The one thing you would cut, and the one thing you would keep at any cost.

Do not collect typos --- a pass exists for that; one or two that jump at you are welcome. Near the end the book explains exactly how it was made, including the machine help involved; read it where it falls, and tell me how it lands. Any format is fine --- margins of the PDF, a list in an email, a phone call. By [date], if you can.

Thank you for reading it before it was safe to.

--- Niels
---

## COMMIT (the two patches only)
One commit: `frontmatter: imprint page + dedication (placeholders live until release)`. Ledger: `FM-1 | [CC] | apply FRONTMATTER_AND_BETA patches 1--2; rebuild both editions 0/0; report page count` -> CLOSED when done. **Production checklist additions:** fill ISBN and repository-URL placeholders at release; confirm "First edition, 2026" at release.

## NOTES FOR NIELS
- The dedication needs two yeses --- yours and your brother's. Strike freely; the epilogue line stands either way.
- Your side of the beta step: choose two to four readers (at least one physicist, at least one reader who owns no physics), set the [date] (three weeks is honest), fill [N] from the beta build's reported count, and send.
- Front matter will now run: title (i), imprint (ii), dedication (iii), blank (iv), contents (v) --- the trade-standard order.
