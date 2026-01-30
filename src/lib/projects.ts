export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  period: string;
  role: string;
  tags: string[];
  stack: string[];

  // 상세 페이지용
  overview: string;
  problem: string[];
  solution: string[];
  scope: string[];
  results: string[];
  screenshots?: { src: string; alt: string }[];
};

export const projects: Project[] = [
  {
    slug: "film-laser-cutting",
    title: "ND 필름 레이저 커팅 장비 제어 프로그램 개발",
    subtitle: "양산 장비용 Windows 제어 SW (C# / WinForms) · 통신/모션/레시피/로그",
    period: "2021.04 – 2021.08 (포트폴리오 기준)",
    role: "설계/개발/현장 안정화",
    tags: ["LaserCutting", "장비제어", "레시피", "로그", "현장대응"],
    stack: ["C#(.NET/WinForms)", "RS232/RS485", "TCP/IP", "CC-Link", "Motion(UMAC)", "SQLite/CSV"],
    overview:
      "LCD 패널의 ND 필름을 고속으로 정밀 절단하는 양산 장비 제어 소프트웨어를 개발했습니다. "
      + "장비 운영에 필요한 운전 시퀀스, 레시피/로그/통신/모션 연동을 현장 중심으로 묶어 안정적으로 동작하게 만든 작업입니다.",
    problem: [
      "양산 환경에서 ‘멈추면 손실’인 장비: 예외/재시도/복구 흐름이 중요",
      "모션·통신·DIO·레시피가 얽혀 장애 원인 파악이 어려움",
      "운영자/엔지니어 권한, 레시피 변경, 이력 관리 요구"
    ],
    solution: [
      "운전 시퀀스를 상태 기반으로 정리하고 알람/인터락 흐름을 명확히 분리",
      "통신(Serial/TCP/IP/CC-Link) 단의 타임아웃/재연결/에러코드 표준화",
      "레시피/설정 저장·불러오기 + 변경 이력(로그) 중심으로 운영 안정성 강화"
    ],
    scope: [
      "장비 운전 시퀀스(자동/수동, 인터락 포함)",
      "모션/IO 제어 및 장치 통신 연동",
      "레시피/설정 관리(저장/불러오기), 로그/이력",
      "현장 문제 재현/분석/개선 반영"
    ],
    results: [
      "현장 장애 발생 시 원인 추적 시간이 줄어드는 구조(로그/이력 중심)",
      "장치 통신 불안정 상황에서도 재시도/복구가 가능한 운전 흐름 확보",
      "운영자 실수 방지(권한/레시피/검증)로 유지보수 부담 감소"
    ],
    screenshots: [
      { src: "/projects/film-laser-cutting/cover.png", alt: "ND Laser Cutting UI 대표 화면" },
      { src: "/projects/film-laser-cutting/recipe.png", alt: "레시피 화면 예시" },
      { src: "/projects/film-laser-cutting/configure.png", alt: "환경설정 화면 예시" },
      { src: "/projects/film-laser-cutting/maint.png", alt: "유지보수 화면 예시" },
      { src: "/projects/film-laser-cutting/maint_motion.png", alt: "유지보수 화면 예시" },
      { src: "/projects/film-laser-cutting/history.png", alt: "로그 화면 예시" }
    ],
  },

  {
    slug: "valve-control",
    title: "[C#/WinForms] 산업 장비용 밸브 제어 소프트웨어",
    subtitle: "센서/통신 기반 제어 UI · 설정/튜닝/모니터링",
    period: "2023.03 – 2023.04 (포트폴리오 기준)",
    role: "기능 개발/화면 구성/통신 연동",
    tags: ["Valve", "Control", "WinForms", "Sensor", "산업SW"],
    stack: ["C#(.NET/WinForms)", "Serial(RS232/RS485)", "System.IO.Ports", "실시간 모니터링 UI"],
    overview:
      "산업 장비에서 사용되는 밸브/압력 흐름을 제어하고, 상태를 시각화하며, 운영자가 빠르게 설정/튜닝할 수 있는 Windows 응용 프로그램입니다.",
    problem: [
      "실시간 데이터 갱신과 UI 조작이 충돌하면 사용성이 급격히 떨어짐",
      "통신 끊김/노이즈 상황에서 ‘멈춤’ 없이 복구가 필요",
      "현장 운영은 ‘간단한 조작 + 확실한 상태 표시’가 핵심"
    ],
    solution: [
      "실시간 표시(차트/값)와 제어 명령을 분리해 UI 안정성 확보",
      "통신 예외 처리(타임아웃/재시도/연결 상태 표시) 체계화",
      "설정/튜닝 화면을 단순하게 구성하고 변경 시점 기록을 남기도록 설계"
    ],
    scope: [
      "장치 통신 연동(Serial)",
      "실시간 데이터 표시(차트/상태)",
      "설정/튜닝/저장 기능",
      "운영 화면 UX 개선"
    ],
    results: [
      "현장 작업자가 빠르게 상태를 판단하고 조작할 수 있는 UI 확보",
      "통신 불안정 상황에서도 안정적으로 복구 가능한 흐름 확보"
    ],
  },

  {
    slug: "gem300-driver",
    title: "[C++·MFC] 반도체 장비용 GEM 통신 자동화 프로그램 개발",
    subtitle: "SECS/GEM · GEM300 흐름 기반 상태/이벤트/로그 체계",
    period: "2024.09 – 2024.12 (포트폴리오 기준)",
    role: "통신 흐름 설계/상태 정의/로그 체계",
    tags: ["SECS/GEM", "GEM300", "반도체장비", "MFC", "통신"],
    stack: ["C++", "MFC", "TCP/IP", "SECS/GEM", "로그/상태관리"],
    overview:
      "반도체 장비-호스트 간 자동화 통신을 위한 GEM 기반 소프트웨어를 구성했습니다. "
      + "현장에서 중요한 것은 ‘규격 구현’보다 ‘끊기지 않는 운전 흐름’이어서, 상태/이벤트/이력 중심으로 안정성을 강화하는 방향으로 정리했습니다.",
    problem: [
      "상태 전이/이벤트/알람이 얽히면 장비가 ‘정상처럼 보이는데 비정상’이 됨",
      "재연결/복구 시나리오가 없으면 현장 운영이 멈춤",
      "로그가 부실하면 이슈 재발 방지가 불가능"
    ],
    solution: [
      "상태/이벤트/알람 흐름을 명확히 정의하고, 실패 시 복구 경로를 준비",
      "통신 예외 상황을 로그 규칙으로 표준화(분석 가능한 기록)",
      "현장 운영 관점에서 ‘재발 방지’에 초점을 맞춘 점검 포인트 구축"
    ],
    scope: [
      "SECS/GEM 통신 흐름 설계/연동",
      "상태/이벤트/알람 정의 및 이력 기록",
      "현장 트러블슈팅 지원(로그 기반)"
    ],
    results: [
      "호스트 연동 시 장애 분석 시간 단축(로그/흐름 표준화)",
      "현장 안정 운전 위한 복구 시나리오 기반 운용 가능"
    ],
  },
];

export function getProjectBySlug(slug: string) {
  const key = decodeURIComponent(slug).trim().toLowerCase();
  return projects.find((p) => p.slug.trim().toLowerCase() === key);
}


