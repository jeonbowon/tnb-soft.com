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

function SectionTitle({ children }: { children: ReactNode }) {
  return <h2 className="text-lg font-semibold text-zinc-900">{children}</h2>;
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  console.log("DETAIL PAGE HIT, slug =", slug);

  const p = getProjectBySlug(slug);
  console.log("FOUND =", !!p);

  if (!p) return notFound();

  return (
    <div className="flex flex-col gap-8">
      <section className="rounded-2xl border border-zinc-200 bg-white p-8">
        <div className="text-sm text-zinc-500">
          <Link href="/projects" className="hover:underline">
            프로젝트
          </Link>
          <span className="mx-2">/</span>
          <span>{p.title}</span>
        </div>

        <h1 className="mt-3 text-2xl font-semibold tracking-tight">{p.title}</h1>
        <p className="mt-2 text-zinc-600">{p.subtitle}</p>

        <div className="mt-4 flex flex-wrap gap-2 text-sm text-zinc-700">
          <span className="rounded-full border border-zinc-200 px-3 py-1">
            기간: {p.period}
          </span>
          <span className="rounded-full border border-zinc-200 px-3 py-1">
            역할: {p.role}
          </span>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {p.stack.map((s) => (
            <span key={s} className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700">
              {s}
            </span>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8">
        <SectionTitle>개요</SectionTitle>
        <p className="mt-3 leading-7 text-zinc-700">{p.overview}</p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6">
          <SectionTitle>문제</SectionTitle>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-700">
            {p.problem.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white p-6">
          <SectionTitle>해결</SectionTitle>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-700">
            {p.solution.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="rounded-2xl border border-zinc-200 bg-white p-6">
        <SectionTitle>적용 범위</SectionTitle>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-700">
          {p.scope.map((x) => (
            <li key={x}>{x}</li>
            ))}
        </ul>
      </section>

      <section className="rounded-2xl border border-zinc-200 bg-white p-6">
        <SectionTitle>결과</SectionTitle>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-700">
          {p.results.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </section>

      {p.screenshots && p.screenshots.length > 0 && (
        <section className="rounded-2xl border border-zinc-200 bg-white p-6">
          <SectionTitle>스크린샷</SectionTitle>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {p.screenshots.map((s) => (
              <div key={s.src} className="overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50">
                <div className="relative aspect-[16/9] w-full">
                  <Image src={s.src} alt={s.alt} fill className="object-cover" />
                </div>
                <div className="p-3 text-xs text-zinc-600">{s.alt}</div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-zinc-500">
            * 민감 정보가 포함된 경우, 화면 일부를 블러 처리하거나 대체 이미지로 교체하세요.
          </p>
        </section>
      )}

      <section className="rounded-2xl border border-zinc-200 p-6">
        <div className="text-lg font-semibold">비슷한 과제가 있으신가요?</div>
        <p className="mt-2 text-sm text-zinc-600">
          장비 제어/연동, 레거시 유지보수, 현장 트러블슈팅까지 포함해서 함께 정리합니다.
        </p>
        <div className="mt-4 flex gap-3">
          <Link
            href="/contact"
            className="inline-block rounded-full bg-zinc-900 px-5 py-2 text-sm text-white hover:bg-zinc-800"
          >
            문의하기
          </Link>
          <Link
            href="/projects"
            className="inline-block rounded-full border border-zinc-300 px-5 py-2 text-sm hover:bg-zinc-50"
          >
            목록으로
          </Link>
        </div>
      </section>
    </div>
  );
}
