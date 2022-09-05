import { getPosts } from '@lib/posts'

export async function GET() {
  const posts = await getPosts()
  const sortedPosts = Object.keys(posts).map(key => posts[key])
  sortedPosts.sort((b, a) => {
    const da = new Date(a.date).getTime()
    const db = new Date(b.date).getTime()
    if (da < db) return -1
    if (da === db) return 0
    if (da > db) return 1
  })

  return new Response(JSON.stringify(posts, null, 2))
}
