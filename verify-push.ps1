# Git Push Verification Script
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Git Push Verification" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "[1] Current Branch:" -ForegroundColor Yellow
git branch --show-current
Write-Host ""

Write-Host "[2] Git Status:" -ForegroundColor Yellow
git status
Write-Host ""

Write-Host "[3] Remote Configuration:" -ForegroundColor Yellow
git remote -v
Write-Host ""

Write-Host "[4] Latest Local Commits:" -ForegroundColor Yellow
git log --oneline -5
Write-Host ""

Write-Host "[5] Fetching from Remote..." -ForegroundColor Yellow
git fetch origin
Write-Host ""

Write-Host "[6] Commits Ahead of Remote:" -ForegroundColor Yellow
$commitsAhead = git log origin/main..HEAD --oneline
if ($commitsAhead) {
    Write-Host "Commits that need to be pushed:" -ForegroundColor Red
    $commitsAhead
    Write-Host ""
    Write-Host "[7] Pushing to GitHub..." -ForegroundColor Yellow
    git push origin main
} else {
    Write-Host "All commits are already pushed!" -ForegroundColor Green
}
Write-Host ""

Write-Host "[8] Final Status:" -ForegroundColor Yellow
git status
Write-Host ""

Write-Host "[9] Remote Commit:" -ForegroundColor Yellow
git log origin/main --oneline -1
Write-Host ""

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Verification Complete!" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan

