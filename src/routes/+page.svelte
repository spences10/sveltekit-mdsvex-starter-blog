<script lang="ts">
	import { Head, description, site_name } from '$lib';
</script>

<Head title={`Hello World`} />

<div class="hero mb-20 min-h-[65vh]">
	<div class="hero-overlay" />
	<div class="hero-content text-center text-neutral-content">
		<div class="max-w-2xl">
			<h1 class="mb-5 text-5xl font-bold text-primary-content">
				Hello there
			</h1>
			<h2 class="mb-5 text-4xl font-bold text-primary-content">
				Welcome to the {site_name}
			</h2>
			<p class="mb-5">
				{description}
			</p>
			<a href={`/posts`} class="btn btn-primary rounded-box">
				Check Out The Posts Page
			</a>
		</div>
	</div>
</div>
