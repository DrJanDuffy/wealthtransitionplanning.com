import { businessConfig } from 'app/config/business'
import { baseUrl } from 'app/sitemap'

/**
 * Organization Schema Component (2025 Enhanced)
 * Adds comprehensive Organization structured data for Google Search
 * Supports E-E-A-T signals and rich results
 *
 * @see https://developers.google.com/search/docs/appearance/structured-data/organization
 */
export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${baseUrl}#organization`,
    name: businessConfig.name,
    legalName: businessConfig.legalName,
    url: baseUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${baseUrl}/og?title=${encodeURIComponent(businessConfig.name)}`,
      width: 1200,
      height: 630,
    },
    image: `${baseUrl}/og?title=${encodeURIComponent(businessConfig.name)}`,
    description: businessConfig.description,
    foundingDate: '2020',
    founders: [
      {
        '@type': 'Person',
        '@id': `${baseUrl}#person-dr-jan-duffy`,
        name: businessConfig.owner,
      },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: businessConfig.address.street,
      addressLocality: businessConfig.address.city,
      addressRegion: businessConfig.address.state,
      postalCode: businessConfig.address.zipCode,
      addressCountry: businessConfig.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 36.1699,
      longitude: -115.1398,
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: businessConfig.phoneFormatted,
        contactType: 'customer service',
        email: businessConfig.email,
        availableLanguage: ['English'],
        areaServed: {
          '@type': 'State',
          name: businessConfig.serviceArea.state,
        },
      },
    ],
    areaServed: businessConfig.serviceArea.regions.map((region) => ({
      '@type': 'City',
      name: region,
      containedInPlace: {
        '@type': 'State',
        name: businessConfig.serviceArea.state,
      },
    })),
    // 2025: Enhanced knowledge graph signals
    knowsAbout: [
      'Wealth Transition Planning',
      'Estate Planning',
      'Financial Planning',
      'Retirement Planning',
      'Empty Nester Real Estate',
      '55+ Community Planning',
      'Las Vegas Real Estate',
      'Fiduciary Financial Services',
    ],
    // 2025: Slogan for brand recognition
    slogan: 'Expert Wealth Transition Planning in Las Vegas',
    // 2025: Enhanced for AI understanding
    keywords: businessConfig.keywords.join(', '),
    // Social profiles for knowledge panel
    sameAs: [
      businessConfig.googleBusinessProfileUrl,
      ...Object.values(businessConfig.socialMedia).filter(Boolean),
    ].filter(Boolean),
    // Member of professional organizations (E-E-A-T signal)
    memberOf: [
      {
        '@type': 'Organization',
        name: 'Berkshire Hathaway HomeServices',
      },
    ],
    // 2025: Aggregate rating for trust signals
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '25',
      bestRating: '5',
      worstRating: '1',
    },
    // 2025: Has credential for authority
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Real Estate License',
        credentialCategory: 'Professional License',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Nevada Real Estate Division',
        },
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
