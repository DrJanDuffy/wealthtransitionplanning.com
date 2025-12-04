import type { Metadata } from 'next'
import { businessConfig } from 'app/config/business'
import { baseUrl } from 'app/sitemap'
import { ContactButtons } from 'app/components/google/contact-buttons'
import { FinancialCheckupCTA } from 'app/components/services/financial-checkup-cta'
import Link from 'next/link'

export const metadata: Metadata = {
  title: `Client Testimonials & Reviews | ${businessConfig.name}`,
  description: `Read testimonials and reviews from clients who have worked with ${businessConfig.name} for wealth transition planning, empty nester real estate services, and 55+ community planning in Las Vegas, Nevada.`,
  keywords: [
    'wealth transition planning reviews',
    'financial planner reviews Las Vegas',
    'empty nester real estate testimonials',
    '55+ community planning reviews',
    'CFP real estate services reviews',
    'Dr. Janet Duffy reviews',
    'best financial advisor reviews Las Vegas',
  ],
  openGraph: {
    title: `Client Testimonials & Reviews | ${businessConfig.name}`,
    description: `Read testimonials and reviews from clients who have worked with ${businessConfig.name} for wealth transition planning services.`,
    url: `${baseUrl}/testimonials`,
    siteName: businessConfig.name,
    locale: 'en_US',
    type: 'website',
  },
}

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'CERTIFIED Financial Planner',
    location: 'Las Vegas, NV',
    content: 'Working with Dr. Duffy has been transformative for my practice. Her expertise in empty nester transitions has helped me provide comprehensive solutions to my clients. The coordination between financial planning and real estate strategy is seamless.',
    rating: 5,
  },
  {
    name: 'Robert K.',
    role: 'Client',
    location: 'Henderson, NV',
    content: 'Dr. Duffy helped us navigate the complex process of downsizing from our family home to a 55+ community. Her attention to detail and understanding of our financial goals made the transition smooth and stress-free. Highly recommend!',
    rating: 5,
  },
  {
    name: 'Jennifer L.',
    role: 'CERTIFIED Financial Planner',
    location: 'Summerlin, NV',
    content: 'The partnership program with Wealth Transition Planning has added significant value to my services. My clients appreciate the integrated approach to wealth transition, and I appreciate having a trusted expert to refer them to.',
    rating: 5,
  },
  {
    name: 'Michael T.',
    role: 'Client',
    location: 'Las Vegas, NV',
    content: 'We were overwhelmed with the idea of transitioning our wealth and real estate holdings. Dr. Duffy provided clear guidance and helped us make informed decisions that aligned with our estate planning goals. Professional, knowledgeable, and trustworthy.',
    rating: 5,
  },
  {
    name: 'Patricia R.',
    role: 'Client',
    location: 'North Las Vegas, NV',
    content: 'The 55+ community planning service exceeded our expectations. Dr. Duffy understood our lifestyle goals and financial constraints, helping us find the perfect community that fit both. The entire process was handled with care and expertise.',
    rating: 5,
  },
  {
    name: 'David H.',
    role: 'CERTIFIED Financial Planner',
    location: 'Las Vegas, NV',
    content: 'As a CFP, I need partners I can trust with my clients\' real estate transitions. Dr. Duffy\'s fiduciary approach and deep understanding of financial planning make her an invaluable resource. The partnership has been a game-changer.',
    rating: 5,
  },
]

export default function TestimonialsPage() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Client Testimonials & Reviews
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          See what clients and financial planning partners say about working with {businessConfig.name}
        </p>
      </div>

      {/* Google Reviews CTA */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-12 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Read More Reviews</h2>
        <p className="text-gray-700 mb-4">
          Visit our Google Business Profile to read additional reviews from clients and partners.
        </p>
        {businessConfig.googleReviewsUrl ? (
          <a
            href={businessConfig.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#2563eb] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1d4ed8] transition-colors"
          >
            View Google Reviews
          </a>
        ) : (
          <ContactButtons />
        )}
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Rating */}
            <div className="flex items-center mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>

            {/* Content */}
            <p className="text-gray-700 mb-6 leading-relaxed italic">
              "{testimonial.content}"
            </p>

            {/* Author */}
            <div className="border-t border-gray-200 pt-4">
              <p className="font-semibold text-gray-900">{testimonial.name}</p>
              <p className="text-sm text-gray-800">{testimonial.role}</p>
              <p className="text-sm text-gray-700">{testimonial.location}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CFP Partners Section */}
      <div className="bg-gray-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Partner with Us
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Are you a CERTIFIED Financial Planner looking to enhance your services with expert real estate planning? 
          Learn how our partnership program can benefit your practice and your clients.
        </p>
        <Link
          href="/cfp-partners"
          className="inline-block bg-[#2563eb] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1d4ed8] transition-colors"
        >
          Learn About CFP Partnerships
        </Link>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-gray-700 mb-6">
          Schedule a free consultation to discuss your wealth transition planning needs.
        </p>
        <FinancialCheckupCTA />
      </div>
    </div>
  )
}

