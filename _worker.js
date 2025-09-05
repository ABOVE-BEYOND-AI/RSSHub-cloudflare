// _worker.js
// Cloudflare Worker entry. Adds a KV-backed proxy for LinkedIn routes and
// falls back to the bundled RSSHub app for everything else.
import app from './dist/app.js';

const DEFAULT_UPSTREAM = 'https://rsshub.app';

async function fetchLinkedIn(request, env, ctx) {
  const url = new URL(request.url);
  const key = url.pathname + url.search;
  const upstreamBase = env.UPSTREAM_RSSHUB || DEFAULT_UPSTREAM;

  // If KV not bound, just proxy to upstream
  if (!env.LINKEDIN_CACHE) {
    const res = await fetch(upstreamBase + key, { headers: { 'user-agent': 'RSSHub-Worker/1.0' } });
    if (!res.ok) {
      return new Response(`Upstream error: ${res.status}`, { status: 502 });
    }
    const body = await res.text();
    return new Response(body, {
      headers: {
        'content-type': res.headers.get('content-type') || 'application/xml; charset=utf-8',
        'cache-control': 'public, max-age=120',
      },
    });
  }

  // Try KV first
  const cached = await env.LINKEDIN_CACHE.get(key);
  if (cached) {
    return new Response(cached, {
      headers: {
        'content-type': 'application/xml; charset=utf-8',
        'cache-control': 'public, max-age=60',
        'x-cache': 'HIT',
      },
    });
  }

  // Miss -> fetch upstream and populate KV
  const res = await fetch(upstreamBase + key, { headers: { 'user-agent': 'RSSHub-Worker/1.0' } });
  if (!res.ok) {
    return new Response(`Upstream error: ${res.status}`, { status: 502 });
  }
  const body = await res.text();
  ctx.waitUntil(env.LINKEDIN_CACHE.put(key, body, { expirationTtl: 300 }));
  return new Response(body, {
    headers: {
      'content-type': res.headers.get('content-type') || 'application/xml; charset=utf-8',
      'cache-control': 'public, max-age=60',
      'x-cache': 'MISS',
    },
  });
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Serve LinkedIn routes from KV proxy
    if (url.pathname.startsWith('/linkedin/')) {
      return fetchLinkedIn(request, env, ctx);
    }

    // Everything else -> RSSHub app
    return app.fetch(request, env, ctx);
  },

  // Optional: cron-based refresh of specific LinkedIn paths.
  // Set a Pages/Workers Cron Trigger (e.g., "*/5 * * * *") and define
  // a variable LINKEDIN_KEYS as comma-separated path list, e.g.:
  // "/linkedin/company/above-and-beyond-group/posts"
  async scheduled(controller, env, ctx) {
    const keys = (env.LINKEDIN_KEYS || '').split(',').map((s) => s.trim()).filter(Boolean);
    if (!keys.length || !env.LINKEDIN_CACHE) {
      return;
    }
    const upstreamBase = env.UPSTREAM_RSSHUB || DEFAULT_UPSTREAM;
    await Promise.all(
      keys.map(async (path) => {
        try {
          const res = await fetch(upstreamBase + path, { headers: { 'user-agent': 'RSSHub-Worker/1.0' } });
          if (res.ok) {
            const body = await res.text();
            await env.LINKEDIN_CACHE.put(path, body, { expirationTtl: 300 });
          }
        } catch (_) {}
      })
    );
  },
};
