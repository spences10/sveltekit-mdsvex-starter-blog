export const load = async ({ params }) => {
	const { slug } = params;

	try {
		const post = await import(`../../../../posts/${slug}.md`);
		return {
			Content: post.default,
			meta: { ...post.metadata, slug },
		};
	} catch (err) {
		console.error('Error loading the post:', err);
		return {
			status: 500,
			error: `Could not load the post: ${err.message || err}`,
		};
	}
};
