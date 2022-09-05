import { error } from '@sveltejs/kit'

export const load = async ({ fetch, params }) => {
  try {
    const post = await import(`../../../../posts/${params.slug}/index.md`)
    console.log('=====================')
    console.log(`post`,post)
    console.log('=====================')
    return {
      html: post.default.render().html,
      meta: { ...post.metadata, slug: params.post },
    }
  } catch (err) {
    throw error(404, err.message)
  }
}
