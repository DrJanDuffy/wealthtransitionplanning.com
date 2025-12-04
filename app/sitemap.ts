import { getBlogPosts } from 'app/blog/utils'
import type { MetadataRoute } from 'next'

export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://wealthtransitionplanning.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Priority pages (Phase 1)
  const priorityPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/cfp-partners`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  // Secondary pages (Phase 2 - add when created)
  const secondaryPages: MetadataRoute.Sitemap = [
    // Case studies will be added when pages are created
    // {
    //   url: `${baseUrl}/case-studies`,
    //   lastModified: new Date().toISOString().split('T')[0],
    //   changeFrequency: 'monthly',
    //   priority: 0.7,
    // },
    // Individual case studies will be added dynamically
  ]

  return [...priorityPages, ...secondaryPages, ...blogs]
}
