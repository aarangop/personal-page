import { render, fireEvent } from '@testing-library/svelte';
import { describe, expect, it, test } from 'vitest';
import PodcastFeedForm from './PodcastFeedForm.svelte';

describe('PodcastFeedForm', async () => {
	it('should validate the title', async () => {
		const { getByLabelText, getByText } = render(PodcastFeedForm);
		const titleInput = getByLabelText('Title');

		// Enter an invalid string in the title input
		fireEvent.input(titleInput, { target: { value: '*&hello mama' } });

		// Assert that a validation error message appears
		expect(getByText('Invalid title')).toBeInTheDocument();
	});
});
