import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter text-gray-900 dark:text-gray-100">My Blog</h1>
      <BlogPosts />
    </section>
  )
}
