export async function fetchPosts() {
  const res = await fetch('http://167.99.153.17/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
        query {
          posts(first: 10) {
            nodes {
              id
              slug
              title
              excerpt
              date
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
