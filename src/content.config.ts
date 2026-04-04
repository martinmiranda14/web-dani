import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const bio = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/bio' }),
  schema: z.object({
    lang: z.enum(['es', 'en']),
    quote: z.string(),
    p1: z.string(),
    p2: z.string(),
    p3: z.string(),
    photo: z.string(),
  }),
});

const trayectoria = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/trayectoria' }),
  schema: z.object({
    lang: z.enum(['es', 'en']),
    year: z.number(),
    order: z.number(),
    title: z.string(),
    desc: z.string(),
  }),
});

const logros = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/logros' }),
  schema: z.object({
    lang: z.enum(['es', 'en']),
    order: z.number(),
    icon: z.string(),
    tag: z.string(),
    title: z.string(),
    desc: z.string(),
  }),
});

const roles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/roles' }),
  schema: z.object({
    lang: z.enum(['es', 'en']),
    order: z.number(),
    icon: z.string(),
    title: z.string(),
    items: z.array(z.string()),
  }),
});

const alimapu = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/alimapu' }),
  schema: z.object({
    lang: z.enum(['es', 'en']),
    subtitle: z.string(),
    p1: z.string(),
    p2: z.string(),
    p3: z.string(),
    stats: z.array(z.object({
      value: z.string(),
      label: z.string(),
    })),
  }),
});

const contacto = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/contacto' }),
  schema: z.object({
    order: z.number(),
    platform: z.string(),
    url: z.string(),
    handle: z.string(),
    icon: z.enum(['instagram', 'linkedin', 'facebook']),
  }),
});

export const collections = { bio, trayectoria, logros, roles, alimapu, contacto };
