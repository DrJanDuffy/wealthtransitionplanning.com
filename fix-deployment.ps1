# Vercel Deployment Fix Script
# Run this script to diagnose and fix deployment issues

Write-Host "=== Vercel Deployment Diagnostic ===" -ForegroundColor Cyan
Write-Host ""

# 1. Check Git Status
Write-Host "1. Checking Git Status..." -ForegroundColor Yellow
git status
Write-Host ""

# 2. Check Git Remote
Write-Host "2. Checking Git Remote Configuration..." -ForegroundColor Yellow
git remote -v
Write-Host ""

# 3. Check Current Branch
Write-Host "3. Checking Current Branch..." -ForegroundColor Yellow
git branch
Write-Host ""

# 4. Check Recent Commits
Write-Host "4. Checking Recent Commits..." -ForegroundColor Yellow
git log --oneline -5
Write-Host ""

# 5. Check for Uncommitted Changes
Write-Host "5. Checking for Uncommitted Changes..." -ForegroundColor Yellow
$uncommitted = git status --porcelain
if ($uncommitted) {
    Write-Host "WARNING: There are uncommitted changes!" -ForegroundColor Red
    Write-Host $uncommitted
    Write-Host ""
    Write-Host "To fix: git add -A && git commit -m 'Your message'" -ForegroundColor Yellow
} else {
    Write-Host "✓ No uncommitted changes" -ForegroundColor Green
}
Write-Host ""

# 6. Check if Remote Exists
Write-Host "6. Checking Remote Repository..." -ForegroundColor Yellow
$remote = git remote get-url origin 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: No remote 'origin' configured!" -ForegroundColor Red
    Write-Host ""
    Write-Host "To fix, add your remote:" -ForegroundColor Yellow
    Write-Host "  git remote add origin <your-repo-url>" -ForegroundColor White
    Write-Host "  git push -u origin main" -ForegroundColor White
} else {
    Write-Host "✓ Remote configured: $remote" -ForegroundColor Green
}
Write-Host ""

# 7. Test Build
Write-Host "7. Testing Build (this may take a moment)..." -ForegroundColor Yellow
if (Test-Path "node_modules") {
    Write-Host "Running build test..." -ForegroundColor Gray
    pnpm build 2>&1 | Select-Object -First 20
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✓ Build successful!" -ForegroundColor Green
    } else {
        Write-Host "ERROR: Build failed! Check errors above." -ForegroundColor Red
    }
} else {
    Write-Host "WARNING: node_modules not found. Run 'pnpm install' first." -ForegroundColor Yellow
}
Write-Host ""

# 8. Check Environment Variables
Write-Host "8. Checking for .env files..." -ForegroundColor Yellow
if (Test-Path ".env.local") {
    Write-Host "✓ .env.local found" -ForegroundColor Green
    Write-Host "NOTE: Make sure to add these to Vercel Dashboard > Settings > Environment Variables" -ForegroundColor Yellow
} else {
    Write-Host "No .env.local found (this is OK if using Vercel env vars)" -ForegroundColor Gray
}
Write-Host ""

# Summary
Write-Host "=== Summary ===" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next Steps:" -ForegroundColor Yellow
Write-Host "1. If no remote: git remote add origin <your-repo-url>" -ForegroundColor White
Write-Host "2. If uncommitted changes: git add -A && git commit -m 'Your message'" -ForegroundColor White
Write-Host "3. Push to remote: git push origin main (or master)" -ForegroundColor White
Write-Host "4. Or use Vercel CLI: vercel --prod" -ForegroundColor White
Write-Host "5. Check Vercel Dashboard for deployment logs" -ForegroundColor White
Write-Host ""

