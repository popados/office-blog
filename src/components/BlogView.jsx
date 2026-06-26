import Link from "next/link";
import { getAllPosts } from "../utils/posts.js";

function BlogCard({ post }) {
  const { data, slug } = post;
  return (
    <Link href={`/blog/${slug}`} className="blog-card-link">
      <article className="blog-card">
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
    </Link>
  );
}

export default function BlogView() {
  const posts = getAllPosts();

  return (
    <div className="blog-view">
      <div className="page-header">
        <h1>Latest Reviews &amp; Articles</h1>
        <h2>Honest, in-depth guides to help you build a workspace that actually works for you.</h2>
      </div>
      <div className="page-content">
        <div className="blog-grid">
          {posts.map(post => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
