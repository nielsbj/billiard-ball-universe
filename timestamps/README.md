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

**Upgraded 2026-08-01 (complete)** — Bitcoin attestations embedded in all seven proofs, each
carrying the same three blocks: 960468 / 960481 / 960506 (four calendars, two of which landed in
one block). Earliest 960468, mined 2026-07-31 21:25:57 UTC — after the 20:50 UTC stamping, as it
must be. Cross-check: all three block merkle roots per blockstream.info match the roots the proofs
commit to —

| block | mined (UTC) | merkle root |
|---|---|---|
| 960468 | 2026-07-31 21:25:57 | `ef3daa3d6429f72ef787192ce62d31900529e6aa6d426728462c37ccef82db83` |
| 960481 | 2026-07-31 23:51:35 | `0264e6374374f231cad4d10f113753d5e5b969dea45d551c08d6f00a07da2dfc` |
| 960506 | 2026-08-01 03:50:58 | `d712fad081aad2c0b67c491ef830f18ee5d44a064b42e9a5e8f1a412faa99227` |

The anchor still hashes to its stamped value (`90d8286d80a2f98c19937da2293874301596c13b8291b32ae4f2b686a257e413`),
so it verifies in place — the never-edit-an-anchor rule held.

## first-edition-1.0 — at release (OTS-3, pending)

The release anchor per `process/FLIP_CHECKLIST.md`: tagged commit hash + sha256 of the final
interior PDFs (digital + print), final cover PDF, and the tex; stamp, upgrade, record here.
