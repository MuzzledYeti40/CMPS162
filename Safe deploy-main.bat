@echo off
echo Deploying website to main...

:: Make sure we are on main
git checkout main

:: Copy everything from Module2/Website to root
xcopy "Module 2\Website\*" "." /s /y /q

:: Stage all changes including new, modified, deleted
git add -A

:: Commit
git commit -m "Deploy website update"

:: Push
git push origin main

echo Deployment complete!
pause
