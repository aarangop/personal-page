import test from '@playwright/test';

test.describe('Edit Podcast Page', () => {
	test('form should be pre-populated with podcast feed data', async ({ page }) => {
		// This podcast feed is added during db seeding after npm install.
		const slug = 'test-podcast-feed';
		await page.goto(`/admin/podcast/edit/${slug}`);
	});
});
