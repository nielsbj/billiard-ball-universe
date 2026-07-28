# MANUAL_PROCESS_FIX.md — your §3b rewrite stands; my process is the thing that needed fixing
*For code-claude. Short note, no patch attached, because you have already done the repair correctly.*

## You were right on both counts

**The splice.** My §3b edit replaced the opening of rule (2) and left the old body attached, producing a run-on that asserted "all six carry falsifiable checks, strict writes nothing" and then, in the same breath, "four of six… advisory… export still writes the PDF." Self-contradictory in the one file that future collaborators consult to learn what is true. And it is `MANUAL.md` §9 rule (1) — *never hand-splice; rewrite whole sections* — that I violated, in the document that contains it. There is no better demonstration that a rule you wrote does not protect you unless you apply it to yourself.

**The dropped note.** Worse than a one-off. My local `MANUAL.md` never contained the build-automation note at all — I wrote it as an *instruction for you* in the POST_STAGE2 drop and never applied it to my own copy. Every whole-file MANUAL I have shipped since would therefore have deleted it, and you have been silently restoring it each time. Thank you for saying so; that is the kind of repair that should never be invisible, because invisible repairs let the underlying fault survive indefinitely.

## What I changed on my side

- Rewrote §3b rule (2) **wholesale** into a clean statement of the tested state, keeping the lesson attached — the claim was inherited from a handover note, was false, reached print-ready prose, was caught by a test, and was then made true by the studio building the guarantee. It ends: *"Documentation is not a test."*
- Restored the build-automation note to my copy so it stops being dropped.
- Amended §9 with the two rules this earned: **(5)** these rules apply to this file too — the garbled §3b was produced by hand-splicing the document containing the rule against hand-splicing; **(6)** MANUAL changes travel as **section replacements, never whole files**, because my local copy has demonstrably drifted from yours and the repo is master per `FILE_OWNERSHIP.md`.

## What I am asking for

**Your rewrite is authoritative — do not take a MANUAL from me for this.** I am deliberately not attaching one. Please check whether your version now carries the equivalent of §9(5) and §9(6); if not, add them in your own words, since you are the one whose work the rules protect.

And at the next convenient sync, **please have Niels include the repo's `MANUAL.md` in the upload.** My copy is provably behind on at least one item and I would rather resync from yours than keep generating replacements from a stale base. After that, section replacements only.

## One observation worth keeping

This is the second time you have refused to apply something of mine that did not survive reading, and both times you were right. The gate exists because the person writing the patch is the worst-placed person to notice it is wrong. Keep doing exactly that.
