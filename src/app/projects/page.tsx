import Link from "next/link";
import { projects } from "@/lib/projects";

function Badge({ text }: { text: string }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[#D6D4F2]">
      {text}
    </span>
  );
}

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <article
      className={[
        "relative overflow-hidden rounded-2xl",
        "border border-white/10",
        "bg-[#20254A]/72",
        "shadow-[0_18px_40px_rgba(0,0,0,0.35)]",
        className,
      ].join(" ")}
    >
      {/* card highlight */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-300/35 to-transparent" />
        <div className="absolute -top-28 left-1/2 h-56 w-[560px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-3xl" />
      </div>
      <div className="relative">{children}</div>
    </article>
  );
}

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-8">
      {/* Hero */}
      <Card className="p-8">
        <h1 className="text-2xl font-semibold tracking-tight text-[#F1EFFF]">
          프로젝트
        </h1>
        <p className="mt-2 max-w-3xl text-[#C9C7E8]">
          현장에서 실제로 굴러간 결과를 중심으로 정리했습니다. 기능 나열이 아니라,
          “어떻게 안정화했는가”를 보여드립니다.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="rounded-full border border-purple-400/25 bg-purple-500/10 px-3 py-1 text-xs text-purple-200">
            장비제어 · 통신 · 안정화
          </span>
          <span className="rounded-full border border-purple-400/25 bg-purple-500/10 px-3 py-1 text-xs text-purple-200">
            로그 · 이력 · 복구 시나리오
          </span>
        </div>
      </Card>

      {/* List */}
      <section className="grid gap-4 md:grid-cols-2">
        {projects.map((p) => (
          <Card key={p.slug} className="p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <h2 className="text-lg font-semibold text-[#F1EFFF]">
                  {p.title}
                </h2>
                <p className="mt-2 text-sm text-[#C9C7E8]">{p.subtitle}</p>

                <p className="mt-3 text-xs text-[#B8B6D8]">
                  {p.period} (포트폴리오 기준) · {p.role}
                </p>
              </div>

              <Link
                href={`/projects/${p.slug}`}
                className="
                  shrink-0
                  rounded-full
                  bg-purple-600
                  px-4 py-2
                  text-sm font-medium text-white
                  hover:bg-purple-500
                  focus:outline-none focus:ring-2 focus:ring-purple-400/60
                "
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
              <div className="text-sm font-medium text-[#D6D4F2]">핵심 결과</div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[#C9C7E8]">
                {p.results.slice(0, 3).map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </section>
    </div>
  );
}
