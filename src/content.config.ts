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

const menu = defineCollection({
  loader: file("src/content/menu.json"),
  schema: () => z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    href: z.string(),
    icon: z.string(),
    color: z.enum(["primary", "secondary", "tertiary"]),
    disabled: z.boolean().optional().default(false),
    order: z.number().optional().default(0),
  }),
});

export const collections = { sponsors, menu };

