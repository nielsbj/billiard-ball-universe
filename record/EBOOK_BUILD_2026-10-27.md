# Ebook edition — pipeline built and first EPUB produced, 2026-10-27

Same session as the headline rewording (`COVER_HEADLINE_2026-10-27.md`) and
the author's re-sequencing ruling: **ebook before IngramSpark** ("ebook is
important to start selling, IngramSpark not so much" — the Phase 2 guide
keeps, nothing in it goes stale except fee figures already flagged).

## What was built

`ebook/` — a four-stage scripted pipeline (`build_ebook.py` + `ebook.css` +
`README.md`), master tex untouched, producing
`ebook/build/billiard_ball_universe_ebook.epub` (EPUB 3, 7.6 MB, 21 spine
items, cover = the paperback front panel cropped from `cover_wrap.pdf` at
300 dpi — so it carries the 2026-10-27 headline automatically).

- All 25 figure environments render (16 TikZ compiled standalone at print
  text width, 300 dpi; art plates pass through as JPEG); captions stay text.
- 38 footnotes as EPUB 3 popup notes; 109 citation marks linked to a
  references list rendered from the `.bbl`; figure numbers from the `.aux`.
- Converter fails the build on any unrecognised TeX — zero warnings at the
  recorded build.

## Verification (full table in `ebook/README.md`)

Calibre AZW3 smoke conversion clean; XML well-formedness per file; word-count
ratio 0.950 vs `pdftotext` (missing mass = index + TOC + running heads);
voice-rule key-phrase sweep all present; footnote count 38 = 38 (the "40"
in a naive grep is two `\footnotesize`); citation numbers spot-checked
against the printed page (`[66]` Maxwell, `[81, pp. 517–522]` Poincaré —
exact match); visual review of part/chapter/dialogue/figure/table/references
pages via a Calibre PDF render.

## Deliberate deviations awaiting the author's approval

1. Kolofon: ebook ISBN **978-87-977519-4-7** line added above the paperback
   line; "Typeset by the author in Palatino." → "Typeset by the author; the
   print edition is set in Palatino."
2. Index omitted in v1 (nav + device search instead; source anchors intact).
3. References re-rendered from `.bbl` fields — faithful but not
   byte-identical to the print page.

No other content differs from the print interior.

## Same day, later: KDP draft created — and the previewer caught a bug

The Kindle eBook was set up as a **draft** on KDP (author authorized browser
work; nothing published): all metadata inherited from the paperback and
verified (title, subtitle, author, description, the same three categories and
seven keywords, rights, audience), plus ebook-specific settings —
**DRM = No** (author's call in-session: "no need to use drm"; acknowledgment
ticked; note: permanent once published), **ISBN 978-87-977519-4-7** +
publisher "Niels Bonde Jensen" (KDP's ebook ISBN field exists after all),
AI-content answers identical to the paperback's, accessibility = "Some
informative images include alternative text" (alts exist but are labels, not
descriptions — a future build could promote captions into alts and upgrade
this answer).

**Amazon's own previewer then caught a converter bug the local review had
missed:** the eight `\chapterart` plates leaked as literal `ARTTOKEN:…` text
(the token regex demanded an `art/` prefix the macro argument doesn't carry).
Fixed, a leaked-token class check added to the build's failure conditions,
EPUB rebuilt and re-uploaded; KDP reprocessed clean. The previewer's "9
possible spelling errors" were all verified false positives — *massion* (the
book's own coinage, 7 hits) and two DOI fragments in the references — and
marked ignored in the quality panel.

## PUBLISHED — same day, 2026-10-27

The author reviewed the build in KDP's online previewer (no Kindle device
needed or owned) and approved: *"it works"*, *"it is all fine"* — which
closed the rendering verdict and the three deviation rulings. Price picked
via explicit choice: **$6.99 USD** (the 70 % band had quietly expanded to
$2.99–$12.99). Pricing page settings verified before the click: KDP Select
**not enrolled**, territories worldwide, 70 % plan, all marketplace prices
auto-converted from the US price (one UI quirk: the conversion only fires on
a real change event — same-value retyping does nothing). Converted file
3.17 MB → $0.47 delivery → **$4.56 royalty per US sale**. Amazon.in is 35 %
by KDP rule (70 % there requires Select). "Publish Your Kindle eBook"
clicked; **"Your Kindle eBook has been submitted"** — status In review, live
within ~72 h, ASIN assigned on approval.

Both formats are now in review simultaneously (the paperback's cover
revision from this morning, and the ebook's first publication).

## Same day, later still: timestamped, and the deposits set in motion

- **OTS-stamped.** The exact uploaded bytes (sha256 `0f434f41…beb1f75a`) and
  a frozen ANCHOR file are stamped in
  `timestamps/2026-10-27-ebook-first-edition/` (four calendars, Bitcoin
  attestation pending as always). The EPUB bytes themselves stay out of the
  public repo (paid product file) — preserved in `nbj/ebook-deposit/`, which
  doubles as the deposit copy.
- **DBC: SUBMITTED 2026-10-27** via the "Anmeld e-bog til registrering"
  service-desk form, EPUB attached, full metadata, **reference SDKUN-38862**,
  confirmation to the letterbox. Only Publizon-distributed e-books deposit
  automatically; this one is not on Publizon, so it goes by this form — the
  sending IS the registration, as with the physical copies. (Author's
  correction, same day: the ebook is NOT Amazon-only — the book is also
  freely available as PDF from the website and the public repository; Amazon
  is where the EPUB edition is *sold*. The DBC submission itself stated the
  operative facts correctly: sold via Amazon, not Publizon, website linked.)
- **KB: waiting on Niels** — the e-book pligtaflevering is a self-service
  upload portal behind **MitID** (pro.kb.dk/en/legal-deposit/e-books), so no
  one can do it for him. Ten-minute walkthrough with paste-ready metadata
  appended to `process/SEND_BOOKS_KB_DBC.md` §"THE E-BOOK EDITION".

## KB: DONE same day too — both deposits discharged on publication day

The e-book pligtaflevering to KB was completed 2026-10-27 at 14:43 through
the aflevering.kb.dk form in Niels's authenticated session (all metadata,
EPUB + cover attached, "Tak for dit upload", Sendt list shows Gennemført).
Niels's own earlier submission at 14:08 means KB holds the deposit twice —
harmless, reconciled on ISBN. With DBC's SDKUN-38862 from the same
afternoon, **the e-book's entire deposit picture closed on publication day**,
before the listing even cleared Amazon's review.

## Remaining tail

- Check in ~72 h (~Oct 30): ebook live at $6.99 with the formats linked on
  one product page, AND the paperback showing the new back-cover headline.
- Evidence items: save the DBC confirmation (ref SDKUN-38862) and one KB
  receipt e-mail.
- Optional v1.1 polish, batched for some future correction: promote figure
  captions into image alt text and upgrade the KDP accessibility answer from
  "Some" to "All".
