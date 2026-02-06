// app/blog/page.tsx
import Link from "next/link";
import { blogPosts } from "@/lib/blogPosts";

export default function BlogPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold">기술블로그</h1>

      <ul className="mt-6 space-y-3">
        {blogPosts.map((p) => (
          <li key={p.slug} className="rounded-xl border border-zinc-200 p-4">
            <Link className="text-lg font-medium hover:underline" href={`/blog/${p.slug}`}>
              {p.title}
            </Link>
            <div className="mt-1 text-sm text-zinc-500">{p.date}</div>
            {p.summary ? <div className="mt-2 text-sm text-zinc-600">{p.summary}</div> : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
