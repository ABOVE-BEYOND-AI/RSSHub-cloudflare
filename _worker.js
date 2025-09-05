// _worker.js
import app from './dist/app.js';

// RSSHub’s export is a Hono app (or a fetch handler). This adapter works for both.
export default { fetch: app.fetch };
