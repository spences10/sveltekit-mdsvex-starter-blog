import { getPosts } from '$lib/posts'

export const GET = async req => {
  const { slug } = req.params
  const { posts } = await getPosts()

  const sortedPosts = Object.keys(posts).map(key => posts[key])
  const post = sortedPosts.find(post => post.slug === slug)

  return new Response(JSON.stringify(post))
}
