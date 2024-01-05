<script lang="ts">
	import { EndlessClouds, Head, description, site_name } from '$lib';
</script>

<Head title={`Hello World`} />

<div class="hero mb-20 min-h-[65vh]">
	<EndlessClouds />
	<div class="hero-overlay bg-opacity-95" />
	<div class="hero-content text-center text-neutral-content">
		<div class="max-w-2xl">
			<h1 class="mb-5 text-5xl font-bold text-secondary">
				Hello there
			</h1>
			<h2 class="mb-5 text-4xl font-bold text-secondary">
				Welcome to the {site_name}
			</h2>
			<p class="mb-5">
				{description}
			</p>
			<a href={`/posts`} class="btn btn-primary">
				Check Out The Posts Page
			</a>
		</div>
	</div>
</div>
