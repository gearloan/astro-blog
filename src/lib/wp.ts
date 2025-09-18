const WP_ENDPOINT = import.meta.env.PUBLIC_WP_GRAPHQL_ENDPOINT;


// naive in-memory cache used at build time only
const cache = new Map<string, any>();


function key(q: string, v?: Record<string, any>) {
return q + '::' + JSON.stringify(v ?? {});
}


export async function wp<T = any>(query: string, variables?: Record<string, any>): Promise<T> {
const k = key(query, variables);
if (cache.has(k)) return cache.get(k);
const res = await fetch(WP_ENDPOINT, {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ query, variables }),
});
if (!res.ok) throw new Error(`WPGraphQL ${res.status}`);
const json = await res.json();
if (json.errors) throw new Error(JSON.stringify(json.errors));
cache.set(k, json.data);
return json.data;
}