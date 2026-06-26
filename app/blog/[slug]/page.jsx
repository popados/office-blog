import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/src/utils/posts.js";
import BlogPost from "@/src/components/BlogPost.jsx";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map(post => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.data.title} — OfficeEssentials`,
    description: post.data.excerpt,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();
  return <BlogPost post={post} />;
}
