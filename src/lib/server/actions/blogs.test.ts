import prisma from '$lib/__mocks__/prisma';
import { expect, test, vi } from 'vitest';
import { createBlogEntry, getBlogEntries } from './blogs';
import { BlogPostSchema } from '$lib/schemas';

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
	expect(blogPosts).toStrictEqual(blogEntries);
	expect(blogPosts.length).toBe(1);
});

test('createBlogEntry returns new blog entry with id', async () => {
	const blogEntry = {
		title: 'title',
		subtitle: 'subtitle',
		slug: 'title-slug',
		fileUrl: 'https://file.md/file',
		imageUrl: 'https://image.com/image',
		dateCreated: new Date()
	};
	const blogEntryWithId = { ...blogEntry, id: 'blogid' };
	prisma.blogPost.create.mockResolvedValue(blogEntryWithId);

	const newBlogEntry = await createBlogEntry(blogEntry);
	expect(newBlogEntry).toStrictEqual(blogEntryWithId);
});
