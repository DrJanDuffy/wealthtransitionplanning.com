# Fix Vercel Auto-Deployment from Git Push

## Issue: Git Push Not Triggering Auto-Deployment

If git push isn't triggering automatic deployments on Vercel, here are the common causes and solutions:

## Common Causes

### 1. Repository Not Connected to Vercel

**Check:**
- Go to Vercel Dashboard → Your Project → Settings → Git
- Verify the repository is connected
- Check which branch is set for production deployments

**Fix:**
- If not connected, click "Connect Git Repository"
- Select your GitHub repository: `DrJanDuffy/wealthtransitionplanning.com`
- Ensure "Production Branch" is set to `main` (or `master`)

### 2. Wrong Branch

**Check:**
```bash
git branch
```

**Fix:**
- Ensure you're pushing to the branch configured in Vercel
- Usually `main` or `master`
- Vercel Settings → Git → Production Branch should match

### 3. GitHub Integration Not Authorized

**Check:**
- Vercel Dashboard → Settings → Git
- Verify GitHub integration is authorized

**Fix:**
- Re-authorize GitHub integration if needed
- Go to Vercel Settings → Git → Disconnect and reconnect

### 4. Webhook Issues

**Check:**
- GitHub repository → Settings → Webhooks
- Should see a Vercel webhook

**Fix:**
- If webhook is missing, reconnect repository in Vercel
- Vercel will automatically create the webhook

### 5. Vercel Project Not Linked to Repository

**Check:**
- Vercel Dashboard → Project Settings → Git
- Should show: `github.com/DrJanDuffy/wealthtransitionplanning.com`

**Fix:**
- If not linked, use Vercel CLI:
  ```bash
  vercel link
  ```
- Or manually connect in Vercel Dashboard

## Step-by-Step Fix

### Option 1: Connect via Vercel Dashboard (Recommended)

1. **Go to Vercel Dashboard:**
   - Navigate to your project
   - Click "Settings" → "Git"

2. **Connect Repository:**
   - Click "Connect Git Repository"
   - Select GitHub
   - Authorize if needed
   - Select: `DrJanDuffy/wealthtransitionplanning.com`
   - Choose branch: `main`

3. **Configure:**
   - Production Branch: `main`
   - Root Directory: `./` (if project is in root)
   - Build Command: `pnpm build` (or leave default)
   - Output Directory: `.next` (or leave default)

4. **Save Settings**

### Option 2: Use Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login:**
   ```bash
   vercel login
   ```

3. **Link Project:**
   ```bash
   vercel link
   ```
   - Select your team
   - Select your project
   - Link to existing project or create new

4. **Verify:**
   ```bash
   vercel git connect
   ```

### Option 3: Manual Webhook Setup

If automatic connection doesn't work:

1. **Get Vercel Webhook URL:**
   - Vercel Dashboard → Project → Settings → Git
   - Copy webhook URL

2. **Add to GitHub:**
   - GitHub → Repository → Settings → Webhooks
   - Add webhook
   - Paste Vercel webhook URL
   - Content type: `application/json`
   - Events: "Just the push event"
   - Save

## Verify Connection

### Check in Vercel:
1. Go to Project → Settings → Git
2. Should show:
   - Repository: `github.com/DrJanDuffy/wealthtransitionplanning.com`
   - Production Branch: `main`
   - Git Provider: GitHub

### Check in GitHub:
1. Repository → Settings → Webhooks
2. Should see Vercel webhook
3. Recent deliveries should show successful pushes

### Test:
1. Make a small change
2. Commit and push:
   ```bash
   git add .
   git commit -m "Test auto-deployment"
   git push origin main
   ```
3. Check Vercel Dashboard → Deployments
4. Should see new deployment within 1-2 minutes

## Troubleshooting

### If Still Not Working:

1. **Check Git Remote:**
   ```bash
   git remote -v
   ```
   Should show your GitHub repository URL

2. **Verify Branch:**
   ```bash
   git branch
   ```
   Should be on `main` or `master`

3. **Check Vercel Logs:**
   - Vercel Dashboard → Deployments
   - Look for any error messages

4. **Reconnect Repository:**
   - Vercel Dashboard → Settings → Git
   - Disconnect and reconnect repository

5. **Check Vercel Team Settings:**
   - Ensure GitHub integration is authorized
   - Check team permissions

## Quick Fix Commands

```bash
# 1. Verify git remote
git remote -v

# 2. Ensure you're on main branch
git checkout main

# 3. Push to trigger deployment
git push origin main

# 4. If using Vercel CLI, link project
vercel link
```

## After Fixing

Once connected, every `git push` to the production branch will:
1. Trigger webhook to Vercel
2. Start automatic build
3. Deploy to production (if build succeeds)

## Summary

Most common issue: **Repository not connected in Vercel Dashboard**

**Quick Fix:**
1. Vercel Dashboard → Project → Settings → Git
2. Connect repository: `DrJanDuffy/wealthtransitionplanning.com`
3. Set production branch: `main`
4. Test with a new commit and push

