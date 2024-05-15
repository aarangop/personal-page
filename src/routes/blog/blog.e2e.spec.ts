import prisma from '$lib/prisma';
import { getRandomBlogPost } from '$lib/testing/blog';
import test, { expect } from '@playwright/test';

// Since this is a public page, the user does not require authentication.
// So, reset storage state for this file to avoid being authenticated
test.use({ storageState: { cookies: [], origins: [] } });

test.describe('Blog page', () => {
	// During seeding, we create a blog post. The seed script runs post install. So there should always be at least one blog post that will be shown.
	test('should display a list of blog posts', async ({ page }) => {
		await page.goto('/blog');

		const blogPostElements = await page.$$('data-testid=blog-post');

		expect(blogPostElements.length).toBeGreaterThanOrEqual(nPosts);
	});
});
