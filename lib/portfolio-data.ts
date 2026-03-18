export const profile = {
  name: "김동열",
  nameEn: "Kim Dongyeol",
  title: "자율주행 / AI / 임베디드 엔지니어",
  summary:
    "Skyautonet 자율주행 인턴 출신. ROS2/Autoware 기반 인지-판단-제어 파이프라인과 CAN 통신, HILS 검증 경험. AI(CV)부터 임베디드, 백엔드까지 시스템 단위로 통합 가능한 엔지니어.",
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
    "Lanelet2",
    "ArUco",
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
  // ===== 자율주행 / 로봇 =====
  {
    id: 1,
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
  },
  {
    id: 2,
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
  },
  {
    id: 3,
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
  },
  {
    id: 4,
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
  },

  // ===== AI / 컴퓨터비전 =====
  {
    id: 5,
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
  },
  {
    id: 6,
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
  },
  {
    id: 7,
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
  },
  {
    id: 8,
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
  },

  // ===== 웹 / 풀스택 =====
  {
    id: 9,
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
  },
  {
    id: 10,
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
  },
  {
    id: 11,
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
  },

  // ===== 임베디드 / FPGA =====
  {
    id: 12,
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
  },
  {
    id: 13,
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
]
