# Deployment Issue: Still Showing Old Commit

## Current Situation

**Deployment Status:**
- ✅ Deployment is Ready (Production)
- ⚠️ Still showing commit: `c29d741` (Initial commit from 3 hours ago)
- ⚠️ Sitemap update not deployed yet

## Problem

The latest deployment (3 minutes ago) is still using the old commit `c29d741`, which means:
- The sitemap update we made hasn't been deployed
- Either the git push didn't reach GitHub, or Vercel isn't detecting new commits

## Diagnosis Steps

### 1. Check if Changes Were Committed

```bash
git log --oneline -5
```

Should show a commit with message like "Update sitemap to use www domain as primary"

### 2. Check if Changes Were Pushed

```bash
git log origin/main..HEAD --oneline
```

If this shows commits, they haven't been pushed yet.

### 3. Check Git Remote

```bash
git remote -v
```

Should show your GitHub repository URL.

## Solutions

### Solution 1: Verify and Push Again

1. **Check current status:**
   ```bash
   git status
   git log --oneline -3
   ```

2. **If sitemap update is committed but not pushed:**
   ```bash
   git push origin main
   ```

3. **If sitemap update is not committed:**
   ```bash
   git add app/sitemap.ts
   git commit -m "Update sitemap to use www domain as primary"
   git push origin main
   ```

### Solution 2: Force Trigger Deployment

If the push succeeded but Vercel didn't detect it:

1. **Make a small change to trigger deployment:**
   ```bash
   # Add a comment or whitespace to trigger change
   git add .
   git commit -m "Trigger deployment"
   git push origin main
   ```

2. **Or use Vercel CLI:**
   ```bash
   vercel --prod
   ```

### Solution 3: Check Vercel Git Connection

1. Go to Vercel Dashboard → Project → Settings → Git
2. Verify repository is connected: `github.com/DrJanDuffy/wealthtransitionplanning.com`
3. Check Production Branch is set to `main`
4. If not connected, connect it (see VERCEL_AUTO_DEPLOY_FIX.md)

### Solution 4: Manual Deployment via Vercel Dashboard

1. Go to Vercel Dashboard → Deployments
2. Click "Redeploy" on the latest deployment
3. Or click "Deploy" → "Deploy from GitHub" → Select latest commit

## Expected Result

After fixing, you should see:
- New deployment with a different commit hash (not c29d741)
- Commit message showing sitemap update
- Sitemap accessible at: `https://www.wealthtransitionplanning.com/sitemap.xml`
- All URLs in sitemap should use `www.wealthtransitionplanning.com`

## Quick Fix Command

If you need to commit and push the sitemap update:

```bash
# Check if file is modified
git status

# If modified, commit and push
git add app/sitemap.ts
git commit -m "Update sitemap to use www domain as primary"
git push origin main

# Wait 1-2 minutes, then check Vercel Dashboard for new deployment
```

## Verify Fix

1. **Check Vercel Dashboard:**
   - Should show new deployment with new commit hash
   - Should not be `c29d741`

2. **Check Sitemap:**
   - Visit: `https://www.wealthtransitionplanning.com/sitemap.xml`
   - Should show all URLs with `www.wealthtransitionplanning.com` domain

3. **Check Git:**
   - GitHub repository should show the latest commit
   - Commit should include sitemap.ts changes

