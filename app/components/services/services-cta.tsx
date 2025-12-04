import Link from 'next/link'

/**
 * Improved Services Page CTA Section
 * Modern, compelling call-to-action with better visual design
 */
export function ServicesCTA() {
  return (
    <section className="mb-16 p-12 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 rounded-2xl text-center border border-blue-200">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          Let's Collaborate
        </h2>
        <p className="text-xl md:text-2xl mb-8 text-gray-800 dark:text-gray-200 max-w-2xl mx-auto leading-relaxed font-medium">
          We'll be alongside you – with wisdom, guidance and coaching – so you can realize 
          your financial potential and provide your clients with comprehensive real estate 
          services that complement your financial planning practice.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Free Consultation with Las Vegas Real Estate Expert
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            href="/cfp-partners"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-700 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold text-lg"
          >
            Partner with Las Vegas's Top-Rated Financial Real Estate Specialist
          </Link>
        </div>
      </div>
    </section>
  )
}

