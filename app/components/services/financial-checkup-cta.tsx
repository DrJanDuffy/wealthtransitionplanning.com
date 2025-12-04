import Link from 'next/link'

/**
 * Financial Planning Checkup CTA Component
 * Based on Real Life Planning's "Real Estate Financial Planning Check Up"
 */
export function FinancialCheckupCTA() {
  return (
    <section className="mb-16 p-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl text-center shadow-xl" style={{ background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)' }}>
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)', color: '#ffffff', fontWeight: '700' }}>
        Take Our Wealth Transition Planning Check Up
      </h2>
      <p className="text-xl mb-8 text-white max-w-2xl mx-auto font-bold" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.4)', color: '#ffffff', fontWeight: '600' }}>
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
          className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/20 transition-colors font-semibold text-lg" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.2)' }}
        >
          Download Free Guide
        </Link>
      </div>
    </section>
  )
}

