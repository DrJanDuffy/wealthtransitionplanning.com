import type { Metadata } from 'next'
import { businessConfig } from 'app/config/business'
import { baseUrl } from 'app/sitemap'
import { ContactButtons } from 'app/components/google/contact-buttons'
import Link from 'next/link'

export const metadata: Metadata = {
  title: `CFP Partnership Process | How It Works | ${businessConfig.name}`,
  description: 'Learn how the CFP partnership process works. Step-by-step guide to partnering with a Las Vegas real estate expert for your financial planning practice.',
  keywords: [
    'CFP partnership process',
    'financial planner partnership steps',
    'how CFP partnership works',
    'real estate partnership process',
    'CFP collaboration process',
  ],
  openGraph: {
    title: `CFP Partnership Process | How It Works | ${businessConfig.name}`,
    description: 'Learn how the CFP partnership process works step-by-step.',
    url: `${baseUrl}/cfp-partners/process`,
    siteName: businessConfig.name,
    locale: 'en_US',
    type: 'website',
  },
}

export default function CFPProcessPage() {
  return (
    <>
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-gray-900" aria-label="Breadcrumb">
        <ol className="flex space-x-2 list-none">
          <li className="flex items-center"><Link href="/" className="hover:underline">Home</Link></li>
          <li className="flex items-center">/</li>
          <li className="flex items-center"><Link href="/cfp-partners" className="hover:underline">CFP Partners</Link></li>
          <li className="flex items-center">/</li>
          <li className="flex items-center text-gray-900">Process</li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            How the Partnership Works
          </h1>
          <p className="text-xl text-gray-900 max-w-3xl mx-auto leading-relaxed">
            Our partnership process is designed to be straightforward and seamless, ensuring that 
            real estate services integrate smoothly with your financial planning practice. We work 
            with you to establish clear processes, communication protocols, and collaboration 
            methods that support your clients and enhance your practice.
          </p>
        </div>

        <section className="mb-16">
          <div className="space-y-8">
            <div className="p-8 border-l-4 border-blue-600 bg-blue-50 rounded-r-xl">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Step 1: Initial Consultation</h2>
              <p className="mb-4 text-gray-900 leading-relaxed">
                We begin with a comprehensive consultation to discuss your practice needs, client 
                base, and how real estate services can enhance your service offerings. This 
                consultation helps us understand your practice structure, client demographics, 
                and specific real estate needs.
              </p>
              <p className="mb-4 text-gray-900 leading-relaxed">
                During this consultation, we explore how real estate services can complement your 
                financial planning, identify opportunities to serve your clients better, and 
                establish initial partnership parameters that work for your practice.
              </p>
              <h3 className="text-lg font-semibold mb-3 text-gray-900">What We Discuss:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-900">
                <li>Your practice structure and client base</li>
                <li>Real estate service needs and opportunities</li>
                <li>Integration with existing financial planning processes</li>
                <li>Partnership expectations and goals</li>
                <li>Client referral and collaboration processes</li>
              </ul>
            </div>

            <div className="p-8 border-l-4 border-blue-600 bg-blue-50 rounded-r-xl">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Step 2: Partnership Agreement</h2>
              <p className="mb-4 text-gray-900 leading-relaxed">
                We establish clear partnership terms, referral processes, and collaboration 
                guidelines that ensure smooth operations and optimal client outcomes. The partnership 
                agreement outlines communication protocols, service delivery methods, and 
                collaboration processes.
              </p>
              <p className="mb-4 text-gray-900 leading-relaxed">
                This agreement ensures that all parties understand expectations, responsibilities, 
                and processes, creating a foundation for successful long-term collaboration that 
                benefits your practice and your clients.
              </p>
              <h3 className="text-lg font-semibold mb-3 text-gray-900">Agreement Includes:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-900">
                <li>Partnership terms and structure</li>
                <li>Communication and collaboration protocols</li>
                <li>Client referral processes</li>
                <li>Service delivery expectations</li>
                <li>Ongoing support and resources</li>
              </ul>
            </div>

            <div className="p-8 border-l-4 border-blue-600 bg-blue-50 rounded-r-xl">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Step 3: Resource Access</h2>
              <p className="mb-4 text-gray-900 leading-relaxed">
                You receive access to partnership resources, client education materials, marketing 
                support, and real estate tools that enhance your ability to serve clients. These 
                resources include guides, market analysis tools, and educational materials that 
                support your client relationships.
              </p>
              <p className="mb-4 text-gray-900 leading-relaxed">
                Resource access includes ongoing updates, new materials, and tools that help you 
                provide comprehensive real estate services to your clients while maintaining your 
                focus on financial planning excellence.
              </p>
              <h3 className="text-lg font-semibold mb-3 text-gray-900">Resources Include:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-900">
                <li>Client education materials and guides</li>
                <li>Real estate market analysis tools</li>
                <li>Partnership marketing materials</li>
                <li>Case study examples and templates</li>
                <li>Direct consultation support</li>
              </ul>
            </div>

            <div className="p-8 border-l-4 border-blue-600 bg-blue-50 rounded-r-xl">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Step 4: Ongoing Collaboration</h2>
              <p className="mb-4 text-gray-900 leading-relaxed">
                We work together on client referrals, consultations, and complex real estate 
                scenarios, ensuring that all services align with your financial planning 
                recommendations and client goals. This ongoing collaboration ensures seamless 
                service delivery and optimal client outcomes.
              </p>
              <p className="mb-4 text-gray-900 leading-relaxed">
                Regular communication, coordinated strategies, and shared client information ensure 
                that real estate services complement your financial planning, maximizing outcomes 
                for your clients and enhancing your practice's value proposition.
              </p>
              <h3 className="text-lg font-semibold mb-3 text-gray-900">Collaboration Includes:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-900">
                <li>Regular client case discussions</li>
                <li>Coordinated strategy development</li>
                <li>Shared client information portals</li>
                <li>Joint client meetings as needed</li>
                <li>Ongoing partnership support</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16 p-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Ready to Start the Partnership Process?</h2>
            <p className="text-xl text-gray-900 mb-8 max-w-2xl mx-auto leading-relaxed">
              Schedule your initial consultation to discuss how our real estate services can 
              enhance your financial planning practice and help your clients achieve their real 
              estate and financial goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
              >
                Schedule Your Consultation
              </Link>
              <Link
                href="/cfp-partners/benefits"
                className="inline-block px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-lg"
              >
                View Partnership Benefits
              </Link>
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

