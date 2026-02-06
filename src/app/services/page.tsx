// app/services/page.tsx
import Link from "next/link";

function SectionTitle({
  eyebrow,
  title,
  desc,
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <div className="text-xs font-medium tracking-wide text-violet-700">
          {eyebrow}
        </div>
      ) : null}
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900">
        {title}
      </h1>
      {desc ? (
        <p className="mt-3 text-sm leading-relaxed text-zinc-600">{desc}</p>
      ) : null}
    </div>
  );
}

function Card({
  title,
  desc,
  items,
}: {
  title: string;
  desc: string;
  items: string[];
}) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
      <div className="text-lg font-semibold tracking-tight text-zinc-900">
        {title}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-zinc-600">{desc}</p>
      <ul className="mt-4 space-y-2 text-sm text-zinc-700">
        {items.map((t) => (
          <li key={t} className="flex gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Pill({ text }: { text: string }) {
  return (
    <span className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-700">
      {text}
    </span>
  );
}

export default function ServicesPage() {
  return (
    <div className="flex flex-col gap-10">
      {/* Hero */}
      <section className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8">
        <SectionTitle
          eyebrow="Services"
          title="현장에서 바로 쓰이는 장비 소프트웨어를 만듭니다."
          desc="기능을 늘리는 것보다, 멈추지 않고 굴러가게 만드는 것이 먼저입니다. TNB SOFT는 장비 제어·자동화 연동·레거시 유지보수를 실무 중심으로 수행합니다."
        />

        <div className="mt-6 flex flex-wrap gap-2">
          <Pill text="장비 제어 SW" />
          <Pill text="GEM / SECS-II / HSMS" />
          <Pill text="CIM / MES 연동" />
          <Pill text="데이터 수집·로그·이력" />
          <Pill text="레거시 유지보수" />
          <Pill text="C / C++ / C#" />
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800"
          >
            문의하기
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
          >
            프로젝트 보기
          </Link>
        </div>
      </section>

      {/* Core services */}
      <section className="flex flex-col gap-6">
        <div className="max-w-3xl">
          <h2 className="text-xl font-semibold tracking-tight text-zinc-900">
            핵심 서비스
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600">
            “할 수 있다”가 아니라, “어떻게 안정화했는가”로 이야기합니다.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card
            title="장비 제어 소프트웨어 개발/개선"
            desc="신규 개발부터 기존 코드 개선까지, 현장에서 검증되는 동작을 우선합니다."
            items={[
              "신규 장비 제어 SW 개발 (UI/시퀀스/인터락 포함)",
              "기존 장비 코드 분석 및 동작 안정화",
              "수율·작업 편의성 중심의 기능 개선",
            ]}
          />
          <Card
            title="GEM / SECS / CIM 연동"
            desc="연동은 붙이는 게 끝이 아닙니다. Host가 이해하는 형태로 정리합니다."
            items={[
              "SECS-II, HSMS 기반 통신 구현/개선",
              "GEM / GEM300 적용 및 진단",
              "Alarm/Event/Report 구조 정리 및 Host 검증 지원",
            ]}
          />
          <Card
            title="MES 연동 및 데이터 수집"
            desc="나중에 추적 가능한 로그·이력이 있어야, 진짜로 운영이 됩니다."
            items={[
              "생산/운전 데이터 수집 구조 설계",
              "로그/이력/에러 원인 분석을 위한 기록 체계화",
              "주기 수집·실시간 수집 혼합 구성 (필요 시 서버 연동)",
            ]}
          />
          <Card
            title="레거시 유지보수 및 기능 추가"
            desc="문서 없는 코드, 퇴사자 코드, 급한 현장 이슈. 가장 흔한 현실을 처리합니다."
            items={[
              "원인 분석 → 최소 침습 수정(필요 부분만)",
              "운영 중 장애 대응 및 재발 방지",
              "기능 추가/개조(요구사항 정리부터 지원)",
            ]}
          />
        </div>
      </section>

      {/* Problems we solve */}
      <section className="rounded-2xl border border-zinc-200 bg-white p-8">
        <h2 className="text-xl font-semibold tracking-tight text-zinc-900">
          이런 상황을 해결합니다
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-zinc-600">
          아래 항목 중 하나라도 해당되면, 이미 해결할 수 있는 길이 있습니다.
        </p>

        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {[
            "GEM은 붙었는데 Host에서 Alarm/Event가 제대로 안 읽힌다",
            "장비는 도는데 로그가 부족해서 원인 분석이 불가능하다",
            "레시피/이력/추적 요구가 늘었는데 구조가 없다",
            "퇴사자 코드라 아무도 손대기 어렵고 수정이 무섭다",
            "현장 작업자가 불편해하고, 실수가 반복된다",
            "운영 중 장애가 나면 ‘땜질’만 반복되고 재발한다",
          ].map((t) => (
            <div
              key={t}
              className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-700"
            >
              {t}
            </div>
          ))}
        </div>
      </section>

      {/* How we work */}
      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-zinc-200 bg-white p-8">
          <h2 className="text-xl font-semibold tracking-tight text-zinc-900">
            일하는 방식
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600">
            말로 설득하지 않습니다. 동작으로 증명합니다.
          </p>

          <ul className="mt-6 space-y-3 text-sm text-zinc-700">
            {[
              "현장 흐름을 이해하고, 실제 운영 관점에서 설계합니다.",
              "문서가 없으면 코드를 읽고, 코드가 없으면 로그를 봅니다.",
              "기존 코드는 함부로 뜯지 않습니다. 필요한 만큼만 정확히 바꿉니다.",
              "완성 이상의 ‘수율’과 ‘작업 편의성’에 방점을 둡니다.",
            ].map((t) => (
              <li key={t} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white p-8">
          <h2 className="text-xl font-semibold tracking-tight text-zinc-900">
            진행 절차
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600">
            부담을 줄이기 위해, 단계는 단순하게 유지합니다.
          </p>

          <ol className="mt-6 space-y-4 text-sm text-zinc-700">
            {[
              {
                title: "1) 상황 파악",
                desc: "요구사항, 현장 운영 방식, 현재 막힌 지점 정리",
              },
              {
                title: "2) 분석",
                desc: "기존 코드/통신/로그 기반으로 원인·대안 도출",
              },
              {
                title: "3) 범위·일정 제안",
                desc: "필수/선택 구분, 리스크와 검증 방법까지 함께 제시",
              },
              {
                title: "4) 구현·검증",
                desc: "개발 → 현장 테스트 → 반영, 재발 방지까지 마감",
              },
            ].map((s) => (
              <li key={s.title} className="rounded-xl bg-zinc-50 p-4">
                <div className="font-medium text-zinc-900">{s.title}</div>
                <div className="mt-1 text-zinc-600">{s.desc}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-2xl border border-zinc-200 bg-zinc-900 p-8 text-white">
        <div className="max-w-3xl">
          <h2 className="text-xl font-semibold tracking-tight">
            장비 소프트웨어 문제로 막혀 있다면,
            <br className="hidden sm:block" />
            간단한 설명만 주셔도 됩니다.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-200">
            “지금 어디서 멈추는지” 한 줄이면 충분합니다. 가능한 방향을 먼저
            말씀드리겠습니다.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-100"
            >
              문의하기
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10"
            >
              회사소개 보기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
