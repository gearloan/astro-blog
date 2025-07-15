// src/lib/fetchPosts.js
export async function fetchPosts() {
  const res = await fetch('http://167.99.153.17/wp-json/wp/v2/posts?_embed');
  if (!res.ok) throw new Error('Failed to fetch posts');
  const posts = await res.json();

  return posts.map((post) => {
    const featuredImage =
      post._embedded?.['wp:featuredmedia']?.[0]?.media_details?.sizes?.thumbnail?.source_url ?? null

    return {
      ...post,
      featured_image: featuredImage,
    };
  });
}