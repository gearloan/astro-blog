// src/lib/wp.ts
type Vars = Record<string, any>;
type GraphQLResponse<T> = { data?: T; errors?: Array<{ message: string }> };

export function getApiUrl(): string {
  const url = import.meta.env.PUBLIC_WP_GRAPHQL_ENDPOINT;
  if (!url) throw new Error('Missing PUBLIC_WP_GRAPHQL_ENDPOINT in .env');
  return url;
}

/** Deep, stable stringify for cache keys (sorts all object keys recursively). */
function stableStringify(input: any): string {
  if (input === null || typeof input !== 'object') return JSON.stringify(input);
  if (Array.isArray(input)) return `[${input.map(stableStringify).join(',')}]`;
  const keys = Object.keys(input).sort();
  return `{${keys.map(k => JSON.stringify(k) + ':' + stableStringify(input[k])).join(',')}}`;
}

/** Normalize a query to a string (supports plain strings or GraphQL DocumentNodes). */
function normalizeQuery(q: any): string {
  if (typeof q === 'string') return q;
  // graphql-tag / codegen doc nodes often carry .loc.source.body
  const body = q?.loc?.source?.body;
  if (typeof body === 'string') return body;
  throw new Error('wp(): query must be a string or a DocumentNode with loc.source.body');
}

/** Naive in-memory cache (process-local; good for build/SSR). */
const cache = new Map<string, any>();
function key(q: any, v?: Vars) {
  return `${normalizeQuery(q)}::${v ? stableStringify(v) : ''}`;
}

export function clearWpCache() {
  cache.clear();
}

type WpOptions = {
  headers?: Record<string, string>;
  noCache?: boolean;
};

export async function wp<T = any>(
  query: any,
  variables?: Vars,
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
    body: JSON.stringify({ query: normalizeQuery(query), variables }),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`WPGraphQL HTTP ${res.status}: ${text.slice(0, 300)}`);
  }

  const json = (await res.json()) as GraphQLResponse<T>;

  if (json.errors?.length) {
    throw new Error(`WPGraphQL: ${json.errors[0].message}`);
  }
  if (!json.data) throw new Error('WPGraphQL: empty data');

  if (!options.noCache) cache.set(k, json.data);
  return json.data;
}