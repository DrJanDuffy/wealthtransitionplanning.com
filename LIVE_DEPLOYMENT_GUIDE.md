# 🚀 Live Deployment Guide - Get Your Site on Vercel

## Current Status

Your site code is ready. Let's get it live on Vercel!

---

## ✅ Step 1: Push to GitHub

### If Git Push Works:

```bash
git push origin main
```

### If Git Push Fails (Authentication):

**Option A: Use Personal Access Token**
1. Get token: https://github.com/settings/tokens
2. Generate new token (classic)
3. Check `repo` scope
4. Copy token
5. When pushing, use token as password

**Option B: Use GitHub CLI**
```bash
winget install GitHub.cli
gh auth login
git push origin main
```

---

## ✅ Step 2: Verify on GitHub

1. **Go to:** https://github.com/DrJanDuffy/wealthtransitionplanning.com/commits
2. **Verify:** You see your latest commits
3. **If only 1 commit:** Push didn't work, go back to Step 1

---

## ✅ Step 3: Check Vercel Deployment

### Automatic Deployment (If Webhook Works):

1. **Go to:** https://vercel.com/dashboard
2. **Click** your project
3. **Check** Deployments tab
4. **Wait** 1-2 minutes
5. **Look for** new deployment

### Manual Deployment (If Auto-Deploy Doesn't Work):

1. **Go to:** https://vercel.com/dashboard
2. **Click** your project
3. **Click** "Deployments" tab
4. **Click** "Deploy" button (top right)
5. **Select:** "Deploy Latest Commit"
6. **Select branch:** `main`
7. **Click:** "Deploy"
8. **Wait** for build to complete

---

## ✅ Step 4: Verify Deployment Status

### Check Deployment:

1. **Go to** Deployments tab
2. **Look for** latest deployment
3. **Check status:**
   - ✅ **Ready** = Success!
   - ⚠️ **Building** = Wait
   - ❌ **Error** = Check logs

### If Deployment Failed:

1. **Click** on failed deployment
2. **Check** Build Logs
3. **Look for** errors:
   - TypeScript errors
   - Missing dependencies
   - Build failures
4. **Fix** errors and push again

---

## ✅ Step 5: Set Environment Variable (CRITICAL)

### Required: `NEXT_PUBLIC_BASE_URL`

1. **Vercel Dashboard** → Your Project
2. **Settings** → **Environment Variables**
3. **Add:**
   - **Key:** `NEXT_PUBLIC_BASE_URL`
   - **Value:** `https://www.wealthtransitionplanning.com`
   - **Environment:** Select all (Production, Preview, Development)
4. **Save**
5. **Redeploy** (or wait for auto-redeploy)

---

## ✅ Step 6: Verify Site is Live

### Test Your Site:

1. **Preview URL:** Check your Vercel deployment URL
2. **Production URL:** https://www.wealthtransitionplanning.com (if domain is set)
3. **Test pages:**
   - Homepage: `/`
   - About: `/about`
   - Services: `/services`
   - Contact: `/contact`

### Test Sitemap:

Visit: `https://your-deployment-url.vercel.app/sitemap.xml`

Should show all pages with correct domain (after environment variable is set)

---

## 🔄 Iteration Process

### If Deployment Doesn't Work:

1. **Check Git Push:**
   ```bash
   git status
   git log --oneline -3
   git push origin main
   ```

2. **Check Vercel Connection:**
   - Vercel → Settings → Git
   - Verify repository is connected
   - Verify production branch is `main`

3. **Manually Trigger:**
   - Vercel → Deployments → Deploy → Deploy Latest Commit

4. **Check Build Logs:**
   - Look for errors
   - Fix issues
   - Push again

5. **Create Empty Commit (if needed):**
   ```bash
   git commit --allow-empty -m "Trigger deployment"
   git push origin main
   ```

---

## ✅ Success Checklist

Your site is live when:

- [ ] Git push successful
- [ ] Commits visible on GitHub
- [ ] Vercel deployment shows "Ready"
- [ ] Site accessible at preview/production URL
- [ ] All pages load correctly
- [ ] Sitemap accessible
- [ ] Environment variable set
- [ ] No build errors

---

## 🚨 Common Issues & Fixes

### Issue: Git Push Fails
**Fix:** Use Personal Access Token or GitHub CLI

### Issue: No Vercel Deployment
**Fix:** Manually deploy via Vercel Dashboard

### Issue: Build Fails
**Fix:** Check build logs, fix errors, push again

### Issue: Wrong Domain in Sitemap
**Fix:** Set `NEXT_PUBLIC_BASE_URL` environment variable

### Issue: Site Not Accessible
**Fix:** Check deployment status, verify domain is configured

---

## 🎯 Quick Commands

### Push Everything:
```bash
git add -A
git commit -m "Deploy to Vercel"
git push origin main
```

### Trigger Deployment:
```bash
git commit --allow-empty -m "Trigger Vercel deployment"
git push origin main
```

### Check Status:
```bash
git status
git log --oneline -5
git remote -v
```

---

## 📞 Need Help?

1. **Check Git Status:** `git status`
2. **Check Vercel Dashboard:** https://vercel.com/dashboard
3. **Check Build Logs:** Vercel → Deployments → Click deployment → Build Logs
4. **Check GitHub:** https://github.com/DrJanDuffy/wealthtransitionplanning.com

---

**Run the deployment script:** `powershell -ExecutionPolicy Bypass -File .\deploy-to-vercel.ps1`

**This will guide you through the entire process!** 🚀

