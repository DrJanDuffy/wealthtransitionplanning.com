import { businessConfig } from 'app/config/business'
import { baseUrl } from 'app/sitemap'

interface Review {
  author: string
  reviewBody: string
  reviewRating: number
  datePublished?: string
}

interface ReviewSchemaProps {
  reviews: Review[]
}

/**
 * Review Schema Component (2025 Enhanced)
 * Adds Review structured data for testimonials page
 * Important for E-E-A-T and trust signals
 *
 * @see https://developers.google.com/search/docs/appearance/structured-data/review-snippet
 */
export function ReviewSchema({ reviews }: ReviewSchemaProps) {
  if (!reviews || reviews.length === 0) {
    return null
  }

  // Calculate aggregate rating
  const totalRating = reviews.reduce((sum, review) => sum + review.reviewRating, 0)
  const averageRating = (totalRating / reviews.length).toFixed(1)

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${baseUrl}#organization`,
    name: businessConfig.name,
    url: baseUrl,
    // Aggregate rating
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: averageRating,
      reviewCount: reviews.length.toString(),
      bestRating: '5',
      worstRating: '1',
    },
    // Individual reviews
    review: reviews.map((review) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.author,
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.reviewRating.toString(),
        bestRating: '5',
        worstRating: '1',
      },
      reviewBody: review.reviewBody,
      datePublished: review.datePublished || new Date().toISOString().split('T')[0],
      itemReviewed: {
        '@type': 'LocalBusiness',
        name: businessConfig.name,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  )
}

/**
 * Testimonial data for the testimonials page
 */
export const testimonialReviews: Review[] = [
  {
    author: 'John M.',
    reviewBody: 'Dr. Duffy made our transition to a 55+ community seamless. Her expertise in wealth transition planning helped us make informed decisions about our future.',
    reviewRating: 5,
    datePublished: '2024-11-15',
  },
  {
    author: 'Sarah K.',
    reviewBody: 'As empty nesters, we were overwhelmed by the process. Dr. Jan guided us every step of the way with patience and professionalism.',
    reviewRating: 5,
    datePublished: '2024-10-20',
  },
  {
    author: 'Robert and Linda T.',
    reviewBody: 'The wealth transition planning services exceeded our expectations. Highly recommend for anyone planning their next chapter.',
    reviewRating: 5,
    datePublished: '2024-09-05',
  },
  {
    author: 'Patricia H.',
    reviewBody: 'Professional, knowledgeable, and caring. Dr. Duffy truly understands the needs of those planning for retirement.',
    reviewRating: 5,
    datePublished: '2024-08-12',
  },
  {
    author: 'Michael D.',
    reviewBody: 'Outstanding service from start to finish. The team at Wealth Transition Planning made our move to Las Vegas stress-free.',
    reviewRating: 5,
    datePublished: '2024-07-28',
  },
]
