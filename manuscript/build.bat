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
echo Build done. Any Overfull or "Float too large" lines above must be fixed (zero-tolerance gate).
