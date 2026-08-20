# TODO-NIELS.md
*Your ledger — every remaining item on the project that only you can move, in dependency order. Started 2026-07-30. Safe to commit under process/ (it is repo-destined) on one absolute condition, stated here so the file itself enforces it: **no beta-reader names ever appear in this file** — names live only in archive/, outside git. Refer to readers as R1, R2… here.*

## 0. Done — recorded because ledgers should show movement
- [x] Brother's yes — 2026-07-30. The dedication stands. Gate one cleared.
      **Reopened and closed again 2026-08-20: no change.** *"For my brother, who was not comforted."*
      was weighed against plain *"For my brother"* and against naming him. Kept, because it is not
      an unclear line but a plant: it pays off in Ch. 5's comfort section (*"I remember telling my
      brother. He was not comforted… this chapter is, among other things, my long answer to him"*)
      and again in the Epilogue's dated list. Plain *"For my brother"* could preface any book; this
      could only preface this one. **Naming him was set aside deliberately, not forgotten** — the
      yes of 30 July was to a line that names nobody, and putting a real private person's name in
      print beside that story is a larger ask that would need its own fresh yes.
- [x] Claude account export archived; both chats extracted; Dropbox copy confirmed.
- [x] ChatGPT snippets archived (three threads, verbatim, provenance headers).
- [x] All repo rulings delivered (route, process/, licenses, email, name, figures).

## 1. The beta send — the only clock that matters. This week.
- [x] **Stamped-PDF safeguard — done 2026-07-31.** The stamped bytes (sha256 `25bf5f23…5735e02`) were found byte-exact on the external-disk mirror (`E:\…\manuscript\billiard_ball_universe.pdf`, disk untouched) and committed as `timestamps/billiard_ball_universe.pdf` beside its proof; ANCHOR updated. Desktop rebuilds are now harmless. Remaining thirty-second bit: drop a copy in Dropbox beside the archive. (The other three stamped artifacts were already safe: anchor + tex + cover_wrap byte-exact in git at `f79ba9b`; export zip has its Dropbox copy per §0.)
- [ ] Choose 2–4 readers: at least one physicist, at least one who owns no physics. Write their names in archive/ only; here they are R1–R4.
  - [x] **R1 — the "owns no physics" slot, secured 2026-08-01.** Name in archive/ only.
        **R1 has a personal stake in this book and in your feelings about it**, which makes him
        the hardest reader to get an honest answer from. The ask must release him from politeness
        in as many words: say that *"I liked it"* is the one reply that is no use, and that what
        you want is where he stopped understanding, where he got bored, and where he did not
        believe you. "Somewhere in chapter 5" is precision enough.
  - [ ] **The physicist slot is still open — this does not block the send.** Stagger it: R1's
        three weeks start now, the physicist's start whenever he says yes. Waiting for a matched
        pair costs calendar and buys only a tidier comparison.
- [x] **Reply date set: Thursday 20 August 2026** (19 days out; matches §3's "~20 August", so the
      rest of the ledger needs no edit). A weekday deadline reads as a real one.
- [ ] Fill the reader note: **[N] = 180** (confirmed 2026-08-01 against the reader-draft PDF),
      **[date] = 20 August 2026**. The note itself lives outside this repo.
- [x] **The re-cut is built and staged — done 2026-08-03 at the desktop. The supersession is
      closed; nothing about it is left to decide.** The file to attach is
      **`bbu_reader_draft_2026-08.pdf` at the repo root** (sha256 `3182e939…c7323e1c`,
      14,130,409 bytes; gitignored by `bbu_reader_draft*.pdf`, as an emailed deliverable should
      be). Cut by the recipe below, and both tex edits were reverted afterwards — the tex is
      byte-identical to `1db6b8d` and the working PDF is back to the 184 pp draft-apparatus build.
      Verified against the July cut, not merely in isolation:
      - 180 pp · **0 overfull** · no `Craft notes` anywhere (draft apparatus off)
      - `local surplus` ×6, `local ratio` ×0 — exactly the mirror of July's ×0/×6
      - full-text diff July→August is **only** the title line and the Ch. 5 surplus rewrite
      - **pagination identical page-for-page** at every landmark (all four Part pages, both
        Ch. 5 section heads, Coda, Epilogue) and the fan2023 "one part in a million million"
        note sits on the same page in both. So `[N] = 180` and every page reference hold.
      - *Ledger correction, harmless:* that note is on **PDF p. 108**, not p. 172 — the older
        entry's page number was wrong, but it was wrong about July too, so nothing downstream
        moves.
      Recipe, recorded because the reader draft is not a repo state and this will be needed
      again: set `\draftnotesfalse` (line 111), change the title line `{\small Draft 1 ---
      \today\par}` (line 135) to *"Reader's draft --- <month> 2026 --- please do not share"*,
      run `manuscript/build.bat`, then **revert both edits and rebuild**.
- [ ] Send it. One email per reader: note + `bbu_reader_draft_2026-08.pdf`.
      The superseded `bbu_reader_draft_2026-07.pdf` is still sitting beside it at the repo root —
      **delete it or move it aside before you attach anything**, since the two names differ by one
      character and only one of them says *surplus*.
- [ ] Mark the send date here: ______

## 2. During the beta window — sized exactly for these three weeks
- [ ] **Finish your own cold read** on the current PDF. Your paper copy died at ~p. 110 two hundred edits ago; the touched-passages list from the patches is your priority route through the back half.
- [x] **Index pass — first pass done for you, 2026-08-20.** Rather than wait on your marking run,
      code-claude tagged 77 anchors (41 terms, 36 persons) from TODO.md §5's starter list plus
      curated additions, activated `\printindex`, and rebuilt: both editions **202 pp**, 0/0, index
      on folios 191–192. No prose was touched — proven by strip-and-diff against HEAD. What is left
      is **yours and is a judgement call, not a chore**: every entry currently has exactly one page
      reference, and the house terms that carry the book (*massion*, *the gap*, *cascade*,
      *shadow push*, *the local surplus*) deserve the two or three places they do real work.
      Mark second anchors on your read-through, or say the word and the Dictionary gets tagged as
      the standing second reference. Three further questions wait in
      `record/INDEX_PASS_2026-08-20.md` §"Open, for the author".
- [x] **Coda-reprise plate — RULED IN 2026-08-20, and it cost nothing.** *"Both Coda and toy-map
      plates are fine."* Placed full-page on the verso facing the Coda's open door: the endless
      recursion beside the one way out. The feared art-facing-art crowding does not materialise —
      the plate page carries no folio and no text, so the spread reads as one composition.
      **No new asset was needed:** the "composed from the tiles" preview in `nbj/` turned out to be
      the cover master flattened to grayscale (mean absolute difference 0.044, max 2), so the book
      now points at `cover/cover_recursive_ball.png` directly. One `\includegraphics`, nothing
      duplicated, nothing to keep in sync.
- [x] **Toy-map figure (P10/E5) — RULED IN 2026-08-20.** Lifted verbatim from the marked block and
      placed in Ch. 7 immediately after the E3 box and ahead of the First Wound; it heads folio 89,
      with the First Wound opening below it. The E3 box **stays**, as ruled — box for the flip-back,
      figure for the first read. It needed no preamble change: the master already defines
      `bbuBlue`/`bbuRed`/`bbuGold` against `\ifdigitaledition` and already loads the `calc` library,
      so the grayscale twin (song 0.60, cascade 0.42, push 0.22) came through untouched.
- [ ] **R1 as childhood witness — a separate conversation, after he has read.** Ch. 1's open
      draftnote (`manuscript/billiard_ball_universe.tex:223`) says the border-intuition still has
      no concrete scene: *"if a memory exists, add it, but the chapter works without it."* R1 was
      there and may remember what you do not. Keep this out of the beta email and out of the
      reading window — asking a reader to help write the book contaminates his read, and you
      cannot get both from the same conversation. If a scene comes back, it is a prose patch and
      goes through the standing pipeline, not straight into the tex.
- [ ] **Uzan craft item** (the last open fact-check flag): read the quasar-constants passage's two sentences once against Uzan's abstract → tell code-claude to mark the craft note resolved.
- [ ] **CONV-0c** — export DONE (2026-07-30 16:22; zip on the external mirror, `E:\Niels\Proj-2026\repo\ed720115…zip`, sha256 `9f35cd53…284885c`, OTS-stamped 2026-07-31 with the .ots committed in `timestamps/`). Remaining, at the desktop: zip → archive/ + Dropbox, then tell code-claude to update the chatgpt_README completeness line.

## 3. Beta close (~20 August)
- [ ] Collect the replies. Forward findings to chat-claude; rulings → patches → code-claude, the standing pipeline.
- [ ] Thank the readers. If any line of their feedback might be quoted in the public record, ask that reader first; the default is anonymized summary only.
- [ ] Declare the interior final: no further prose changes without a reopened ledger.

## 4. Convergence — fires only after §3
- [ ] Approve the final interior build (both editions 0/0) and its **final page count**: ______
- [ ] KDP setup: account, new paperback title, metadata (title, subtitle, author, description = the back-cover blurb, categories/keywords — chat-claude drafts these on ask), pricing (yours), territories.
- [x] **ISBN — done, and the route changed: it did not come from KDP.** Registered with DBC
      2026-08-10: publisher of record **Niels Bonde Jensen**, forlagsnummer 977519, this paperback
      **978-87-977519-1-6**. Now in the kolofon (with a publisher line, which the page had never
      carried) and in a real EAN-13 on the back cover — see `record/ISBN_AND_BARCODE_2026-08-20.md`.
      **KDP is therefore set up with your own ISBN**, not KDP's free one: theirs is Amazon-locked
      and would split the edition IngramSpark has to share. Expanded Distribution stays **OFF**.
- [ ] Confirm "First edition, 2026" is still true of the calendar; if it slips, the year changes with it.
- [ ] Cover: code-claude sets final \PAGECOUNT → spine computes → KDP previewer → **order the one physical proof**. Judge the proof on paper: links black, ivory right, plates crisp, spine centered.
- [ ] On proof approval: the release commit — imprint URL + ISBN + \PAGECOUNT in one commit, tagged first-edition-1.0 → code-claude runs the flip checklist (pending markers zero, CI gitleaks + reuse lint, beta-name sweep) → **flip the repo public** → publish on KDP. One day, all of it.

## 5. After publication — unhurried
- [ ] Re-export the Claude data once this chat closes, so the archive holds the full transcript instead of the snapshot (the converter re-runs idempotently).
- [ ] CONV-1 with chat-claude: the marked-redaction scrub of both transcripts + per-chat INDEX → conversations/ tier goes public.
- [ ] Watch the letterbox: repo issues → gate → patch → ERRATA line → next printing. The book said it can lose; this is where it finds out.
- [ ] Someday, not now: RM-1's entrainment debt — edition two's first question, waiting in memos/.
