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

## Remaining tail

- Check in ~72 h: ebook live at $6.99 with the formats linked on one product
  page, AND the paperback showing the new back-cover headline.
- Digital pligtaflevering: an ebook edition has its own legal-deposit rule
  (digital works are covered by pligtaflevering — the KB route for e-books
  differs from the physical one). Research and discharge once the ebook is
  live; noted in the TODO-NIELS row.
- Optional v1.1 polish, batched for some future correction: promote figure
  captions into image alt text and upgrade the KDP accessibility answer from
  "Some" to "All".
