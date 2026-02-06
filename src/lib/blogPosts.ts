// lib/blogPosts.ts
export type BlogPost = {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  summary?: string;
  content: string; // 일단은 간단히 문자열(나중에 MD/MDX로 확장 가능)
};

export const blogPosts: BlogPost[] = [
  {
    slug: "gem-intro",
    title: "GEM/SECS 통신 개요",
    date: "2026-01-30",
    summary: "SECS-I/HSMS, 메시지 흐름, 장비 SW에서의 구현 포인트를 정리합니다.",
    content: `
## 한 줄 요약
GEM은 “장비의 표준 대화법”이고, SECS는 그 문장 구조, HSMS는 전송 방식입니다.

## 구성 요소
- **SECS-II**: 메시지 포맷(스트림/펑션, 아이템 구조)
- **HSMS**: TCP/IP 기반 전송(연결/세션/타임아웃)
- **GEM**: 장비 상태/알람/이벤트/리모트 커맨드 등 “운영 규칙”

## 장비 SW에서 가장 많이 부딪히는 지점
- T3/T5/T6/T7/T8 타이머 관리
- Linktest, Select/Separate 흐름
- Event/Alarm 보고의 “누락/중복” 방지
- 재연결 시 상태 동기화(CEID/ALID/VID)

## 실무 팁
통신이 ‘된다’에서 끝내지 말고,
- 끊겼다 붙는 상황,
- 호스트가 재시작하는 상황,
- 장비가 부팅 중인 상황
이 3가지를 테스트 케이스로 잡아야 현장에서 버팁니다.
`,
  },
  {
    slug: "cim-field-notes",
    title: "CIM 실무 노트",
    date: "2026-01-30",
    summary: "현장 연동에서 자주 생기는 이슈와 방어 설계를 정리합니다.",
    content: `
## 현장 CIM은 결국 “경계 조건 게임”
- 설비/호스트/네트워크/운영자, 네 주체가 동시에 흔들립니다.

## 자주 터지는 포인트
- 동일 이벤트 중복 보고(재시도 로직이 원인인 경우가 많음)
- Lot/Carrier 상태 전이 불일치
- 장비 UI와 Host 상태의 시간차

## 방어 설계
- 상태 전이는 **단방향 FSM**으로 고정
- 모든 Host Tx/Rx는 **Correlation(추적 키)** 를 남김
- 재연결 시 “최소 동기화 세트” 정의(무엇을 먼저 맞출지)
`,
  },
];

export function getBlogPost(slug: string) {
  const s = (slug ?? "").trim();
  return blogPosts.find((p) => p.slug === s);
}

