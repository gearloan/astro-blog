// src/lib/wp.ts

/** Resolve the endpoint from .env at runtime (safe for dev/SSR/build) */
export function getApiUrl(): string {
  const url = import.meta.env.PUBLIC_WP_GRAPHQL_ENDPOINT;
  if (!url) throw new Error('Missing PUBLIC_WP_GRAPHQL_ENDPOINT in .env');
  return url;
}

/** Naive in‑memory cache (good for build time). */
const cache = new Map<string, any>();

/** Stable key: query + sorted variables */
function key(q: string, v?: Record<string, any>) {
  const stable = v
    ? JSON.stringify(v, Object.keys(v).sort())
    : '';
  return `${q}::${stable}`;
}

/** Optional: clear cache (handy in dev) */
export function clearWpCache() {
  cache.clear();
}

type GraphQLResponse<T> = { data?: T; errors?: Array<{ message: string }> };

type WpOptions = {
  /** Extra headers (e.g., Authorization) */
  headers?: Record<string, string>;
  /** Bypass in‑memory cache when true */
  noCache?: boolean;
};

/**
 * Main GraphQL helper.
 * - Caches by (query, variables) unless `noCache` is true
 * - Throws helpful errors (HTTP status + first GraphQL error)
 */
export async function wp<T = any>(
  query: string,
  variables?: Record<string, any>,
  options: WpOptions = {}
): Promise<T> {
  const k = key(query, variables);

  if (!options.noCache && cache.has(k)) {
    return cache.get(k);
  }

  const res = await fetch(getApiUrl(), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers ?? {}),
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    // include a short preview of body to aid debugging
    throw new Error(`WPGraphQL HTTP ${res.status}: ${text.slice(0, 300)}`);
  }

  const json = (await res.json()) as GraphQLResponse<T>;

  if (json.errors?.length) {
    // surface only the first error succinctly
    throw new Error(`WPGraphQL: ${json.errors[0].message}`);
  }

  if (!json.data) {
    throw new Error('WPGraphQL: empty data');
  }

  if (!options.noCache) cache.set(k, json.data);
  return json.data;
}
