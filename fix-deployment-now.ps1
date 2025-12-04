# Fix Deployment Script - Comprehensive Diagnostic and Fix
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "DEPLOYMENT FIX SCRIPT" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Step 1: Check Git Status
Write-Host "[1] Checking Git Status..." -ForegroundColor Yellow
$status = git status
Write-Host $status
Write-Host ""

# Step 2: Check for Uncommitted Changes
Write-Host "[2] Checking for Uncommitted Changes..." -ForegroundColor Yellow
$uncommitted = git diff --name-only
if ($uncommitted) {
    Write-Host "Uncommitted files found:" -ForegroundColor Red
    $uncommitted
    Write-Host ""
    Write-Host "Staging all changes..." -ForegroundColor Yellow
    git add -A
    Write-Host "Committing changes..." -ForegroundColor Yellow
    git commit -m "Fix deployment: ensure all changes are committed - $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
} else {
    Write-Host "No uncommitted changes" -ForegroundColor Green
}
Write-Host ""

# Step 3: Check Remote
Write-Host "[3] Checking Git Remote..." -ForegroundColor Yellow
$remote = git remote -v
Write-Host $remote
Write-Host ""

# Step 4: Check Current Branch
Write-Host "[4] Checking Current Branch..." -ForegroundColor Yellow
$branch = git branch --show-current
Write-Host "Current branch: $branch" -ForegroundColor Cyan
if ($branch -ne "main") {
    Write-Host "Switching to main branch..." -ForegroundColor Yellow
    git checkout main
}
Write-Host ""

# Step 5: Fetch from Remote
Write-Host "[5] Fetching from Remote..." -ForegroundColor Yellow
git fetch origin
Write-Host ""

# Step 6: Check Commits Ahead
Write-Host "[6] Checking Commits Ahead of Remote..." -ForegroundColor Yellow
$commitsAhead = git log origin/main..HEAD --oneline
if ($commitsAhead) {
    Write-Host "Commits that need to be pushed:" -ForegroundColor Cyan
    $commitsAhead
    Write-Host ""
} else {
    Write-Host "No commits ahead - checking if behind..." -ForegroundColor Yellow
    $commitsBehind = git log HEAD..origin/main --oneline
    if ($commitsBehind) {
        Write-Host "Local is behind remote - pulling..." -ForegroundColor Yellow
        git pull origin main
    }
}
Write-Host ""

# Step 7: Show Recent Commits
Write-Host "[7] Recent Local Commits..." -ForegroundColor Yellow
git log --oneline -5
Write-Host ""

# Step 8: Force Push with Lease
Write-Host "[8] Pushing to GitHub..." -ForegroundColor Yellow
Write-Host "Using: git push origin main --force-with-lease" -ForegroundColor Cyan
$pushResult = git push origin main --force-with-lease 2>&1
Write-Host $pushResult
Write-Host ""

# Step 9: Verify Push
Write-Host "[9] Verifying Push..." -ForegroundColor Yellow
Start-Sleep -Seconds 2
git fetch origin
$stillAhead = git log origin/main..HEAD --oneline
if ($stillAhead) {
    Write-Host "Still ahead - trying regular push..." -ForegroundColor Yellow
    git push origin main
} else {
    Write-Host "Push successful!" -ForegroundColor Green
}
Write-Host ""

# Step 10: Final Status
Write-Host "[10] Final Git Status..." -ForegroundColor Yellow
git status
Write-Host ""

# Step 11: Check Vercel Connection
Write-Host "[11] Vercel Deployment Check..." -ForegroundColor Yellow
Write-Host "Please verify in Vercel Dashboard:" -ForegroundColor Cyan
Write-Host "1. Go to: https://vercel.com/dashboard" -ForegroundColor White
Write-Host "2. Check your project" -ForegroundColor White
Write-Host "3. Go to Settings > Git" -ForegroundColor White
Write-Host "4. Verify repository: github.com/DrJanDuffy/wealthtransitionplanning.com" -ForegroundColor White
Write-Host "5. Verify production branch: main" -ForegroundColor White
Write-Host "6. Check Deployments tab for new deployment" -ForegroundColor White
Write-Host ""

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "DEPLOYMENT FIX COMPLETE!" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next Steps:" -ForegroundColor Yellow
Write-Host "1. Check Vercel Dashboard for new deployment" -ForegroundColor Cyan
Write-Host "2. If no deployment, check Vercel project settings" -ForegroundColor Cyan
Write-Host "3. Verify GitHub repository connection in Vercel" -ForegroundColor Cyan
Write-Host "4. Check Vercel build logs for errors" -ForegroundColor Cyan
Write-Host ""

