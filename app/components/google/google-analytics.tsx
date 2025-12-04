'use client'

import Script from 'next/script'

/**
 * Google Analytics Component (GA4)
 * 
 * Add your Google Analytics Measurement ID to environment variables:
 * NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
 * 
 * To find your Measurement ID:
 * 1. Go to https://analytics.google.com
 * 2. Admin > Data Streams > Web Stream
 * 3. Copy the Measurement ID (starts with G-)
 */
export function GoogleAnalytics() {
  // Use environment variable or fallback to the configured tracking ID
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-2LS5VKZ9QD'

  if (!measurementId) {
    return null
  }

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <Script
        id="google-analytics"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}


