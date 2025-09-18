export const POST_BY_ID = /* GraphQL */ `
query PostById($id: ID!) {
post(id: $id, idType: DATABASE_ID) {
databaseId
title
content
}
}
`;


export const MEDIA_BY_ID = /* GraphQL */ `
query MediaById($id: ID!) {
mediaItem(id: $id, idType: DATABASE_ID) {
databaseId
sourceUrl
mediaType
mimeType
mediaDetails { width height }
}
}
`;