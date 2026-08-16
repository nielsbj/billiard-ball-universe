# P15 — the tennis-ball figure made airtight (applied 2026-08-16)

**STATUS: CLOSED.** One sentence in the "Two ledgers" box (Ch. 7, folio 95). Two changes:
a qualifier that closes a real objection, and a number that was the right order of magnitude
but 2.6× too generous. Nothing else in the box touched.

*Queried by Niels off the page: "on book page 95 in pdf … is this true". It was, nearly — and
the two gaps are recorded below rather than waved through.*

## The sentence

Before:

> Kitchen version: a tennis ball bouncing off a wall gives the wall (and the Earth behind it)
> *all* of its momentum change and about one part in ten million million million million of
> its energy.

After:

> Kitchen version: a tennis ball bouncing off a wall gives the wall (and the Earth behind it)
> *all* of its momentum change and, **as recoil**, about one part in **twenty-five** million
> million million million of its energy.

## The physics, worked

The box states its own formula two clauses earlier — *for the same momentum $p$, the energy
taken is $p^2/2M$* — so the check is forced:

| quantity | value |
|---|---|
| momentum delivered by a *bouncing* ball | $p = 2mv$ |
| energy taken by the wall + Earth | $p^2/2M = 2m^2v^2/M$ |
| energy of the ball | $\tfrac12 mv^2$ |
| **fraction** | $\mathbf{4m/M}$ |

With $M = 5.9722\times10^{24}$ kg and the ITF legal mass range (56.0–59.4 g):

| ball | fraction | one part in |
|---|---|---|
| 56.0 g | $3.75\times10^{-26}$ | $2.67\times10^{25}$ |
| 58 g (typical) | $3.89\times10^{-26}$ | $2.57\times10^{25}$ |
| 59.4 g | $3.98\times10^{-26}$ | $2.51\times10^{25}$ |

**The momentum half needed nothing.** "All of its momentum change" is exact, not an
approximation — Newton's third law, no small-quantity argument anywhere in it.

**The energy half was the right decade and the wrong number.** The old word-form,
built out per MANUAL §10 rule 1 — million $10^6$, million million $10^{12}$, million million
million $10^{18}$, million million million million $10^{24}$, *ten* million million million
million $10^{25}$ — claimed one part in $10^{25}$ against a true $2.57\times10^{25}$: the wall
was being handed **2.6× more energy than it gets**. It did round to the nearest decade
($\log_{10} 2.57\times10^{25} = 25.41$, nearer 25 than 26), which is why it survived, but "about"
should not be carrying a factor of 2.6 when the exact figure is one line of arithmetic away.

The new form, built the same way: **twenty-five** million million million million
$= 25\times10^{24} = 2.5\times10^{25}$. That sits inside the legal-mass band and within 3% of a
typical ball.

### Where the old figure probably came from

$4m/M = 10^{-25}$ requires $m = 149$ g. That is not a tennis ball; it is a **baseball** at the
top of its legal range (142–149 g). The number is very nearly exactly right for the wrong ball,
which reads like a substitution made after the arithmetic rather than a slip in it.

Worth noting the old figure was at least *self-consistent with its own sentence*: had the ball
merely stopped instead of bouncing, the fraction would be $m/M$ — one part in $10^{26}$, one more
"million". It says *bouncing* and *momentum change*, which is $2mv$, so $4m/M$ was the right
formula. The error was in the mass, not the physics.

## Why "as recoil"

A real tennis ball is nowhere near elastic. The ITF spec is a rebound of 135–147 cm from a
254 cm drop onto a rigid surface, so the coefficient of restitution is 0.73–0.76 and the ball
**loses roughly 45% of its kinetic energy in the bounce**, to hysteresis in the rubber and
cloth. Most of that stays in the ball; some goes into the wall's surface. Either way a real wall
receives vastly more than $10^{-25}$ of the ball's energy — just not as *motion*.

The passage's point is untouched by this, because the point is the energy cost of *receiving the
momentum*, and on that channel the number is exact. But the sentence said "of its energy" flat,
and a physicist reader would have stopped on it. Two words close it, and the book's standard —
every objection stated at full strength — does not permit leaving a stop like that in a box
whose whole job is to say *this split is not speculative; nature runs it routinely*.

## Neighbours checked, unchanged

- **The Mössbauer figure in the same box is exact.** $^{57}$Fe: 14.4 keV transition, $\tau = 141$ ns,
  so $\Gamma = \hbar/\tau = 4.7\times10^{-9}$ eV and $\Gamma/E = 3.2\times10^{-13}$ — one part in
  $3.1\times10^{12}$ against the book's "about one part in three million million". Left alone.
- **MANUAL §10 rule 2 (same quantity, two places) is satisfied.** The other three
  `million million million` figures in the book — the charge/gravity agreement, the rain's mass
  per square metre, and the superluminal-influence bound — are different quantities. No
  inconsistency to reconcile.

## Build state

- 200 pp, unchanged. **0 Overfull hbox / 0 Overfull vbox / 0 Float too large / 0 collisions.**
- The added words cost no line: the box still sets in the same depth and the sentence breaks as
  `…and, as recoil, about one part / in twenty-five million million million million of its energy.`
- Verified on a scratch jobname (`_verify.tex`), because the master PDF was locked in a viewer
  during this patch — which exposed a hole in the H3 gate, fixed in the same commit and recorded
  at the end of the H3 file.
