import type { Metadata } from 'next'
import { businessConfig } from 'app/config/business'
import { baseUrl } from 'app/sitemap'
import { FinancialCheckupCTA } from 'app/components/services/financial-checkup-cta'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Wealth Transition Real Estate Planning Las Vegas | Estate Planning Integration | Financial Planner Support',
  description: 'Expert wealth transition real estate planning in Las Vegas for CERTIFIED Financial Planner clients. Strategic property portfolio analysis, estate planning integration, and tax-efficient wealth transfer strategies.',
  keywords: [
    'wealth transition planning',
    'wealth transition real estate',
    'estate planning real estate',
    'wealth transfer real estate',
    'financial planner wealth transition',
    'CFP wealth transition support',
    'Las Vegas estate planning real estate',
    'property portfolio analysis',
    'multi-generational property planning',
    'tax-efficient wealth transfer',
  ],
  openGraph: {
    title: 'Wealth Transition Real Estate Planning Las Vegas | Estate Planning Integration',
    description: 'Expert wealth transition real estate planning in Las Vegas coordinated with financial planning goals.',
    url: `${baseUrl}/services/wealth-transition`,
    siteName: businessConfig.name,
    locale: 'en_US',
    type: 'website',
  },
}

export default function WealthTransitionPage() {
  return (
    <>
      {/* Breadcrumb - outside prose container */}
      <nav className="mb-8 text-sm text-gray-900" aria-label="Breadcrumb">
        <ol className="flex space-x-2 list-none">
          <li className="flex items-center"><Link href="/" className="hover:underline">Home</Link></li>
          <li className="flex items-center">/</li>
          <li className="flex items-center"><Link href="/services" className="hover:underline">Services</Link></li>
          <li className="flex items-center">/</li>
            <li className="text-neutral-900 dark:text-neutral-100">Wealth Transition</li>
          </ol>
        </nav>
      <article className="prose prose-lg max-w-none">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <h1 className="text-5xl font-bold mb-6">Wealth Transition Real Estate Planning</h1>
          <p className="text-2xl text-gray-900 mb-8 max-w-3xl mx-auto">
            Strategic real estate planning for wealth transitions, estate transfers, and multi-generational 
            property planning. Coordinated with your financial planning and estate planning strategies.
          </p>
        </section>

        {/* Overview */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8">Comprehensive Wealth Transition Real Estate Planning</h2>
          <p className="text-lg mb-6 text-gray-900 dark:text-gray-100">
            Real estate is often the largest and most complex asset in your clients' portfolios, 
            and strategic real estate planning is essential for successful wealth transitions. Whether 
            your clients are planning estate transfers, optimizing tax strategies, or managing 
            multi-generational properties, real estate decisions significantly impact their financial outcomes.
          </p>
          <p className="text-lg mb-6 text-gray-900 dark:text-gray-100">
            Our wealth transition real estate planning services help your clients make strategic 
            real estate decisions that support their estate planning, tax optimization, and wealth 
            transfer goals. We work closely with you to understand your clients' comprehensive 
            financial situation and ensure real estate strategies align with their broader wealth 
            transition objectives.
          </p>
          <p className="text-lg mb-6 text-gray-900 dark:text-gray-100">
            This integrated approach ensures that real estate decisions complement your financial 
            planning recommendations, maximize tax efficiency, and support successful wealth 
            transitions for your clients and their families.
          </p>
        </section>

        {/* Services Detail */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8">Wealth Transition Services Include</h2>
          
          <div className="space-y-8">
            <div className="p-8 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
              <h3 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Real Estate Portfolio Analysis</h3>
              <p className="text-lg mb-4 text-gray-800 dark:text-gray-200">
                Comprehensive analysis of your clients' real estate holdings to identify optimization 
                opportunities, tax strategies, and wealth transfer planning considerations. Our portfolio 
                analysis considers property values, equity positions, tax basis, and transfer strategies.
              </p>
              <p className="mb-4 text-gray-800 dark:text-gray-200">
                This analysis helps your clients understand their real estate portfolio's role in 
                wealth transition, identify optimization opportunities, and develop strategies that 
                support estate planning and wealth transfer goals. We coordinate this analysis with 
                your financial planning to ensure real estate strategies align with comprehensive 
                wealth transition objectives.
              </p>
              <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">Portfolio Analysis Includes:</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-800 dark:text-gray-200">
                <li>Property value and equity assessment</li>
                <li>Tax basis and capital gains analysis</li>
                <li>Transfer strategy development</li>
                <li>Optimization opportunity identification</li>
                <li>Estate planning integration</li>
                <li>Wealth transfer planning coordination</li>
              </ul>
            </div>

            <div className="p-8 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
              <h3 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Estate Planning Integration</h3>
              <p className="text-lg mb-4">
                Coordination with your estate planning strategies to ensure real estate decisions 
                support wealth transfer goals, minimize estate taxes, and facilitate smooth transitions. 
                Our integration ensures that real estate strategies complement your comprehensive 
                estate planning recommendations.
              </p>
              <p className="mb-4 text-gray-800 dark:text-gray-200">
                This integration ensures that your clients' real estate decisions support their estate 
                planning goals, minimize estate tax implications, and facilitate smooth wealth transfers 
                to heirs. We work closely with you to understand estate planning strategies and ensure 
                that real estate decisions align with comprehensive wealth transition objectives.
              </p>
              <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">Estate Integration Includes:</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-800 dark:text-gray-200">
                <li>Estate tax minimization strategies</li>
                <li>Wealth transfer goal alignment</li>
                <li>Property ownership structure optimization</li>
                <li>Trust and entity planning coordination</li>
                <li>Smooth transition facilitation</li>
                <li>Comprehensive estate planning support</li>
              </ul>
            </div>

            <div className="p-8 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
              <h3 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Tax-Efficient Strategies</h3>
              <p className="text-lg mb-4">
                Development of real estate strategies that minimize tax implications, maximize 
                after-tax value, and support your clients' overall tax planning objectives. Our 
                tax-efficient strategies consider capital gains, estate taxes, and income tax 
                implications.
              </p>
              <p className="mb-4 text-gray-800 dark:text-gray-200">
                This strategy development ensures that your clients' real estate decisions minimize 
                tax implications, maximize after-tax value, and support comprehensive tax planning 
                goals. We coordinate these strategies with your tax planning to ensure optimal tax 
                efficiency and wealth preservation.
              </p>
              <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">Tax Strategies Include:</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-800 dark:text-gray-200">
                <li>Capital gains tax minimization</li>
                <li>Estate tax optimization</li>
                <li>Income tax planning coordination</li>
                <li>Step-up basis strategies</li>
                <li>Gift tax planning integration</li>
                <li>Comprehensive tax efficiency</li>
              </ul>
            </div>

            <div className="p-8 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
              <h3 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Multi-Generational Planning</h3>
              <p className="text-lg mb-4">
                Assistance with real estate decisions that support multi-generational wealth transfer, 
                family legacy planning, and long-term financial security for your clients' heirs. Our 
                multi-generational planning considers family dynamics, heir preferences, and long-term 
                property management.
              </p>
              <p className="mb-4 text-gray-800 dark:text-gray-200">
                This planning ensures that your clients' real estate decisions support multi-generational 
                wealth transfer, family legacy goals, and long-term financial security for heirs. We 
                coordinate this planning with your estate planning to ensure that property decisions 
                align with family goals and comprehensive wealth transition objectives.
              </p>
              <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">Multi-Generational Services Include:</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-800 dark:text-gray-200">
                <li>Family legacy planning coordination</li>
                <li>Heir preference consideration</li>
                <li>Long-term property management strategies</li>
                <li>Family dynamics integration</li>
                <li>Wealth preservation for heirs</li>
                <li>Comprehensive generational planning</li>
              </ul>
            </div>

            <div className="p-8 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
              <h3 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Property Transition Management</h3>
              <p className="text-lg mb-4">
                Expert management of property transitions, sales, and acquisitions to ensure optimal 
                timing, pricing, and financial outcomes that support your clients' wealth transition 
                goals. Our transition management includes transaction coordination, timing strategies, 
                and financial optimization.
              </p>
              <p className="mb-4 text-gray-800 dark:text-gray-200">
                This management ensures that your clients' property transitions proceed smoothly, 
                timing is optimized for financial outcomes, and all transactions support wealth 
                transition goals. We keep you informed throughout the process, ensuring that 
                transition details align with your financial planning recommendations and client objectives.
              </p>
              <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">Transition Services Include:</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-800 dark:text-gray-200">
                <li>Property transition strategy development</li>
                <li>Optimal timing coordination</li>
                <li>Transaction pricing optimization</li>
                <li>Sale and acquisition coordination</li>
                <li>Financial outcome maximization</li>
                <li>Wealth transition goal alignment</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Financial Planning Integration */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8">Financial Planning Integration</h2>
          <p className="text-lg mb-6 text-gray-900 dark:text-gray-100">
            Our wealth transition real estate planning services are specifically designed to integrate 
            seamlessly with financial planning and estate planning practices. We understand that wealth 
            transitions impact retirement planning, tax strategies, estate planning, and overall 
            financial security, and our services ensure that every recommendation supports your 
            comprehensive planning goals.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 border border-neutral-200 dark:border-neutral-800 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">For Certified Financial Planners</h3>
              <p className="mb-4 text-gray-800 dark:text-gray-200">
                We work closely with you to understand your clients' wealth transition goals, estate 
                planning strategies, and tax objectives. This collaboration ensures that every real 
                estate recommendation supports their broader wealth transition strategy and helps 
                them achieve their long-term financial goals.
              </p>
              <h4 className="text-lg font-semibold mb-2">Integration Benefits:</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-800 dark:text-gray-200">
                <li>Regular communication on client cases</li>
                <li>Real estate strategies aligned with wealth transition plans</li>
                <li>Estate planning coordination</li>
                <li>Tax strategy integration</li>
                <li>Multi-generational planning support</li>
              </ul>
            </div>
            <div className="p-8 border border-neutral-200 dark:border-neutral-800 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">For Wealth Transition Clients</h3>
              <p className="mb-4 text-gray-800 dark:text-gray-200">
                If you're planning a wealth transition and working with a financial planner, our 
                services ensure that all real estate strategies are coordinated with your financial 
                planner's recommendations. This coordination ensures that your property decisions 
                support your wealth transition goals and maximize outcomes.
              </p>
              <h4 className="text-lg font-semibold mb-2">Client Benefits:</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-800 dark:text-gray-200">
                <li>Real estate strategies aligned with wealth transition plans</li>
                <li>Coordination with your financial planner</li>
                <li>Expert Las Vegas market knowledge</li>
                <li>Tax-efficient transition strategies</li>
                <li>Comprehensive wealth transition support</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Financial Checkup CTA */}
        <FinancialCheckupCTA />

        {/* CTA Section */}
        <section className="mb-16 p-12 bg-blue-50 dark:bg-blue-900/20 rounded-2xl text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to Help Your Clients with Wealth Transition Planning?</h2>
          <p className="mb-6 text-lg max-w-2xl mx-auto">
            Contact us today to learn how our wealth transition real estate planning services can 
            support your financial planning practice and help your clients achieve successful wealth transfers.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
            >
              Free Consultation
            </Link>
            <Link
              href="/services"
              className="inline-block px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/40 transition-colors font-semibold text-lg"
            >
              View All Services
            </Link>
          </div>
        </section>
      </article>
    </>
  )
}

