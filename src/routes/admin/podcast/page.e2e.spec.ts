import test, { expect } from '@playwright/test';

// This is a protected route so the user needs to be authenticated and have the admin role.
test.describe('Podcast page', () => {
	test('should display a list of podcast episodes', async ({ page }) => {
		await page.goto('/admin/podcast');

		const podcastEpisodeElements = await page.$$('data-testid=podcast-episode');

		expect(podcastEpisodeElements.length).toBeGreaterThanOrEqual(1);
	});

	test('podcast feed cards should have an edit button', async ({ page }) => {
		await page.goto('/admin/podcast');

		const podcastFeedCards = await page.$$('data-testid=podcast-episode-card');
		const editButtons = await Promise.all(
			podcastFeedCards.map(async (card) => await card.$('data-testid=edit-button'))
		);
		const nullButtons = editButtons.filter((button) => button === null);

		expect(nullButtons).toHaveLength(0);
	});
});
