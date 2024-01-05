<script lang="ts">
	import {
		BadgeCheck,
		GitHub,
		Twitter,
		YouTube,
		author_name,
		site_name,
		social_links,
	} from '$lib';
</script>

{#snippet social_link(item)}
	<a href={item.path} aria-label={`Follow on ${item.title}`}>
		{#if item.title === 'Twitter'}
			<Twitter />
		{:else if item.title === 'YouTube'}
			<YouTube />
		{:else if item.title === 'GitHub'}
			<GitHub />
		{/if}
	</a>
{/snippet}

<footer
	class="footer footer-center bg-neutral p-10 text-neutral-content"
>
	<aside>
		<BadgeCheck height={60} width={60} />
		<p class="font-bold">
			{author_name} <br /> {site_name}
		</p>
		<p>
			Copyright © {`${new Date().getFullYear()}`} - All right reserved
		</p>
	</aside>
	<nav>
		<div class="grid grid-flow-col gap-4">
			{#each social_links as link}
				{@render social_link(link)}
			{/each}
		</div>
	</nav>
</footer>
