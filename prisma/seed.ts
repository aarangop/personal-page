import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// async function main() {
// 	console.log('Start seeding');

// 	// await prisma.podcastFeeds
// 	// 	.create({
// 	// 		data: {
// 	// 			name: 'Dejémonos de vainas',
// 	// 			rssFeed: 'https://anchor.fm/s/ef8e417c/podcast/rss'
// 	// 		}
// 	// 	})
// 	// 	.catch((e) => {
// 	// 		console.log(e);
// 	// 	});

// 	const allPosts = await prisma.podcastFeeds.findMany({});
// 	console.dir(allPosts);
// }

// main()
// 	.catch(async (e) => {
// 		console.error(e);
// 		process.exit(1);
// 	})
// 	.finally(async () => {
// 		await prisma.$disconnect();
// 	});
