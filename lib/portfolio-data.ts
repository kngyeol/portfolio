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
    "ROS2와 C++로 센서, 인지, CAN, 액추에이터를 연결하고 HILS와 SILS로 검증합니다.",
  contact: {
    email: "henry3447@naver.com",
    github: "https://github.com/kngyeol",
    linkedin: "",
  },
}

export type Profile = typeof profile

export const skills: Record<string, string[]> = {
  언어: ["C++", "Python", "C"],
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
  프론트엔드: ["Vue 3", "React", "Next.js", "Pinia", "Firebase"],
}

export type Skills = typeof skills

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
      "경로 계획·재생성: Lanelet2 기반 경로 자동 생성과 외부 차선변경 요청 연동",
      "FOD 관리 로직: 다중 FOD 클러스터링과 우선순위 정렬 알고리즘",
      "차량 통신 변환: ROS2 토픽 ↔ CAN 메시지 변환, 쿼터니언→Yaw 변환",
      "HILS 시뮬레이션: vcan 기반 가상 CAN 환경 구축, 시나리오 검증",
      "HMI 통합: Qt5 UI 버그 수정, 토픽 데이터 타입 동기화",
      "경로 생성, CAN 변환, HILS와 HMI 연동을 실제 운영 시나리오에서 통합",
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
  notes?: string[]
}

export const education: Education[] = [
  {
    id: 1,
    school: "건국대학교",
    degree: "학사",
    major: "전기전자공학부",
    period: "2019.03 - 2025.08",
  },
  {
    id: 2,
    school: "삼성청년SW·AI아카데미 (SSAFY)",
    degree: "14기 수료",
    major: "임베디드 트랙",
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
  fit?: "cover" | "contain"
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

export type Category = (typeof categories)[number]
export type ProjectCardData = Pick<
  Project,
  | "id"
  | "slug"
  | "title"
  | "subtitle"
  | "period"
  | "organization"
  | "description"
  | "role"
  | "techStack"
  | "category"
  | "github"
  | "metrics"
  | "status"
  | "heroMedia"
>

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
      "SkyAutonet 인턴십에서 진행한 활주로/도로 이물질(FOD) 탐지·제거 자율 로봇 프로젝트. FOD 객체 관리·청소 상태 발행과 ROS2→차량 통신 변환, vcan 기반 HILS 검증 환경을 담당했습니다.",
    highlights: [
      "감지된 FOD 객체를 차량 기준 좌표에서 지도 좌표로 변환하고, Lanelet2 차선 검증과 거리 기준 클러스터링으로 유효 객체 목록 관리",
      "자동 청소 장비 제어와 청소 상태 발행, 다중 FOD 우선순위(거리·진행 방향) 정렬 로직 설계",
      "FODRo HILS: vcan으로 actuator·상태 CAN 재현해 실차 없이 반복 검증",
      "차량 통신 변환: yaw 범위 정규화 · local→WGS84 좌표 변환 · 통신 프레임 변환 구현·검증",
      "차량 통신 변환과 vcan HILS 시나리오 반복 검증",
    ],
    role: ["FOD 관리 로직", "차량 통신 변환", "HILS"],
    techStack: ["C++", "ROS2", "Autoware", "CAN (SocketCAN)", "vcan (HILS)", "Qt5"],
    category: "자율주행 / 로봇",
    metrics: ["vcan HILS", "차량 통신 변환", "다중 FOD 우선순위"],
    status: "completed",
    troubleshooting: [
      "Yaw·좌표 정규화: HILS 검증 중 변환한 yaw·좌표가 차량 통신 규격과 어긋남(yaw −180~180° vs 0~360°, 지도 좌표 vs GNSS WGS84) → yaw 범위를 정규화하고 WGS84로 역투영한 뒤 통신 규격에 맞게 스케일링해 HILS에서 반복 검증",
      "HMI 경로 전달 QoS: 경로를 HMI 연동 계층으로 전달할 때 늦게 구독한 노드가 마지막 경로를 받지 못함 → transient_local QoS(latched)로 전환하고 경로 미수신 상태를 별도 분기로 처리",
      "다중 FOD 처리: 여러 FOD를 동시에 다룰 때 위치·차선 기준이 흔들림 → 감지 객체를 지도 좌표로 변환한 뒤 차선 방향과 주행 구간을 검증하고, 거리 기준 클러스터링과 우선순위 정렬 적용",
    ],
    heroMedia: {
      type: "image",
      src: "/projects/fodro/fod-clean-rviz.png",
      alt: "FODRo FOD 청소 경로 RViz 화면",
      fit: "contain",
    },
    media: [
      {
        type: "image",
        src: "/projects/fodro/can-send-dump.png",
        alt: "CAN 송신 검증 로그",
        caption: "가상 CAN 송신 후 candump로 프레임을 확인한 검증 화면",
        fit: "contain",
      },
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
      "SkyAutonet 인턴십에서 진행한 Autoware 기반 Level 4 자율주행 플랫폼 프로젝트. Lanelet2 기반 경로 생성·리루팅과 외부 차선변경 요청 연동, HILS actuator·HMI 연동을 담당했습니다.",
    highlights: [
      "Lanelet2 기반 target lanelet 탐색 + distance-limited route 생성 + 잔여거리 기반 reroute 구현",
      "외부 HMI 차선변경 요청을 반영해 경로 상태를 초기화하고 변경 차선 기준으로 경로 재생성",
      "Lv4 HILS: 운행 모드·주행 상태 기반 제어 활성화 분기와 차량 상태 통신 연동",
      "차량 상태 통신 연동·HILS 반복 검증 — 임베디드 통신·검증 경험",
    ],
    role: ["경로 계획·재생성", "HILS", "HMI 연동"],
    techStack: ["C++", "ROS2", "Autoware", "Lanelet2", "CAN (SocketCAN)", "vcan (HILS)", "Qt5"],
    category: "자율주행 / 로봇",
    metrics: ["실차 없이 반복 검증", "Lanelet2 리루팅", "차량 상태 통신"],
    status: "completed",
    troubleshooting: [
      "차선변경 후 경로 재생성: 외부 HMI 요청 뒤 경로가 이전 차선 기준으로 생성돼 차량이 바뀐 차선을 따라가지 못함 → 차선변경 상태와 방향을 구독하고 요청 방향별 처리를 적용한 뒤, 자율주행 복귀 시 상태와 경로를 초기화해 변경 차선 기준으로 재생성",
      "토픽·메시지 타입 동기화: planning·UI·HILS 파트가 각자 개발해 토픽명·메시지 타입이 어긋나 통합이 깨짐 → 토픽명 표준화 + 메시지 타입 동기화로 파트별 독립 개발과 통합 테스트가 가능하도록 정리",
      "HILS actuator·제어 활성화: 실차 없이 actuator를 재현하고 운행 모드·주행 상태에 따라 제어 활성화를 분기 → vcan HILS로 차량 상태 통신을 연동해 반복 검증",
    ],
    heroMedia: {
      type: "image",
      src: "/projects/skyautonet-lv4/hmi-redacted.png",
      alt: "Level 4+ 자율주행 운영자 HMI",
      fit: "contain",
    },
    media: [
      {
        type: "image",
        src: "/projects/skyautonet-lv4/cover.png",
        alt: "운영 HMI와 자율주행 경로 시각화",
        caption: "운영 HMI 상태 표시와 자율주행 경로·LiDAR 시각화",
        fit: "contain",
      },
      {
        type: "image",
        src: "/projects/skyautonet-lv4/getendoflane-footprint.png",
        alt: "GetEndOfLaneGoal footprint 검증 화면",
        caption: "footprint 조정 후 차선 내 경로 생성을 확인한 화면",
        fit: "contain",
      },
    ],
  },

  // ===== 자율주행 / 로봇 =====
  {
    id: 14,
    slug: "scv",
    title: "SCV - Smart Companion Vehicle",
    subtitle: "자연어 명령 기반 이동형 AI 홈 어시스턴트",
    period: "2026.03 - 2026.06",
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
    github: "https://github.com/kngyeol/Project-SCV",
    metrics: ["ROS2/Nav2 runtime", "LLM drive bridge", "vision alignment"],
    status: "completed",
    heroMedia: {
      type: "image",
      src: "/projects/scv/cover.png",
      alt: "SCV - Smart Companion Vehicle 전체 모습",
      fit: "contain",
    },
    media: [
      {
        type: "video",
        src: "/projects/scv/scv-robot-arm-demo.mp4",
        poster: "/projects/scv/scv-robot-arm-demo.jpg",
        alt: "SCV 로봇팔 명령 수행 시연",
        caption: "테이블 위 작업물을 대상으로 한 로봇팔 명령 수행",
      },
      {
        type: "video",
        src: "/projects/scv/scv-autonomous-drive.mp4",
        poster: "/projects/scv/scv-autonomous-drive.jpg",
        alt: "SCV 실내 자율주행 시연",
        caption: "SCV 실내 이동과 방향 전환",
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
      "Nav2 경로 일관성: 메카넘 슬립·드리프트로 실행마다 경로가 크게 달라짐 → 실차 기록과 teleop 정답 주행 rosbag을 반영한 real2sim 환경에서 SILS 후보를 반복 비교하며 Nav2 파라미터 튜닝",
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
    role: ["AI", "Embedded Integration", "System Integration"],
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
    github: "https://github.com/kngyeol/Project-Balemale",
    metrics: ["18개 FSM 상태", "28개 ArUco 마커", "12개 주차 슬롯"],
    status: "completed",
    troubleshooting: [
      "전원 문제: 12V 모터 4개 + Jetson을 단일 배터리로 연결 시 전압 강하 발생 → Jetson용·모터용 배터리를 분리",
      "라인트레이싱 → 마커 기반 주행 전환: 차량 대비 맵이 작아 메카넘 주행 시 라인이 빠르게 시야를 벗어나 위치를 잃음 → 멀리서도 방향이 조금 틀어져도 잡히는 마커 기반 주행(차량 위치 + 마커 상대좌표)으로 변경",
      "마커 추적 끊김: 전면 상단 카메라 특성상 마커에 가까워지면 마커가 시야 아래로 사라져 일시적 위치 상실 → 칼만필터 기반 위치 유지로, 다음 마커가 안정적으로 탐지될 때까지 마지막 마커 위치 기반 추정을 유지",
    ],
    heroMedia: {
      type: "image",
      src: "/projects/balemale/cover.png",
      alt: "Balemale 메카넘 자율주차 로봇",
      fit: "contain",
    },
    media: [
      {
        type: "image",
        src: "/projects/balemale/aruco-course-robot.jpeg",
        alt: "ArUco 마커 코스 위의 Balemale 주차 로봇",
        caption: "ArUco 마커가 배치된 주차장에서 위치와 방향을 인식하는 실물 시연",
        fit: "contain",
      },
      { type: "image", src: "/projects/balemale/hardware.png", alt: "적재 하드웨어 실물", caption: "그리퍼 + 리니어 액추에이터 (Rack&Pinion)" },
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
      "CAN 버스 조향 + ESP32 PID 속도 제어",
      "E-Stop 기반 비상 정지 안전장치",
    ],
    role: ["인지 파트장", "Perception", "Planning"],
    techStack: ["ROS Noetic", "C++", "Python", "PCL", "OpenCV", "PyTorch", "SocketCAN", "ESP32"],
    category: "자율주행 / 로봇",
    github: "https://github.com/kngyeol/Project-TeamKAI",
    metrics: ["LiDAR 콘 검출", "CAN · ESP32 제어"],
    status: "completed",
    troubleshooting: [
      "LiDAR 과부하: 입력 pointcloud가 너무 비대해 필요한 정보 추출이 어렵고 처리 과부하 발생 → 콘 트랙 정보만 남기도록 전처리를 하나씩 조합·검증하며 최적 파이프라인 구축",
      "트랙 좌/우 구분: LiDAR만으로는 좌/우 구분이 어렵고 차량 heading이 바뀌면 좌우가 반전됨(경로 생성에 필수) → 색상 기반 카메라 센서퓨전을 고안(실적용은 못함), 대안으로 현재 위치에서 가까운 좌/우 콘을 기억하고 인접 콘을 이어가며 좌/우 배열을 분리 처리",
      "2랩 주행 전략: 대회 룰상 2바퀴 주행 → 1랩에서 트랙맵을 작성하고 2랩에서 맵 기반으로 빠르게 주행하는 SLAM 전략 수립(완전 구현은 못함)",
    ],
    heroMedia: {
      type: "image",
      src: "/projects/teamkai/vehicle-kcity.jpg",
      alt: "콘 트랙에 놓인 TeamKAI 자율주행 자작차",
      fit: "contain",
    },
    media: [
      {
        type: "image",
        src: "/projects/teamkai/lidar-cone-perception.jpeg",
        alt: "LiDAR 포인트클라우드에서 분리된 좌우 콘",
        caption: "LiDAR 포인트클라우드에서 좌우 콘 후보를 분리한 인지 결과",
        fit: "contain",
      },
      {
        type: "image",
        src: "/projects/teamkai/kcity-vehicle.jpeg",
        alt: "K-City 콘 트랙의 TeamKAI 자율주행 자작차",
        caption: "K-City 콘 트랙에서 주행을 준비하는 TeamKAI 자작차",
        fit: "contain",
      },
      {
        type: "image",
        src: "/projects/teamkai/competition-course.jpeg",
        alt: "2024 학생 창작자동차 경진대회 콘 코스",
        caption: "2024 학생 창작자동차 경진대회 주행 코스",
        fit: "contain",
      },
      { type: "image", src: "/projects/teamkai/lidar-pointcloud.png", alt: "TeamKAI LiDAR 포인트클라우드", caption: "콘 트랙에서 취득한 LiDAR 포인트클라우드" },
      { type: "image", src: "/projects/teamkai/cone-detection.jpg", alt: "TeamKAI 카메라 콘 검출", caption: "카메라 영상에서 파란색·노란색 콘을 검출한 결과" },
      { type: "image", src: "/projects/teamkai/cone-pov.jpg", alt: "TeamKAI 콘 트랙 카메라뷰", caption: "TeamKAI 차량 카메라에서 본 콘 트랙" },
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
      "Raspberry Pi 5 기반 교육용 RC Car에서 카메라 차선 인식, ToF 거리 센서와 구동부를 MQTT 노드로 분리한 주행 보조 시스템.",
    highlights: [
      "5개 노드 구조: lane_node, tof_node, fsm_manager, motor_node, logger_node",
      "MANUAL: 운전자 입력 우선, lane stale 시 차선 보조 해제",
      "AUTO: 차선 중심 추종과 한쪽 차선 소실 복구, lane stale 시 중립 조향·설정 속도 유지",
      "ACC: ToF invalid/stale 시 정지, 정지·재출발 임계값 분리",
      "MANUAL/AUTO: 유효한 근거리 ToF 입력에서 정지",
    ],
    role: ["팀장", "차량 개발"],
    techStack: ["Python", "OpenCV", "MQTT", "UART/Modbus", "PCA9685 PWM", "Raspberry Pi 5", "ToF Sensor"],
    category: "자율주행 / 로봇",
    github: "https://github.com/kngyeol/Project-ARAS",
    metrics: ["5개 노드", "3가지 주행 모드"],
    status: "completed",
    heroMedia: {
      type: "image",
      src: "/projects/aras/dashboard.png",
      alt: "MANUAL AUTO ACC와 정지 상태를 확인하는 ARAS 제어 GUI",
      fit: "contain",
    },
    media: [
      { type: "image", src: "/projects/aras/sw-arch.png", alt: "SW 아키텍처", caption: "tof/lane → fsm_manager → motor/logger (MQTT 노드 분리)" },
      { type: "image", src: "/projects/aras/lane-node.png", alt: "차선 인식(lane_node)", caption: "binary/original/lane 3창 + curvature·offset" },
      { type: "video", src: "/projects/aras/manual.mp4", alt: "MANUAL 시연", caption: "운전자 입력 기반 수동 주행" },
      { type: "video", src: "/projects/aras/auto.mp4", alt: "AUTO 시연", caption: "차선 중심 자동 추종" },
      { type: "video", src: "/projects/aras/acc.mp4", alt: "ACC 시연", caption: "ToF 거리 유지 (Adaptive Cruise Control)" },
    ],
  },
  {
    id: 4,
    slug: "pathfinders",
    title: "국민대학교 Xycar - Team Pathfinders",
    subtitle: "1/10 스케일 RC카 자율주행 교육 프로젝트",
    period: "2024.07 - 2024.08",
    organization: "국민대학교 · Team Pathfinders",
    description:
      "ROS 기반 Xycar(1/10 스케일 RC카) 플랫폼에서 자율 주차, 신호 감지 자율 주행, 실시간 차선 검출 구현.",
    highlights: [
      "자율 주차: 3차 Bezier 곡선 경로 생성 + Pure Pursuit 추적",
      "자율 주행: HSV 녹색 신호 검출 + IMU 가속도 적분",
      "차선 검출: Canny/Sobel + Bird's-eye View + RANSAC 다항식 피팅",
      "Pygame 시뮬레이터 포함",
    ],
    role: ["교육 프로젝트 참여"],
    techStack: ["ROS Noetic", "Python 3", "OpenCV", "NumPy", "Pygame"],
    category: "자율주행 / 로봇",
    status: "completed",
    heroMedia: {
      type: "image",
      src: "/projects/pathfinders/xycar-course.jpg",
      alt: "국민대학교 Xycar 자율주행 코스",
      fit: "contain",
    },
    media: [
      { type: "image", src: "/projects/pathfinders/xycar-course-pov.jpg", alt: "Xycar 콘 코스 주행 시점", caption: "Team Pathfinders Xycar의 콘 코스 주행 시점" },
      { type: "image", src: "/projects/pathfinders/lane-pipeline.jpg", alt: "차선 검출 파이프라인", caption: "원본 + 엣지 + 라인 마스크", fit: "contain" },
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
      "YOLOv9 객체 탐지 + Lite-Mono 단안 깊이 추정을 결합하여 영상에서 화재/연기를 탐지하고 위험도(Severity)와 경고 레벨(0~3)을 산출.",
    highlights: [
      "YOLOv9-c 화재/연기 탐지 (mAP50: 0.867)",
      "fire: P 0.876 / R 0.828 / mAP50 0.881",
      "smoke: P 0.792 / R 0.814 / mAP50 0.854",
      "Lite-Mono 단안 깊이 추정으로 상대 거리 파악",
      "Structured Pruning과 ONNX/TensorRT 변환 경로 구성 (detector 측정: RTX 4090 4.6ms, Jetson Orin PyTorch 약 212.9ms)",
    ],
    role: ["전체"],
    techStack: ["YOLOv9", "Lite-Mono", "TensorRT", "Structured Pruning", "Jetson Orin", "Gradio"],
    category: "AI / 컴퓨터비전",
    github: "https://github.com/kngyeol/Project-FireDrone",
    metrics: ["mAP50 0.867", "P 0.834", "R 0.821"],
    status: "completed",
    heroMedia: { type: "image", src: "/projects/fire-detection-drone/detection.jpg", alt: "화재/연기 탐지 결과", fit: "contain" },
    media: [
      { type: "image", src: "/projects/fire-detection-drone/confusion.png", alt: "혼동행렬", caption: "fire 0.88 / smoke 0.83" },
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
      "한국어 이미지 기반 4지선다 VQA 챌린지. VLM 미세조정, API 추론, 모델 라우팅과 번역 보조 경로를 탐색.",
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
    github: "https://github.com/kngyeol/Project-Korean-VQA",
    metrics: ["5개 실험 방향", "4지선다 출력"],
    status: "completed",
    heroMedia: {
      type: "image",
      src: "/projects/korean-vqa/competition-overview.png",
      alt: "2025 SSAFY AI 챌린지 Kaggle 대회 개요",
      fit: "contain",
    },
    media: [
      {
        type: "image",
        src: "/projects/korean-vqa/submission-history.png",
        alt: "Kaggle VQA 팀 제출 기록",
        caption: "Kaggle에 기록된 팀 제출 결과와 공개·비공개 점수 화면",
        fit: "contain",
      },
    ],
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
      "YOLO-World + NIMA 기반 하이라이트 선별 및 중복 제거",
      "CFD-YOLOv12x 물고기 탐지 + BioCLIP-2 분류",
      "ByteTrack 객체 추적과 임베딩 기반 중복 제거",
      "LLM 기반 다이빙 로그북 자동 생성",
      "AWS SQS + GPU 워커 기반 분산 처리",
    ],
    role: ["Full-Stack", "DevOps", "AI"],
    techStack: ["React", "Spring Boot", "PostgreSQL", "Redis", "YOLO-World", "BioCLIP-2", "Docker", "Jenkins", "AWS SQS"],
    category: "웹 / 풀스택",
    github: "https://github.com/kngyeol/Project-DIVARY",
    metrics: ["SQS GPU 워커", "Docker · Jenkins 통합"],
    status: "completed",
    heroMedia: {
      type: "image",
      src: "/projects/divary/cover.png",
      alt: "Divary 다이빙 로그북 앱",
      fit: "contain",
    },
    media: [
      { type: "image", src: "/projects/divary/fish-detection.png", alt: "AI 어류 탐지/분류", caption: "수중 영상 어류 bounding box + ID 라벨" },
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
    metrics: ["101종 음식 분류", "한/영 OCR"],
    status: "completed",
    heroMedia: { type: "image", src: "/projects/menu-scanner/ocr.png", alt: "Smart Menu Board Scanner OCR 결과", fit: "contain" },
  },

  // ===== 웹 / 풀스택 =====
  {
    id: 11,
    slug: "ivi-dashboard",
    title: "IVI Dashboard",
    subtitle: "차량 인포테인먼트 데이터 시각화",
    period: "2025.08 - 2025.10",
    organization: "SSAFY",
    description:
      "Firebase Firestore의 가공 차량 telematics 데이터를 웹에서 실시간 구독하고 필터와 차트로 시각화한 IVI 프로토타입.",
    highlights: [
      "Firebase onSnapshot() 실시간 구독",
      "기간/레벨/유저별 다중 필터링",
      "Chart.js 기반 속도/엔진온도/가속도 시계열 차트",
      "로그 레벨 색상 구분과 날씨·내비게이션·운전 코칭 UI",
    ],
    role: ["Frontend"],
    techStack: ["Vue 3", "Firebase Firestore", "Chart.js", "Vite"],
    category: "웹 / 풀스택",
    github: "https://github.com/kngyeol/Project-IVI-Dashboard",
    status: "completed",
    heroMedia: {
      type: "image",
      src: "/projects/ivi-dashboard/cover.png",
      alt: "IVI Dashboard 텔레매틱스 로그 뷰어",
      fit: "contain",
    },
    media: [
      {
        type: "image",
        src: "/projects/ivi-dashboard/telematics-log-viewer.jpg",
        alt: "IVI 텔레매틱스 로그 필터와 상태 목록",
        caption: "합성 demo-vehicle 로그로 재현한 실시간 로그 조회 화면",
        fit: "contain",
      },
      {
        type: "image",
        src: "/projects/ivi-dashboard/weather.jpg",
        alt: "IVI 날씨와 시간대별 예보 화면",
        caption: "서울 기본 위치의 공개 날씨 응답을 표시한 IVI 화면",
        fit: "contain",
      },
    ],
  },

  // ===== 임베디드 / FPGA =====
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
    role: ["팀 프로젝트 참여"],
    techStack: ["Vivado", "Verilog", "Xilinx SDK", "C", "AXI DMA", "AXI4-Lite"],
    category: "임베디드 / FPGA",
    status: "completed",
    heroMedia: {
      type: "image",
      src: "/projects/resnet50-accelerator/cover.jpg",
      alt: "노트북에 연결된 Digilent Zybo Z7-20 개발 보드",
      fit: "contain",
    },
    media: [
      {
        type: "image",
        src: "/projects/resnet50-accelerator/zybo-z7-board.jpg",
        alt: "전원이 연결된 Digilent Zybo Z7-20 개발 보드 전체 모습",
        caption: "Zybo Z7-20 기반 FPGA 개발 환경",
        fit: "contain",
      },
      {
        type: "image",
        src: "/projects/resnet50-accelerator/vivado-block-design.jpg",
        alt: "Vivado 2017.4에서 연 design_1 Zynq 블록 디자인 작업 화면",
        caption: "프로젝트 빌드 산출물과 일치하는 Vivado block design 작업 화면",
        fit: "contain",
      },
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
