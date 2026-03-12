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
    subtitle: "LCD 양산 장비용 레이저 가공 · 모션/PLC/비전/레시피 통합 제어",
    period: "2021.04 – 2021.08 (포트폴리오 기준)",
    role: "기획/아키텍처 설계/제어 시퀀스 구현/현장 안정화",
    tags: ["LaserCutting", "LCD장비", "양산장비", "장비제어", "모션제어", "레시피", "현장대응"],
    stack: [
      "C#(.NET Framework / WinForms)",
      "Windows 10 (산업용 PC)",
      "RS232 / RS485",
      "TCP/IP",
      "CC-Link (PLC 연동)",
      "Motion Board (UMAC)",
      "Vision 연동",
      "SQLite",
      "CSV/INI 설정 파일",
    ],

    overview:
      "LCD 패널에 부착된 ND 필름을 레이저로 허용오차 6nm (나노미터) 정밀 커팅하는 양산 장비의 제어 소프트웨어를 개발했습니다. "
      + "레이저 가공, 모션 제어(UMAC), CC-Link, 비전 시스템, 레시피/로그 관리 전체 제어 구조 설계하고 구현"      
      + "자동/수동 운전, 공정별 시퀀스, 실시간 상태 모니터링과 알람/로그 체계를 통해 "
      + "현장 양산 조건에서도 안정적으로 운용될 수 있도록 구성했습니다.",

    problem: [
      "레이저·모션·PLC·비전이 동시에 연동되는 구조에서 한 요소만 흔들려도 전체 공정이 정지",
      "양산 장비 특성상 ‘정지 = 손실’이므로 예외/알람/복구 시나리오가 필수",
      "레시피/설정 변경 이력이 없으면 불량 재현 및 원인 분석이 어려움",
    ],

    solution: [
      "자동/수동 운전 시퀀스를 상태 기반(State Machine)으로 정리해 흐름을 명확히 분리",
      "PLC(CC-Link), 모션(UMAC), 레이저, 비전 통신을 모듈화하고 예외/타임아웃 처리 표준화",
      "레시피/설정 저장·불러오기와 변경 이력 로그를 중심으로 운영 안정성 강화",
      "알람/인터락/복구 절차를 화면과 로그에 동시에 남겨 현장 대응 속도 향상",
    ],

    scope: [
      "[기획] 레이저 커팅 공정 분석 및 자동/수동 운전 시나리오 정의",
      "[제어] 레이저 가공 시퀀스, 모션 제어(UMAC), 위치/속도 동기화",
      "[통신] PLC(CC-Link), RS232/RS485, TCP/IP 기반 외부 장치 연동",
      "[비전] 가공 전/후 비전 검사 및 공정 연계",
      "[운영 UI] 공정 상태, 장비 상태, 알람, 인터락 실시간 표시",
      "[레시피] 가공 조건/공정 파라미터 저장·불러오기(CSV/INI, SQLite)",
      "[로그] 공정/알람/이벤트 로그 저장 및 이력 추적",
      "[현장] 양산 조건 반영, 문제 재현·분석·수정, 안정화 작업",
    ],

    results: [
      "양산 운전 중 장비 정지 빈도 감소 및 공정 안정성 확보",
      "문제 발생 시 로그/이력 기반으로 원인 분석 시간이 크게 단축",
      "운영자/엔지니어 권한 분리 및 UI 단순화로 현장 실수 감소",
    ],

    screenshots: [
      { src: "/projects/film-laser-cutting/cover.png", alt: "레이저 커팅 장비 메인 제어 화면" },
      { src: "/projects/film-laser-cutting/recipe.png", alt: "가공 레시피 설정 및 관리 화면" },
      { src: "/projects/film-laser-cutting/configure.png", alt: "장비 환경 설정 및 파라미터 화면" },
      { src: "/projects/film-laser-cutting/maint.png", alt: "유지보수/수동 운전 화면" },
      { src: "/projects/film-laser-cutting/maint_motion.png", alt: "모션 축 제어 및 상태 모니터링" },
      { src: "/projects/film-laser-cutting/history.png", alt: "공정/알람 로그 이력 화면" },
    ],
  },

  {
    slug: "valve-control",
    title: "[C#/WinForms] 산업 장비용 밸브 제어 소프트웨어",
    subtitle: "진공 밸브 제어 · 센서 설정 · 압력 제어(PID) · 실시간 모니터링(차트)",
    period: "2023.03 – 2023.04 (포트폴리오 기준)",
    role: "기획/화면 설계/통신 연동/제어 UI 구현",
    tags: ["C#", "WinForms", "산업장비", "진공밸브", "자동제어", "실시간제어UI", "시리얼통신"],
    stack: [
      "C#(.NET/WinForms)",
      "Serial(RS232/RS485)",
      "System.IO.Ports",
      ".NET Framework",
      "실시간 차트/모니터링 UI",
    ],

    overview:
      "진공 밸브를 정밀하게 제어하기 위한 산업용 제어 소프트웨어를 개발했습니다. "
      + "밸브 제어(OPEN/CLOSE/HOLD), 압력/포지션 표시, 센서 구성(1~2채널), "
      + "압력 제어 알고리즘(PID/모드 선택) 설정과 로그/차트 기반 분석 기능을 포함합니다. "
      + "운영자는 UI에서 직관적으로 상태를 확인하고, ZERO/LEARN 같은 기본 튜닝 절차를 빠르게 수행할 수 있습니다.",

    problem: [
      "압력/포지션/명령 상태를 동시에 보여줘야 함",
      "시리얼 통신(RS232/RS485)은 노이즈/끊김이 잦아, 재연결·타임아웃·오류 표준화가 없으면 운전이 멈춤",
      "설정값(센서/제어 파라미터)이 복잡하면 작업자가 실수하고, 유지보수 시 재현이 어려움",
    ],

    solution: [
      "제어 명령(UI 조작)과 실시간 갱신(표시/차트)을 분리해 UI 멈춤/충돌을 줄이고 안정성을 확보",
      "통신 상태(Connected/Disconnected), 스캔 주기(예: 30ms) 등 ‘운전 상태’를 화면에서 즉시 확인 가능하도록 구성",
      "센서/압력 제어 파라미터를 한 화면에 모으고 Default/Refresh/Save 흐름으로 ‘실수 없이 튜닝’이 가능하게 설계",
      "차트 분석(Tools) 화면에서 실제값/목표값(position/pressure)을 선택 표시하여 튜닝 결과를 빠르게 판단하도록 지원",
    ],

    scope: [
      "밸브 제어: OPEN / CLOSE / HOLD, Local/Remote 접근 모드 표시",
      "압력/포지션 표시: 실시간 값 + 스케일 UI + 목표값/실제값 비교",
      "센서 구성: Sensor 1~2 채널 선택, Full Scale/Unit 설정",
      "압력 제어 설정: 모드 선택(adaptive/fixed downstream 등), P/I gain, ramp time, sensor delay, gain factor",
      "통신: RS232/RS485 기반 연결/재시도/상태 표시, 스캔 주기 기반 Polling",
      "분석: Chart Analysis에서 목표/실제 트렌드 확인 및 표시 항목 선택",
    ],

    results: [
      "작업자가 화면만 보고도 ‘현재 상태(압력/포지션/모드/통신)’를 즉시 판단할 수 있는 운영 UI 확보",
      "설정/튜닝 항목을 정리해 변경/저장 흐름이 단순해졌고, 현장 셋업 시간이 단축",
      "통신 불안정 상황에서도 상태 표시와 복구 흐름이 명확해 운전 중단 리스크를 낮춤",
    ],

    screenshots: [
      { src: "/projects/valve-control/cover.png", alt: "밸브 제어 UI 대표 화면 (OPEN/CLOSE/HOLD, 압력/포지션 모니터링)" },
      { src: "/projects/valve-control/pressure_control_setup.png", alt: "Pressure Control Setup (모드 선택, PID/튜닝 파라미터, Save/Refresh)" },
      { src: "/projects/valve-control/tools_chartanalysis.png", alt: "Tools - Chart Analysis (target/actual pressure·position 트렌드 분석)" },
    ],
  },

  {
    slug: "lens-mes-system",
    title: "[C#·WinForms] Lens 사 MES 연동 장비 제어 시스템 개발",
    subtitle: "Scriber / Grinder / TPF 장비 공통 MES 인터페이스 · 생산 이력 자동화",
    period: "포트폴리오 기준 (양산 적용)",
    role: "MES 연동 설계 / 장비 인터페이스 구현 / 공정 상태 동기화",
    tags: ["MES", "장비연동", "생산이력", "자동화", "C#", "WinForms", "PLC"],
    stack: [
      "C# (.NET / WinForms)",
      "HTTP REST API",
      "PLC (MELSEC)",
      "장비 상태/비트 매핑",
      "로그/이력 관리",
    ],

    overview:
      "Lens 사 MES와 장비를 직접 연동하는 생산 자동화 시스템을 개발했습니다. "
      + "Scriber, Grinder, TPF 장비에 동일한 MES 연동 구조를 적용해 "
      + "공정 시작/종료, 장비 상태, 생산 결과를 MES로 자동 전송하는 시스템을 구축했습니다. "
      + "각 장비는 내부 제어 구조는 달랐지만, MES 인터페이스를 공통화해 "
      + "운영·유지보수 부담을 최소화하는 방향으로 설계했습니다.",

    problem: [
      "장비별로 MES 연동 방식이 다르면 유지보수와 확장이 어려움",
      "공정 시작/종료 타이밍과 MES 전송 시점이 어긋나면 생산 이력 불일치 발생",
      "PLC 비트/워드와 MES 메시지 간 매핑이 복잡해 오류 발생 가능성 큼",
    ],

    solution: [
      "MES 연동을 공통 모듈로 분리해 Scriber/Grinder/TPF 장비에 동일 적용",
      "공정 Start/End, 상태 보고, 결과 전송 흐름을 명확히 정의",
      "PLC(MELSEC) 비트/워드 주소를 MES 메시지와 1:1로 매핑해 가시화",
      "통신 실패 시 재시도 및 상태 표시로 현장 운전 중단 최소화",
    ],

    scope: [
      "[MES 연동] REST API 기반 로그인(Token), 공정 시작(Start), 종료(End), 상태 보고(EqpState)",
      "[장비 인터페이스] PLC 비트/워드 주소 관리(MELSEC Address Map)",
      "[공정 관리] Glass ID 기준 공정 시작/종료 및 결과 전송",
      "[상태 동기화] 장비 상태 ↔ MES 상태 실시간 동기화",
      "[로그] MES 송수신 결과 및 장비 상태 로그 기록",
      "[확장] Scriber / Grinder / TPF 장비 공통 적용 구조",
    ],

    results: [
      "여러 장비에 동일한 MES 연동 구조를 적용해 개발·유지보수 효율 향상",
      "공정 이력 자동화로 수작업 입력 제거 및 데이터 신뢰성 확보",
      "장비 상태와 MES 상태 불일치 문제 감소로 현장 운영 안정화",
    ],

    screenshots: [
      { src: "/projects/lens-mes-system/cover.png", alt: "Lens MES 연동 시스템 메인 화면" },
      { src: "/projects/lens-mes-system/address-map.png", alt: "PLC(MELSEC) 주소 ↔ MES 데이터 매핑 화면" },
    ],
  },

  {
    slug: "dual-robot-mother-line",
    title: "[C#·WinForms] 나찌 듀얼 로봇 Mother Line 장비 제어 소프트웨어 개발",
    subtitle: "Samsung Display 납품 · 듀얼 로봇 고속 Loading/Unload · MCR·Shuttle·LPM·Aligner 통합 제어",
    period: "2020.07 – 2020.11",
    role: "소프트웨어 전체 개발 (아키텍처 설계 / 제어 시퀀스 구현 / UI 개발 / 현장 안정화)",
    tags: [
      "삼성디스플레이",
      "듀얼로봇",
      "Mother Line",
      "장비제어",
      "고속제어",
      "모션제어",
      "C#",
      "WinForms",
    ],
    stack: [
      "C# (.NET / WinForms)",
      "Nachi 로봇 (듀얼 암)",
      "MELSEC PLC (CC-Link)",
      "DeviceNet (I/O)",
      "Motion Controller (MELSEC)",
      "BCR (바코드 리더)",
      "Smart Camera / Vision",
      "TCP/IP",
      "로그/이력 관리",
    ],

    overview:
      "Samsung Display에 납품되는 디스플레이 모듈 이송 자동화 장비(Mother Line)의 제어 소프트웨어를 개발했습니다. "
      + "나찌(Nachi) 듀얼 로봇 2기가 고속으로 모듈을 Loading/Unloading하며, "
      + "MCR(6기), Shuttle, LPM(Load Port Module), Prealign, Aligner, Reverser 등 "
      + "다수의 구동 장치를 통합 제어하는 복잡한 구조입니다. "
      + "Tray 단위 레시피 관리, BCR 기반 Carrier 추적, 실시간 시퀀스 로그와 "
      + "DeviceNet I/O·모션 축 유지보수 화면까지 전체 소프트웨어를 단독으로 설계하고 구현했습니다.",

    problem: [
      "듀얼 로봇 2기가 동시에 고속 동작하는 구조에서 충돌 및 시퀀스 경합 방지가 핵심 과제",
      "MCR 6기, Shuttle, LPM, Aligner 등 다수 장치가 동시에 연동되어 한 장치의 지연이 전체 라인 정지로 이어짐",
      "BCR 기반 Carrier ID 추적과 Tray 레시피가 공정 전체에 걸쳐 일관성 있게 유지되어야 함",
      "Samsung Display 양산 납품 장비 특성상 현장 안정성과 엔지니어 유지보수 편의성이 필수",
    ],

    solution: [
      "듀얼 로봇(Load/Unload/Peeling) 각각의 동작을 독립 시퀀스로 분리하고 상태 기반(State Machine)으로 관리해 충돌 방지",
      "MCR·Shuttle·LPM·Reverser 등 모든 장치 간 인터락을 명확히 정의하고 시퀀스 로그로 실시간 추적",
      "Tray 레시피(Count, Size, Offset 등)를 화면에서 직관적으로 관리하고 공정에 즉시 반영되는 구조 설계",
      "Robot / LPM / DIO / Motor 유지보수 화면을 분리 구성해 엔지니어가 장치별 독립 점검 가능하도록 구현",
      "Operate Log 이력을 날짜별 파일로 구조화해 현장 이슈 발생 시 원인 추적이 가능하도록 설계",
    ],

    scope: [
      "[메인 제어] Mother Line 전체 자동 운전 시퀀스 (Lot Start → Load → Align → Process → Unload)",
      "[로봇 제어] Nachi 듀얼 로봇 (Load Robot / Unload Robot / Peeling Robot) 독립 제어 및 시퀀스 연동",
      "[장치 연동] MCR(6기), Shuttle(A/B), LPM(Load Port), Prealign, Aligner, Reverser, Buffer 통합 제어",
      "[통신] MELSEC PLC(CC-Link), DeviceNet I/O, BCR, Smart Camera, TCP/IP 다중 통신 연동",
      "[레시피] Tray 단위 공정 파라미터(Count X/Y, Size, Offset, Vision Offset) 설정·저장·적용",
      "[유지보수] Robot / LPM / DeviceNet DIO / Motor 축별 수동 제어 및 상태 모니터링",
      "[모션 설정] 16축 모터 파라미터(속도/가속도/리밋/인터락 등) Config 화면 구성",
      "[이력 관리] Operate Log / Alarm History / Job History 날짜별 파일 저장 및 조회",
    ],

    results: [
      "듀얼 로봇 고속 연속 운전 중 시퀀스 충돌 없이 안정적인 양산 운전 달성",
      "장치별 유지보수 화면과 로그 체계로 현장 엔지니어의 장애 대응 시간 단축",
      "Samsung Display 납품 후 현장 양산 적용 완료",
    ],

    screenshots: [
      { src: "/projects/dual-robot-mother-line/cover.png", alt: "Main Mother Line 메인 제어 화면 (전체 장치 상태·시퀀스 로그)" },
      { src: "/projects/dual-robot-mother-line/main1.png", alt: "Main Mother Line 운전 중 화면 (시퀀스 로그 실시간 표시)" },
      { src: "/projects/dual-robot-mother-line/recipe.png", alt: "Recipe 화면 (Tray 레시피 파라미터 및 레이아웃 프리뷰)" },
      { src: "/projects/dual-robot-mother-line/main_robot.png", alt: "Maintenance Robot 화면 (듀얼 로봇 수동 제어)" },
      { src: "/projects/dual-robot-mother-line/maint_lpm.png", alt: "Maintenance LPM 화면 (Load Port / Shuttle / 반전기 수동 제어)" },
      { src: "/projects/dual-robot-mother-line/maint_dio.png", alt: "Maintenance DIO 화면 (DeviceNet I/O 입출력 모니터링)" },
      { src: "/projects/dual-robot-mother-line/maint_motion.png", alt: "Maintenance Motor 화면 (다축 모션 상태 및 수동 이동)" },
      { src: "/projects/dual-robot-mother-line/config_motion.png", alt: "Motor Config 화면 (16축 모터 파라미터 설정)" },
      { src: "/projects/dual-robot-mother-line/history.png", alt: "Operate Log 화면 (날짜별 운전 이력 조회)" },
    ],
  },
  
  {
    slug: "efem",
    title: "[C++·MFC] EFEM 장비 소프트웨어 개발",
    subtitle: "Robot · Load Port · Aligner 자동 운전 시퀀스 / 인터락 · 알람 · 복구 로직 구현",
    period: "포트폴리오 기준 (양산 장비 적용)",
    role: "EFEM 운전 시퀀스 설계 / 장비 제어 로직 구현 / 알람·복구 체계 구성",
    tags: [
      "EFEM",
      "반도체장비",
      "Robot",
      "LoadPort",
      "Aligner",
      "장비자동화",
      "C++",
      "MFC"
    ],
    stack: [
      "C++",
      "MFC",
      "Win32 API",
      "장비 I/O 제어",
      "상태 기반 시퀀스(State Machine)",
      "알람/인터락 관리",
    ],

    overview:
      "반도체 공정 장비의 전면 자동화 모듈인 EFEM(Equipment Front End Module) "
      + "소프트웨어를 개발했습니다. "
      + "Robot, Load Port, Aligner를 포함한 EFEM 구성 요소를 통합 제어하며, "
      + "자동 운전 시퀀스와 장비 보호를 위한 인터락, "
      + "알람 및 에러 복구 로직을 중심으로 설계·구현했습니다. "
      + "현장 양산 운전 환경에서 장비 정지 없이 안정적으로 동작하는 것을 목표로 했습니다.",

    problem: [
      "EFEM은 Robot·Load Port·Aligner가 동시에 동작해, 시퀀스 충돌 시 장비 손상 위험이 큼",
      "인터락 정의가 불명확하면 장비는 멈추지 않아도 ‘잘못된 동작’을 수행할 수 있음",
      "알람 발생 후 복구 절차가 정리되지 않으면 현장 대응 시간이 급격히 늘어남",
    ],

    solution: [
      "EFEM 전체 동작을 상태 기반(State Machine)으로 정의해 자동 운전 흐름을 명확히 구성",
      "Robot 이동, Slot 상태, Load Port 도어/클램프 상태, Aligner 동작을 인터락으로 보호",
      "알람 발생 시 원인·조치 방향을 구분해 단순 리셋이 아닌 단계적 복구 흐름 설계",
      "수동 운전/유지보수 모드를 분리해 자동 운전과 충돌하지 않도록 구현",
    ],

    scope: [
      "[자동 운전] EFEM Auto Sequence 구성 (Load → Align → Process → Unload)",
      "[로봇 제어] Wafer/Glass 이송 로봇 동작 제어 및 위치 인터락",
      "[Load Port] Cassette/Slot 상태 관리, 도어·클램프 인터락",
      "[Aligner] 얼라인 동작, 정렬 완료 상태 확인 및 다음 시퀀스 연계",
      "[인터락] 충돌 방지, 상태 불일치 방지, 잘못된 조작 차단",
      "[알람] 장비 알람 정의, 등급 분류, 메시지 표시",
      "[복구] 알람 발생 후 Reset / Resume / Manual Recovery 시나리오 구현",
      "[유지보수] 수동 동작, 점검 모드, 엔지니어용 제어 화면 구성",
    ],

    results: [
      "EFEM 자동 운전 시 시퀀스 충돌 및 오동작 리스크 감소",
      "알람 발생 시 현장 엔지니어가 절차에 따라 빠르게 복구 가능",
      "양산 운전 환경에서 장비 안정성 및 운용 신뢰도 확보",
    ],
    
    screenshots: [
      { src: "/projects/efem/cover.png", alt: "시스템 메인 화면" },
      { src: "/projects/efem/lot_start.png", alt: "Lot Start 화면" },
      { src: "/projects/efem/lot_choice.png", alt: "Recipe 선택 화면" },
      { src: "/projects/efem/io.png", alt: "dio 화면" },
      { src: "/projects/efem/nexiv.png", alt: "nexiv 화면" },
      { src: "/projects/efem/robot.png", alt: "robot 화면" },
    ],
  },

  {
    slug: "oled-llr-repair",
    title: "[C++·MFC] OLED LLR Repair 장비 제어 소프트웨어 개발",
    subtitle: "OCless 레이저 라인 리페어 · 결함 자동 검출 및 레이저 수리 · CIM 연동 · 좌표 보정 엔진",
    period: "2014.02 (포트폴리오 기준)",
    role: "아키텍처 설계 / 제어 시퀀스 구현 / 좌표 보정 엔진 / CIM 연동",
    tags: [
      "OLED",
      "LaserRepair",
      "OCless",
      "C++",
      "MFC",
      "CIM연동",
      "장비제어",
      "좌표보정",
    ],
    stack: [
      "C++ / MFC",
      "Win32 API",
      "EKSPLA Laser",
      "CRYLAS Laser",
      "UMAC Gantry (XYT 스테이지)",
      "MELSEC PLC (BIT/WORD)",
      "FTP / TCP/IP",
      "Camera SDK",
      "SQLite / INI 설정 파일",
    ],

    overview:
      "OLED 디스플레이 패널 제조 공정에서 발생하는 라인 결함(Line Defect)을 검출하고, " +
      "레이저로 자동 수리(Repair)하는 장비의 제어 소프트웨어를 개발했습니다. " +
      "OCR 스캐너 없이 CIM 서버에서 결함 좌표 데이터를 FTP로 직접 수신하는 OCless 구조를 적용했습니다. " +
      "EKSPLA / CRYLAS 듀얼 레이저, UMAC Gantry 스테이지, 다중 렌즈 카메라, PLC I/O를 통합 제어하며 " +
      "Glass 1매당 최대 500개 결함을 자동 순회·수리하는 전체 시퀀스를 설계하고 구현했습니다.",

    problem: [
      "OCR 스캐너 없이 CIM 서버 FTP 결함 데이터만으로 정확한 수리 위치를 결정해야 함",
      "Gantry 직각도·왜곡각·크로스마크 틀어짐 등 기구적 오차가 레이저 조사 위치 불일치로 이어짐",
      "EKSPLA/CRYLAS 두 종류의 레이저와 5×~50× 다중 렌즈를 공정 조건에 따라 동적으로 전환해야 함",
      "Glass당 결함 수백 개를 무중단으로 처리하면서 CIM 결과 보고까지 자동화해야 함",
    ],

    solution: [
      "FTP 결함 Raw Data 수신 후 LR Logic 테이블 기반으로 수리 대상 자동 판별·분류",
      "Physical ↔ Logical 좌표 변환 엔진 구현 — Gantry 직각도, 판넬 왜곡, Cross Mark 보정을 단계별 적용",
      "레이저 타입·렌즈·조사 경로를 레시피(Job/Process Recipe)로 분리해 공정 변경 시 소프트웨어 수정 없이 대응",
      "전체 수리 시퀀스를 State Machine으로 정의하고 Power Meter 실시간 확인·로그 기록으로 품질 추적",
    ],

    scope: [
      "[제어 시퀀스] Glass 로딩 → FTP 데이터 수신 → 좌표 변환 → 스테이지 이동 → 카메라 확인 → 레이저 조사 → CIM 결과 보고",
      "[좌표 보정] Physical↔Logical 변환, Gantry 직각도·왜곡각 보정, Cross Mark 기준 Panel 원점 설정",
      "[레이저 제어] EKSPLA / CRYLAS 듀얼 레이저, Q-Switch(Single/Continuous/Burst), ATT·Shutter·파장 제어",
      "[카메라/비전] CCamView 다중 렌즈(2×~50×UV) 전환, Auto Focus, 결함 패턴 라인 드로잉, ADR Edge 감지",
      "[레시피] Job Recipe / Process Recipe 이중 구조 — RGB/W 채널별 레이저 경로 파라미터 관리",
      "[CIM 연동] MELSEC PLC(BIT/WORD), TCP/IP Host, FTP 결함/결과 데이터 송수신",
      "[데이터 관리] Lot/Cell/Defect 단위 Raw·Sum 데이터 기록, 알람 이력, 운전 로그",
      "[UI] MFC FormView 기반 — 메인 제어, 알람, 레시피 편집(DMRecipe Grid), 수동 운전 화면",
    ],

    results: [
      "Glass 1매당 최대 500개 결함 자동 순회 수리 — 무중단 양산 운전 달성",
      "좌표 보정 엔진으로 서브픽셀 단위 레이저 조사 정밀도 확보",
      "OCless 구조로 OCR 스캐너 설비 비용 절감 및 장비 단순화",
      "운전 로그·Power Meter 이력 기반으로 현장 불량 원인 분석 시간 단축",
    ],

    screenshots: [
      { src: "/projects/oled-llr-repair/cover.png",       alt: "메인 자동 운전 화면 — Glass Map, 결함 상태, 시퀀스 로그, 레이저 상태" },
      { src: "/projects/oled-llr-repair/defect_list.png", alt: "결함 리스트 — Lot/Cell 정보, R/G/B/W 채널별 결함 목록 및 판정 결과" },
      { src: "/projects/oled-llr-repair/recipe.png",      alt: "Process Recipe — Line Path 그리드, RGB 채널별 레이저 경로 파라미터 편집" },
      { src: "/projects/oled-llr-repair/camview.png",     alt: "카메라 뷰 — 20× 렌즈 결함 확인, ADR Edge 감지, Jog/Shot 제어" },
      { src: "/projects/oled-llr-repair/axis_maint.png",  alt: "Axis 유지보수 — Gantry XYT/Z 스테이지 상태, Teaching/좌표 보정" },
      { src: "/projects/oled-llr-repair/history.png",     alt: "알람 이력 — Alarm History, 레이저/스테이지/CIM 알람 분류 및 조회" },
    ],
  },

  {
    slug: "gem300-driver",
    title: "[C++·MFC] 반도체 장비용 GEM 통신 자동화 프로그램 개발",
    subtitle: "SECS/GEM · GEM300 기반 장비 상태/이벤트 자동화 · 로그 중심 안정화 설계",
    period: "2024.09 – 2024.12 (포트폴리오 기준)",
    role: "통신 구조 설계 / 상태·이벤트 정의 / 로그·복구 시나리오 구현",
    tags: ["SECS/GEM", "GEM300", "반도체장비", "장비자동화", "C++", "MFC"],
    stack: [
      "C++",
      "MFC",
      "SECS/GEM (E30/E37/E40/E87)",
      "EZGem300 DLL",
      "TCP/IP",
      "Win32 API",
      "로그/상태 관리",
    ],

    overview:
      "반도체 장비와 호스트 간 자동화를 위해 SECS/GEM 및 GEM300 표준 기반의 "
      + "통신 자동화 프로그램을 개발했습니다. "      
      + "상태(State)·이벤트(Event)·로그(Log) 흐름을 중심으로 구조를 설계했습니다. "
      + "PR Job / Control Job, Carrier·SlotMap 동기화, 이벤트 보고(E87) 등을 포함하며 "
      + "장비 운전 중 통신 장애 발생 시에도 복구 가능한 시나리오를 고려해 구현했습니다.",

    problem: [
      "SECS/GEM 규격은 방대하고, 상태·이벤트·알람이 얽히면 ‘정상처럼 보이는 비정상’ 상태가 발생",
      "통신 재연결 시 상태 동기화가 되지 않으면 호스트와 장비 간 인식 불일치 발생",
      "로그 구조가 부실하면 현장 이슈 재현·원인 분석이 사실상 불가능",
    ],

    solution: [
      "장비 상태(State), 이벤트(Event), 알람(Alarm)을 명확히 구분해 흐름을 설계",
      "통신 연결/해제/재연결 시점마다 상태 재동기화 로직을 명시적으로 구성",
      "모든 SECS 메시지 송수신을 로그로 구조화해, 현장 이슈를 시간 순서로 추적 가능하게 구현",
      "PR Job / Control Job / Carrier / SlotMap 상태를 GEM300 시나리오에 맞게 관리",
    ],

    scope: [
      "[기획] 장비 자동화 시나리오 정의(SECS/GEM · GEM300 기준), 운전/복구 흐름 정리",
      "[통신] SECS-II 메시지 송수신 처리, TCP/IP 기반 호스트 연결 관리",
      "[상태관리] Equipment/Process/Carrier/Port 상태 정의 및 전이 관리",
      "[이벤트] E30/E87 이벤트 보고(Event Report) 및 Host 요청 처리",
      "[로그] 모든 통신·상태·이벤트 로그 구조화(시간/방향/내용 기준)",
      "[운영] 통신 장애·재연결 상황에서도 장비 운전 지속 가능하도록 복구 시나리오 구현",
    ],

    results: [
      "호스트 연동 시 발생하는 통신/상태 이슈를 로그 기반으로 빠르게 분석 가능",
      "재연결 이후에도 장비·호스트 상태 불일치 없이 자동화 흐름 유지",
      "현장 엔지니어가 ‘왜 멈췄는지’를 바로 판단할 수 있는 운영 친화적 구조 확보",
    ],

    screenshots: [
      { src: "/projects/gem300-driver/cover.png", alt: "GEM 통신 자동화 프로그램 메인 화면" },
      { src: "/projects/gem300-driver/monitor.png", alt: "SECS/GEM 메시지 송수신 모니터링 및 로그 화면" },
      { src: "/projects/gem300-driver/log.png", alt: "이벤트/상태 로그 상세 분석 화면" },
    ],
  },  
];

export function getProjectBySlug(slug: string) {
  const key = decodeURIComponent(slug).trim().toLowerCase();
  return projects.find((p) => p.slug.trim().toLowerCase() === key);
}


