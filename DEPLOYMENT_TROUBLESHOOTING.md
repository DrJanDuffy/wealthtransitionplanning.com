# 🚨 Deployment Troubleshooting Guide

## Issue: Git Push Not Triggering Vercel Deployment

### Quick Fix Steps

## Step 1: Verify Git Push Worked

```bash
# Check if commits are on GitHub
# Visit: https://github.com/DrJanDuffy/wealthtransitionplanning.com/commits

# Should see your latest commits
```

## Step 2: Check Vercel Project Settings

### A. Verify Git Connection
1. Go to: **Vercel Dashboard** → Your Project
2. Click **Settings** → **Git**
3. Verify:
   - ✅ Repository: `github.com/DrJanDuffy/wealthtransitionplanning.com`
   - ✅ Production Branch: `main`
   - ✅ Auto-deploy: **Enabled**

### B. If Repository Not Connected
1. Click **"Connect Git Repository"**
2. Select **GitHub**
3. Find: `DrJanDuffy/wealthtransitionplanning.com`
4. Click **Import**
5. Verify production branch is `main`

## Step 3: Manual Deployment Trigger

### Option A: Via Vercel Dashboard
1. Go to **Deployments** tab
2. Click **"Redeploy"** on latest deployment
3. Or click **"Deploy"** → **"Deploy Latest Commit"**

### Option B: Via Vercel CLI
```bash
# Install Vercel CLI (if not installed)
npm i -g vercel

# Login to Vercel
vercel login

# Link project
vercel link

# Deploy
vercel --prod
```

## Step 4: Check Build Logs

1. Go to **Deployments** tab
2. Click on latest deployment
3. Check **Build Logs**
4. Look for errors:
   - Build failures
   - Environment variable issues
   - TypeScript errors
   - Missing dependencies

## Step 5: Verify GitHub Webhook

### Check if Webhook Exists
1. Go to: https://github.com/DrJanDuffy/wealthtransitionplanning.com/settings/hooks
2. Look for **Vercel** webhook
3. Should show recent deliveries

### If Webhook Missing
1. In Vercel: **Settings** → **Git**
2. Disconnect and reconnect repository
3. This will recreate the webhook

## Step 6: Force New Deployment

### Method 1: Empty Commit
```bash
git commit --allow-empty -m "Trigger Vercel deployment"
git push origin main
```

### Method 2: Update a File
```bash
# Update a file (like README)
echo "# Updated $(date)" >> README.md
git add README.md
git commit -m "Trigger deployment"
git push origin main
```

## Step 7: Check Vercel Project Status

### Verify Project is Active
1. Vercel Dashboard → Your Project
2. Check **Settings** → **General**
3. Verify:
   - ✅ Project is not paused
   - ✅ Team has active subscription
   - ✅ No deployment limits reached

## Common Issues & Solutions

### Issue 1: Wrong Branch
**Symptom:** Vercel deploying from wrong branch

**Fix:**
1. Vercel → Settings → Git
2. Change **Production Branch** to `main`
3. Save

### Issue 2: Build Failures
**Symptom:** Deployment starts but fails

**Fix:**
1. Check build logs
2. Fix errors (TypeScript, missing deps, etc.)
3. Push again

### Issue 3: Environment Variables Missing
**Symptom:** Build succeeds but site doesn't work

**Fix:**
1. Vercel → Settings → Environment Variables
2. Add required variables:
   - `NEXT_PUBLIC_BASE_URL`
   - `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` (optional)
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID` (optional)
3. Redeploy

### Issue 4: GitHub Webhook Not Firing
**Symptom:** Push to GitHub but no Vercel deployment

**Fix:**
1. Check GitHub webhook: https://github.com/DrJanDuffy/wealthtransitionplanning.com/settings/hooks
2. Check webhook deliveries for errors
3. Reconnect repository in Vercel if needed

### Issue 5: Repository Not Found
**Symptom:** Vercel can't find repository

**Fix:**
1. Verify repository exists: https://github.com/DrJanDuffy/wealthtransitionplanning.com
2. Check repository is public or you have access
3. Reconnect in Vercel

## Diagnostic Commands

### Check Git Status
```bash
git status
git log --oneline -5
git remote -v
git branch
```

### Force Push (if needed)
```bash
git push origin main --force-with-lease
```

### Check Vercel Connection
```bash
vercel ls
vercel inspect
```

## Manual Deployment Steps

If auto-deploy isn't working:

1. **Via Vercel Dashboard:**
   - Go to Deployments
   - Click "Deploy" → "Deploy Latest Commit"
   - Select branch: `main`
   - Click "Deploy"

2. **Via Vercel CLI:**
   ```bash
   vercel --prod
   ```

3. **Via GitHub:**
   - Make a small change (update README)
   - Commit and push
   - This should trigger deployment

## Verification Checklist

After fixing, verify:

- [ ] Latest commit is on GitHub
- [ ] Vercel shows new deployment
- [ ] Deployment status is "Ready"
- [ ] Site is accessible at www.wealthtransitionplanning.com
- [ ] No build errors in logs
- [ ] Environment variables are set

## Still Not Working?

### Contact Vercel Support
1. Go to: https://vercel.com/support
2. Include:
   - Project name
   - Repository URL
   - Latest commit hash
   - Build logs (if any)

### Check Vercel Status
- Visit: https://www.vercel-status.com/
- Check for service outages

## Quick Fix Script

Run the PowerShell script:
```powershell
.\fix-deployment-now.ps1
```

This will:
1. Check git status
2. Commit any uncommitted changes
3. Push to GitHub
4. Verify push succeeded
5. Provide next steps

---

**Last Updated:** $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')

