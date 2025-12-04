import { businessConfig } from 'app/config/business'
import { baseUrl } from 'app/sitemap'

interface ServiceSchemaProps {
  name: string
  description: string
  url: string
  category?: string
  priceRange?: string
  features?: string[]
}

/**
 * Service Schema Component (2025 Enhanced)
 * Adds detailed Service structured data with offers and features
 *
 * @see https://developers.google.com/search/docs/appearance/structured-data/local-business
 */
export function ServiceSchema({
  name,
  description,
  url,
  category = 'Financial Planning Service',
  priceRange = '$$',
  features = [],
}: ServiceSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${baseUrl}${url}#service`,
    name,
    description,
    url: `${baseUrl}${url}`,
    serviceType: category,
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${baseUrl}#organization`,
      name: businessConfig.name,
    },
    areaServed: businessConfig.serviceArea.regions.map((region) => ({
      '@type': 'City',
      name: region,
      containedInPlace: {
        '@type': 'State',
        name: businessConfig.serviceArea.state,
      },
    })),
    // 2025: Enhanced offers structure
    offers: {
      '@type': 'Offer',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'USD',
      },
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        '@id': `${baseUrl}#organization`,
      },
    },
    // 2025: Has part for service features
    ...(features.length > 0 && {
      hasPart: features.map((feature, index) => ({
        '@type': 'Service',
        name: feature,
        position: index + 1,
      })),
    }),
    // 2025: Aggregate rating for trust
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '25',
      bestRating: '5',
      worstRating: '1',
    },
    // 2025: Terms of service
    termsOfService: `${baseUrl}/terms`,
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
 * Service Catalog Schema for the main services page
 * Lists all available services with offers
 */
export function ServiceCatalogSchema() {
  const services = [
    {
      name: 'Wealth Transition Planning',
      description: 'Comprehensive wealth transition and estate planning services',
      url: '/services/wealth-transition',
    },
    {
      name: 'Empty Nester Real Estate',
      description: 'Specialized real estate services for empty nesters looking to downsize or relocate',
      url: '/services/empty-nester',
    },
    {
      name: '55+ Community Planning',
      description: 'Expert guidance for 55+ community home purchases and transitions',
      url: '/services/55-plus-communities',
    },
    {
      name: 'Comprehensive Financial Planning',
      description: 'Full-service financial planning and wealth management support',
      url: '/services/comprehensive',
    },
  ]

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${baseUrl}/services#service-catalog`,
    name: 'Wealth Transition Planning Services',
    description: 'Complete catalog of wealth transition and financial planning services',
    itemListElement: services.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Service',
        name: service.name,
        description: service.description,
        url: `${baseUrl}${service.url}`,
        provider: {
          '@type': 'Organization',
          '@id': `${baseUrl}#organization`,
        },
      },
    })),
    numberOfItems: services.length,
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
