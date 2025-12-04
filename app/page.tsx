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
      {/* Main Hero Section */}
      <section className="mb-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Real Estate Services That Support Financial Planners and Their Clients in Las Vegas
        </h1>
        <p className="text-2xl text-neutral-600 dark:text-neutral-400 mb-8 max-w-3xl mx-auto">
          <strong>{businessConfig.name}</strong> provides comprehensive real estate services 
          specifically designed to support CERTIFIED Financial Planners (CFPs) and fiduciary 
          financial advisors in Las Vegas, Nevada. We specialize in empty nester real estate 
          transitions, 55+ community planning, and wealth transition strategies that complement 
          your financial planning services. As one of the best financial advisors in Las Vegas for 
          real estate planning, we offer free consultations to help you and your clients achieve 
          optimal outcomes.
        </p>
        <FinancialCheckupCTA />
      </section>

      {/* How We Support Financial Planners */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-8 text-center">How We Support Financial Planners and Their Clients</h2>
        
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg mb-6">
            As a Certified Financial Planner, you understand that real estate decisions are 
            integral to your clients' overall financial picture. Whether your clients are 
            empty nesters looking to downsize, retirees considering 55+ communities, or 
            families planning wealth transitions, real estate plays a crucial role in their 
            financial success. That's where we come in.
          </p>
          
          <p className="text-lg mb-6">
            <strong>{businessConfig.name}</strong> offers specialized real estate services 
            that seamlessly integrate with your financial planning practice. We work alongside 
            CFPs to provide expert real estate guidance, ensuring your clients make informed 
            decisions that align with their financial goals, estate plans, and retirement strategies.
          </p>
        </div>

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
            <ul className="list-disc pl-6 space-y-2 text-sm">
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
            <ul className="list-disc pl-6 space-y-2 text-sm">
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
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li>Real estate portfolio analysis for wealth transfer</li>
              <li>Estate planning integration</li>
              <li>Tax-efficient property transition strategies</li>
              <li>Multi-generational property planning</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Financial Planners Partner With Us */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-8 text-center">Why Financial Planners Partner With Us</h2>
        
        <div className="max-w-4xl mx-auto mb-8">
          <p className="text-lg mb-6">
            When you partner with <strong>{businessConfig.name}</strong>, you're not just 
            adding real estate services to your practice—you're gaining a trusted collaborator 
            who understands the financial planning landscape and how real estate decisions impact 
            your clients' overall financial health.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 border border-neutral-200 dark:border-neutral-800 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Seamless Integration with Your Practice</h3>
            <p className="mb-4">
              We understand that real estate services must complement, not complicate, your 
              financial planning process. Our services are designed to integrate seamlessly 
              with your existing practice, providing your clients with expert real estate 
              guidance while maintaining your role as their primary financial advisor.
            </p>
            <p className="mb-4">
              We communicate regularly with you, ensuring that all real estate recommendations 
              align with your financial planning strategies, tax considerations, and client goals. 
              You remain in control of the relationship while we provide specialized real estate 
              expertise that enhances your service offerings.
            </p>
            <h4 className="text-lg font-semibold mb-2">Key Integration Benefits:</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Regular communication and collaboration on client cases</li>
              <li>Real estate recommendations that align with financial plans</li>
              <li>Coordinated timing for optimal financial outcomes</li>
              <li>Shared client portal for seamless information exchange</li>
            </ul>
          </div>

          <div className="p-8 border border-neutral-200 dark:border-neutral-800 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Expert Real Estate Knowledge</h3>
            <p className="mb-4">
              Our team specializes in the Las Vegas real estate market, with deep expertise in 
              empty nester transitions, 55+ communities, and wealth transition properties. We 
              understand the unique characteristics of the Las Vegas market, including 
              neighborhood trends, property values, and market timing factors that impact your 
              clients' financial decisions.
            </p>
            <p className="mb-4">
              This specialized knowledge allows us to provide your clients with accurate market 
              analysis, informed property recommendations, and strategic timing advice that 
              supports their financial goals and your planning recommendations.
            </p>
            <h4 className="text-lg font-semibold mb-2">Our Real Estate Expertise Includes:</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Las Vegas market analysis and trends</li>
              <li>Empty nester property transitions</li>
              <li>55+ community market knowledge</li>
              <li>Wealth transition property strategies</li>
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
            <h4 className="text-lg font-semibold mb-2">Financial Planning Considerations:</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Tax implications of real estate transactions</li>
              <li>Impact on retirement income planning</li>
              <li>Estate planning integration</li>
              <li>Wealth transfer optimization</li>
            </ul>
          </div>

          <div className="p-8 border border-neutral-200 dark:border-neutral-800 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Enhanced Client Value</h3>
            <p className="mb-4">
              By partnering with us, you can offer your clients comprehensive real estate 
              services without the need to become a real estate expert yourself. This enhances 
              your value proposition, improves client retention, and allows you to serve your 
              clients' complete financial needs.
            </p>
            <p className="mb-4">
              Your clients benefit from expert real estate guidance that's coordinated with 
              their financial plans, while you maintain your focus on financial planning 
              excellence. This collaborative approach delivers superior outcomes and strengthens 
              client relationships.
            </p>
            <h4 className="text-lg font-semibold mb-2">Value-Added Services:</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Comprehensive real estate market analysis</li>
              <li>Property recommendations aligned with financial goals</li>
              <li>Transaction coordination and support</li>
              <li>Ongoing real estate portfolio management</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Real Estate Services for Financial Planners */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-8 text-center">Real Estate Services Designed for Financial Planners</h2>
        
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg mb-6">
            Our real estate services are specifically designed to support financial planners 
            and their clients. We understand the unique needs of CFPs and the importance of 
            real estate decisions in comprehensive financial planning. Every service we offer 
            is structured to complement your financial planning practice and enhance your 
            clients' outcomes.
          </p>
        </div>

        <div className="space-y-8">
          <div className="p-8 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
            <h3 className="text-3xl font-semibold mb-4">Empty Nester Real Estate Services in Las Vegas</h3>
            <p className="text-lg mb-4">
              Empty nesters face unique real estate challenges that require specialized expertise. 
              When your clients' children have moved out, they often need to transition from 
              large family homes to properties that better suit their current lifestyle and 
              financial situation. This transition involves complex considerations that impact 
              their financial plans, tax situations, and retirement strategies.
            </p>
            <p className="mb-4">
              Our empty nester real estate services in Las Vegas help your clients navigate 
              this transition successfully. We provide comprehensive market analysis to determine 
              optimal timing for selling their current property, identify suitable downsizing 
              options that align with their lifestyle goals, and coordinate the transaction to 
              minimize tax implications and maximize financial outcomes.
            </p>
            <p className="mb-4">
              We work closely with you to understand your clients' financial plans, retirement 
              goals, and estate planning objectives. This collaboration ensures that every real 
              estate recommendation supports their broader financial strategy and helps them 
              achieve their long-term goals.
            </p>
            <h4 className="text-xl font-semibold mb-3">Empty Nester Services Include:</h4>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Market Timing Analysis:</strong> We analyze current market conditions 
              to help your clients sell at optimal times, maximizing their proceeds and 
              supporting their financial goals.</li>
              <li><strong>Property Valuation:</strong> Accurate property valuations ensure 
              your clients understand their home's true market value and can make informed 
              financial planning decisions.</li>
              <li><strong>Downsizing Recommendations:</strong> We identify properties that 
              match your clients' lifestyle needs while supporting their financial objectives 
              and retirement planning strategies.</li>
              <li><strong>Tax Strategy Coordination:</strong> We coordinate with you to ensure 
              real estate transactions are structured to minimize tax implications and maximize 
              after-tax proceeds for your clients.</li>
              <li><strong>Transaction Management:</strong> We handle all aspects of the real 
              estate transaction, allowing you to focus on financial planning while ensuring 
              smooth, efficient processes for your clients.</li>
            </ul>
          </div>

          <div className="p-8 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
            <h3 className="text-3xl font-semibold mb-4">55+ Community Planning in Las Vegas</h3>
            <p className="text-lg mb-4">
              Las Vegas offers exceptional 55+ active adult communities that provide retirees 
              with vibrant lifestyles, excellent amenities, and maintenance-free living. However, 
              choosing the right 55+ community requires careful consideration of financial 
              implications, lifestyle factors, and long-term planning objectives.
            </p>
            <p className="mb-4">
              Our 55+ community planning services help your clients find communities that align 
              with their retirement goals, financial situation, and lifestyle preferences. We 
              provide comprehensive community analysis, including financial impact assessments, 
              amenity evaluations, and long-term value considerations that support your retirement 
              planning recommendations.
            </p>
            <p className="mb-4">
              We understand that 55+ community decisions impact your clients' retirement income 
              planning, estate planning, and overall financial security. Our services integrate 
              with your financial planning to ensure community choices support long-term financial 
              objectives and retirement success.
            </p>
            <h4 className="text-xl font-semibold mb-3">55+ Community Services Include:</h4>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Community Market Analysis:</strong> Comprehensive analysis of Las Vegas 
              55+ communities, including pricing trends, availability, and value propositions 
              that support your clients' financial goals.</li>
              <li><strong>Financial Impact Assessment:</strong> Detailed analysis of how 55+ 
              community choices impact retirement income, estate planning, and long-term 
              financial security.</li>
              <li><strong>Lifestyle and Amenity Evaluation:</strong> Assessment of community 
              amenities, lifestyle offerings, and long-term value to ensure your clients find 
              communities that match their preferences and support their retirement goals.</li>
              <li><strong>Retirement Planning Integration:</strong> Coordination with your 
              retirement planning strategies to ensure community choices support income planning, 
              tax strategies, and estate planning objectives.</li>
              <li><strong>Transaction Support:</strong> Expert guidance through the 55+ community 
              purchase process, ensuring smooth transactions that align with your clients' 
              financial plans and timelines.</li>
            </ul>
          </div>

          <div className="p-8 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
            <h3 className="text-3xl font-semibold mb-4">Wealth Transition Real Estate Planning</h3>
            <p className="text-lg mb-4">
              Real estate is often the largest and most complex asset in your clients' portfolios, 
              and strategic real estate planning is essential for successful wealth transitions. 
              Whether your clients are planning estate transfers, optimizing tax strategies, or 
              managing multi-generational properties, real estate decisions significantly impact 
              their financial outcomes.
            </p>
            <p className="mb-4">
              Our wealth transition real estate planning services help your clients make strategic 
              real estate decisions that support their estate planning, tax optimization, and 
              wealth transfer goals. We work closely with you to understand your clients' 
              comprehensive financial situation and ensure real estate strategies align with 
              their broader wealth transition objectives.
            </p>
            <p className="mb-4">
              This integrated approach ensures that real estate decisions complement your 
              financial planning recommendations, maximize tax efficiency, and support successful 
              wealth transitions for your clients and their families.
            </p>
            <h4 className="text-xl font-semibold mb-3">Wealth Transition Services Include:</h4>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Real Estate Portfolio Analysis:</strong> Comprehensive analysis of 
              your clients' real estate holdings to identify optimization opportunities, tax 
              strategies, and wealth transfer planning considerations.</li>
              <li><strong>Estate Planning Integration:</strong> Coordination with your estate 
              planning strategies to ensure real estate decisions support wealth transfer goals, 
              minimize estate taxes, and facilitate smooth transitions.</li>
              <li><strong>Tax-Efficient Strategies:</strong> Development of real estate strategies 
              that minimize tax implications, maximize after-tax value, and support your clients' 
              overall tax planning objectives.</li>
              <li><strong>Multi-Generational Planning:</strong> Assistance with real estate 
              decisions that support multi-generational wealth transfer, family legacy planning, 
              and long-term financial security for your clients' heirs.</li>
              <li><strong>Property Transition Management:</strong> Expert management of property 
              transitions, sales, and acquisitions to ensure optimal timing, pricing, and 
              financial outcomes that support your clients' wealth transition goals.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <PhilosophySection />

      {/* Our Solutions Preview */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">OUR SOLUTIONS</h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            First, we listen. Then we help you develop a realistic financial plan to get where 
            you want to go, whether that's planning your wealth transition, becoming a first-time 
            estate planner, or including comprehensive planning in your investment strategy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {serviceTiers.slice(0, 4).map((tier) => (
            <ServiceTierCard key={tier.id} tier={tier} />
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/services"
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
          >
            View All Solutions
          </Link>
        </div>
      </section>

      {/* Certifications */}
      <Certifications />

      {/* Media Features */}
      <MediaFeatures />

      {/* Who Are Our Clients */}
      <section className="mb-16 p-12 bg-neutral-50 dark:bg-neutral-900 rounded-2xl">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4">Who Are Our Clients?</h2>
        </div>
        <div className="max-w-4xl mx-auto mb-8">
          <p className="text-lg mb-6">
            We work with Certified Financial Planners and their clients who need expert real 
            estate services to support their financial planning goals. Our clients include:
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>Certified Financial Planners</strong> looking to offer comprehensive 
            real estate services to their clients</li>
            <li><strong>CFP clients</strong> who are empty nesters planning real estate transitions</li>
            <li><strong>Retirees</strong> considering 55+ communities in Las Vegas</li>
          </ul>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>Wealth transition clients</strong> needing real estate planning support</li>
            <li><strong>Estate planning clients</strong> with real estate assets to manage</li>
            <li><strong>Financial planning practices</strong> seeking real estate partnership services</li>
          </ul>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-semibold">Latest Articles</h2>
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
      <section className="mb-16 p-8 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
        <h2 className="text-3xl font-semibold mb-4">CFP Partnership Program</h2>
        <p className="mb-6 text-lg">
          Are you a Certified Financial Planner looking to expand your service offerings with 
          expert real estate services? Partner with us to provide your clients with comprehensive 
          real estate guidance that complements your financial planning services. Our partnership 
          program is designed specifically for CFPs who want to offer their clients expert real 
          estate services without becoming real estate experts themselves.
        </p>
        <Link
          href="/cfp-partners"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          Learn About CFP Partnerships
        </Link>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="max-w-4xl mx-auto">
          <TargetFAQ category="financialPlanner" />
          <div className="space-y-6 mt-8">
            {targetFAQQuestions.financialPlanner.map((faq, index) => (
              <div key={index} className="p-6 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                <p className="text-neutral-700 dark:text-neutral-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mb-16 p-8 bg-neutral-50 dark:bg-neutral-900 rounded-lg text-center">
        <h2 className="text-3xl font-semibold mb-4">Ready to Enhance Your Financial Planning Practice?</h2>
        <p className="mb-6 text-lg text-neutral-600 dark:text-neutral-400">
          Schedule a free consultation with a Las Vegas real estate expert to learn how our 
          real estate services can support your CERTIFIED Financial Planner practice and help 
          your clients achieve their wealth transition goals.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
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
