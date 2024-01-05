export const load = async ({ fetch }) => {
	const res = await fetch(`api/posts`);
	if (res.ok) {
		const posts = await res.json();
		return { posts };
	} else {
		return { posts: [] };
	}
};
