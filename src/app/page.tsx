import Link from "next/link";

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200">
      {children}
    </span>
  );
}

function Stat({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <h2 className="text-base font-semibold text-white">{title}</h2>
      <p className="mt-2 text-sm text-zinc-300">{desc}</p>
    </div>
  );
}

function Pill({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={
        "pointer-events-none absolute hidden items-center gap-2 rounded-full border border-white/10 bg-zinc-950/70 px-3 py-2 text-xs text-zinc-200 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur md:flex " +
        className
      }
    >
      <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-300/80" />
      {children}
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="flex flex-col gap-10">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/40 p-7 shadow-[0_30px_120px_rgba(0,0,0,0.55)] backdrop-blur md:p-12">
        {/* Background (Purple Premium) */}
        <div className="pointer-events-none absolute inset-0">
          {/* center light */}
          <div className="absolute left-1/2 top-[-260px] h-[700px] w-[1100px] -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-500/32 via-fuchsia-500/16 to-indigo-500/14 blur-3xl" />
          <div className="absolute left-1/2 top-[-220px] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-b from-white/10 via-white/0 to-white/0 blur-2xl" />

          {/* arc ring */}
          <div className="absolute left-1/2 top-6 h-[520px] w-[980px] -translate-x-1/2 rounded-[999px] border border-white/10 opacity-70" />
          <div className="absolute left-1/2 top-10 h-[520px] w-[980px] -translate-x-1/2 rounded-[999px] border border-white/5 opacity-60" />

          {/* subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.16]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px)",
              backgroundSize: "54px 54px",
              maskImage:
                "radial-gradient(ellipse at 50% 20%, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.35) 55%, transparent 76%)",
              WebkitMaskImage:
                "radial-gradient(ellipse at 50% 20%, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.35) 55%, transparent 76%)",
            }}
          />

          {/* vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/45" />
        </div>

        {/* floating pills */}
        <Pill className="left-10 top-20">CIM Integration</Pill>
        <Pill className="right-12 top-28">GEM / SECS</Pill>
        <Pill className="left-16 top-[220px]">MES Interface</Pill>
        <Pill className="right-20 top-[240px]">On-site Stabilization</Pill>

        <div className="relative grid items-center gap-10 md:grid-cols-[1.15fr_0.85fr]">
          {/* Left */}
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-400">
              <span className="font-semibold tracking-widest text-zinc-200">TNB SOFT</span>
              <span className="text-zinc-600">/</span>
              <span>Semiconductor · Display(LCD) · Industrial Equipment SW</span>
            </div>

            {/* ✅ 겹침 방지: break-keep + leading 조정 */}
            <h1 className="mt-4 mb-10 break-keep text-3xl font-semibold tracking-tight text-white leading-[1.12] md:text-[2.5rem] md:leading-[1.08]">
              <br />
              장비 소프트웨어,
              <br />
              현장의 흐름에 맞게 완성합니다.
              <br />              
            </h1>

            {/* ✅ 문구 세련되게 교체 */}
            <p className="mt-5 max-w-xl break-keep text-sm leading-relaxed text-zinc-300 md:text-base">
              반도체·디스플레이(LCD) 장비 제어 소프트웨어를 기반으로
              <span className="text-white"> CIM / GEM(SECS) / MES</span> 연동과 안정화를 수행합니다.
              <br />
              요구사항을 문서 중심의 설계가 아니라, 현장에서
              <span className="text-white"> 멈추지 않게</span> 만드는 데 집중하고 안정화합니다. 수율과 작업 편의성까지 고려한 운영 품질을 설계합니다.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <Tag>반도체 장비 SW</Tag>
              <Tag>디스플레이(LCD) 장비 SW</Tag>
              <Tag>CIM</Tag>
              <Tag>GEM / SECS</Tag>
              <Tag>MES</Tag>
              <Tag>현장 안정화</Tag>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/services"
                className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-200"
              >
                서비스 보기
              </Link>
              <Link
                href="/projects"
                className="rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm text-white hover:bg-white/10"
              >
                프로젝트 보기
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-white/15 bg-white/0 px-5 py-2 text-sm text-zinc-200 hover:bg-white/5"
              >
                문의하기
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-zinc-400">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                장비 중심 설계
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                로그/이력/레시피/권한 안정화
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                유지보수 가능한 구조화
              </span>
            </div>
          </div>

          {/* Right: Practical Equipment Monitor */}
          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/8 to-white/0 p-5 shadow-[0_30px_120px_rgba(0,0,0,0.55)]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-rose-400/70" />
                  <div className="h-2 w-2 rounded-full bg-amber-300/70" />
                  <div className="h-2 w-2 rounded-full bg-emerald-400/70" />
                </div>
                <div className="text-xs text-zinc-400">Equipment Console</div>
              </div>

              <div className="mt-4 rounded-2xl border border-white/10 bg-zinc-950/60 p-4">
                {/* Top status */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-xs text-zinc-400">Link</div>
                    <div className="mt-1 text-sm font-semibold text-white">
                      GEM ONLINE · HSMS Connected
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-zinc-400">Cycle Time</div>
                    <div className="mt-1 text-sm font-semibold text-white">23.4s</div>
                  </div>
                </div>

                {/* SECS/GEM Event Log */}
                <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-3">
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-semibold text-white">SECS/GEM Event Log</div>
                    <div className="text-[11px] text-zinc-400">S6F11 · CEID/VID</div>
                  </div>

                  <div className="mt-3 space-y-2 text-[12px]">
                    <div className="flex items-center justify-between rounded-lg border border-white/10 bg-zinc-950/40 px-3 py-2">
                      <div className="text-zinc-200">
                        <span className="text-zinc-400">12:41:08</span> · CEID 301 · <span className="text-white">LotStart</span>
                      </div>
                      <span className="rounded-full bg-emerald-400/15 px-2 py-0.5 text-[11px] text-emerald-200">OK</span>
                    </div>

                    <div className="flex items-center justify-between rounded-lg border border-white/10 bg-zinc-950/40 px-3 py-2">
                      <div className="text-zinc-200">
                        <span className="text-zinc-400">12:41:12</span> · VID 1102 · Recipe = <span className="text-white">LCUT_A3</span>
                      </div>
                      <span className="rounded-full bg-violet-400/15 px-2 py-0.5 text-[11px] text-violet-200">SYNC</span>
                    </div>

                    <div className="flex items-center justify-between rounded-lg border border-white/10 bg-zinc-950/40 px-3 py-2">
                      <div className="text-zinc-200">
                        <span className="text-zinc-400">12:41:19</span> · CEID 412 · Interlock <span className="text-white">Checked</span>
                      </div>
                      <span className="rounded-full bg-emerald-400/15 px-2 py-0.5 text-[11px] text-emerald-200">PASS</span>
                    </div>

                    <div className="flex items-center justify-between rounded-lg border border-white/10 bg-zinc-950/40 px-3 py-2">
                      <div className="text-zinc-200">
                        <span className="text-zinc-400">12:41:31</span> · CEID 510 · AlarmClear · Code <span className="text-white">A-204</span>
                      </div>
                      <span className="rounded-full bg-zinc-200/10 px-2 py-0.5 text-[11px] text-zinc-200">CLEAR</span>
                    </div>
                  </div>
                </div>

                {/* Practical panels */}
                <div className="mt-4 grid grid-cols-3 gap-2">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                    <div className="text-[11px] text-zinc-400">Interlock</div>
                    <div className="mt-1 text-sm font-semibold text-white">OK</div>
                    <div className="mt-1 text-[11px] text-zinc-400">Door · Vacuum · Motion</div>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                    <div className="text-[11px] text-zinc-400">Alarm</div>
                    <div className="mt-1 text-sm font-semibold text-white">0</div>
                    <div className="mt-1 text-[11px] text-zinc-400">Stable</div>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                    <div className="text-[11px] text-zinc-400">Recipe Audit</div>
                    <div className="mt-1 text-sm font-semibold text-white">Tracked</div>
                    <div className="mt-1 text-[11px] text-zinc-400">Who/When/Why</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.2rem] bg-gradient-to-r from-violet-500/14 via-fuchsia-500/10 to-indigo-500/12 blur-2xl" />
          </div>
        </div>
      </section>

      {/* Big Visual: CIM / GEM / MES Flow */}
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-12">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[-220px] h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-500/22 via-fuchsia-500/14 to-indigo-500/12 blur-3xl" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/35" />
        </div>

        <div className="relative">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-white md:text-3xl">
                장비 데이터 흐름을, 운영 품질로 바꿉니다.
              </h2>
              <p className="mt-2 max-w-2xl break-keep text-sm leading-relaxed text-zinc-300 md:text-base">
                동작의 완성만으로는 부족합니다. 로그·이력·레시피·권한·알람·인터락을
                연결해 <span className="text-white">수율과 작업 편의성</span>을 지키는 구조를 만듭니다.
              </p>
            </div>

            <div className="mt-4 flex gap-2 md:mt-0">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200">CIM</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200">GEM / SECS</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200">MES</span>
            </div>
          </div>

          {/* Diagram */}
          <div className="mt-8 grid gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
            {/* Node */}
            <div className="rounded-2xl border border-white/10 bg-zinc-950/50 p-5 backdrop-blur">
              <div className="text-xs text-zinc-400">Equipment</div>
              <div className="mt-1 text-base font-semibold text-white">장비 제어 SW</div>
              <div className="mt-3 space-y-2 text-sm text-zinc-300">
                <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">Alarm / Interlock</div>
                <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">Recipe / Parameter</div>
                <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">State / Trace Log</div>
              </div>
            </div>

            {/* Arrow */}
            <div className="hidden items-center justify-center md:flex">
              <div className="h-[2px] w-14 bg-gradient-to-r from-violet-400/60 to-fuchsia-400/60" />
            </div>

            {/* Node */}
            <div className="rounded-2xl border border-white/10 bg-zinc-950/50 p-5 backdrop-blur">
              <div className="text-xs text-zinc-400">GEM / SECS</div>
              <div className="mt-1 text-base font-semibold text-white">HSMS / SxFy</div>
              <div className="mt-3 space-y-2 text-sm text-zinc-300">
                <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">S6F11 Event</div>
                <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">VID / CEID</div>
                <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">Online / Remote</div>
              </div>
            </div>

            {/* Arrow */}
            <div className="hidden items-center justify-center md:flex">
              <div className="h-[2px] w-14 bg-gradient-to-r from-fuchsia-400/60 to-indigo-400/60" />
            </div>

            {/* Node */}
            <div className="rounded-2xl border border-white/10 bg-zinc-950/50 p-5 backdrop-blur">
              <div className="text-xs text-zinc-400">CIM / MES</div>
              <div className="mt-1 text-base font-semibold text-white">운영 시스템 연동</div>
              <div className="mt-3 space-y-2 text-sm text-zinc-300">
                <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">Lot / WorkOrder</div>
                <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">History / Audit</div>
                <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">Dashboard / Report</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="grid gap-4 md:grid-cols-3">
        <Stat
          title="현장 기준"
          desc="동작·상태·이력·권한·레시피처럼 ‘운영에서 깨지는 지점’을 먼저 잡고 안정화합니다."
        />
        <Stat
          title="연동 전문"
          desc="CIM / GEM(SECS) / MES 연동에서 반복되는 병목과 장애 포인트를 경험 기반으로 줄입니다."
        />
        <Stat
          title="유지보수 설계"
          desc="바쁜 현장에서도 다시 손볼 수 있도록 구조화·로그·기록을 남겨 다음 시간을 아낍니다."
        />
      </section>

      {/* Quick links */}
      <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
        <h2 className="text-lg font-semibold text-white">바로가기</h2>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <Link className="text-zinc-300 hover:text-white" href="/about">→ 회사소개</Link>
          <Link className="text-zinc-300 hover:text-white" href="/services">→ 서비스</Link>
          <Link className="text-zinc-300 hover:text-white" href="/projects">→ 프로젝트</Link>
          <Link className="text-zinc-300 hover:text-white" href="/blog">→ 기술블로그</Link>
          <Link className="text-zinc-300 hover:text-white" href="/contact">→ 문의</Link>
        </div>
      </section>
    </div>
  );
}
