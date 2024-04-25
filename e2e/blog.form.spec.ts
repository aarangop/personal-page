import { toSlug } from '$lib/utils';
import test, { expect } from '@playwright/test';
import { generate } from 'random-words';

test.describe('Blog Form', () => {
	test('Successful submission redirects to new blog post', async ({ page }) => {
		// Navigate to the page with your blog creation form
		await page.goto('/admin/blog/new');

		// Fill in the form (adjust paths and values as needed)
		const title = (generate(5) as string[]).join(' ');
		const slug = toSlug(title);

		await page.fill('input[name="title"]', title);
		await page.fill('input[name="subtitle"]', 'A short description');
		await page.setInputFiles('input[name="image"]', './tests/e2e/test-assets/blog_img.jpg');
		await page.setInputFiles('input[name="file"]', './tests/e2e/test-assets/blog_entry.md');

		// Submit the form
		await page.click('button:has-text("Save")');

		// Assert redirection
		const re = new RegExp(`(.*)/admin/blog/${slug}`);
		await expect(page).toHaveURL(re); // Adjust the final URL pattern
	});
});
