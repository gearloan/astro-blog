// src/lib/fetchPosts.js
export async function fetchPosts() {
  const res = await fetch("http://167.99.153.17/wp-json/wp/v2/posts/");
  if (!res.ok) {
    throw new Error(`Failed to fetch posts: ${res.status}`);
  }
  return await res.json();
}
