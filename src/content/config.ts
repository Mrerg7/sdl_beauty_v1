import { defineCollection, z } from 'astro:content';

export const collections = {
  brand: defineCollection({
    type: 'data',
    schema: z.object({
      siteName: z.string(),
      tagline: z.string(),
      domain: z.string(),
      description: z.string(),
      city: z.string(),
      state: z.string(),
      email: z.string().email(),
      ogImage: z.string().url(),
      heroImages: z.array(z.string().url()),
      priceRange: z.string(),
    }),
  }),
};
