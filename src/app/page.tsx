import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-10">
      {/* Hero */}
      <section className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8">
        <div className="text-sm text-zinc-600">TNB SOFT</div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">
          장비 소프트웨어를
          <br />
          현장에서 바로 돌아가게 만듭니다.
        </h1>
        <p className="mt-4 max-w-2xl text-zinc-600">
          Technology and Beyond. 반도체/디스플레이/산업 장비 분야에서
          자동화(CIM), GEM/SECS, MES 연동, 제어 소프트웨어 개발과 유지보수를 수행합니다.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/services"
            className="rounded-full bg-zinc-900 px-5 py-2 text-sm text-white hover:bg-zinc-800"
          >
            서비스 보기
          </Link>
          <Link
            href="/projects"
            className="rounded-full border border-zinc-300 bg-white px-5 py-2 text-sm text-zinc-900 hover:bg-zinc-50"
          >
            프로젝트 보기
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-zinc-300 bg-white px-5 py-2 text-sm text-zinc-900 hover:bg-zinc-50"
          >
            문의하기
          </Link>
        </div>
      </section>

      {/* Highlights */}
      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-zinc-200 p-6">
          <h2 className="text-lg font-semibold">실무 중심</h2>
          <p className="mt-2 text-sm text-zinc-600">
            문서보다 장비가 우선입니다. 현장에서 필요한 흐름으로 설계하고, 안정적으로 마무리합니다.
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-200 p-6">
          <h2 className="text-lg font-semibold">연동 경험</h2>
          <p className="mt-2 text-sm text-zinc-600">
            GEM/SECS, CIM, MES, 로그/이력, 레시피/권한 같은 “자주 터지는 지점”을 알고 있습니다.
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-200 p-6">
          <h2 className="text-lg font-semibold">유지보수 친화</h2>
          <p className="mt-2 text-sm text-zinc-600">
            바쁜 현장에서도 다시 열어 고칠 수 있게, 구조와 기록을 남겨 다음 시간을 줄입니다.
          </p>
        </div>
      </section>

      {/* Quick links */}
      <section className="rounded-2xl border border-zinc-200 p-6">
        <h2 className="text-lg font-semibold">바로가기</h2>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <Link className="text-zinc-700 hover:text-zinc-900" href="/about">→ 회사소개</Link>
          <Link className="text-zinc-700 hover:text-zinc-900" href="/services">→ 서비스</Link>
          <Link className="text-zinc-700 hover:text-zinc-900" href="/projects">→ 프로젝트</Link>
          <Link className="text-zinc-700 hover:text-zinc-900" href="/blog">→ 기술블로그</Link>
          <Link className="text-zinc-700 hover:text-zinc-900" href="/contact">→ 문의</Link>
        </div>
      </section>
    </div>
  );
}
