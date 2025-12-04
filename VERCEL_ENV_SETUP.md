# ⚠️ CRITICAL: Vercel Environment Variable Setup

## Set This Now: `NEXT_PUBLIC_BASE_URL`

Your site is deployed, but you need to set one environment variable to fix the sitemap and Open Graph metadata.

---

## 🚀 Quick Setup (2 Minutes)

### Step 1: Go to Vercel Dashboard

1. **Visit:** https://vercel.com/dashboard
2. **Click** on your project: `wealthtransitionplanning.com`
3. **Click:** Settings (top menu)
4. **Click:** Environment Variables (left sidebar)

### Step 2: Add Environment Variable

1. **Click:** "Add New" button
2. **Key:** `NEXT_PUBLIC_BASE_URL`
3. **Value:** `https://www.wealthtransitionplanning.com`
4. **Environment:** Select all three:
   - ✅ Production
   - ✅ Preview
   - ✅ Development
5. **Click:** Save

### Step 3: Redeploy

**Option A: Auto-redeploy**
- Wait 1-2 minutes
- Vercel will automatically redeploy

**Option B: Manual redeploy**
1. Go to **Deployments** tab
2. Click **"..."** on latest deployment
3. Click **"Redeploy"**
4. Wait for build to complete

---

## ✅ Verify It Worked

### Check Sitemap:
1. Visit: `https://wealthtransitionplanning-75q0m4qu6-janet-duffys-projects.vercel.app/sitemap.xml`
2. Should show: `https://www.wealthtransitionplanning.com` (not vercel.app domain)

### Check Open Graph:
1. Visit: https://www.opengraph.xyz/
2. Enter your preview URL
3. Should show correct domain in metadata

---

## 📋 Optional Environment Variables

Set these when ready:

### Google Search Console
- **Key:** `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`
- **Value:** Your verification code from Search Console
- **When:** After setting up Google Search Console

### Google Analytics
- **Key:** `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- **Value:** `G-XXXXXXXXXX` (your Measurement ID)
- **When:** After setting up Google Analytics

### Google Maps
- **Key:** `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`
- **Value:** Your Google Maps API key
- **When:** If you want to use Maps embed

---

## 🎯 Why This Matters

**Without `NEXT_PUBLIC_BASE_URL`:**
- ❌ Sitemap shows wrong domain
- ❌ Open Graph shows wrong domain
- ❌ Schema markup may have wrong URLs
- ❌ Social sharing shows wrong links

**With `NEXT_PUBLIC_BASE_URL` set:**
- ✅ Sitemap shows correct domain
- ✅ Open Graph shows correct domain
- ✅ Schema markup has correct URLs
- ✅ Social sharing works correctly
- ✅ Google can index correctly

---

## ✅ After Setting

1. **Wait 1-2 minutes** for redeploy
2. **Check sitemap** - should show correct domain
3. **Check OG metadata** - should show correct domain
4. **Verify site** - everything should work correctly

---

**This is the most important step! Set it now!** ⚠️

