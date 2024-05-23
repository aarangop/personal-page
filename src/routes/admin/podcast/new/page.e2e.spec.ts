import { toSlug } from '$lib/client/utils/utils';
import { getRandomTitle } from '$lib/server/utils/utils';
import test from '@playwright/test';

test.describe('Admin Podcast New Page', () => {
	test('redirects to podcast page when new podcast is created', async ({ page }) => {
		page.goto('/admin/podcast/new');
		const podcastTitle = getRandomTitle(5);
		const slug = toSlug(podcastTitle);

		await page.fill('input[name="title"]', podcastTitle);
		await page.fill('input[name="rssFeed"]', 'https://anchor.fm/s/ef8e417c/podcast/rss');
		await page.locator('button:text("Test feed")').click();
		await page.click('button:text("Save")');

		const expectedUrl = `/podcasts/${slug}`;
		await page.waitForURL(expectedUrl);
	});
});
