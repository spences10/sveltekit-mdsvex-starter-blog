<script lang="ts">
	import { pages, site_name } from '$lib';
	import { ThemeSelect } from '.';
</script>

<div
	class="navbar sticky top-0 z-10 mb-16 bg-neutral text-neutral-content shadow-lg"
>
	<div class="navbar-start mx-2 px-2">
		<span class="text-lg font-bold">{site_name}</span>
	</div>
	<div class="dropdown dropdown-right lg:hidden">
		<button class="btn m-1">Links</button>
		<ul
			class="menu dropdown-content w-52 rounded-box bg-neutral p-2 text-neutral-content shadow"
		>
			{#each pages as { title, path }}
				<li>
					<a href={path}>{title}</a>
				</li>
			{/each}
		</ul>
	</div>
	<div class="navbar-center mx-2 hidden px-2 lg:flex">
		<div class="flex items-stretch">
			{#each pages as { title, path }}
				<a href={path} class="btn btn-ghost btn-sm rounded-btn">
					{title}
				</a>
			{/each}
		</div>
	</div>
	<div class="navbar-end">
		<ThemeSelect />
	</div>
</div>
