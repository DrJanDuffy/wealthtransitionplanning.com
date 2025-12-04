import Link from 'next/link'

/**
 * Financial Planning Checkup CTA Component
 * Based on Real Life Planning's "Real Estate Financial Planning Check Up"
 */
export function FinancialCheckupCTA() {
  return (
    <section className="mb-16 p-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        Take Our Wealth Transition Planning Check Up
      </h2>
      <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
        Get a comprehensive assessment of your wealth transition planning needs and discover 
        opportunities to optimize your estate planning, retirement strategy, and wealth transfer goals.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/contact"
          className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-lg"
        >
          Start Your Check Up
        </Link>
        <Link
          href="/resources"
          className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors font-semibold text-lg"
        >
          Download Free Guide
        </Link>
      </div>
    </section>
  )
}

