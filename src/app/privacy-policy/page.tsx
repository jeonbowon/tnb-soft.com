import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침 | TNB SOFT",
  description: "TNB SOFT 앱 개인정보처리방침",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-14">
        <h1 className="text-3xl font-semibold tracking-tight">
          개인정보처리방침
        </h1>
        <p className="mt-3 text-zinc-500">(TNB SOFT 앱 공통)</p>
        <p className="mt-2 text-sm text-zinc-400">시행일: 2026년 4월 14일</p>
      </header>

      <div className="space-y-12 text-[15px] leading-8 text-zinc-700">

        <section>
          <p>
            TNB SOFT(이하 "회사")는 회사가 제공하는 모든 앱(이하 "앱") 이용자의
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
            <li>앱 서비스 이용에 필요한 각종 입력 데이터</li>
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
            <li>앱 서비스 제공 및 기능 운영</li>
            <li>서비스 안정화 및 오류 분석</li>
            <li>광고 제공 및 성과 측정</li>
            <li>구독 결제 처리 및 서비스 제공 (해당 앱에 한함)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mb-4">
            3. 정보의 보관 및 저장 위치
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>이용자가 입력한 데이터는 기본적으로 기기 내부(로컬)에 저장됩니다.</li>
            <li>클라우드 동기화 기능을 제공하는 앱의 경우, 해당 기능 이용 시 데이터가 서버에 저장될 수 있습니다.</li>
            <li>서버 전송 시 HTTPS 보안 통신을 사용합니다.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mb-4">
            4. 제3자 제공 및 외부 서비스
          </h2>
          <p className="mb-4">
            회사는 광고 서비스 제공을 위해 아래 외부 사업자와 협력합니다. 각
            사업자는 자체 개인정보처리방침에 따라 정보를 처리합니다.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Google AdMob (광고 서비스)</li>
            <li>Kakao 광고 (광고 서비스)</li>
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
              href="https://www.kakao.com/policy/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-indigo-600 hover:underline"
            >
              Kakao 개인정보처리방침 보기
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
            <li>앱 내 삭제 기능을 통해 즉시 삭제됩니다.</li>
            <li>앱 삭제 시 기기에 저장된 로컬 데이터가 함께 제거됩니다.</li>
            <li>서버에 저장된 데이터는 삭제 요청 시 지체 없이 파기됩니다.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mb-4">
            6. 이용자의 권리
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>개인정보 열람, 수정, 삭제를 앱 내에서 직접 요청할 수 있습니다.</li>
            <li>
              이메일(bwjeon@tnb-soft.com)로 요청하시면 지체 없이 처리합니다.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mb-4">
            7. 개인정보 보호책임자
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
