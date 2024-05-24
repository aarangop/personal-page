import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
	console.log('Start seeding');

	const slug = 'test-post';
	const blogPost = await prisma.blogPost.upsert({
		where: { slug },
		update: {},
		create: {
			title: 'The Princess of Mismatched Dreams',
			slug,
			subtitle: 'A tale of courage, unicorns, rainbows, and swords',
			fileUrl:
				'https://storage.googleapis.com/andresap-perspage-dev/testing/The%20Princess%20of%20Mismatched%20Dreams.md',
			imageUrl:
				'https://storage.googleapis.com/andresap-perspage-dev/testing/Gemini_Generated_Image_ocpu86ocpu86ocpu.jpeg',
			dateCreated: new Date()
		}
	});

	const podcastFeedSlug = 'test-podcast-feed';
	await prisma.podcastFeed.upsert({
		where: { slug: podcastFeedSlug },
		update: {},
		create: {
			title: 'This is a test podcast feed',
			slug: podcastFeedSlug,
			rssFeed: 'https://anchor.fm/s/ef8e417c/podcast/rss'
		}
	});

	console.log(blogPost);
}

main()
	.catch(async (e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
