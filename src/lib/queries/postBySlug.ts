import { request, gql } from 'graphql-request';

import { getApiUrl } from '@/lib/wp';
const API_URL = getApiUrl();

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
          mediaDetails {
            sizes {
              name
              sourceUrl
            }
          }
        }
      }
      author { node { name } }
      tags { nodes { slug name } }
    }
  }
`;

export async function getPost(slug: string) {
  return request(API_URL, POST_BY_SLUG, { slug });
}