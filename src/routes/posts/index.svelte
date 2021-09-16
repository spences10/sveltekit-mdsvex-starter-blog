<script context="module">
  export const prerender = true
  export async function load({ fetch }) {
    const res = await fetch(`/posts.json`)
    if (res.ok) {
      const { posts } = await res.json()
      return {
        props: { posts },
      }
    }
  }
</script>

<script>
  export let posts
</script>

<div class="flex flex-col flex-grow">
  <h1 class="font-bold mb-5 text-5xl">Posts</h1>
  <div class="">
    <pre>{JSON.stringify(posts, null, 2)}</pre>
  </div>
</div>
