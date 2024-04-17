const load = async ({ fetch }) => ({
  podcastFeeds: await fetch("/api/podcasts").then(async (data) => await data.json())
});
export {
  load
};
