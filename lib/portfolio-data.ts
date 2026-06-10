export const siteConfig = {
  url: "https://kngyeol-portfolio.vercel.app",
  title: "김동열 | Robotics & Autonomous Driving Portfolio",
  description:
    "ROS2/Nav2 기반 실내 이동 로봇, Autoware 기반 자율주행, CAN/HILS 검증과 AI 컴퓨터비전을 다루는 김동열의 포트폴리오입니다.",
} as const

export const profile = {
  name: "김동열",
  nameEn: "Kim Dongyeol",
  role: "Embedded Engineer",
  title: "Embedded · Robotics · Autonomous Driving Engineer",
  tagline: "인지부터 제어까지, 한 흐름으로.",
  summary:
    "ROS2/Nav2 기반 실내 이동 로봇, Autoware 기반 자율주행, CAN/HILS 검증을 경험했습니다. LLM 명령 브리지부터 센서·제어·운영 도구까지 — 직접 만들고 실차·실장비로 검증합니다.",
  contact: {
    email: "henry3447@naver.com",
    github: "https://github.com/kngyeol",
    linkedin: "",
  },
}

export const skills: Record<string, string[]> = {
  "자율주행/로봇": [
    "ROS",
    "ROS2",
    "Nav2",
    "Autoware",
    "SLAM Toolbox",
    "Kalman Filter",
    "PID",
    "Lanelet2",
    "ArUco",
    "RoboCrew",
    "MQTT",
  ],
  "딥러닝/AI": [
    "PyTorch",
    "YOLOv8/v9",
    "Qwen-VL",
    "BLIP-2",
    "TensorRT",
    "LoRA",
    "ONNX",
  ],
  "FPGA/임베디드": [
    "Vivado",
    "Verilog",
    "Xilinx Zynq",
    "STM32",
    "FreeRTOS",
    "Jetson Orin/Nano",
    "Arduino",
    "Raspberry Pi",
  ],
  통신: ["CAN (SocketCAN)", "AXI", "UART", "I2C", "SPI", "WebSocket"],
  백엔드: ["Spring Boot", "PostgreSQL", "Redis", "MyBatis"],
  프론트엔드: ["Vue 3", "React", "Next.js", "TypeScript", "Pinia", "Firebase"],
}

export interface Experience {
  id: number
  company: string
  position: string
  period: string
  description: string
  highlights: string[]
  techStack: string[]
}

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Skyautonet",
    position: "자율주행SW개발부 인턴",
    period: "2024.09 - 2024.12",
    description:
      "Level 4 자율주행 트럭/청소차(FODRo) 개발. ROS2/Autoware 기반 인지-판단-제어 로직 개발 및 CAN 통신, HILS 검증.",
    highlights: [
      "Planning Manager: Lanelet2 기반 경로 자동 생성, External Lane Change 구현",
      "FOD Manager: 다중 FOD 클러스터링 + 우선순위 정렬 알고리즘",
      "CAN Converter: ROS2 토픽 ↔ CAN 메시지 변환, 쿼터니언→Yaw 변환",
      "HILS 시뮬레이션: vcan 기반 가상 CAN 환경 구축, 시나리오 검증",
      "HMI 통합: Qt5 UI 버그 수정, 토픽 데이터 타입 동기화",
      "fodro_main_processor: 33 commits / skyautonet_lv4_main: 10 commits",
    ],
    techStack: ["ROS2 Humble", "Autoware Universe", "C++", "CAN (SocketCAN)", "Qt5", "Lanelet2", "Python"],
  },
]

export interface Education {
  id: number
  school: string
  degree: string
  major: string
  period: string
  gpa?: string
  notes?: string[]
}

export const education: Education[] = [
  {
    id: 1,
    school: "건국대학교",
    degree: "학사",
    major: "전기전자공학부",
    period: "2019.03 - 2025.08",
    gpa: "3.38 / 4.5",
  },
  {
    id: 2,
    school: "삼성청년SW·AI아카데미 (SSAFY)",
    degree: "14기 수료",
    major: "임베디드/모빌리티 트랙",
    period: "2025.07 - 2026.06",
    notes: ["Python, 알고리즘, 임베디드, AI, 웹 풀스택"],
  },
]

export interface Award {
  id: number
  title: string
  organization: string
  date: string
  description?: string
}

export const awards: Award[] = [
  {
    id: 1,
    title: "창의설계경진대회 장려상",
    organization: "건국대학교",
    date: "2024.09",
    description: "차량의 주변상황과 차량상태 인지시스템",
  },
]

export interface Certificate {
  id: number
  name: string
  score?: string
  date: string
}

export const certificates: Certificate[] = [
  { id: 1, name: "TOEIC", score: "885", date: "2024.03" },
  { id: 2, name: "OPIc", score: "IM2", date: "2025.02" },
]

export type ProjectMediaType = "image" | "video" | "document"

export interface ProjectMedia {
  type: ProjectMediaType
  src: string
  alt: string
  caption?: string
  poster?: string
  label?: string
}

export interface ProjectSection {
  type: "flowchart" | "table" | "text" | "code"
  title: string
  content: unknown
}

export interface Project {
  id: number
  slug: string
  title: string
  subtitle: string
  period: string
  organization: string
  description: string
  highlights: string[]
  role: string[]
  techStack: string[] | Record<string, string[]>
  category: string
  github?: string
  metrics?: string[]
  status: "completed" | "in-progress" | "planned"
  heroMedia?: ProjectMedia
  media?: ProjectMedia[]
  heroImage?: string
  images?: ProjectMedia[]
  sections?: ProjectSection[]
  troubleshooting?: string[]
  futureWork?: string[]
}

export const categories = [
  { name: "전체", icon: "layers" },
  { name: "자율주행 / 로봇", icon: "robot" },
  { name: "AI / 컴퓨터비전", icon: "brain" },
  { name: "웹 / 풀스택", icon: "globe" },
  { name: "임베디드 / FPGA", icon: "cpu" },
] as const

export const projects: Project[] = [
  // ===== Skyautonet 인턴 프로젝트 =====
  {
    id: 15,
    slug: "fodro",
    title: "FODRo - 활주로 이물질 제거 로봇",
    subtitle: "차량 통신(CAN) · HILS · 인턴",
    period: "2024.09 - 2024.12",
    organization: "Skyautonet",
    description:
      "SkyAutonet 인턴십에서 진행한 활주로/도로 이물질(FOD) 탐지·제거 자율 로봇 프로젝트. FOD 운영 로직(FOD Manager·청소 상태 발행)과 ROS2→차량 CAN 변환, vcan 기반 HILS 검증 환경을 담당했습니다.",
    highlights: [
      "감지된 FOD 객체를 ego pose 기준 map pose로 변환, Lanelet2 current/next lane 검증 + 2m 클러스터링으로 유효 FOD 목록 관리",
      "AUTO_CLEAN 청소 장비 제어 + cleaning state 발행, 다중 FOD 우선순위(거리·반대방향) 정렬 로직 설계",
      "FODRo HILS: vcan으로 actuator·상태 CAN 재현해 실차 없이 반복 검증",
      "CAN Converter: yaw 0~360° 정규화 · local→WGS84 역투영 · CAN ID별 byte packing 구현·검증",
      "CAN Converter·byte packing·HILS 검증 — 차량/진단 통신(CAN, CAN FD) 직무와 직결",
    ],
    role: ["FOD Manager", "CAN Converter", "HILS"],
    techStack: ["C++", "ROS2", "Autoware", "CAN (SocketCAN)", "vcan (HILS)", "Qt5"],
    category: "자율주행 / 로봇",
    metrics: ["4개월 실무 운영", "40+ 일간 보고", "9+ 주간 보고"],
    status: "completed",
    troubleshooting: [
      "Yaw·좌표 정규화: HILS 검증 중 변환한 yaw·좌표가 차량 CAN 프로토콜과 어긋남(yaw −180~180° vs CAN 0~360°, local pose(map) vs GNSS WGS84) → 음수 yaw에 360°를 더해 정규화하고 map_projector로 WGS84 역투영, offset/factor로 raw value 생성해 EKF localization 연결을 HILS에서 반복 검증",
      "Proxy(HMI) route 전달 QoS: route를 proxy server로 HMI에 전달할 때 늦게 구독한 노드가 마지막 route를 받지 못함 → transient_local QoS(latched)로 전환하고 route 미수신 상태를 별도 분기로 처리",
      "다중 FOD 처리: 여러 FOD를 동시에 다룰 때 포즈·차선 기준이 흔들림 → 감지 객체를 ego→map pose로 변환한 뒤 lanelet orientation·current/next lane 기준으로 2m 클러스터링 + 우선순위(거리·반대방향) 정렬",
    ],
    heroMedia: { type: "image", src: "/projects/fodro/fod-clean-rviz.png", alt: "FODRo FOD 청소 경로 (RViz)" },
    media: [
      { type: "image", src: "/projects/fodro/yaw-output.png", alt: "Yaw 0~360 정규화 출력", caption: "쿼터니언→Yaw rad→deg + 음수 +360°로 0~360° 정규화 후 정상 출력" },
      { type: "image", src: "/projects/fodro/transient-local-error.png", alt: "map_projector transient_local 에러", caption: "Invalid map projector type — QoS transient_local 미설정 시 노드 종료" },
      { type: "image", src: "/projects/fodro/can-frame-def.png", alt: "CAN 프레임 정의", caption: "0x100 lat/lon(factor 1e-7)·0x101 Yaw(0~360) CAN 프레임 정의" },
      { type: "image", src: "/projects/fodro/can-send-dump.png", alt: "CAN 송신 덤프", caption: "hil_actuator CAN 송신 + candump 확인" },
      { type: "image", src: "/projects/fodro/fod-db-sort-code.png", alt: "다중 FOD DB 정렬 코드", caption: "FodDB(): 반대방향 pose 우선 + 거리순 정렬" },
      { type: "image", src: "/projects/fodro/reverse-mode-rviz.png", alt: "REVERSE 모드 rviz", caption: "FOD 후진(REVERSE) 모드 — R gear, 후진 경로" },
      { type: "image", src: "/projects/fodro/fod-clean-rviz.png", alt: "FOD 청소 경로 rviz", caption: "FOD 청소 경로 생성·주행" },
    ],
  },
  {
    id: 16,
    slug: "skyautonet-lv4",
    title: "Level 4+ 자율주행 플랫폼",
    subtitle: "ROS2 자율주행 · HILS · 인턴",
    period: "2024.09 - 2024.12",
    organization: "Skyautonet",
    description:
      "SkyAutonet 인턴십에서 진행한 Autoware 기반 Level 4 자율주행 플랫폼 프로젝트. Lanelet2 기반 경로 생성·리루팅과 외부 차선변경 연동(Planning Manager), HILS actuator·HMI 연동을 담당했습니다.",
    highlights: [
      "Lanelet2 기반 target lanelet 탐색 + distance-limited route 생성 + 잔여거리 기반 reroute 구현",
      "외부(HMI) 차선변경 service 호출 후 route reset, DrivingStatus 구독·flag 초기화로 변경 차선 기준 경로 재생성",
      "Lv4 HILS: OperationMode·DrivingStatus 기반 control enable 분기, actuator/state CAN(0x200) 매핑",
      "상태 CAN(0x200) 매핑·HILS 반복 검증 — 임베디드 통신·검증 경험",
    ],
    role: ["Planning Manager", "HILS", "HMI 연동"],
    techStack: ["C++", "ROS2", "Autoware", "Lanelet2", "CAN (SocketCAN)", "vcan (HILS)", "Qt5"],
    category: "자율주행 / 로봇",
    metrics: ["실차 없이 반복 검증", "Lanelet2 리루팅", "상태 CAN 0x200"],
    status: "completed",
    troubleshooting: [
      "Lane-change Reroute: 외부(HMI) 차선변경 후 rerouting이 이전 차선 기준으로 생성돼 차량이 바뀐 차선을 따라가지 못함 → DrivingStatus(LANE_CHANGE·LEFT/RIGHT) 구독 + 방향별 lane-change service 호출 + AUTONOMOUS 복귀 시 flag 초기화 + route reset으로 변경 차선 기준 경로 재생성",
      "토픽·메시지 타입 동기화: planning·UI·HILS 파트가 각자 개발해 토픽명·메시지 타입이 어긋나 통합이 깨짐 → 토픽명 표준화 + 메시지 타입 동기화로 파트별 독립 개발과 통합 테스트가 가능하도록 정리",
      "HILS actuator·control enable: 실차 없이 actuator를 재현하고 OperationMode·DrivingStatus 기반으로 control enable을 분기 → vcan HILS로 actuator/state CAN(0x200)을 매핑해 반복 검증",
    ],
    heroMedia: { type: "image", src: "/projects/skyautonet-lv4/hmi.png", alt: "SkyAutonet Lv4 운영자 HMI" },
    media: [
      { type: "image", src: "/projects/skyautonet-lv4/hmi.png", alt: "HMI 운영자 화면", caption: "Qt5 HMI — AUTONOMOUS 상태·센서·dummy generate·START/STOP" },
      { type: "image", src: "/projects/skyautonet-lv4/marker-overlap-before.png", alt: "Lanelet marker 겹침(전)", caption: "회색 roads marker가 다른 marker를 가림 (수정 전)" },
      { type: "image", src: "/projects/skyautonet-lv4/marker-overlap-after.png", alt: "Lanelet marker 겹침(후)", caption: "marker z축 조정으로 겹침 해소 (수정 후)" },
      { type: "image", src: "/projects/skyautonet-lv4/lane-change-rviz.png", alt: "차선변경 경로 rviz", caption: "external lane change 후 변경 차선 기준 경로 생성" },
      { type: "image", src: "/projects/skyautonet-lv4/lane-change-service.png", alt: "lane change service 코드", caption: "external_request_lane_change service 연동 코드" },
      { type: "image", src: "/projects/skyautonet-lv4/getendoflane-footprint.png", alt: "GetEndOfLaneGoal footprint", caption: "footprint 축소로 차선 내 158m route 정상 생성" },
      { type: "image", src: "/projects/skyautonet-lv4/hils-state-can-code.png", alt: "HILS state CAN 코드", caption: "create_state_msg() — autonomous_mode 분기, State CAN 0x200" },
    ],
  },

  // ===== 자율주행 / 로봇 =====
  {
    id: 14,
    slug: "scv",
    title: "SCV - Smart Companion Vehicle",
    subtitle: "자연어 명령 기반 이동형 AI 홈 어시스턴트",
    period: "2026.03 - 2026.05",
    organization: "TEAM A207",
    description:
      "자연어 명령을 실행 가능한 주행·정렬·조작 흐름으로 변환하고, ROS2/Nav2 주행과 비전 정렬, 로봇팔 런타임을 연결한 Smart Companion Vehicle 프로젝트입니다.",
    highlights: [
      "RoboCrew System2 planner → System1 packet server → ROS2 drive bridge로 자연어 명령 실행 경로 구성",
      "Nav2/AMCL/SLAM 기반 실내 주행과 motion_coordinator, trolley_motion_adapter 제어 경로 통합",
      "Yahboom mecanum base USB serial runtime, BNO085 IMU, RPLiDAR/RealSense bringup 정리",
      "vision alignment, AprilTag 기반 정밀 정렬, 로봇팔 runtime helper를 서비스 시나리오에 연결",
      "stub-hardware smoke mode, web teleop, map helper로 반복 검증 가능한 시연 운영 환경 구성",
    ],
    role: ["Autonomous Driving", "ROS2 Integration", "LLM Drive Bridge", "Runtime Tools"],
    techStack: [
      "ROS2 Humble",
      "Nav2",
      "AMCL",
      "SLAM Toolbox",
      "Python",
      "C++",
      "RoboCrew",
      "RealSense",
      "RPLiDAR",
      "BNO085",
    ],
    category: "자율주행 / 로봇",
    metrics: ["ROS2/Nav2 runtime", "LLM drive bridge", "vision alignment"],
    status: "completed",
    heroMedia: { type: "image", src: "/projects/scv/cover.png", alt: "SCV - Smart Companion Vehicle" },
    media: [
      {
        type: "video",
        src: "/projects/scv/scv-video-portfolio.mp4",
        poster: "/projects/scv/scv-video-portfolio.jpg",
        alt: "SCV video portfolio",
        caption: "주행, 시뮬레이션, 하드웨어 통합 흐름을 정리한 영상 포트폴리오",
      },
      { type: "image", src: "/projects/scv/mecanum-drift.png", alt: "메카넘 드리프트 보정", caption: "strafe 시 +0.17m body-x drift → cmd_vel_corrector feedforward로 보정 (전/후 비교)" },
      { type: "image", src: "/projects/scv/sils-tuning.jpg", alt: "Nav2 SILS 반복 튜닝", caption: "실패 발견 → SILS 후보 반복 검증 → 안정 경로 선정 (start→water 5/5)" },
      { type: "video", src: "/projects/scv/sils-scaling.mp4", alt: "SILS 후보 스케일링", caption: "24 worker 후보 병렬 평가 (real2sim 루프)" },
      { type: "video", src: "/projects/scv/robot-arm-failure.mp4", poster: "/projects/scv/robot-arm-failure.jpg", alt: "로봇팔 HITL 실패 패턴", caption: "로봇팔 파지 실패 패턴 → human-in-the-loop 피드백 보정" },
      { type: "image", src: "/projects/scv/hw-arch.png", alt: "SILS/HILS 하드웨어 아키텍처", caption: "SILS/HILS 하드웨어 대시보드 구성" },
      { type: "image", src: "/projects/scv/encoder-diagnosis.png", alt: "Yahboom 4CH 엔코더 진단", caption: "Yahboom 4CH 보드 엔코더 입력 포트 불량 규명 — 전압 측정 + 교차 테스트로 결정적 격리" },
      {
        type: "document",
        src: "/projects/scv/scv-presentation.pdf",
        alt: "SCV final presentation deck",
        label: "최종 발표자료 PDF",
        caption: "SCV 최종 발표자료",
      },
    ],
    sections: [
      {
        type: "flowchart",
        title: "실행 파이프라인",
        content: [
          { label: "App / Voice", sublabel: "사용자 명령" },
          { label: "RoboCrew System2", sublabel: "LLM planner" },
          { label: "System1 Packet Server", sublabel: "실행 packet" },
          { label: "ROS2 Drive Bridge", sublabel: "Nav2 / relative motion" },
          { label: "Motion Adapter", sublabel: "cmd_vel / motion mode" },
          { label: "Yahboom Runtime", sublabel: "mecanum base" },
        ],
      },
      {
        type: "table",
        title: "핵심 패키지",
        content: {
          headers: ["패키지", "역할"],
          rows: [
            ["trolley_driver", "Yahboom UART driver, mecanum IK, encoder odom"],
            ["trolley_nav_bringup", "Nav2, SLAM, AMCL, sensor launch"],
            ["robocrew_ros_adapter", "RoboCrew packet drive bridge"],
            ["motion_coordinator", "motion mode FSM과 cmd_vel 중재"],
            ["trolley_motion_adapter", "LLM drive stack command adapter"],
          ],
        },
      },
    ],
    troubleshooting: [
      "Nav2 ↔ 메카넘휠 불일치: 메카넘에 맞는 Nav2 플러그인을 탐색하고 직접 주행시키며 적합한 모델을 선택, 이후 로봇에 맞게 파라미터 튜닝",
      "멀티허브 전압 피크: 라이다·IMU·모터드라이버·로봇팔·카메라를 허브로 연결 시 실행 순간 전압 피크로 라이다·카메라가 켜지지 않음 → 실행 스크립트에서 라이다 런치를 먼저 실행하고 완료를 트래킹해 기다린 뒤 민감한 노드부터 순차 실행",
      "cmd_vel 다중 소스 충돌: Nav2·LLM Precision mode·사용자 컨트롤이 동시에 cmd_vel을 발행해 모터 제어가 꼬임 → 모든 cmd를 한 곳에서 관리하는 motionCoordinator를 개발, state·우선순위로 단일 중재",
      "메카넘 드리프트(하드웨어 한계): teleop·precision 모드에서 직진·strafe·회전이 의도와 다르게 이동 → IMU·EKF·LiDAR 위치추정으로 heading을 유지하도록 이동 중 지속 보정하는 노드를 설계해 소프트웨어로 보정",
      "Nav2 경로 일관성: 메카넘 슬립·드리프트로 실행마다 경로가 크게 달라짐 → real2sim 시뮬레이션 환경 구축, teleop 정답 주행을 rosbag으로 저장해 시뮬레이션에 연동, AI agent를 SILS 루프에 투입해 Nav2 파라미터를 강화학습으로 반복 튜닝(경로 일관성 + 장애물 회피 + 목적지 좌표·heading 오차 최소화)",
    ],
    futureWork: ["auto initial pose", "CAN/F446ZE gateway production integration", "precision calibration 고도화"],
  },
  {
    id: 1,
    slug: "balemale",
    title: "Balemale - AI 스마트 자율 주차 로봇",
    subtitle: "SSAFY 자율 프로젝트",
    period: "2026.01 - 2026.02",
    organization: "SSAFY",
    description:
      "ArUco 마커 내비게이션 + AI 번호판 인식(ANPR) 기반 4WD Mecanum 자율 주차 로봇. 12개 슬롯 관리, 입고/출차 전 과정 자동화.",
    highlights: [
      "YOLOv8 + EasyOCR 번호판 인식 (Jetson TensorRT / RPi ONNX)",
      "ArUco 28개 마커 기반 자율 주행 (vx + vy + wz 동시 제어)",
      "18개 상태 FSM 기반 입고/출차 오케스트레이션",
      "3단계 자율 주차: PARALLEL → ANGLE → CENTER 정렬",
      "Dijkstra 경로탐색, 이상 탐지 시 대체 경로 재할당",
      "Spring Boot 4.0 백엔드 + Vue 3 키오스크 + PortOne 결제",
    ],
    role: ["AI", "Embedded", "Hardware", "Backend"],
    techStack: [
      "ROS2 Humble",
      "Python",
      "YOLOv8",
      "TensorRT",
      "ArUco",
      "Kalman Filter",
      "MQTT",
      "Spring Boot",
      "Vue 3",
      "PostgreSQL",
      "Jetson Orin Nano",
    ],
    category: "자율주행 / 로봇",
    github: "https://github.com/kngyeol/balemale",
    metrics: ["18개 FSM 상태", "28개 ArUco 마커", "12개 주차 슬롯"],
    status: "completed",
    troubleshooting: [
      "전원 문제: 12V 모터 4개 + Jetson을 단일 배터리로 연결 시 전압 강하 발생 → Jetson용·모터용 배터리를 분리",
      "라인트레이싱 → 마커 기반 주행 전환: 차량 대비 맵이 작아 메카넘 주행 시 라인이 빠르게 시야를 벗어나 위치를 잃음 → 멀리서도 방향이 조금 틀어져도 잡히는 마커 기반 주행(차량 위치 + 마커 상대좌표)으로 변경",
      "마커 추적 끊김: 전면 상단 카메라 특성상 마커에 가까워지면 마커가 시야 아래로 사라져 일시적 위치 상실 → 칼만필터 기반 위치 유지로, 다음 마커가 안정적으로 탐지될 때까지 마지막 마커 위치 기반 추정을 유지",
    ],
    heroMedia: { type: "image", src: "/projects/balemale/cover.png", alt: "Balemale 메카넘 자율주차 로봇" },
    media: [
      { type: "image", src: "/projects/balemale/pipeline.png", alt: "ArUco+Kalman 위치추정 파이프라인", caption: "카메라 → ArUco 마커 → 칼만필터 → 위치추정 파이프라인" },
      { type: "image", src: "/projects/balemale/demo.png", alt: "ArUco 28마커 주차 시연", caption: "흰 격자 바닥 위 메카넘 로봇 + ArUco 마커 실물 시연" },
      { type: "image", src: "/projects/balemale/hardware.png", alt: "적재 하드웨어 실물", caption: "그리퍼 + 리니어 액추에이터 (Rack&Pinion)" },
      { type: "document", src: "/projects/balemale/balemale-deck.pdf", alt: "Balemale 발표자료", label: "발표자료 PDF", caption: "Balemale 발표자료" },
    ],
  },
  {
    id: 2,
    slug: "teamkai",
    title: "TeamKAI - 자율주행 자작차",
    subtitle: "인지 파트장",
    period: "2023.11 - 2024.11",
    organization: "건국대학교 Team KAI",
    description:
      "콘(cone) 기반 트랙에서 LiDAR, 카메라, GPS, IMU를 활용한 ROS 기반 완전 자율주행 시스템.",
    highlights: [
      "LiDAR 콘 검출: RANSAC + 유클리디안 클러스터링 (0~20m, PCL)",
      "YOLOv5/v8 콘 객체 검출 + 카메라-LiDAR 센서퓨전",
      "Bezier 경로 생성 + Stanley/Pure Pursuit 추종 (10Hz)",
      "CAN 버스 조향 + ESP32 PID 속도 제어 (Kp=90, Ki=0.025, Kd=20)",
      "18개 FSM 기반 상태 관리, E-Stop 안전장치",
    ],
    role: ["인지 파트장", "Perception", "Planning"],
    techStack: ["ROS Noetic", "C++", "Python", "PCL", "OpenCV", "PyTorch", "SocketCAN", "ESP32"],
    category: "자율주행 / 로봇",
    github: "https://github.com/kngyeol/TeamKAI",
    metrics: ["18개 FSM", "센서 5종 융합"],
    status: "completed",
    troubleshooting: [
      "LiDAR 과부하: 입력 pointcloud가 너무 비대해 필요한 정보 추출이 어렵고 처리 과부하 발생 → 콘 트랙 정보만 남기도록 전처리를 하나씩 조합·검증하며 최적 파이프라인 구축",
      "트랙 좌/우 구분: LiDAR만으로는 좌/우 구분이 어렵고 차량 heading이 바뀌면 좌우가 반전됨(경로 생성에 필수) → 색상 기반 카메라 센서퓨전을 고안(실적용은 못함), 대안으로 현재 위치에서 가까운 좌/우 콘을 기억하고 인접 콘을 이어가며 좌/우 배열을 분리 처리",
      "2랩 주행 전략: 대회 룰상 2바퀴 주행 → 1랩에서 트랙맵을 작성하고 2랩에서 맵 기반으로 빠르게 주행하는 SLAM 전략 수립(완전 구현은 못함)",
    ],
    heroMedia: { type: "image", src: "/projects/teamkai/cone-track.jpg", alt: "TeamKAI 콘 트랙 자율주행 실주행" },
    media: [
      { type: "image", src: "/projects/teamkai/cone-track.jpg", alt: "콘 트랙 주행", caption: "주황 콘 트랙 + RC카 실주행" },
      { type: "image", src: "/projects/teamkai/cone-pov.jpg", alt: "콘 검출 POV", caption: "지면 시점 카메라뷰 — 콘 + 트랙 라인" },
    ],
  },
  {
    id: 3,
    slug: "aras",
    title: "ARAS - RC Car ADAS 시스템",
    subtitle: "Advanced RCcar Assist System",
    period: "2025.11 - 2025.12",
    organization: "SSAFY",
    description:
      "Raspberry Pi 5 기반 실제 차량 ADAS 구조를 축소 구현한 지능형 주행 보조 시스템. MQTT 기반 노드 분리 아키텍처.",
    highlights: [
      "5개 노드 구조: lane_node, tof_node, fsm_manager, motor_node, logger_node",
      "MANUAL: 사용자 조종 + 차선 소실 시 자동 복구 조향",
      "AUTO: 차선 중심 자동 추종, 소실 시 복구 시퀀스",
      "ACC: ToF 센서 기반 전방 거리 유지 (Adaptive Cruise Control)",
      "Fail-Safe: 센서 Stale 감지 시 자동 제어 비활성화",
    ],
    role: ["전체"],
    techStack: ["Python", "OpenCV", "MQTT", "UART/Modbus", "PCA9685 PWM", "Raspberry Pi 5", "ToF Sensor"],
    category: "자율주행 / 로봇",
    metrics: ["5개 노드", "3가지 주행 모드"],
    status: "completed",
    heroMedia: { type: "image", src: "/projects/aras/cover.png", alt: "ARAS RC Car ADAS" },
    media: [
      { type: "image", src: "/projects/aras/sw-arch.png", alt: "SW 아키텍처", caption: "tof/lane → fsm_manager → motor/logger (MQTT 노드 분리)" },
      { type: "image", src: "/projects/aras/lane-node.png", alt: "차선 인식(lane_node)", caption: "binary/original/lane 3창 + curvature·offset" },
      { type: "image", src: "/projects/aras/dashboard.png", alt: "4모드 대시보드", caption: "MANUAL/AUTO/ACC/STOP 제어 GUI" },
      { type: "video", src: "/projects/aras/manual.mp4", alt: "MANUAL 시연", caption: "수동 주행 + 차선 소실 시 복구 조향" },
      { type: "video", src: "/projects/aras/auto.mp4", alt: "AUTO 시연", caption: "차선 중심 자동 추종" },
      { type: "video", src: "/projects/aras/acc.mp4", alt: "ACC 시연", caption: "ToF 거리 유지 (Adaptive Cruise Control)" },
      { type: "video", src: "/projects/aras/ai.mp4", alt: "AI 분석 시연", caption: "급가속·급회전·급제동 통계 분석" },
      { type: "document", src: "/projects/aras/aras-deck.pdf", alt: "ARAS 발표자료", label: "발표자료 PDF", caption: "ARAS 발표자료" },
    ],
  },
  {
    id: 4,
    slug: "pathfinders",
    title: "TeamPathfinders - Xycar 자율주행",
    subtitle: "1/10 스케일 자율주행",
    period: "2024.07 - 2024.08",
    organization: "Team Pathfinders",
    description:
      "ROS 기반 Xycar(1/10 스케일 RC카) 플랫폼에서 자율 주차, 신호 감지 자율 주행, 실시간 차선 검출 구현.",
    highlights: [
      "자율 주차: 3차 Bezier 곡선 경로 생성 + Pure Pursuit 추적",
      "자율 주행: HSV 녹색 신호 검출 + IMU 가속도 적분",
      "차선 검출: Canny/Sobel + Bird's-eye View + RANSAC 다항식 피팅",
      "Pygame 시뮬레이터 포함",
    ],
    role: ["전체"],
    techStack: ["ROS Noetic", "Python 3", "OpenCV", "NumPy", "Pygame"],
    category: "자율주행 / 로봇",
    github: "https://github.com/kngyeol/TeamPathfinders",
    status: "completed",
    heroMedia: { type: "image", src: "/projects/pathfinders/lane-pipeline.jpg", alt: "차선 검출 파이프라인" },
    media: [
      { type: "image", src: "/projects/pathfinders/lane-pipeline.jpg", alt: "차선 검출 파이프라인", caption: "원본 + 엣지 + 라인 마스크" },
      { type: "image", src: "/projects/pathfinders/bev.jpg", alt: "BEV 차선 추정", caption: "Bird's-eye View 차선 포인트 추정" },
      { type: "image", src: "/projects/pathfinders/lane.gif", alt: "차선 추적", caption: "실시간 차선 검출" },
    ],
  },

  // ===== AI / 컴퓨터비전 =====
  {
    id: 5,
    slug: "fire-detection-drone",
    title: "Fire & Smoke Detection Drone",
    subtitle: "졸업 프로젝트",
    period: "2024.01 - 2024.06",
    organization: "건국대학교",
    description:
      "YOLOv9 객체 탐지 + Lite-Mono 단안 깊이 추정을 결합하여 화재/연기를 실시간 탐지하고 위험도(Severity)와 경고 레벨(0~3)을 자동 산출.",
    highlights: [
      "YOLOv9-c 화재/연기 탐지 (mAP50: 0.867)",
      "fire: P 0.876 / R 0.828 / mAP50 0.881",
      "smoke: P 0.792 / R 0.814 / mAP50 0.854",
      "Lite-Mono 단안 깊이 추정으로 상대 거리 파악",
      "Structured Pruning + TensorRT 최적화 (4.6ms 추론)",
    ],
    role: ["전체"],
    techStack: ["YOLOv9", "Lite-Mono", "TensorRT", "Structured Pruning", "Jetson Orin", "Gradio"],
    category: "AI / 컴퓨터비전",
    github: "https://github.com/kngyeol/pjt-fire-detect-drone",
    metrics: ["mAP50 0.867", "P 0.834", "R 0.821"],
    status: "completed",
    heroMedia: { type: "image", src: "/projects/fire-detection-drone/detection.jpg", alt: "화재/연기 탐지 결과" },
    media: [
      { type: "image", src: "/projects/fire-detection-drone/detection.jpg", alt: "화재/연기 탐지 결과", caption: "YOLOv9 검증 예측 — fire/smoke bbox + confidence" },
      { type: "image", src: "/projects/fire-detection-drone/pr-curve.png", alt: "PR 곡선", caption: "fire 0.865 / smoke 0.841 / all 0.853 mAP@0.5" },
      { type: "image", src: "/projects/fire-detection-drone/confusion.png", alt: "혼동행렬", caption: "fire 0.88 / smoke 0.83" },
      { type: "image", src: "/projects/fire-detection-drone/results.png", alt: "학습 곡선", caption: "loss · precision · recall · mAP" },
    ],
  },
  {
    id: 6,
    slug: "korean-vqa",
    title: "SSAFY AI Challenge - Korean VQA",
    subtitle: "VLM 기반 4지선다 VQA",
    period: "2025.10",
    organization: "SSAFY",
    description:
      "한국어 이미지 기반 4지선다 VQA 챌린지. 5가지 실험 전략으로 VLM 파인튜닝 및 앙상블 라우팅 구현.",
    highlights: [
      "Qwen2.5-VL-3B LoRA Fine-tuning (4-bit 양자화)",
      "BLIP-2 LoRA (Answer-only loss, Early Stopping)",
      "GPT-4o-mini API (JSON structured output)",
      "Qwen3-VL + InternVL2 Routing Ensemble",
      "한→영 번역 파이프라인 (OPUS-MT)",
    ],
    role: ["전체"],
    techStack: [
      "PyTorch",
      "Qwen2.5-VL",
      "BLIP-2",
      "InternVL2",
      "LoRA (PEFT)",
      "4-bit Quantization",
      "OpenAI API",
    ],
    category: "AI / 컴퓨터비전",
    metrics: ["5개 실험 전략", "다국어 지원"],
    status: "completed",
  },
  {
    id: 7,
    slug: "divary",
    title: "Divary - 다이빙 로그북 AI 생성",
    subtitle: "SSAFY 특화 프로젝트",
    period: "2026.02 - 2026.03",
    organization: "SSAFY",
    description:
      "다이빙 영상 업로드 시 AI가 하이라이트 추출 → 물고기 탐지/분류 → LLM 기반 로그북 자동 생성하는 서비스.",
    highlights: [
      "YOLO-World + NIMA 기반 하이라이트 자동 추출 (상위 5 프레임)",
      "CFD-YOLOv12x 물고기 탐지 + BioCLIP 분류",
      "ByteTrack 객체 추적, K-Means 클러스터링",
      "LLM 기반 다이빙 로그북 자동 생성",
      "AWS SQS + GPU 워커 기반 분산 처리",
    ],
    role: ["Full-Stack", "DevOps", "AI"],
    techStack: ["React", "React Native", "Spring Boot", "YOLO-World", "BioCLIP", "Docker", "Jenkins", "AWS SQS"],
    category: "웹 / 풀스택",
    metrics: ["76/103 전체 커밋", "FE · BE · Infra 전 영역"],
    status: "completed",
    heroMedia: { type: "image", src: "/projects/divary/cover.png", alt: "Divary 다이빙 로그북 앱" },
    media: [
      { type: "image", src: "/projects/divary/fish-detection.png", alt: "AI 어류 탐지/분류", caption: "수중 영상 어류 bounding box + ID 라벨" },
      { type: "image", src: "/projects/divary/model-eval.png", alt: "어류 분류 모델 평가", caption: "mAP@0.50 = 0.7962, best threshold 0.45" },
      { type: "image", src: "/projects/divary/flow.png", alt: "서비스 플로우", caption: "가입 → 업로드 → AI 분석 → 로그 → 통계" },
    ],
  },
  {
    id: 8,
    slug: "menu-scanner",
    title: "Smart Menu Board Scanner",
    subtitle: "음식 분류 + 메뉴판 OCR",
    period: "2023.09 - 2023.12",
    organization: "건국대학교",
    description:
      "외국인 관광객을 위한 한국 음식점 메뉴판 자동 인식. MobileNetV2로 101종 음식 분류, EasyOCR로 한/영 텍스트 인식.",
    highlights: [
      "MobileNetV2 + Food-101 (101종 음식 분류)",
      "EasyOCR 한국어/영어 메뉴판 인식",
      "TPS-ResNet-BiLSTM-Attn OCR 학습 파이프라인 실험",
      "인터랙티브 클릭 → 번역 검색 (Matplotlib)",
    ],
    role: ["전체"],
    techStack: ["PyTorch", "MobileNetV2", "EasyOCR", "deep-text-recognition-benchmark"],
    category: "AI / 컴퓨터비전",
    github: "https://github.com/kngyeol/smart-menu-board-scanner",
    metrics: ["101종 음식 분류", "한/영 OCR"],
    status: "completed",
    heroMedia: { type: "image", src: "/projects/menu-scanner/pipeline.png", alt: "메뉴 스캐너 파이프라인" },
    media: [
      { type: "image", src: "/projects/menu-scanner/pipeline.png", alt: "전체 파이프라인", caption: "Model1(음식 분류) + Model2(메뉴판 OCR → 번역)" },
      { type: "image", src: "/projects/menu-scanner/ocr.png", alt: "메뉴판 OCR", caption: "EasyOCR 글자영역 검출 + 인식" },
      { type: "image", src: "/projects/menu-scanner/translate.png", alt: "번역 결과", caption: "생선구이 → Roasted fish" },
    ],
  },

  // ===== 웹 / 풀스택 =====
  {
    id: 9,
    slug: "circuitforge",
    title: "CircuitForge",
    subtitle: "텍스트→회로도 변환 에디터",
    period: "2026.02",
    organization: "개인 프로젝트",
    description:
      "AI가 생성한 텍스트 배선 지시문을 인터랙티브 GUI 회로도로 자동 변환. MNA 솔버로 DC 동작점/과도 해석, 10가지 ERC 검증.",
    highlights: [
      "React Flow 기반 인터랙티브 캔버스 (드래그 앤 드롭)",
      "25개 부품 라이브러리 (MCU, 센서, 모터 드라이버 등)",
      "5가지 텍스트 파싱 형식 지원 (대시, 화살표, 테이블, 콜론, 복합형)",
      "MNA 솔버: DC 동작점 분석, 과도 해석",
      "10가지 ERC 검증 규칙",
      "SVG, PNG, KiCad/SPICE 넷리스트 내보내기",
    ],
    role: ["전체"],
    techStack: ["React 19", "TypeScript", "Zustand", "React Flow", "math.js", "Vitest"],
    category: "웹 / 풀스택",
    metrics: ["141개 테스트", "25개 부품", "10개 ERC 규칙"],
    status: "completed",
  },
  {
    id: 10,
    slug: "developers-kr",
    title: "Developers.kr",
    subtitle: "개발자 도구/가이드 포털",
    period: "2026.01",
    organization: "개인 프로젝트",
    description:
      "33개 개발 도구, 15개 기술 비교, 20개 섹션 포털형 홈페이지. 치트시트, 알고리즘, 디자인패턴, 취준 가이드 등 제공.",
    highlights: [
      "33개 개발 도구 (JSON 포맷터, Base64, 정규식 테스터 등)",
      "15개 기술 비교 페이지 (React vs Vue 등)",
      "20개 섹션: 알고리즘(31개), 디자인패턴(GoF 17개), 취준(35문항)",
      "다크/라이트 테마, 메가 메뉴 네비게이션",
    ],
    role: ["전체"],
    techStack: ["Next.js 14", "TypeScript", "TailwindCSS", "Vercel"],
    category: "웹 / 풀스택",
    github: "https://github.com/kngyeol/devtools-kr",
    metrics: ["33개 도구", "20개 섹션"],
    status: "in-progress",
  },
  {
    id: 11,
    slug: "ivi-dashboard",
    title: "IVI Dashboard",
    subtitle: "차량 인포테인먼트 데이터 시각화",
    period: "2025.08 - 2025.10",
    organization: "SSAFY",
    description:
      "Firebase Firestore에 저장된 차량 telematics 데이터를 웹에서 실시간 시각화. z-score 기반 이상치 탐지.",
    highlights: [
      "Firebase onSnapshot() 실시간 구독",
      "기간/레벨/유저별 다중 필터링",
      "Chart.js 기반 속도/엔진온도/가속도 시계열 차트",
      "급가속, 엔진 온도 급등 등 이상패턴 식별 (z-score)",
    ],
    role: ["Frontend"],
    techStack: ["Vue 3", "Firebase Firestore", "Chart.js", "Vite"],
    category: "웹 / 풀스택",
    status: "completed",
  },

  // ===== 임베디드 / FPGA =====
  {
    id: 12,
    slug: "can-multiecu-hils",
    title: "CAN MultiECU HILS",
    subtitle: "CAN 이중화 검증 플랫폼",
    period: "2026.03 - 2026.04",
    organization: "개인 프로젝트",
    description:
      "STM32 F446RE 2대로 Sensor ECU / Control ECU 분리. CAN A/B 이중화 + Fail-over, FreeRTOS 멀티태스킹, Python HILS 시나리오 검증.",
    highlights: [
      "Sensor ECU: 스로틀 ADC + MPU6050 IMU + CAN 송신 (5개 태스크)",
      "Control ECU: CAN 수신 + PID 모터 제어 + 안전 상태머신 (5개 태스크)",
      "CAN A(주) + CAN B(백업) 이중화, Heartbeat 기반 Fail-over",
      "Python HILS: JSON 시나리오 주입, 로깅, 리플레이",
      "상태머신: NORMAL → WARNING → DANGER → E-STOP",
    ],
    role: ["전체"],
    techStack: ["STM32", "FreeRTOS", "CAN", "HAL", "Python", "python-can"],
    category: "임베디드 / FPGA",
    metrics: ["10개 태스크", "7개 CAN 메시지", "CAN 이중화"],
    status: "in-progress",
  },
  {
    id: 13,
    slug: "resnet50-accelerator",
    title: "ResNet50 MAC Accelerator",
    subtitle: "FPGA CNN 추론 가속기",
    period: "2023.09 - 2023.12",
    organization: "건국대학교 SoC Design Lab",
    description:
      "Xilinx Zynq-7000 SoC 기반 ResNet50 CNN 추론 가속기. FPGA에 구현된 MAC 가속기로 2D Convolution 연산 하드웨어 가속.",
    highlights: [
      "Q10.22 고정소수점 연산 (10-bit 정수 + 22-bit 소수)",
      "AXI-Stream 기반 데이터 스트리밍 (IDMA/WDMA/PDMA/ODMA)",
      "Weight FIFO 캐싱 → 1x1 Conv에서 FxE번 재사용",
      "ImageNet 1000-class ResNet50 전체 추론",
    ],
    role: ["RTL Design", "Software"],
    techStack: ["Vivado", "Verilog", "Xilinx SDK", "C", "AXI DMA", "AXI4-Lite"],
    category: "임베디드 / FPGA",
    github: "https://github.com/kngyeol/resnet50-mac-accelerator",
    status: "completed",
    heroMedia: { type: "image", src: "/projects/resnet50-accelerator/benchmark.png", alt: "벤치마크 비교" },
    media: [
      { type: "image", src: "/projects/resnet50-accelerator/benchmark.png", alt: "벤치마크 비교", caption: "Reference 269s vs Optimized 197s — HW 가속 x1.36 faster" },
      { type: "image", src: "/projects/resnet50-accelerator/layers.png", alt: "레이어 차원", caption: "conv 레이어별 채널/커널 차원" },
    ],
  },
]

// Utility functions
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug)
}

export function getProjectMedia(project: Project): ProjectMedia[] {
  return project.media ?? project.images ?? []
}

export function getProjectHeroMedia(project: Project): ProjectMedia | undefined {
  if (project.heroMedia) return project.heroMedia
  if (project.heroImage) {
    return {
      type: "image",
      src: project.heroImage,
      alt: project.title,
    }
  }
  return undefined
}
