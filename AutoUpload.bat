@echo off
REM Change directory to the location of this bat file
cd /d "%~dp0"

echo Adding files...
git add .

echo Committing changes...
git commit -m "Auto upload %date% %time%"

echo Pushing to GitHub...
git push origin main

echo Done!
pause
