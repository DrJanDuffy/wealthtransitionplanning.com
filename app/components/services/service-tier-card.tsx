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
        <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
          {tier.tagline}
        </span>
        <h3 className="text-3xl font-bold mt-2 mb-4 style={{ color: '#111827' }}">{tier.name}</h3>
        <p className="text-lg mb-4 style={{ color: '#111827' }}">{tier.description}</p>
        <p className="style={{ color: '#111827' }} italic mb-6">
          <strong>Best for:</strong> {tier.bestFor}
        </p>
      </div>

      <div className="mb-6">
        <h4 className="font-semibold text-lg mb-3 style={{ color: '#111827' }}">Why Choose {tier.name}?</h4>
        <ul className="space-y-2">
          {tier.whyChoose.slice(0, 3).map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span className="style={{ color: '#111827' }}">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h4 className="font-semibold text-lg mb-3 style={{ color: '#111827' }}">What to Expect</h4>
        <ul className="space-y-2 text-sm style={{ color: '#111827' }}">
          {tier.whatToExpect.slice(0, 3).map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6 p-4 bg-neutral-50  rounded">
        <p className="text-sm style={{ color: '#111827' }}">
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
            className="block w-full text-center px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50  transition-colors font-medium"
          >
            {tier.cta.secondary}
          </Link>
        )}
      </div>

      {tier.freeGuide && (
        <div className="mt-6 p-4 bg-yellow-50  rounded border border-yellow-200 ">
          <p className="text-sm font-semibold mb-1 style={{ color: '#111827' }}">FREE GUIDE</p>
          <p className="text-sm style={{ color: '#111827' }}">{tier.freeGuide}</p>
          <Link
            href="/resources"
            className="text-sm text-blue-600 hover:underline mt-2 inline-block"
          >
            Download Our Free Guide →
          </Link>
        </div>
      )}
    </div>
  )
}

