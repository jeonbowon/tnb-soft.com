import Link from "next/link";
import { projects } from "@/lib/projects";

function Badge({ text }: { text: string }) {
  return (
    <span className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-700">
      {text}
    </span>
  );
}

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-8">
      <section className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8">
        <h1 className="text-2xl font-semibold tracking-tight">프로젝트</h1>
        <p className="mt-2 max-w-3xl text-zinc-600">
          현장에서 실제로 굴러간 결과를 중심으로 정리했습니다. 기능 나열이 아니라,
          “어떻게 안정화했는가”를 보여드립니다.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.slug}
            className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold">{p.title}</h2>
                <p className="mt-2 text-sm text-zinc-600">{p.subtitle}</p>
                <p className="mt-3 text-xs text-zinc-500">
                  {p.period} · {p.role}
                </p>
              </div>

              <Link
                href={`/projects/${p.slug}`}
                className="shrink-0 rounded-full border border-zinc-300 px-4 py-2 text-sm hover:bg-zinc-50"
              >
                상세
              </Link>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.slice(0, 6).map((t) => (
                <Badge key={t} text={t} />
              ))}
            </div>

            <div className="mt-5">
              <div className="text-sm font-medium text-zinc-900">핵심 결과</div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700">
                {p.results.slice(0, 3).map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
