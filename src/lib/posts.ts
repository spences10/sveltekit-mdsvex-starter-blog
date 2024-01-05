export const get_posts = async () => {
	// Fetch posts from local Markdown files
	const posts: Post[] = await Promise.all(
		Object.entries(import.meta.glob('../../posts/**/*.md')).map(
			async ([path, resolver]) => {
				const resolved = (await resolver()) as { metadata: Post };
				const { metadata } = resolved;
				const slug = path.split('/').pop()?.slice(0, -3) ?? '';
				return { ...metadata, slug };
			},
		),
	);

	let sorted_posts = posts.sort(
		(a, b) => +new Date(b.date) - +new Date(a.date),
	);

	sorted_posts = sorted_posts.map((post) => ({
		...post,
	}));

	return {
		posts: sorted_posts,
	};
};
