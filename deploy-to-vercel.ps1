# Complete Deployment Script - Push to GitHub and Verify Vercel
Write-Host "========================================" -ForegroundColor Green
Write-Host "DEPLOY TO VERCEL - COMPLETE PROCESS" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""

# Step 1: Ensure we're on main branch
Write-Host "[1] Checking branch..." -ForegroundColor Yellow
$branch = git branch --show-current
Write-Host "Current branch: $branch" -ForegroundColor Cyan
if ($branch -ne "main") {
    Write-Host "Switching to main..." -ForegroundColor Yellow
    git checkout main
}
Write-Host ""

# Step 2: Stage all changes
Write-Host "[2] Staging all changes..." -ForegroundColor Yellow
git add -A
$status = git status --porcelain
if ($status) {
    Write-Host "Changes to commit:" -ForegroundColor Cyan
    git status --short
} else {
    Write-Host "No changes to stage" -ForegroundColor Green
}
Write-Host ""

# Step 3: Commit if needed
Write-Host "[3] Committing changes..." -ForegroundColor Yellow
$uncommitted = git diff --cached --name-only
if ($uncommitted) {
    $commitMsg = "Deploy: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss') - Ensure live deployment"
    git commit -m $commitMsg
    Write-Host "Committed: $commitMsg" -ForegroundColor Green
} else {
    Write-Host "No changes to commit" -ForegroundColor Green
}
Write-Host ""

# Step 4: Show recent commits
Write-Host "[4] Recent commits..." -ForegroundColor Yellow
git log --oneline -5
Write-Host ""

# Step 5: Fetch from remote
Write-Host "[5] Fetching from remote..." -ForegroundColor Yellow
git fetch origin 2>&1 | Out-Null
Write-Host ""

# Step 6: Check what needs pushing
Write-Host "[6] Checking commits to push..." -ForegroundColor Yellow
$commitsAhead = git log origin/main..HEAD --oneline
if ($commitsAhead) {
    Write-Host "Commits that need to be pushed:" -ForegroundColor Cyan
    $commitsAhead
    Write-Host ""
    
    # Step 7: Push to GitHub
    Write-Host "[7] Pushing to GitHub..." -ForegroundColor Yellow
    Write-Host "If prompted for credentials:" -ForegroundColor Cyan
    Write-Host "  Username: Your GitHub username" -ForegroundColor White
    Write-Host "  Password: Use Personal Access Token (NOT password)" -ForegroundColor White
    Write-Host "  Get token: https://github.com/settings/tokens" -ForegroundColor White
    Write-Host ""
    
    $pushResult = git push origin main 2>&1
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Push successful!" -ForegroundColor Green
    } else {
        Write-Host "Push may have failed. Check output above." -ForegroundColor Red
        Write-Host $pushResult
    }
} else {
    Write-Host "All commits are already pushed!" -ForegroundColor Green
}
Write-Host ""

# Step 8: Verify push
Write-Host "[8] Verifying push..." -ForegroundColor Yellow
Start-Sleep -Seconds 2
git fetch origin 2>&1 | Out-Null
$stillAhead = git log origin/main..HEAD --oneline
if ($stillAhead) {
    Write-Host "Still ahead - push may have failed" -ForegroundColor Red
    Write-Host "Try manually: git push origin main" -ForegroundColor Yellow
} else {
    Write-Host "Push verified - commits are on GitHub!" -ForegroundColor Green
}
Write-Host ""

# Step 9: Vercel Deployment Instructions
Write-Host "[9] VERCEL DEPLOYMENT STEPS:" -ForegroundColor Yellow
Write-Host ""
Write-Host "1. Go to: https://vercel.com/dashboard" -ForegroundColor Cyan
Write-Host "2. Click on your project: wealthtransitionplanning.com" -ForegroundColor Cyan
Write-Host "3. Go to Deployments tab" -ForegroundColor Cyan
Write-Host "4. Check for new deployment (should appear within 1-2 minutes)" -ForegroundColor Cyan
Write-Host ""
Write-Host "If no deployment appears:" -ForegroundColor Yellow
Write-Host "  a. Click 'Deploy' button (top right)" -ForegroundColor White
Write-Host "  b. Select 'Deploy Latest Commit'" -ForegroundColor White
Write-Host "  c. Select branch: main" -ForegroundColor White
Write-Host "  d. Click 'Deploy'" -ForegroundColor White
Write-Host ""

# Step 10: Environment Variable Reminder
Write-Host "[10] CRITICAL: Set Environment Variable" -ForegroundColor Yellow
Write-Host ""
Write-Host "In Vercel Dashboard:" -ForegroundColor Cyan
Write-Host "  Settings → Environment Variables" -ForegroundColor White
Write-Host "  Add: NEXT_PUBLIC_BASE_URL = https://www.wealthtransitionplanning.com" -ForegroundColor White
Write-Host "  Select: Production, Preview, Development" -ForegroundColor White
Write-Host "  Click Save" -ForegroundColor White
Write-Host "  Redeploy" -ForegroundColor White
Write-Host ""

# Step 11: Verify Deployment
Write-Host "[11] After Deployment:" -ForegroundColor Yellow
Write-Host ""
Write-Host "Check your site:" -ForegroundColor Cyan
Write-Host "  Preview: https://wealthtransitionplanning-75q0m4qu6-janet-duffys-projects.vercel.app" -ForegroundColor White
Write-Host "  Production: https://www.wealthtransitionplanning.com" -ForegroundColor White
Write-Host ""
Write-Host "Check sitemap:" -ForegroundColor Cyan
Write-Host "  https://wealthtransitionplanning-75q0m4qu6-janet-duffys-projects.vercel.app/sitemap.xml" -ForegroundColor White
Write-Host ""

Write-Host "========================================" -ForegroundColor Green
Write-Host "DEPLOYMENT PROCESS COMPLETE!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "Next: Check Vercel Dashboard for deployment status" -ForegroundColor Cyan
Write-Host ""

