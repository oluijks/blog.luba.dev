import { defineConfig, z } from 'newmd';
import { SITE } from "./src/config";

export default defineConfig({
  path: "./src/data/blog",
  schemas: { // Copy the schema from the content config.
    blog: z.object({
      title: z.string(),
      author: z.string().default(SITE.author),
      pubDatetime: z.date(),
      slug: z.string().optional().default("change-me"),
      featured: z.boolean().optional().default(false),
      draft: z.boolean().optional().default(true),
      tags: z.array(z.string()).default(["personal", "programming"]),
      description: z.string().default("A brief description of the blog post."),
    }),
  },
});
