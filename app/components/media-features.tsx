import Link from 'next/link'

/**
 * Media Features Section
 * Shows where the business has been featured
 * Based on Real Life Planning's "PLANNING EXPERTISE FEATURED IN" section
 */
export function MediaFeatures() {
  const mediaOutlets = [
    { name: 'Forbes', logo: '/images/media/forbes.svg' },
    { name: 'Wall Street Journal', logo: '/images/media/wsj.svg' },
    { name: 'CNBC', logo: '/images/media/cnbc.svg' },
    { name: 'Financial Planning Magazine', logo: '/images/media/fp-magazine.svg' },
    { name: 'Estate Planning Journal', logo: '/images/media/ep-journal.svg' },
  ]

  return (
    <section className="mb-16 py-12 bg-neutral-50">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Planning Expertise Featured In</h2>
        <p className="text-gray-900 dark:text-gray-100">
          Dr. Janet Duffy's expertise has been recognized by leading financial publications
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
        {mediaOutlets.map((outlet, index) => (
          <div
            key={index}
            className="flex items-center justify-center h-20 w-full opacity-60 hover:opacity-100 transition-opacity"
          >
            <span className="text-gray-700 dark:text-gray-300 font-semibold text-sm">
              {outlet.name}
            </span>
            {/* Placeholder for logo - replace with actual logo images */}
            {/* <Image src={outlet.logo} alt={outlet.name} width={120} height={40} /> */}
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link
          href="/about"
          className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
        >
          Learn More About Dr. Janet Duffy →
        </Link>
      </div>
    </section>
  )
}

