import type { Metadata } from 'next'
import { businessConfig } from 'app/config/business'
import { baseUrl } from 'app/sitemap'
import { BlogPosts } from 'app/components/posts'
import { ContactButtons } from 'app/components/google/contact-buttons'
import { FinancialCheckupCTA } from 'app/components/services/financial-checkup-cta'
import { PhilosophySection } from 'app/components/philosophy-section'
import { MediaFeatures } from 'app/components/media-features'
import { Certifications } from 'app/components/certifications'
import { serviceTiers } from 'app/config/services'
import { ServiceTierCard } from 'app/components/services/service-tier-card'
import { TargetFAQ, targetFAQQuestions } from 'app/components/faq-target-questions'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Wealth Transition Planning Las Vegas | Real Estate & Financial Planning | Supporting CFP Clients',
  description: 'Supporting CERTIFIED Financial Planner clients and fiduciary advisors with strategic real estate planning in Las Vegas. Free consultation available. Best financial advisors in Las Vegas for real estate transitions.',
  keywords: [
    'financial planner Las Vegas',
    'CERTIFIED financial planner Las Vegas',
    'fiduciary financial advisor Las Vegas',
    'best financial advisors in Las Vegas',
    'financial advisor Las Vegas free consultation',
    'real estate services for financial planners',
    'CFP real estate support Las Vegas',
    'empty nester real estate Las Vegas',
    '55+ communities Las Vegas',
    'wealth transition planning',
    'Las vegas home financial planner reviews',
    'Las vegas home financial planner near me',
  ],
  openGraph: {
    title: 'Wealth Transition Planning Las Vegas | Real Estate & Financial Planning',
    description: 'Supporting CFP clients & fiduciary advisors with strategic real estate planning in Las Vegas. Free consultation.',
    url: baseUrl,
    images: [
      {
        url: `${baseUrl}/og?title=${encodeURIComponent('Wealth Transition Planning Las Vegas')}`,
        width: 1200,
        height: 630,
        alt: 'Wealth Transition Planning - Real Estate Services for Financial Planners',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wealth Transition Planning Las Vegas | Real Estate & Financial Planning',
    description: 'Supporting CFP clients & fiduciary advisors with strategic real estate planning in Las Vegas. Free consultation.',
    images: [`${baseUrl}/og?title=${encodeURIComponent('Wealth Transition Planning Las Vegas')}`],
  },
}

export default function HomePage() {
  return (
    <>
      {/* Main Hero Section with Enhanced Styling */}
      <section className="mb-20 text-center hero-gradient py-16 px-4 rounded-2xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
          Real Estate Services That Support Financial Planners and Their Clients in Las Vegas
        </h1>
        <p className="text-2xl text-gray-900 dark:text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
          <strong className="text-gray-900 dark:text-white font-bold">{businessConfig.name}</strong> provides comprehensive real estate services 
          specifically designed to support CERTIFIED Financial Planners (CFPs) and fiduciary 
          financial advisors in Las Vegas, Nevada. We specialize in empty nester real estate 
          transitions, 55+ community planning, and wealth transition strategies that complement 
          your financial planning services.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <FinancialCheckupCTA />
        </div>
      </section>

      {/* How We Support Financial Planners - Streamlined */}
      <section className="mb-20">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">How We Support Financial Planners and Their Clients</h2>
        
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg mb-6 text-gray-900 dark:text-gray-100">
            As a Certified Financial Planner, you understand that real estate decisions are 
            integral to your clients' overall financial picture. Whether your clients are 
            empty nesters looking to downsize, retirees considering 55+ communities, or 
            families planning wealth transitions, real estate plays a crucial role in their 
            financial success. That's where we come in.
          </p>
          
          <p className="text-lg mb-6 text-gray-900 dark:text-gray-100">
            <strong className="font-bold">{businessConfig.name}</strong> offers specialized real estate services 
            that seamlessly integrate with your financial planning practice. We work alongside 
            CFPs to provide expert real estate guidance, ensuring your clients make informed 
            decisions that align with their financial goals, estate plans, and retirement strategies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="p-8 bg-blue-50 dark:bg-blue-900/20 rounded-xl card-hover border border-blue-100 dark:border-blue-800">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Empty Nester Real Estate Services</h3>
            <p className="mb-4 text-gray-900 dark:text-gray-100">
              Help your clients navigate the transition from family homes to more suitable 
              properties. We specialize in empty nester real estate in Las Vegas, understanding 
              the financial implications, tax considerations, and lifestyle factors that impact 
              your clients' decisions.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-gray-800 dark:text-gray-200">
              <li>Market timing analysis for optimal sale prices</li>
              <li>Downsizing property recommendations</li>
              <li>Tax-efficient real estate transition strategies</li>
              <li>Coordination with estate planning goals</li>
            </ul>
            <Link 
              href="/services/empty-nester" 
              className="inline-block mt-4 text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              Learn More →
            </Link>
          </div>

          <div className="p-8 bg-blue-50 dark:bg-blue-900/20 rounded-xl card-hover border border-blue-100 dark:border-blue-800">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">55+ Community Planning</h3>
            <p className="mb-4 text-gray-900 dark:text-gray-100">
              Las Vegas offers exceptional 55+ active adult communities, and we help your 
              clients find the perfect fit for their retirement lifestyle and financial situation. 
              We understand the unique considerations of 55+ community living and how it impacts 
              your clients' financial plans.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-gray-800 dark:text-gray-200">
              <li>55+ community market analysis in Las Vegas</li>
              <li>Financial impact assessment for retirement planning</li>
              <li>Community amenities and lifestyle evaluation</li>
              <li>Integration with retirement income strategies</li>
            </ul>
            <Link 
              href="/services/55-plus-communities" 
              className="inline-block mt-4 text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              Learn More →
            </Link>
          </div>

          <div className="p-8 bg-blue-50 dark:bg-blue-900/20 rounded-xl card-hover border border-blue-100 dark:border-blue-800">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Wealth Transition Real Estate</h3>
            <p className="mb-4 text-gray-900 dark:text-gray-100">
              Real estate is often the largest asset in your clients' portfolios, and strategic 
              real estate decisions are essential for successful wealth transitions. We work 
              with you to ensure your clients' real estate decisions support their estate 
              planning, tax strategies, and wealth transfer goals.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-gray-800 dark:text-gray-200">
              <li>Real estate portfolio analysis for wealth transfer</li>
              <li>Estate planning integration</li>
              <li>Tax-efficient property transition strategies</li>
              <li>Multi-generational property planning</li>
            </ul>
            <Link 
              href="/services/wealth-transition" 
              className="inline-block mt-4 text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              Learn More →
            </Link>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/services"
            className="inline-block px-8 py-4 cta-gradient text-white rounded-lg hover:shadow-lg transition-all font-semibold text-lg"
          >
            View All Real Estate Services
          </Link>
        </div>
      </section>

      {/* Why Partner With Us - Brief Preview */}
      <section className="mb-20 p-12 bg-neutral-50 rounded-2xl">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Why Financial Planners Partner With Us</h2>
          <p className="text-xl mb-8 text-gray-900 font-medium">
            When you partner with <strong className="font-bold">{businessConfig.name}</strong>, you're not just 
            adding real estate services to your practice—you're gaining a trusted collaborator 
            who understands the financial planning landscape and how real estate decisions impact 
            your clients' overall financial health.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 bg-white rounded-lg section-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Seamless Integration</h3>
              <p className="text-gray-900">
                Our services integrate seamlessly with your existing practice, providing your clients 
                with expert real estate guidance while maintaining your role as their primary financial advisor.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg section-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Financial Planning Alignment</h3>
              <p className="text-gray-900">
                Every real estate recommendation considers your clients' financial plans, tax situations, 
                estate planning goals, and retirement strategies.
              </p>
            </div>
          </div>
          <Link
            href="/cfp-partners"
            className="inline-block px-8 py-4 cta-gradient text-white rounded-lg hover:shadow-lg transition-all font-semibold text-lg"
          >
            Learn About CFP Partnerships
          </Link>
        </div>
      </section>

      {/* Philosophy Section */}
      <PhilosophySection />

      {/* Our Solutions Preview */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">OUR SOLUTIONS</h2>
          <p className="text-xl text-gray-900 dark:text-gray-100 max-w-3xl mx-auto font-medium">
            First, we listen. Then we help you develop a realistic financial plan to get where 
            you want to go, whether that's planning your wealth transition, becoming a first-time 
            estate planner, or including comprehensive planning in your investment strategy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {serviceTiers.slice(0, 4).map((tier) => (
            <div key={tier.id} className="card-hover">
              <ServiceTierCard tier={tier} />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/services"
            className="inline-block px-8 py-4 cta-gradient text-white rounded-lg hover:shadow-lg transition-all font-semibold text-lg"
          >
            View All Solutions
          </Link>
        </div>
      </section>

      {/* Certifications */}
      <Certifications />

      {/* Media Features */}
      <MediaFeatures />

      {/* Latest Blog Posts */}
      <section className="mb-20">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">Latest Articles</h2>
          <Link
            href="/blog"
            className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
          >
            View All Posts →
          </Link>
        </div>
        <BlogPosts />
      </section>

      {/* CFP Partnership Highlight */}
      <section className="mb-20 p-8 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
        <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">CFP Partnership Program</h2>
        <p className="mb-6 text-lg text-gray-900 dark:text-gray-100">
          Are you a Certified Financial Planner looking to expand your service offerings with 
          expert real estate services? Partner with us to provide your clients with comprehensive 
          real estate guidance that complements your financial planning services.
        </p>
        <Link
          href="/cfp-partners"
          className="inline-block px-6 py-3 cta-gradient text-white rounded-lg hover:shadow-lg transition-all font-medium"
        >
          Learn About CFP Partnerships
        </Link>
      </section>

      {/* FAQ Section */}
      <section className="mb-20">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">Frequently Asked Questions</h2>
        <div className="max-w-4xl mx-auto">
          <TargetFAQ category="financialPlanner" />
          <div className="space-y-6 mt-8">
            {targetFAQQuestions.financialPlanner.slice(0, 3).map((faq, index) => (
              <div key={index} className="p-6 bg-neutral-50 rounded-lg section-shadow">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{faq.question}</h3>
                <p className="text-gray-900">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/contact"
              className="inline-block px-6 py-3 text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              View All FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mb-20 p-12 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl text-center">
        <h2 className="text-3xl font-semibold mb-4 text-gray-900">Ready to Enhance Your Financial Planning Practice?</h2>
        <p className="mb-6 text-lg text-gray-900 max-w-2xl mx-auto font-medium">
          Schedule a free consultation with a Las Vegas real estate expert to learn how our 
          real estate services can support your CERTIFIED Financial Planner practice and help 
          your clients achieve their wealth transition goals.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="inline-block px-8 py-4 cta-gradient text-white rounded-lg hover:shadow-lg transition-all font-semibold text-lg"
          >
            Free Consultation with Las Vegas Real Estate Expert
          </Link>
          <Link
            href="/resources"
            className="inline-block px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/40 transition-colors font-semibold text-lg"
          >
            View Free Resources
          </Link>
        </div>
      </section>
    </>
  )
}
