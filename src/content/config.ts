// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const courses = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    // NOTE: entry.slug is derived from the file path; you usually don't need a slug field.
    parts: z.array(z.object({
      kind: z.enum(['text','video','audio','external']).optional(),
      wpPostId: z.number().optional(),
      wpMediaId: z.number().optional(),
      externalId: z.string().optional(),
    })).default([]),
  }),
});

export const collections = {
  courses,
};
