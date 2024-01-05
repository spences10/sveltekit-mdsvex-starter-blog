import { get_posts } from '$lib';
import type { RequestHandler } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
	const { posts } = await get_posts();

	return json(posts);
};
