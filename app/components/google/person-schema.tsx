import { businessConfig } from 'app/config/business'
import { baseUrl } from 'app/sitemap'

/**
 * Person Schema Component (2025 Enhanced for E-E-A-T)
 * Adds Person structured data for Dr. Jan Duffy
 * Critical for E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)
 *
 * @see https://developers.google.com/search/docs/appearance/structured-data/profile-page
 */
export function PersonSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${baseUrl}#person-dr-jan-duffy`,
    name: businessConfig.owner,
    givenName: 'Jan',
    familyName: 'Duffy',
    honorificPrefix: 'Dr.',
    jobTitle: 'REALTOR® and Wealth Transition Specialist',
    description: 'Dr. Jan Duffy is a licensed REALTOR® specializing in wealth transition planning, estate planning, and real estate services for empty nesters and 55+ communities in Las Vegas, Nevada.',
    url: `${baseUrl}/about`,
    image: `${baseUrl}/og?title=${encodeURIComponent(businessConfig.owner)}`,
    email: businessConfig.email,
    telephone: businessConfig.phoneFormatted,
    // Work location
    workLocation: {
      '@type': 'Place',
      name: 'Las Vegas, Nevada',
      address: {
        '@type': 'PostalAddress',
        addressLocality: businessConfig.address.city,
        addressRegion: businessConfig.address.state,
        addressCountry: businessConfig.address.country,
      },
    },
    // Works for organization
    worksFor: {
      '@type': 'Organization',
      '@id': `${baseUrl}#organization`,
      name: businessConfig.name,
    },
    // Member of professional organizations (E-E-A-T)
    memberOf: [
      {
        '@type': 'Organization',
        name: 'Berkshire Hathaway HomeServices',
      },
      {
        '@type': 'Organization',
        name: 'Nevada Real Estate Division',
      },
    ],
    // Professional credentials (E-E-A-T)
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Real Estate License',
        credentialCategory: 'Professional License',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Nevada Real Estate Division',
        },
        identifier: businessConfig.licenseNumber,
      },
    ],
    // Areas of expertise (semantic SEO 2025)
    knowsAbout: [
      'Wealth Transition Planning',
      'Estate Planning',
      'Real Estate Investment',
      'Empty Nester Real Estate',
      '55+ Community Planning',
      'Las Vegas Real Estate Market',
      'Retirement Planning',
      'Financial Planning Support',
    ],
    // Alumni for education credentials (E-E-A-T)
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Doctoral Program',
    },
    // Same as social profiles
    sameAs: Object.values(businessConfig.socialMedia).filter(Boolean),
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
