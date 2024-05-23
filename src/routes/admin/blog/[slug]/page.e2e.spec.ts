import test from '@playwright/test';

test.describe('Admin Blog Post Page', async () => {
	test('should display test blog post', async ({ page }) => {
		// This post was created in the prisma/seed.ts file
		await page.goto('/admin/blog/this-is-an-awesome-test-post/');
	});
});
