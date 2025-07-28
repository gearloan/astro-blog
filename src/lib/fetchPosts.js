const API_URL = 'https://aopa-porkbuns.sbs/graphql';

export async function fetchPosts({ limit = 20, tag = null } = {}) {
  const isEditorial = !tag;

  const query = `
    query {
      posts(first: 100${tag ? `, where: { tagSlugIn: ["${tag}"] }` : ''}) {
        nodes {
          id
          slug
          title
          excerpt
          date
          author {
            node {
              name
            }
          }
          featuredImage {
            node {
              sourceUrl
              mediaDetails {
                sizes {
                  name
                  sourceUrl
                }
              }
            }
          }
          magazinePresentationOptions {
            presentationslots
            teaserLine1
            teaserLine2
            teaserLine3
            heroTitleLine1
            heroTitleLine2
          }
        }
      }
    }
  `;

  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  });

  const json = await res.json();

  if (!json.data || !json.data.posts) {
    throw new Error('Invalid GraphQL response: ' + JSON.stringify(json));
  }

  const allPosts = json.data.posts.nodes;

  if (isEditorial) {
    // Editorial = posts with no magazine presentation options
    return allPosts
      .filter(post => !post.magazinePresentationOptions?.presentationslots)
      .slice(0, limit);
  }

  // Magazine = return posts with the given tag (e.g., "pilot", "turbine")
  return allPosts.slice(0, limit);
}
