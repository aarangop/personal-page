import test, { expect } from '@playwright/test';

test('Unauthenticated access to admin area redirects to login page', async ({ page }) => {
	await page.goto('/admin');
	await expect(page).toHaveURL('/login');
});
