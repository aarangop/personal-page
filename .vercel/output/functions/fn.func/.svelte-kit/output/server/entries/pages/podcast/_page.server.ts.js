const load = async ({ fetch }) => ({
  podcastFeeds: await fetch("/api/podcasts").then((res) => res.json()).then((data) => data)
});
export {
  load
};
