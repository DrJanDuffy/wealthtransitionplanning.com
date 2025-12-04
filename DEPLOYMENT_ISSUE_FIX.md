# 🚨 Deployment Issue: Wrong Content Showing

## Issue Identified

The live site at `https://wealthtransitionplanning-5ena09glk-janet-duffys-projects.vercel.app` is showing:
- ❌ Default template content ("My Portfolio", "Vim enthusiast")
- ❌ Wrong sitemap domain (`portfolio-blog-starter.vercel.app`)

**This means the deployment is using old/cached code.**

---

## ✅ Fix Steps

### Step 1: Verify Code is Pushed

```bash
# Check if all changes are committed
git status

# Check recent commits
git log --oneline -5

# Push if needed
git push origin main
```

### Step 2: Check Vercel Deployment

1. **Go to:** https://vercel.com/dashboard
2. **Click** your project
3. **Check Deployments** tab
4. **Verify:**
   - Latest deployment commit matches your latest commit
   - Build logs show correct files being built

### Step 3: Force New Deployment

**Option A: Empty Commit**
```bash
git commit --allow-empty -m "Force Vercel rebuild with latest code"
git push origin main
```

**Option B: Manual Redeploy**
1. Vercel Dashboard → Deployments
2. Click "..." on latest deployment
3. Click "Redeploy"
4. Wait for build

### Step 4: Set Environment Variable

**CRITICAL:** Set `NEXT_PUBLIC_BASE_URL`

1. Vercel Dashboard → Settings → Environment Variables
2. Add: `NEXT_PUBLIC_BASE_URL` = `https://www.wealthtransitionplanning.com`
3. Select all environments
4. Save
5. Redeploy

---

## 🔍 Verify Correct Code

The repository has the correct code:
- ✅ Homepage: `app/page.tsx` has Wealth Transition Planning content
- ✅ Sitemap: `app/sitemap.ts` has correct fallback domain
- ✅ All components: Properly configured

**The issue is the deployment is using old code.**

---

## 🎯 Solution

1. **Force new deployment** (see Step 3)
2. **Set environment variable** (see Step 4)
3. **Verify** site shows correct content

---

**The code is correct - we just need to force Vercel to rebuild with the latest code!**

