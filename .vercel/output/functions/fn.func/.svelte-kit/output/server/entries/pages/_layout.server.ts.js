import "../../chunks/index3.js";
const load = async (event) => {
  const session = await event.locals.auth();
  return { session };
};
export {
  load
};
