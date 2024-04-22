import { p as prisma } from "../../../../../chunks/prisma.js";
import { B as BlogPostDisplaySchema } from "../../../../../chunks/schemas.js";
import { e as error, j as json } from "../../../../../chunks/index.js";
const GET = async ({ params }) => {
  const blogPost = await prisma.blogPost.findUnique({
    where: {
      slug: params.slug
    }
  });
  if (!blogPost) {
    error(400, { message: `Blog post with slug ${params.slug} not found` });
  }
  const markdown = await fetch(blogPost.fileUrl).then((res) => res.text()).then((text) => text);
  return json(
    BlogPostDisplaySchema.parse({
      ...blogPost,
      markdown
    })
  );
};
export {
  GET
};
