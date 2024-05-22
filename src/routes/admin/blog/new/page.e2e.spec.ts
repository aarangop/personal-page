import prisma from '$lib/prisma';
import { getRandomBlogPost } from '$lib/testing/blog';
import test, { expect } from '@playwright/test';

let createdPostTitles: string[] = [];

test.describe('Blog Form', () => {
	test('should create new blog blog post and redirect to admin/blog/[slug] page', async ({
		page
	}) => {
		await page.goto('/admin/blog/new');

		const post = getRandomBlogPost();

		await page.fill('input[name="title"]', post.title);
		await page.fill('input[name="subtitle"]', post.subtitle);
		await page.setInputFiles('input[name="image"]', './e2e/test-assets/blog_img.jpg');
		await page.setInputFiles('input[name="file"]', './e2e/test-assets/blog_entry.md');

		// Submit the form
		await page.click('button:has-text("Save")');

		// Assert redirection
		const re = new RegExp(`(.*)/admin/blog/${post.slug}`);
		await expect(page).toHaveURL(re); // Adjust the final URL pattern
		createdPostTitles.push(post.title);
	});

	test.afterAll(async () => {
		prisma.blogPost.deleteMany({ where: { title: { in: createdPostTitles } } });
	});
});
