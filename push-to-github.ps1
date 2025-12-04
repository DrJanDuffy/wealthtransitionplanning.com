# Git Push Script - Fixes Common Issues
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "GIT PUSH TO GITHUB" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Step 1: Check Status
Write-Host "[1] Checking git status..." -ForegroundColor Yellow
$status = git status
Write-Host $status
Write-Host ""

# Step 2: Check Remote
Write-Host "[2] Checking remote..." -ForegroundColor Yellow
$remote = git remote -v
Write-Host $remote
Write-Host ""

# Step 3: Check Branch
Write-Host "[3] Checking branch..." -ForegroundColor Yellow
$branch = git branch --show-current
Write-Host "Current branch: $branch" -ForegroundColor Cyan
if ($branch -ne "main") {
    Write-Host "Switching to main branch..." -ForegroundColor Yellow
    git checkout main
}
Write-Host ""

# Step 4: Stage All Changes
Write-Host "[4] Staging all changes..." -ForegroundColor Yellow
git add -A
Write-Host ""

# Step 5: Check for Changes to Commit
Write-Host "[5] Checking for uncommitted changes..." -ForegroundColor Yellow
$uncommitted = git diff --cached --name-only
if ($uncommitted) {
    Write-Host "Committing changes..." -ForegroundColor Yellow
    $commitMsg = "Update: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
    git commit -m $commitMsg
    Write-Host "Committed: $commitMsg" -ForegroundColor Green
} else {
    Write-Host "No changes to commit" -ForegroundColor Green
}
Write-Host ""

# Step 6: Show Recent Commits
Write-Host "[6] Recent commits..." -ForegroundColor Yellow
git log --oneline -3
Write-Host ""

# Step 7: Push to GitHub
Write-Host "[7] Pushing to GitHub..." -ForegroundColor Yellow
Write-Host "If prompted for credentials:" -ForegroundColor Cyan
Write-Host "  Username: Your GitHub username" -ForegroundColor White
Write-Host "  Password: Use Personal Access Token (NOT your password)" -ForegroundColor White
Write-Host ""
Write-Host "To get Personal Access Token:" -ForegroundColor Cyan
Write-Host "  https://github.com/settings/tokens" -ForegroundColor White
Write-Host ""

$pushResult = git push origin main 2>&1
Write-Host $pushResult
Write-Host ""

# Step 8: Verify
Write-Host "[8] Verifying push..." -ForegroundColor Yellow
Start-Sleep -Seconds 2
git fetch origin
$stillAhead = git log origin/main..HEAD --oneline
if ($stillAhead) {
    Write-Host "Still ahead - push may have failed" -ForegroundColor Red
    Write-Host "Try manually:" -ForegroundColor Yellow
    Write-Host "  git push origin main" -ForegroundColor White
    Write-Host ""
    Write-Host "If authentication fails, use Personal Access Token:" -ForegroundColor Yellow
    Write-Host "  https://github.com/settings/tokens" -ForegroundColor White
} else {
    Write-Host "Push successful!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Verify on GitHub:" -ForegroundColor Cyan
    Write-Host "  https://github.com/DrJanDuffy/wealthtransitionplanning.com/commits" -ForegroundColor White
}
Write-Host ""

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "COMPLETE!" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan

