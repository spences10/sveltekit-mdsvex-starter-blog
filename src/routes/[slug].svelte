<script context="module">
  export async function load(ctx) {
    try {
      const Post = await import(`../posts/${ctx.page.params.slug}.md`)
      return {
        props: {
          Post: Post.default,
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
