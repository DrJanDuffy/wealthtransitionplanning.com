import { baseUrl } from 'app/sitemap'
import type { MetadataRoute } from 'next'

/**
 * Robots.txt Configuration (2025 Enhanced)
 * Optimized for Google Search, AI crawlers, and modern SEO best practices
 *
 * @see https://developers.google.com/search/docs/crawling-indexing/robots/intro
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Default rules for all search engines
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',           // API routes
          '/private/',       // Private pages
          '/*.json$',        // JSON files
          '/*?*',            // Query strings (optional - prevents duplicate content)
        ],
      },
      // Googlebot specific rules (2025: Enhanced crawl efficiency)
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/private/'],
      },
      // Googlebot-Image for image search optimization
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
      },
      // Bingbot rules
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/private/'],
      },
      // 2025: AI crawler rules (GPTBot, ChatGPT, etc.)
      // Allow AI to understand and reference your content
      {
        userAgent: 'GPTBot',
        allow: '/',
        disallow: ['/api/', '/private/'],
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
        disallow: ['/api/', '/private/'],
      },
      {
        userAgent: 'Claude-Web',
        allow: '/',
        disallow: ['/api/', '/private/'],
      },
      {
        userAgent: 'Anthropic-AI',
        allow: '/',
        disallow: ['/api/', '/private/'],
      },
      // 2025: Google-Extended (for AI training/Bard)
      {
        userAgent: 'Google-Extended',
        allow: '/',
      },
      // Social media crawlers for rich previews
      {
        userAgent: 'facebookexternalhit',
        allow: '/',
      },
      {
        userAgent: 'Twitterbot',
        allow: '/',
      },
      {
        userAgent: 'LinkedInBot',
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    // 2025: Host directive for canonical domain
    host: baseUrl,
  }
}
