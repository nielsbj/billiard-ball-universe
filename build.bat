@echo off
cd /d "%~dp0"
echo BUILD-STAMP %date% %time%
REM Full build cycle for The Billiard Ball Universe (pdflatex + biber)
pdflatex -interaction=nonstopmode billiard_ball_universe.tex
biber billiard_ball_universe
pdflatex -interaction=nonstopmode billiard_ball_universe.tex
pdflatex -interaction=nonstopmode billiard_ball_universe.tex
findstr /C:"Overfull" billiard_ball_universe.log
echo Build done. Any Overfull lines above must be fixed (zero-overfull policy).
