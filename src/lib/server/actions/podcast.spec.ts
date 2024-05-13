import { describe, afterEach, it, vi, expect, beforeAll, afterAll } from 'vitest';
import { getPodcastFeeds, getPodcastFeedsWithMetaData } from './podcast';
import { setupServer } from 'msw/node';
import { HttpResponse, http } from 'msw';
import prisma from '$lib/__mocks__/prisma';
import * as fs from 'fs';

vi.mock('../../prisma');

const handlers = [
	http.get('https://test.feed.rss', () => {
		console.log(process.cwd());
		const feed = fs.readFileSync('./tests/assets/test-podcast-1.rss', 'utf-8');
		return HttpResponse.xml(feed);
	}),
	http.get('https://test.feed-2.rss', () => {
		const feed = fs.readFileSync('./tests/assets/test-podcast-2.rss', 'utf-8');
		return HttpResponse.xml(feed);
	})
];
const server = setupServer(...handlers);

describe('getPodcasts', () => {
	afterEach(() => {
		vi.clearAllMocks;
	});

	it('should return a list of podcasts', async () => {
		const podcasts = [
			{ id: '1', slug: 'test-podcast', rssFeed: 'https://test.feed.rss', title: 'Test Podcast' },
			{
				id: '2',
				slug: 'test-podcast-2',
				rssFeed: 'https://test.feed-2.rss',
				title: 'Test Podcast 2'
			}
		];
		prisma.podcastFeed.findMany.mockResolvedValue(podcasts);
		const result = await getPodcastFeeds();

		expect(result).toStrictEqual(podcasts);
	});
});

describe('getPodcastsWithMetaData', async () => {
	beforeAll(() => server.listen());
	afterAll(() => server.close());
	afterEach(() => server.resetHandlers());

	it('should return a list of podcast with an image url', async () => {
		prisma.podcastFeed.findMany.mockResolvedValue([
			{ id: '1', slug: 'test-podcast', rssFeed: 'https://test.feed.rss' },
			{ id: '2', slug: 'test-podcast-2', rssFeed: 'https://test.feed-2.rss' }
		]);
		const podcasts = await getPodcastFeedsWithMetaData();
		const imageUrls = ['https://podcast-1.image.url.com', 'https://podcast-2.image.url.com'];
		expect(podcasts.map((podcast) => podcast.imgUrl)).toStrictEqual(imageUrls);
	});

	it('should return objects with number of episodes', async () => {
		prisma.podcastFeed.findMany.mockResolvedValue([
			{ id: '1', slug: 'test-podcast', rssFeed: 'https://test.feed.rss' },
			{ id: '2', slug: 'test-podcast-2', rssFeed: 'https://test.feed-2.rss' }
		]);
		const podcasts = await getPodcastFeedsWithMetaData();
		const numberOfEpisodes = [4, 3];
		expect(podcasts.map((podcast) => podcast.numberOfEpisodes)).toStrictEqual(numberOfEpisodes);
	});
});
