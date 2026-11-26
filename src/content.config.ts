import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const works = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/works' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      year: z.number(),
      medium: z.string().default('Oil on canvas, impasto'),
      theme: z.string().optional(),
      statement: z.string().optional(),
      dimensions: z.string().optional(),
      image: image(),
      alt: z.string(),
      details: z.array(z.object({ image: image(), alt: z.string() })).default([]),
      status: z.enum(['available', 'sold', 'commission', 'private']).default('available'),
      featured: z.boolean().default(false),
      order: z.number().default(0),
    }),
});

export const collections = { works };
