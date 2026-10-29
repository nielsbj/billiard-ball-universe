# audiobook/ — the AI-narrated audio edition pipeline

*Started 2026-10-29 (author's decision: "we will do our best, but it is an
experiment"). The route is author-owned end to end, like everything else in
this project: ElevenLabs Studio production (~$99, one month of Pro, cancel
after), **we keep the master**, no exclusivity, no DRM, AI narration disclosed
— consistent with "A Note on How This Book Was Made".*

## What this is

A scripted conversion of the **verified ebook build** (`ebook/build/text/`,
never the tex directly) into a narration script — one plain-text file per
section plus a ledger of every point where reading aloud needs an author
ruling. One entry point:

```
python ebook/build_ebook.py              # refresh the source of truth first
python audiobook/make_narration_script.py
```

Output (gitignored, like all build output): `audiobook/build/script/*.txt`
(18 files, ~53k words ≈ 6 h at audiobook pace) and `audiobook/build/FLAGS.md`
(currently 92 flags: 38 footnotes, 23 figures, 26 math, 2 tables, 3 boxes).
A sweep for `[[` in the script files finds anything unresolved; the render
gate is **zero unresolved markers** — the audio sibling of zero-overfull.

## The flag policy (proposed defaults; the author rules each class)

| class | count | proposed default |
|---|---|---|
| FOOTNOTE | 38 | read inline at the marker, set off by a beat — the book's footnotes rescue terms and are in-voice; author strikes any that don't speak well |
| FIGURE | 23 | chapter plates stay silent; each diagram gets a one-or-two-sentence spoken bridge, drafted by code-claude **as a patch for author ruling** (prose is the author's) |
| MATH | 26 | spoken forms drafted the way the book already speaks numbers ("ten to the twenty-sixth", "a part in a thousand million million"), patch for ruling |
| TABLE | 2 | the wounds table is narrated row by row (the prose already reads it backward); same patch route |
| BOX | 3 | read in place, introduced plainly |
| SPEAKER (Ch. 3) | 29 | **single narrator**, speaker names spoken ("Kai." / "Me.") — one voice arguing with itself is truer to how the chapter was made than two synthetic actors |
| PAUSE (❦) | — | long break at render time |

Citations are stripped silently (109 of them) — standard audiobook practice;
the references live in print/ebook/PDF. Skipped sections: titlepage and
kolofon (replaced by short authored opening/closing credits, to be drafted),
references, the index. Kept: dedication, How to Read, all chapters, Coda,
Epilogue, the how-made note, both appendices (the Dictionary is short and
in-voice; strike it on review if it doesn't listen well).

## Open author decisions (the gate list)

1. **Voice** — pick from ElevenLabs samples; proposal: calm, unhurried,
   neutral-transatlantic register. (A cloned own-voice is possible but a
   different decision entirely; not proposed.)
2. **Flag resolutions** — rule the drafted patches (footnote keeps/strikes,
   figure bridges, math spoken forms, wounds-table narration).
3. **Credits scripts** — opening and closing, including the AI-narration
   disclosure sentence (and whether the how-made note gains one sentence
   naming the narration; recommendation: yes, it is the note's whole ethos).
4. **ISBN** — the audio edition needs its own from forlagsnummer 977519.
5. **Price** — free/pay-what-you-want on the site beside the sold copies
   mirrors the PDF stance; store pricing is the author's.

## Distribution (decided by platform policy, not by us)

- **Spotify** (accepts ElevenLabs narration, labeled), **Google Play Books**,
  **Kobo (Kobo Writing Life)**, and the book's own site. No exclusivity
  anywhere.
- **Not Audible**: ACX requires human narration (per policy as of Oct 2026);
  Audible has said third-party TTS acceptance is coming — the master waits
  ready. Amazon's own Virtual Voice is invite-only US beta and ties Kindle+
  audio to KDP Select, which stays OFF.
- **Pligtaflevering**: the audio edition is its own deposit — same two doors
  as the EPUB (DBC e-material form + KB aflevering.kb.dk), on release day.

## Render and delivery spec (researched 2026-10-29)

The three target stores converge on one spec, so there is a single master
target and no per-store encode:

| property | value |
|---|---|
| container | MP3, **constant** bit rate (VBR is rejected) |
| bit rate | 192 kbps or higher |
| sample rate | 44.1 kHz |
| peak | −3 dBFS, not exceeded |
| loudness | −23 to −18 dBRMS |
| noise floor | below −60 dBFS |
| structure | **one file per chapter**, with metadata |

Spotify also accepts a single M4B with chapter markers; per-chapter MP3 is the
common denominator and is what we will produce. The 18 script files already
match the one-file-per-chapter shape, which is why the pipeline is split that
way rather than into one long document.

This is why the ElevenLabs **Pro** tier is the right one: it outputs 44.1 kHz
PCM, so the chain is `PCM/WAV per segment → concatenate per chapter → master
(loudness-normalise, peak-limit) → encode 192 kbps CBR MP3 → verify`. Starting
from a lossy 192 kbps render and then normalising would be a second generation
of loss for no saving.

**Prerequisite not yet met on this machine:** the `ffmpeg` on PATH is a 2013
build with no `loudnorm` filter (only `volumedetect`). The mastering stage
needs a current ffmpeg; install before render day.

## Status

- 2026-10-29 — pipeline built and run clean against the as-published ebook
  text: 18 script files, 53,049 words, 92 flags, 0 unplanned-markup errors.
  Next: draft the flag-resolution patches and the two credits scripts for
  ruling; voice samples after that; no ElevenLabs subscription needed until
  render day.
