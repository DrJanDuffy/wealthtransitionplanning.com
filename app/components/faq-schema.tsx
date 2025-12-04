interface FAQItem {
  question: string
  answer: string
}

interface FAQSchemaProps {
  faqs: FAQItem[]
}

/**
 * FAQ Schema Component
 * Adds FAQPage structured data for rich snippets in Google search results
 * 
 * Usage:
 * <FAQSchema faqs={[
 *   { question: "What services do you offer?", answer: "We offer..." },
 *   { question: "Where are you located?", answer: "We are located..." }
 * ]} />
 */
export function FAQSchema({ faqs }: FAQSchemaProps) {
  if (!faqs || faqs.length === 0) {
    return null
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
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


