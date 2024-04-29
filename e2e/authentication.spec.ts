import test, { expect } from '@playwright/test';
import { authenticate } from './utils/auth';

test.use({ storageState: { cookies: [], origins: [] } });

test.describe('Authentication', () => {
	test('Unauthenticated access to admin area redirects to login page', async ({ page }) => {
		await page.goto('/admin');
		const errorMessage = page.locator('text=Unauthorized');
		await expect(errorMessage).toBeVisible();
	});
	test('session data is stored', async ({ page }) => {
		if (!process.env.TEST_PASSWORD) throw new TypeError('Missing TEST_PASSWORD');

		await page.goto('/login');
		await page.locator('input[name="username"]').click();
		await page.locator('input[name="username"]').fill('testuser');
		await page.locator('input[name="username"]').press('Tab');
		await page.locator('input[name="password"]').fill(process.env.TEST_PASSWORD!);
		await page.getByRole('button', { name: 'Log In' }).click();
		await page.waitForURL('/');
		const cookies = (await page.context().storageState()).cookies;
		const sessionToken = cookies.filter((cookie) => cookie.name === 'authjs.session-token');
		expect(sessionToken).not.toBe(null);
	});
	test('session token is deleted after logout', async ({ page }) => {
		if (!process.env.TEST_PASSWORD) throw new TypeError('Missing TEST_PASSWORD');

		await page.goto('/login');
		await page.locator('input[name="username"]').click();
		await page.locator('input[name="username"]').fill('testuser');
		await page.locator('input[name="username"]').press('Tab');
		await page.locator('input[name="password"]').fill(process.env.TEST_PASSWORD!);
		await page.getByRole('button', { name: 'Log In' }).click();
		await page.waitForURL('/');
		await page.goto('/login');
		await page.getByRole('button', { name: 'Log Out' }).click();
		await page.waitForURL('/');

		const cookies = (await page.context().storageState()).cookies;
		const sessionToken = cookies.filter((cookie) => cookie.name === 'authjs.session-token');
		expect(sessionToken).toStrictEqual([]);
	});

	test('user is redirected to homepage after logout', async ({ page }) => {
		await authenticate(page);
		await page.goto('/login');
		await page.getByRole('button', { name: 'Log Out' }).click();
		await page.waitForURL('/');
	});
});
