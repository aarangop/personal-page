import prisma from '$lib/__mocks__/prisma';
import { describe, expect, test, vi } from 'vitest';
import { getBlogPosts } from './blog';

vi.mock('../../prisma');

describe('blog actions', () => {
	test('should get all blog posts', async () => {
		const blogPosts = [
			{
				id: '1',
				title: 'Test Blog Post',
				subtitle: 'This is a test blog post',
				fileUrl: 'https://example.com/file.md',
				imageUrl: 'https://example.com/image.jpg',
				dateCreated: new Date(),
				slug: 'test-blog-post'
			}
		];
		prisma.blogPost.findMany.mockResolvedValue(blogPosts);
		const result = await getBlogPosts();

		expect(result).toStrictEqual(blogPosts);
	});
});
