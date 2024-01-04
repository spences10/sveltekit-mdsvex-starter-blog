<script lang="ts">
	import { BadgeCheck, GitHub, Twitter, YouTube } from '$lib/icons';
	import { socialLinks } from '$lib/site-config';
</script>

<footer class="footer bg-neutral p-10 text-neutral-content">
	<div>
		<BadgeCheck height={60} width={60} />
		<p>
			ACME Industries Ltd.
			<br />Providing reliable tech since 1992
		</p>
	</div>
	<div>
		<span class="footer-title">Social</span>
		<div class="grid grid-flow-col gap-4">
			<a href={socialLinks.find((x) => x.title === 'Twitter').path}>
				<Twitter />
			</a>
			<a href={socialLinks.find((x) => x.title === 'YouTube').path}>
				<YouTube />
			</a>
			<a href={socialLinks.find((x) => x.title === 'GitHub').path}>
				<GitHub />
			</a>
		</div>
	</div>
</footer>
