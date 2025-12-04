/**
 * Professional Certifications & Affiliations Component
 * Based on Real Life Planning's certifications section
 */
export function Certifications() {
  const certifications = [
    {
      name: 'CERTIFIED FINANCIAL PLANNER™',
      abbreviation: 'CFP®',
      description: 'Certified Financial Planner Professional',
    },
    {
      name: 'Fee-Only Fiduciary',
      abbreviation: '',
      description: 'Registered Investment Adviser',
    },
    {
      name: 'Estate Planning Specialist',
      abbreviation: '',
      description: 'Advanced Estate Planning Certification',
    },
  ]

  const affiliations = [
    'Financial Planning Association (FPA)',
    'National Association of Personal Financial Advisors (NAPFA)',
    'Estate Planning Council',
    'Las Vegas Financial Planning Association',
  ]

  return (
    <section className="mb-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Professional Certifications & Affiliations</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="p-6 border border-neutral-200 dark:border-neutral-800 rounded-lg text-center"
          >
            {cert.abbreviation && (
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {cert.abbreviation}
              </div>
            )}
            <h3 className="text-lg font-semibold mb-2">{cert.name}</h3>
            <p className="text-sm text-gray-800">{cert.description}</p>
          </div>
        ))}
      </div>
      <div className="text-center">
        <h3 className="font-semibold mb-4">Professional Affiliations</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {affiliations.map((affiliation, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-neutral-100 dark:bg-neutral-800 rounded-full text-sm"
            >
              {affiliation}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

