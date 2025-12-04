import type { Metadata } from 'next'
import { businessConfig } from 'app/config/business'
import { baseUrl } from 'app/sitemap'
import Link from 'next/link'
import { BlogPosts } from 'app/components/posts'

export const metadata: Metadata = {
  title: `Real Estate Resources for Financial Planners | Resources & Guides | ${businessConfig.name}`,
  description: 'Free and premium real estate resources for financial planners: empty nester guides, 55+ community planning resources, wealth transition checklists, and educational materials for CFPs and their clients in Las Vegas, Nevada.',
  keywords: [
    'real estate resources for financial planners',
    'empty nester real estate guides',
    '55+ communities Las Vegas resources',
    'wealth transition planning resources',
    'estate planning guides Las Vegas',
    'retirement planning tools',
    'financial planning resources',
    'CFP real estate resources',
  ],
  openGraph: {
    title: `Real Estate Resources for Financial Planners | ${businessConfig.name}`,
    description: 'Free and premium real estate resources designed to support financial planners and their clients.',
    url: `${baseUrl}/resources`,
    siteName: businessConfig.name,
    locale: 'en_US',
    type: 'website',
  },
}

export default function ResourcesPage() {
  return (
    <article className="prose prose-lg max-w-none">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-neutral-600 dark:text-neutral-400" aria-label="Breadcrumb">
        <ol className="flex space-x-2 list-none">
          <li className="flex items-center"><Link href="/" className="hover:underline">Home</Link></li>
          <li className="flex items-center">/</li>
          <li className="flex items-center text-neutral-900 dark:text-neutral-100">Resources</li>
        </ol>
      </nav>

      <h1 className="text-4xl font-bold mb-4">Real Estate Resources for Financial Planners</h1>
      
      <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-8">
        Educational resources to support financial planners and their clients in real estate 
        decision-making, empty nester transitions, 55+ community planning, and wealth transition 
        strategies in Las Vegas, Nevada.
      </p>

      {/* Introduction */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Comprehensive Real Estate Resources for Financial Planning Success</h2>
        <p className="mb-4 text-lg">
          As a Certified Financial Planner, you understand that real estate decisions are 
          integral to your clients' overall financial picture. Whether your clients are empty 
          nesters looking to downsize, retirees considering 55+ communities, or families planning 
          wealth transitions, real estate plays a crucial role in their financial success.
        </p>
        <p className="mb-4 text-lg">
          Our comprehensive resource library provides you and your clients with expert guidance, 
          educational materials, and practical tools to support real estate decision-making that 
          aligns with financial planning goals. These resources are specifically designed to 
          complement your financial planning practice and enhance your ability to serve clients 
          comprehensively.
        </p>
        <p className="mb-4 text-lg">
          From free educational content to premium guides and checklists, our resources cover 
          empty nester real estate transitions, 55+ community planning, wealth transition 
          strategies, and Las Vegas market insights that support your financial planning 
          recommendations and client outcomes.
        </p>
      </section>

      {/* Free Resources Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Free Resources for Financial Planners and Clients</h2>
        <p className="mb-6 text-lg">
          Access our free educational content to help you and your clients understand real estate 
          decision-making, empty nester transitions, 55+ community planning, and how real estate 
          decisions impact financial planning strategies. These resources provide valuable 
          information without requiring registration, allowing you to share them freely with clients 
          and use them in your practice.
        </p>

        {/* Latest Blog Posts */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Latest Real Estate Articles for Financial Planners</h3>
          <p className="mb-4 text-lg">
            Stay informed with our latest blog posts on real estate topics relevant to financial 
            planners, including empty nester transitions, 55+ community planning, wealth transition 
            strategies, and Las Vegas market insights. These articles provide expert analysis, 
            market trends, and practical guidance that supports your financial planning practice.
          </p>
          <p className="mb-4">
            Our blog content is specifically written for financial planners and their clients, 
            ensuring that real estate information is presented in the context of financial 
            planning implications, tax considerations, and wealth transition objectives. This 
            approach helps you provide comprehensive guidance while maintaining your focus on 
            financial planning excellence.
          </p>
          <div className="my-8">
            <BlogPosts />
          </div>
          <Link
            href="/blog"
            className="inline-block mt-4 text-blue-600 dark:text-blue-400 hover:underline font-medium"
          >
            View All Blog Posts →
          </Link>
        </div>

        {/* Free Calculators */}
        <div className="mb-8 p-6 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Free Real Estate Planning Calculators</h3>
          <p className="mb-4 text-lg">
            Our free calculators help you and your clients assess real estate decisions, analyze 
            financial implications, and understand how property choices impact financial planning 
            strategies. These tools provide valuable insights that support informed decision-making 
            and complement your financial planning recommendations.
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Empty Nester Real Estate Transition Calculator:</strong> Analyze the 
            financial implications of downsizing, including sale proceeds, purchase costs, and 
            impact on retirement planning.</li>
            <li><strong>55+ Community Financial Impact Calculator:</strong> Assess how 55+ 
            community choices impact retirement income, estate planning, and long-term financial 
            security.</li>
            <li><strong>Wealth Transition Real Estate Calculator:</strong> Evaluate real estate 
            portfolio strategies for wealth transfer, tax optimization, and estate planning 
            objectives.</li>
            <li><strong>Real Estate Tax Impact Calculator:</strong> Understand tax implications 
            of real estate transactions and how they affect overall tax planning strategies.</li>
          </ul>
          <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
            * Calculators coming soon - These tools will be available to help you and your 
            clients make informed real estate decisions that support financial planning goals.
          </p>
        </div>

        {/* Resource Previews */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Resource Previews and Educational Content</h3>
          <p className="mb-4 text-lg">
            Preview our comprehensive guides and educational content to understand the depth and 
            value of our premium resources. These previews provide valuable information while 
            demonstrating the comprehensive nature of our full guides and resources.
          </p>
          <p className="mb-4">
            Our resource previews cover key topics including empty nester real estate transitions, 
            55+ community planning strategies, wealth transition real estate approaches, and Las 
            Vegas market insights. These previews help you and your clients understand the 
            comprehensive nature of our resources and the value they provide for real estate 
            decision-making.
          </p>
        </div>
      </section>

      {/* Gated Resources Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Premium Real Estate Resources for Financial Planners</h2>
        <p className="mb-6 text-lg">
          Download comprehensive guides, checklists, and templates to support your real estate 
          services and enhance your financial planning practice. These premium resources require 
          email registration to access and provide in-depth guidance on empty nester transitions, 
          55+ community planning, and wealth transition strategies.
        </p>
        <p className="mb-6">
          Our premium resources are specifically designed for financial planners who want to 
          offer comprehensive real estate guidance to their clients. These materials provide 
          expert analysis, practical tools, and actionable strategies that complement your 
          financial planning recommendations and support optimal client outcomes.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Lead Magnet 1 */}
          <div className="p-6 border border-neutral-200 dark:border-neutral-800 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Complete Real Estate Planning Guide for Financial Planners</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              30+ page comprehensive guide covering empty nester transitions, 55+ community 
              planning, wealth transition real estate strategies, and Las Vegas market insights. 
              This guide provides financial planners with expert real estate knowledge that 
              complements financial planning services.
            </p>
            <p className="text-sm mb-4">
              Topics include market analysis, property recommendations, tax strategies, timing 
              considerations, and integration with financial planning goals. Perfect for CFPs 
              who want to offer comprehensive real estate services to their clients.
            </p>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
            >
              Download Free Guide
            </Link>
          </div>

          {/* Lead Magnet 2 */}
          <div className="p-6 border border-neutral-200 dark:border-neutral-800 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Empty Nester Real Estate Checklist for Financial Planners</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              Comprehensive step-by-step checklist for empty nesters considering downsizing, 
              including financial considerations, timing factors, tax implications, and decision 
              frameworks. This checklist helps financial planners guide clients through empty 
              nester real estate transitions.
            </p>
            <p className="text-sm mb-4">
              Includes market timing analysis, property valuation considerations, downsizing 
              recommendations, and coordination with financial planning strategies. Essential 
              tool for CFPs working with empty nester clients.
            </p>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
            >
              Download Checklist
            </Link>
          </div>

          {/* Lead Magnet 3 */}
          <div className="p-6 border border-neutral-200 dark:border-neutral-800 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">55+ Communities Las Vegas Guide for Financial Planners</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              Comprehensive guide to active adult communities in Las Vegas, including community 
              profiles, financial impact assessments, amenity evaluations, and planning strategies. 
              This guide helps financial planners assist clients in 55+ community decisions.
            </p>
            <p className="text-sm mb-4">
              Covers community market analysis, financial planning integration, retirement income 
              considerations, and long-term value assessments. Perfect resource for CFPs working 
              with retirees considering 55+ communities.
            </p>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
            >
              Download Guide
            </Link>
          </div>

          {/* Lead Magnet 4 */}
          <div className="p-6 border border-neutral-200 dark:border-neutral-800 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Wealth Transition Real Estate Workbook</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              Interactive workbook to help financial planners and their clients organize real 
              estate portfolio analysis, assess wealth transition opportunities, and prepare for 
              strategic real estate planning. This workbook supports estate planning integration 
              and wealth transfer strategies.
            </p>
            <p className="text-sm mb-4">
              Includes property analysis frameworks, tax strategy templates, estate planning 
              integration tools, and multi-generational planning considerations. Essential for 
              CFPs managing clients with significant real estate assets.
            </p>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
            >
              Download Workbook
            </Link>
          </div>

          {/* Lead Magnet 5 */}
          <div className="p-6 border border-neutral-200 dark:border-neutral-800 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">CFP Partnership Real Estate Services Kit</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              Comprehensive information kit for certified financial planners interested in 
              partnership opportunities for real estate services. This kit provides detailed 
              information about our partnership program, service offerings, and collaboration 
              processes.
            </p>
            <p className="text-sm mb-4">
              Includes partnership program details, service descriptions, collaboration frameworks, 
              client education materials, and marketing support resources. Perfect for CFPs 
              considering real estate service partnerships.
            </p>
            <Link
              href="/cfp-partners"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
            >
              Learn More
            </Link>
          </div>

          {/* Lead Magnet 6 */}
          <div className="p-6 border border-neutral-200 dark:border-neutral-800 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Real Estate Planning Timeline for Financial Planners</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              Detailed timeline for real estate planning in the context of financial planning, 
              including key milestones, decision points, and action items for each stage. This 
              timeline helps financial planners coordinate real estate decisions with financial 
              planning strategies.
            </p>
            <p className="text-sm mb-4">
              Covers empty nester transitions, 55+ community planning, wealth transition 
              strategies, and integration with retirement planning, estate planning, and tax 
              strategies. Essential planning tool for comprehensive client service.
            </p>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
            >
              Download Timeline
            </Link>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Resource Categories for Financial Planners</h2>
        <p className="mb-6 text-lg">
          Our resources are organized into categories that align with financial planning practice 
          needs and client situations. Each category provides comprehensive materials designed to 
          support real estate decision-making that complements financial planning strategies.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Empty Nester Real Estate Resources</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              Comprehensive guides, checklists, and resources for empty nester real estate 
              transitions. These resources help financial planners guide clients through 
              downsizing decisions that support financial goals and retirement planning.
            </p>
            <h4 className="text-lg font-semibold mb-2">Resources Include:</h4>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Empty nester transition guides</li>
              <li>Downsizing decision frameworks</li>
              <li>Market timing analysis tools</li>
              <li>Tax strategy considerations</li>
              <li>Financial planning integration</li>
            </ul>
          </div>
          <div className="p-6 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">55+ Community Planning Resources</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              Resources for retirement transitions and 55+ community planning strategies. These 
              materials help financial planners assist clients in finding communities that align 
              with retirement goals and financial situations.
            </p>
            <h4 className="text-lg font-semibold mb-2">Resources Include:</h4>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>55+ community market guides</li>
              <li>Financial impact assessments</li>
              <li>Community evaluation tools</li>
              <li>Retirement planning integration</li>
              <li>Lifestyle and amenity analysis</li>
            </ul>
          </div>
          <div className="p-6 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Wealth Transition Real Estate Resources</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              Guides for wealth transition real estate planning, estate integration, and 
              multi-generational property strategies. These resources support financial planners 
              in managing clients' real estate assets for optimal wealth transfer outcomes.
            </p>
            <h4 className="text-lg font-semibold mb-2">Resources Include:</h4>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Real estate portfolio analysis</li>
              <li>Estate planning integration guides</li>
              <li>Tax-efficient strategies</li>
              <li>Multi-generational planning tools</li>
              <li>Wealth transfer optimization</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mb-12 p-8 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
        <h2 className="text-3xl font-semibold mb-4">Need Personalized Real Estate Guidance?</h2>
        <p className="mb-6 text-lg">
          While these resources provide valuable information, every client situation is unique. 
          Schedule a consultation to discuss how our real estate services can support your 
          financial planning practice and help your clients achieve their real estate and 
          financial goals.
        </p>
        <p className="mb-6">
          Our real estate services are specifically designed to complement financial planning, 
          ensuring that every property recommendation aligns with your clients' financial plans, 
          tax strategies, and wealth transition objectives. Let's discuss how we can support 
          your practice and enhance your clients' outcomes.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Schedule Your Free Consultation
          </Link>
          <Link
            href="/cfp-partners"
            className="inline-block px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/40 transition-colors font-medium"
          >
            Learn About CFP Partnerships
          </Link>
        </div>
      </section>

      {/* Internal Links */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Explore More</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <Link href="/blog" className="text-blue-600 dark:text-blue-400 hover:underline">
              Read Latest Real Estate Articles
            </Link>
          </li>
          <li>
            <Link href="/cfp-partners" className="text-blue-600 dark:text-blue-400 hover:underline">
              View CFP Partner Resources
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-blue-600 dark:text-blue-400 hover:underline">
              Learn About Dr. Janet Duffy
            </Link>
          </li>
          <li>
            <Link href="/services" className="text-blue-600 dark:text-blue-400 hover:underline">
              Explore Our Real Estate Services
            </Link>
          </li>
        </ul>
      </section>
    </article>
  )
}
