import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { getProjectBySlug, projects } from "@/lib/projects";
import ScreenshotLightbox from "@/components/ScreenshotLightbox";

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
        <div className="text-xs font-semibold tracking-wide text-indigo-700">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="text-lg font-semibold text-zinc-900">{children}</h2>
    </div>
  );
}

function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
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
        <div className="pointer-events-none absolute -top-28 -right-28 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -left-28 h-64 w-64 rounded-full bg-fuchsia-500/10 blur-3xl" />

        <div className="relative">
          <div className="text-sm text-zinc-500">
            <Link href="/projects" className="hover:text-zinc-900 hover:underline">
              프로젝트
            </Link>
            <span className="mx-2 opacity-60">/</span>
            <span className="text-zinc-900/90">{p.title}</span>
          </div>

          <h1 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">
            {p.title}
          </h1>
          <p className="mt-2 max-w-3xl text-zinc-600">{p.subtitle}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            <Badge>기간: {p.period}</Badge>
            <Badge>역할: {p.role}</Badge>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {p.stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-700"
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
        <p className="mt-3 leading-7 text-zinc-700">{p.overview}</p>
      </Card>

      {/* 문제/해결 */}
      <section className="grid gap-4 md:grid-cols-2">
        <Card className="p-6">
          <SectionTitle eyebrow="Problem">문제</SectionTitle>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-700">
            {p.problem.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </Card>

        <Card className="p-6">
          <SectionTitle eyebrow="Solution">해결</SectionTitle>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-700">
            {p.solution.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </Card>
      </section>

      {/* 적용 범위 */}
      <Card className="p-6">
        <SectionTitle eyebrow="Scope">적용 범위</SectionTitle>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-700">
          {p.scope.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </Card>

      {/* 결과 */}
      <Card className="p-6">
        <SectionTitle eyebrow="Outcome">결과</SectionTitle>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-700">
          {p.results.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </Card>

      {/* 스크린샷 (클릭 확대) */}
      {p.screenshots && p.screenshots.length > 0 && (
        <Card className="p-6">
          <SectionTitle eyebrow="Screens">스크린샷</SectionTitle>

          <div className="mt-4">
            <ScreenshotLightbox items={p.screenshots} />
          </div>

          <p className="mt-3 text-xs text-zinc-500">
            * 민감 정보가 포함된 경우, 화면 일부를 블러 처리하거나 대체 이미지로 교체하세요.
          </p>
        </Card>
      )}

      {/* CTA */}
      <Card className="p-6">
        <div className="text-lg font-semibold text-zinc-900">
          비슷한 과제가 있으신가요?
        </div>
        <p className="mt-2 text-sm text-zinc-600">
          장비 제어/연동, 레거시 유지보수, 현장 트러블슈팅까지 포함해서 함께 정리합니다.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-5 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
          >
            문의하기
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-5 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
          >
            목록으로
          </Link>
        </div>
      </Card>
    </div>
  );
}
