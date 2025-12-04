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
import { LocalBusinessSchema } from './components/google/local-business-schema'
import { GoogleAnalytics } from './components/google/google-analytics'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${businessConfig.name} | ${businessConfig.serviceArea.city}, ${businessConfig.serviceArea.state}`,
    template: `%s | ${businessConfig.name}`,
  },
  description: businessConfig.description,
  keywords: businessConfig.keywords,
  authors: [{ name: businessConfig.owner }],
  openGraph: {
    title: businessConfig.name,
    description: businessConfig.description,
    url: baseUrl,
    siteName: businessConfig.name,
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // Google Search Console verification
  // Add your verification code to environment variable: NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
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
        <LocalBusinessSchema />
      </head>
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
          <GoogleAnalytics />
        </main>
      </body>
    </html>
  )
}
