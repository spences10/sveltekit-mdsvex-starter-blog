<script>
	import Head from '$lib/components/head.svelte';
	import PostCard from '$lib/components/post-card.svelte';

	export let data;
	let { posts } = data;
</script>

<Head title={`All the Posts`} />

<div class="flex flex-grow flex-col">
	<h1 class="mb-5 text-5xl font-bold">Check out the posts!</h1>
	{#each posts as post}
		{#if post.published}
			<PostCard {post} />
		{/if}
	{/each}
</div>
