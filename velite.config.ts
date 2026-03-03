import rehypePrettyCode from "rehype-pretty-code";
import { defineCollection, defineConfig, s } from "velite";

const posts = defineCollection({
  name: "Post",
  pattern: "posts/**/*.mdx",
  schema: s.object({
    title: s.string(),
    slug: s.slug("posts"),
    date: s.isodate(),
    description: s.string().optional(),
    draft: s.boolean().default(false),
    tags: s.array(s.string()).default([]),
    metadata: s.metadata(),
    excerpt: s.excerpt(),
    body: s.mdx(),
  }),
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
    rehypePlugins: [
      [rehypePrettyCode, { theme: "github-dark" }],
    ],
  },
});
