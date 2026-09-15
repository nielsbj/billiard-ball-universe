# IngramSpark Phase 2 — setup guide for this book

*Researched 2026-09-12 (background brief, written up 2026-09-15). Primary
sources: IngramSpark User Guide v3.3 (24 Aug 2026) and File Creation
Guide (8.24.26), both current at research time; the login-gated price
sheet could not be read directly, so fee figures come from IngramSpark's
public FAQ plus trade press and are flagged where they conflict. The
ledger row is TODO-NIELS §5; this file is what that row points at.
Phase 2's own schedule ("two to three weeks behind KDP", live
2026-08-27) puts this due now.*

**The book: 6×9 paperback, 206 pp, b&w on crème, ISBN
978-87-977519-1-6 (own forlagsnummer — not a Bowker record), KDP list
$14.99, Expanded Distribution OFF from day one.**

## Headline

The good news is bigger than expected: **the spine maths is identical**
(0.0025"/page for crème on both platforms), and because Expanded
Distribution was never switched on, **no title transfer is needed** —
the book sets up as a plain new title. The August decision to keep ED
off paid off exactly as intended. The cover document does need
rebuilding onto IngramSpark's per-title template (a re-wrap, not a
redesign), and there is one genuine unknown — payment to a Danish
bank — that should be resolved *before* opening the account.

## 1. Account setup from Denmark

**Cost and requirements.** "There is no cost to create an account or
set up a new book" (FAQ). Needed: email, print-ready PDFs, the ISBN,
and **a valid credit/debit card on file** — mandatory even when nothing
is owed, because it backstops revisions, print orders and returns
charges (User Guide §3).

**Individual vs business.** The User Guide lists tax-form upload as
"(business accounts only)". As publisher of record with an own
forlagsnummer either classification is plausible. NOT VERIFIED which
way IngramSpark's onboarding classifies this, or whether an individual
account collects W-8BEN through a different flow.

**Tax.** Non-US individuals complete **W-8BEN** (entities: W-8BEN-E),
declaring foreign status and foreign TIN. Without it, US-source
royalties are withheld at the default **30%**. The US–Denmark tax
treaty reduces royalty withholding, but the reduced rate must be
claimed on the form (Part II). NOT VERIFIED: the exact treaty rate
IngramSpark applies for Denmark.

**Payment — this is the one to check first.** The complete set of
payout methods (User Guide §12):

- USD ACH direct deposit — must be a **US-based** bank, no minimum
- USD PayPal — **$30.00 minimum**
- CAD ACH — Canada-based, $25 minimum
- GBP BACS — UK-based, no minimum
- **EUR BACS — "must be EUROZONE based bank" — €25.00 minimum**
- AUD BACS — AU-based, $25 minimum

**Denmark is in the EU but not the eurozone, and there is no DKK
option.** Whether a Danish IBAN holding a EUR account satisfies
"EUROZONE based bank" is NOT VERIFIED, and the wording cuts against it.
The reliable fallback is **USD PayPal** with its $30 threshold —
on a single low-volume title that could mean payouts once or twice a
year. **Ask `ingramsparkinternational@ingramcontent.com` (Milton Keynes
handles non-US accounts) before opening the account.**

Two further traps in §3:

- **Currency selection is described as permanent**: "This information
  cannot be changed so make sure to select the correct currency." §12
  contradicts this (changes allowed, at most once per 180 days, may be
  suspended if used to chase FX gains). Treat it as effectively locked.
- **One account only, ever.** Multiple accounts can get titles
  cancelled.

Payment timing regardless of method: **90 days after the end of the
month of sale**.

## 2. Fees in 2026

| item | status |
|---|---|
| Title setup (print) | **Free** (removed 1 May 2023; Feb 2026 price sheet shows "Free" across currencies) |
| Annual / catalogue fee | **None** (User Guide §12) |
| Market access fee | **1.875% of local list price per distribution sale** (up from 1.5%, effective 1 Feb 2026) — $0.28/copy at $14.99 |
| Revision fee | **Disputed — see below** |
| ISBN | Irrelevant; 978-87-977519-1-6 is owned |

**The revision-fee conflict, stated honestly.** ALLi (22 Apr 2026)
reports the $25 revision fee eliminated "completely" as of 1 Feb 2026.
But the User Guide v3.3 — dated four months later — still says
revisions after eproof approval carry a **$25 fee**. One of these is
stale; ALLi is the better-sourced claim, but **assume $25 per
post-approval revision and confirm the live figure in-account before
approving the eproof.** Either way the practical rule is unchanged:
**revisions are free and unlimited until the eproof is approved**, so
get it right before approving.

**Print cost.** The Feb 2026 US sheet is reported (secondary source) as
$1.33 cover + $0.0146/page for b&w paperback on 50# stock → for
206 pp: **~$4.34/copy**. Treat as an estimate; confirm with
IngramSpark's own calculator; crème may differ slightly from white.

## 3. Title setup — what differs from KDP

### Spine — good news, with a catch

**IngramSpark uses 0.0025"/page for 50 lb crème — identical to KDP's
cream figure.** (The platforms diverge only on *white* stock:
0.002252"/page on both, but that's not this book.) So
**206 × 0.0025 = 0.5150"** on both, and the wrap geometry matches:
2×6 + 0.515 + 2×0.125 = **12.7650 × 9.25 in** — exactly the KDP wrap.
206 pages is even, satisfying IngramSpark's mod-2 spine requirement.

**The catch: the cover document must still be rebuilt.** IngramSpark
does not accept a flat wrap. Artwork must be placed within the crop
marks on **the template from their per-title generator**, and the
final PDF must be "created at the size it's received" — the template
canvas carries a white margin outside the bleed with trim marks, fold
marks, spine text and an internal barcode, so it is **larger than
12.765 × 9.25**; the exact canvas size is NOT VERIFIED (the generator
is login-gated and emits per-title files; allow up to 2 hours for
email delivery). **Verdict: the artwork is reusable at its existing
scale; the document is not.** Generate the template first (dashboard →
My Tools → Cover Template Generator), then re-lay the same art onto it.

### Cover requirements (File Creation Guide)

- Bleed **0.125"** all sides — same as KDP
- Type safety 0.25" recommended from trim; spine type safety 0.0625"
  each side (applies since 0.515" > 0.35")
- 300 ppi; **CMYK**; total ink ≤ **240%**; LPI 180
- **PDF/X-1a:2001 or PDF/X-3:2002**; naming `9788797751916_cov.pdf`
- Remove the template's pink/blue guide layers before export — left
  visible, **they print** (a common rejection cause)

**Two risks specific to this cover:**

1. **Colour space.** The wrap is authored in RGB via pdflatex. The
   guide: RGB is converted to CMYK before printing, colour shift is
   "the publisher's responsibility to correct" — and cream + sanguine
   are exactly the hues that shift visibly. **Convert deliberately**
   rather than letting Lightning Source do it.
2. **Barcode.** The real EAN-13 is right, but the guide requires
   barcodes "100% black only, and placed on a white box/background" —
   on the cream ground that means an explicit white patch behind it.
   LS will silently replace unscannable barcodes, possibly without
   notification.

### Interior PDF

Requirements (File Creation Guide, B&W Text): exact 6×9 trim for
non-bleed (already true), **grayscale**, 600 ppi line art / 300 ppi
grayscale images, all fonts embedded ("files with unembedded fonts
will be rejected"), single pages not spreads, no crop/printer marks,
rule lines ≥ 0.125 pt at 100% black (worth checking against the TikZ
figures), margins ≥ 0.5" recommended, ≤ 1.6 GB, naming
`9788797751916_txt.pdf`, **PDF/X-1a:2001 or PDF/X-3:2002**.

**Does the KDP interior pass as-is?** Nearly: 6×9 no-bleed at exact
trim, mathpazo fully embedded by pdflatex, TikZ grayscale. The one
formal gap is **PDF/X-1a compliance** — pdflatex emits PDF 1.5/1.7,
and PDF/X-1a forbids **live transparency**; if any plate or TikZ
element uses opacity or blend modes it must be flattened. Check:
Acrobat → Preflight → PDF/X-1a, or at minimum confirm every font shows
"(Embedded)". The guide says *preferred* format and non-PDF/X files are
accepted in practice — but it is the stated spec and the cheapest
pre-emptive fix.

### Upload and preflight

Two-stage validation: automated at upload, then human file review at
Lightning Source. **Turnaround to eproof: ~3 business days**; the
eproof (rasterised PDF) is available 30 days. Order a **physical proof
copy** before enabling distribution. Common rejections: wrong template
dimensions, guide layers left visible, unembedded fonts, spreads, ink
over 240%, low-res images.

## 4. Pricing, discount and returns

**Discount range:** minimum **40% US** / 35% UK-EU-AU, maximum 55%.
(The old 30% option no longer exists.) Minimums "can vary" — verify the
live figure on the title setup page. IngramSpark's own recommendation,
verbatim: "a wholesale discount of 53% to 55%, with a 'returnable'
status, generally allows for the widest availability" — with the
caveat that nothing guarantees any retailer stocks any book.

**Returns options** (§12):

- **No / Non-Returnable** — all markets
- **Yes-Deliver** — US/Canada only; wholesale cost **+ $3/book** to a
  US address, **+ $20/book** to a non-US address. From Denmark this is
  the worst option by a distance — never choose it.
- **Yes-Destroy** — all markets except Global Connect; wholesale cost
  only, books pulped.

**The honest trade-off, in numbers, at $14.99 list:**

| setting | wholesale | less ~$4.34 print | less 1.875% fee | net/copy |
|---|---|---|---|---|
| 40%, non-returnable | $8.99 | $4.65 | −$0.28 | **~$4.37** |
| 55%, Yes-Destroy | $6.75 | $2.41 | −$0.28 | **~$2.13** |

Trade-standard terms cost roughly **half the per-copy compensation**;
and under Yes-Destroy a single returned copy is charged back at full
wholesale ($6.75) — about three sales' worth — and the book is
destroyed. The User Guide itself says: if unsure, "consider starting
with non-returnable."

Two defensible positions:

- **55% + Yes-Destroy** — genuinely stockable; occasional chargebacks
  treated as a marketing cost. What actually maximises library and
  indie-bookshop uptake.
- **40% + non-returnable** — *orderable* everywhere (special orders,
  catalogues) without exposure; loses discretionary shelf-stocking,
  which for this title was unlikely regardless.

Given Phase 2's stated goal is reach rather than margin, and Amazon
revenue stays on KDP where the margin is much better, 55% + Yes-Destroy
is the stronger case — **but see the Amazon-sourcing asymmetry in §5
before setting it.**

**Returnable → non-returnable is a one-way door for 180 days**: all
Sellers must be notified and may return books for 180 days from
notice, at the publisher's cost throughout. **Change cadence:** price,
discount and returns changes must be in by **Thursday 23:59 US
Central** to take effect Friday and propagate.

## 5. The Amazon overlap

IngramSpark states the arrangement explicitly (User Guide §9): a book
can be on IngramSpark and on KDP "as long as you do not use their
Expanded Distribution option" — and decisively for this book: **"If
the title has never been in Expanded Distribution, it can be set up as
a new title on the IngramSpark account without having to go through
the title transfer process."** ED has been off from the start: no
transfer, no addendum, no support ticket.

**Amazon cannot be excluded inside IngramSpark for print.** Feeds go
to all Sellers; distribution is selected by market, not retailer; the
existing per-retailer exclusions (Amazon Kindle, Apple) are
ebook-only. Amazon receiving the feed is unavoidable — and harmless:

- Same ISBN → Amazon merges both sources into **one product page**; no
  duplicate listing, no split reviews.
- The **KDP listing normally wins the buy box** (Amazon prefers what it
  prints itself); Ingram-sourced copies surface only as fallback.
- **The one thing to watch:** Amazon *can* occasionally source from
  Ingram — at the wholesale discount. At 55%, such a copy earns ~$2.13
  instead of KDP's ~$5.50. Not a reason to avoid 55%, but it argues for
  **keeping the KDP and IngramSpark US list prices identical at
  $14.99** so there is no gap to arbitrage.

Standing rules: Expanded Distribution stays OFF on KDP permanently
(turning it on would break the whole arrangement — a tripwire, not a
current risk); identical list price and identical metadata on both;
KDP owns Amazon, IngramSpark owns everything else.

## 6. Denmark and Europe

**No EU print facility.** Lightning Source prints in the US (×3), UK
(Milton Keynes), Australia and the UAE; **EU orders are served from
Milton Keynes**, and post-Brexit UK→EU is a customs border: DAP terms
(duties payable by the receiving bookseller) plus Brexit handling
surcharges — a real deterrent to casual single-copy special orders,
though not a blocker.

**Global Connect** (local printers in Brazil, China, Germany, India,
Italy, Japan, Poland, South Korea, Spain, Singapore, South Africa)
does **not** cover Denmark or the Nordics; Germany is the most useful
hub here for continental reach. All Global Connect sales are
non-returnable, and the programme takes its own USD list price and
discount at setup.

**Will Danish shops and libraries be able to order it? Yes — orderable,
not stocked.** The title enters catalogue feeds reaching ~40–45,000
retailers/libraries including Ingram International (200+ countries).
Danish shops selling English titles source via UK/international
wholesalers (Ingram UK, Gardners), so it becomes findable through
their normal channels. Danish *public library* acquisition runs
through DBC/DanBib, which Ingram does not feed — that door is the
pligtaflevering/DBC deposit already made (see `SEND_BOOKS_KB_DBC.md`),
not IngramSpark. NOT VERIFIED: whether the DBC submission already
produces a DanBib record libraries can order against.

**Metadata.** Ingram supplies ONIX into the trade and has historically
enrolled titles in **Nielsen BookData's enhanced feed** — the
bibliographic spine UK/European buyers and librarians actually search.
This matters more than usual here: Bowker is irrelevant (Danish ISBN,
own forlagsnummer, registered at isbn.dk), so Nielsen via IngramSpark
is the route into UK/EU trade systems. **Consequence: the metadata
typed at title setup is the metadata the trade sees** — description,
BISAC subjects, contributor, imprint are final-quality copy, not
placeholders. NOT VERIFIED: whether the Nielsen enhanced feed is still
automatic in 2026 or a paid add-on.

## 7. Action list

**Decide before starting:**

1. **Payout method and currency** — resolve the eurozone-bank question
   with `ingramsparkinternational@ingramcontent.com` first; currency is
   effectively unchangeable. If a Danish EUR account is refused, decide
   whether USD PayPal's $30 threshold is acceptable.
2. **Wholesale discount** — 55% (trade-standard, best uptake) vs 40%
   (double margin, orderable-not-stockable).
3. **Returns** — Yes-Destroy vs No. Never Yes-Deliver from Denmark.
4. **List prices per market** — US must be $14.99 to match KDP; decide
   GBP, EUR, AUD, and the separate Global Connect USD price. An
   unpriced market is simply unavailable.

**Then, in order:**

5. Create the account; complete every dashboard setup task (title
   setup is blocked until all are done): card on file, W-8BEN with the
   Danish treaty claim, currency.
6. Run the Cover Template Generator: 6×9, 206 pp, perfect bound,
   crème, chosen lamination. Up to 2 hours to arrive by email.
7. Rebuild the cover wrap on that template — spine stays 0.5150",
   geometry 12.765 × 9.25 unchanged, so the art transfers at scale.
   White patch behind the barcode, deliberate CMYK conversion, ink
   ≤240%, guide layers removed, export PDF/X-1a:2001 as
   `9788797751916_cov.pdf`.
8. Verify (not rebuild) the interior: fonts embedded, grayscale,
   single pages, no crop marks, no live transparency, exact trim;
   export PDF/X-1a:2001 as `9788797751916_txt.pdf`.
9. Set up as a **new title** (not a transfer). Mirror KDP metadata
   exactly.
10. Upload; fix anything first-level validation flags (free and
    unlimited at this stage); ~3 business days to eproof.
11. **Review the eproof forensically before approving** — the last
    unambiguously free moment.
12. Order a physical proof copy before enabling distribution.
13. Enable distribution: markets, discount, returns. Thursday
    23:59 US Central cutoff for later changes.

**Irreversible or sticky, flagged in advance:**

- Payment currency — treat as permanent.
- Returnable → non-returnable carries the 180-day tail.
- eproof approval ends free revisions (and may trigger the disputed
  $25 fee).
- One account, ever.
- KDP Expanded Distribution must stay off permanently.
- File retention after cancellation is 180 days; metadata is never
  deleted.

## Sources (checked 2026-09-12)

- IngramSpark User Guide v3.3 (24 Aug 2026):
  https://www.ingramspark.com/hubfs/downloads/user-guide.pdf
- IngramSpark File Creation Guide (8.24.26):
  https://www.ingramspark.com/hubfs/downloads/file-creation-guide.pdf
- IngramSpark FAQs: https://www.ingramspark.com/faqs
- Global distribution: https://www.ingramspark.com/how-it-works/distribute
- Discount guidance: https://www.ingramspark.com/blog/why-should-i-discount-my-book
- ALLi on the 2026 pricing changes (22 Apr 2026):
  https://allianceindependentauthors.substack.com/p/what-ingramsparks-2026-pricing-changes
- ALLi, KDP + IngramSpark together:
  https://selfpublishingadvice.org/how-authors-use-ingramspark-and-kdp-together/
- Spine-width formulas (BookDesignerAI, 4 Jul 2026):
  https://www.bookdesigner.ai/guides/book-spine-width
- KDP→IngramSpark cover conversion (O'Hearn):
  https://www.tjohearn.com/2025/03/16/how-to-create-an-ingramspark-cover-from-a-kdp-cover/
- Wholesale-discount trade-off (Spoonbridge):
  https://spoonbridgepress.com/ingramspark-wholesale-discount/
- Amazon out-of-stock behaviour (NFAA):
  https://nonfictionauthorsassociation.com/amazon-out-of-stock-issues-and-the-pros-and-cons-of-publishing-with-createspace-ingramspark-and-lightning-source/
- Nielsen metadata via IngramSpark (ALLi):
  https://selfpublishingadvice.org/book-marketing-generous-offer-for-alli-author-members-from-ingram-spark-re-nielsen-metadata/
- Global Connect hubs:
  https://www.ingramcontent.com/news/ingram-content-group-expands-worldwide-reach-with-two-new-global-connect-distribution-hubs-singapore-and-south-africa
