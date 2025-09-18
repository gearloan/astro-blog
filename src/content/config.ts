---
import { getCollection } from 'astro:content';
import { wp, COURSE_QUERY, MEDIA_QUERY } from '../../../lib/wp';

export async function getStaticPaths() {
  const courses = await getCollection('courses');
  return courses.map((c) => ({ params: { slug: c.data.slug }, props: { course: c } }));
}

const { course } = Astro.props;
const parts = [];
for (const part of course.data.parts) {
  if (part.wpPostId) {
    const data = await wp(`
      query($id:ID!){ post(id:$id,idType:DATABASE_ID){ title content databaseId } }
    `, { id: part.wpPostId });
    parts.push({ ...part, content: data.post?.content ?? '' });
  } else if (part.wpMediaId) {
    const data = await wp(MEDIA_QUERY, { id: part.wpMediaId });
    parts.push({ ...part, media: data.mediaItem });
  } else {
    parts.push(part); // externalId, etc.
  }
}
---
<!-- Render title, estimated hours, category, then iterate parts:
     - kind==="text": render `content` (sanitize or use a safe HTML component)
     - kind==="video"/"audio": use `media.sourceUrl` or external player by `externalId` -->
