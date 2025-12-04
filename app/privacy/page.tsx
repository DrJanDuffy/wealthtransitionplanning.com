import type { Metadata } from 'next'
import { businessConfig } from 'app/config/business'
import { baseUrl } from 'app/sitemap'
import Link from 'next/link'

export const metadata: Metadata = {
  title: `Privacy Policy | ${businessConfig.name}`,
  description: `Privacy policy for ${businessConfig.name}. Learn how we collect, use, and protect your personal information when using our wealth transition planning services.`,
  openGraph: {
    title: `Privacy Policy | ${businessConfig.name}`,
    description: `Privacy policy for ${businessConfig.name}. Learn how we collect, use, and protect your personal information.`,
    url: `${baseUrl}/privacy`,
    siteName: businessConfig.name,
    locale: 'en_US',
    type: 'website',
  },
}

export default function PrivacyPage() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
        <p className="text-gray-700">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </div>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Introduction</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {businessConfig.name} ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information We Collect</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Personal Information</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            We may collect personal information that you voluntarily provide to us when you:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li>Request a consultation or contact us</li>
            <li>Subscribe to our newsletter or resources</li>
            <li>Fill out forms on our website</li>
            <li>Communicate with us via email or phone</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            This information may include your name, email address, phone number, mailing address, and any other information you choose to provide.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Automatically Collected Information</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            When you visit our website, we may automatically collect certain information about your device, including:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Pages you visit and time spent on pages</li>
            <li>Referring website addresses</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li>Provide, maintain, and improve our services</li>
            <li>Respond to your inquiries and requests</li>
            <li>Send you newsletters, updates, and marketing communications (with your consent)</li>
            <li>Analyze website usage and trends</li>
            <li>Comply with legal obligations</li>
            <li>Protect our rights and prevent fraud</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information Sharing and Disclosure</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong>Service Providers:</strong> We may share information with third-party service providers who perform services on our behalf, such as website hosting, email delivery, and analytics.</li>
            <li><strong>Legal Requirements:</strong> We may disclose information if required by law or in response to valid legal requests.</li>
            <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred.</li>
            <li><strong>With Your Consent:</strong> We may share information with your explicit consent.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Data Security</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Your Rights</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Depending on your location, you may have certain rights regarding your personal information, including:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li>The right to access your personal information</li>
            <li>The right to correct inaccurate information</li>
            <li>The right to request deletion of your information</li>
            <li>The right to opt-out of marketing communications</li>
            <li>The right to data portability</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            To exercise these rights, please contact us using the information provided below.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Cookies and Tracking Technologies</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Third-Party Links</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Children's Privacy</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Changes to This Privacy Policy</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-900 font-semibold mb-2">{businessConfig.name}</p>
            <p className="text-gray-700 mb-1">
              <a href={`mailto:${businessConfig.email}`} className="text-[#2563eb] hover:underline">
                {businessConfig.email}
              </a>
            </p>
            <p className="text-gray-700 mb-1">
              <a href={`tel:${businessConfig.phoneFormatted}`} className="text-[#2563eb] hover:underline">
                {businessConfig.phone}
              </a>
            </p>
            <p className="text-gray-700">{businessConfig.address.full}</p>
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

