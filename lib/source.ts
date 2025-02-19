import { docs, meta, blog as blogPosts, play as play } from "@/.source";
import { createMDXSource } from "fumadocs-mdx";
import { loader } from "fumadocs-core/source";

export const source = loader({
  baseUrl: "/docs",
  source: createMDXSource(docs, meta),
});

export const blog = loader({
  baseUrl: "/blog",
  source: createMDXSource(blogPosts, []),
});

export const playground = loader({
  baseUrl: "/playground",
  source: createMDXSource(play, []),
});

