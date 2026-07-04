import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

const sponsors = defineCollection({
  loader: file("src/content/sponsors.json"),
  schema: ({ image }) => z.object({
    id: z.string(),
    name: z.string(),
    logo: image(),
  }),
});

export const collections = { sponsors };

