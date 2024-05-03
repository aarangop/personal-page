import test, { expect } from '@playwright/test';

test.describe('Blog Post Page', () => {
	test('should display blog post', async ({ page }) => {
		// Go to the test blog post page. This post is created by prisma during seeding, refer to.
		await page.goto('/blog/test-post');
		await page.waitForSelector('h2');
		const heading = await page
			.getByRole('heading', { name: 'The Princess of Mismatched Dreams' })
			.nth(0);
		const headingClasses = await heading?.getAttribute('class');

		expect(heading).toBeTruthy();
		expect(headingClasses).toContain('h2');
	});
});
