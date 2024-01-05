import { error } from '@sveltejs/kit';

export const load = async () => {
	const slug = 'about';
	try {
		const Copy = await import(`../../../copy/${slug}.md`);
		return {
			copy: Copy.default,
		};
	} catch (e) {
		error(404, `Uh oh! Sorry, looks like that page doesn't exist`);
	}
};
