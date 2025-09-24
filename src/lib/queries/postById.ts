import { gql } from 'graphql-request';
import { wp } from '@/lib/wp';

export const POST_BY_ID = gql`
  query PostById($id: ID!) {
    post(id: $id, idType: DATABASE_ID) {
      databaseId
      title
      content(format: RENDERED)  # ensure HTML for set:html
    }
  }
`;

type PostById = { post: { databaseId: number; title: string; content: string } | null };

export async function getPostById(id: number): Promise<PostById> {
  return wp<PostById>(POST_BY_ID, { id });
}
