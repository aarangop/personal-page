import prisma from '$lib/prisma';
import { BlogPostDisplaySchema, BlogPostSchema } from '$lib/schemas';
import { error, json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ params }) => {
	const blogPost = await prisma.blogPost.findUnique({
		where: {
			slug: params.slug
		}
	});
	if (!blogPost) {
		error(400, { message: `Blog post with slug ${params.slug} not found` });
	}
	const markdown = await fetch(blogPost.fileUrl)
		.then((res) => res.text())
		.then((text) => text);
	return json(
		BlogPostDisplaySchema.parse({
			...blogPost,
			markdown
		})
	);
};
