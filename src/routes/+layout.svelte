<script lang="ts">
	import { Footer, Nav } from '$lib/components';
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';
	import '../app.postcss';
	import '../prism.css';

	onMount(async () => {
		themeChange(false);
	});
</script>

<Nav />

<main
	class="relative mx-auto max-w-[90ch] break-normal px-4 sm:px-6 lg:px-8"
>
	<slot />
</main>

<Footer />
