import Link from 'next/link'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

/**
 * Breadcrumb Navigation Component
 * Provides hierarchical navigation for SEO and user experience
 */
export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="mb-8 text-sm text-neutral-600 dark:text-neutral-400" aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center space-x-2 list-none">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <span className="mx-2">/</span>}
            {item.href && index < items.length - 1 ? (
              <Link
                href={item.href}
                className="hover:underline hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className={index === items.length - 1 ? 'text-neutral-900 dark:text-neutral-100 font-medium' : ''}>
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

