# PROSE_PATCHES_darkmatter.md — new Chapter 7 section: the dark part of the inventory
*For code-claude. Author-commissioned and author-framed. Applies on top of 728a392. Ships with `SECTION_darkmatter.tex`. Build-validated: both editions, 0 errors, 0 overfull, 171 pp here (expect ~172 in yours).*

## What this is and why the framing matters

The book has said nothing about dark matter in 170 pages, which is the most conspicuous silence left in it — any reader with modern astronomy asks the question by Chapter 6.

An earlier draft of my proposal ended with "this toy is not a dark-matter alternative, and anyone selling it as one is misusing it." **Niels rejected that as too strong**, and he was right: a flat prohibition forecloses something he does not want to foreclose and claims more certainty than he has. His instruction was to state the good arguments against using this book's gravity to explain dark matter away, name them properly, and then say plainly that the tower may have some part in understanding dark matter but he does not know how. The section is written to that specification.

## Patch — insert the section

Insert the entire contents of **`SECTION_darkmatter.tex`** immediately before
```
\section{What That Teaches}
```
Chapter 7 then closes: … The Ladder Under Load → Where the Stiffness Might Come From → **The Dark Part of the Inventory** → What That Teaches.

## What the section argues

1. **Not a difficulty.** The book is a mechanism, not a census. Anything that stops massions gravitates whether or not it deals with light, so unseen matter is neither forbidden nor surprising; the toy takes the inventory from the astronomers unchanged.
2. **The temptation named** — push gravity has a natural distance, so could the anomalies be gravity failing at range rather than unseen matter?
3. **Three arguments against it**, stated properly: *direction* (absorption screens gravity, making it weaker at range, while rotation curves need it stronger — the discrepancy widens); *what it keeps time with* (galaxies of very different sizes misbehave at nearly the same acceleration, not the same radius — a pattern a length cannot make; the section says this is the hardest to answer); *separation* (cluster collisions where the lensing mass has come apart from the visible matter, which any modification tied to visible matter struggles with).
4. **The careful other direction**, per Niels: "*this is not an alternative to dark matter* and *this has nothing to do with dark matter* are different sentences, and I mean only the first." Something a floor below that engages massions and not our light would be what the standard picture records as invisible mass — set down explicitly as an unexplored hole, not an answer. "Marked holes are more useful than papered ones."
5. **A fourth demand on the sixth wound's number** — gravity is observed working across galaxies, clusters, and cosmological lensing distances, so the mean free path must exceed the largest range over which gravity can be watched. It pulls the same way as the third rather than against it, so it does not tighten the pincer; it stretches the range over which transparency must hold enormously. *(The sixth wound still says "pinned from three sides", which is correct where it stands; this section adds the fourth as a later development. No edit to the sixth wound is needed or wanted.)*
6. **Dark energy scoped out** in two sentences: the book is a mechanism, not a history, and "I would rather be silent there than inventive."

## Four bibliography entries, all VERIFY-flagged

Add before `@article{michelsonmorley1887,` — `zwicky1933`, `rubin1980`, `mcgaugh2016`, `clowe2006`. Copy them verbatim from my `ref.bib`. The section ships **uncited**, as the other new material did, until they clear.

New ledger section for `TODO.md`, **§3D-dark**:
- `mcgaugh2016` — **the load-bearing one.** The book's second argument claims galaxies of very different sizes misbehave at nearly the same *acceleration* rather than the same *radius*. Confirm this is a fair statement of the radial acceleration relation and that it holds across the range of galaxy sizes implied. **If it overstates, STOP and report** — this is the argument the section calls hardest to answer, so it must be exactly right. [CC]
- `clowe2006` — confirm the Bullet Cluster separation is fairly described as "the mass, as measured by the bending of light, has come apart from the visible matter and sits to either side of it". [CC]
- `rubin1980` — right paper for flat rotation curves as described. [CC]
- `zwicky1933` — pages, and the cluster-velocity inference. Note this is the **same Zwicky** as `baadezwicky1934cr`, already cited for neutron stars; no remark is needed in the text, but flag if the coincidence is worth a footnote. [CC]
- **Screening direction:** confirm that absorption of a gravitational flux over long paths yields *weaker*-than-inverse-square attraction at range (the section's first argument). Elementary but it should be checked, not assumed. [CC]

## After applying
1. `build.bat`; zero errors, zero overfull; one print-edition build; revert the flag.
2. Commit: `ch7: the dark part of the inventory — what the toy does and does not say about dark matter`.
3. Append to `FACTCHECK_REPORT.md`: "New dark-matter section, unverified; 4 new VERIFY entries; see TODO §3D-dark."
