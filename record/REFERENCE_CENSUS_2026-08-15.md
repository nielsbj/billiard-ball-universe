# REFERENCE-DENSITY CENSUS — one cold reader, 2026-08-15

**STATUS: EVIDENCE ONLY. NOT ACTED ON.** No finding below has been touched, ruled on, or repaired.
The route from here, per the run order: **Niels rules → chat-claude drafts repairs → a fresh cold
check before anything commits.**

## Provenance of the artifact the reader held

| | |
|---|---|
| **Build hash** | `cbdebbc9bc9b3046073ee4a2adb2d0d95f553f5f` (HEAD, working tree clean) |
| **Artifact** | reader cut, freshly built from that commit: `\draftnotesfalse`, `\digitaleditiontrue` |
| **Extent** | **198 pages** |
| **Gate on the cut** | 0 errors / 0 `Overfull` / 0 `Float too large` / 0 undefined; log 2228 lines, not truncated |
| **Apparatus suppressed** | all 7 `draftnote` blocks and 10 `\draftstatus` lines — verified absent from the PDF text (`Craft notes` count 7 → 0), ~4,900 characters shed |
| **Reader model** | one fresh Opus subagent, single pass, front to back |

**The authorized one-word edit was not spent.** The instruction anticipated a 180-page artifact and
authorized correcting the brief's first line to match. The reader cut is **198 pp** — the draft
apparatus was never worth 18 pages — and the brief's first line already read "198-page". It was
therefore handed over **verbatim, unedited**. The 180 figure traces to the beta-note placeholder and
predates the campaign that took the book 184 → 198.

## Isolation — what was enforced, and what could not be

Both inputs were staged **outside the repository**, in a scratch directory, and the reader was given
exactly two paths and an explicit prohibition on reading anything else: no source, no records, no
outline, no `CLAUDE.md`, no web, no writes. It read the brief first, then the PDF in ten consecutive
20-page spans, in order, with no backward jumps and no term-grepping — 16 tool calls total.

**The caveat, stated plainly because the ledger's standing depends on it:** this harness injects
project context into subagents at spawn, and there is no flag to suppress it. The reader was
instructed to disregard any such context entirely. That instruction is a wall of words, not a
sandbox. Treat the ledger as *near*-cold rather than provably cold; where an entry says "I could not
have said what thirty-three orders was thirty-three orders *of*", that is a reader reporting its own
decayed memory, and it is exactly the sort of report the injection could only have suppressed, not
manufactured.

*One transport normalization: an HTML-escaped `&amp;` in entry 19 has been restored to `&`. Nothing
else was altered — no reordering, no trimming, no softening.*

---

# The ledger, verbatim as delivered

**REFERENCE-DENSITY CENSUS — cold first read, 198 pp., front to back**

---

**1 · p. 88** — "The gap seals each layer's books; the cascade sells the intake downward."
Pointers: 5 (*the gap*, *layer's books*, *the cascade*, *sells*, *the intake*) · **BARE-POINTER, COLLISION, ALIAS**
Cold take: nothing. This sits in the boxed "toy, for the road" panel at the chapter head, where *the gap* and *the cascade* have never been defined at all; both are introduced by definite article as if already known. Two bookkeeping verbs (seal, sell) and one architectural noun (floor, implied) with no literal residue whatever.

**2 · p. 88** — "Two purchases stand on the books: the hidden rest frame, and energy's regress, downward forever."
Pointers: 5 (*two purchases*, *the books*, *the hidden rest frame*, *energy's regress*, *downward*) · **NUMBER-AS-NAME, UNANNOUNCED-PARTITION, BARE-POINTER, COLLISION**
Cold take: nothing. Same forward-facing box. "Purchases" is never explained as a category; the pair is announced as though a partition had been stated. I could not tell whether a rest frame is a thing in the world or an entry in a metaphor.

**3 · p. 87** — "Seven wounds: one three hundred years old, met in the tower's own strange currency; one that resolves, on inspection, into a specification with a laboratory address; one still leaning against; one that grew three answers and a door; a fifth — the deepest — where one theorem is aimed at this book's first sentence and a second closes every finite escape, and where the tower's own infinity turns out, for once, to be load-bearing; and a sixth that nobody handed me, which I found while writing this chapter and which is the least settled thing in the book; and a seventh, delivered late by readers hired to wound the book — the oldest fact in gravity, the equal fall, presented as the newest bill."
Pointers: 14+ · **NUMBER-AS-NAME, BARE-POINTER, COLLISION**
Cold take: only the very last clause ("the equal fall") names anything. Six of the seven items are ordinals wearing no noun. I read a rhythm and retained one fact.

**4 · p. 94** — "The gap is the elastic floor; the cascade is the valve; and the demand they must jointly meet is already on the books — thirty-three orders of refusal."
Pointers: 6 (*the gap*, *elastic floor*, *the cascade*, *the valve*, *the books*, *thirty-three orders of refusal*) · **ALIAS, COLLISION, NUMBER-AS-NAME**
Cold take: nothing. Two coined objects are each renamed twice inside one sentence (gap→floor, cascade→valve), a plumbing metaphor is crossed with an accounting metaphor, and the payoff is a bare number standing where a noun should be. I could not have said what "thirty-three orders" was thirty-three orders *of*.

**5 · p. 94** — "The floor is measured physics; the cascade is the debt."
Pointers: 4 · **ALIAS, COLLISION, BARE-POINTER**
Cold take: nothing. Closing line of the split-ledger box; the paragraph above it did do literal work (Mössbauer), but the line does not compress that work — it compresses two aliases coined one sentence earlier. Not a carve-out.

**6 · p. 127** — "The fourth wound's gap stops being a hope with a job and becomes a component with a specification: thirty-three orders of refusal."
Pointers: 5 (*the fourth wound*, *gap*, *a hope with a job*, *a component with a specification*, *thirty-three orders of refusal*) · **NUMBER-AS-NAME, BARE-POINTER, ALIAS**
Cold take: nothing. Standing on p. 127 I no longer knew which wound was fourth; the "thirty-three orders" figure was derived nineteen pages earlier and here arrives naked.

**7 · p. 110** — "Seal above, valve below, one refusal shared between them."
Pointers: 4 · **ALIAS, UNANNOUNCED-PARTITION, COLLISION**
Cold take: nothing. Four nouns, no verb of substance, no referent stated. "Above" and "below" here mean neither spatially-above nor layer-below but positions in an argument.

**8 · p. 104** — "Hold the note; the Fifth Wound will cash it."
Pointers: 3 · **BARE-POINTER, COLLISION, NUMBER-AS-NAME**
Cold take: nothing, other than an instruction to remember something. I did not know what the note said.

**9 · p. 94** — "The refusal here is the book's own gap doing its floor-work — a quantized receiver that cannot take energy in sips — the very lock the cascade escape leans on, at the first wound's thirty-three-order price."
Pointers: 7 (*the refusal*, *the book's own gap*, *floor-work*, *the lock*, *the cascade escape*, *the first wound*, *thirty-three-order price*) · **ALIAS, COLLISION, NUMBER-AS-NAME, BARE-POINTER**
Cold take: one clause only — "a quantized receiver that cannot take energy in sips." The other four-fifths of the sentence is masked. Notably the surviving clause is the parenthetical, i.e. the sentence survives by accident.

**10 · p. 95** (Figure 7.1 caption) — "Each layer's books are covered by the layer above — and the reader knows, by now, the price of a ledger with no first account."
Pointers: 4 · **BARE-POINTER, COLLISION**
Cold take: nothing. A figure caption is where a lost reader goes for the literal statement; this one ends by telling me I already know something, and the thing I am said to know is an accounting figure of speech for a philosophical regress introduced sixty pages earlier.

**11 · p. 124** — "Two purchases recur in the table's price column — the hidden frame and the downward regress — and one assumption, lower layers are faster, does duty in two separate rescues."
Pointers: 6 · **NUMBER-AS-NAME, BARE-POINTER, UNANNOUNCED-PARTITION**
Cold take: one clause survives — "lower layers are faster" — because it is spelled out. "The hidden frame" and "the downward regress" are names for arguments made 30 and 50 pages back, and the sentence points across a full-page table to a column.

**12 · p. 126** — "A toy whose escapes keep spending the same two coins is either running out of money or telling you what its money is."
Pointers: 5 · **COLLISION, NUMBER-AS-NAME, BARE-POINTER**
Cold take: nothing literal. I understood the rhetorical shape (economy is ambiguous evidence) but could not name either coin without turning back.

**13 · p. 126** — "A single unobservable device deployed four times is one assumption, not four survivals; the recurrence earns the toy nothing — what it earns is only a sharper statement of what must be true if the toy is."
Pointers: 5 · **NUMBER-AS-NAME, BARE-POINTER**
Cold take: the methodological point survives — reuse is not corroboration — but the sentence never says which device, and "four times" is doing a noun's whole job.

**14 · p. 126** — "It is the first wound, which until this page has only taken, that supplies two of the three rows with numbers in them; the seventh supplied its own, and was the only wound to arrive with one."
Pointers: 7 · **NUMBER-AS-NAME, BARE-POINTER, UNANNOUNCED-PARTITION**
Cold take: nothing. Three ordinals, two bare counts, and a reference into a table's rows. I never learned which three rows had numbers.

**15 · p. 127** — "And the fork here already has a name in this chapter: specification or epitaph."
Pointers: 4 · **BARE-POINTER, ALIAS**
Cold take: nothing. "The fork" here is a *different* fork from the Bancal fork discussed twelve pages earlier, which is the sharpest collision in the chapter — the same word is doing two jobs, both figurative.

**16 · p. 127** — "These two rows have no address — nothing in any glassware moves at a million million million times the speed of light — and what they have instead is the agreement the fifth wound already banked: the same direction demanded twice, for unrelated reasons — sparing the orbits, carrying the correlations — and then spent again wherever the tower needed speed."
Pointers: 8 · **BARE-POINTER, NUMBER-AS-NAME, COLLISION, UNANNOUNCED-PARTITION**
Cold take: one thing — that nothing in a laboratory moves that fast. "Address," "banked," "spent," "rows," "the fifth wound" all masked; the residue is an aside.

**17 · p. 125** (Table 7.1, "still open" cell, Bell row) — "the Bancal fork: no-signalling derived in the unbounded limit, or the crack predicted"
Pointers: 4 · **BARE-POINTER, ALIAS**
Cold take: nothing. Table cells are consulted out of order by definition; "the crack" was named once, ten pages before, and never in the cell.

**18 · p. 125** (Table 7.1, "still open" cell, equal-fall row) — "the four classical tests: booked, unpaid"
Pointers: 3 · **NUMBER-AS-NAME, BARE-POINTER, COLLISION**
Cold take: nothing. Four words, two of them accounting verbs, one of them a bare numeral standing for four named experiments that the cell declines to name.

**19 · p. 125** (Table 7.1, "price" cell, drag & heat row) — "energy books close only regressively — no first account; steadiness and shot-noise unchecked"
Pointers: 4 · **COLLISION, BARE-POINTER**
Cold take: "steadiness and shot-noise unchecked" survives as a literal fragment. "Energy books close only regressively — no first account" is pure metaphor with a philosophical referent thirty pages upstream.

**20 · p. 125** (Table 7.1, "still open" cell, charge row) — "Coulomb's clean scalar, derived, not hoped; and one magnitude from two mechanisms"
Pointers: 4 · **NUMBER-AS-NAME, BARE-POINTER**
Cold take: the first half survives (a scalar Coulomb law wants deriving). "One magnitude from two mechanisms" refers to an invoice filed on p. 74 — fifty-one pages earlier — and reads as arithmetic.

**21 · p. 122** — "Scoreboard: open — pinned twice from below and once from above, and derived from none."
Pointers: 4 · **NUMBER-AS-NAME, UNANNOUNCED-PARTITION, BARE-POINTER**
Cold take: nothing beyond "unresolved." Twice-below/once-above is a count of constraints the sentence declines to name, and "below/above" is architectural where the constraints are argumentative.

**22 · p. 106** — "Scoreboard: open, leaning against."
Pointers: 2 · **BARE-POINTER, UNANNOUNCED-PARTITION**
Cold take: nothing. Leaning against *what*, and in whose favour, is not stated; the verdict line of an entire section.

**23 · p. 107** — "The first wound has been waiting, all chapter, for this section — because here the two wounds — the pincer's and the gap's — turn out to be one."
Pointers: 6 · **ALIAS, NUMBER-AS-NAME, BARE-POINTER**
Cold take: nothing. The same two objects are each given two names in eighteen words: first wound = the pincer's, and the section's own wound = "the gap's." The claim being made — that two problems are one — arrives with both problems masked.

**24 · p. 114** — "Survivable, hidden, unearned — the pattern the reader knows."
Pointers: 4 · **BARE-POINTER**
Cold take: nothing. Three adjectives with no subject, then an appeal to a pattern I was not told I had been shown.

**25 · p. 130** — "— resupplied from above, no first account, the coin the reader now knows by touch; and the deep puzzle of why entropy began low is re-expressed as the tower's charged state, not dissolved — I mark the difference and do not blur it."
Pointers: 6 · **COLLISION, BARE-POINTER**
Cold take: half a clause — that low initial entropy is restated rather than explained. "The coin the reader now knows by touch" is a pointer to a pointer.

**26 · p. 128** — "Before the lessons, one entry belongs on the other side of the ledger — a place where the invoice goes to the bottomed picture's table, and the tower, for once, is the one collecting."
Pointers: 6 · **COLLISION, UNANNOUNCED-PARTITION, BARE-POINTER**
Cold take: nothing but a direction of argument ("this bit favours the book"). "The other side of the ledger," "the invoice," "the bottomed picture's table," "collecting" — four accounting figures, no physics.

**27 · p. 80** — "And the lump is bought with the coin this book already owns: the gap."
Pointers: 4 · **COLLISION, BARE-POINTER**
Cold take: nothing. This is the *first* use of "the gap" as a named device — it is introduced with the definite article and the claim that I already own it. Two pages of light-as-medium argument then run on a term I had no definition for.

**28 · p. 69** — "And it settles the shape of the escape that the next chapter's first wound will need: energy is not flung down an open shaft but sold one floor at a time, each floor selling on its own account."
Pointers: 6 · **COLLISION, BARE-POINTER, NUMBER-AS-NAME**
Cold take: a vague picture of stepwise transfer. Architecture (shaft, floor) and commerce (sold, account) interleave in nine words, so I could not tell which of "floor" and "account" was literal — in this book, either could have been.

**29 · p. 145** — "So there are now three twos owed: the two things a state will admit, the two turns that bring a tethered object home, and the two by which the electron's magnetism exceeds its turning."
Pointers: 5 · **NUMBER-AS-NAME, COLLISION**
Cold take: the second and third items are recoverable; the first ("the two things a state will admit") is not, and the head phrase "three twos owed" reads as a riddle. The debt metaphor collides with an arithmetic that is genuinely numerical here, which is the worst place for it.

**30 · p. 144** — "If that is right, then the gap — the book's hardest-working part, which seals each layer, underwrites the valve that routes energy downward, throttles the crowd's short modes into silence, and holds stars up — is not a further law of nature laid on top of the crowd."
Pointers: 8 · **ALIAS, COLLISION, BARE-POINTER**
Cold take: the final clause survives — the gap would be a fact about the crowd rather than an added law. The four-item apposition is a list of pointers to four earlier sections, none of which restates what it did.

**31 · p. 131** — "So the gap, by the end of this chapter, is doing triple duty: it seals each layer's books, it valves the cascade past our thermometers, and it throttles the drain that would otherwise empty the world — Planck's constant as the measured conductance of our layer's floor."
Pointers: 8 · **ALIAS, COLLISION, NUMBER-AS-NAME**
Cold take: the third duty survives ("throttles the drain that would otherwise empty the world") because "drain" is glossed by its own clause. The first two are pointer-only, and "valves" is a verb coined from a noun coined from a metaphor.

**32 · p. 145** — "(Dimensional honesty: a spacing is a length and Planck's constant is an action — length times momentum — so the identification is a programme, not an equation: the crowd must convert its one length into one action through its one speed and one stiffness, and any such lattice generically disperses short waves; the second wound's dispersionless receipts are therefore this idea's standing bill.)"
Pointers: 6 · **BARE-POINTER, COLLISION, NUMBER-AS-NAME**
Cold take: the first half is excellent and fully literal. The closing clause — "the second wound's dispersionless receipts are therefore this idea's standing bill" — I took nothing from; "receipts" for measurements plus "bill" for obligation, pointing forty-four pages back.

**33 · p. 124** — "The inspiral needs radiation reaction in the quadrupole branch the second wound already carries. Three shapes, one discipline, zero calculations."
Pointers: 6 · **NUMBER-AS-NAME, BARE-POINTER**
Cold take: "no calculations have been done" survives from the second sentence. "Three shapes, one discipline" is a tally with the nouns removed; "the quadrupole branch the second wound already carries" required a page I no longer held.

**34 · p. 149** — "It pulls the same way as the third rather than against it, so it does not tighten the pincer; what it does is stretch the range over which transparency must hold by a factor it is difficult to write down."
Pointers: 5 · **NUMBER-AS-NAME, BARE-POINTER, UNANNOUNCED-PARTITION**
Cold take: the second half survives (the transparency requirement extends much further). "The third" — third *what*, of a list given a page and a half earlier — is a bare ordinal, and "pulls the same way... rather than against" describes constraints as though they were forces, in a chapter about forces.

**35 · p. 149** — "One thing does come back from the exercise, and it belongs on the sixth wound's account."
Pointers: 3 · **BARE-POINTER, COLLISION, NUMBER-AS-NAME**
Cold take: nothing. Section-opening line; both "the exercise" and "the sixth wound's account" are back-references, and the accounting sense of "account" is the third distinct sense of the word in the chapter.

**36 · p. 102** — "The invoice item, on the bill where it belongs: the two songs have different shapes."
Pointers: 4 · **COLLISION, BARE-POINTER, ALIAS**
Cold take: "two waves of different shape" — barely. The bookkeeping frame ("invoice item," "the bill") and the music frame ("songs") occupy one sentence, and "the bill" is a specific earlier list I could not locate.

**37 · p. 34** (Table 3.1 caption) — "I count that inside the third row's standing claim about the unreachable, not as a second brute fact; the reader is free to count it differently, and the table's verdict narrows if they do."
Pointers: 5 · **NUMBER-AS-NAME, BARE-POINTER**
Cold take: that the author is making a contestable bookkeeping choice. Which claim is in the third row I could not hold while reading the caption, because the caption sits below the table and the rows are unlabelled.

**38 · p. 163** (Appendix A, *Bancal's theorem*) — "The theorem that turns the fifth wound into a fork, and the tower's one load-bearing use of its own infinity."
Pointers: 5 · **NUMBER-AS-NAME, BARE-POINTER, COLLISION**
Cold take: nothing. This is a dictionary — the one place in the book consulted by a reader who has lost the thread — and its closing sentence is two ordinal-and-metaphor pointers deep. (The entry's first two sentences are excellent and self-contained; the last one undoes them.)

**39 · p. 95** — "The rescue of the pincer is available at exactly the price the whole book has already chosen to pay — and whether that price buys a solution or a deferral is the same question as Chapter 3, on which I have already, publicly, taken my side."
Pointers: 6 · **BARE-POINTER, COLLISION**
Cold take: "solution or deferral" survives as a live distinction; everything else is price/pay/buy plus a bare chapter reference sixty pages back, and the sentence never says what the price *is*.

**40 · p. 109** — "But the refined version — the down-conversion cascade of the first wound, where the throughput never enters our layer's modes at all because the gap refuses it admission — is not touched by that closure, and stands where the first wound left it: open, uncalculated, and priced in regress."
Pointers: 7 · **ALIAS, BARE-POINTER, COLLISION, NUMBER-AS-NAME**
Cold take: one clause — energy never entering our layer's modes. "Priced in regress" is where I stopped: a monetary verb applied to a logical structure, as a verdict, with the referent fifteen pages back.

---

## CALIBRATION — five pointer-dense sentences that work anyway

1. **p. 67** — "'Empty space transmits forces' — the phrase that has embarrassed physics since Newton — stops being mysterious the moment 'empty space' is a crowd." *The crowd* is fully coined, yet the sentence carries its own gloss by contrast: empty vs. not-empty. A reader meeting "crowd" for the first time still gets a claim.

2. **p. 88** — "two defendants stand trial here — the toy, Chapter 6's particular mechanism, and the tower, the layered world itself." Two coined names, one courtroom metaphor, and both names defined in apposition on the spot. This is the model the rest of Chapter 7 abandons.

3. **p. 93** — "Energy is momentum-expensive in slow channels and momentum-cheap in fast ones." Pure bookkeeping vocabulary ("expensive," "cheap") and it survives masking completely, because the underlying physical variables — energy, momentum, speed — are named literally in the same clause.

4. **p. 85** — "Resonance makes things equal; packing makes them countable." Two coined terms, four words of content, and it works: both terms were defined literally in the two preceding paragraphs, and the sentence states a real division of explanatory labour rather than a tally.

5. **p. 75** — "Two mechanisms, one magnitude, no derivation: filed." **PASS-BY-PARAGRAPH.** In isolation this is a bare count. But the three sentences above it state the two mechanisms in full physical detail and give the measured agreement, so the line compresses work its own paragraph has just done. This is the carve-out functioning exactly as the brief describes — and it is worth noting that the *identical* construction fails at pp. 124, 126 and 127 precisely because no paragraph beneath it did the work.

---

## DISTRIBUTION

Failures are overwhelmingly a Chapter 7 phenomenon, and within Chapter 7 they concentrate in three specific structures rather than spreading evenly through the prose. Chapters 1–5 are almost clean: they coin freely (*the crowd*, *the local surplus*, *locally special*) but nearly always gloss on the spot, and I recorded only one entry (p. 34) from the first sixty pages. The failures begin at p. 69 and p. 80 — two forward references in Chapter 6 that name *the gap* and *the cascade* before either exists — and then cluster hard from p. 87 onward. The three loci are: **(a) the apparatus that frames rather than argues** — the chapter-head box on p. 88, the wound scoreboards (pp. 106, 110, 122), the Table 7.1 cells (p. 125) and several figure captions (pp. 95, 102), all of which are consulted out of sequence by design and are therefore the *worst* places in the book to spend accumulated pointers, yet are where the density peaks; **(b) the synthesis pages, pp. 124–131**, where "The State of the Wounds" and the entropy section stop describing the world and start describing the book's own bookkeeping — here ordinals ("the first wound," "the seventh," "two of the three rows"), counts ("thirty-three orders," "three twos," "the same two coins," "four times") and the price/purchase/coin/ledger register are doing nearly all the syntactic work, and eleven of my forty entries fall in these eight pages; **(c) the recurring alias chain gap = floor = seal = lock = throttle and cascade = valve = drain = market**, which reaches four or five names per object by p. 131 and p. 144, so that a reader who learned one name cannot follow a sentence built from another. Two further observations on scope: the collision between the accounting metaphor and the architecture metaphor (floor/basement/tower vs. books/price/invoice) is almost entirely confined to Chapter 7 and is the single most reliable predictor of a failing sentence — where both registers appear in one sentence, that sentence failed in every case I logged; and the late sections (pp. 139–149, on stiffness and dark matter) are noticeably *cleaner* than pp. 87–131, suggesting the density is a property of the wound-and-ledger scaffolding rather than of the author's late prose. The appendix entry at p. 163 is the outlier worth flagging separately: a dictionary that closes an entry with two ordinal pointers has failed at the one job an appendix has.
