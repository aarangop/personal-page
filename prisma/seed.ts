import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
	console.log('Start seeding');

	const slug = 'this-is-an-awesome-test-post';
	const blogPost = await prisma.blogPost.upsert({
		where: { slug },
		update: {},
		create: {
			title: 'This is an awesome test post',
			slug,
			subtitle: 'This is a subtitle',
			fileUrl:
				'https://storage.googleapis.com/andresap-perspage-dev/testing/Learning%20Machine%20Learning.md',
			imageUrl:
				'https://storage.googleapis.com/andresap-perspage-dev/testing/Pasted%20image%2020221121144208.png',
			dateCreated: new Date()
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
