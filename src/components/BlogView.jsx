import { useState } from "react";
import { parseFrontmatter } from "../utils/parseFrontmatter.js";
import BlogPost from "./BlogPost.jsx";

// Auto-import all markdown files in src/posts/ as raw strings
const rawFiles = import.meta.glob("../posts/*.md", { query: "?raw", import: "default", eager: true });

// Parse each file into { slug, data, content }
const POSTS = Object.entries(rawFiles)
  .map(([path, raw]) => {
    const slug = path.replace("../posts/", "").replace(".md", "");
    const { data, content } = parseFrontmatter(raw);
    return { slug, data, content };
  })
  .sort((a, b) => (a.data.date < b.data.date ? 1 : -1));

function BlogCard({ post, onClick }) {
  const { data } = post;
  return (
    <article className="blog-card" onClick={onClick} style={{ cursor: "pointer" }}>
      <div className="blog-img" style={{ background: data.bg || "#f3f4f6" }}>{data.icon}</div>
      <div className="blog-body">
        <p className="blog-tag">{data.tag}</p>
        <h3 className="blog-title">{data.title}</h3>
        <p className="blog-excerpt">{data.excerpt}</p>
        <div className="blog-footer">
          <span className="blog-meta">{data.date} · {data.readTime}</span>
          <span className="read-link">Read →</span>
        </div>
      </div>
    </article>
  );
}

export default function BlogView() {
  const [activePost, setActivePost] = useState(null);

  if (activePost) {
    return (
      <BlogPost
        post={activePost}
        onBack={() => {
          setActivePost(null);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />
    );
  }

  return (
    <div className="blog-view">
      <div className="page-header">
        <h1>Latest Reviews &amp; Articles</h1>
        <h2>Honest, in-depth guides to help you build a workspace that actually works for you.</h2>
      </div>
      <div className="page-content">
        <div className="blog-grid">
          {POSTS.map(post => (
            <BlogCard
              key={post.slug}
              post={post}
              onClick={() => {
                setActivePost(post);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
