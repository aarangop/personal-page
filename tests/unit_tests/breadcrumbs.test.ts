import { getBreadCrumbs } from '$lib/utils';
import { expect, test } from '@playwright/test';

// test('about page has expected h1', async ({ page }) => {
// 	await page.goto('/about');
// 	await expect(page.getByRole('heading', { name: 'About this app' })).toBeVisible();
// });

test('get correct breadcrumbs for deep route', () => {
	const url = '/my/sample/url';

	const breadCrumbs = getBreadCrumbs(url);
	expect(breadCrumbs.length).toBe(4);
	expect(breadCrumbs).toStrictEqual([
		{ href: '/', text: 'Home' },
		{ href: '/my', text: 'My' },
		{ href: '/my/sample', text: 'Sample' },
		{ href: '/my/sample/url', text: 'Url' }
	]);
});

test('returns no link for home route url', () => {
	const url = '/';
	const breadCrumbs = getBreadCrumbs(url);
	expect(breadCrumbs).toStrictEqual([
		{
			href: '/',
			text: 'Home'
		}
	]);
});
