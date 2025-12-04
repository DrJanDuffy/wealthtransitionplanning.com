import type { Metadata } from 'next'
import { businessConfig } from 'app/config/business'
import { baseUrl } from 'app/sitemap'
import Link from 'next/link'

export const metadata: Metadata = {
  title: `Terms of Service | ${businessConfig.name}`,
  description: `Terms of service for ${businessConfig.name}. Read our terms and conditions for using our wealth transition planning services and website.`,
  openGraph: {
    title: `Terms of Service | ${businessConfig.name}`,
    description: `Terms of service for ${businessConfig.name}. Read our terms and conditions for using our services.`,
    url: `${baseUrl}/terms`,
    siteName: businessConfig.name,
    locale: 'en_US',
    type: 'website',
  },
}

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
        <p className="text-gray-900">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </div>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Agreement to Terms</h2>
          <p className="text-gray-900 leading-relaxed mb-4">
            By accessing or using the website and services of {businessConfig.name} ("we," "our," or "us"), you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Use License</h2>
          <p className="text-gray-900 leading-relaxed mb-4">
            Permission is granted to temporarily access the materials on {businessConfig.name}'s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc pl-6 text-gray-900 mb-4 space-y-2">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose or for any public display</li>
            <li>Attempt to reverse engineer any software contained on the website</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
            <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Real Estate Services</h2>
          <p className="text-gray-900 leading-relaxed mb-4">
            Real estate services are provided by {businessConfig.name}, a licensed real estate professional in the State of Nevada. 
            All real estate services are provided in accordance with applicable state and federal laws, regulations, and licensing 
            requirements. {businessConfig.name} is committed to providing professional real estate services that comply with all 
            fair housing laws and real estate regulations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">No Professional Advice</h2>
          <p className="text-gray-900 leading-relaxed mb-4">
            The information presented on this website is for informational purposes only and does not constitute real estate, 
            legal, financial, or tax advice. Real estate transactions involve risk, and property values, market conditions, and 
            investment outcomes are not guaranteed. All property information is subject to verification and may change without notice.
          </p>
          <p className="text-gray-900 leading-relaxed mb-4">
            Be sure to consult with qualified professionals including real estate agents, attorneys, financial advisors, and tax 
            professionals before making any real estate decisions or implementing any strategy discussed on this website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Disclaimer</h2>
          <p className="text-gray-900 leading-relaxed mb-4">
            The materials on {businessConfig.name}'s website are provided on an 'as is' basis. {businessConfig.name} makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Limitations</h2>
          <p className="text-gray-900 leading-relaxed mb-4">
            In no event shall {businessConfig.name} or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on {businessConfig.name}'s website, even if {businessConfig.name} or an authorized representative has been notified orally or in writing of the possibility of such damage.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Accuracy of Materials</h2>
          <p className="text-gray-900 leading-relaxed mb-4">
            The materials appearing on {businessConfig.name}'s website could include technical, typographical, or photographic errors. {businessConfig.name} does not warrant that any of the materials on its website are accurate, complete, or current. {businessConfig.name} may make changes to the materials contained on its website at any time without notice.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Links</h2>
          <p className="text-gray-900 leading-relaxed mb-4">
            {businessConfig.name} has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by {businessConfig.name} of the site. Use of any such linked website is at the user's own risk.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Modifications</h2>
          <p className="text-gray-900 leading-relaxed mb-4">
            {businessConfig.name} may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Governing Law</h2>
          <p className="text-gray-900 leading-relaxed mb-4">
            These terms and conditions are governed by and construed in accordance with the laws of the State of Nevada and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Information</h2>
          <p className="text-gray-900 leading-relaxed mb-4">
            If you have any questions about these Terms of Service, please contact us:
          </p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-900 font-semibold mb-2">{businessConfig.name}</p>
            <p className="text-gray-900 mb-1">
              <a href={`mailto:${businessConfig.email}`} className="text-[#2563eb] hover:underline">
                {businessConfig.email}
              </a>
            </p>
            <p className="text-gray-900 mb-1">
              <a href={`tel:${businessConfig.phoneFormatted}`} className="text-[#2563eb] hover:underline">
                {businessConfig.phone}
              </a>
            </p>
            <p className="text-gray-900">{businessConfig.address.full}</p>
          </div>
        </section>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <Link
          href="/"
          className="text-[#2563eb] hover:underline font-medium"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}

