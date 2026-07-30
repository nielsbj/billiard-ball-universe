# PROSE_PATCHES_phase1.md — the author's scenes, dates, and decisions
*For code-claude. These are Niels's own memories, interviewed and woven by chat-claude, approved by Niels. Apply verbatim (exact-string replace; each OLD occurs once). Build-validated on chat-claude's side against HEAD+POST_STAGE2 (0 errors, 0 overfull). If POST_STAGE2_PATCHES.md has not yet been applied, apply it first — these patches assume it.*

## P1 — Chapter 1, the light scene (age ~8, his father, a sleepless evening)
**OLD:**
```
I remember the pleasure --- real pleasure --- when I learned what light was. Because that explained \emph{seeing}. Something actually travels from the thing to your eye.
```
**NEW:**
```
I remember the pleasure --- real pleasure --- when I learned what light was. I was perhaps eight, and it was my father who explained it, one evening when I could not sleep. Light explained \emph{seeing}: something actually travels from the thing to your eye.
```

## P2 — Chapter 1, the curved-space verdict (age ~10, television or radio)
**OLD:**
```
Eventually one learns how modern physics ``fixed'' Newton's embarrassment: gravity is not a pull across space
```
**NEW:**
```
It reached me when I was perhaps ten --- a television program, or it may have been radio; the verdict has outlived the source in my memory. Modern physics, it explained, had ``fixed'' Newton's embarrassment: gravity is not a pull across space
```

## P3 — Chapter 5, the comfort and the brother (insert + delete the request-note)
**Insert after** the sentence ending `...and the comfort comes from the right one.` — as a new paragraph:
```
I can date my own comfort precisely, because the idea and the comfort arrived together. I was about ten when the thought first came to me --- an infinite universe must contain another me --- and it comforted me at once, the way a warm room comforts: no argument required. I remember telling my brother. He was not comforted. I have thought about that difference ever since, and this chapter is, among other things, my long answer to him.
```
**Then delete** the draftnote beginning `Author to consider: is there a real moment when the copies idea first comforted you` (whole environment).

## P4 — Epilogue, the dated string (replace items 1–4 and their draftnotes with these six)
**OLD:** the four `\item \emph{[age?]}` / `\emph{[year?]}` items, including their embedded draftnotes, from "Someone explained that seeing" through "...two gears finally allowed to unwind. \begin{draftnote}Author: date if possible.\end{draftnote}".
**NEW:**
```
\item \emph{Age eight, or near it} --- One evening when I could not sleep, my father explained that seeing is light bouncing from things into the eye, and the explanation \emph{satisfied} in a way nothing had before: a chain with no gaps. The standard by which everything since has been judged.
\item \emph{Age ten, or near it} --- Curved spacetime, from a television program --- or it may have been radio; the verdict has outlived the source --- and the immediate, wordless response: \emph{this is clearly cheating.} Space is nothing; nothing does not bend.
\item \emph{The same year, more or less} --- The copies. An infinite universe, I realized, must contain another me --- and the thought comforted me at once. I told my brother; he was not comforted; Chapter~5 is my long answer to him.
\item \emph{Around twenty-five, and again around forty} --- The ideas returned, were turned over, and were put back. Little or nothing was written down. Some convictions are patient.
\item \emph{Around fifty --- about 2019} --- The notes, at last: massions, the rain, the shadow --- gravity as a push and not a pull, written down in Danish and put in a drawer, taken out and touched up every so often in the years since. Charge as circulation --- orientation and sense of rotation standing in for plus and minus, annihilation as two gears finally allowed to unwind --- arrived in the same season.
```
*(The two existing 2026 items follow unchanged.)*

## P5 — Epilogue status line
**OLD:** `\draftstatus{Scaffold --- the author must supply real dates and one or two true scenes; see TODO.}`
**NEW:** `\draftstatus{Draft 1}`

## P6 — BOOK_COVER.md (repo copy)
- Bio placeholder → `Niels Bonde Jensen is a Danish software engineer. He has believed the universe has no bottom since before he could say why.`
- Pull quote: mark option 1 CHOSEN — *"Globally nothing is special. Locally, you are. Live there."* — and delete options 2–3.
- Tick the checklist items "fill the bio" and "pick the pull quote".

## P7 — TODO.md (repo copy)
Mark §2.1–§2.5 CLOSED (answers recorded in this file; decisions: Ch. 5 echo KEPT, Democritus stays one sentence — both already the text's state, no edit needed). Remaining phases: 4 (read-through), 5 (index), 6–7 (production/launch).

## After applying
Full build + one print-edition build (0/0 both) · Commit: `prose: phase-1 scenes and dates (author-interviewed, chat-claude woven, Niels approved)` · Append a "Phase 1 closed" line to FACTCHECK_REPORT.md.
