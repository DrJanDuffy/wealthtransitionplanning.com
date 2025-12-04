import type { Metadata } from 'next'
import { businessConfig } from 'app/config/business'
import { baseUrl } from 'app/sitemap'
import { HowWeWorkSection } from 'app/components/services/how-we-work-section'
import { ServicesCTA } from 'app/components/services/services-cta'
import Link from 'next/link'

export const metadata: Metadata = {
  title: `How We Work With Financial Planners | ${businessConfig.name}`,
  description: 'Learn how our real estate services seamlessly integrate with your financial planning practice. Seamless integration, financial planning alignment, and collaborative approach for CFP partners.',
  keywords: [
    'real estate services for financial planners',
    'CFP partnership integration',
    'financial planning alignment',
    'real estate and financial planning',
    'collaborative real estate services',
    'seamless integration financial planning',
  ],
  openGraph: {
    title: `How We Work With Financial Planners | ${businessConfig.name}`,
    description: 'Learn how our real estate services seamlessly integrate with your financial planning practice.',
    url: `${baseUrl}/services/how-we-work`,
    siteName: businessConfig.name,
    locale: 'en_US',
    type: 'website',
  },
}

export default function HowWeWorkPage() {
  return (
    <>
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-gray-900" aria-label="Breadcrumb">
        <ol className="flex space-x-2 list-none">
          <li className="flex items-center"><Link href="/" className="hover:underline">Home</Link></li>
          <li className="flex items-center">/</li>
          <li className="flex items-center"><Link href="/services" className="hover:underline">Services</Link></li>
          <li className="flex items-center">/</li>
          <li className="flex items-center text-gray-900">How We Work</li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none">
        <HowWeWorkSection />
        <ServicesCTA />
      </article>
    </>
  )
}

