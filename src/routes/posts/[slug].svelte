<script context="module">
  // export const prerender = true

  export async function load({ fetch, page: { params } }) {
    const { slug } = params
    const res = await fetch(`/posts/${slug}.json`)
    if (res.ok) {
      const { post } = await res.json()
      return {
        props: { post },
      }
    }
  }
</script>

<script>
  import Head from '$lib/components/head.svelte'

  export let post

  let { html, date, title, readingTime } = post
</script>

<Head title={`Post | ${title}`} />

<article class="flex flex-col flex-grow">
  <h1 class="font-bold mb-5 text-5xl">{title}</h1>
  <div class="">
    <p>{new Date(date).toDateString()}</p>
    <p class="mb-16">{readingTime.text}</p>
    <article class="all-prose">
      {@html html}
    </article>
  </div>
</article>
