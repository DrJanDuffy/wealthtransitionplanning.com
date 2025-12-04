# Push All Changes to GitHub - Manual Guide

## Current Situation

**GitHub Repository:** https://github.com/DrJanDuffy/wealthtransitionplanning.com  
**Status:** Shows only "1 Commit" (Initial commit)  
**Issue:** Recent changes may not be pushed to GitHub

## Step-by-Step Push Instructions

### Step 1: Verify Git Remote

Open PowerShell or Terminal and run:

```bash
git remote -v
```

**Expected Output:**
```
origin  https://github.com/DrJanDuffy/wealthtransitionplanning.com.git (fetch)
origin  https://github.com/DrJanDuffy/wealthtransitionplanning.com.git (push)
```

**If no output or wrong URL:**

```bash
# Remove existing remote (if any)
git remote remove origin

# Add correct remote
git remote add origin https://github.com/DrJanDuffy/wealthtransitionplanning.com.git

# Or for SSH:
git remote add origin git@github.com:DrJanDuffy/wealthtransitionplanning.com.git
```

### Step 2: Check Local Commits

```bash
git log --oneline -10
```

You should see commits like:
- "Fix Open Graph metadata..."
- "Update sitemap to use www domain..."
- "Improve header and footer..."
- "Add SEO keywords..."
- etc.

### Step 3: Check What Needs Pushing

```bash
git status
```

Should show:
- "Your branch is ahead of 'origin/main' by X commits" (if changes not pushed)
- Or "Your branch is up to date with 'origin/main'" (if already pushed)

### Step 4: Push All Changes

```bash
# Push to main branch
git push -u origin main

# If that doesn't work, try:
git push origin main --force-with-lease

# Or if branch is master:
git push -u origin master
```

### Step 5: Verify on GitHub

1. Go to: https://github.com/DrJanDuffy/wealthtransitionplanning.com
2. Click "Commits" or check the commit history
3. Should see multiple commits (not just 1)
4. Should see recent commits with your changes

### Step 6: Verify Vercel Connection

1. Go to Vercel Dashboard → Project → Settings → Git
2. Should show: `github.com/DrJanDuffy/wealthtransitionplanning.com`
3. Production Branch: `main`
4. If not connected, click "Connect Git Repository"

## If Push Fails

### Authentication Error (HTTPS):

1. **Use Personal Access Token:**
   - GitHub → Settings → Developer settings → Personal access tokens
   - Generate new token with `repo` permissions
   - Use token as password when pushing

2. **Or Switch to SSH:**
   ```bash
   git remote set-url origin git@github.com:DrJanDuffy/wealthtransitionplanning.com.git
   git push -u origin main
   ```

### Branch Name Error:

```bash
# Check current branch
git branch

# If on different branch:
git checkout main
# or create main from current:
git checkout -b main
git push -u origin main
```

### Permission Error:

- Ensure you have write access to the repository
- Check GitHub repository settings
- Verify you're logged in with correct account

## Complete Push Command Sequence

If starting fresh:

```bash
# 1. Check status
git status

# 2. Add all changes (if any uncommitted)
git add -A

# 3. Commit (if needed)
git commit -m "Final updates: OG metadata, sitemap, and improvements"

# 4. Set remote (if not set)
git remote add origin https://github.com/DrJanDuffy/wealthtransitionplanning.com.git

# 5. Push
git push -u origin main

# 6. Verify
git log --oneline -5
```

## After Successful Push

1. ✅ Check GitHub - should show all commits
2. ✅ Check Vercel - should trigger new deployment
3. ✅ Verify deployment uses latest commit
4. ✅ Set environment variable in Vercel
5. ✅ Verify site works correctly

## Summary

**Repository URL:** `https://github.com/DrJanDuffy/wealthtransitionplanning.com.git`  
**SSH URL:** `git@github.com:DrJanDuffy/wealthtransitionplanning.com.git`  
**Expected Branch:** `main`

**Action:** Push all local commits to GitHub to sync with Vercel deployments.

