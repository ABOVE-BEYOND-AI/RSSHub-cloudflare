// _worker.js
import app from './dist/index.js';

// RSSHub’s export is a Hono app (or a fetch handler). This adapter works for both.
export default {
  fetch: (request, env, ctx) => app.fetch(request, env, ctx),
};
