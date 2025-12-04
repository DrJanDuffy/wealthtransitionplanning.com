import type { Metadata } from 'next'
import { businessConfig } from 'app/config/business'
import Link from 'next/link'

export const metadata: Metadata = {
  title: `Thank You | ${businessConfig.name}`,
  description: 'Thank you for contacting us. We will respond to your inquiry soon.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function ThankYouPage() {
  return (
    <section className="text-center max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Thank You!</h1>
      <p className="text-xl text-gray-900 mb-8">
        We've received your message and will respond to your inquiry within 24-48 hours.
      </p>
      <div className="space-y-4">
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          Return to Homepage
        </Link>
        <div>
          <Link
            href="/resources"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            View Free Resources →
          </Link>
        </div>
      </div>
    </section>
  )
}

