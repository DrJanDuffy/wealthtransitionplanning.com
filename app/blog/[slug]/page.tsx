import { notFound } from 'next/navigation'
import { CustomMDX } from 'app/components/mdx'
import { formatDate, getBlogPosts } from 'app/blog/utils'
import { baseUrl } from 'app/sitemap'
import { businessConfig } from 'app/config/business'
import { ArticleSchema, BreadcrumbSchema } from 'app/components/google'

export async function generateStaticParams() {
  let posts = getBlogPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export function generateMetadata({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug)
  if (!post) {
    return
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    // 2025: Enhanced article metadata
    authors: [{ name: businessConfig.owner, url: `${baseUrl}/about` }],
    creator: businessConfig.owner,
    publisher: businessConfig.name,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      modifiedTime: publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      siteName: businessConfig.name,
      locale: 'en_US',
      authors: [businessConfig.owner],
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
      creator: '@wealthtransition',
    },
    // 2025: Canonical URL
    alternates: {
      canonical: `${baseUrl}/blog/${post.slug}`,
    },
  }
}

export default function Blog({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  // Breadcrumb items for navigation
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: post.metadata.title, url: `/blog/${post.slug}` },
  ]

  return (
    <section>
      {/* 2025: Enhanced Article Schema with E-E-A-T signals */}
      <ArticleSchema
        headline={post.metadata.title}
        description={post.metadata.summary}
        datePublished={post.metadata.publishedAt}
        dateModified={post.metadata.publishedAt}
        authorName={businessConfig.owner}
        slug={post.slug}
        image={post.metadata.image}
      />

      {/* 2025: BreadcrumbList Schema for navigation */}
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Breadcrumb Navigation (visual) */}
      <nav className="mb-6 text-sm" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
          <li>
            <a href="/" className="hover:text-blue-600 transition-colors">Home</a>
          </li>
          <li><span className="mx-2">/</span></li>
          <li>
            <a href="/blog" className="hover:text-blue-600 transition-colors">Blog</a>
          </li>
          <li><span className="mx-2">/</span></li>
          <li className="text-gray-900 dark:text-gray-100 font-medium truncate max-w-xs">
            {post.metadata.title}
          </li>
        </ol>
      </nav>

      <h1 className="title font-semibold text-2xl tracking-tighter text-gray-900 dark:text-gray-100">
        {post.metadata.title}
      </h1>

      {/* 2025: Enhanced article metadata display */}
      <div className="flex flex-wrap items-center gap-4 mt-2 mb-8 text-sm text-gray-600 dark:text-gray-400">
        <p className="flex items-center">
          <span className="sr-only">Published on</span>
          <time dateTime={post.metadata.publishedAt}>
            {formatDate(post.metadata.publishedAt)}
          </time>
        </p>
        <p className="flex items-center">
          <span className="sr-only">Author:</span>
          By {businessConfig.owner}
        </p>
      </div>

      {/* Article summary for speakable/voice search */}
      {post.metadata.summary && (
        <p className="article-summary text-lg text-gray-700 dark:text-gray-300 mb-8 italic border-l-4 border-blue-500 pl-4">
          {post.metadata.summary}
        </p>
      )}

      <article className="prose prose-gray dark:prose-invert max-w-none">
        <CustomMDX source={post.content} />
      </article>

      {/* 2025: Author bio for E-E-A-T */}
      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
              <span className="text-2xl font-bold text-blue-600 dark:text-blue-300">JD</span>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              About {businessConfig.owner}
            </h3>
            <p className="mt-1 text-gray-600 dark:text-gray-400">
              Dr. Jan Duffy is a licensed REALTOR® specializing in wealth transition planning,
              estate planning, and real estate services for empty nesters and 55+ communities
              in Las Vegas, Nevada.
            </p>
            <a
              href="/about"
              className="mt-2 inline-block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
            >
              Learn more about Dr. Duffy →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
