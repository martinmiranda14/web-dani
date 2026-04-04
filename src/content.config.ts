import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const bio = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/bio' }),
  schema: z.object({
    quote_es: z.string(),
    quote_en: z.string(),
    p1_es: z.string(),
    p1_en: z.string(),
    p2_es: z.string(),
    p2_en: z.string(),
    p3_es: z.string(),
    p3_en: z.string(),
    photo: z.string(),
  }),
});

const trayectoria = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/trayectoria' }),
  schema: z.object({
    year: z.number(),
    order: z.number(),
    title_es: z.string(),
    title_en: z.string(),
    desc_es: z.string(),
    desc_en: z.string(),
  }),
});

const logros = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/logros' }),
  schema: z.object({
    order: z.number(),
    icon: z.string(),
    tag_es: z.string(),
    tag_en: z.string(),
    title_es: z.string(),
    title_en: z.string(),
    desc_es: z.string(),
    desc_en: z.string(),
  }),
});

const roles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/roles' }),
  schema: z.object({
    order: z.number(),
    icon: z.string(),
    title_es: z.string(),
    title_en: z.string(),
    items_es: z.array(z.string()),
    items_en: z.array(z.string()),
  }),
});

const alimapu = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/alimapu' }),
  schema: z.object({
    subtitle_es: z.string(),
    subtitle_en: z.string(),
    p1_es: z.string(),
    p1_en: z.string(),
    p2_es: z.string(),
    p2_en: z.string(),
    p3_es: z.string(),
    p3_en: z.string(),
    stats: z.array(z.object({
      value: z.string(),
      label_es: z.string(),
      label_en: z.string(),
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
