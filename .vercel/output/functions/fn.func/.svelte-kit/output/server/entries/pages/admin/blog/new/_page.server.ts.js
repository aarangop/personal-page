import { c as createNewBlogPost } from "../../../../../chunks/blogs.js";
const actions = {
  default: async (event) => await createNewBlogPost(event, "/admin/blog/:slug")
};
export {
  actions
};
