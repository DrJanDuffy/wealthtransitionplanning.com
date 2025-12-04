import { businessConfig } from 'app/config/business'
import { baseUrl } from 'app/sitemap'

/**
 * WebSite Schema Component (2025 Enhanced)
 * Adds WebSite structured data with SearchAction for sitelinks search box
 *
 * @see https://developers.google.com/search/docs/appearance/structured-data/sitelinks-searchbox
 */
export function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}#website`,
    name: businessConfig.name,
    alternateName: 'WTP',
    url: baseUrl,
    description: businessConfig.description,
    publisher: {
      '@type': 'Organization',
      '@id': `${baseUrl}#organization`,
      name: businessConfig.name,
    },
    // 2025: Potential search action for sitelinks search box
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/blog?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    // 2025: In language for internationalization
    inLanguage: 'en-US',
    // 2025: Copyright info
    copyrightYear: new Date().getFullYear(),
    copyrightHolder: {
      '@type': 'Organization',
      '@id': `${baseUrl}#organization`,
    },
    // 2025: Main entity of page
    mainEntity: {
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
