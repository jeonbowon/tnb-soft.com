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
- 끊겼다 붙는 상황,
- 호스트가 재시작하는 상황,
- 장비가 부팅 중인 상황
이 3가지를 테스트 케이스로 잡아야 한다.

## 재연결 시 반드시 점검해야 할 것들:
- 현재 장비 상태를 어떤 CEID로 복구 보고할 것인가
- Alarm Set / Clear 상태를 어떻게 재동기화할 것인가
- VID 값 중 “순간 값”과 “현재 상태 값”을 구분했는가

## 타이머(T3/T6/T7/T8)
- T3 Timeout이 잦다면, 메시지 구조보다 처리 흐름을 의심해야 합니다.
- T6 Timeout은 대개 내부 로직 블로킹에서 발생합니다.
- T7/T8 문제는 연결 상태 관리의 실패인 경우가 많습니다.
- 타이머를 늘리지 말고 원인 해결을 해야한다.

## GEM/SECS를 구현할 때 점검 기준
- 전원 ON → Host 연결 → 바로 명령 가능 여부
- 통신 중 LAN 단절 → 재연결 → 상태 일치 여부
- 장비 동작 중 Host 재시작 → 보고 누락 여부
- Alarm 발생/해제 시 중복 보고 여부
- Offline ↔ Online 전환 시 Event 순서

## 상태(State) 설계
- 많은 장비 소프트웨어에서 문제의 절반은
SECS 메시지가 아니라 상태 정의가 애매한 것에서 시작된다.

- 예를 들어,
이 장비는 지금 IDLE 인가?
아니면 READY 이지만 인터록 대기 상태인가?
알람은 해제되었지만, RECOVERY 중인 상태는 어디에 속하는가?

이 질문에 코드 레벨에서 명확히 답하지 못하면,
결국 다음 문제가 생긴다.

CEID는 올라가는데 VID 값이 맞지 않음
재연결 후 Host 화면과 장비 상태 불일치
“동작은 했는데 보고가 안 된” 애매한 상황

- GEM 구현은 결국
상태를 단순화하면서도 거짓말하지 않게 만드는 작업이다.
`,
  },
  {
    slug: "cim-field-notes",
    title: "CIM 실무 노트",
    date: "2026-01-30",
    summary: "현장 연동에서 자주 생기는 이슈와 방어 설계를 정리합니다.",
    content: `
## 재연결 시 맞춰야 하는 상태 목록
1. Control State
 - Offline / Online / Remote
2. Equipment State
 - IDLE / RUN / STOP / ALARM
 - 진행 중이던 동작은 보고하지 않는다
3. Alarm Summary
4. Current VID Snapshot
 - 현재 상태를 설명하는 최소 VID 세트
 - Host 화면을 맞추기 위한 용도

## 자주 터지는 포인트
- 동일 이벤트 중복 보고(재시도 로직이 원인인 경우가 많음)
- Lot/Carrier 상태 전이 불일치
- 장비 UI와 Host 상태의 시간차

## 방어 설계
- 상태 전이는 **단방향 FSM**으로 고정
- 모든 Host Tx/Rx는 **Correlation(추적 키)** 를 남김
- 재연결 시 “최소 동기화 세트” 정의(무엇을 먼저 맞출지)

## CIM 로그
[Time][FSM][Trigger][Tx/Rx][MsgID][Detail]

## Offline / Online 전환
- Online 전 상태 정리, Alarm 정합성 확보, Lot 존재 여부 확정
- Offline 상태에서 장비 동작은 가능, 보고는 제한, 상태 변경은 내부 FSM만 변경
`,
  },
];

export function getBlogPost(slug: string) {
  const s = (slug ?? "").trim();
  return blogPosts.find((p) => p.slug === s);
}

