# PROSE_PATCHES_ainote.md — "A Note on How This Book Was Made"
*For code-claude. Author-requested. Applies on top of 49200f5. Ships with `SECTION_ainote.tex`. Build-validated here: both editions, 0 errors, 0 overfull, 169 pp in my environment (expect ~170 in yours, per the one-page offset already recorded).*

## What this is

A short back-matter chapter disclosing how the book was made: which parts are the author's, which were drafted by an AI, what the AI did and did not do, Chapter 3's status as a real argument rather than a device, and the public record. Placed **after the Epilogue and before `\appendix`**, so the running order is: Coda → Epilogue → this note → Dictionary → Standard Picture → References.

## Patch — insert the section

Insert the entire contents of **`SECTION_ainote.tex`** immediately before the line
```
\appendix
```
which occurs exactly once. Do not retype it.

## Why it is placed and worded as it is

- **After the Epilogue, not before it.** The Epilogue closes the book's argument on the author's own voice and childhood; this note is a statement about the artifact, and belongs after the reader has finished with the ideas.
- **`\addchap`, not `\chapter`.** Unnumbered, matching the Epilogue's treatment.
- **It names the AI's errors as well as the author's.** Two specific cases are cited — the endless-descent framing and the M² vs M^(2/3) silhouette scaling — both of which the author caught and the machine conceded. This is deliberate: a disclosure that only listed the machine's contributions would read as either boasting or apology, and the honest record is that corrections went both ways.
- **It does not name the model, the vendor, or me.** That is the author's call and can be added; my recommendation is to leave it as written, because product names date a book badly and the substance is the same either way. If Niels wants attribution by name, it is a one-sentence addition and he should write that sentence himself.
- **The closing paragraph ties the disclosure to the book's own thesis** — a book arguing that unexplained walls are cheating cannot conceal its own construction. That is the argument for the note existing at all, and it should not be cut.

## Not included, deliberately

- **No defensiveness, no justification, no discussion of whether AI-assisted writing is legitimate.** The note states facts and stops. Any sentence defending the practice would weaken it.
- **No link, no repository URL.** The note says a repository exists and will be opened at publication; the actual address belongs on the copyright page or a landing page, where it can be corrected without a reprint.
- **No claim about which sentences are whose.** That claim could not be honestly made at this distance and the note says so implicitly by not attempting it.

## After applying
1. `build.bat`; zero errors, zero overfull; one print-edition build; revert the flag.
2. Note the new page count in `FACTCHECK_REPORT.md` alongside the existing spine flag — this adds roughly three pages, and the spine calculation must come from the final print interior regardless.
3. Commit: `back matter: a note on how this book was made`.
4. No new bibliography entries and no fact-check rows: the note makes no factual claims beyond the project's own history.
