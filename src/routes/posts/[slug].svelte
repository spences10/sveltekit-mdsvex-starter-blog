<script context="module">
  export const prerender = true

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
  export let post

  let { html, date, title, tags, published, readingTime } = post
</script>

<div class="flex flex-col flex-grow">
  <h1 class="font-bold mb-5 text-5xl">Posts</h1>
  <div class="">
    <h1>{title}</h1>
    <p>{date}</p>
    <pre>{JSON.stringify(tags, null, 2)}</pre>
    <p>{published}</p>
    <pre>{JSON.stringify(readingTime, null, 2)}</pre>
    <article class="prose">
      {@html html}
    </article>
  </div>
</div>
