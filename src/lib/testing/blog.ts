import { z } from 'zod';
import { BlogPostSchema } from '../schemas';
import { generate } from 'random-words';
import { toSlug } from '$lib/client/utils/utils';
import { getRandomTitle } from '$lib/server/utils/utils';

export const getRandomBlogPost = () => {
	// Generate random title and slug
	const title = getRandomTitle(5);
	const slug = toSlug(title);
	return {
		title,
		slug,
		subtitle: (generate(8) as string[]).join(' '),
		dateCreated: new Date(),
		fileUrl:
			'https://storage.googleapis.com/andresap-perspage-dev/testing/Learning%20Machine%20Learning.md',
		imageUrl:
			'https://storage.googleapis.com/andresap-perspage-dev/testing/Pasted%20image%2020221121144208.png'
	} as z.infer<typeof BlogPostSchema>;
};
