import { a as getBlogPostBySlug } from "../../../../chunks/blogs.js";
const load = async ({ params, fetch }) => ({
  blogPost: await getBlogPostBySlug(params.slug)
});
export {
  load
};
