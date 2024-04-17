import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => ({
	blogPosts: await fetch('/api/blogs')
		.then((response) => response.json())
		.then((data) => data)
});
