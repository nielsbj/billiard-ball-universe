# timestamps/ — OpenTimestamps evidence

One folder per stamping event, named by date: `YYYY-MM-DD-<what>/`. Each folder holds a frozen
`ANCHOR-*.txt` (what was stamped and why, with sha256 hashes — **never edited after stamping**,
since the anchor is itself stamped) plus the `.ots` proofs. All evolving status — block heights,
upgrade state — lives here in this README, nowhere else. New batch = new folder; this file gains
a section.

**Verify**: `ots verify <file>.ots` (file beside its proof verifies in place; for files living
elsewhere, `ots verify -f <path-to-file> <file>.ots`). Proofs contain hashes and Merkle paths
only — public-safe. The stamped artifacts that are not committed here (export zips, conversation
extracts) live in `archive/` outside git, with copies on the external mirror.

## 2026-07-30-draft — the finished draft (OTS-1)

Anchor + manuscript tex + built draft PDF (byte-exact copy committed in the folder, recovered
2026-07-31 from the external-disk mirror) + the Claude account-export zip. The tex and
`cover/cover_wrap.tex` (hash in the anchor) are byte-exact in git at `f79ba9b`.

**Upgraded 2026-07-31 (OTS-2 complete)** — Bitcoin attestations embedded in all four proofs:
blocks 960284 / 960285 / 960302 / 960337 (one per calendar; earliest 960284, mined
2026-07-30 17:23:26 UTC). Cross-check: block 960284 merkle root
`5a53663606d29a437f3a23b1d6df29261a49aa067f8b354dc4e6388ab8d49c89` per blockstream.info matches
the proofs.

## 2026-07-31-archives — the conversation archives

The ChatGPT account-export zip (CONV-0c counterpart to the Claude export) + the five verbatim
book-conversation extracts, stamped pre-scrub so a future CONV-1 redaction can be proven honest
against the dated originals without revealing the export zips.

**Stamped 2026-07-31, upgrade pending** — run `ots upgrade` on the seven proofs (~a day after
stamping) and record the block heights here.

## first-edition-1.0 — at release (OTS-3, pending)

The release anchor per `process/FLIP_CHECKLIST.md`: tagged commit hash + sha256 of the final
interior PDFs (digital + print), final cover PDF, and the tex; stamp, upgrade, record here.
