<script lang="ts">
	import { Head, PostCard } from '$lib';

	const { data } = $props();
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
