import { defineCollection } from 'astro:content';
import { docsLoader, i18nLoader } from '@astrojs/starlight/loaders';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';
import { z } from 'astro/zod';

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        iso27001: z
          .array(
            z.object({
              id: z.string().describe('Clause or Annex A reference, e.g. "5.1", "A.5.9"'),
              description: z.string().describe('Short description in Basque'),
            }),
          )
          .optional(),
        compliance: z
          .object({
            clauses_pct: z.number().min(0).max(100).optional(),
            annexA_pct: z.number().min(0).max(100).optional(),
          })
          .optional(),
      }),
    }),
  }),
  i18n: defineCollection({ loader: i18nLoader(), schema: i18nSchema() }),
};
