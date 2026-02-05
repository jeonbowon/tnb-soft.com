export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      {/* 회사소개 */}
      <section className="prose max-w-none">
        <h1>회사소개</h1>
        <p>
          TNB SOFT는 장비 소프트웨어 개발과 자동화 연동을 중심으로,
          현장에서 검증되는 결과물을 만드는 개발 파트너입니다.
        </p>
      </section>

      {/* 구분선 */}
      <div className="my-16 border-t border-zinc-200" />

      {/* 오시는 길 */}
      <section>
        <h2 className="text-2xl font-semibold tracking-tight">오시는 길</h2>
        <p className="mt-2 text-zinc-600">
          방문 미팅은 사전 일정 조율 후 진행합니다.
        </p>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          {/* 지도 */}
          <div className="overflow-hidden rounded-2xl border border-zinc-200">
            <iframe
              title="TNB SOFT 위치"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3879.6729278719836!2d126.62675720916118!3d37.40097433714811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbdadf01d581951d%3A0xeb17d4c1b865d5b6!2z7Iah64-E7JSo7JuM7YGs7J247YWM65287Iqk7ZWc6528!5e0!3m2!1sko!2skr!4v1770276033474!5m2!1sko!2skr"
              className="h-[360px] w-full"
              loading="lazy"
            />
          </div>

          {/* 주소 / 교통 */}
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl bg-zinc-50 p-5">
              <div className="text-sm font-medium text-zinc-900">주소</div>
              <div className="mt-1 text-sm text-zinc-700">
                인천광역시 연수구 센트럴로 313, 송도씨워크인테라스한라 C-822
              </div>
            </div>

            <div className="rounded-2xl bg-zinc-50 p-5">
              <div className="text-sm font-medium text-zinc-900">대중교통</div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700">
                <li>국제업무지구역 5번 출구 도보 3분</li>                
              </ul>
            </div>

            <div className="rounded-2xl bg-zinc-50 p-5">
              <div className="text-sm font-medium text-zinc-900">주차</div>
              <div className="mt-1 text-sm text-zinc-700">
                건물 지하 주차 가능
              </div>
            </div>

            <div className="rounded-2xl bg-zinc-50 p-5">
              <div className="text-sm font-medium text-zinc-900">연락처</div>
              <div className="mt-1 text-sm text-zinc-700">
                Email: bwjeon@tnb-soft.com
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
