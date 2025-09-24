// src/lib/fetchPosts.js
import { getApiUrl } from '@/lib/wp';
const API_URL = getApiUrl();

/**
 * @param {{limit?: number, tag?: string|null, includeFuture?: boolean}} [opts]
 * @returns {Promise<any[]>}
 */
export async function fetchPosts(opts = {}) {
  const { limit = 20, tag = null, includeFuture = false } = opts;

  const QUERY = /* GraphQL */ `
    query Posts($first: Int!, $tagSlugs: [String], $status: PostStatusEnum, $stati: [PostStatusEnum]) {
      posts(
        first: $first
        where: {
          orderby: { field: DATE, order: DESC }
          tagSlugIn: $tagSlugs
          status: $status      # single status
          stati:  $stati       # multiple statuses (WPGraphQL uses "stati")
        }
      ) {
        nodes {
          id
          slug
          title
          excerpt
          date
          author { node { name } }
          featuredImage {
            node {
              sourceUrl
              mediaDetails { sizes { name sourceUrl } }
            }
          }
          magazinePresentationOptions {
            presentationSlots
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

  // Use `status` for single, `stati` for multiple. Nulls are ignored by WPGraphQL.
  const variables = {
    first: limit,
    tagSlugs: tag ? [String(tag)] : null,
    status: includeFuture ? null : 'PUBLISH',
    stati: includeFuture ? ['PUBLISH', 'FUTURE'] : null,
  };

  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: QUERY, variables }),
  });

  if (!res.ok) {
    const preview = await res.text().catch(() => '');
    throw new Error(`WPGraphQL HTTP ${res.status}: ${preview.slice(0, 300)}`);
  }

  const json = await res.json();
  if (json?.errors?.length) {
    throw new Error(`WPGraphQL: ${json.errors[0].message}`);
  }

  const allPosts = json?.data?.posts?.nodes ?? [];

  // Editorial bucket = posts without magazine presentation slots
  if (!tag) {
    const editorial = allPosts.filter(
      (p) =>
        !Array.isArray(p?.magazinePresentationOptions?.presentationSlots) ||
        p.magazinePresentationOptions.presentationSlots.length === 0
    );
    return editorial.slice(0, limit);
  }

  // Magazine pages (pilot/turbine): already filtered/limited server-side
  return allPosts;
}
