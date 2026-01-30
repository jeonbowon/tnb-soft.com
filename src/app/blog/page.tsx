import Link from "next/link";

const posts = [
  { slug: "gem-intro", title: "GEM/SECS 통신 개요", date: "2026-01-30" },
  { slug: "cim-field-notes", title: "CIM 실무 노트", date: "2026-01-30" },
];

export default function BlogPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold">기술블로그</h1>
      <ul className="mt-6 space-y-3">
        {posts.map((p) => (
          <li key={p.slug} className="rounded-xl border border-zinc-200 p-4">
            <Link className="text-lg font-medium hover:underline" href={`/blog/${p.slug}`}>
              {p.title}
            </Link>
            <div className="mt-1 text-sm text-zinc-500">{p.date}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
