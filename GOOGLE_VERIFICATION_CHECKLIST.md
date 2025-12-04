# ✅ Google Verification Quick Checklist

## 🚀 Pre-Flight Check (Before Google Setup)

### Code Configuration ✅
- [x] Sitemap configured with correct domain
- [x] Robots.txt properly set up
- [x] LocalBusiness schema on all pages
- [x] Open Graph metadata configured
- [x] Twitter cards configured
- [x] Google Analytics component ready
- [x] Google Search Console verification support
- [x] Google Maps component ready
- [x] Contact buttons (Call, Directions, Reviews)
- [x] FAQ schema components
- [x] All pages mobile-responsive
- [x] All pages SEO optimized (H1, H2, H3, 1500+ words)

### Deployment ✅
- [x] Site deployed to Vercel
- [x] Domain configured (www.wealthtransitionplanning.com)
- [x] HTTPS enabled
- [x] All pages accessible

---

## 🔧 Required Actions (Do These Now)

### 1. Vercel Environment Variables ⚠️ CRITICAL

**Go to:** Vercel Dashboard → Your Project → Settings → Environment Variables

**Add these:**
- [ ] `NEXT_PUBLIC_BASE_URL` = `https://www.wealthtransitionplanning.com` ⚠️ **REQUIRED**
- [ ] `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` = `your_code` (from Search Console)
- [ ] `NEXT_PUBLIC_GA_MEASUREMENT_ID` = `G-XXXXXXXXXX` (from Analytics)
- [ ] `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` = `your_key` (optional, for Maps)

**After adding:** Redeploy or wait for next deployment

### 2. Update Business Information

**File:** `app/config/business.ts`

**Update:**
- [ ] Street address (line 15)
- [ ] ZIP code (line 18)
- [ ] Phone number (line 23)
- [ ] Google Maps Place ID (line 29)
- [ ] Google Business Profile URL (line 28)
- [ ] Coordinates - latitude (line 33)
- [ ] Coordinates - longitude (line 34)

**After updating:** Commit and push changes

### 3. Google Search Console

**Steps:**
1. [ ] Go to: https://search.google.com/search-console
2. [ ] Add property: `https://www.wealthtransitionplanning.com`
3. [ ] Choose verification method (HTML tag recommended)
4. [ ] Copy verification code
5. [ ] Add to Vercel environment variable: `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`
6. [ ] Redeploy site
7. [ ] Click "Verify" in Search Console
8. [ ] Submit sitemap: `sitemap.xml`
9. [ ] Request indexing for homepage

### 4. Google Analytics

**Steps:**
1. [ ] Go to: https://analytics.google.com
2. [ ] Create GA4 property (if not exists)
3. [ ] Copy Measurement ID (starts with `G-`)
4. [ ] Add to Vercel: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
5. [ ] Redeploy site
6. [ ] Verify in Real-Time reports

### 5. Google Business Profile

**Steps:**
1. [ ] Go to your Google Business Profile
2. [ ] Verify NAP matches website exactly:
   - [ ] Name matches
   - [ ] Address matches (exact format)
   - [ ] Phone matches (exact format)
3. [ ] Add website URL: `https://www.wealthtransitionplanning.com`
4. [ ] Verify business hours match
5. [ ] Add business description
6. [ ] Upload photos

---

## 🧪 Testing Checklist

### After Deployment

**Test Sitemap:**
- [ ] Visit: `https://www.wealthtransitionplanning.com/sitemap.xml`
- [ ] Verify shows correct domain (www.wealthtransitionplanning.com)
- [ ] Verify all pages listed
- [ ] Verify last modified dates

**Test Robots.txt:**
- [ ] Visit: `https://www.wealthtransitionplanning.com/robots.txt`
- [ ] Verify sitemap URL is correct

**Test Schema Markup:**
- [ ] Visit: https://search.google.com/test/rich-results
- [ ] Enter homepage URL
- [ ] Verify LocalBusiness schema detected
- [ ] Check all fields are correct

**Test Open Graph:**
- [ ] Visit: https://www.opengraph.xyz/
- [ ] Enter homepage URL
- [ ] Verify title, description, image show correctly

**Test Mobile-Friendly:**
- [ ] Visit: https://search.google.com/test/mobile-friendly
- [ ] Enter homepage URL
- [ ] Verify passes test

**Test Page Speed:**
- [ ] Visit: https://pagespeed.web.dev/
- [ ] Enter homepage URL
- [ ] Check Core Web Vitals
- [ ] Note any improvements needed

---

## 📊 Verification Timeline

### Day 1 (Today)
- [ ] Set environment variables in Vercel
- [ ] Update business information
- [ ] Submit to Google Search Console
- [ ] Set up Google Analytics
- [ ] Link Google Business Profile

### Day 2-3
- [ ] Check Search Console for verification
- [ ] Verify sitemap is indexed
- [ ] Check Analytics is tracking
- [ ] Test all integrations

### Week 1
- [ ] Monitor Search Console for indexing
- [ ] Check for crawl errors
- [ ] Review Analytics data
- [ ] Verify rich snippets (if applicable)

### Month 1
- [ ] Review Search Console performance
- [ ] Analyze Analytics reports
- [ ] Update content based on data
- [ ] Optimize based on insights

---

## ✅ Success Indicators

### Google Search Console
- ✅ Property verified
- ✅ Sitemap submitted and indexed
- ✅ Pages appearing in search results
- ✅ No crawl errors
- ✅ Impressions increasing over time

### Google Analytics
- ✅ Real-time data showing
- ✅ Page views tracking correctly
- [ ] User behavior data collecting
- [ ] Traffic sources identified

### Google Business Profile
- ✅ Website link added
- ✅ NAP matches exactly
- ✅ Reviews visible
- ✅ Map embed working (if API key set)

---

## 🚨 Common Issues & Fixes

### Issue: Sitemap shows wrong domain
**Fix:** Set `NEXT_PUBLIC_BASE_URL` in Vercel environment variables

### Issue: Search Console verification fails
**Fix:** 
1. Check environment variable is set correctly
2. Redeploy site
3. Wait 5 minutes, try again

### Issue: Analytics not tracking
**Fix:**
1. Verify Measurement ID is correct (starts with `G-`)
2. Check environment variable name: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
3. Clear browser cache and test

### Issue: Schema markup not detected
**Fix:**
1. Use Rich Results Test tool
2. Check for JSON-LD errors
3. Verify LocalBusinessSchema component is in layout.tsx

### Issue: Pages not indexing
**Fix:**
1. Submit sitemap in Search Console
2. Request indexing for key pages
3. Wait 24-48 hours
4. Check for crawl errors

---

## 📞 Quick Reference

**Google Search Console:** https://search.google.com/search-console  
**Google Analytics:** https://analytics.google.com  
**Google Business Profile:** https://business.google.com  
**Rich Results Test:** https://search.google.com/test/rich-results  
**Mobile-Friendly Test:** https://search.google.com/test/mobile-friendly  
**PageSpeed Insights:** https://pagespeed.web.dev/

**Your Site:**
- **Homepage:** https://www.wealthtransitionplanning.com
- **Sitemap:** https://www.wealthtransitionplanning.com/sitemap.xml
- **Robots:** https://www.wealthtransitionplanning.com/robots.txt

---

## 🎯 Priority Actions (Do First)

1. ⚠️ **Set `NEXT_PUBLIC_BASE_URL` in Vercel** (CRITICAL)
2. ⚠️ **Update business information** in `app/config/business.ts`
3. ⚠️ **Verify in Google Search Console**
4. ⚠️ **Submit sitemap**
5. ⚠️ **Set up Google Analytics**

**Everything else can wait!** 🚀

---

**Status:** ✅ Code Ready | ⚠️ Action Required: Environment Variables & Business Info

