import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function BlogPost({ post, onBack }) {
  const { data, content } = post;

  return (
    <div className="blog-post-view">
      <div className="blog-post-header" style={{ background: data.bg || "#f3f4f6" }}>
        <div className="blog-post-header-inner">
          <button className="back-btn" onClick={onBack}>← Back to Blog</button>
          <span className="blog-tag" style={{ marginBottom: "1rem", display: "inline-block" }}>{data.tag}</span>
          <h1 className="blog-post-title">{data.title}</h1>
          <div className="blog-post-meta">
            <span>{data.date}</span>
            <span>·</span>
            <span>{data.readTime}</span>
          </div>
        </div>
      </div>

      <div className="blog-post-body">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
