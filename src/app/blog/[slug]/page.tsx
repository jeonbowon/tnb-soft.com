// src/app/blog/[slug]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost } from "@/lib/blogPosts";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({ params }: { params: any }) {
  // ✅ Next 버전에 따라 params가 Promise일 수 있으니 await로 흡수
  const resolvedParams = await params;

  const raw = resolvedParams?.slug;
  const slug =
    typeof raw === "string"
      ? raw
      : Array.isArray(raw)
      ? raw[0]
      : "";

  const post = getBlogPost(slug);
  if (!post) return notFound();

  return (
    <article className="prose max-w-none">
      <div className="not-prose mb-6">
        <Link className="text-sm text-zinc-600 hover:underline" href="/blog">
          ← 목록으로
        </Link>
      </div>

      <h1>{post.title}</h1>
      <p className="text-sm text-zinc-500">{post.date}</p>

      <div className="mt-6 whitespace-pre-wrap">{post.content.trim()}</div>
    </article>
  );
}
