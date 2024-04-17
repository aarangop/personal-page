import { r as redirect } from "../../../../../chunks/index.js";
const actions = {
  saveBlogPost: async ({ fetch, request }) => await fetch("/api/blogs", {
    method: "POST",
    body: await request.formData()
  }).then(async (data) => {
    const res = await data.json();
    console.log(res);
    throw redirect(303, `/admin/blog/${res.slug}`);
  })
};
export {
  actions
};
