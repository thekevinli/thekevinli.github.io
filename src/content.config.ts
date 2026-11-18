import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One Markdown file per post in src/content/blogs.
const blogs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blogs' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    draft: z.boolean().default(false),
    links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
  }),
});

export const collections = { blogs };
