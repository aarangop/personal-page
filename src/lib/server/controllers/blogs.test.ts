import prisma from '$lib/__mocks__/prisma';
import { expect, test, vi } from 'vitest';
import { getBlogEntries } from './blogs';

vi.mock('$lib/prisma');

test('getBlogEntries returns all blog entries', async () => {
	const blogEntries = [
		{
			id: 'blogid',
			title: 'title',
			subtitle: 'subtitle',
			slug: 'title-slug',
			fileUrl: 'https://file.md/file',
			imageUrl: 'https://image.com/image',
			dateCreated: new Date()
		}
	];
	prisma.blogPost.findMany.mockResolvedValue(blogEntries);

	const blogPosts = await getBlogEntries();
	console.log(blogPosts);
	expect(blogPosts).toStrictEqual(blogEntries);
	expect(blogPosts.length).toBe(1);
});
