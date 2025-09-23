import { gql } from 'graphql-request';
import { wp } from '@/lib/wp';

export const POST_BY_SLUG = gql`
  query PostBySlug($slug: String!) {
    postBy(slug: $slug) {
      id
      title
      date
      content
      formatSlug
      videoUrl
      featuredImage {
        node {
          altText
          sourceUrl
          mediaDetails { sizes { name sourceUrl } }
        }
      }
      magazinePresentationOptions {
        presentationSlots        # => e.g. ["hero","featured","teaser"]
      }
      author { node { name } }
      tags { nodes { slug name } }

      # Fallback for prose style resolution
      categories { nodes { slug name } }

      # Keep this if it exists in your schema; remove if it errors
      presentationSettings { proseStyle }
    }
  }
`;

type PostBySlug = { postBy: any | null };

export async function getPost(slug: string): Promise<PostBySlug> {
  return wp<PostBySlug>(POST_BY_SLUG, { slug });
}
