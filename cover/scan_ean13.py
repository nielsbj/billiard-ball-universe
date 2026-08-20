# SPDX-FileCopyrightText: 2026 Niels Bonde Jensen
# SPDX-License-Identifier: MIT
"""Scan the printed barcode back out of the built cover PDF.

This does not trust the generator: it rasterises the finished cover, finds the
bars as pixels, measures the module width from the symbol's own extent, samples
each of the 95 modules and decodes the digits. If the drawing is wrong, this
fails.
"""
import io, sys
import fitz
import numpy as np

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')

L = ["0001101", "0011001", "0010011", "0111101", "0100011",
     "0110001", "0101111", "0111011", "0110111", "0001011"]
G = ["0100111", "0110011", "0011011", "0100001", "0011101",
     "0111001", "0000101", "0010001", "0001001", "0010111"]
R = ["1110010", "1100110", "1101100", "1000010", "1011100",
     "1001110", "1010000", "1000100", "1001000", "1110100"]
PARITY = ["LLLLLL", "LLGLGG", "LLGGLG", "LLGGGL", "LGLLGG",
          "LGGLLG", "LGGGLL", "LGLGLG", "LGLGGL", "LGGLGL"]

import os
PDF = os.path.join(os.path.dirname(os.path.abspath(__file__)), "cover_wrap.pdf")
DPI = 1200
doc = fitz.open(PDF)
page = doc[0]
PH = page.rect.height  # points

# barcode reserve, inches from the page's bottom-left
x0, x1 = 3.775, 5.775
y0, y1 = 0.475, 1.675
clip = fitz.Rect(x0 * 72, PH - y1 * 72, x1 * 72, PH - y0 * 72)
pix = page.get_pixmap(clip=clip, dpi=DPI, colorspace=fitz.csGRAY)
img = np.frombuffer(pix.samples, dtype=np.uint8).reshape(pix.height, pix.width)
print("raster: %d x %d px at %d dpi" % (pix.width, pix.height, DPI))

dark = img < 128

# Pick a scanline across the middle of the NORMAL bar height. The reserve is
# 1.2in tall; bars run y=0.621..1.489in of page space, i.e. from the top of the
# clip: (1.675-1.489)=0.186in down to (1.675-0.621)=1.054in.
row = int((1.675 - 1.20) * DPI)   # ~0.475in below the clip top: solidly in the bars
line = dark[row]
cols = np.flatnonzero(line)
assert cols.size, "no dark pixels on the scanline -- wrong row?"
lo, hi = cols[0], cols[-1] + 1
span = hi - lo
mod = span / 95.0
print("bar field: %d px wide -> module %.3f px (%.4f in)" % (span, mod, mod / DPI))

bits = ""
for i in range(95):
    c = int(lo + (i + 0.5) * mod)
    bits += "1" if line[c] else "0"
print("scanned  :", bits)

assert bits[:3] == "101", "start guard"
assert bits[45:50] == "01010", "centre guard"
assert bits[92:] == "101", "end guard"

parity, left = "", ""
for i in range(6):
    c = bits[3 + 7 * i:10 + 7 * i]
    if c in L:
        parity += "L"; left += str(L.index(c))
    elif c in G:
        parity += "G"; left += str(G.index(c))
    else:
        raise SystemExit("undecodable left character %d: %s" % (i, c))
right = ""
for i in range(6):
    c = bits[50 + 7 * i:57 + 7 * i]
    if c not in R:
        raise SystemExit("undecodable right character %d: %s" % (i, c))
    right += str(R.index(c))

digits = "%d%s%s" % (PARITY.index(parity), left, right)
s = sum(int(c) * (1 if i % 2 == 0 else 3) for i, c in enumerate(digits[:12]))
ok_cd = (10 - s % 10) % 10 == int(digits[12])
print("decoded  :", digits)
print("check dig: %s" % ("valid" if ok_cd else "INVALID"))
print("expected : 9788797751916")
print("VERDICT  :", "SCANS CORRECTLY" if (digits == "9788797751916" and ok_cd) else "MISMATCH")

# quiet zones: check the white run either side of the bar field
left_white = lo
right_white = img.shape[1] - hi
print("quiet zones in this raster: %.4f in left, %.4f in right (need >= %.4f in / 7 modules)"
      % (left_white / DPI, right_white / DPI, 7 * mod / DPI))
