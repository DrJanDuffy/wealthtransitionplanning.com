# Google Integration Setup Guide

This guide will help you complete the Google integration for your website, ensuring optimal visibility in Google Search and Google Business Profile.

## ✅ What's Already Configured

- ✅ LocalBusiness schema markup on all pages
- ✅ Google Analytics (GA4) component ready
- ✅ Google Maps embed component
- ✅ Contact buttons (Call, Directions, Reviews)
- ✅ FAQ schema component
- ✅ Business information structure
- ✅ Google Search Console verification support
- ✅ Updated metadata and SEO configuration

## 📋 Setup Checklist

### 1. Update Business Information

**File: `app/config/business.ts`**

Update all fields marked with `UPDATE:` to match your Google Business Profile exactly:

- Business name
- Complete address (must match GBP exactly)
- Phone number (must match GBP exactly)
- Email address
- Business hours (must match GBP exactly)
- Google Business Profile URL
- Google Maps Place ID
- Google Reviews URL
- Business coordinates (latitude/longitude)

**To find your Google Maps Place ID:**
1. Go to your Google Business Profile
2. Click on the map/location
3. The Place ID is in the URL or use: https://developers.google.com/maps/documentation/places/web-service/place-id

**To find coordinates:**
1. Search your business address on Google Maps
2. Right-click on the pin
3. Select the coordinates (latitude, longitude)

### 2. Google Search Console Setup

1. **Go to Google Search Console**: https://search.google.com/search-console
2. **Add Property**: Add your website URL
3. **Verify Ownership**: Choose one method:
   - **HTML tag method** (recommended):
     - Copy the `content` value from the meta tag
     - Add to `.env.local`: `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your_code_here`
   - **HTML file method**:
     - Download the verification file
     - Add content to `.env.local`: `NEXT_PUBLIC_GOOGLE_VERIFICATION_CONTENT=file_content`
4. **Submit Sitemap**: 
   - Go to Sitemaps section
   - Submit: `https://yourdomain.com/sitemap.xml`

### 3. Google Analytics (GA4) Setup

1. **Go to Google Analytics**: https://analytics.google.com
2. **Create Property** (if you don't have one)
3. **Set up Data Stream**:
   - Choose "Web"
   - Enter your website URL
   - Copy the Measurement ID (format: `G-XXXXXXXXXX`)
4. **Add to Environment Variables**:
   - Add to `.env.local`: `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX`

### 4. Google Maps API (Optional)

If you want to use the Google Maps embed component:

1. **Go to Google Cloud Console**: https://console.cloud.google.com
2. **Create Project** (or use existing)
3. **Enable APIs**:
   - Maps Embed API
   - Places API (for Place ID lookups)
4. **Create API Key**:
   - Go to Credentials
   - Create API Key
   - Restrict key to your domain (recommended)
5. **Add to Environment Variables**:
   - Add to `.env.local`: `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key`

### 5. Environment Variables

Create `.env.local` file in the root directory:

```bash
# Copy from .env.example and fill in your values
NEXT_PUBLIC_BASE_URL=https://wealthtransitionplanning.com
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your_verification_code
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key (optional)
```

### 6. Update Base URL

**File: `app/sitemap.ts`**

The base URL is already configured to use environment variables. Make sure `NEXT_PUBLIC_BASE_URL` is set in your `.env.local` file.

### 7. Test Your Setup

1. **Schema Markup**: 
   - Use Google's Rich Results Test: https://search.google.com/test/rich-results
   - Enter your homepage URL
   - Verify LocalBusiness schema appears

2. **Google Analytics**:
   - Visit your site
   - Check Google Analytics Real-Time reports
   - You should see your visit

3. **Search Console**:
   - Wait 24-48 hours after verification
   - Check Coverage report for indexed pages
   - Monitor for any errors

4. **Business Profile**:
   - Verify your website link is in your GBP
   - Ensure NAP matches exactly between GBP and website

## 🎯 Using the Components

### LocalBusiness Schema
Already included in `app/layout.tsx` - appears on all pages automatically.

### Google Maps
```tsx
import { GoogleMaps } from 'app/components/google/google-maps'

<GoogleMaps width="100%" height="450px" />
```

### Contact Buttons
```tsx
import { ContactButtons } from 'app/components/google/contact-buttons'

<ContactButtons showReviews={true} />
```

### FAQ Schema
```tsx
import { FAQSchema } from 'app/components/faq-schema'

<FAQSchema faqs={[
  { question: "What services do you offer?", answer: "We offer..." },
  { question: "Where are you located?", answer: "We are located..." }
]} />
```

## 📊 Monthly Maintenance

As per your requirements, audit monthly:

1. **Schema Consistency**: Verify schema markup on all pages
2. **NAP Accuracy**: Ensure Name, Address, Phone match GBP exactly
3. **GBP Link Health**: Verify website link in GBP is correct
4. **Mobile Friendliness**: Test on mobile devices
5. **Content Freshness**: Update blog/content regularly
6. **Review Schema**: If you add reviews, ensure they're marked up

## 🔗 Important Links

- [Google Search Console](https://search.google.com/search-console)
- [Google Analytics](https://analytics.google.com)
- [Google Business Profile](https://business.google.com)
- [Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org LocalBusiness](https://schema.org/LocalBusiness)

## ⚠️ Important Notes

- **NAP Consistency**: Name, Address, and Phone must match your Google Business Profile EXACTLY (including formatting, abbreviations, etc.)
- **Verification**: Google Search Console verification can take 24-48 hours
- **Indexing**: New pages may take time to appear in search results
- **API Keys**: Keep your Google Maps API key secure and restrict it to your domain

## 🆘 Troubleshooting

**Schema not showing in Rich Results Test:**
- Check that `LocalBusinessSchema` is imported and used in layout
- Verify business config has all required fields
- Wait a few minutes after deployment for changes to propagate

**Google Analytics not tracking:**
- Verify `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set correctly
- Check browser console for errors
- Ensure ad blockers aren't blocking GA

**Maps not displaying:**
- Verify API key is correct
- Check that Maps Embed API is enabled
- Verify API key restrictions allow your domain


