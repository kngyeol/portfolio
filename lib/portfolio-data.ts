export const profile = {
  name: "김동열",
  nameEn: "Kim Dongyeol",
  title: "자율주행 / AI / 임베디드 엔지니어",
  summary:
    "Skyautonet 자율주행 인턴 출신. ROS/ROS2 기반 인지-판단-제어 파이프라인과 HILS/실주행 검증 경험. AI(CV)부터 임베디드, 백엔드까지 시스템 단위로 통합 가능한 엔지니어.",
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
    "Autoware",
    "Kalman Filter",
    "PID",
    "MQTT",
    "Lanelet2",
    "ArUco",
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
    "ATmega128",
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
      "Level 4 자율주행 트럭/청소차 개발. ROS2/Autoware 기반 인지-판단-제어 로직 개발 및 HILS/실주행 검증.",
    highlights: [
      "차선 변경/동적 장애물 회피 로직 개발 및 고도화",
      "청소차 청소 주행 로직 및 다중 FOD 판단 로직 개발",
      "RViz 시뮬레이터 보완, CAN 로그 기반 HILS 검증 워크플로우",
      "관제센터-차량 통신 모듈 최적화 (MQTT)",
      "fodro_main_processor: 42 commits / skyautonet_lv4_main: 18 commits",
    ],
    techStack: ["ROS2 Humble", "Autoware Universe", "C++", "CAN", "Qt5", "Lanelet2"],
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
    period: "2025.07 - 2025.09",
    notes: ["432시간 교육과정"],
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

export interface Project {
  id: number
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
}

export const categories = [
  { name: "전체", icon: "layers" },
  { name: "자율주행 / 로봇", icon: "robot" },
  { name: "AI / 컴퓨터비전", icon: "brain" },
  { name: "웹 / 풀스택", icon: "globe" },
  { name: "임베디드 / FPGA", icon: "cpu" },
] as const

export const projects: Project[] = [
  {
    id: 1,
    title: "Balemale - AI 스마트 자율 주차 시스템",
    subtitle: "SSAFY 자율 프로젝트 우수작",
    period: "2026.01 - 2026.02",
    organization: "SSAFY",
    description:
      "AI 번호판 인식 + 4WD Mecanum 자율 주차 로봇. 차량 인식부터 적재, 자율 주행, 주차, 회수까지 전 과정 자동화.",
    highlights: [
      "YOLOv8 + LPRNet 번호판 인식 (Jetson TensorRT / RPi ONNX)",
      "ArUco 마커 기반 자율 주행 (vx + vy + wz 동시 제어)",
      "18개 상태 FSM 기반 미션 오케스트레이션",
      "Spring Boot 4.0 백엔드 + Vue 3 키오스크 프론트엔드",
      "Dijkstra 경로탐색, PortOne 결제 연동",
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
    ],
    category: "자율주행 / 로봇",
    github: "https://github.com/kngyeol/balemale",
  },
  {
    id: 2,
    title: "TeamKAI - 자율주행 자작차",
    subtitle: "인지 파트장",
    period: "2023.11 - 2024.11",
    organization: "건국대학교 Team KAI",
    description:
      "콘(cone) 기반 트랙에서 LiDAR, 카메라, GPS, IMU를 활용한 ROS 기반 자율주행 시스템.",
    highlights: [
      "LiDAR 콘 검출 (RANSAC + 유클리디안 클러스터링)",
      "YOLOv5/v8 콘 객체 검출 + 카메라-LiDAR 센서퓨전",
      "Bezier 경로 생성 + Stanley/Pure Pursuit 추종",
      "CAN 브릿지 조향 + ESP32 PID 속도 제어",
      "센서/제어 파이프라인 통합 디버깅 및 타임스탬프 동기화",
    ],
    role: ["인지 파트장", "Perception", "Planning"],
    techStack: ["ROS Noetic", "PCL", "OpenCV", "PyTorch", "SocketCAN", "ESP32"],
    category: "자율주행 / 로봇",
    github: "https://github.com/kngyeol/TeamKAI",
  },
  {
    id: 3,
    title: "ARAS - RC Car ADAS 시스템",
    subtitle: "축소형 ADAS 구현",
    period: "2025.08 - 2025.09",
    organization: "SSAFY",
    description:
      "Raspberry Pi 5 기반 RC Car ADAS 축소 구현. MQTT 기반 센서-판단-제어 노드 분리 및 Fail-Safe 중심 설계.",
    highlights: [
      "MQTT 기반 센서-판단-제어 노드 간 통신 구조",
      "차선 인식(카메라) + ToF 센서 거리 제어",
      "FSM 기반 중앙 제어 (MANUAL / AUTO / ACC)",
      "Fail-Safe 설계: 센서 Stale 시 안전 정지",
    ],
    role: ["전체"],
    techStack: ["Python", "OpenCV", "MQTT", "UART/Modbus", "PCA9685 PWM", "Raspberry Pi 5"],
    category: "자율주행 / 로봇",
  },
  {
    id: 4,
    title: "CAN MultiECU HILS",
    subtitle: "CAN 이중화 검증 플랫폼",
    period: "2025.09",
    organization: "개인 프로젝트",
    description:
      "STM32 F446RE 2대를 이용한 Sensor ECU / Control ECU 분리 구조. CAN A/B 이중화 및 Fail-over 검증.",
    highlights: [
      "CAN A(주) + CAN B(백업) 이중화 통신",
      "FreeRTOS 기반 실시간 제어 태스크",
      "Python 기반 HILS 시나리오 주입/로깅/리플레이",
      "Fail-over 자동 전환 검증",
    ],
    role: ["전체"],
    techStack: ["STM32", "CAN", "FreeRTOS", "Python", "HILS"],
    category: "임베디드 / FPGA",
  },
  {
    id: 5,
    title: "Fire & Smoke Detection Drone",
    subtitle: "졸업 프로젝트",
    period: "2024.03 - 2024.06",
    organization: "건국대학교",
    description:
      "드론 탑재 카메라 기반 실시간 화재/연기 탐지 및 위험도 평가 시스템.",
    highlights: [
      "YOLOv9-c 화재/연기 탐지 (mAP50: 0.867)",
      "fire: P 0.876 / R 0.828 / mAP50 0.881",
      "smoke: P 0.792 / R 0.814 / mAP50 0.854",
      "Lite-Mono 단안 깊이 추정으로 거리 파악",
      "Structured Pruning + TensorRT 최적화",
    ],
    role: ["전체"],
    techStack: ["YOLOv9", "Lite-Mono", "TensorRT", "Structured Pruning", "Jetson Orin", "Gradio"],
    category: "AI / 컴퓨터비전",
    github: "https://github.com/kngyeol/pjt-fire-detect-drone",
    metrics: ["mAP50 0.867", "Precision 0.834", "Recall 0.821"],
  },
  {
    id: 6,
    title: "SSAFY AI Challenge - Korean VQA",
    subtitle: "VLM 기반 4지선다 VQA",
    period: "2026.02 - 2026.03",
    organization: "SSAFY",
    description:
      "한국어 이미지 기반 4지선다 VQA 챌린지 솔루션. 사진 속 장소, 사물, 색상, 텍스트 등을 인식하여 정답 예측.",
    highlights: [
      "Qwen2.5-VL-3B LoRA Fine-tuning (4-bit 양자화)",
      "BLIP-2 LoRA (Answer-only loss, Early Stopping)",
      "GPT-4o-mini API (JSON structured output)",
      "Qwen3-VL + InternVL2 Routing Ensemble",
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
  },
  {
    id: 7,
    title: "Smart Menu Board Scanner",
    subtitle: "음식 분류 + 메뉴판 OCR",
    period: "2024.01 - 2024.02",
    organization: "건국대학교",
    description:
      "외국인 관광객을 위한 한국 음식점 메뉴판 자동 인식 시스템. 음식 사진 분류 및 메뉴판 OCR 번역 제공.",
    highlights: [
      "MobileNetV2 + Food-101 (101종 음식 분류)",
      "EasyOCR 한국어/영어 메뉴판 인식",
      "TPS-ResNet-BiLSTM-Attn OCR 학습 파이프라인 실험",
      "인터랙티브 클릭 → 번역 검색",
    ],
    role: ["전체"],
    techStack: ["PyTorch", "MobileNetV2", "EasyOCR", "deep-text-recognition-benchmark"],
    category: "AI / 컴퓨터비전",
    github: "https://github.com/kngyeol/smart-menu-board-scanner",
  },
  {
    id: 8,
    title: "IVI Dashboard",
    subtitle: "차량 인포테인먼트 데이터 시각화",
    period: "2025.08",
    organization: "SSAFY",
    description:
      "Vue 3 + Firebase 기반 텔레매틱스 로그 실시간 시각화. 이상치 탐지 및 실시간 알림.",
    highlights: [
      "Firebase onSnapshot() 실시간 구독",
      "기간/레벨/유저별 필터링",
      "Chart.js 기반 속도/엔진온도/가속도 차트",
      "이상치 탐지 (급가속, 엔진 온도 급등) 라벨링",
    ],
    role: ["Frontend"],
    techStack: ["Vue 3", "Firebase Firestore", "Chart.js", "Vite"],
    category: "웹 / 풀스택",
  },
  {
    id: 9,
    title: "CircuitForge",
    subtitle: "AI 기반 텍스트→회로도 변환 에디터",
    period: "2025.10 - 2025.12",
    organization: "개인 프로젝트",
    description:
      "5가지 형식의 배선 텍스트를 붙여넣으면 회로도 자동 생성. MNA 솔버로 DC 동작점 분석.",
    highlights: [
      "React Flow 기반 인터랙티브 캔버스",
      "25개 이상의 부품 라이브러리 (MCU, 센서, 모터 드라이버 등)",
      "MNA 솔버 (DC 동작점 분석, 과도 해석)",
      "ERC 10개 규칙 검증",
      "SVG, PNG, KiCad/SPICE 넷리스트 내보내기",
      "141개 테스트 통과, TypeScript strict 모드",
    ],
    role: ["전체"],
    techStack: ["React 19", "TypeScript", "Zustand", "React Flow", "MNA Solver", "Vitest"],
    category: "웹 / 풀스택",
    metrics: ["141개 테스트", "25+ 부품", "10개 ERC 규칙"],
  },
  {
    id: 10,
    title: "Developers.kr",
    subtitle: "개발자 도구/가이드 포털",
    period: "2025.11 - 2025.12",
    organization: "개인 프로젝트",
    description:
      "33개 개발 도구, 15개 기술 비교 페이지, 20개 섹션 포털형 홈페이지.",
    highlights: [
      "33개 개발 도구 (JSON 포맷터, Base64, 정규식 테스터 등)",
      "15개 기술 비교 페이지 (React vs Vue 등)",
      "20개 섹션 포털 (치트시트, 알고리즘, 디자인패턴)",
      "다크/라이트 테마, 메가 메뉴 네비게이션",
    ],
    role: ["전체"],
    techStack: ["Next.js 14", "TypeScript", "TailwindCSS", "Vercel"],
    category: "웹 / 풀스택",
    github: "https://github.com/kngyeol/devtools-kr",
    metrics: ["33개 도구", "15개 비교 페이지", "20개 섹션"],
  },
  {
    id: 11,
    title: "Divery",
    subtitle: "배달 서비스 플랫폼",
    period: "2026.01 - 2026.02",
    organization: "SSAFY",
    description:
      "React Native 모바일 앱 + Spring Boot 백엔드. Jenkins CI/CD 파이프라인 구축.",
    highlights: [
      "React Native 기반 모바일 프론트엔드",
      "Spring Boot 백엔드 + AI 서비스 연동",
      "Jenkins 기반 CI/CD 파이프라인",
      "Docker 컨테이너 배포, Nginx 라우팅",
    ],
    role: ["Frontend", "DevOps"],
    techStack: ["React Native", "Spring Boot", "Docker", "Jenkins", "Nginx"],
    category: "웹 / 풀스택",
  },
  {
    id: 12,
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
  },
  {
    id: 13,
    title: "TeamPathfinders - Xycar 자율주행",
    subtitle: "1/10 스케일 자율주행",
    period: "2024.07 - 2024.08",
    organization: "Team Pathfinders",
    description:
      "1/10 스케일 RC카 기반 자율주행 교육 플랫폼에서 자율 주차, 자율 주행, 차선 검출 구현.",
    highlights: [
      "자율 주차: Bezier 곡선 경로 생성 + Pure Pursuit 추적",
      "자율 주행: HSV 녹색 신호 검출 + IMU 가속도 적분",
      "차선 검출: Canny/Sobel + Bird's-eye View + RANSAC 다항식 피팅",
    ],
    role: ["전체"],
    techStack: ["ROS Noetic", "Python 3", "OpenCV", "NumPy", "Pygame"],
    category: "자율주행 / 로봇",
    github: "https://github.com/kngyeol/TeamPathfinders",
  },
]
