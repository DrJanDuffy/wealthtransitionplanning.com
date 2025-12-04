import { baseUrl } from 'app/sitemap'

interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[]
}

/**
 * BreadcrumbList Schema Component (2025 Enhanced)
 * Adds BreadcrumbList structured data for enhanced navigation in search results
 *
 * @see https://developers.google.com/search/docs/appearance/structured-data/breadcrumb
 *
 * Usage:
 * <BreadcrumbSchema items={[
 *   { name: 'Home', url: '/' },
 *   { name: 'Services', url: '/services' },
 *   { name: 'Current Page', url: '/services/current' }
 * ]} />
 */
export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  if (!items || items.length === 0) {
    return null
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${baseUrl}${item.url}`,
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
 * Helper function to generate breadcrumb items from a path
 * @param pathname - The current page pathname (e.g., '/services/comprehensive')
 * @param pageTitle - The title of the current page
 */
export function generateBreadcrumbItems(pathname: string, pageTitle: string): BreadcrumbItem[] {
  const items: BreadcrumbItem[] = [{ name: 'Home', url: '/' }]

  const segments = pathname.split('/').filter(Boolean)
  let currentPath = ''

  // Map of path segments to readable names
  const segmentNames: Record<string, string> = {
    'services': 'Services',
    'about': 'About',
    'blog': 'Blog',
    'contact': 'Contact',
    'resources': 'Resources',
    'cfp-partners': 'CFP Partners',
    'testimonials': 'Testimonials',
    'faq': 'FAQ',
    'pricing': 'Pricing',
    'process': 'Our Process',
    'areas-served': 'Areas Served',
    'credentials': 'Credentials',
    'philosophy': 'Philosophy',
    'benefits': 'Benefits',
    'free': 'Free Resources',
    'premium': 'Premium Resources',
    'comprehensive': 'Comprehensive Planning',
    'launch': 'Launch',
    'aim': 'AIM',
    'live': 'LIVE',
    'learn': 'Learn',
    'empty-nester': 'Empty Nester',
    '55-plus-communities': '55+ Communities',
    'wealth-transition': 'Wealth Transition',
    'how-we-work': 'How We Work',
    'market-expertise': 'Market Expertise',
  }

  segments.forEach((segment, index) => {
    currentPath += `/${segment}`

    // For last segment, use provided page title
    if (index === segments.length - 1) {
      items.push({ name: pageTitle, url: currentPath })
    } else {
      // For intermediate segments, use mapped name or capitalize
      const name = segmentNames[segment] || segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ')
      items.push({ name, url: currentPath })
    }
  })

  return items
}
