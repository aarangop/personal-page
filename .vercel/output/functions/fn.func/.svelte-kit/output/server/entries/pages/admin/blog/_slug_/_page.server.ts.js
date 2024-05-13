import { a as getBlogPostBySlug } from "../../../../../chunks/blogs.js";
const load = async ({ params }) => ({
  post: await getBlogPostBySlug(params.slug)
});
export {
  load
};
