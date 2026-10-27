#!/usr/bin/env python3
"""Build the EPUB edition of The Billiard Ball Universe from the master tex.

Stages (run all, or select with --stage):
  figures  - render every figure environment to a PNG (TikZ compiled standalone;
             full-page art plates pass through from art/ as JPEG)
  cover    - crop the ebook cover (front panel) out of cover/cover_wrap.pdf
  html     - convert the manuscript to XHTML chapter files + references
  pack     - assemble the EPUB 3 container and sanity-check it

The master tex is never modified. The only deliberate content deviations from
the print/digital interior are listed in ebook/README.md (kolofon ISBN block,
index omitted). Anything the converter does not recognise is reported as a
WARNING and must be resolved, not ignored - same spirit as the zero-overfull
rule.

Oracle files (must be fresh from a full build of the digital edition):
  manuscript/billiard_ball_universe.bbl  - citation numbering + entry fields
"""
import argparse
import html as htmllib
import json
import re
import shutil
import subprocess
import sys
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
MS = ROOT / "manuscript"
TEX = MS / "billiard_ball_universe.tex"
BBL = MS / "billiard_ball_universe.bbl"
EB = ROOT / "ebook"
BUILD = EB / "build"
FIGDIR = BUILD / "figs"
IMGDIR = BUILD / "images"
TEXTDIR = BUILD / "text"
EPUB_OUT = BUILD / "billiard_ball_universe_ebook.epub"

ISBN_EBOOK = "978-87-977519-4-7"
ISBN_PRINT = "978-87-977519-1-6"
BOOK_TITLE = "The Billiard Ball Universe: A World With No Bottom"
AUTHOR = "Niels Bonde Jensen"

WARNINGS: list[str] = []


def warn(msg: str) -> None:
    WARNINGS.append(msg)
    print(f"  WARNING: {msg}")


def run(cmd: list[str], cwd: Path | None = None) -> subprocess.CompletedProcess:
    r = subprocess.run(cmd, cwd=cwd, capture_output=True, text=True,
                       encoding="utf-8", errors="replace")
    if r.returncode != 0:
        tail = (r.stdout or "")[-2000:] + (r.stderr or "")[-2000:]
        raise RuntimeError(f"command failed: {' '.join(cmd)}\n{tail}")
    return r


# --------------------------------------------------------------------------
# tex utilities
# --------------------------------------------------------------------------

def read_tex() -> str:
    return TEX.read_text(encoding="utf-8")


def join_continuations(s: str) -> str:
    """Join lines ended with a bare % (TeX line continuation)."""
    return re.sub(r"(?<!\\)%\s*\n\s*", "", s)


def strip_comments(s: str) -> str:
    out = []
    for line in s.split("\n"):
        # remove unescaped % to end of line
        m = re.search(r"(?<!\\)%", line)
        out.append(line[:m.start()] if m else line)
    return "\n".join(out)


def balanced(s: str, start: int) -> int:
    """Given s[start] == '{', return index just past the matching '}'."""
    depth = 0
    i = start
    while i < len(s):
        c = s[i]
        if c == "\\" and i + 1 < len(s):
            i += 2
            continue
        if c == "{":
            depth += 1
        elif c == "}":
            depth -= 1
            if depth == 0:
                return i + 1
        i += 1
    raise ValueError(f"unbalanced braces at {start}: {s[start:start+80]!r}")


def extract_cmd(s: str, name: str) -> tuple[str | None, str]:
    """Extract first \\name{...} from s; return (argument, s-with-command-removed)."""
    m = re.search(r"\\" + name + r"\s*(?=\{)", s)
    if not m:
        return None, s
    end = balanced(s, m.end())
    arg = s[m.end() + 1:end - 1]
    return arg, s[:m.start()] + s[end:]


def replace_cmd_all(s: str, name: str, fmt) -> str:
    """Replace every \\name{...} (balanced) via fmt(arg) -> str."""
    while True:
        m = re.search(r"\\" + name + r"\s*(?=\{)", s)
        if not m:
            return s
        end = balanced(s, m.end())
        arg = s[m.end() + 1:end - 1]
        s = s[:m.start()] + fmt(arg) + s[end:]


def replace_cmd2_all(s: str, name: str, fmt) -> str:
    """Replace every \\name{a}{b} via fmt(a, b)."""
    while True:
        m = re.search(r"\\" + name + r"\s*(?=\{)", s)
        if not m:
            return s
        e1 = balanced(s, m.end())
        a = s[m.end() + 1:e1 - 1]
        m2 = re.match(r"\s*\{", s[e1:])
        if not m2:
            raise ValueError(f"\\{name} missing 2nd arg near {s[m.start():m.start()+60]!r}")
        e2 = balanced(s, e1 + m2.end() - 1)
        b = s[e1 + m2.end():e2 - 1]
        s = s[:m.start()] + fmt(a, b) + s[e2:]


# --------------------------------------------------------------------------
# Stage: figures
# --------------------------------------------------------------------------

FIG_PREAMBLE = r"""\documentclass[11pt]{article}
\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}
\usepackage{amsmath}
\usepackage{mathpazo}
\usepackage[paperwidth=4.7in,paperheight=22in,textwidth=4.5in,textheight=21.5in,hmargin=0.1in,vmargin=0.25in]{geometry}
\usepackage{graphicx}
\graphicspath{{%ROOT%/}}
\usepackage{tikz}
\usetikzlibrary{calc}
\usepackage{xcolor}
\usepackage{pifont}
\usepackage{booktabs}
\usepackage{ifthen}
\definecolor{bbuBlue}{HTML}{2E5A78}
\definecolor{bbuRed}{HTML}{B3432B}
\definecolor{bbuGold}{HTML}{C08A2D}
\pagestyle{empty}
\setlength{\parindent}{0pt}
\begin{document}
\begin{center}
%BODY%
\end{center}
\end{document}
"""


def find_figures(src: str) -> list[dict]:
    figs = []
    for i, m in enumerate(re.finditer(r"\\begin\{figure\}.*?\\end\{figure\}", src, re.S), 1):
        block = m.group(0)
        inner = re.sub(r"^\\begin\{figure\}(\[[a-z!]*\])?", "", block)
        inner = re.sub(r"\\end\{figure\}$", "", inner)
        caption, inner = extract_cmd(inner, "caption")
        label, inner = extract_cmd(inner, "label")
        inner = replace_cmd_all(inner, "captionsetup", lambda a: "")
        inner = re.sub(r"\\setlength\{\\abovecaptionskip\}\{[^}]*\}", "", inner)
        direct = None
        gm = re.findall(r"\\includegraphics(?:\[[^\]]*\])?\{(art/[^}]+)\}", inner)
        if gm and "tikzpicture" not in inner and len(gm) == 1:
            direct = gm[0]
        figs.append({"idx": i, "span": m.span(), "body": inner.strip(),
                     "caption": caption, "label": label, "direct": direct})
    return figs


def stage_figures() -> None:
    FIGDIR.mkdir(parents=True, exist_ok=True)
    workdir = BUILD / "figtex"
    workdir.mkdir(parents=True, exist_ok=True)
    src = strip_comments(join_continuations(read_tex()))
    figs = find_figures(src)
    manifest = []
    root_posix = str(ROOT).replace("\\", "/")
    for f in figs:
        name = f"fig{f['idx']:02d}"
        entry = {"idx": f["idx"], "label": f["label"], "caption": f["caption"]}
        if f["direct"]:
            entry["image"] = "DIRECT:" + f["direct"]
            manifest.append(entry)
            print(f"  {name}: direct art plate {f['direct']}")
            continue
        texfile = workdir / f"{name}.tex"
        doc = FIG_PREAMBLE.replace("%ROOT%", root_posix).replace("%BODY%", f["body"])
        texfile.write_text(doc, encoding="utf-8")
        print(f"  {name}: compiling ...")
        run(["pdflatex", "-interaction=nonstopmode", f"-output-directory={workdir}",
             str(texfile)])
        pdf = workdir / f"{name}.pdf"
        raw = workdir / f"{name}_raw"
        run(["pdftoppm", "-png", "-r", "300", "-singlefile", str(pdf), str(raw)])
        out = FIGDIR / f"{name}.png"
        run(["magick", str(raw) + ".png", "-trim", "+repage",
             "-bordercolor", "white", "-border", "16", str(out)])
        entry["image"] = f"figs/{name}.png"
        manifest.append(entry)
    (BUILD / "figures.json").write_text(json.dumps(manifest, indent=1), encoding="utf-8")
    print(f"  {len(manifest)} figures done -> {BUILD/'figures.json'}")


# --------------------------------------------------------------------------
# Stage: cover + art images
# --------------------------------------------------------------------------

def stage_cover() -> None:
    IMGDIR.mkdir(parents=True, exist_ok=True)
    # front panel: wrap is 12.7550 x 9.25 in; front trim starts at
    # 0.125 (bleed) + 6 (back) + 0.5050 (spine) = 6.63 in; 6 x 9 in panel.
    wrap = ROOT / "cover" / "cover_wrap.pdf"
    tmp = BUILD / "wrap300"
    run(["pdftoppm", "-png", "-r", "300", "-singlefile", str(wrap), str(tmp)])
    run(["magick", str(tmp) + ".png", "-crop", "1800x2700+1989+38", "+repage",
         "-quality", "92", str(IMGDIR / "cover.jpg")])
    print("  cover.jpg (1800x2700) from cover_wrap.pdf front panel")
    # chapter art + plates: resize to 1400px wide, JPEG to keep the file lean
    for png in sorted((ROOT / "art").glob("*.png")):
        out = IMGDIR / (png.stem + ".jpg")
        run(["magick", str(png), "-resize", "1400x1400>", "-quality", "86", str(out)])
    print("  art plates converted to JPEG")


# --------------------------------------------------------------------------
# bibliography from .bbl
# --------------------------------------------------------------------------

def bbl_clean(s: str) -> str:
    s = re.sub(r"\\bibnamedelim[a-z]\s?", " ", s)
    s = re.sub(r"\\bibinitperiod\s?", ".", s)
    s = re.sub(r"\\bibinitdelim\s?", " ", s)
    s = s.replace("\\bibrangedash", "\u2013").replace("\\hyphen", "-")
    return re.sub(r"\s+", " ", s).strip()


def parse_bbl() -> list[dict]:
    s = BBL.read_text(encoding="utf-8")
    entries = []
    for m in re.finditer(r"\\entry\{([^}]*)\}\{([^}]*)\}\{[^}]*\}\{[^}]*\}(.*?)\\endentry", s, re.S):
        key, typ, body = m.group(1), m.group(2), m.group(3)
        e = {"key": key, "type": typ, "fields": {}, "authors": [], "etal": False}
        if re.search(r"\\true\{moreauthor\}", body):
            e["etal"] = True
        am = re.search(r"\\name\{author\}\{\d+\}\{\}\{(.*?)\n\s*\}\n", body, re.S)
        if am:
            for pm in re.finditer(r"family=\{([^}]*)\}(?:,\s*familyi=\{[^}]*\})?(?:,\s*given=\{([^}]*)\})?",
                                  am.group(1)):
                e["authors"].append((bbl_clean(pm.group(1)), bbl_clean(pm.group(2) or "")))
        for fm in re.finditer(r"\\field\{([a-z]+)\}\{((?:[^{}]|\{[^{}]*\})*)\}", body):
            e["fields"][fm.group(1)] = bbl_clean(fm.group(2))
        for lm in re.finditer(r"\\list\{([a-z]+)\}\{\d+\}\{(.*?)\n\s*\}\n", body, re.S):
            items = [bbl_clean(x) for x in re.findall(r"\{([^{}]*)\}", lm.group(2))]
            e["fields"][lm.group(1)] = ", ".join(i for i in items if i)
        um = re.search(r"\\verb\{url\}\s*\\verb ([^\n]*)\n", body)
        if um:
            e["fields"]["url"] = um.group(1).strip()
        entries.append(e)
    return entries


def bib_entry_html(e: dict, inline) -> str:
    f = e["fields"]
    names = ", ".join(
        (f"{fam}, {giv}" if giv else fam) for fam, giv in e["authors"])
    if e["etal"]:
        names += " et al."
    parts = []
    if names:
        parts.append(names.rstrip(".") + ".")
    title = f.get("title", "")
    if title:
        if e["type"] in ("book", "collection", "mvbook"):
            parts.append(f"<em>{inline(title)}</em>.")
        else:
            parts.append("\u201c" + inline(title) + "\u201d.")
    jt = f.get("journaltitle")
    if jt:
        seg = f"<em>{inline(jt)}</em>"
        if f.get("volume"):
            seg += " " + f["volume"]
        if f.get("year"):
            seg += f" ({f['year']})"
        if f.get("pages"):
            seg += ", " + inline(f["pages"].replace("--", "\u2013"))
        parts.append(seg + ".")
    else:
        seg = ""
        if f.get("publisher"):
            seg = inline(f["publisher"])
            if f.get("location"):
                seg = inline(f["location"]) + ": " + seg
        if f.get("year"):
            seg = (seg + ", " if seg else "") + f["year"]
        if seg:
            parts.append(seg + ".")
    if f.get("note"):
        parts.append(inline(f["note"]) + ".")
    if f.get("url"):
        u = htmllib.escape(f["url"], quote=True)
        parts.append(f'<a href="{u}">{u}</a>')
    return " ".join(parts)


# --------------------------------------------------------------------------
# inline tex -> html
# --------------------------------------------------------------------------

MATH_SYMBOLS = {
    r"\hbar": "\u210f", r"\kappa": "\u03ba", r"\pi": "\u03c0",
    r"\times": "\u00d7", r"\sim": "\u223c", r"\approx": "\u2248",
    r"\propto": "\u221d", r"\pm": "\u00b1", r"\gg": "\u226b",
    r"\circ": "\u2218", r"\cdots": "\u22ef", r"\vdots": "\u22ee",
    r"\Delta": "\u0394", r"\alpha": "\u03b1", r"\omega": "\u03c9",
    r"\Omega": "\u03a9", r"\mu": "\u03bc", r"\sigma": "\u03c3",
    r"\eta": "\u03b7", r"\geq": "\u2265", r"\leq": "\u2264",
    r"\le": "\u2264", r"\ge": "\u2265", r"\Rightarrow": "\u21d2",
    r"\odot": "\u2299", r"\oint": "\u222e", r"\equal": "=",
    r"\ldots": "\u2026", r"\dots": "\u2026", r"\quad": "\u2003",
    r"\;": "\u2009", r"\,": "\u2009", r"\!": "",
}


def math_to_html(s: str, display: bool = False, _top: bool = True) -> str:
    """Convert a $...$ or \\[...\\] span (already html-escaped) to html."""
    s = replace_cmd2_all(s, "frac", lambda a, b: f"{math_core(a)}/{math_core(b)}")
    s = replace_cmd2_all(s, "tfrac", lambda a, b: f"{math_core(a)}/{math_core(b)}")
    s = replace_cmd_all(s, "mathrm", lambda a: a)
    s = replace_cmd_all(s, "text", lambda a: a)
    s = replace_cmd_all(s, "dot", lambda a: a + "̇")
    s = re.sub(r"\\dot\s+([A-Za-z])", "\\1̇", s)
    for k, v in MATH_SYMBOLS.items():
        s = s.replace(k, v)
    # superscripts and subscripts, innermost first
    def subsup(t: str) -> str:
        changed = True
        while changed:
            changed = False
            m = re.search(r"([\^_])\{((?:[^{}])*)\}", t)
            if m:
                tag = "sup" if m.group(1) == "^" else "sub"
                t = t[:m.start()] + f"<{tag}>{subsup(m.group(2))}</{tag}>" + t[m.end():]
                changed = True
                continue
            m = re.search(r"([\^_])([A-Za-z0-9\u2299\u2212+-])", t)
            if m:
                tag = "sup" if m.group(1) == "^" else "sub"
                t = t[:m.start()] + f"<{tag}>{m.group(2)}</{tag}>" + t[m.end():]
                changed = True
        return t
    # handle nested ^{10^{118}} by processing innermost braces first via recursion
    def nest(t: str) -> str:
        m = re.search(r"([\^_])\{", t)
        if not m:
            return subsup(t)
        end = balanced(t, m.end() - 1)
        inner = nest(t[m.end():end - 1])
        tag = "sup" if m.group(1) == "^" else "sub"
        return subsup(t[:m.start()]) + f"<{tag}>{inner}</{tag}>" + nest(t[end:])
    s = nest(s)
    s = s.replace("-", "\u2212")
    if _top:
        # italicise standalone latin letters (variables) in text runs only,
        # never inside tags already emitted by sup/sub/frac handling
        parts = re.split(r"(<[^>]+>)", s)
        for i, p in enumerate(parts):
            if not p.startswith("<"):
                parts[i] = re.sub(r"(?<![A-Za-z&#;])([A-Za-z])(?![A-Za-z;])",
                                  lambda m: f"<i>{m.group(1)}</i>", p)
        s = "".join(parts)
        cls = "dispmath" if display else "math"
        return f'<span class="{cls}">{s}</span>'
    return s


def math_core(s: str) -> str:
    """math_to_html minus the wrapper and italics, for fraction arguments."""
    return math_to_html(s, _top=False)


SIMPLE_REPL = [
    ("\\textcopyright{}", "\u00a9"), ("\\textcopyright", "\u00a9"),
    ("\\ding{166}", "\u2766"),
    ("\\O ", "\u00d8"), ("\\O{}", "\u00d8"), ("\\aa ", "\u00e5"), ("\\aa{}", "\u00e5"),
    ("\\ldots{}", "\u2026"), ("\\ldots", "\u2026"), ("\\dots", "\u2026"),
    ("\\%", "%"), ("\\&amp;", "&amp;"), ("\\$", "$"), ("\\#", "#"), ("\\_", "_"),
    ("\\S", "§"),
    ("\\,", "\u2009"), ("\\;", "\u2009"),
    ("\\noindent", ""), ("\\strut", ""), ("\\null", ""),
    ("\\centering", ""), ("\\raggedright", ""),
    ("\\vfill", ""), ("\\hfill", " "), ("\\clearpage", ""), ("\\cleardoublepage", ""),
    ("\\newpage", ""), ("\\frenchspacing", ""), ("\\medskip", ""), ("\\smallskip", ""),
    ("\\bigskip", ""), ("\\indent", ""), ("\\quad", "\u2003"), ("\\qquad", "\u2003\u2003"),
    ("\\par", "\n\n"),
    ("~", "\u00a0"),
    ("---", "\u2014"), ("--", "\u2013"),
]

STYLE_GROUPS = [
    (r"\small\itshape", "small-italic"), (r"\itshape\small", "small-italic"),
    (r"\large\itshape", "large-italic"), (r"\Large\itshape", "large-italic"),
    (r"\small", "small"), (r"\footnotesize", "small"), (r"\scriptsize", "small"),
    (r"\large", "large"), (r"\Large", "large"), (r"\Huge\bfseries", "huge-bold"),
    (r"\itshape", "italic"), (r"\bfseries", "bold"),
]


ACCENTS = {"'": "\u0301", "`": "\u0300", '"': "\u0308", "^": "\u0302", "~": "\u0303"}


class Inline:
    """Inline converter; collects footnotes and citations per chapter.

    Nested arguments are NOT recursively converted: each pass runs over the
    whole string, so commands inside already-emitted tags are picked up by the
    later passes. Footnote bodies are extracted early and run through the same
    command pipeline separately."""

    def __init__(self, cites: dict[str, int]):
        self.cites = cites
        self.footnotes: list[str] = []

    def convert(self, s: str) -> str:
        s = htmllib.escape(s, quote=False)
        # line breaks before math, so \\[2pt] is not read as display math
        s = re.sub(r"\\\\\[[^\]]*\]", "<br/>", s)
        s = s.replace("\\\\", "<br/>")
        # display math
        s = re.sub(r"\\\[(.*?)\\\]",
                   lambda m: math_to_html(m.group(1).strip(), display=True), s, flags=re.S)
        # inline math
        parts = s.split("$")
        if len(parts) % 2 == 0:
            warn(f"odd math delimiters in: {s[:80]!r}")
        s = "".join(math_to_html(p) if n % 2 == 1 else p for n, p in enumerate(parts))
        return self._cmds(s)

    def _cmds(self, s: str) -> str:
        # footnotes first: move the body out, convert it independently
        def fn(arg: str) -> str:
            self.footnotes.append(self._cmds(arg))
            n = len(self.footnotes)
            return (f'<a class="noteref" epub:type="noteref" '
                    f'href="#fn{n}" id="fnref{n}"><sup>{n}</sup></a>')
        s = replace_cmd_all(s, "footnote", fn)

        # citations, with optional postnote: \cite[I.967--982]{key}
        def cite_repl(m0) -> str:
            post = m0.group(1)
            start = m0.end()
            end = balanced(s_holder[0], start - 1)
            keys = s_holder[0][start:end - 1]
            nums = []
            for k in keys.split(","):
                k = k.strip()
                if k in self.cites:
                    nums.append(self.cites[k])
                else:
                    warn(f"unknown cite key {k!r}")
            links = ", ".join(f'<a href="references.xhtml#ref{n}">{n}</a>'
                              for n in sorted(nums))
            if post:
                p = post[1:-1]
                if re.fullmatch(r"[\d\s]+--[\d\s]+", p):
                    p = "pp. " + p
                elif re.fullmatch(r"\d+", p):
                    p = "p. " + p
                posttxt = f", {p}"
            else:
                posttxt = ""
            return f'\u00a0<span class="cite">[{links}{posttxt}]</span>', end
        s_holder = [s]
        while True:
            m = re.search(r"\\cite(\[[^\]]*\])?\{", s_holder[0])
            if not m:
                break
            repl, end = cite_repl(m)
            s_holder[0] = s_holder[0][:m.start()] + repl + s_holder[0][end:]
        s = s_holder[0]

        # index wrappers keep their text, drop the index side
        s = replace_cmd_all(s, "Ix", lambda a: a)
        s = replace_cmd2_all(s, "Iyk", lambda a, b: b)
        s = replace_cmd_all(s, "Iy", lambda a: a)
        s = replace_cmd_all(s, "index", lambda a: "")
        # semantic commands - tags around raw content; later passes fill in
        s = replace_cmd_all(s, "emph", lambda a: f"<em>{a}</em>")
        s = replace_cmd_all(s, "textbf", lambda a: f"<strong>{a}</strong>")
        s = replace_cmd_all(s, "textit", lambda a: f"<em>{a}</em>")
        s = replace_cmd_all(s, "enquote", lambda a: "\u201c" + a + "\u201d")
        s = replace_cmd_all(s, "url", lambda a: f'<a href="{a}">{a}</a>'
                            if a.startswith("http") else f'<a href="https://{a}">{a}</a>')
        s = replace_cmd_all(s, "mbox", lambda a: a)
        s = replace_cmd_all(s, "hbox", lambda a: a)
        s = replace_cmd2_all(s, "parbox", lambda w, a: a)
        s = replace_cmd_all(s, "fbox", lambda a: f'<span class="fbox">{a}</span>')
        s = replace_cmd2_all(s, "lettrine",
                             lambda a, b: f'<span class="dropcap">{a}</span>{b}')
        s = replace_cmd_all(s, "speaker",
                            lambda a: f'<span class="speaker">{a}:</span> ')
        s = replace_cmd2_all(s, "markboth", lambda a, b: "")
        s = replace_cmd_all(s, "thispagestyle", lambda a: "")
        s = s.replace("\\vspace*", "\\vspace")
        s = replace_cmd_all(s, "vspace", lambda a: "")
        s = replace_cmd_all(s, "label", lambda a: "")
        # style groups {\small ...}
        for cmd, cls in STYLE_GROUPS:
            pat = "{" + cmd.replace("\\", "\\\\") + r"(?![a-zA-Z])"
            while True:
                m = re.search(pat, s)
                if not m:
                    break
                end = balanced(s, m.start())
                body = s[m.end():end - 1].strip()
                s = (s[:m.start()] + f'<span class="{cls}">{body}</span>' + s[end:])
        # bare font switches (box/parbox interiors are styled by CSS instead)
        s = re.sub(r"\\(small|footnotesize|scriptsize|normalsize|large|Large|itshape|bfseries)\b\s*", "", s)
        # separators (\End before \En: prefix collision)
        s = s.replace("\\End", "\u2766")
        s = s.replace("\\En", '<div class="sep">\u2766</div>')
        # accents: \'e  \"o  etc., with optional braces
        s = re.sub(r"\\(['`\"^~])\{?([a-zA-Z])\}?",
                   lambda m: __import__("unicodedata").normalize(
                       "NFC", m.group(2) + ACCENTS[m.group(1)]), s)
        for a, b in SIMPLE_REPL:
            s = s.replace(a, b)
        # tex quotes
        s = s.replace("``", "\u201c").replace("''", "\u201d")
        s = re.sub(r"`(?=\w)", "\u2018", s)
        s = re.sub(r"(?<=[\w.,!?\u201d])'", "\u2019", s)
        # residual grouping braces (bib name protection etc.)
        s = s.replace("{", "").replace("}", "")
        return s


# --------------------------------------------------------------------------
# block-level conversion
# --------------------------------------------------------------------------

def tabular_to_html(block: str, inline: Inline) -> str:
    m = re.search(r"\\begin\{tabular\}\{[^}]*\}(.*?)\\end\{tabular\}", block, re.S)
    body = m.group(1)
    body = re.sub(r"\\(toprule|midrule|bottomrule|addlinespace(\[[^\]]*\])?)", "", body)
    rows = [r.strip() for r in re.split(r"\\\\", body) if r.strip()]
    out = ["<table>"]
    for ri, row in enumerate(rows):
        cells = [inline.convert(c.strip()) for c in re.split(r"(?<!\\)&", row)]
        tag = "th" if ri == 0 else "td"
        out.append("<tr>" + "".join(f"<{tag}>{c}</{tag}>" for c in cells) + "</tr>")
    out.append("</table>")
    return "\n".join(out)


def itemize_to_html(block: str, inline: Inline) -> str:
    m = re.search(r"\\begin\{itemize\}(.*?)\\end\{itemize\}", block, re.S)
    items = re.split(r"\\item\s*", m.group(1))
    lis = [f"<li>{inline.convert(it.strip())}</li>" for it in items if it.strip()]
    return "<ul>\n" + "\n".join(lis) + "\n</ul>"


def center_to_html(body: str, inline: Inline) -> str:
    inner = body
    mm = re.search(r"\\begin\{minipage\}\{[^}]*\}(.*?)\\end\{minipage\}", inner, re.S)
    if mm:
        inner = mm.group(1)
    return f'<div class="centerbox">{inline.convert(inner.strip())}</div>'


def figure_html(entry: dict, inline: Inline, fignum: str | None) -> str:
    img = entry["image"]
    if img.startswith("DIRECT:"):
        stem = Path(img.split(":", 1)[1]).name
        src = f"../images/{stem}.jpg"
        cls = "plate"
    else:
        src = "../" + img
        cls = "diagram"
    cap = ""
    if entry["caption"]:
        prefix = f"Figure {fignum}: " if fignum else ""
        cap = f"<figcaption>{prefix}{inline.convert(entry['caption'])}</figcaption>"
    return (f'<figure class="{cls}"><img src="{src}" '
            f'alt="{htmllib.escape(entry.get("label") or "figure", quote=True)}"/>'
            f"{cap}</figure>")


# --------------------------------------------------------------------------
# Stage: html
# --------------------------------------------------------------------------

XHTML_HEAD = """<?xml version="1.0" encoding="utf-8"?>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops">
<head><title>{title}</title>
<link rel="stylesheet" type="text/css" href="../ebook.css"/></head>
<body>
"""
XHTML_FOOT = "</body>\n</html>\n"

ROMAN = ["I", "II", "III", "IV", "V"]


def fignum_from_aux(label: str | None) -> str | None:
    if not label:
        return None
    aux = (MS / "billiard_ball_universe.aux").read_text(encoding="utf-8", errors="replace")
    m = re.search(r"\\newlabel\{" + re.escape(label) + r"\}\{\{([^}]*)\}", aux)
    return m.group(1) if m else None


def stage_html() -> None:
    if TEXTDIR.exists():
        shutil.rmtree(TEXTDIR, ignore_errors=True)
    TEXTDIR.mkdir(parents=True, exist_ok=True)
    src = join_continuations(read_tex())
    body = src[src.index(r"\frontmatter"):src.index(r"\printbibliography")]
    # figure replacement BEFORE comment stripping (same order as stage_figures,
    # which also strips comments first - so strip first here too)
    body = strip_comments(body)
    figs = find_figures(body)
    manifest = json.loads((BUILD / "figures.json").read_text(encoding="utf-8"))
    if len(figs) != len(manifest):
        raise RuntimeError(f"figure count mismatch: {len(figs)} in tex, {len(manifest)} in manifest")
    for f in reversed(figs):
        a, b = f["span"]
        body = body[:a] + f"\n\nFIGTOKEN{f['idx']:02d}\n\n" + body[b:]
    # coda reprise plate (not a figure environment)
    body = re.sub(
        r"\{\\thispagestyle\{empty\}\\null\\vfill\s*\\centerline\{\\includegraphics\[[^\]]*\]\s*\{cover/cover_recursive_ball\}\}\s*\\vfill\}",
        "\n\nCODAPLATE\n\n", body)
    body = re.sub(r"\\ifodd\\value\{page\}[^\n]*\n", "", body)
    # drop draft apparatus
    body = re.sub(r"\\begin\{draftnote\}.*?\\end\{draftnote\}", "", body, flags=re.S)
    body = replace_cmd_all(body, "draftstatus", lambda a: "")
    # chapter art -> block token
    body = replace_cmd_all(body, "chapterart", lambda a: f"\n\nARTTOKEN:{a}\n\n")

    # citations map
    bib = parse_bbl()
    cites = {e["key"]: i for i, e in enumerate(bib, 1)}

    # split into structural units
    pat = re.compile(r"^\\(part|chapter|addchap|appendix|mainmatter|backmatter|tableofcontents)\*?(?=[\{\s])",
                     re.M)
    units = []  # (kind, title, text)
    pos = 0
    matches = list(pat.finditer(body))
    front_text = body[:matches[0].start()]
    units.append(("FRONT", "", front_text))
    for n, m in enumerate(matches):
        kind = m.group(1)
        after = m.end()
        title = ""
        if body[after:after + 1] == "{" or body[after:].lstrip().startswith("{"):
            bstart = body.index("{", after)
            bend = balanced(body, bstart)
            title = body[bstart + 1:bend - 1]
            after = bend
        end = matches[n + 1].start() if n + 1 < len(matches) else len(body)
        units.append((kind, title, body[after:end]))

    chapters = []   # dicts: file, heading_html, toc_title, body_html
    chapno = 0
    partno = 0
    appendix_mode = False
    app_letters = iter("AB")
    spine_files = []

    def new_inline():
        return Inline(cites)

    def blocks_to_html(text: str, inline: Inline) -> str:
        # extract block environments first
        tokens = {}

        def stash(key, val):
            tokens[key] = val
            return f"\n\n{key}\n\n"

        for env, conv in (("table", tabular_to_html), ("itemize", itemize_to_html)):
            k = 0
            while True:
                m = re.search(r"\\begin\{" + env + r"\}.*?\\end\{" + env + r"\}", text, re.S)
                if not m:
                    break
                k += 1
                text = text[:m.start()] + stash(f"BLK{env.upper()}{k}", conv(m.group(0), inline)) + text[m.end():]
        k = 0
        while True:
            m = re.search(r"\\begin\{center\}(.*?)\\end\{center\}", text, re.S)
            if not m:
                break
            k += 1
            text = text[:m.start()] + stash(f"BLKCENTER{k}", center_to_html(m.group(1), inline)) + text[m.end():]

        paras = re.split(r"\n\s*\n", text)
        out = []
        for p in paras:
            p = p.strip()
            if not p:
                continue
            if p in tokens:
                out.append(tokens[p])
                continue
            fm = re.fullmatch(r"FIGTOKEN(\d\d)", p)
            if fm:
                e = manifest[int(fm.group(1)) - 1]
                out.append(figure_html(e, inline, fignum_from_aux(e["label"])))
                continue
            if p == "CODAPLATE":
                out.append('<figure class="plate"><img src="../images/cover_recursive_ball.jpg" alt="The recursive ball"/></figure>')
                continue
            am = re.fullmatch(r"ARTTOKEN:(art/[^\s]+)", p)
            if am:
                stem = Path(am.group(1)).name
                out.append(f'<figure class="chapterart"><img src="../images/{stem}.jpg" alt="chapter plate"/></figure>')
                continue
            sm = re.match(r"\\section\*?\{", p)
            if sm:
                bend = balanced(p, sm.end() - 1)
                title = p[sm.end():bend - 1]
                rest = p[bend:].strip()
                out.append(f"<h2>{inline.convert(title)}</h2>")
                if rest:
                    p = rest
                else:
                    continue
            pm = re.match(r"\\paragraph\{", p)
            if pm:
                bend = balanced(p, pm.end() - 1)
                title = p[pm.end():bend - 1]
                rest = p[bend:].strip()
                out.append(f'<p class="runin"><strong>{inline.convert(title)}</strong> '
                           f"{inline.convert(rest)}</p>")
                continue
            h = inline.convert(p)
            if h.strip():
                # a paragraph that is only a separator div should not nest in <p>
                if h.strip().startswith('<div class="sep">'):
                    out.append(h.strip())
                else:
                    cls = ' class="speakerline"' if '<span class="speaker">' in h else ""
                    out.append(f"<p{cls}>{h}</p>")
        return "\n".join(out)

    def finish_chapter(fname, title_html, toc_title, body_text, inline, heading_tag="h1"):
        body_html = blocks_to_html(body_text, inline)
        notes = ""
        if inline.footnotes:
            items = "\n".join(
                f'<aside epub:type="footnote" id="fn{i}" class="footnote">'
                f'<p><a href="#fnref{i}">{i}.</a> {t}</p></aside>'
                for i, t in enumerate(inline.footnotes, 1))
            notes = f'\n<hr class="fnrule"/>\n<section class="footnotes">\n{items}\n</section>'
        doc = (XHTML_HEAD.format(title=htmllib.escape(toc_title)) +
               f"<{heading_tag}>{title_html}</{heading_tag}>\n" + body_html + notes + XHTML_FOOT)
        (TEXTDIR / fname).write_text(doc, encoding="utf-8")
        chapters.append({"file": fname, "toc": toc_title})
        spine_files.append(fname)

    plain = re.compile(r"<[^>]+>")
    for kind, title, text in units:
        inline = new_inline()
        if kind == "FRONT":
            handle_front(text, inline)
            continue
        if kind == "mainmatter" or kind == "tableofcontents":
            continue
        if kind == "backmatter":
            continue
        if kind == "appendix":
            appendix_mode = True
            # the \appendix token may carry trailing text (it does not here)
            continue
        if kind == "part":
            partno += 1
            inline2 = new_inline()
            t = inline2.convert(title)
            fname = f"part{partno}.xhtml"
            doc = (XHTML_HEAD.format(title=f"Part {ROMAN[partno-1]}") +
                   f'<div class="partpage"><p class="partnum">Part {ROMAN[partno-1]}</p>'
                   f'<h1 class="parttitle">{t}</h1></div>' + XHTML_FOOT)
            (TEXTDIR / fname).write_text(doc, encoding="utf-8")
            chapters.append({"file": fname, "toc": f"Part {ROMAN[partno-1]}: {plain.sub('', t)}"})
            spine_files.append(fname)
            continue
        t_html = inline.convert(title)
        t_plain = plain.sub("", t_html)
        if kind == "chapter" and not appendix_mode:
            chapno += 1
            head = f'<span class="chapnum">Chapter {chapno}</span><br/>{t_html}'
            finish_chapter(f"ch{chapno}.xhtml", head, f"Chapter {chapno}: {t_plain}", text, inline)
        elif kind == "chapter" and appendix_mode:
            letter = next(app_letters)
            head = f'<span class="chapnum">Appendix {letter}</span><br/>{t_html}'
            finish_chapter(f"app{letter}.xhtml", head, f"Appendix {letter}: {t_plain}", text, inline)
        elif kind == "addchap":
            slugs = {"How": "howtoread", "Coda": "coda", "Epilogue": "epilogue",
                     "A Note": "howmade"}
            slug = next((v for k, v in slugs.items() if t_plain.startswith(k)),
                        f"x{len(chapters)}")
            finish_chapter(f"{slug}.xhtml", t_html, t_plain, text, inline)

    # references
    inline = new_inline()
    items = []
    for i, e in enumerate(bib, 1):
        items.append(f'<p class="bibentry" id="ref{i}">[{i}]\u2002'
                     + bib_entry_html(e, inline.convert) + "</p>")
    doc = (XHTML_HEAD.format(title="References") + "<h1>References</h1>\n"
           + "\n".join(items) + XHTML_FOOT)
    (TEXTDIR / "references.xhtml").write_text(doc, encoding="utf-8")
    chapters.append({"file": "references.xhtml", "toc": "References"})
    spine_files.append("references.xhtml")

    (BUILD / "spine.json").write_text(json.dumps(chapters, indent=1), encoding="utf-8")
    print(f"  {len(chapters)} content files -> {TEXTDIR}")
    # residual-command check
    residual = {}
    for f in TEXTDIR.glob("*.xhtml"):
        for m in re.finditer(r"\\[a-zA-Z]+|\\[^a-zA-Z\s]", f.read_text(encoding="utf-8")):
            residual.setdefault(m.group(0), set()).add(f.name)
    for cmd, files in sorted(residual.items()):
        warn(f"residual tex command {cmd} in {', '.join(sorted(files))}")


def handle_front(text: str, inline: Inline) -> None:
    """Title page, kolofon, dedication, how-to-read come from the FRONT unit."""
    # title page
    doc = (XHTML_HEAD.format(title=BOOK_TITLE) +
           '<div class="titlepage">'
           '<h1 class="booktitle">The Billiard Ball Universe</h1>'
           '<p class="subtitle"><em>A World With No Bottom</em></p>'
           f'<p class="authorname">{AUTHOR}</p>'
           '<p class="edline">First edition</p>'
           "</div>" + XHTML_FOOT)
    (TEXTDIR / "titlepage.xhtml").write_text(doc, encoding="utf-8")
    # kolofon: from the imprint group in the source
    m = re.search(r"Copyright \\textcopyright.*?Typeset by the author in Palatino\.",
                  text, re.S)
    if not m:
        raise RuntimeError("imprint block not found")
    imprint = m.group(0)
    imprint = imprint.replace(
        "ISBN: 978-87-977519-1-6 (paperback)",
        f"ISBN: {ISBN_EBOOK} (ebook)\n\n\\noindent ISBN: {ISBN_PRINT} (paperback)")
    imprint = imprint.replace(
        "Typeset by the author in Palatino.",
        "Typeset by the author; the print edition is set in Palatino.")
    paras = [f"<p>{inline.convert(p.strip())}</p>"
             for p in re.split(r"\n\s*\n", imprint) if p.strip()]
    doc = (XHTML_HEAD.format(title="Copyright") + '<div class="kolofon">'
           + "\n".join(paras) + "</div>" + XHTML_FOOT)
    (TEXTDIR / "kolofon.xhtml").write_text(doc, encoding="utf-8")
    # dedication
    dm = re.search(r"\{\\large\\itshape (For my brother[^}]*)\}", text)
    ded = inline.convert(dm.group(1)) if dm else ""
    doc = (XHTML_HEAD.format(title="Dedication") +
           f'<div class="dedication"><p>{ded}</p></div>' + XHTML_FOOT)
    (TEXTDIR / "dedication.xhtml").write_text(doc, encoding="utf-8")


# --------------------------------------------------------------------------
# Stage: pack
# --------------------------------------------------------------------------

CONTAINER_XML = """<?xml version="1.0" encoding="UTF-8"?>
<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">
 <rootfiles><rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/></rootfiles>
</container>
"""


def stage_pack() -> None:
    import datetime
    chapters = json.loads((BUILD / "spine.json").read_text(encoding="utf-8"))
    front_order = ["titlepage.xhtml", "kolofon.xhtml", "dedication.xhtml"]
    spine = front_order + [c["file"] for c in chapters if c["file"] not in front_order]

    manifest_items = []
    spine_items = []
    for i, f in enumerate(spine):
        mid = f"t{i}"
        manifest_items.append(f'<item id="{mid}" href="text/{f}" media-type="application/xhtml+xml"/>')
        spine_items.append(f'<itemref idref="{mid}"/>')
    img_items = []
    for i, img in enumerate(sorted(IMGDIR.glob("*.*")) ):
        prop = ' properties="cover-image"' if img.name == "cover.jpg" else ""
        mt = "image/jpeg" if img.suffix == ".jpg" else "image/png"
        img_items.append(f'<item id="img{i}" href="images/{img.name}" media-type="{mt}"{prop}/>')
    for i, img in enumerate(sorted(FIGDIR.glob("*.png"))):
        img_items.append(f'<item id="fig{i}" href="figs/{img.name}" media-type="image/png"/>')

    nav_lis = []
    nav_lis.append('<li><a href="text/titlepage.xhtml">Title Page</a></li>')
    nav_lis.append('<li><a href="text/kolofon.xhtml">Copyright</a></li>')
    nav_lis.append('<li><a href="text/dedication.xhtml">Dedication</a></li>')
    for c in chapters:
        nav_lis.append(f'<li><a href="text/{c["file"]}">{htmllib.escape(c["toc"])}</a></li>')
    nav = f"""<?xml version="1.0" encoding="utf-8"?>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops">
<head><title>Contents</title><link rel="stylesheet" type="text/css" href="ebook.css"/></head>
<body><nav epub:type="toc" id="toc"><h1>Contents</h1><ol>
{chr(10).join(nav_lis)}
</ol></nav>
<nav epub:type="landmarks" hidden="hidden"><ol>
<li><a epub:type="toc" href="#toc">Contents</a></li>
<li><a epub:type="bodymatter" href="text/howtoread.xhtml">Begin Reading</a></li>
</ol></nav></body></html>
"""
    modified = datetime.datetime.now(datetime.timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
    opf = f"""<?xml version="1.0" encoding="utf-8"?>
<package xmlns="http://www.idpf.org/2007/opf" version="3.0" unique-identifier="bookid" xml:lang="en">
<metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
<dc:identifier id="bookid">urn:isbn:{ISBN_EBOOK.replace('-', '')}</dc:identifier>
<dc:title>{htmllib.escape(BOOK_TITLE)}</dc:title>
<dc:creator id="author">{AUTHOR}</dc:creator>
<dc:language>en</dc:language>
<dc:publisher>{AUTHOR}</dc:publisher>
<dc:date>2026</dc:date>
<meta property="dcterms:modified">{modified}</meta>
</metadata>
<manifest>
<item id="nav" href="nav.xhtml" media-type="application/xhtml+xml" properties="nav"/>
<item id="css" href="ebook.css" media-type="text/css"/>
{chr(10).join(manifest_items)}
{chr(10).join(img_items)}
</manifest>
<spine>
{chr(10).join(spine_items)}
</spine>
</package>
"""
    # xml well-formedness check of every xhtml
    import xml.etree.ElementTree as ET
    for f in list(TEXTDIR.glob("*.xhtml")):
        try:
            ET.fromstring(f.read_text(encoding="utf-8"))
        except ET.ParseError as e:
            raise RuntimeError(f"malformed XHTML {f.name}: {e}")
    ET.fromstring(nav)
    ET.fromstring(opf)

    if EPUB_OUT.exists():
        EPUB_OUT.unlink()
    with zipfile.ZipFile(EPUB_OUT, "w") as z:
        z.writestr("mimetype", "application/epub+zip", compress_type=zipfile.ZIP_STORED)
        z.writestr("META-INF/container.xml", CONTAINER_XML)
        z.writestr("OEBPS/content.opf", opf)
        z.writestr("OEBPS/nav.xhtml", nav)
        z.write(EB / "ebook.css", "OEBPS/ebook.css")
        for f in spine:
            z.write(TEXTDIR / f, f"OEBPS/text/{f}")
        for img in IMGDIR.glob("*.*"):
            z.write(img, f"OEBPS/images/{img.name}")
        for img in FIGDIR.glob("*.png"):
            z.write(img, f"OEBPS/figs/{img.name}")
    size = EPUB_OUT.stat().st_size / 1e6
    print(f"  {EPUB_OUT.name}: {size:.1f} MB, {len(spine)} spine items")


# --------------------------------------------------------------------------

def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--stage", choices=["figures", "cover", "html", "pack", "all"],
                    default="all")
    args = ap.parse_args()
    BUILD.mkdir(exist_ok=True)
    stages = {"figures": stage_figures, "cover": stage_cover,
              "html": stage_html, "pack": stage_pack}
    order = ["figures", "cover", "html", "pack"] if args.stage == "all" else [args.stage]
    for st in order:
        print(f"== stage: {st}")
        stages[st]()
    if WARNINGS:
        print(f"\n{len(WARNINGS)} WARNING(S) - resolve before shipping:")
        for w in WARNINGS:
            print("  -", w)
        sys.exit(2)
    print("\nOK - no warnings")


if __name__ == "__main__":
    main()
