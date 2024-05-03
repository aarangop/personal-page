import { toSlug } from '$lib/utils';
import { expect, test } from '@playwright/test';
import { generate } from 'random-words';

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

test('save is enabled when feed is valid', async ({ page }) => {
	await page.goto('http://localhost:5173/admin/podcast/new');
	await page.fill('input[name="podcast_title"]', 'This is a test podcast');
	await page.fill('input[name="rss_feed"]', 'https://feeds.megaphone.fm/newheights');
	await page.getByRole('button', { name: 'Test feed' }).click();

	const saveButton = await page.getByRole('button', { name: 'Save' });

	await expect(saveButton).toBeEnabled();
});

test('message appears when feed is successfully validated', async ({ page }) => {
	await page.goto('http://localhost:5173/admin/podcast/new');
	await page.fill('input[name="podcast_title"]', 'This is a test podcast');
	await page.fill('input[name="rss_feed"]', 'https://feeds.megaphone.fm/newheights');
	await page.getByRole('button', { name: 'Test feed' }).click();

	const feedOkayAlert = await page.getByText('Feed okay!');

	await expect(feedOkayAlert).toBeVisible();
});

test('message appears when feed is automatically validated', async ({ page }) => {
	await page.goto('http://localhost:5173/admin/podcast/new');
	await page.fill('input[name="podcast_title"]', 'This is a test podcast');
	await page.fill('input[name="rss_feed"]', 'https://feeds.megaphone.fm/newheights');
	await page.locator('input[name="rss_feed"]').press('Tab');

	const feedOkayAlert = await page.getByText('Feed okay!');

	await expect(feedOkayAlert).toBeVisible();
});

test('message appears when feed is invalid', async ({ page }) => {
	await page.goto('http://localhost:5173/admin/podcast/new');
	await page.fill('input[name="podcast_title"]', 'This is a test podcast');
	await page.fill('input[name="rss_feed"]', 'http://this.is/an/invalid/feed');
	await page.locator('input[name="rss_feed"]').press('Tab');

	const feedOkayAlert = await page.getByText('Invalid feed');

	await expect(feedOkayAlert).toBeVisible({ timeout: 1000 });
});

test('saving podcast redirects to new podcast page', async ({ page }) => {
	await page.goto('http://localhost:5173/admin/podcast/new');
	const testPodcastTitle = (generate(5) as string[])!.join(' ');
	const slug = toSlug(testPodcastTitle);
	await page.fill('input[name="podcast_title"]', testPodcastTitle);
	await page.fill('input[name="rss_feed"]', 'https://feeds.megaphone.fm/newheights');
	await page.fill(
		'input[name="spotify_link"]',
		'https://open.spotify.com/show/58t0V7okf77OpVsMI1F8p9'
	);
	await page.getByRole('button', { name: 'Test feed' }).click();
	await page.getByRole('button', { name: 'Save' }).click();

	const re = new RegExp(`(.*)/podcast/${slug}`);

	await expect(page).toHaveURL(re);
});
