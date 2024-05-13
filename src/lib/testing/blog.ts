import { z } from 'zod';
import { BlogPostSchema } from '../schemas';
import { generate } from 'random-words';
import { toSlug } from '$lib/client/utils/utils';

export const getRandomBlogPost = () => {
	// Generate random title and slug
	const title = (generate(5) as string[]).join(' ');
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
