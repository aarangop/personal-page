import prisma from '$lib/prisma';
import { getRandomBlogPost } from '$lib/testing/blog';
import test, { expect } from '@playwright/test';

let postIds: string[] = [];
const nPosts = 5;

test.describe('Blog page', () => {
	test.beforeAll(async () => {
		// Create sample blog post, so we can test the blog page
		const blogPosts = Array.from({ length: nPosts }, () => getRandomBlogPost());
		// Doing it this way because prisma does not return the ids of the created records.
		const createPromise = blogPosts.map(
			async (post) => await prisma.blogPost.create({ data: post })
		);
		// Save these ids so we can delete them after the tests
		postIds = (await Promise.all(createPromise)).map((post) => post.id);
	});

	test('should display a list of blog posts', async ({ page }) => {
		await page.goto('/blog');

		const blogPostElements = await page.$$('data-testid=blog-post');

		expect(blogPostElements.length).toBeGreaterThanOrEqual(1);
	});

	test.afterAll(async () => {
		await prisma.blogPost.deleteMany({ where: { id: { in: postIds } } });
	});
});
