<script lang="ts">
	import {
		BadgeCheck,
		GitHub,
		Twitter,
		YouTube,
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
			ACME Industries Ltd. <br />Providing reliable tech since 1992
		</p>
		<p>Copyright © 2024 - All right reserved</p>
	</aside>
	<nav>
		<div class="grid grid-flow-col gap-4">
			{#each social_links as link}
				{@render social_link(link)}
			{/each}
		</div>
	</nav>
</footer>
