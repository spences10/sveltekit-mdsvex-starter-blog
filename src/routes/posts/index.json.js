import { posts } from './_posts'

export async function get() {
  const sortedPosts = Object.keys(posts).map(key => posts[key])
  sortedPosts.sort((b, a) => {
    const da = new Date(a.date).getTime()
    const db = new Date(b.date).getTime()
    if (da < db) return -1
    if (da === db) return 0
    if (da > db) return 1
  })

  return {
    body: { posts: sortedPosts },
  }
}
