import type { Metadata } from 'next'
import { businessConfig } from 'app/config/business'
import { baseUrl } from 'app/sitemap'
import { serviceTiers } from 'app/config/services'
import { ServiceTierCard } from 'app/components/services/service-tier-card'
import { FinancialCheckupCTA } from 'app/components/services/financial-checkup-cta'
import { PhilosophySection } from 'app/components/philosophy-section'
import { Certifications } from 'app/components/certifications'
import { ProfessionalServiceSchema } from 'app/components/google/professional-service-schema'
import { ServicesHero } from 'app/components/services/services-hero'
import { ServiceOverviewCards } from 'app/components/services/service-overview-cards'
import { HowWeWorkSection } from 'app/components/services/how-we-work-section'
import { MarketExpertiseSection } from 'app/components/services/market-expertise-section'
import { ServicesCTA } from 'app/components/services/services-cta'
import { ServicesFAQ } from 'app/components/services/services-faq'
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
      <nav className="mb-8 text-sm text-gray-900" aria-label="Breadcrumb">
        <ol className="flex space-x-2 list-none">
          <li className="flex items-center"><Link href="/" className="hover:underline">Home</Link></li>
          <li className="flex items-center">/</li>
          <li className="flex items-center text-neutral-900 dark:text-neutral-100">Services</li>
        </ol>
      </nav>
      <article className="prose prose-lg max-w-none">

        {/* Improved Hero Section */}
        <ServicesHero />

        {/* Financial Checkup CTA */}
        <FinancialCheckupCTA />

        {/* Improved Service Overview Cards */}
        <ServiceOverviewCards />

        {/* Service Tiers */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Choose Your Service Level</h2>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto">
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

        {/* Improved How We Work Section */}
        <HowWeWorkSection />

        {/* Improved Market Expertise Section */}
        <MarketExpertiseSection />

        {/* Philosophy Section */}
        <PhilosophySection />

        {/* Certifications */}
        <Certifications />

        {/* Improved FAQ Section with Accordion */}
        <ServicesFAQ />

        {/* Improved CTA Section */}
        <ServicesCTA />
      </article>
    </>
  )
}
