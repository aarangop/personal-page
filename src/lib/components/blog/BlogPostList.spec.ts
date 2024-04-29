import { render } from '@testing-library/svelte';
import { describe, expect, test, vitest } from 'vitest';
import BlogPostList from './BlogPostList.svelte';
import type { z } from 'zod';
import type { BlogPostSchema } from '$lib/schemas';

describe('BlogPostList', async () => {
	test('should display a list of blog posts', async () => {
		const posts = [
			{
				title: 'Test Blog Post',
				slug: 'test-blog-post',
				subtitle: 'This is a test blog post',
				imageUrl: 'https://example.com/image.jpg',
				fileUrl: 'https://example.com/file.md',
				dateCreated: new Date()
			}
		] as z.infer<typeof BlogPostSchema>[];

		const { getAllByTestId } = render(BlogPostList, { props: { posts } });

		const blogPostElements = getAllByTestId('blog-post');

		expect(blogPostElements.length).toBe(posts.length);
	});
});
