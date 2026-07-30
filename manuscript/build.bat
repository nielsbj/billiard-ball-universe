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
findstr /C:"Overfull" billiard_ball_universe.log
echo Build done. Any Overfull lines above must be fixed (zero-overfull policy).
