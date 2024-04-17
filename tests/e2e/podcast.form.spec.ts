import { expect, test } from '@playwright/test';

test('has title', async ({ page }) => {
	await page.goto('/admin/podcast/new');

	// Expect a title "to contain" a substring.
	await expect(page).toHaveTitle(/New Podcast/);
});

test('save is disabled when invalid feed is entered', async ({ page }) => {
	await page.goto('/admin/podcast/new');
	// Type an invalid URL
	await page.fill('input[name="rss_feed"]', 'not-a-real-feed-url');

	// Assert that the save button is disabled
	const saveButton = page.locator('button:has-text("Save")');
	await expect(saveButton).toBeDisabled();
});
