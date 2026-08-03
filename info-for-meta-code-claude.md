# info-for-meta-code-claude

*Transient handoff, laptop → desktop, 2026-08-03. **Delete this file once the move is done.**
Written by code-claude on the laptop after surveying what actually exists outside git.*

Order of operations assumed: laptop commits and pushes → laptop copied to Dropbox + external
drive → desktop pulls from GitHub → `_meta` supplies the rest from the external drive.

---

## ⚠ Read first — the one way this move can lose evidence

**Do not mirror-sync the laptop onto the external drive.** A mirroring copy (`robocopy /MIR`,
`rsync --delete`, "make destination identical") would **delete** material that exists only on the
external drive, because the laptop never had it:

- `E:\Niels\Proj-2026\archive\`
- `E:\Niels\Proj-2026\nbj\`
- `E:\Niels\Proj-2026\repo\data-93119b11-…-batch-0000.zip` (Claude account export)
- `E:\Niels\Proj-2026\repo\ed720115…-2026-07-30-16-22-31-….zip` (ChatGPT account export)

The two zips and the conversation extracts under `archive/` are **OpenTimestamps-stamped
originals**. The proofs in `timestamps/` would survive, but the artifacts they attest to would
not, and a proof without its file proves nothing about anything. Copy **additively** (no delete),
or copy into a dated subfolder.

The laptop repo has no `archive/`, `nbj/`, or `conversations/` directory at all — confirmed, not
assumed. Nothing from those needs to travel *from* the laptop; they are desktop/external material.

---

## MUST copy: external → desktop

**1. The agent memory directory** — the only laptop-generated material git cannot carry.

```
C:\Users\bruger\.claude\projects\C--Users-bruger-niels-Proj-2026-Everything-code-claude\memory\
```
Two files, ~3.4 KB: `MEMORY.md`, `laptop-environment-quirks.md`. The destination path is
**identical on the desktop**, because the slug is derived from the repo path and that path is the
same on both machines. If the desktop already has a `memory/` folder for this project, the laptop
copies are newer — they carry the OTS completion, the stale-duplicate warning, and the open
handoff items. Overwrite is correct here.

---

## OPTIONAL

**2. Local Claude Code settings** — only if the desktop has none.

```
C:\Users\bruger\niels\Proj-2026\Everything\code-claude\.claude\settings.local.json
```
379 bytes, gitignored by design. These are laptop permissions. If the desktop already has a
working `settings.local.json`, **leave it alone** — this is not worth a merge.

---

## DO NOT copy

**3. `art\cover\` (117 MB)** — laptop copy is stale.
```
C:\Users\bruger\niels\Proj-2026\Everything\code-claude\art\cover\
```
Gitignored as of commit `cc3c819` because it is the superseded pre-REPO-2 cover working directory.
Its `cover_wrap.tex` still contains the retired phrase "local ratio", and its `cover_art_build.tex`
predates both the SPDX headers and the `zoomcone` refactor. Copying it onto the desktop would
overwrite a probably-better copy with a worse one. The live cover is the tracked `cover\`, which
arrives via git.

**4. Build artifacts** — regenerable, and one is actively misleading.
```
C:\Users\bruger\niels\Proj-2026\Everything\code-claude\manuscript\billiard_ball_universe.{aux,bbl,bcf,blg,idx,ilg,ind,log,pdf,run.xml,toc}
C:\Users\bruger\niels\Proj-2026\Everything\code-claude\billiard_ball_universe.*   (stale root-level set from July)
```
`manuscript\billiard_ball_universe.pdf` is a 180-page **draftnotes-off** build, while the tex ships
`\draftnotestrue` — so the PDF does not match what a rebuild produces (184 pp). Leave it behind and
rebuild on the desktop.

**5. The staged reader draft on the laptop Desktop** — superseded.
```
C:\Users\bruger\Desktop\The Billiard Ball Universe - reader draft.pdf
```
Predates commit `7ccb004`: says "local ratio" six times, "local surplus" none. Do not propagate it,
and do not send it. See `process\TODO-NIELS.md` §1 for the re-cut recipe. If the July cut is wanted
for the record, it is already on the external drive as
`E:\Niels\Proj-2026\Everything\code-claude\bbu_reader_draft_2026-07.pdf`.

**6. Scratchpad working scripts** — deliberately not carried. The `ots` wrapper, the patch
appliers and the census scripts were session-scratch; the recipes that matter are recorded in
`memory\laptop-environment-quirks.md` and in `record\`. Rewriting them takes a minute.

---

## Expect on the desktop, after the pull

The **pre-REPO-2 duplicate pile is probably still sitting at the desktop's repo root** —
`TODO.md`, `billiard_ball_universe.tex`, `ref.bib`, `build.bat` and ~20 more, plus Dropbox-style
`TODO (32).md` conflict copies. They were verified stale and deleted on the laptop, but they were
untracked, so **git did not carry the deletion**. Tells: the root `.tex` lacks
`\graphicspath{{../}}`; the root `build.bat` lacks the makeindex step. The tracked copies under
`manuscript\`, `process\`, `record\` are authoritative. Full account in `process\TODO-NIELS.md`
under "Machine note".
