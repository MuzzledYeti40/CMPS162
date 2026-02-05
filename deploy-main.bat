@echo off

echo Switching to main branch...
git checkout main

echo Merging dev into main...
git merge dev

echo Pushing main branch to GitHub...
git push origin main

echo Switching back to dev branch...
git checkout dev

echo Deployment complete!
pause
