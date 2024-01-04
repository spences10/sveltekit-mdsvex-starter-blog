<script lang="ts">
	import { Head } from '$lib/components';

	const { data } = $props();
	let { copy } = data;
</script>

<Head title={`About`} />

<h1 class="mb-5 text-5xl font-bold">About</h1>
<div class="all-prose mb-10">
	<svelte:component this={copy} />
</div>

<div class="mb-20 flex w-full flex-col">
	<div class="divider" />
</div>
