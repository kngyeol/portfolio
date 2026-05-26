export const siteConfig = {
  url: "https://kngyeol-portfolio.vercel.app",
  title: "김동열 | Robotics & Autonomous Driving Portfolio",
  description:
    "ROS2/Nav2 기반 실내 이동 로봇, Autoware 기반 자율주행, CAN/HILS 검증과 AI 컴퓨터비전을 다루는 김동열의 포트폴리오입니다.",
} as const

export const profile = {
  name: "김동열",
  nameEn: "Kim Dongyeol",
  title: "Robotics / Autonomous Driving / Embedded AI Engineer",
  summary:
    "ROS2/Nav2 기반 실내 이동 로봇, Autoware 기반 자율주행, CAN/HILS 검증을 경험했습니다. LLM 명령 브리지부터 센서·제어·운영 도구까지 실제 시스템이 움직이도록 통합하는 데 강점이 있습니다.",
  contact: {
    email: "kngyeol@gmail.com",
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
    title: "공학교육혁신센터 장려상",
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
  // ===== 자율주행 / 로봇 =====
  {
    id: 14,
    slug: "scv",
    title: "SCV - Smart Companion Vehicle",
    subtitle: "자연어 명령 기반 이동형 AI 홈 어시스턴트",
    period: "2026.05",
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
    heroMedia: {
      type: "video",
      src: "/projects/scv/scv-video-portfolio.mp4",
      poster: "/projects/scv/scv-video-portfolio.jpg",
      alt: "SCV video portfolio",
      caption: "SCV video portfolio",
    },
    media: [
      {
        type: "video",
        src: "/projects/scv/scv-video-portfolio.mp4",
        poster: "/projects/scv/scv-video-portfolio.jpg",
        alt: "SCV video portfolio",
        caption: "주행, 시뮬레이션, 하드웨어 통합 흐름을 정리한 영상 포트폴리오",
      },
      {
        type: "document",
        src: "/projects/scv/scv-presentation.pdf",
        alt: "SCV presentation deck",
        label: "발표자료 PDF",
        caption: "SCV 중간 발표자료",
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
      "CAN/F446ZE gateway는 별도 feature 단계로 분리하고, 실제 runtime 경로는 USB 직결 Yahboom base 기준으로 정리",
      "실기 반복 튜닝의 비용을 줄이기 위해 stub-hardware smoke mode와 web teleop/map helper를 함께 구성",
    ],
    futureWork: ["auto initial pose", "CAN/F446ZE gateway production integration", "precision calibration 고도화"],
  },
  {
    id: 15,
    slug: "bimanual-manipulation",
    title: "Bimanual Manipulation",
    subtitle: "양손 로봇 조작 시나리오 영상 아카이브",
    period: "2026.05",
    organization: "Robotics Demo",
    description:
      "음료수, 치약/칫솔, 소형 물체 등 생활 물체를 대상으로 양손 조작 시나리오를 실제 영상으로 정리한 로봇 조작 포트폴리오 자료입니다.",
    highlights: [
      "생활 물체 유형별 양손 조작 시나리오를 영상으로 정리",
      "음료수, 치약/칫솔, 이어버드·명찰처럼 크기와 형태가 다른 물체를 대상으로 검증",
      "성공 장면과 보완점을 분리해 후속 실험 기록으로 확장 가능한 형태로 정리 중",
    ],
    role: ["Robot Manipulation", "Demo Validation"],
    techStack: ["Robot Arm", "Bimanual Manipulation", "Scenario Validation", "Video Analysis"],
    category: "자율주행 / 로봇",
    metrics: ["4개 시나리오 영상"],
    status: "in-progress",
    heroMedia: {
      type: "video",
      src: "/projects/bimanual/bimanual-01.mp4",
      poster: "/projects/bimanual/bimanual-01.jpg",
      alt: "Bimanual manipulation demo",
      caption: "양손 조작 시나리오 영상",
    },
    media: [
      {
        type: "video",
        src: "/projects/bimanual/bimanual-01.mp4",
        poster: "/projects/bimanual/bimanual-01.jpg",
        alt: "Bimanual manipulation scenario 1",
        caption: "양손 조작 기본 시나리오",
      },
      {
        type: "video",
        src: "/projects/bimanual/bimanual-02.mp4",
        poster: "/projects/bimanual/bimanual-02.jpg",
        alt: "Bimanual manipulation drink scenario",
        caption: "음료수 조작 시나리오",
      },
      {
        type: "video",
        src: "/projects/bimanual/bimanual-03.mp4",
        poster: "/projects/bimanual/bimanual-03.jpg",
        alt: "Bimanual manipulation toothpaste toothbrush scenario",
        caption: "치약/칫솔 조작 시나리오",
      },
      {
        type: "video",
        src: "/projects/bimanual/bimanual-04.mp4",
        poster: "/projects/bimanual/bimanual-04.jpg",
        alt: "Bimanual manipulation small object scenario",
        caption: "이어버드/명찰 등 소형 물체 조작 시나리오",
      },
    ],
    futureWork: ["영상별 타임스탬프 설명 추가", "실패/보완점 기록 정리"],
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
  },
  {
    id: 3,
    slug: "aras",
    title: "ARAS - RC Car ADAS 시스템",
    subtitle: "Advanced RCcar Assist System",
    period: "2025.08 - 2025.09",
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
  },

  // ===== AI / 컴퓨터비전 =====
  {
    id: 5,
    slug: "fire-detection-drone",
    title: "Fire & Smoke Detection Drone",
    subtitle: "졸업 프로젝트",
    period: "2024.03 - 2024.06",
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
  },
  {
    id: 6,
    slug: "korean-vqa",
    title: "SSAFY AI Challenge - Korean VQA",
    subtitle: "VLM 기반 4지선다 VQA",
    period: "2026.02 - 2026.03",
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
    slug: "divery",
    title: "Divery - 다이빙 로그북 AI 생성",
    subtitle: "SSAFY 특화 프로젝트",
    period: "2026.01 - 2026.02",
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
    role: ["Frontend", "DevOps"],
    techStack: ["React", "React Native", "Spring Boot", "YOLO-World", "BioCLIP", "Docker", "Jenkins", "AWS SQS"],
    category: "AI / 컴퓨터비전",
    status: "in-progress",
  },
  {
    id: 8,
    slug: "menu-scanner",
    title: "Smart Menu Board Scanner",
    subtitle: "음식 분류 + 메뉴판 OCR",
    period: "2024.01 - 2024.02",
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
  },

  // ===== 웹 / 풀스택 =====
  {
    id: 9,
    slug: "circuitforge",
    title: "CircuitForge",
    subtitle: "텍스트→회로도 변환 에디터",
    period: "2025.10 - 2025.12",
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
    period: "2025.11 - 2025.12",
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
    period: "2025.08",
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
    period: "2025.09 - 2025.10",
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
