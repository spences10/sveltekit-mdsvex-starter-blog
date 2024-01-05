<script lang="ts">
	export const themes = [
		'acid',
		'aqua',
		'autumn',
		'black',
		'bumblebee',
		'business',
		'cmyk',
		'coffee',
		'corporate',
		'cupcake',
		'cyberpunk',
		'dark',
		'dracula',
		'emerald',
		'fantasy',
		'forest',
		'garden',
		'halloween',
		'lemonade',
		'light',
		'lofi',
		'luxury',
		'night',
		'pastel',
		'retro',
		'synthwave',
		'valentine',
		'winter',
		'wireframe',
	];
</script>

<div>
	<select
		data-choose-theme
		class="select select-bordered select-primary select-xs bg-primary pr-9 text-primary-content"
	>
		<option disabled selected>Choose a theme</option>
		{#each themes as theme, index}
			<option class="capitalize" id={index.toString()} value={theme}>
				{theme.charAt(0).toUpperCase() + theme.slice(1)}
			</option>
		{/each}
	</select>
</div>
