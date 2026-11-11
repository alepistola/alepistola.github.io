import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date().optional(),
    status: z.enum(['draft', 'wip', 'published']).default('draft'),
    visible: z.boolean().default(true),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '*.md', base: './content' }),
});

export const collections = { posts, pages };
