import type { Metadata } from 'next'
import { businessConfig } from 'app/config/business'
import { baseUrl } from 'app/sitemap'
import { serviceTiers } from 'app/config/services'
import { ServiceTierCard } from 'app/components/services/service-tier-card'
import { FinancialCheckupCTA } from 'app/components/services/financial-checkup-cta'
import { PhilosophySection } from 'app/components/philosophy-section'
import { Certifications } from 'app/components/certifications'
import { ProfessionalServiceSchema } from 'app/components/google/professional-service-schema'
import { TargetFAQ, targetFAQQuestions } from 'app/components/faq-target-questions'
import Link from 'next/link'

export const metadata: Metadata = {
  title: `Real Estate Services for Financial Planners | Our Solutions | ${businessConfig.name}`,
  description: 'Comprehensive real estate services for financial planners: empty nester transitions, 55+ community planning, and wealth transition real estate strategies. Fee-only fiduciary services that complement financial planning in Las Vegas, Nevada.',
  keywords: [
    'real estate services for financial planners',
    'empty nester real estate Las Vegas',
    '55+ communities Las Vegas',
    'wealth transition planning services',
    'fee-only financial planner',
    'estate planning services Las Vegas',
    'comprehensive financial planning',
    'CFP real estate support',
  ],
  openGraph: {
    title: `Real Estate Services for Financial Planners | Our Solutions | ${businessConfig.name}`,
    description: 'Comprehensive real estate services designed to support financial planners and their clients.',
    url: `${baseUrl}/services`,
    siteName: businessConfig.name,
    locale: 'en_US',
    type: 'website',
  },
}

export default function ServicesPage() {
  return (
    <>
      <ProfessionalServiceSchema />
      {/* Breadcrumb - outside prose container */}
      <nav className="mb-8 text-sm text-gray-700" aria-label="Breadcrumb">
        <ol className="flex space-x-2 list-none">
          <li className="flex items-center"><Link href="/" className="hover:underline">Home</Link></li>
          <li className="flex items-center">/</li>
          <li className="flex items-center text-neutral-900 dark:text-neutral-100">Services</li>
        </ol>
      </nav>
      <article className="prose prose-lg max-w-none">

        {/* Hero Section */}
        <section className="mb-16 text-center">
          <h1 className="text-5xl font-bold mb-6">Real Estate Services for Financial Planners</h1>
          <p className="text-xl text-gray-800 mb-8 max-w-3xl mx-auto">
            First, we listen. Then we help you develop realistic real estate strategies that 
            complement your financial planning, whether that's supporting empty nester transitions, 
            facilitating 55+ community moves, or planning wealth transition real estate strategies 
            for your clients.
          </p>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Our real estate services are specifically designed to support Certified Financial 
            Planners and their clients, ensuring that every property decision aligns with 
            financial planning goals, tax strategies, and wealth transition objectives. Our 
            process will help you and your clients feel ready, confident, and financially 
            prepared to pursue real estate goals that support comprehensive financial success.
          </p>
        </section>

        {/* Financial Checkup CTA */}
        <FinancialCheckupCTA />

        {/* Real Estate Services Overview */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center">Real Estate Services That Support Financial Planning</h2>
          <p className="mb-6 text-lg max-w-4xl mx-auto">
            Our real estate services are specifically designed to complement financial planning 
            practices. We understand that real estate decisions significantly impact your clients' 
            financial plans, tax situations, and wealth transition strategies. Every service we 
            offer is structured to align with financial planning objectives and support your 
            clients' comprehensive financial success.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Empty Nester Real Estate Services</h3>
              <p className="mb-4">
                Help your clients navigate the transition from family homes to more suitable 
                properties. We specialize in empty nester real estate in Las Vegas, understanding 
                the financial implications, tax considerations, and lifestyle factors that impact 
                your clients' decisions.
              </p>
              <p className="mb-4">
                Our services include market analysis, property valuation, downsizing strategies, 
                and coordination with your financial planning recommendations to ensure optimal 
                timing and financial outcomes.
              </p>
              <h4 className="text-lg font-semibold mb-2">Key Services:</h4>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>Market timing analysis for optimal sale prices</li>
                <li>Downsizing property recommendations</li>
                <li>Tax-efficient real estate transition strategies</li>
                <li>Coordination with estate planning goals</li>
              </ul>
            </div>

            <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">55+ Community Planning</h3>
              <p className="mb-4">
                Las Vegas offers exceptional 55+ active adult communities, and we help your 
                clients find the perfect fit for their retirement lifestyle and financial situation. 
                We understand the unique considerations of 55+ community living and how it impacts 
                your clients' financial plans.
              </p>
              <p className="mb-4">
                Our comprehensive approach includes community analysis, financial impact assessment, 
                and integration with your retirement planning strategies to ensure your clients 
                make decisions that support their long-term financial security.
              </p>
              <h4 className="text-lg font-semibold mb-2">Key Services:</h4>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>55+ community market analysis in Las Vegas</li>
                <li>Financial impact assessment for retirement planning</li>
                <li>Community amenities and lifestyle evaluation</li>
                <li>Integration with retirement income strategies</li>
              </ul>
            </div>

            <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Wealth Transition Real Estate</h3>
              <p className="mb-4">
                Real estate is often the largest asset in your clients' portfolios, and strategic 
                real estate decisions are essential for successful wealth transitions. We work 
                with you to ensure your clients' real estate decisions support their estate 
                planning, tax strategies, and wealth transfer goals.
              </p>
              <p className="mb-4">
                Our wealth transition real estate services include property analysis, timing 
                strategies, and coordination with your comprehensive financial planning to maximize 
                your clients' financial outcomes.
              </p>
              <h4 className="text-lg font-semibold mb-2">Key Services:</h4>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>Real estate portfolio analysis for wealth transfer</li>
                <li>Estate planning integration</li>
                <li>Tax-efficient property transition strategies</li>
                <li>Multi-generational property planning</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Service Tiers */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Choose Your Service Level</h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              All our real estate services are available at affordable, transparent fees that 
              fit your practice needs and client situations. Whether you need comprehensive 
              ongoing support or project-based assistance, we have a service level that works 
              for your financial planning practice.
            </p>
          </div>

          <div className="space-y-12">
            {serviceTiers.map((tier, index) => (
              <div key={tier.id}>
                <ServiceTierCard tier={tier} featured={index === 0} />
              </div>
            ))}
          </div>
        </section>

        {/* How We Work With Financial Planners */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center">How We Work With Financial Planners</h2>
          <p className="mb-6 text-lg max-w-4xl mx-auto">
            Our real estate services are designed to seamlessly integrate with your financial 
            planning practice. We understand that you need real estate partners who can provide 
            specialized expertise while maintaining alignment with your financial planning 
            strategies and client relationships.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 border border-neutral-200 dark:border-neutral-800 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Seamless Integration</h3>
              <p className="mb-4">
                We understand that real estate services must complement, not complicate, your 
                financial planning process. Our services are designed to integrate seamlessly 
                with your existing practice, providing your clients with expert real estate 
                guidance while maintaining your role as their primary financial advisor.
              </p>
              <p className="mb-4">
                We communicate regularly with you, ensuring that all real estate recommendations 
                align with your financial planning strategies, tax considerations, and client 
                goals. You remain in control of the relationship while we provide specialized 
                real estate expertise that enhances your service offerings.
              </p>
              <h4 className="text-lg font-semibold mb-2">Integration Benefits:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Regular communication and collaboration on client cases</li>
                <li>Real estate recommendations that align with financial plans</li>
                <li>Coordinated timing for optimal financial outcomes</li>
                <li>Shared client portal for seamless information exchange</li>
                <li>Maintained client relationship with you as primary advisor</li>
              </ul>
            </div>

            <div className="p-8 border border-neutral-200 dark:border-neutral-800 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Financial Planning Alignment</h3>
              <p className="mb-4">
                Every real estate recommendation we make considers your clients' financial plans, 
                tax situations, estate planning goals, and retirement strategies. We don't just 
                help clients buy or sell properties—we ensure their real estate decisions support 
                their broader financial objectives.
              </p>
              <p className="mb-4">
                This alignment is crucial for your clients' success and your practice's reputation. 
                When real estate decisions complement financial planning strategies, clients achieve 
                better outcomes, and your practice demonstrates comprehensive value that sets you 
                apart from competitors.
              </p>
              <h4 className="text-lg font-semibold mb-2">Alignment Considerations:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Tax implications of real estate transactions</li>
                <li>Impact on retirement income planning</li>
                <li>Estate planning integration</li>
                <li>Wealth transfer optimization</li>
                <li>Long-term financial security implications</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Real Estate Market Expertise */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center">Las Vegas Real Estate Market Expertise</h2>
          <p className="mb-6 text-lg max-w-4xl mx-auto">
            Our team specializes in the Las Vegas real estate market, with deep expertise in 
            empty nester transitions, 55+ communities, and wealth transition properties. We 
            understand the unique characteristics of the Las Vegas market, including neighborhood 
            trends, property values, and market timing factors that impact your clients' financial 
            decisions.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Market Knowledge</h3>
              <p className="mb-4">
                Our specialized knowledge of the Las Vegas real estate market allows us to provide 
                your clients with accurate market analysis, informed property recommendations, and 
                strategic timing advice that supports their financial goals and your planning 
                recommendations.
              </p>
              <h4 className="text-lg font-semibold mb-2">Market Expertise Includes:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Las Vegas neighborhood trends and values</li>
                <li>Empty nester property market analysis</li>
                <li>55+ community market knowledge</li>
                <li>Wealth transition property strategies</li>
                <li>Market timing for optimal financial outcomes</li>
              </ul>
            </div>

            <div className="p-6 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Service Area Coverage</h3>
              <p className="mb-4">
                We serve clients throughout the Las Vegas metropolitan area, including Las Vegas, 
                Henderson, Summerlin, and North Las Vegas. Our comprehensive market knowledge 
                across these areas ensures that your clients receive expert guidance regardless 
                of their location preferences.
              </p>
              <h4 className="text-lg font-semibold mb-2">Primary Service Areas:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Las Vegas - Comprehensive market coverage</li>
                <li>Henderson - 55+ community expertise</li>
                <li>Summerlin - Luxury property knowledge</li>
                <li>North Las Vegas - Value property options</li>
                <li>Surrounding areas - Extended service coverage</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <PhilosophySection />

        {/* Certifications */}
        <Certifications />

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center">Frequently Asked Questions About Real Estate Services</h2>
          <div className="max-w-4xl mx-auto">
            <TargetFAQ category="all" />
            <div className="space-y-6 mt-8">
              {[
                ...targetFAQQuestions.financialPlanner.slice(0, 2),
                ...targetFAQQuestions.emptyNester,
                ...targetFAQQuestions.communities,
              ].map((faq, index) => (
                <div key={index} className="p-6 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                  <p className="text-neutral-700 dark:text-neutral-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-16 p-12 bg-blue-50 dark:bg-blue-900/20 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Collaborate</h2>
          <p className="text-xl mb-8 text-gray-800 max-w-2xl mx-auto">
            We'll be alongside you – with wisdom, guidance and coaching – so you can realize 
            your financial potential and provide your clients with comprehensive real estate 
            services that complement your financial planning practice.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
            >
              Free Consultation with Las Vegas Real Estate Expert
            </Link>
            <Link
              href="/cfp-partners"
              className="inline-block px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/40 transition-colors font-semibold text-lg"
            >
              Partner with Las Vegas's Top-Rated Financial Real Estate Specialist
            </Link>
          </div>
        </section>
      </article>
    </>
  )
}
