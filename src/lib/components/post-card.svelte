<script>
	export let post;
</script>

<article
	class="hover:text-accent-focus card mb-10 border border-primary bg-base-100 p-5 shadow-xl transition first:pt-0"
>
	<a sveltekit:prefetch href={`/posts/${post.slug}`}>
		<div>
			<h2 class="mb-1 mt-5 text-3xl font-black">
				{post.title}
			</h2>
			<div class="mb-4 text-sm font-bold uppercase text-accent">
				<time>{new Date(post.date).toDateString()}</time>
			</div>
		</div>
	</a>
</article>
