import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침 | TNB SOFT",
  description: "우리아이 성장 그래프 앱 개인정보처리방침",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-14">
        <h1 className="text-3xl font-semibold tracking-tight">
          개인정보처리방침
        </h1>
        <p className="mt-3 text-zinc-500">(우리아이 성장 그래프)</p>
        <p className="mt-2 text-sm text-zinc-400">
          시행일: 2026년 2월 16일
        </p>
      </header>

      <div className="space-y-12 text-[15px] leading-8 text-zinc-700">

        <section>
          <p>
            TNB SOFT(이하 “회사”)는 「우리아이 성장 그래프」(이하 “앱”) 이용자의
            개인정보를 중요하게 생각하며, 「개인정보 보호법」 및 관련 법령을
            준수합니다. 본 개인정보처리방침은 이용자가 앱을 사용하면서 제공하거나
            자동으로 생성되는 정보가 어떻게 처리되는지를 안내합니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mb-4">
            1. 수집하는 정보
          </h2>

          <h3 className="font-medium mb-2">① 이용자가 직접 입력하는 정보</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>자녀 생년월일</li>
            <li>성별</li>
            <li>키 / 몸무게 / BMI 등 성장 데이터</li>
          </ul>

          <h3 className="font-medium mt-6 mb-2">② 자동 수집 정보</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>광고 식별자 (Android 광고 ID 등)</li>
            <li>기기 정보 (OS 버전, 기기 모델, 앱 버전)</li>
            <li>앱 사용 통계 정보 (오류 로그 등)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mb-4">
            2. 정보의 이용 목적
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>성장 데이터 기록 및 그래프 제공</li>
            <li>서비스 안정화 및 오류 분석</li>
            <li>무료 버전 광고 제공 및 성과 측정</li>
            <li>구독 결제 처리 및 서비스 제공</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mb-4">
            3. 정보의 보관 및 저장 위치
          </h2>

          <p className="mb-4">저장 방식은 요금제에 따라 다를 수 있습니다.</p>

          <p className="font-medium">무료 버전</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>성장 데이터는 이용자 기기 내부(로컬)에 저장됩니다.</li>
            <li>회사 서버로 전송되지 않습니다.</li>
          </ul>

          <p className="font-medium mt-6">유료 버전</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>성장 데이터는 클라우드 서버(Web DB)에 저장될 수 있습니다.</li>
            <li>데이터 전송 시 HTTPS 보안 통신을 사용합니다.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mb-4">
            4. 제3자 제공 및 외부 서비스
          </h2>

          <ul className="list-disc pl-6 space-y-1">
            <li>Google AdMob (광고 서비스)</li>
            <li>Google Play 결제 시스템</li>
            <li>Meta Audience Network (광고 서비스)</li>
          </ul>

          <div className="mt-4 space-y-1">
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-indigo-600 hover:underline"
            >
              Google 개인정보처리방침 보기
            </a>
            <a
              href="https://www.facebook.com/privacy/policy/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-indigo-600 hover:underline"
            >
              Meta 개인정보처리방침 보기
            </a>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mb-4">
            5. 개인정보의 보유 및 파기
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>앱 내 삭제 시 즉시 삭제됩니다.</li>
            <li>무료 버전은 앱 삭제 시 로컬 데이터가 제거됩니다.</li>
            <li>유료 버전은 구독 해지 또는 삭제 요청 시 서버 데이터가 삭제됩니다.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mb-4">
            6. 개인정보 보호책임자
          </h2>
          <ul className="space-y-1">
            <li>회사명: TNB SOFT</li>
            <li>대표자: 전보원</li>
            <li>이메일: bwjeon@tnb-soft.com</li>
            <li>웹사이트: https://www.tnb-soft.com</li>
          </ul>
        </section>

      </div>
    </div>
  );
}
