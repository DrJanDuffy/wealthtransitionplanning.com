# Hard-Wired Git Push Script
# This script ensures all changes are committed and pushed

Write-Host "========================================" -ForegroundColor Green
Write-Host "HARD-WIRED GIT PUSH" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""

# Step 1: Ensure we're on main branch
Write-Host "[1] Checking branch..." -ForegroundColor Yellow
$currentBranch = git branch --show-current
Write-Host "Current branch: $currentBranch" -ForegroundColor Cyan
if ($currentBranch -ne "main") {
    Write-Host "Switching to main branch..." -ForegroundColor Yellow
    git checkout main
}
Write-Host ""

# Step 2: Add all changes
Write-Host "[2] Staging all changes..." -ForegroundColor Yellow
git add -A
$status = git status --porcelain
if ($status) {
    Write-Host "Changes staged:" -ForegroundColor Cyan
    git status --short
} else {
    Write-Host "No changes to stage" -ForegroundColor Green
}
Write-Host ""

# Step 3: Commit if needed
Write-Host "[3] Committing changes..." -ForegroundColor Yellow
$uncommitted = git diff --cached --name-only
if ($uncommitted) {
    $commitMsg = "Hard-wired push: ensure all changes are synced - $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
    git commit -m $commitMsg
    Write-Host "Committed: $commitMsg" -ForegroundColor Green
} else {
    Write-Host "No changes to commit" -ForegroundColor Green
}
Write-Host ""

# Step 4: Fetch latest from remote
Write-Host "[4] Fetching from remote..." -ForegroundColor Yellow
git fetch origin
Write-Host ""

# Step 5: Check what needs pushing
Write-Host "[5] Checking commits to push..." -ForegroundColor Yellow
$commitsAhead = git log origin/main..HEAD --oneline
if ($commitsAhead) {
    Write-Host "Commits that need to be pushed:" -ForegroundColor Cyan
    $commitsAhead
    Write-Host ""
    
    # Step 6: Push with force-with-lease (safer than force)
    Write-Host "[6] Pushing to GitHub..." -ForegroundColor Yellow
    Write-Host "Using: git push origin main --force-with-lease" -ForegroundColor Cyan
    git push origin main --force-with-lease
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Push successful!" -ForegroundColor Green
    } else {
        Write-Host "Push failed, trying regular push..." -ForegroundColor Yellow
        git push origin main
    }
} else {
    Write-Host "All commits are already pushed!" -ForegroundColor Green
}
Write-Host ""

# Step 7: Final verification
Write-Host "[7] Final verification..." -ForegroundColor Yellow
Write-Host "Local commits:" -ForegroundColor Cyan
git log --oneline -3
Write-Host ""
Write-Host "Remote commits:" -ForegroundColor Cyan
git log origin/main --oneline -3
Write-Host ""

Write-Host "[8] Git status:" -ForegroundColor Yellow
git status
Write-Host ""

Write-Host "========================================" -ForegroundColor Green
Write-Host "HARD-WIRED PUSH COMPLETE!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Verify on GitHub: https://github.com/DrJanDuffy/wealthtransitionplanning.com/commits" -ForegroundColor Cyan
Write-Host "2. Check Vercel for new deployment" -ForegroundColor Cyan
Write-Host "3. Set NEXT_PUBLIC_BASE_URL in Vercel environment variables" -ForegroundColor Cyan
Write-Host ""

