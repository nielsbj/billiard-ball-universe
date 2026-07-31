# TODO-NIELS.md
*Your ledger — every remaining item on the project that only you can move, in dependency order. Started 2026-07-30. Safe to commit under process/ (it is repo-destined) on one absolute condition, stated here so the file itself enforces it: **no beta-reader names ever appear in this file** — names live only in archive/, outside git. Refer to readers as R1, R2… here.*

## 0. Done — recorded because ledgers should show movement
- [x] Brother's yes — 2026-07-30. The dedication stands. Gate one cleared.
- [x] Claude account export archived; both chats extracted; Dropbox copy confirmed.
- [x] ChatGPT snippets archived (three threads, verbatim, provenance headers).
- [x] All repo rulings delivered (route, process/, licenses, email, name, figures).

## 1. The beta send — the only clock that matters. This week.
- [ ] **FIRST, at the desktop, before ANY rebuild — safeguard the stamped PDF (five minutes).** The OTS proof `timestamps/billiard_ball_universe.pdf.ots` attests sha256 `25bf5f23f4116751150ef5531cb0b1a44b4d6e6bf1b6b3aa00d6fb6eb5735e02`, and those exact bytes exist ONLY as the desktop's current `manuscript/billiard_ball_universe.pdf` — not in git history (the last committed build hashes differently), not on the laptop, and the next `build.bat` run overwrites them forever. Verify the hash matches, copy the file to `timestamps/billiard_ball_universe.pdf` (not gitignored there; `ots verify` then works in place beside its proof), commit, and drop a copy in Dropbox beside the archive. → then tell code-claude to update the ANCHOR status line. (The other three stamped artifacts are safe: anchor + tex + cover_wrap are byte-exact in git at `f79ba9b`; the export zip has its Dropbox copy per §0.)
- [ ] Choose 2–4 readers: at least one physicist, at least one who owns no physics. Write their names in archive/ only; here they are R1–R4.
- [ ] Set the reply date (three weeks ≈ 20 August 2026).
- [ ] Fill the reader note: [N] = 180, [date] = your date.
- [ ] Send the **re-cut** reader draft (the post-BIB-1 build — thirty-second check: References, ~p. 172, fan2023 note reads "one part in a million million"). One email per reader: note + PDF.
- [ ] Mark the send date here: ______

## 2. During the beta window — sized exactly for these three weeks
- [ ] **Finish your own cold read** on the current PDF. Your paper copy died at ~p. 110 two hundred edits ago; the touched-passages list from the patches is your priority route through the back half.
- [ ] **Index pass**: mark \Ix/\Iy terms through the book; then tell code-claude: uncomment \printindex, add makeindex to build.bat, rebuild, report new page count.
- [ ] **Coda-reprise plate — rule yes/no**: the full-page varied-structure recursion facing the Coda (tiles exist; near-free). Weigh the diptych reading — the single open door beside the endless recursion — against art-facing-art crowding. Must be decided **before** the page count locks. → on yes, code-claude composes from the tiles at interior spec.
- [ ] **Uzan craft item** (the last open fact-check flag): read the quasar-constants passage's two sentences once against Uzan's abstract → tell code-claude to mark the craft note resolved.
- [ ] **CONV-0c**: run the ChatGPT account export (Settings → Data controls → Export); zip → archive/ + Dropbox → tell code-claude to update the chatgpt_README completeness line. Five minutes, any evening.

## 3. Beta close (~20 August)
- [ ] Collect the replies. Forward findings to chat-claude; rulings → patches → code-claude, the standing pipeline.
- [ ] Thank the readers. If any line of their feedback might be quoted in the public record, ask that reader first; the default is anonymized summary only.
- [ ] Declare the interior final: no further prose changes without a reopened ledger.

## 4. Convergence — fires only after §3
- [ ] Approve the final interior build (both editions 0/0) and its **final page count**: ______
- [ ] KDP setup: account, new paperback title, metadata (title, subtitle, author, description = the back-cover blurb, categories/keywords — chat-claude drafts these on ask), pricing (yours), territories.
- [ ] ISBN: assigned at KDP upload → give it to code-claude for the imprint placeholder.
- [ ] Confirm "First edition, 2026" is still true of the calendar; if it slips, the year changes with it.
- [ ] Cover: code-claude sets final \PAGECOUNT → spine computes → KDP previewer → **order the one physical proof**. Judge the proof on paper: links black, ivory right, plates crisp, spine centered.
- [ ] On proof approval: the release commit — imprint URL + ISBN + \PAGECOUNT in one commit, tagged first-edition-1.0 → code-claude runs the flip checklist (pending markers zero, CI gitleaks + reuse lint, beta-name sweep) → **flip the repo public** → publish on KDP. One day, all of it.

## 5. After publication — unhurried
- [ ] Re-export the Claude data once this chat closes, so the archive holds the full transcript instead of the snapshot (the converter re-runs idempotently).
- [ ] CONV-1 with chat-claude: the marked-redaction scrub of both transcripts + per-chat INDEX → conversations/ tier goes public.
- [ ] Watch the letterbox: repo issues → gate → patch → ERRATA line → next printing. The book said it can lose; this is where it finds out.
- [ ] Someday, not now: RM-1's entrainment debt — edition two's first question, waiting in memos/.
