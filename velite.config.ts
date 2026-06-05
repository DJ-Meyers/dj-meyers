import fs from "node:fs";
import path from "node:path";
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
  // Next.js 13's SWC can't parse the `with { type: 'json' }` import attribute
  // that velite emits in its generated index. Strip it after every build so
  // dev-mode watch rebuilds don't re-introduce the syntax error.
  complete: () => {
    const indexPath = path.resolve(process.cwd(), ".velite/index.js");
    const content = fs.readFileSync(indexPath, "utf8");
    fs.writeFileSync(
      indexPath,
      content.replace(/ with \{ type: 'json' \}/g, "")
    );
  },
});
