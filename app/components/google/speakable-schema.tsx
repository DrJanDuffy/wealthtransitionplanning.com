import { baseUrl } from 'app/sitemap'

interface SpeakableSchemaProps {
  /**
   * URL of the current page
   */
  pageUrl: string
  /**
   * CSS selectors for speakable content (e.g., '.article-summary', '#main-heading')
   * These identify the parts of the page that are most suitable for text-to-speech
   */
  cssSelectors: string[]
}

/**
 * Speakable Schema Component (2025 Voice Search Optimization)
 * Adds Speakable structured data for Google Assistant and voice search
 *
 * Voice search is increasingly important in 2025 with AI assistants
 * This helps Google identify content suitable for text-to-speech
 *
 * @see https://developers.google.com/search/docs/appearance/structured-data/speakable
 *
 * Usage:
 * <SpeakableSchema
 *   pageUrl="/services"
 *   cssSelectors={['.page-summary', 'h1', '.key-points']}
 * />
 */
export function SpeakableSchema({ pageUrl, cssSelectors }: SpeakableSchemaProps) {
  if (!cssSelectors || cssSelectors.length === 0) {
    return null
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${baseUrl}${pageUrl}#webpage`,
    url: `${baseUrl}${pageUrl}`,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: cssSelectors,
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
 * Helper component for article/blog pages with speakable content
 */
interface ArticleSpeakableSchemaProps {
  pageUrl: string
  headline: string
  description: string
  datePublished: string
  dateModified?: string
  authorName: string
}

export function ArticleSpeakableSchema({
  pageUrl,
  headline,
  description,
  datePublished,
  dateModified,
  authorName,
}: ArticleSpeakableSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${baseUrl}${pageUrl}#article`,
    url: `${baseUrl}${pageUrl}`,
    headline,
    description,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${baseUrl}#organization`,
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.article-summary', '.key-takeaways'],
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
