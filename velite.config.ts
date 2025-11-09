import { defineConfig, defineCollection, s } from "velite";

const posts = defineCollection({
  name: "Post",
  pattern: "**/*.mdx",
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(99),
      description: s.string().max(999).optional(),
      date: s.isodate(),
      author: s.string().optional(),
      tags: s.array(s.string()).optional(),
      published: s.boolean().default(true),
      body: s.mdx(),
    })
    .transform((data) => ({
      ...data,
      permalink: `/${data.slug}`,
    })),
});

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { posts },
  mdx: {
    rehypePlugins: [],
    remarkPlugins: [],
  },
});
