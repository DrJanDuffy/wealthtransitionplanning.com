/**
 * Improved Benefits Grid for CFP Partners Page
 * Modern 2x2 grid with icons and better visual design
 */
export function BenefitsGrid() {
  const benefits = [
    {
      title: 'Expand Your Service Offerings',
      description: 'Add comprehensive real estate services to your practice without additional certifications or training. Offer your clients expert real estate guidance that complements your financial planning expertise.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      ),
    },
    {
      title: 'Deepen Client Relationships',
      description: 'Provide comprehensive services that address all aspects of your clients\' financial lives, including real estate decisions. Strengthen client relationships through integrated financial and real estate planning.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Increase Revenue Streams',
      description: 'Generate additional revenue through real estate services while providing enhanced value to your clients. Build a more sustainable and profitable financial planning practice.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Gain a Competitive Edge',
      description: 'Stand out from other financial planners by offering integrated real estate services. Differentiate your practice and attract clients who value comprehensive financial planning.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ]

  return (
    <section className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#111827' }}>
          Benefits for Certified Financial Planners
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl text-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6 text-white">
              {benefit.icon}
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">{benefit.title}</h3>
            <p className="text-lg text-gray-100 leading-relaxed">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

