import { businessConfig } from 'app/config/business'
import { baseUrl } from 'app/sitemap'

interface HowToStep {
  name: string
  text: string
  url?: string
  image?: string
}

interface HowToSchemaProps {
  name: string
  description: string
  steps: HowToStep[]
  totalTime?: string // ISO 8601 duration format, e.g., 'PT30M' for 30 minutes
  estimatedCost?: {
    currency: string
    value: string
  }
  pageUrl: string
}

/**
 * HowTo Schema Component (2025 Enhanced)
 * Adds HowTo structured data for step-by-step guides
 * Great for process pages and tutorials
 *
 * @see https://developers.google.com/search/docs/appearance/structured-data/how-to
 *
 * Usage:
 * <HowToSchema
 *   name="How to Start Wealth Transition Planning"
 *   description="A step-by-step guide to begin your wealth transition journey"
 *   pageUrl="/process"
 *   steps={[
 *     { name: 'Schedule Consultation', text: 'Contact us to schedule your initial consultation' },
 *     { name: 'Discovery Meeting', text: 'Meet with our team to discuss your goals' },
 *   ]}
 * />
 */
export function HowToSchema({
  name,
  description,
  steps,
  totalTime,
  estimatedCost,
  pageUrl,
}: HowToSchemaProps) {
  if (!steps || steps.length === 0) {
    return null
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    '@id': `${baseUrl}${pageUrl}#howto`,
    name,
    description,
    url: `${baseUrl}${pageUrl}`,
    // 2025: Total time if provided
    ...(totalTime && { totalTime }),
    // 2025: Estimated cost if provided
    ...(estimatedCost && {
      estimatedCost: {
        '@type': 'MonetaryAmount',
        currency: estimatedCost.currency,
        value: estimatedCost.value,
      },
    }),
    // Steps
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      url: step.url ? `${baseUrl}${step.url}` : `${baseUrl}${pageUrl}#step-${index + 1}`,
      ...(step.image && {
        image: {
          '@type': 'ImageObject',
          url: step.image.startsWith('http') ? step.image : `${baseUrl}${step.image}`,
        },
      }),
    })),
    // 2025: Author for E-E-A-T
    author: {
      '@type': 'Person',
      '@id': `${baseUrl}#person-dr-jan-duffy`,
      name: businessConfig.owner,
    },
    // 2025: Publisher
    publisher: {
      '@type': 'Organization',
      '@id': `${baseUrl}#organization`,
    },
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
 * Default process steps for the wealth transition planning process
 */
export const wealthTransitionSteps: HowToStep[] = [
  {
    name: 'Schedule Your Free Consultation',
    text: 'Contact us to schedule a no-obligation consultation to discuss your wealth transition goals and current situation.',
    url: '/contact',
  },
  {
    name: 'Discovery Meeting',
    text: 'Meet with Dr. Jan Duffy to conduct a comprehensive review of your assets, goals, and timeline for your wealth transition.',
  },
  {
    name: 'Personalized Strategy Development',
    text: 'Receive a customized wealth transition plan tailored to your unique needs, family situation, and financial objectives.',
  },
  {
    name: 'Implementation',
    text: 'Work with our team to execute your wealth transition plan with ongoing support and guidance throughout the process.',
  },
  {
    name: 'Ongoing Review and Adjustment',
    text: 'Regular check-ins to review progress, adjust strategies as needed, and ensure your plan stays aligned with your goals.',
  },
]
