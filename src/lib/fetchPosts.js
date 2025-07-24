export async function fetchPosts(limit = 10) {
  const res = await fetch('https://aopa-porkbuns.sbs/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
        query {
          posts(first: ${limit}) {
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
              postPresentationSettings {
                proseStyle
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
            }
          }
        }
      `
    })
  });

  const json = await res.json();
  return json.data.posts.nodes;
}
