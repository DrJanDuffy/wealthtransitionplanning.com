import { businessConfig } from 'app/config/business'
import { baseUrl } from 'app/sitemap'

interface ArticleSchemaProps {
  headline: string
  description: string
  datePublished: string
  dateModified?: string
  authorName?: string
  slug: string
  image?: string
  keywords?: string[]
  wordCount?: number
}

/**
 * Article Schema Component (2025 Enhanced)
 * Adds comprehensive Article structured data for blog posts
 * Optimized for Google Discover and News
 *
 * @see https://developers.google.com/search/docs/appearance/structured-data/article
 */
export function ArticleSchema({
  headline,
  description,
  datePublished,
  dateModified,
  authorName = businessConfig.owner,
  slug,
  image,
  keywords = [],
  wordCount,
}: ArticleSchemaProps) {
  const articleUrl = `${baseUrl}/blog/${slug}`
  const ogImage = image || `${baseUrl}/og?title=${encodeURIComponent(headline)}`

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${articleUrl}#article`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
    headline,
    description,
    image: {
      '@type': 'ImageObject',
      url: ogImage,
      width: 1200,
      height: 630,
    },
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      '@id': `${baseUrl}#person-dr-jan-duffy`,
      name: authorName,
      url: `${baseUrl}/about`,
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${baseUrl}#organization`,
      name: businessConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/og?title=${encodeURIComponent(businessConfig.name)}`,
        width: 1200,
        height: 630,
      },
    },
    url: articleUrl,
    // 2025: isPartOf for website relationship
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${baseUrl}#website`,
    },
    // 2025: In language
    inLanguage: 'en-US',
    // 2025: Keywords for semantic understanding
    ...(keywords.length > 0 && { keywords: keywords.join(', ') }),
    // 2025: Word count for content depth signal
    ...(wordCount && { wordCount }),
    // 2025: Speakable for voice search
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.article-summary', 'article p:first-of-type'],
    },
    // 2025: About topics for semantic SEO
    about: [
      {
        '@type': 'Thing',
        name: 'Wealth Transition Planning',
      },
      {
        '@type': 'Thing',
        name: 'Financial Planning',
      },
    ],
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
 * Blog Listing Schema for the main blog page
 * Provides a CollectionPage schema for blog index
 */
interface BlogPost {
  title: string
  summary: string
  publishedAt: string
  slug: string
}

export function BlogListingSchema({ posts }: { posts: BlogPost[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${baseUrl}/blog#collection`,
    name: 'Blog - Wealth Transition Planning',
    description: 'Expert insights on wealth transition, estate planning, and financial planning from Dr. Jan Duffy',
    url: `${baseUrl}/blog`,
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${baseUrl}#website`,
    },
    about: {
      '@type': 'Thing',
      name: 'Wealth Transition Planning',
    },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: posts.length,
      itemListElement: posts.map((post, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Article',
          headline: post.title,
          description: post.summary,
          datePublished: post.publishedAt,
          url: `${baseUrl}/blog/${post.slug}`,
          author: {
            '@type': 'Person',
            '@id': `${baseUrl}#person-dr-jan-duffy`,
          },
        },
      })),
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
