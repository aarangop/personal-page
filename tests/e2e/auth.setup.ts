import { test as setup, expect } from '@playwright/test';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
	await page.goto('http://localhost:5173/');
	await page.goto('http://localhost:5173/login');
	await page.getByRole('button', { name: 'Log In' }).click();
});
