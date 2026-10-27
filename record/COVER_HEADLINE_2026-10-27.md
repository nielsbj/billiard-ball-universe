# Back-cover headline rewording — 2026-10-27

## The change

**Old headline** (back cover + first line of the Amazon description):

> A universe with no bottom — argued by an author who shows you where he loses.

**New headline** (author's pick, 2026-10-27, from three offered rewordings):

> A universe with no bottom — argued by an author who shows you where he loses, and what survives.

**Short online-listing blurb** (BOOK_COVER.md §3 variant), closing line brought into line:

> Not proof. Something rarer: an honest attempt that shows where it loses — and what survives.

## Why

The author's concern, verbatim in substance: the headline *"sounds like the idea has
lost, and it has not."* Assessment agreed in part: the full blurb resolves it — its
third paragraph opens "What survives is smaller and harder than what the author
walked in with…" — but the headline is read alone, as the largest text on the back
and the first line of the listing description, and a five-second reader can take
"loses" as the verdict on the thesis rather than on the rounds (the retracted
proof-of-B, the Kai concessions). The fix scopes the loss without deleting it; the
appended clause deliberately echoes the blurb's own "What survives…" opener. The
honesty hook stays — per the voice rules, concessions remain on the page.

## Files touched

- `cover/cover_wrap.tex` — headline re-broken as three lines
  ("…argued by / an author who shows you where he loses, / and what survives."),
  trailing `\vspace` 9pt → 6pt to absorb part of the added line height.
- `cover/BOOK_COVER.md` — §3 headline + short blurb variant updated, with a dated
  pointer to this file.

## Verification

- `pdflatex cover_wrap.tex` ×2: **0 errors, 0 Overfull**, PDF freshly written
  (mtime checked — the stale-PDF trap did not fire).
- Full-wrap render inspected visually at 100 dpi: headline balanced over three
  lines, blurb/pull-quote/bio all clear of the bottom frame, bio parbox still
  clears the KDP barcode reserve (2.9 in constraint untouched), spine and front
  panels unchanged, barcode region unchanged.
- Barcode not re-scanned: the barcode raster was not rebuilt or moved; the last
  decode check (2026-08-21, `9788797751916`) stands.

## Downstream — the new wording propagates, one-time, to:

1. **KDP — DONE same day (code-claude via browser, author-authorized).** The
   rebuilt wrap was uploaded as `BBU_cover_wrap_206pp.pdf` (house naming, same
   bytes as `cover/cover_wrap.pdf`), previewer run and approved (206 pp, no
   issues), the post-file-change AI-answers confirmation re-ticked (answers
   unchanged and still accurate), and the paperback re-published —
   **"Your paperback has been submitted", review up to 72 h**, listing stays
   live with the old cover meanwhile. Pre-publish verification on the Rights &
   Pricing page: list price intact ($14.99 / 12,99 € pattern), territories
   worldwide, **Expanded Distribution unchecked in all three places** (master,
   .com, .co.uk), barcode-is-mine declaration still checked.
   **Check after ~72 h that the live "Look Inside"/cover image shows the new
   headline.** [NIELS — eyeball only]
2. **Amazon listing description: NO CHANGE NEEDED — verified.** The live
   description (read from the KDP details form, 1,657 chars) does not contain
   the headline or any "loses" phrasing; it is the three-paragraph blurb only.
   Nothing to edit, nothing edited; the details page was left untouched.
3. **IngramSpark Phase 2**: the per-title template re-wrap starts from this
   corrected `cover_wrap.tex` — nothing extra to do; good timing, since no Ingram
   cover existed yet.
4. **Ebook edition** (decided this session, see below): listing copy inherits the
   new wording from day one.

## Ebook edition — decisions recorded same session (2026-10-27)

- The book **will** be sold as a Kindle ebook on Amazon, alongside the free PDF on
  GitHub (different audiences; the listing may say the PDF is free at the repo —
  house standard, concessions on the page).
- Quality target: **reflowable EPUB** built from the master tex ("would be nice if
  it were" — author). Format acceptance to be verified at KDP ebook setup.
- **Ebook ISBN: 978-87-977519-4-7** (own forlagsnummer 977519, assigned by the
  author 2026-10-27). Paperback stays 978-87-977519-1-6; the editions never share
  an ISBN.
- KDP Select stays OFF (digital exclusivity is foreclosed by the free repo PDF,
  deliberately). Non-exclusive publishing, 70 % band if priced $2.99–9.99.
- Sequencing: after IngramSpark Phase 2 (which is due now — deferred to
  October 2026 on 2026-09-25).
