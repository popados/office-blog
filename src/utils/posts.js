import fs from "fs";
import path from "path";
import { parseFrontmatter } from "./parseFrontmatter.js";

const postsDir = path.join(process.cwd(), "src/posts");

export function getAllPosts() {
  return fs
    .readdirSync(postsDir)
    .filter(f => f.endsWith(".md"))
    .map(filename => {
      const slug = filename.replace(".md", "");
      const raw = fs.readFileSync(path.join(postsDir, filename), "utf-8");
      const { data, content } = parseFrontmatter(raw);
      return { slug, data, content };
    })
    .sort((a, b) => (a.data.date < b.data.date ? 1 : -1));
}

export function getPostBySlug(slug) {
  return getAllPosts().find(p => p.slug === slug) ?? null;
}
