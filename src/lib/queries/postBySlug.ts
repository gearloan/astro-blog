import { gql } from 'graphql-request';
import { wp } from '@/lib/wp';

export const POST_BY_SLUG = gql`
  query PostBySlug($slug: String!) {
    postBy(slug: $slug) {
      id
      title(format: RENDERED)
      date
      content(format: RENDERED)
      formatSlug
      videoUrl
      featuredImage {
        node {
          altText
          sourceUrl
          mediaDetails { sizes { name sourceUrl } }
        }
      }
      presentationSettings {
        presentationSlots        # => e.g. ["hero","featured","teaser"]
        proseStyle
      }
      author { node { name } }
      tags { nodes { slug name } }

      # Fallback for prose style resolution
      categories { nodes { slug name } }
    }
  }
`;

type PostBySlug = { postBy: any | null };

export async function getPost(slug: string): Promise<PostBySlug> {
  return wp<PostBySlug>(POST_BY_SLUG, { slug });
}