import Link from 'next/link'
import type { ServiceTier } from 'app/config/services'

interface ServiceTierCardProps {
  tier: ServiceTier
  featured?: boolean
}

/**
 * Service Tier Card Component
 * Displays a service tier with key information and CTAs
 * Based on Real Life Planning design
 */
export function ServiceTierCard({ tier, featured = false }: ServiceTierCardProps) {
  return (
    <div
      className={`p-8 rounded-lg border-2 ${
        featured
          ? 'border-blue-600 bg-blue-50'
          : 'border-neutral-200 bg-white'
      } text-gray-900`}
    >
      <div className="mb-4">
        <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
          {tier.tagline}
        </span>
        <h3 className="text-3xl font-bold mt-2 mb-4">{tier.name}</h3>
        <p className="text-lg mb-4 text-gray-900 dark:text-gray-100">{tier.description}</p>
        <p className="text-gray-800 dark:text-gray-200 italic mb-6">
          <strong>Best for:</strong> {tier.bestFor}
        </p>
      </div>

      <div className="mb-6">
        <h4 className="font-semibold text-lg mb-3">Why Choose {tier.name}?</h4>
        <ul className="space-y-2">
          {tier.whyChoose.slice(0, 3).map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
              <span className="text-gray-900 dark:text-gray-100">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h4 className="font-semibold text-lg mb-3">What to Expect</h4>
        <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
          {tier.whatToExpect.slice(0, 3).map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6 p-4 bg-neutral-50 rounded">
        <p className="text-sm text-gray-900">
          <strong>Fees:</strong> {tier.fees}
        </p>
      </div>

      <div className="space-y-3">
        <Link
          href="/contact"
          className={`block w-full text-center px-6 py-3 rounded-lg font-medium transition-colors ${
            featured
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {tier.cta.primary}
        </Link>
        {tier.freeGuide && (
          <Link
            href="/resources"
            className="block w-full text-center px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/40 transition-colors font-medium"
          >
            {tier.cta.secondary}
          </Link>
        )}
      </div>

      {tier.freeGuide && (
        <div className="mt-6 p-4 bg-yellow-50 rounded border border-yellow-200">
          <p className="text-sm font-semibold mb-1 text-gray-900">FREE GUIDE</p>
          <p className="text-sm text-gray-900">{tier.freeGuide}</p>
          <Link
            href="/resources"
            className="text-sm text-blue-600 dark:text-blue-400 hover:underline mt-2 inline-block"
          >
            Download Our Free Guide →
          </Link>
        </div>
      )}
    </div>
  )
}

