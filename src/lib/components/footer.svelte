<script lang="ts">
	import {
		BadgeCheck,
		GitHub,
		Twitter,
		YouTube,
		social_links,
	} from '$lib';

	type SocialLink = {
		title: string;
		path: string;
	};
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
			<a
				href={social_links.find((x: SocialLink) => x.title === 'Twitter')?.path}
			>
				<Twitter />
			</a>
			<a
				href={social_links.find((x: SocialLink) => x.title === 'YouTube')?.path}
			>
				<YouTube />
			</a>
			<a
				href={social_links.find((x: SocialLink) => x.title === 'GitHub')?.path}
			>
				<GitHub />
			</a>
		</div>
	</div>
</footer>
