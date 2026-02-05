@echo off
git checkout main
git add .
git commit -m "Deploy update"
git push origin main
pause
