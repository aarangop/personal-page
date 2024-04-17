import { getBreadCrumbs } from '$lib/utils';
import { expect, suite, test } from 'vitest';
suite('getBreadCrumbs', () => {
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

	test('get corred breadcrumbs for a single-level route', () => {
		const url = '/onelevel';

		const breadCrumbs = getBreadCrumbs(url);

		expect(breadCrumbs).toStrictEqual([
			{
				href: '/',
				text: 'Home'
			},
			{
				href: '/onelevel',
				text: 'Onelevel'
			}
		]);
	});
});
