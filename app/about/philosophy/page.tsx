import type { Metadata } from 'next'
import { businessConfig } from 'app/config/business'
import { baseUrl } from 'app/sitemap'
import { PhilosophySection } from 'app/components/philosophy-section'
import { ContactButtons } from 'app/components/google/contact-buttons'
import Link from 'next/link'

export const metadata: Metadata = {
  title: `Financial Planning Philosophy | Dr. Janet Duffy | ${businessConfig.name}`,
  description: 'Dr. Janet Duffy\'s financial planning philosophy: Fee-Only Fiduciary approach, comprehensive planning, and wealth transition expertise. Learn about our approach to real estate and financial planning.',
  keywords: [
    'fee-only financial planner',
    'fiduciary financial advisor',
    'comprehensive financial planning',
    'wealth transition philosophy',
    'estate planning approach',
    'financial planning principles',
  ],
  openGraph: {
    title: `Financial Planning Philosophy | Dr. Janet Duffy | ${businessConfig.name}`,
    description: 'Dr. Janet Duffy\'s financial planning philosophy: Fee-Only Fiduciary approach and comprehensive wealth transition planning.',
    url: `${baseUrl}/about/philosophy`,
    siteName: businessConfig.name,
    locale: 'en_US',
    type: 'website',
  },
}

export default function PhilosophyPage() {
  return (
    <>
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-gray-900" aria-label="Breadcrumb">
        <ol className="flex space-x-2 list-none">
          <li className="flex items-center"><Link href="/" className="hover:underline">Home</Link></li>
          <li className="flex items-center">/</li>
          <li className="flex items-center"><Link href="/about" className="hover:underline">About</Link></li>
          <li className="flex items-center">/</li>
          <li className="flex items-center text-gray-900">Philosophy</li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none">
        <PhilosophySection />

        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">Our Approach to Real Estate and Financial Planning</h2>
            <p className="text-lg text-gray-900 dark:text-gray-100 max-w-3xl mx-auto leading-relaxed">
              Our philosophy extends to how we approach real estate services for financial planners. 
              We believe that real estate decisions should always align with your clients' comprehensive 
              financial plans, tax strategies, and wealth transition goals. Every recommendation we 
              make considers the broader financial picture, ensuring that real estate transactions 
              support rather than complicate your financial planning objectives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Client-Centered Approach</h3>
              <p className="text-gray-800 dark:text-gray-200 leading-relaxed mb-4">
                We put your clients' best interests first, always. As a fiduciary advisor, Dr. Duffy 
                is legally obligated to act in your clients' best interests, ensuring that every real 
                estate recommendation supports their financial goals and long-term success.
              </p>
            </div>

            <div className="p-8 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Collaborative Partnership</h3>
              <p className="text-gray-800 dark:text-gray-200 leading-relaxed mb-4">
                We work as your partner, not a replacement. Our real estate services are designed to 
                complement your financial planning practice, enhancing your value proposition while 
                maintaining your role as the primary advisor.
              </p>
            </div>
          </div>
        </section>

        <div className="mb-12">
          <ContactButtons />
        </div>
      </article>
    </>
  )
}

