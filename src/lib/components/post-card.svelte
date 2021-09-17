<script>
  import truncateHtml from 'truncate-html'

  export let post

  let excerpt = truncateHtml(post.html, 150, {
    ellipsis: '...',
  })
</script>

<article
  class="bg-base-100 mb-10 p-5 transition border border-primary shadow-xl card hover:text-accent-focus first:pt-0"
>
  <a sveltekit:prefetch href={`/posts/${post.slug}`}>
    <div>
      <h2 class="font-black mb-1 text-3xl mt-5">
        {post.title}
      </h2>
      <div class="mb-4 text-accent uppercase text-sm font-bold">
        <time>{new Date(post.date).toDateString()}</time>
        •
        <span>{post.readingTime.text}</span>
      </div>
    </div>
    <div class="all-prose">
      {@html excerpt}
    </div>
  </a>
</article>
