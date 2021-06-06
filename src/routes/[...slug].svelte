<script context="module">
  export async function load(ctx) {
    try {
      let ctxPath = ctx.page.path
      let index = ctxPath.split(`/`).length > 2 ? `/index` : ''
      let Post = await import(`../../posts${ctxPath}${index}.md`)

      return {
        props: {
          Post: Post.default,
          metadata: Post.metadata,
        },
      }
    } catch (e) {
      return {
        status: 404,
        error: `Post not found: ${e.message}`,
      }
    }
  }
</script>

<script>
  export let Post
</script>

<article class="prose mb-16">
  <Post />
</article>
