<script lang="ts">
	import { Head } from '$lib';

	const { data } = $props();
	let {
		Content,
		meta: { date, title, readingTime },
	} = data;
</script>

<Head title={`Post | ${title}`} />

<article class="flex flex-grow flex-col">
	<h1 class="mb-5 text-5xl font-bold">{title}</h1>
	<div class="">
		<p>{new Date(date).toDateString()}</p>
		<p class="mb-16">{readingTime.text}</p>
		<div class="all-prose mb-10">
			<svelte:component this={Content} />
		</div>
	</div>
</article>
