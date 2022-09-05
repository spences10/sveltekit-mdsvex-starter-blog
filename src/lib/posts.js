import { basename, dirname } from 'path'

export const getPosts = async () => {
  // taken from josh-collinsworth's blog starter! Thanks Josh!
  // https://github.com/josh-collinsworth/sveltekit-blog-starter/blob/main/src/routes/api/posts/index.json.js
  const posts = await Promise.all(
    Object.entries(import.meta.glob('../../posts/**/*.md')).map(
      async ([path, resolver]) => {
        const { metadata } = await resolver()
        const slug = basename(dirname(path))
        return { ...metadata, slug }
      }
    )
  )

  let sortedPosts = posts.sort(
    (a, b) => +new Date(b.date) - +new Date(a.date)
  )

  sortedPosts = sortedPosts.map(post => ({
    ...post,
  }))

  return {
    posts: sortedPosts,
  }
}
