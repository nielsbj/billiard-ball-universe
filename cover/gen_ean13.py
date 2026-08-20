# SPDX-FileCopyrightText: 2026 Niels Bonde Jensen
# SPDX-License-Identifier: MIT
"""Generate an EAN-13 symbol as a self-contained TikZ macro.

Writes ean13.tex beside this file. The pattern is computed from the EAN-13
spec, then DECODED BACK from the emitted bit string before anything is
written, so a mistake in the encoding tables cannot reach the cover file.

Run from cover/:  python gen_ean13.py
Then verify the printed result with scan_ean13.py, which rasterises the built
cover and reads the bars back out as pixels.
"""
import io, os, sys

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')

L = ["0001101", "0011001", "0010011", "0111101", "0100011",
     "0110001", "0101111", "0111011", "0110111", "0001011"]
G = ["0100111", "0110011", "0011011", "0100001", "0011101",
     "0111001", "0000101", "0010001", "0001001", "0010111"]
R = ["1110010", "1100110", "1101100", "1000010", "1011100",
     "1001110", "1010000", "1000100", "1001000", "1110100"]
PARITY = ["LLLLLL", "LLGLGG", "LLGGLG", "LLGGGL", "LGLLGG",
          "LGGLLG", "LGGGLL", "LGLGLG", "LGLGGL", "LGGLGL"]

ISBN13 = "9788797751916"
ISBN_HUMAN = "ISBN 978-87-977519-1-6"


def checkdigit(d12):
    s = sum(int(c) * (1 if i % 2 == 0 else 3) for i, c in enumerate(d12))
    return (10 - s % 10) % 10


def encode(digits):
    assert len(digits) == 13 and digits.isdigit()
    assert checkdigit(digits[:12]) == int(digits[12]), "check digit is wrong"
    d = [int(c) for c in digits]
    bits = "101"
    for i, p in enumerate(PARITY[d[0]]):
        bits += (L if p == "L" else G)[d[1 + i]]
    bits += "01010"
    for i in range(6):
        bits += R[d[7 + i]]
    bits += "101"
    assert len(bits) == 95, len(bits)
    return bits


def decode(bits):
    """Independent read-back: recover the 13 digits from the bit pattern."""
    assert len(bits) == 95
    assert bits[:3] == "101" and bits[45:50] == "01010" and bits[92:] == "101", "guards"
    parity, left = "", ""
    for i in range(6):
        c = bits[3 + 7 * i:10 + 7 * i]
        if c in L:
            parity += "L"
            left += str(L.index(c))
        elif c in G:
            parity += "G"
            left += str(G.index(c))
        else:
            raise ValueError("bad left char %d: %s" % (i, c))
    first = PARITY.index(parity)
    right = ""
    for i in range(6):
        c = bits[50 + 7 * i:57 + 7 * i]
        if c not in R:
            raise ValueError("bad right char %d: %s" % (i, c))
        right += str(R.index(c))
    return "%d%s%s" % (first, left, right)


bits = encode(ISBN13)
got = decode(bits)
assert got == ISBN13, "round trip failed: %s != %s" % (got, ISBN13)
print("encoded  :", bits)
print("decoded  :", got, "== ISBN13 OK")
print("check dig:", checkdigit(ISBN13[:12]), "== ", ISBN13[12])

# ---------------------------------------------------------------- geometry
MAG = 0.90                     # magnification; EAN-13 permits 0.80-2.00
M = 0.33 / 25.4 * MAG          # module width, inches
H_NORM = 22.85 / 25.4 * MAG    # normal bar height
H_GUARD = H_NORM + 5 * M       # guard bars run 5 modules lower
QL, QR = 11, 7                 # quiet zones, in modules
TOTAL = (95 + QL + QR) * M

# guard modules (start / centre / end) run long
long_mod = set(range(0, 3)) | set(range(45, 50)) | set(range(92, 95))

# merge runs of 1-modules that share a height, so the file stays small
bars, i = [], 0
while i < 95:
    if bits[i] == "1":
        j, tall = i, i in long_mod
        while j < 95 and bits[j] == "1" and (j in long_mod) == tall:
            j += 1
        bars.append((i, j - i, tall))
        i = j
    else:
        i += 1

lines = []
lines.append("%% ean13.tex --- EAN-13 for %s, generated, do not hand-edit." % ISBN_HUMAN)
lines.append("%% Pattern computed from the EAN-13 spec and decoded back to %s before" % ISBN13)
lines.append("% emission; regenerate with cover/gen_ean13.py if the ISBN ever changes,")
lines.append("% and verify the built cover with cover/scan_ean13.py.")
lines.append("% \\EANthirteen{x}{y}: bottom-left of the LEFT QUIET ZONE at (x,y), units of")
lines.append("%% the enclosing tikzpicture (x=1in,y=1in). Symbol is %.4f x %.4f in at %d%% mag."
             % (TOTAL, H_GUARD, round(MAG * 100)))
lines.append("\\newcommand{\\EANthirteen}[2]{%")
lines.append("  \\begin{scope}[shift={(#1,#2)}]")
lines.append("    %% quiet zones: the symbol must sit on unbroken white")
lines.append("    \\fill[white] (%.5f,%.5f) rectangle (%.5f,%.5f);"
             % (-0.04, -0.115, TOTAL + 0.04, H_GUARD + 0.155))
for start, width, tall in bars:
    x = (QL + start) * M
    h = H_GUARD if tall else H_NORM
    y = 0.0 if tall else 5 * M
    lines.append("    \\fill[black] (%.5f,%.5f) rectangle (%.5f,%.5f);"
                 % (x, y, x + width * M, y + h))

d = ISBN13
lines.append("    %% human-readable: leading digit in the left quiet zone, groups of six")
lines.append("    \\node[anchor=base east,inner sep=0pt,black] at (%.5f,%.5f) "
             "{\\sffamily\\fontsize{7}{7}\\selectfont %s};"
             % (10.5 * M, -0.008, d[0]))
lines.append("    \\node[anchor=base,inner sep=0pt,black] at (%.5f,%.5f) "
             "{\\sffamily\\fontsize{7}{7}\\selectfont\\textls[110]{%s}};"
             % ((QL + 3 + 21) * M, -0.008, d[1:7]))
lines.append("    \\node[anchor=base,inner sep=0pt,black] at (%.5f,%.5f) "
             "{\\sffamily\\fontsize{7}{7}\\selectfont\\textls[110]{%s}};"
             % ((QL + 50 + 21) * M, -0.008, d[7:]))
lines.append("    %% the registry wants the ISBN itself readable, not only the EAN digits")
lines.append("    \\node[anchor=south,inner sep=0pt,black] at (%.5f,%.5f) "
             "{\\sffamily\\fontsize{7.5}{8}\\selectfont\\textls[60]{%s}};"
             % (TOTAL / 2, H_GUARD + 0.035, ISBN_HUMAN))
lines.append("  \\end{scope}}")

out = "\n".join(lines) + "\n"
dest = os.path.join(os.path.dirname(os.path.abspath(__file__)), "ean13.tex")
open(dest, "w", encoding="utf-8", newline="\n").write(out)
print("\nwrote cover/ean13.tex: %d bars, symbol %.4f x %.4f in (mag %d%%)"
      % (len(bars), TOTAL, H_GUARD, round(MAG * 100)))
