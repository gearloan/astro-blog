export async function fetchPosts(limit = 20) {
  const res = await fetch('https://aopa-porkbuns.sbs/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
        query {
             posts(first: 100) {
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
                }
              }
              magazinePresentationOptions {
                presentationslots
              }
            }
          }
        }
      `
    })
  });

  const json = await res.json();
  console.dir(json, { depth: null }); // debug

  if (!json.data || !json.data.posts) {
    throw new Error('Invalid GraphQL response: ' + JSON.stringify(json));
  }

  const filtered = json.data.posts.nodes.filter(
    post => !post.magazinePresentationOptions?.presentationslots
  );

  return filtered.slice(0, limit);



  // Only return posts that are NOT magazine posts
  return json.data.posts.nodes.filter(
    post => !post.magazinePresentationOptions?.presentationslots
  );
}

export async function fetchMagazinePosts(limit = 10) {
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
              magazinePresentationOptions {
                presentationslots
                teaserLine1
                teaserLine2
                teaserLine3
                heroTitleLine1
                heroTitleLine2
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
  })
  


  const json = await res.json();

  if (!json.data || !json.data.posts) {
    throw new Error('Invalid GraphQL response: ' + JSON.stringify(json));
  }

  // 👇 Put this block right before returning
  const allPosts = json.data.posts.nodes;
  for (const post of allPosts) {
    console.log(post.title, post.magazinePresentationOptions?.presentationslots);
  }

  return allPosts;
}
