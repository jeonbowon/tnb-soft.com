export interface ThirdParty {
  name: string;
  url: string;
}

export interface StorageConfig {
  /** 무료/단일 플랜 저장 방식 설명 */
  free: string[];
  /** 유료 플랜 저장 방식 (없으면 섹션 미표시) */
  paid?: string[];
}

export interface PrivacyConfig {
  /** 앱 이름 (예: "우리아이 성장 그래프") */
  appName: string;
  /** 시행일 (예: "2026년 2월 16일") */
  effectiveDate: string;
  /** 이용자가 직접 입력하는 정보 목록 */
  userInputData: string[];
  /** 자동 수집 정보 목록 */
  autoCollectedData?: string[];
  /** 이용 목적 목록 */
  purposes: string[];
  /** 저장 방식 */
  storage: StorageConfig;
  /** 제3자 서비스 목록 */
  thirdParties: ThirdParty[];
  /** 개인정보 파기 방법 (없으면 기본값 사용) */
  deletionPolicy?: string[];
}

const DEFAULT_AUTO_COLLECTED = [
  "광고 식별자 (Android 광고 ID 등)",
  "기기 정보 (OS 버전, 기기 모델, 앱 버전)",
  "앱 사용 통계 정보 (오류 로그 등)",
];

const DEFAULT_DELETION_POLICY = [
  "앱 내 삭제 기능을 통해 즉시 삭제됩니다.",
  "앱 삭제 시 기기에 저장된 로컬 데이터가 함께 제거됩니다.",
];

export default function PrivacyPolicyPage({ config }: { config: PrivacyConfig }) {
  const {
    appName,
    effectiveDate,
    userInputData,
    autoCollectedData = DEFAULT_AUTO_COLLECTED,
    purposes,
    storage,
    thirdParties,
    deletionPolicy = DEFAULT_DELETION_POLICY,
  } = config;

  const hasPaidStorage = storage.paid && storage.paid.length > 0;
  const sectionNum = (n: number) => `${n}.`;

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-14">
        <h1 className="text-3xl font-semibold tracking-tight">개인정보처리방침</h1>
        <p className="mt-3 text-zinc-500">({appName})</p>
        <p className="mt-2 text-sm text-zinc-400">시행일: {effectiveDate}</p>
      </header>

      <div className="space-y-12 text-[15px] leading-8 text-zinc-700">

        {/* 도입부 */}
        <section>
          <p>
            TNB SOFT(이하 "회사")는 「{appName}」(이하 "앱") 이용자의 개인정보를
            중요하게 생각하며, 「개인정보 보호법」 및 관련 법령을 준수합니다. 본
            개인정보처리방침은 이용자가 앱을 사용하면서 제공하거나 자동으로 생성되는
            정보가 어떻게 처리되는지를 안내합니다.
          </p>
        </section>

        {/* 1. 수집하는 정보 */}
        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mb-4">
            {sectionNum(1)} 수집하는 정보
          </h2>

          <h3 className="font-medium mb-2">① 이용자가 직접 입력하는 정보</h3>
          <ul className="list-disc pl-6 space-y-1">
            {userInputData.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          {autoCollectedData.length > 0 && (
            <>
              <h3 className="font-medium mt-6 mb-2">② 자동 수집 정보</h3>
              <ul className="list-disc pl-6 space-y-1">
                {autoCollectedData.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </>
          )}
        </section>

        {/* 2. 이용 목적 */}
        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mb-4">
            {sectionNum(2)} 정보의 이용 목적
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            {purposes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        {/* 3. 보관 및 저장 */}
        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mb-4">
            {sectionNum(3)} 정보의 보관 및 저장 위치
          </h2>

          {hasPaidStorage ? (
            <>
              <p className="mb-4">저장 방식은 요금제에 따라 다를 수 있습니다.</p>
              <p className="font-medium">무료 버전</p>
              <ul className="list-disc pl-6 space-y-1">
                {storage.free.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="font-medium mt-6">유료 버전</p>
              <ul className="list-disc pl-6 space-y-1">
                {storage.paid!.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </>
          ) : (
            <>
              <p className="mb-4">본 앱의 데이터 저장 방식은 다음과 같습니다.</p>
              <ul className="list-disc pl-6 space-y-1">
                {storage.free.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </>
          )}
        </section>

        {/* 4. 제3자 제공 */}
        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mb-4">
            {sectionNum(4)} 제3자 제공 및 외부 서비스
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            {thirdParties.map((tp) => (
              <li key={tp.name}>{tp.name}</li>
            ))}
          </ul>
          <div className="mt-4 space-y-1">
            {thirdParties.map((tp) => (
              <a
                key={tp.name}
                href={tp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-indigo-600 hover:underline"
              >
                {tp.name.split(" (")[0]} 개인정보처리방침 보기
              </a>
            ))}
          </div>
        </section>

        {/* 5. 보유 및 파기 */}
        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mb-4">
            {sectionNum(5)} 개인정보의 보유 및 파기
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            {deletionPolicy.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        {/* 6. 이용자 권리 */}
        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mb-4">
            {sectionNum(6)} 이용자의 권리
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>개인정보 열람, 수정, 삭제를 앱 내에서 직접 요청할 수 있습니다.</li>
            <li>
              이메일(bwjeon@tnb-soft.com)로 요청하시면 지체 없이 처리합니다.
            </li>
          </ul>
        </section>

        {/* 7. 개인정보 보호책임자 */}
        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mb-4">
            {sectionNum(7)} 개인정보 보호책임자
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
