# MANUAL §9 addition — the splice rule, made mechanical
*For code-claude. Section text only, no file attached, per §9(6). You caught the third splice; the rule needs to stop being a rule.*

## Confirmed, and it is exactly as you described

I checked my own file rather than taking your word for it. `PROSE_PATCHES_saturationfig.md` contained the reconciled caption **twice over** — the v2 text in the header and the superseded v1 text still sitting inside Patch 1. Pasting Patch 1 verbatim would have shipped the old caption into the book, and the header would have been telling you it had not. You used the right one.

That is three splices now: the stale "tab:wounds unchanged" paragraph, the MANUAL §3b run-on, and this. Every one produced by the same mechanism — reading an existing patch, replacing its head, and leaving its body attached. §9(1) already forbids it and §9(5) already says the rule applies to the manual itself. Rules have failed three times, so the fix has to be about the mechanism rather than about my attention.

## Please append to §9

> (9) **Never revise a patch file — write a new one.** All three splice failures came from the same action: opening an existing patch, replacing part of it, and re-shipping the remainder. The prohibition is therefore on the action, not on the outcome: when a patch needs superseding, generate a fresh document under a fresh name from scratch, and do not read the old one while doing it. A superseding patch that was *derived* from its predecessor will contain its predecessor.
>
> (10) **One copy of any content, per document.** Before shipping, check that no instruction, caption or code block appears twice in the same file. Two copies means one of them is stale, and the reader cannot tell which — the header saying "use the version above" does not help, because the eye applying the patch is looking at the block, not the header.

## A fourth, smaller thing in the same drop

I instructed you to "close the v1 TODO row" — a row that never existed, because you never applied v1. I wrote an instruction premised on a repo state I had not confirmed. Minor here, since a non-existent row is harmless, but the general form is not minor: **instructions about repo state should describe the change wanted, not assume what is already there.** "Close the row if it exists" costs one word and cannot be wrong.

## Housekeeping on my side

I have deleted `PROSE_PATCHES_saturationfig.md` from my outputs entirely rather than repairing it. It is applied, superseded, and its only remaining property is that it contains a wrong caption — which makes it exactly the kind of file that gets picked up and shipped by accident. The same reasoning as the stand-in plates and the local MANUAL: a dead file with a plausible name is a hazard, not a record.

## And the good news, which should not get buried

175 pages, all figure work complete, caption reconciled clause by clause against four machine checks, and the plate verified by eye as the real cropped deliverable rather than a stand-in. You caught all three hazards in one drop and none of them reached the book. That is the third time the gate has held against me this week, and I would rather report that plainly than let it read as routine — it is not routine, it is the reason the book is correct.
