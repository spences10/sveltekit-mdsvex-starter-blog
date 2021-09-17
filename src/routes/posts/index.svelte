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
  import PostCard from '$lib/components/post-card.svelte'

  export let posts
</script>

<div class="flex flex-col flex-grow">
  <h1 class="font-bold mb-5 text-5xl">Check out the posts!</h1>
  {#each posts as post}
    {#if post.published}
      <PostCard {post} />
    {/if}
  {/each}
</div>
