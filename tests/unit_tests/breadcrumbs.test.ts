import { render, screen, within } from '@testing-library/svelte';
import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
import { expect, test } from 'vitest';

test('no link for home route', () => {
	render(Breadcrumbs, { url: '/' });

	const link = screen.queryByRole('link');
	const breadcrumbs = screen.getByRole('listitem');
	const breadcrumb = within(breadcrumbs).getByText('Home');

	expect(breadcrumb).toBeInTheDocument();
	expect(link).not.toBeInTheDocument();
});

test('no link for last route', () => {
	render(Breadcrumbs, { url: '/my/sample/url' });

	const breadcrumbs = screen.getAllByRole('listitem');
	const lastLink = breadcrumbs[breadcrumbs.length - 1];

	expect(within(lastLink).queryByRole('link')).not.toBeInTheDocument();
});
