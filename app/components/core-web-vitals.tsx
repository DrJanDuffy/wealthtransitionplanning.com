'use client'

import { useEffect } from 'react'

/**
 * Core Web Vitals Optimization Component (2025)
 * Implements client-side optimizations for LCP, FID/INP, and CLS
 *
 * Key 2025 Metrics:
 * - LCP (Largest Contentful Paint): < 2.5s
 * - INP (Interaction to Next Paint): < 200ms (replaced FID in 2024)
 * - CLS (Cumulative Layout Shift): < 0.1
 */

/**
 * Lazy load images that are below the fold
 * Improves LCP by prioritizing above-the-fold content
 */
export function useLazyImages() {
  useEffect(() => {
    if ('IntersectionObserver' in window) {
      const lazyImages = document.querySelectorAll('img[loading="lazy"]')

      const imageObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement
              if (img.dataset.src) {
                img.src = img.dataset.src
              }
              imageObserver.unobserve(img)
            }
          })
        },
        {
          rootMargin: '50px 0px',
          threshold: 0.01,
        }
      )

      lazyImages.forEach((img) => imageObserver.observe(img))

      return () => imageObserver.disconnect()
    }
  }, [])
}

/**
 * Prefetch links on hover for faster navigation
 * Improves INP by reducing navigation time
 */
export function usePrefetchLinks() {
  useEffect(() => {
    const prefetchedUrls = new Set<string>()

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      const href = target.href

      if (
        href &&
        href.startsWith(window.location.origin) &&
        !prefetchedUrls.has(href)
      ) {
        prefetchedUrls.add(href)
        const link = document.createElement('link')
        link.rel = 'prefetch'
        link.href = href
        document.head.appendChild(link)
      }
    }

    const links = document.querySelectorAll('a[href^="/"]')
    links.forEach((link) => {
      link.addEventListener('mouseenter', handleMouseEnter)
    })

    return () => {
      links.forEach((link) => {
        link.removeEventListener('mouseenter', handleMouseEnter)
      })
    }
  }, [])
}

/**
 * Prevent layout shifts from dynamic content
 * Improves CLS by reserving space for dynamic elements
 */
export function usePreventLayoutShift() {
  useEffect(() => {
    // Add aspect ratio to images without explicit dimensions
    const images = document.querySelectorAll('img:not([width]):not([height])')
    images.forEach((img) => {
      const imgElement = img as HTMLImageElement
      if (!imgElement.style.aspectRatio) {
        imgElement.style.aspectRatio = '16/9'
      }
    })

    // Reserve space for embeds
    const iframes = document.querySelectorAll('iframe')
    iframes.forEach((iframe) => {
      if (!iframe.style.aspectRatio && !iframe.getAttribute('height')) {
        iframe.style.aspectRatio = '16/9'
      }
    })
  }, [])
}

/**
 * Core Web Vitals Provider Component
 * Wraps children with CWV optimizations
 */
export function CoreWebVitalsOptimizer({
  children,
}: {
  children: React.ReactNode
}) {
  useLazyImages()
  usePrefetchLinks()
  usePreventLayoutShift()

  return <>{children}</>
}

/**
 * Report Core Web Vitals to analytics
 * Works with Vercel Speed Insights but also logs to console in dev
 */
export function reportWebVitals(metric: {
  id: string
  name: string
  value: number
  delta: number
  entries: PerformanceEntry[]
}) {
  // Log in development
  if (process.env.NODE_ENV === 'development') {
    console.log(`[CWV] ${metric.name}:`, metric.value)
  }

  // Send to analytics in production
  if (typeof window !== 'undefined' && 'gtag' in window) {
    const gtag = window.gtag as (
      type: string,
      action: string,
      params: Record<string, unknown>
    ) => void
    gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      non_interaction: true,
    })
  }
}

/**
 * Preload critical resources for LCP optimization
 */
export function CriticalResourcePreloader() {
  return (
    <>
      {/* Preload the main font for faster text rendering */}
      <link
        rel="preload"
        href="/_next/static/css/app/layout.css"
        as="style"
      />
      {/* Preload critical images if known */}
    </>
  )
}

/**
 * Image placeholder component to prevent CLS
 */
export function ImagePlaceholder({
  aspectRatio = '16/9',
  className = '',
}: {
  aspectRatio?: string
  className?: string
}) {
  return (
    <div
      className={`bg-gray-100 animate-pulse ${className}`}
      style={{ aspectRatio }}
    />
  )
}
