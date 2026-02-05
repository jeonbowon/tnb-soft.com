import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-xs text-zinc-700">
      {children}
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
    <section
      className={[
        "relative overflow-hidden rounded-3xl",
        "border border-zinc-200/70",
        "bg-white/70",
        "shadow-[0_18px_50px_rgba(15,23,42,0.08)]",
        "backdrop-blur",
        className,
      ].join(" ")}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-300/60 to-transparent" />
        <div className="absolute -top-28 left-1/2 h-56 w-[760px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>
      <div className="relative">{children}</div>
    </section>
  );
}

function ProjectCard({ slug }: { slug: string }) {
  const p = projects.find((x) => x.slug === slug);
  if (!p) return null;

  // 관례: public/projects/<slug>/cover.png
  const coverSrc = `/projects/${p.slug}/cover.png`;

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-zinc-200/70 bg-white shadow-[0_14px_36px_rgba(15,23,42,0.08)]">
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-100">
        <Image
          src={coverSrc}
          alt={`${p.title} cover`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-transparent" />
        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          {p.tags.slice(0, 2).map((t) => (
            <span
              key={t}
              className="rounded-full bg-white/85 px-3 py-1 text-xs font-medium text-zinc-800 shadow-sm"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="p-5">
        <h3 className="line-clamp-2 text-base font-semibold tracking-tight text-zinc-900">
          {p.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-zinc-600">{p.subtitle}</p>

        <div className="mt-3 text-xs text-zinc-500">
          {p.period} · {p.role}
        </div>

        <div className="mt-4">
          <div className="text-sm font-medium text-zinc-800">핵심 요점</div>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700">
            {p.results.slice(0, 2).map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>

        <div className="mt-5 flex items-center justify-between gap-3">
          <Link
            href={`/projects/${p.slug}`}
            className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
          >
            상세 보기
          </Link>
          <div className="text-xs text-zinc-500">{p.stack.slice(0, 2).join(" · ")}</div>
        </div>
      </div>
    </article>
  );
}

export default function HomePage() {
  return (
    <div className="flex flex-col gap-10">
      {/* HERO (image/video placeholder) */}
      <section className="relative overflow-hidden rounded-3xl border border-zinc-200/70 bg-white shadow-[0_30px_120px_rgba(15,23,42,0.10)]">
        <div className="relative aspect-[16/9] w-full md:aspect-[21/9]">
          {/* ✅ public/hero/hero.png 로 넣으면 바로 적용 */}
          <Image
            src="/hero/hero.png"
            alt="TNB SOFT Hero"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/92 via-white/55 to-white/20" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/35" />
        </div>

        <div className="absolute inset-0 flex">
          <div className="mx-auto w-full max-w-6xl px-6 py-10">
            {/* 핵심: 높이를 가진 세로 컨테이너 */}
            <div className="flex h-full max-w-2xl flex-col justify-between">

              {/* ================== 위 영역 ================== */}
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-600">
                  <span className="font-semibold tracking-widest text-zinc-900">TNB SOFT</span>
                  <span className="text-zinc-400">/</span>
                  <span>Equipment SW · CIM · GEM(SECS) · MES</span>
                </div>

                <h1 className="mt-4 break-keep text-2xl font-medium leading-[1.1] tracking-tight text-slate-500/70 md:text-3xl">
                  Technology and Beyond
                </h1>

                <p className="mt-4 max-w-xl break-keep text-sm leading-relaxed text-slate-700/90 md:text-base">
                  기술은 구현에서 끝나지 않습니다.
                </p>

                <p className="mt-1 max-w-xl break-keep text-sm leading-relaxed text-slate-700/90 md:text-base">
                  운영 이후의 상황까지 고려해, 현장에 신뢰받는 장비 소프트웨어를 설계합니다.
                </p>
              </div>

              {/* ================== 아래 영역 ================== */}
              <div>
                <div className="flex flex-wrap gap-2">
                  <Chip>현장 안정화</Chip>
                  <Chip>CIM / MES 연동</Chip>
                  <Chip>GEM(SECS) / HSMS</Chip>
                  <Chip>레거시 유지보수</Chip>
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href="/projects"
                    className="rounded-full bg-indigo-600 px-5 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
                  >
                    포트폴리오 전체 보기
                  </Link>
                  <Link
                    href="/services"
                    className="rounded-full border border-zinc-300 bg-white/70 px-5 py-2 text-sm font-semibold text-zinc-900 hover:bg-white"
                  >
                    서비스 분야
                  </Link>
                  <Link
                    href="/contact"
                    className="rounded-full border border-zinc-300 bg-white/0 px-5 py-2 text-sm text-zinc-800 hover:bg-white/70"
                  >
                    문의하기
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>  
      </section>

      {/* Portfolio (show all, compact) */}
      <Card className="p-8 md:p-10">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">
              Portfolio
            </h2>
            <p className="mt-2 max-w-2xl break-keep text-sm leading-relaxed text-zinc-600 md:text-base">
              자세한 내용은 프로젝트 페이지에서 확인하실 수 있습니다.
            </p>
          </div>

          <Link
            href="/projects"
            className="mt-2 inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white/70 px-4 py-2 text-sm font-semibold text-zinc-900 hover:bg-white md:mt-0"
          >
            더보기 →
          </Link>
        </div>

        <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.slug} slug={p.slug} />
          ))}
        </div>
      </Card>

      {/* GEM / SECS (small, moved down) */}
      <Card className="p-8 md:p-10">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-zinc-900 md:text-2xl">
              GEM(SECS) / HSMS 역량
            </h2>            
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-800"
          >
            연동 상담
          </Link>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6">
            <div className="text-xs text-zinc-500">Connectivity</div>
            <div className="mt-2 text-base font-semibold text-zinc-900">HSMS 안정 연결</div>
            <p className="mt-2 text-sm text-zinc-600">
              연결/재연결/타임아웃/예외를 현장 기준으로 정리해, 끊겨도 복구되는 흐름으로 만듭니다.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-6">
            <div className="text-xs text-zinc-500">Protocol</div>
            <div className="mt-2 text-base font-semibold text-zinc-900">SxFy · CEID/VID</div>
            <p className="mt-2 text-sm text-zinc-600">
              이벤트/상태/레시피/알람을 “로그와 이력”까지 연결해 운영 품질로 수렴시킵니다.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-6">
            <div className="text-xs text-zinc-500">Operation</div>
            <div className="mt-2 text-base font-semibold text-zinc-900">Remote / Audit</div>
            <p className="mt-2 text-sm text-zinc-600">
              온라인/리모트/권한/감사(Audit)를 포함해, 현장 운영이 흔들리지 않게 설계합니다.
            </p>
          </div>
        </div>
      </Card>

      {/* Quick links */}
      <section className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-zinc-200/70 bg-white/60 px-6 py-5">
        <div className="text-sm text-zinc-600">
          빠르게 확인하기:{" "}
          <Link className="font-semibold text-zinc-900 hover:underline" href="/services">
            서비스 분야
          </Link>
          {" · "}
          <Link className="font-semibold text-zinc-900 hover:underline" href="/projects">
            프로젝트
          </Link>
          {" · "}
          <Link className="font-semibold text-zinc-900 hover:underline" href="/contact">
            문의
          </Link>
        </div>

        <Link
          href="/projects"
          className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
        >
          포트폴리오 더보기
        </Link>
      </section>
    </div>
  );
}
