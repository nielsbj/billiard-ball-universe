@echo off
REM SPDX-FileCopyrightText: 2026 Niels Bonde Jensen
REM SPDX-License-Identifier: MIT
cd /d "%~dp0"
echo BUILD-STAMP %date% %time%
REM Full build cycle for The Billiard Ball Universe (pdflatex + biber)
pdflatex -interaction=nonstopmode billiard_ball_universe.tex
biber billiard_ball_universe
REM Index pass: makeindex builds .ind from the .idx (empty until \Ix/\Iy are populated),
REM harmless while \printindex stays commented. Guard skips if no .idx exists.
if exist billiard_ball_universe.idx makeindex billiard_ball_universe
pdflatex -interaction=nonstopmode billiard_ball_universe.tex
pdflatex -interaction=nonstopmode billiard_ball_universe.tex
REM Pass criteria, zero tolerance for every line printed below (H1, 2026-08-13):
REM   Overfull \hbox / \vbox, and floats that exceed the text height. A float
REM   reported "too large for page" runs into the bottom margin and can strike
REM   the folio -- tab:wounds did exactly that on p. 125 and the log said so for
REM   several builds while the gate was only watching Overfull.
findstr /C:"Overfull" billiard_ball_universe.log
findstr /C:"Float too large for page by" billiard_ball_universe.log
REM The log cannot see a float that overlaps the text column: no Overfull, no
REM "Float too large", nothing. Figure 7.5 printed into the text on p. 105 for
REM several builds, and fig. 4.2 had been doing the same on p. 43 unreported,
REM while every log line above said the book was clean (H3, 2026-08-16). The
REM check below reads the built PDF instead of the log.
echo.
echo --- collision gate (H3): figures printing into the text ---
python check_collisions.py
if errorlevel 2 (
  echo COLLISION GATE DID NOT RUN - needs Python with PyMuPDF and numpy:
  echo     pip install pymupdf numpy
  echo A build is NOT verified until this check has actually run.
) else if errorlevel 1 (
  echo COLLISION GATE FAILED - see the pages listed above.
) else (
  echo Collision gate clean.
)
echo.
echo Build done. Any Overfull, "Float too large", or collision lines above must be
echo fixed (zero-tolerance gate).
