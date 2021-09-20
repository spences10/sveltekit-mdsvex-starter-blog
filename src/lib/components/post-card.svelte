<script>
  // import truncateHtml from 'truncate-html'

  export let post

  // let excerpt = truncateHtml(post.html, 150, {
  //   ellipsis: '...',
  // })
</script>

<article
  class="border border-primary bg-base-100 shadow-xl mb-10 p-5 transition card hover:text-accent-focus first:pt-0"
>
  <a sveltekit:prefetch href={`/posts/${post.slug}`}>
    <div>
      <h2 class="font-black mt-5 mb-1 text-3xl">
        {post.title}
      </h2>
      <div class="font-bold text-accent text-sm mb-4 uppercase">
        <time>{new Date(post.date).toDateString()}</time>
        •
        <span>{post.readingTime.text}</span>
      </div>
    </div>
    <!-- <div class="all-prose">
      {@html post.html}
    </div> -->
  </a>
</article>
