// src/app/contact/page.tsx
import Image from "next/image";

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
      <div className="text-sm font-semibold text-zinc-900">{title}</div>
      <div className="mt-2 text-sm leading-6 text-zinc-700">{children}</div>
    </div>
  );
}

function Pill({ text }: { text: string }) {
  return (
    <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs text-zinc-700">
      {text}
    </span>
  );
}

export default function ContactPage() {
  const mail = "bwjeon@tnb-soft.com";
  const subject = encodeURIComponent("[문의] 프로젝트 상담 요청");
  const body = encodeURIComponent(
    `안녕하세요. TNB SOFT 전보원 대표님께 문의드립니다.

1) 장비/프로젝트명:
2) 현재 상태(문제/목표):
3) 희망 일정(착수/납기):
4) 현장/원격(가능한 방식):
5) 참고자료(로그/스크린샷/요구사항):

감사합니다.
`
  );

  return (
    <div className="mx-auto max-w-5xl">
      {/* Hero */}
      <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">
              문의
            </h1>
            <p className="mt-2 text-zinc-600">
              장비 소프트웨어 개발·유지보수, 자동화 연동(GEM/SECS, CIM/MES) 관련
              상담을 받습니다. 보통 <b>1영업일 내</b> 회신합니다.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <Pill text="GEM/SECS · GEM300" />
              <Pill text="CIM/MES 연동" />
              <Pill text="장비 제어 SW" />
              <Pill text="로그/알람/레시피 안정화" />
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
                href={`mailto:${mail}?subject=${subject}&body=${body}`}
              >
                이메일로 문의하기
              </a>
              <a
                className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
                href={`mailto:${mail}`}
              >
                {mail}
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100">
            <div className="relative aspect-[16/10] w-full">
              <Image
                src="/contact/hero.png"
                alt="현장/장비 분위기 이미지"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main */}
      <section className="mt-6 grid gap-6 md:grid-cols-2">
        <Card title="어떤 문의를 받나요">
          <ul className="list-disc pl-5">
            <li>GEM/SECS 통신 및 Host 연동(HSMS/SECS-II, 이벤트/알람/상태)</li>
            <li>CIM/MES 연동, 공정/LOT 흐름 정합, 인터락 및 운영 시나리오</li>
            <li>장비 제어 소프트웨어 개선(시퀀스 안정화, UI/편의성, 수율 관점)</li>
            <li>기존 코드 분석/리팩토링, 로그/트레이스/재현성 강화</li>
          </ul>
        </Card>

        <Card title="빠른 회신을 위한 필수 정보">
          <div className="space-y-2">
            <div>아래 5가지만 적어주시면 상담이 빨라집니다.</div>
            <ol className="list-decimal pl-5">
              <li>장비/프로젝트명</li>
              <li>현재 문제 또는 목표(가능하면 한 문장)</li>
              <li>희망 일정(착수/납기)</li>
              <li>현장/원격 가능 여부</li>
              <li>자료(로그/스크린샷/요구사항 문서)</li>
            </ol>
          </div>
        </Card>

        <Card title="문의 템플릿(복사해서 보내세요)">
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-3 text-xs leading-5 text-zinc-800 whitespace-pre-wrap">
            {`1) 장비/프로젝트명:
            2) 현재 상태(문제/목표):
            3) 희망 일정(착수/납기):
            4) 현장/원격(가능한 방식):
            5) 참고자료(로그/스크린샷/요구사항):`}
          </div>
          <div className="mt-3 text-xs text-zinc-600">
            위 내용을 메일 본문에 붙여 넣으면, 회신 속도가 달라집니다.
          </div>
        </Card>

        <Card title="FAQ">
          <div className="space-y-3">
            <div>
              <div className="font-medium text-zinc-900">Q. NDA 가능한가요?</div>
              <div className="text-zinc-700">가능합니다. 초기 단계부터 협의합니다.</div>
            </div>
            <div>
              <div className="font-medium text-zinc-900">Q. 현장 상주도 가능한가요?</div>
              <div className="text-zinc-700">
                일정과 장소에 따라 가능합니다. 원격 + 현장 혼합도 자주 합니다.
              </div>
            </div>
            <div>
              <div className="font-medium text-zinc-900">
                Q. 분석만(원인 규명/리포트)도 가능한가요?
              </div>
              <div className="text-zinc-700">
                가능합니다. 재현 조건/로그 설계까지 포함해 정리해드립니다.
              </div>
            </div>
            <div>
              <div className="font-medium text-zinc-900">Q. 비용 산정은 어떻게 하나요?</div>
              <div className="text-zinc-700">
                단위 작업/기간 지원 중 맞는 방식으로 제안드립니다. 범위가 명확하면
                고정 견적이 빠릅니다.
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Bottom CTA */}
      <section className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
        <div className="text-sm font-semibold text-zinc-900">
          연락은 짧아도 됩니다.
        </div>
        <p className="mt-2 text-sm text-zinc-700">
          “무엇이 불안정한지”, “어떤 결과가 필요해졌는지” — 그 두 줄이면 시작됩니다.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
            href={`mailto:${mail}?subject=${subject}&body=${body}`}
          >
            지금 메일 보내기
          </a>
          <a
            className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
            href="/projects"
          >
            프로젝트 보기
          </a>
        </div>
      </section>
    </div>
  );
}
