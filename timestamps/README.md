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

## 2026-08-21-final-text — the finished text (interim stamp)

**Kind: interim protection stamp, not the release anchor.** Taken because the finished 206 pp book
lay outside every existing anchor: OTS-1 covers a ~142 pp draft from 30 July, and OTS-3 is
deliberately sequenced after proof approval because it wants the tagged commit hash. That sequencing
is right for proving *what was published* and useless for proving *when the text existed*. This
closes the second gap and nothing else.

**Anchored state:** commit `2de4de24080f7c8ca1bd9a1d084f30c6134579ab`, working tree clean; interior
206 pp both editions at 0 errors / 0 Overfull / 0 Float-too-large / 0 undefined / 0 collisions; spine
0.5150 in; ISBN 978-87-977519-1-6.

**Seven proofs, all four calendars each** (a.pool + b.pool opentimestamps.org, a.pool.eternitywall,
ots.btc.catallaxy):

| proof | binds sha256 |
|---|---|
| `ANCHOR-2026-08-21-final-text.txt.ots` | `5234ce36…8e0d58ed` (the anchor itself) |
| `billiard_ball_universe.tex.ots` | `c279d309…c5d776e5` |
| `ref.bib.ots` | `5be3836a…fd53e402` |
| `cover_wrap.tex.ots` | `ce6d20b9…28f8fc4e` |
| `BBU_interior_print_206pp.pdf.ots` | `512ba94c…c0539b43` |
| `BBU_interior_digital_206pp.pdf.ots` | `6c5b3208…44a6e2ea` |
| `BBU_cover_wrap_206pp.pdf.ots` | `45861599…49689748` |

Each proof's recorded hash was read back with `ots info` and checked against the anchor; all six file
hashes match, and the three PDF hashes also match `FINAL/1_upload/CHECKSUMS.sha256`.

**The anchor alone would have sufficed** — it carries all six hashes, so stamping it timestamps them
transitively. The six direct proofs are redundancy, and they cost nothing: stamps are free and the
calendars batch thousands of hashes into one Bitcoin transaction.

**Status: PENDING** as of 2026-08-21. `ots upgrade` immediately after stamping returned
*"Pending confirmation in Bitcoin blockchain"* from all four calendars with no txid yet — normal
within the first hours. Per the runbook, *"Failed! Timestamp not complete"* is **not** an error and
**not** a lost proof.

**Next: run `ots upgrade` on each `.ots` in this folder in a day or so**, then record the block
heights here (anchors stay frozen; status lives in this README). If any proof is still pending after
about three days with no txid appearing, escalate rather than retrying silently.

**On the PDF proofs specifically.** pdflatex embeds a build timestamp, so rebuilding from the same
sources does **not** reproduce these bytes. Those three proofs are worth something only while those
exact files survive — they live in `FINAL/1_upload/` with their `.ots` beside them, and `FINAL/` is
gitignored. The `.tex`/`.bib` proofs have no such problem: those files are committed, and git keeps
them byte-exact forever. **If the PDFs are lost, nothing that matters is lost** — the sources are
anchored, and authorship rests on the sources.

## first-edition-1.0 — at release (OTS-3, pending)

The release anchor per `process/FLIP_CHECKLIST.md`: tagged commit hash + sha256 of the final
interior PDFs (digital + print), final cover PDF, and the tex; stamp, upgrade, record here.

**What is not yet stamped, stated plainly:** the finished book. OTS-1 covers the draft as it stood on
**30 July** — 142-odd pages, before the hostile read, the index, both plates, the ISBN, the sanguine
cover, and P17–P19. The book now standing at 206 pp is **outside every existing anchor**. That is by
design (the release anchor wants the tagged commit hash, which does not exist until the proof is
approved), but it means priority-of-authorship for everything written since 30 July currently rests
on git history alone, not on a Bitcoin attestation. If the gap matters, an interim stamp of the final
text is free and independent of OTS-3 — see the runbook's Rule 2 on interim stamps.

## The Windows OpenSSL gotcha — diagnosed and fixed on this desktop, 2026-08-21

`ots` dies on import with:

```
File "...\site-packages\bitcoin\core\key.py", line 27, in <module>
    _ssl = ctypes.cdll.LoadLibrary(
        ctypes.util.find_library('ssl.35') or ctypes.util.find_library('ssl') or ctypes.util.find_library('libeay32'))
TypeError: LoadLibrary() argument 1 must be str, not None
```

**It is OpenSSL, not libsecp256k1.** `python-bitcoinlib` 0.12.2 asks ctypes for an OpenSSL DLL under
three Unix-ish names; on Windows all three return `None`, and `LoadLibrary(None)` raises. The client
itself is fine — nothing about OpenTimestamps is broken.

**The fix** (first worked out in the *Synthesized Roots* project, whose `timestamp_log.md` recorded
it): copy Python's own `libcrypto-3.dll` into a folder under the name `libeay32.dll` and put that
folder on PATH. The shim already existed here from 30 July:

```
C:\Users\niels\AppData\Roaming\Python\Python314\ssl-shim\libeay32.dll   (5.0 MB)
```

**What was actually wrong on 2026-08-21 was only PATH.** The shim was never added to the persistent
user PATH, so it worked in whichever shell had prepended it by hand and failed everywhere else — for
weeks, silently, until someone tried to stamp. **Fixed durably:** the shim folder is now the first
entry of the *user* PATH (registry), so every newly-opened terminal has a working `ots`. Verified by
rebuilding PATH from the registry and running `ots --version` → `v0.7.2` and `ots info` against
`2026-07-30-draft/billiard_ball_universe.pdf.ots`, which reproduced the recorded file hash
`25bf5f23…5735e02`.

*Note for anyone scripting this:* `ots` exit codes are sane — `0` on success, `2` on a missing file.
A `255` seen in a shell pipeline is a broken pipe from truncating the output (`| Select-Object
-First N`), not an `ots` failure.

**Already-running processes keep their old PATH.** If `ots` still fails in a terminal that was open
before this change, close it and open a new one.
