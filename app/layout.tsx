import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'
import { businessConfig } from './config/business'
import {
  LocalBusinessSchema,
  OrganizationSchema,
  WebSiteSchema,
  PersonSchema,
  GoogleAnalytics,
} from './components/google'

/**
 * 2025 Enhanced Metadata Configuration
 * Optimized for Google Search, AI understanding, and semantic SEO
 */
export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${businessConfig.name} | ${businessConfig.serviceArea.city}, ${businessConfig.serviceArea.state}`,
    template: `%s | ${businessConfig.name}`,
  },
  description: businessConfig.description,
  // 2025: Enhanced keywords for semantic understanding
  keywords: [
    ...businessConfig.keywords,
    'wealth transition specialist',
    'estate planning expert',
    'retirement planning Las Vegas',
    '55+ community real estate',
    'empty nester housing',
    'fiduciary financial advisor',
    'Dr. Jan Duffy REALTOR',
  ],
  authors: [{ name: businessConfig.owner, url: `${baseUrl}/about` }],
  // 2025: Creator and publisher for E-E-A-T
  creator: businessConfig.owner,
  publisher: businessConfig.name,
  // 2025: Format detection
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  // 2025: Category for better classification
  category: 'Financial Services',
  // 2025: Classification for content type
  classification: 'Business',
  // 2025: Enhanced OpenGraph for social and AI
  openGraph: {
    title: businessConfig.name,
    description: businessConfig.description,
    url: baseUrl,
    siteName: businessConfig.name,
    locale: 'en_US',
    type: 'website',
    countryName: 'United States',
    images: [
      {
        url: `${baseUrl}/og?title=${encodeURIComponent(businessConfig.name)}`,
        width: 1200,
        height: 630,
        alt: `${businessConfig.name} - Wealth Transition Planning in Las Vegas`,
        type: 'image/png',
      },
    ],
  },
  // 2025: Enhanced Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: businessConfig.name,
    description: businessConfig.description,
    images: [`${baseUrl}/og?title=${encodeURIComponent(businessConfig.name)}`],
    creator: '@wealthtransition',
    site: '@wealthtransition',
  },
  // 2025: Enhanced robots for AI crawlers
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // 2025: Alternate languages (for future internationalization)
  alternates: {
    canonical: baseUrl,
    languages: {
      'en-US': baseUrl,
    },
  },
  // 2025: App links for mobile deep linking
  appLinks: {
    web: {
      url: baseUrl,
      should_fallback: true,
    },
  },
  // 2025: Other metadata for enhanced understanding
  other: {
    'geo.region': 'US-NV',
    'geo.placename': 'Las Vegas',
    'geo.position': '36.1699;-115.1398',
    'ICBM': '36.1699, -115.1398',
    'og:locality': 'Las Vegas',
    'og:region': 'NV',
    'og:country-name': 'United States',
    'business:contact_data:street_address': businessConfig.address.street,
    'business:contact_data:locality': businessConfig.address.city,
    'business:contact_data:region': businessConfig.address.state,
    'business:contact_data:postal_code': businessConfig.address.zipCode,
    'business:contact_data:country_name': businessConfig.address.country,
    'business:contact_data:email': businessConfig.email,
    'business:contact_data:phone_number': businessConfig.phone,
  },
  // Google Search Console verification
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? {
        google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
      }
    : undefined,
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <head>
        {/* 2025 Enhanced Schema Markup for Google Search */}
        <LocalBusinessSchema />
        <OrganizationSchema />
        <WebSiteSchema />
        <PersonSchema />

        {/* Preconnect to external domains for faster loading (Core Web Vitals) */}
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        {/* Preconnect to Google Maps */}
        <link rel="preconnect" href="https://maps.googleapis.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />

        {/* 2025: Preconnect to fonts for LCP optimization */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* 2025: Theme color for mobile browsers */}
        <meta name="theme-color" content="#2563eb" />
        <meta name="theme-color" content="#1e3a8a" media="(prefers-color-scheme: dark)" />

        {/* 2025: Apple mobile web app meta tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Wealth Transition" />

        {/* 2025: Format detection for mobile */}
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className="antialiased bg-white text-gray-900" style={{ color: '#111827', fontSize: '16px', lineHeight: '1.7' }}>
        <Navbar />
        <main className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
        <GoogleAnalytics />
      </body>
    </html>
  )
}
