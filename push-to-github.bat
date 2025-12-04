@echo off
echo ========================================
echo Git Push Diagnostic Script
echo ========================================
echo.

echo [1] Checking git status...
git status
echo.

echo [2] Checking current branch...
git branch
echo.

echo [3] Checking remote configuration...
git remote -v
echo.

echo [4] Checking for uncommitted changes...
git diff --stat
echo.

echo [5] Staging all changes...
git add -A
echo.

echo [6] Checking staged changes...
git status --short
echo.

echo [7] Committing changes (if any)...
git commit -m "Final commit: ensure all changes are pushed" || echo No changes to commit
echo.

echo [8] Checking local commits...
git log --oneline -5
echo.

echo [9] Checking commits ahead of remote...
git log origin/main..HEAD --oneline || echo No commits ahead
echo.

echo [10] Pushing to GitHub...
git push origin main
echo.

echo [11] Final status check...
git status
echo.

echo ========================================
echo Script completed!
echo ========================================
pause

