import test, { test as setup, expect } from '@playwright/test';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
	if (!process.env.TEST_PASSWORD) throw new TypeError('Missing TEST_PASSWORD');

	await page.goto('http://localhost:4173/login');
	await page.locator('input[name="username"]').click();
	await page.locator('input[name="username"]').fill('testuser');
	await page.locator('input[name="username"]').press('Tab');
	await page.locator('input[name="password"]').fill(process.env.TEST_PASSWORD!);
	await page.getByRole('button', { name: 'Log In' }).click();
	await page.waitForURL('http://localhost:4173');
	await page.context().storageState({ path: authFile });
});
