import app from './lib/app.js';  // RSSHub app entry

export default {
  async fetch(request, env, ctx) {
    return app.callback()(request, env, ctx);
  }
};
