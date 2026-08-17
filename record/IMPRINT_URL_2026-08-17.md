# Imprint URL — repository-URL bracket filled (2026-08-17)

**What:** The imprint page's live bracket
`[repository URL --- public at publication]` replaced with
`\url{billiardballuniverse.com}`.

**Why:** The domain `billiardballuniverse.com` was registered today
(2026-08-17, Cloudflare Registrar, auto-renew on; companion redirect domain
`worldwithnobottom.com` registered alongside it). A domain the author controls
is a more durable printed pointer than a GitHub URL; the website will link the
public repository once both are live.

**Exact change** (imprint, verso of title page):

```tex
\noindent Manuscript, sources, and the full correction record:
[repository URL --- public at publication].
```

became

```tex
\noindent Manuscript, sources, and the full correction record:\\
\url{billiardballuniverse.com}
```

(The URL sits on its own line: the first attempt kept it in-paragraph and
produced an Overfull \hbox of 4.8 pt plus a mid-URL line break; the forced
break cures both, and the trailing period is dropped so it cannot be read as
part of the address. Verified: full rebuild, 0 Overfull, imprint checked via
pdftotext.)

**Still open on the imprint page:** the paperback ISBN bracket (assigned at
publication) and, per RELEASE notes, the beta-note `[N]`/`[date]` placeholders
elsewhere.

Applied directly by claude-code (not a pasted patch); recorded here to keep the
correction record complete.
