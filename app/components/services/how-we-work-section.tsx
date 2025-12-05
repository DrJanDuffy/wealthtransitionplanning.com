/**
 * Improved "How We Work With Financial Planners" Section
 * Modern 2-column layout with enhanced visual design
 */
export function HowWeWorkSection() {
  return (
    <section className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          How We Work With Financial Planners
        </h2>
        <p className="text-lg md:text-xl text-gray-900 dark:text-gray-100 max-w-4xl mx-auto leading-relaxed">
          Our real estate services are designed to seamlessly integrate with your financial 
          planning practice. We understand that you need real estate partners who can provide 
          specialized expertise while maintaining alignment with your financial planning 
          strategies and client relationships.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-8 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Seamless Integration</h3>
          </div>
          <p className="mb-4 text-gray-900 dark:text-gray-100 leading-relaxed">
            We understand that real estate services must complement, not complicate, your 
            financial planning process. Our services are designed to integrate seamlessly 
            with your existing practice, providing your clients with expert real estate 
            guidance while maintaining your role as their primary financial advisor.
          </p>
          <p className="mb-6 text-gray-900 dark:text-gray-100 leading-relaxed">
            We communicate regularly with you, ensuring that all real estate recommendations 
            align with your financial planning strategies, tax considerations, and client 
            goals. You remain in control of the relationship while we provide specialized 
            real estate expertise that enhances your service offerings.
          </p>
          <div>
            <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">Integration Benefits:</h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-900 dark:text-gray-100">
              <li>Regular communication and collaboration on client cases</li>
              <li>Real estate recommendations that align with financial plans</li>
              <li>Coordinated timing for optimal financial outcomes</li>
              <li>Shared client portal for seamless information exchange</li>
              <li>Maintained client relationship with you as primary advisor</li>
            </ul>
          </div>
        </div>

        <div className="p-8 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Financial Planning Alignment</h3>
          </div>
          <p className="mb-4 text-gray-900 dark:text-gray-100 leading-relaxed">
            Every real estate recommendation we make considers your clients' financial plans, 
            tax situations, estate planning goals, and retirement strategies. We don't just 
            help clients buy or sell properties—we ensure their real estate decisions support 
            their broader financial objectives.
          </p>
          <p className="mb-6 text-gray-900 dark:text-gray-100 leading-relaxed">
            This alignment is crucial for your clients' success and your practice's reputation. 
            When real estate decisions complement financial planning strategies, clients achieve 
            better outcomes, and your practice demonstrates comprehensive value that sets you 
            apart from competitors.
          </p>
          <div>
            <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">Alignment Considerations:</h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-900 dark:text-gray-100">
              <li>Tax implications of real estate transactions</li>
              <li>Impact on retirement income planning</li>
              <li>Estate planning integration</li>
              <li>Wealth transfer optimization</li>
              <li>Long-term financial security implications</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

