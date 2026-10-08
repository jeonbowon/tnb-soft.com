import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HAKO 개인정보처리방침 | TNB SOFT",
  description: "가상 게코 육성 게임 HAKO의 로컬 저장, 연령 확인, 광고 및 개인정보 처리 안내",
};

const sections = [
  {
    title: "1. 적용 범위와 서비스",
    paragraphs: [
      "TNB SOFT(이하 회사)는 가상 게코를 돌보고 성장시키는 게임 HAKO(하코, Android 패키지 com.tnbsoft.hako)를 제공합니다. 이 방침은 연령 확인 기능이 포함된 Android 버전 0.1.0(버전 코드 2)부터 적용됩니다.",
      "HAKO는 회원가입이나 로그인을 요구하지 않습니다. 실제 반려동물의 무게·성별·건강 기록을 수집하는 서비스가 아니며, 회사가 운영하는 게임 데이터 서버나 클라우드 동기화 기능은 없습니다.",
    ],
  },
  {
    title: "2. 기기에 저장하는 게임 정보",
    paragraphs: [
      "가상 게코의 이름·종류·성장 및 돌봄 상태, 보유 재화·아이템·장식, 게임 진행과 보상형 광고 보상 이력, 언어·소리·알림 등 설정을 이용자의 기기에 저장합니다. 게임 진행 복원, 오프라인 성장 계산, 보상 중복 방지와 선택한 설정 적용에 사용합니다. 이름에는 실명이나 연락처 등 개인정보를 입력하지 마세요.",
      "회사는 이 게임 저장 파일을 자체 서버로 전송하지 않습니다. 운영체제의 기기 백업·복원 여부는 이용자의 기기 및 계정 설정에 따라 달라질 수 있으며 회사의 게임 동기화 서비스와는 별개입니다.",
    ],
  },
  {
    title: "3. 연령 확인과 어린이 보호",
    paragraphs: [
      "광고 서비스를 시작하기 전에 나이를 묻고 ‘응답하지 않음’을 제공합니다. 입력한 실제 나이나 생년월일은 저장하거나 회사 서버로 전송하지 않습니다. 기기에는 18세 미만·18세 이상·미확인 구분과 처리 기준 버전만 저장합니다. 광고 SDK에는 보호 처리에 필요한 설정을 적용합니다.",
      "앱은 보수적인 보호 기준으로 18세 미만과 연령 미확인 이용자에게 아동 대상 광고 처리를 적용하고, 일반 이용자에게 적합한 광고 등급(G)으로 요청을 제한합니다. 개인 맞춤 광고와 관심 기반 리마케팅을 제한하고, 광고 SDK의 아동 처리 설정에 따라 Android 광고 ID 전송을 차단하며 게시자 자사 식별자 기능을 끕니다. 이 기준이 모든 국가의 법적 아동 연령이 18세라는 의미는 아닙니다.",
      "보호 대상 이용자에게 성인용 광고 동의 화면을 표시하지 않도록 설정합니다. 보호 설정이 적용되어도 광고 제공·보안·부정행위 방지에 필요한 IP 주소 등 모든 기술 정보의 처리가 없어지는 것은 아닙니다. 보호자께서는 아래 연락처로 개인정보 관련 문의를 하실 수 있습니다.",
    ],
  },
  {
    title: "4. Google 광고·동의 서비스가 처리하는 정보",
    paragraphs: [
      "앱은 Google AdMob(Google Mobile Ads SDK)과 Google User Messaging Platform(UMP)을 사용합니다. 연령 확인 후 광고 및 동의 정보 갱신 과정에서 외부 서비스와 통신할 수 있습니다. 보상형 광고 시청은 이용자가 선택하며, 시청하지 않아도 기본 게임을 이용할 수 있습니다. 광고를 미리 불러오는 과정에서도 정보가 처리될 수 있습니다.",
      "Google 광고 SDK는 적용되는 연령·동의·기기 설정에 따라 IP 주소와 그로부터 추정되는 대략적인 위치, 앱 실행·탭·광고/동영상 상호작용, 기기·운영체제 및 앱 정보, 오류·성능 등 진단 정보, 광고 ID·앱 세트 ID 등 기기 또는 계정 관련 식별자를 수집·공유할 수 있습니다. 목적은 광고 제공과 측정, 서비스 분석, 보안 및 부정행위 방지입니다. 어린이와 미확인 이용자에게는 앞 절의 제한이 적용됩니다.",
      "UMP는 지역과 동의 필요 여부를 확인하고 광고 개인정보 선택을 관리하기 위해 기기·앱 관련 정보 및 동의 상태를 처리합니다. 성인에게 필요한 경우 동의 화면을 제공하며, UMP가 개인정보 선택 변경을 요구하는 경우 앱 설정에 ‘광고 개인정보 설정’ 버튼을 표시합니다.",
      "Google이 처리하는 정보는 Google의 개인정보처리방침에 따라 보관·처리되며 해외 서버에서 처리될 수 있습니다. 광고 SDK 전송에는 TLS 암호화가 사용됩니다. 회사의 로컬 게임 저장과 Google 광고 서비스의 정보 처리는 구분됩니다.",
    ],
  },
  {
    title: "5. 권한과 이용자의 선택",
    paragraphs: [
      "돌봄 알림은 기기에서 예약하며, 알림 허용 여부는 앱과 Android 설정에서 관리할 수 있습니다. HAKO는 게임을 위해 연락처, 마이크, 카메라 또는 GPS 기반 정밀 위치를 요구하지 않습니다.",
      "Android의 광고 개인정보 설정에서 광고 ID 관련 선택을 관리할 수 있습니다. 광고 동의 변경 기능이 제공되는 경우 앱 설정에서도 변경할 수 있습니다. 광고 제공 가능 여부는 동의·연령·네트워크 상태에 따라 달라질 수 있습니다.",
    ],
  },
  {
    title: "6. 보관·삭제와 문의 처리",
    paragraphs: [
      "로컬 게임 정보와 연령 구분은 게임 진행 및 설정 유지를 위해 기기에 보관됩니다. Android 설정에서 HAKO의 앱 데이터를 삭제하거나 앱을 제거하면 기기에 저장된 앱 데이터를 삭제할 수 있습니다. 게임 진행도 함께 사라질 수 있습니다. 운영체제 백업에 저장된 사본은 해당 백업 서비스 설정에서 별도로 관리하세요.",
      "Google이 별도로 처리한 정보는 앱 삭제만으로 모두 삭제되는 것이 아닙니다. Google 개인정보처리방침과 계정의 개인정보 관리 도구에서 보관·삭제 방법을 확인할 수 있습니다.",
      "회사에 이메일로 문의하면 회신 주소와 문의 내용이 문의 처리에 사용됩니다. 필요한 내용만 보내 주세요. 문의 해결 후 불필요한 정보는 삭제하며, 법령상 보존 의무가 있는 경우에는 그 범위와 기간에 한해 보관합니다. 이용자와 보호자는 아래 연락처로 열람·정정·삭제 등 개인정보 관련 요청을 할 수 있습니다. 회사가 보유하지 않는 로컬 파일이나 Google 처리 정보는 해당 기기 또는 서비스의 처리 방법을 안내합니다.",
    ],
  },
  {
    title: "7. 연락처와 방침 변경",
    paragraphs: [
      "개인정보 문의 담당: TNB SOFT / 대표 전보원 / bwjeon@tnb-soft.com",
      "서비스 또는 정보 처리 방식이 변경되면 이 페이지에 변경 내용과 시행일을 안내하고, 필요한 경우 앱에서도 안내합니다.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-14">
        <h1 className="text-3xl font-semibold tracking-tight">HAKO 개인정보처리방침</h1>
        <p className="mt-3 text-zinc-600">가상 게코 육성 게임 · TNB SOFT</p>
        <p className="mt-2 text-sm text-zinc-500">시행일: 2026년 10월 8일</p>
      </header>
      <div className="space-y-12 text-[15px] leading-8 text-zinc-700">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="mb-4 text-lg font-semibold text-zinc-900">{section.title}</h2>
            {section.paragraphs.map((paragraph) => <p key={paragraph} className="mb-4">{paragraph}</p>)}
          </section>
        ))}
        <section>
          <h2 className="mb-4 text-lg font-semibold text-zinc-900">외부 서비스 안내</h2>
          <ul className="space-y-2 text-indigo-700 underline">
            <li><a href="https://policies.google.com/privacy">Google 개인정보처리방침</a></li>
            <li><a href="https://policies.google.com/technologies/partner-sites">Google 서비스 사용 시 정보 처리</a></li>
            <li><a href="https://developers.google.com/admob/unity/privacy/play-data-disclosure">Google Mobile Ads 데이터 처리 안내</a></li>
            <li><a href="mailto:bwjeon@tnb-soft.com">개인정보 문의: bwjeon@tnb-soft.com</a></li>
          </ul>
        </section>
      </div>
    </main>
  );
}
