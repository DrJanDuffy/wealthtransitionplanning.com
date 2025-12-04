# Check Vercel Deployment Status
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "VERCEL DEPLOYMENT CHECK" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Step 1: Check Git Status
Write-Host "[1] Checking Git Status..." -ForegroundColor Yellow
$gitStatus = git status
Write-Host $gitStatus
Write-Host ""

# Step 2: Check Recent Commits
Write-Host "[2] Recent Commits..." -ForegroundColor Yellow
git log --oneline -5
Write-Host ""

# Step 3: Check Remote
Write-Host "[3] Git Remote..." -ForegroundColor Yellow
git remote -v
Write-Host ""

# Step 4: Check if Ahead of Remote
Write-Host "[4] Checking Commits Ahead..." -ForegroundColor Yellow
git fetch origin 2>&1 | Out-Null
$commitsAhead = git log origin/main..HEAD --oneline
if ($commitsAhead) {
    Write-Host "Commits that need to be pushed:" -ForegroundColor Red
    $commitsAhead
    Write-Host ""
    Write-Host "Pushing to GitHub..." -ForegroundColor Yellow
    git push origin main
} else {
    Write-Host "All commits are pushed to GitHub!" -ForegroundColor Green
}
Write-Host ""

# Step 5: Verify on GitHub
Write-Host "[5] Verify on GitHub:" -ForegroundColor Yellow
Write-Host "  https://github.com/DrJanDuffy/wealthtransitionplanning.com/commits" -ForegroundColor Cyan
Write-Host ""

# Step 6: Vercel Deployment Instructions
Write-Host "[6] Vercel Deployment Check:" -ForegroundColor Yellow
Write-Host ""
Write-Host "1. Go to: https://vercel.com/dashboard" -ForegroundColor Cyan
Write-Host "2. Click on your project" -ForegroundColor Cyan
Write-Host "3. Check Deployments tab" -ForegroundColor Cyan
Write-Host "4. Look for new deployment" -ForegroundColor Cyan
Write-Host "5. If no deployment, manually trigger:" -ForegroundColor Cyan
Write-Host "   - Click 'Deploy' button" -ForegroundColor White
Write-Host "   - Select 'Deploy Latest Commit'" -ForegroundColor White
Write-Host "   - Select branch: main" -ForegroundColor White
Write-Host "   - Click 'Deploy'" -ForegroundColor White
Write-Host ""

# Step 7: Environment Variable Reminder
Write-Host "[7] CRITICAL: Set Environment Variable" -ForegroundColor Yellow
Write-Host ""
Write-Host "In Vercel Dashboard:" -ForegroundColor Cyan
Write-Host "  Settings → Environment Variables" -ForegroundColor White
Write-Host "  Add: NEXT_PUBLIC_BASE_URL = https://www.wealthtransitionplanning.com" -ForegroundColor White
Write-Host ""

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "CHECK COMPLETE!" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan

