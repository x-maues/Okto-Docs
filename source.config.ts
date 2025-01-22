import { defineConfig, defineCollections } from "fumadocs-mdx/config";
import { remarkMermaid } from '@theguild/remark-mermaid';

export const docs = defineCollections({
  type: "doc",
  dir: "content/docs",
});

export const meta = defineCollections({
  type: "meta",
  dir: "content/docs",
});

export const blog = defineCollections({
  type: "doc",
  dir: "content/blog",
});

export const play = defineCollections({
  type: "doc",
  dir: "content/playground",
});


export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkMermaid],
  },
});