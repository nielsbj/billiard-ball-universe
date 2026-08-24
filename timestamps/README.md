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

**Status on the day: PENDING.** `ots upgrade` immediately after stamping returned *"Pending
confirmation in Bitcoin blockchain"* from all four calendars with no txid yet — normal within the
first hours. Per the runbook, *"Failed! Timestamp not complete"* is **not** an error and **not** a
lost proof.

**Upgraded 2026-08-23 (complete).** `ots upgrade` on all seven proofs returned *"Success! Timestamp
complete"*, one attestation from each of the four calendars, exit 0. Every proof now carries the same
four Bitcoin attestations — the calendars batched all seven hashes into the same transactions, which
is why the block set is identical across the folder:

| block | mined (UTC) | merkle root |
|---|---|---|
| 963423 | 2026-08-21 10:14:08 | `bb37104b569d70c9e6950e2b7641a13132ea52c6962999d8c877b6e67a999bf3` |
| 963424 | 2026-08-21 10:15:05 | `1d721e08b7cff9c7ab0c3740a662b810b64021429a82867dc7bf293b189866e8` |
| 963452 | 2026-08-21 14:17:59 | `07aded43f242bb5d7680dd7f4a0155b98d7a9eeb4def17a882367f11947030ba` |
| 963480 | 2026-08-21 19:49:07 | `252ecc2c627aec0a8d607a3efb07aa95675cbe9bb2e32c2a6fb545d7f89b19c3` |

Earliest attestation is block 963423, mined 2026-08-21 10:14:08 UTC. The stamp was taken between
commits `2de4de2` (09:51:03 UTC) and `3287c3f` (09:56:24 UTC), so the block is roughly twenty minutes
after the stamping — later, as it must be.

**Cross-check, done without a Bitcoin node.** Each proof's operation chain was executed to the hash
it commits to at each attestation, and those hashes were compared against the block merkle roots
reported by blockstream.info. All 28 pairs (7 proofs × 4 blocks) match the table above. `ots verify`
still cannot run here — it wants a local node — so this replaces it rather than being skipped; the
ladder is in the gotcha section below.

The anchor still hashes to its stamped value
(`5234ce36210d833a1dd9939c93102b7fbd60dccb88e6a26f4abe9ac78e0d58ed`), so it verifies in place. Only
the seven `.ots` files changed in the upgrade; the anchor text was not touched.

**What this now proves:** the 206 pp finished text, its sources and its three release PDFs existed in
exactly these bytes before 2026-08-21 10:14:08 UTC. The second gap named above is closed. OTS-3 is
unaffected and still waits on the tag.

**On the PDF proofs specifically.** pdflatex embeds a build timestamp, so rebuilding from the same
sources does **not** reproduce these bytes. Those three proofs are worth something only while those
exact files survive — they live in `FINAL/1_upload/` with their `.ots` beside them, and `FINAL/` is
gitignored. **Those travelling copies were upgraded too, on 2026-08-23** — they had been left at the
pending state by the first upgrade run, which only walked this folder, so for two days the proofs
that actually accompany the PDFs were the weak ones. They now carry the same four attestations.
Anything that copies a PDF out of `FINAL/` must take the upgraded `.ots` with it. (The three
PDFs were re-hashed the same day and still match `CHECKSUMS.sha256`.) The `.tex`/`.bib` proofs have no such problem: those files are committed, and git keeps
them byte-exact forever. **If the PDFs are lost, nothing that matters is lost** — the sources are
anchored, and authorship rests on the sources.

## Standing audit — 2026-08-23

Every proof in this folder re-inspected, not just the batch being upgraded. Result: **all eighteen
committed proofs are complete**, and every recorded block above is what the files actually carry
(4 / 4 / 3 attestations for the three batches — the 31 July batch has three because two calendars
landed in one block, as its section already says).

At the time of the audit all three source files the 2026-08-21 batch stamps still hashed to their
anchored values in the working tree — `billiard_ball_universe.tex` `c279d309…`, `ref.bib`
`5be3836a…`, `cover_wrap.tex` `ce6d20b9…`. **Patch P20, later the same day, changed the manuscript**,
so the tex no longer matches its anchored hash; `ref.bib` and `cover_wrap.tex` still do, and the
30 July draft PDF committed here is still `25bf5f23…5735e02`. Verify the tex proof with
`ots verify -f` against a checkout of `2de4de2`, not against the working tree.

**No re-stamp was taken for P20, deliberately.** P20 is a pure deletion — every word of the text as
it now stands was already inside the 2026-08-21 anchor, so nothing newly written needs protecting and
priority of authorship is untouched. A stamp proves *not later than*; removing a sentence cannot
weaken that. The two superseded interior PDFs' proofs moved with their bytes to
`FINAL/_superseded_2026-08-21/`. OTS-3 will anchor whatever the tag finally points at.

`ots upgrade` leaves a `.ots.bak` beside each proof it rewrites. Those are pre-upgrade copies,
superfluous once the upgrade succeeds, and `*.bak` is gitignored — but three of them are sitting in
`FINAL/1_upload/`, which is the folder the release files are uploaded from. Harmless, worth not
mistaking for the real proofs.

## 2026-08-24-p21-cover — the P21 cover (interim stamp)

**Kind: interim protection stamp, not the release anchor.** Taken because P21 changed one sentence on
the back cover — "Where the toy universe breaks, the breaks are shown" became "Where the world wounds
the toy, the wounds are shown" — and unlike P20, which only deleted, **P21 adds words**: the 21 August
anchor cannot say *not later than* about words it never contained. Full patch record in
`record/PROSE_PATCH_P21_wounds_not_breaks_2026-08-24.md`.

**Anchored state:** commit `366720278d3a82a2cdc7ddae221bb8a1fffb8c57`; cover rebuilt at 0 errors /
0 Overfull, geometry unchanged (206 pp, spine 0.5150 in, wrap 12.7650 × 9.25 in). The manuscript,
`ref.bib` and both interior PDFs are unchanged since 21 August and are not re-stamped.

**Three proofs, all four calendars each:**

| proof | binds sha256 |
|---|---|
| `ANCHOR-2026-08-24-p21-cover.txt.ots` | `59afa34f…c8c28a1c` (the anchor itself) |
| `cover_wrap.tex.ots` | `b0d6dff0…2830a1f7` |
| `BBU_cover_wrap_206pp.pdf.ots` | `bd183ddd…2474eb8` |

Each proof's recorded hash was read back with `ots info` and matched the anchor and
`CHECKSUMS.sha256` on the day. The superseded 21 August wrap PDF's proof moved to
`FINAL/_superseded_2026-08-21/`, joining the P20 interiors'.

**Superseded by P22 within hours, same day.** The P21 wrap PDF's bytes were replaced by the P22
build, and its travelling proof moved to `FINAL/_superseded_2026-08-24/`. The tex proof here stays
meaningful — those bytes are committed at `3667202`, verify with `ots verify -f` against that
checkout. The upgrade below still applies to this folder's proofs; they prove the P21 state, which
is a real state the record keeps.

**Consequence for the 2026-08-21 batch:** `cover/cover_wrap.tex` no longer matches its anchored hash
`ce6d20b9…` — verify that proof with `ots verify -f` against a checkout of `2de4de2`, exactly as the
manuscript's since P20. Of the 21 August source proofs only `ref.bib` still verifies against the
working tree.

**Status on the day: PENDING.** Stamped 2026-08-24; all four calendars accepted the submission.
Upgrade after confirmation and record the block heights here.

## 2026-08-24-p22-cover — the P22 cover (interim stamp)

**Kind: interim protection stamp, not the release anchor.** P22, hours after P21, changed one word in
the back-cover blurb — "As a child, Niels Bonde Jensen *decided* that two things were cheating"
became "*felt*" — the book's own staging ("I felt it then and I will say it stronger now"), which the
blurb had compressed. A substituted word lies outside every earlier anchor, so the P21 rule applies:
new words get their own stamp. Full patch record in
`record/PROSE_PATCH_P22_felt_not_decided_2026-08-24.md`.

**Anchored state:** commit `7874a1c1123c3d094af8bcb142dc92aecb40bffe`; cover rebuilt at 0 errors /
0 Overfull, geometry unchanged. The manuscript, `ref.bib` and both interior PDFs are unchanged since
21 August and are not re-stamped.

**Three proofs, all four calendars each:**

| proof | binds sha256 |
|---|---|
| `ANCHOR-2026-08-24-p22-cover.txt.ots` | `fcf952b1…9fa50ebf` (the anchor itself) |
| `cover_wrap.tex.ots` | `3036c9a6…3e0bdd96` |
| `BBU_cover_wrap_206pp.pdf.ots` | `45717b47…4c821e34` |

Each proof's recorded hash was read back with `ots info` and matches the anchor; the PDF hash also
matches `FINAL/1_upload/CHECKSUMS.sha256`. The PDF's travelling `.ots` sits beside it in
`FINAL/1_upload/`; the copy here is the archive one.

**Status on the day: PENDING.** Stamped 2026-08-24; all four calendars accepted the submission.

**Superseded by P23 the same morning.** The P22 wrap PDF's bytes were replaced by the P23 build; its
travelling proof moved to `FINAL/_superseded_2026-08-24-p22/` (its own folder — the P21 proof already
holds the filename in `_superseded_2026-08-24/`). The tex proof here verifies against a checkout of
`7874a1c`.

## 2026-08-24-p23-cover — the P23 cover (interim stamp)

**Kind: interim protection stamp, not the release anchor.** P23, the day's third cover patch, cut
"by name" from the Bell sentence — the book's own phrasing is bare (Ch. 7: "it is aimed at the first
sentence of this book"). It came out of chat-claude's fact-checked pass over the KDP description,
which also grew two listing-only sentences; the cover change is the shared-sentence part. Full patch
record in `record/PROSE_PATCH_P23_kdp_description_2026-08-24.md`.

**Anchored state:** commit `e0bc4251772f41577a52d7e7fb54efcf2f9d713b`; cover rebuilt at 0 errors /
0 Overfull, geometry unchanged. The manuscript, `ref.bib` and both interior PDFs are unchanged since
21 August and are not re-stamped.

**Three proofs, all four calendars each:**

| proof | binds sha256 |
|---|---|
| `ANCHOR-2026-08-24-p23-cover.txt.ots` | `da6b110b…3abaacd4` (the anchor itself) |
| `cover_wrap.tex.ots` | `c586ab71…88546a47` |
| `BBU_cover_wrap_206pp.pdf.ots` | `b2c80fb0…172321a0` |

Each proof's recorded hash was read back with `ots info` and matches the anchor; the PDF hash also
matches `FINAL/1_upload/CHECKSUMS.sha256`. The PDF's travelling `.ots` sits beside it in
`FINAL/1_upload/`; the copy here is the archive one.

**Status on the day: PENDING.** Stamped 2026-08-24; all four calendars accepted the submission.

## 2026-08-24-p24-interior — the P24 interior (interim stamp)

**Kind: interim protection stamp, not the release anchor.** On KDP upload day the previewer rejected
the print interior: the folio's ink sat 13 pt from the bottom trim, inside KDP's 18 pt minimum, on
191 of 206 pages (KDP listed a truncated 20). P24 is one geometry line — `footskip=36pt` — lifting
the folio baseline to 25 pt; **not one word of the book changed**, and pagination was proven
identical page by page. Both interiors are new bytes. Full record in
`record/LAYOUT_PATCH_P24_folio_raised_2026-08-24.md`.

**Anchored state:** commit `dff00f659cbdb8df4b9d2e842be99c08ff551e05`; both editions 206 pp at
0 errors / 0 Overfull / 0 Float-too-large / 0 undefined; all 206 pages now satisfy KDP's margin
rules; spine and the P23 cover unchanged. `ref.bib` and the cover are not re-stamped.

**Four proofs, all four calendars each:**

| proof | binds sha256 |
|---|---|
| `ANCHOR-2026-08-24-p24-interior.txt.ots` | `14548d79…04222c70` (the anchor itself) |
| `billiard_ball_universe.tex.ots` | `14657f3b…ef789c3e` |
| `BBU_interior_print_206pp.pdf.ots` | `2b72c2f2…aed40bf0` |
| `BBU_interior_digital_206pp.pdf.ots` | `08250967…ec52af6` |

Each proof's recorded hash was read back with `ots info` and matches the anchor; the PDF hashes also
match `FINAL/1_upload/CHECKSUMS.sha256`. The PDFs' travelling `.ots` sit beside them in
`FINAL/1_upload/` — for the first time since P20 the interiors travel with proofs again (P20 took no
re-stamp, so its interiors had none). The superseded P20 interiors' bytes are simply gone; they
carried no proofs to move.

**The manuscript tex has now diverged twice from the 21 August anchor** (P20, then P24). Its 21
August proof verifies against a checkout of `2de4de2`; its current bytes are anchored here.

**Status on the day: PENDING.** Stamped 2026-08-24; all four calendars accepted the submission.
**Upgrade all four of the day's batches (p21, p22, p23, p24) together** after confirmation and
record the block heights here.

## 2026-08-24-archives — the conversation archives, second batch

**Kind: pre-scrub archive stamp, under the standing rule in `conversations/README.md`** — every
batch of development conversations is stamped before any redaction exists. The first batch
(2026-07-31-archives) anchors the record to 30 July; this one anchors the working chats since —
the book's completion, the release preparation, the P20–P23 rulings — via a Claude account export
taken 2026-08-24 16:23 UTC, scope last-30-days (full-history links failed as single-use and
consumed; the 30-day filter selects by activity, so the active chats are included in full: 3
conversations, the largest updated through 2026-08-24T09:31Z). Continuity with the first batch is
by overlap; no gap. The export files live in `archive/export-2026-08-24/` outside git, `.ots`
beside them; copies of the proofs are committed here.

**Five proofs, all four calendars each** — the anchor (`585252bc…e142fdc0`), `conversations-000.zip`
(`3858d35a…57e196c5`), `projects-000.zip` (`be09193b…0ce9f7ef`), `light_metadata-000.zip`
(`7b25fce5…cd94a045`), and the export manifest (`4f83ca17…4597a67c`). Each read back with
`ots info` and matching the anchor.

**Status on the day: PENDING.** Stamped 2026-08-24; all four calendars accepted. Upgrade with the
day's other batches and record the blocks here.

## first-edition-1.0 — at release (OTS-3, pending)

The release anchor per `process/FLIP_CHECKLIST.md`: tagged commit hash + sha256 of the final
interior PDFs (digital + print), final cover PDF, and the tex; stamp, upgrade, record here.

**What is not yet stamped, stated plainly:** the *published* state — the tagged commit and whatever
the physical proof turns out to change. The **text** is no longer the gap: the 2026-08-21 interim
stamp covers the 206 pp book, its sources and its three release PDFs, confirmed in Bitcoin on
2026-08-23. What OTS-3 adds is the tag hash, which does not exist until the proof is approved.

For the record, since it was true for three weeks and is worth remembering: between 30 July and
21 August the finished book lay outside every anchor — OTS-1 covers a ~142 pp draft, before the
hostile read, the index, both plates, the ISBN, the sanguine cover and P17–P19 — so authorship of
everything written in that window rested on git history alone. That is what the interim stamp was
for.

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
