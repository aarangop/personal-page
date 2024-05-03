import prisma from '$lib/prisma';
import { getRandomBlogPost } from '$lib/testing/blog';
import test, { expect } from '@playwright/test';

let postId = '';

test.describe('Blog page', () => {
	test.beforeAll(async () => {
		// Create sample blog post, so we can test the blog page
		const blogPost = await prisma.blogPost.create({ data: getRandomBlogPost() });
		postId = blogPost.id;
	});

	test('should display a list of blog posts', async ({ page }) => {
		await page.goto('/blog');

		const blogPostElements = await page.$$('data-testid=blog-post');

		expect(blogPostElements.length).toBeGreaterThanOrEqual(1);
	});

	test.afterAll(async () => {
		await prisma.blogPost.delete({ where: { id: postId } });
	});
});
