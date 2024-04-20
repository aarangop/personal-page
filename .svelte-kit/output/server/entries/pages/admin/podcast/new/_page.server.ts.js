import "../../../../../chunks/prisma.js";
import { r as redirect } from "../../../../../chunks/index.js";
const actions = {
  createFeed: async ({ request, fetch }) => await fetch("/api/podcasts", { method: "POST", body: await request.formData() }).then((response) => response.json()).then((data) => {
    throw redirect(303, `/podcast/${data.slug}`);
  }),
  updateFeed: async ({ request, fetch }) => await fetch("/api/podcasts", { method: "PUT", body: await request.formData() }).then((response) => response.json()).then((data) => {
    throw redirect(303, `/podcast/${data.slug}`);
  })
};
export {
  actions
};
