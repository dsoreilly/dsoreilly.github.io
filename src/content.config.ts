import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const notes = defineCollection({
  // Load Markdown and MDX files in the `src/content/notes/` directory.
  loader: glob({ base: "./src/content/notes", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: () =>
    z.object({
      // Transform string to Date object
      date: z.coerce.date(),
    }),
});

export const collections = { notes };
