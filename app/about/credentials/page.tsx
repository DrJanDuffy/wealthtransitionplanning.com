import type { Metadata } from 'next'
import { businessConfig } from 'app/config/business'
import { baseUrl } from 'app/sitemap'
import { Certifications } from 'app/components/certifications'
import { ContactButtons } from 'app/components/google/contact-buttons'
import Link from 'next/link'

export const metadata: Metadata = {
  title: `Professional Credentials & Certifications | Dr. Janet Duffy | ${businessConfig.name}`,
  description: 'Dr. Janet Duffy\'s professional credentials: CERTIFIED Financial Planner (CFP®), Fee-Only Fiduciary, Estate Planning Specialist. Professional affiliations and certifications.',
  keywords: [
    'CERTIFIED Financial Planner Las Vegas',
    'CFP Las Vegas',
    'fiduciary financial advisor',
    'estate planning specialist',
    'financial planning certifications',
    'NAPFA member',
    'FPA member',
  ],
  openGraph: {
    title: `Professional Credentials & Certifications | Dr. Janet Duffy | ${businessConfig.name}`,
    description: 'Dr. Janet Duffy\'s professional credentials and certifications as a CERTIFIED Financial Planner and fiduciary advisor.',
    url: `${baseUrl}/about/credentials`,
    siteName: businessConfig.name,
    locale: 'en_US',
    type: 'website',
  },
}

export default function CredentialsPage() {
  return (
    <>
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-gray-900" aria-label="Breadcrumb">
        <ol className="flex space-x-2 list-none">
          <li className="flex items-center"><Link href="/" className="hover:underline">Home</Link></li>
          <li className="flex items-center">/</li>
          <li className="flex items-center"><Link href="/about" className="hover:underline">About</Link></li>
          <li className="flex items-center">/</li>
          <li className="flex items-center text-gray-900">Credentials</li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Professional Credentials & Certifications
          </h1>
          <p className="text-xl text-gray-900 dark:text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Dr. Janet Duffy maintains the highest professional standards and holds multiple 
            certifications and credentials that demonstrate her expertise in real estate 
            services, financial planning, and wealth transition strategies.
          </p>
        </div>

        <Certifications />

        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">Why Credentials Matter</h2>
            <p className="text-lg text-gray-900 dark:text-gray-100 max-w-3xl mx-auto leading-relaxed">
              Professional credentials and certifications demonstrate a commitment to ongoing 
              education, ethical standards, and expertise in financial planning and real estate 
              services. When you work with a CERTIFIED Financial Planner and fiduciary advisor, 
              you can trust that your financial interests are the top priority.
            </p>
          </div>
        </section>

        <div className="mb-12">
          <ContactButtons />
        </div>
      </article>
    </>
  )
}

