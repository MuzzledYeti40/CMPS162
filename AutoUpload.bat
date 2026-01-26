@echo off
cd /d "%~dp0"

echo Current directory: %cd%
echo -----------------------

REM Show current branch
for /f "tokens=*" %%i in ('git rev-parse --abbrev-ref HEAD 2^>nul') do set BRANCH=%%i
echo Current branch: %BRANCH%

if "%BRANCH%"=="" (
    echo Error: No branch found. Is this a git repository?
    pause
    exit /b
)

REM Show git status
git status
echo -----------------------

REM Add all files
git add .

REM Commit changes
git commit -m "Auto upload %date% %time%"

REM Push
git push origin %BRANCH%

echo -----------------------
echo Done!
pause
