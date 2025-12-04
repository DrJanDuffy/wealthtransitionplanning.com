# Fix Sitemap Domain Issue

## Problem

The sitemap is showing the wrong domain: `portfolio-blog-starter.vercel.app` instead of `www.wealthtransitionplanning.com`

## Root Cause

The environment variable `NEXT_PUBLIC_BASE_URL` in Vercel is set to the wrong value (or not set, but Vercel is using a default from the template).

## Solution: Set Environment Variable in Vercel

### Step 1: Go to Vercel Dashboard

1. Navigate to your project: `wealthtransitionplanning.com`
2. Click **Settings** → **Environment Variables**

### Step 2: Add/Update Environment Variable

1. **Variable Name:** `NEXT_PUBLIC_BASE_URL`
2. **Value:** `https://www.wealthtransitionplanning.com`
3. **Environment:** Select all:
   - ✅ Production
   - ✅ Preview
   - ✅ Development (optional)

4. Click **Save**

### Step 3: Redeploy

After setting the environment variable, you need to redeploy:

**Option A: Automatic (Recommended)**
- Make a small change and push to trigger new deployment
- Or wait for next git push

**Option B: Manual Redeploy**
- Go to Vercel Dashboard → Deployments
- Click on latest deployment
- Click **"Redeploy"** button
- This will use the new environment variable

### Step 4: Verify

After redeployment, check:
- Visit: `https://www.wealthtransitionplanning.com/sitemap.xml`
- Should show: `https://www.wealthtransitionplanning.com` (not portfolio-blog-starter.vercel.app)

## Why This Happened

The project was created from a template (`portfolio-blog-starter`), and the environment variable was likely set to the template's domain during initial setup.

## Code Status

✅ The code is correct:
- `app/sitemap.ts` has the right fallback: `'https://www.wealthtransitionplanning.com'`
- But if `NEXT_PUBLIC_BASE_URL` is set in Vercel, it overrides the fallback

## Quick Fix Summary

1. **Vercel Dashboard** → Project → Settings → Environment Variables
2. **Set:** `NEXT_PUBLIC_BASE_URL` = `https://www.wealthtransitionplanning.com`
3. **Redeploy** (manual or wait for next push)
4. **Verify** sitemap shows correct domain

## After Fix

The sitemap will show:
- ✅ `https://www.wealthtransitionplanning.com`
- ✅ `https://www.wealthtransitionplanning.com/about`
- ✅ `https://www.wealthtransitionplanning.com/cfp-partners`
- ✅ All other pages with correct domain

Instead of:
- ❌ `https://portfolio-blog-starter.vercel.app`
- ❌ `https://portfolio-blog-starter.vercel.app/about`
- etc.

