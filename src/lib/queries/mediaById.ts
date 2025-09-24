import { gql } from 'graphql-request';
import { wp } from '@/lib/wp';

export const MEDIA_BY_ID = gql`
  query MediaById($id: ID!) {
    mediaItem(id: $id, idType: DATABASE_ID) {
      databaseId
      sourceUrl
      mimeType
    }
  }
`;

type MediaById = { mediaItem: { databaseId: number; sourceUrl: string; mimeType: string } | null };

export async function getMediaById(id: number): Promise<MediaById> {
  return wp<MediaById>(MEDIA_BY_ID, { id });
}
