export const authenticate = async (page: any) => {
	if (!process.env.TEST_PASSWORD) throw new TypeError('Missing TEST_PASSWORD');

	await page.goto('/login');
	await page.locator('input[name="username"]').click();
	await page.locator('input[name="username"]').fill('testuser');
	await page.locator('input[name="username"]').press('Tab');
	await page.locator('input[name="password"]').fill(process.env.TEST_PASSWORD!);
	await page.getByRole('button', { name: 'Log In' }).click();
	await page.waitForURL('/');
};
