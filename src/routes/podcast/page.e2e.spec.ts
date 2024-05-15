import test, { expect } from '@playwright/test';

// Since this is a public page, the user does not require authentication.
// So, reset storage state for this file to avoid being authenticated
test.use({ storageState: { cookies: [], origins: [] } });

test.describe('Podcast page', () => {
	test('should display a list of podcast episodes', async ({ page }) => {
		await page.goto('/podcast');

		const podcastEpisodeElements = await page.$$('data-testid=podcast-episode-card');

		expect(podcastEpisodeElements.length).toBeGreaterThanOrEqual(1);
	});
});
