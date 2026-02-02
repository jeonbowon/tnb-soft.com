import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { getProjectBySlug, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const p = getProjectBySlug(slug);
  if (!p) return {};
  return {
    title: `${p.title} | TNB SOFT`,
    description: p.subtitle,
  };
}

function SectionTitle({
  children,
  eyebrow,
}: {
  children: ReactNode;
  eyebrow?: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      {eyebrow ? (
        <div className="text-xs font-medium tracking-wide text-purple-300/80">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="text-lg font-semibold text-[#F1EFFF]">{children}</h2>
    </div>
  );
}

function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-purple-400/25 bg-purple-500/10 px-3 py-1 text-xs text-purple-200">
      {children}
    </span>
  );
}

function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={[
        "relative overflow-hidden rounded-2xl",
        "border border-white/10",
        "bg-[#20254A]/72",                       // ✅ 카드 배경 1단계 밝게
        "shadow-[0_18px_40px_rgba(0,0,0,0.35)]", // ✅ 카드가 떠 보이게
        className,
      ].join(" ")}
    >
      {/* ✅ 카드 상단 하이라이트(형태감) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-300/35 to-transparent" />
        <div className="absolute -top-24 left-1/2 h-48 w-[520px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="relative">{children}</div>
    </section>
  );
}


export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const p = getProjectBySlug(slug);
  if (!p) return notFound();

  return (
    <div className="flex flex-col gap-8">
      {/* 헤더/요약 */}
      <Card className="relative overflow-hidden p-8">
        <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-purple-600/16 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-fuchsia-500/12 blur-3xl" />

        <div className="relative">
          <div className="text-sm text-[#B8B6D8]">
            <Link href="/projects" className="hover:text-[#F1EFFF] hover:underline">
              프로젝트
            </Link>
            <span className="mx-2 opacity-60">/</span>
            <span className="text-[#F1EFFF]/90">{p.title}</span>
          </div>

          <h1 className="mt-3 text-2xl font-semibold tracking-tight text-[#F1EFFF] md:text-3xl">
            {p.title}
          </h1>
          <p className="mt-2 max-w-3xl text-[#C9C7E8]">{p.subtitle}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            <Badge>기간: {p.period}</Badge>
            <Badge>역할: {p.role}</Badge>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {p.stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-purple-400/25 bg-[#11132A]/55 px-3 py-1 text-xs text-[#D3CCFF]"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </Card>

      {/* 개요 */}
      <Card className="p-8">
        <SectionTitle eyebrow="Overview">개요</SectionTitle>
        <p className="mt-3 leading-7 text-[#D6D4F2]/95">{p.overview}</p>
      </Card>

      {/* 문제/해결 */}
      <section className="grid gap-4 md:grid-cols-2">
        <Card className="p-6">
          <SectionTitle eyebrow="Problem">문제</SectionTitle>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[#D6D4F2]/95">
            {p.problem.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </Card>

        <Card className="p-6">
          <SectionTitle eyebrow="Solution">해결</SectionTitle>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[#D6D4F2]/95">
            {p.solution.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </Card>
      </section>

      {/* 적용 범위 */}
      <Card className="p-6">
        <SectionTitle eyebrow="Scope">적용 범위</SectionTitle>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[#D6D4F2]/95">
          {p.scope.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </Card>

      {/* 결과 */}
      <Card className="p-6">
        <SectionTitle eyebrow="Outcome">결과</SectionTitle>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[#D6D4F2]/95">
          {p.results.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </Card>

      {/* 스크린샷 */}
      {p.screenshots && p.screenshots.length > 0 && (
        <Card className="p-6">
          <SectionTitle eyebrow="Screens">스크린샷</SectionTitle>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {p.screenshots.map((s) => (
              <div
                key={s.src}
                className="overflow-hidden rounded-xl border border-white/10 bg-[#1A1F3D]/75"
              >
                <div className="relative aspect-[16/9] w-full">
                  <Image src={s.src} alt={s.alt} fill className="object-cover" />
                </div>
                <div className="p-3 text-xs text-[#B8B6D8]">{s.alt}</div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-[#B8B6D8]/80">
            * 민감 정보가 포함된 경우, 화면 일부를 블러 처리하거나 대체 이미지로 교체하세요.
          </p>
        </Card>
      )}

      {/* CTA */}
      <Card className="p-6">
        <div className="text-lg font-semibold text-[#F1EFFF]">비슷한 과제가 있으신가요?</div>
        <p className="mt-2 text-sm text-[#C9C7E8]">
          장비 제어/연동, 레거시 유지보수, 현장 트러블슈팅까지 포함해서 함께 정리합니다.
        </p>
        <div className="mt-4 flex gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-purple-600 px-5 py-2 text-sm font-medium text-white hover:bg-purple-500"
          >
            문의하기
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-full border border-purple-400/30 bg-[#11132A]/45 px-5 py-2 text-sm text-[#F1EFFF] hover:bg-[#11132A]/65"
          >
            목록으로
          </Link>
        </div>
      </Card>
    </div>
  );
}
