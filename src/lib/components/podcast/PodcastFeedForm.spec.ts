import { podcastFeedSchema } from '$lib/schemas';
import { fireEvent, render } from '@testing-library/svelte';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { describe, expect, it } from 'vitest';
import PodcastFeedForm from './PodcastFeedForm.svelte';

describe('PodcastFeedForm', () => {
	it('should render the form', async () => {
		const formData = await superValidate(zod(podcastFeedSchema));
		const form = render(PodcastFeedForm, {
			props: { data: formData, submitFormAction: 'form-action' }
		});
	});

	it('should display a validation error for invalid slug', async () => {
		const formData = await superValidate(zod(podcastFeedSchema));
		const { findByText, getByLabelText } = render(PodcastFeedForm, {
			props: { data: formData, submitFormAction: 'form-action' }
		});

		const titleInput = getByLabelText('Slug');
		await fireEvent.input(titleInput, { target: { value: '!invalid-slug!' } });

		const errorMessage = await findByText('Invalid slug');
		expect(errorMessage).toBeInTheDocument();
	});

	it('should display a validation message for a valid feed upon validation via validation button', async () => {
		const formData = await superValidate(zod(podcastFeedSchema));
		const { findByText, getByLabelText, getByRole } = render(PodcastFeedForm, {
			props: { data: formData, submitFormAction: 'form-action' }
		});

		const feedInput = getByLabelText('RSS Feed URL');
		await fireEvent.input(feedInput, {
			target: { value: 'https://anchor.fm/s/ef8e417c/podcast/rss' }
		});
		const validateFeedButton = getByRole('button', { name: /test feed/i });
		await fireEvent.click(validateFeedButton);

		const validationMessage = await findByText('Feed okay!');
		expect(validationMessage).toBeInTheDocument();
	});
});
