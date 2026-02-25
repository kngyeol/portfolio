export const profile = {
  name: "김동열",
  title: "자율주행 / AI / 임베디드 엔지니어",
  summary:
    "자율주행 로봇, 컴퓨터비전 AI, FPGA 하드웨어 가속기까지 소프트웨어와 하드웨어를 아우르는 풀스택 엔지니어",
  contact: {
    email: "",
    github: "",
    linkedin: "",
  },
}

export const skills: Record<string, string[]> = {
  "자율주행/로봇": [
    "ROS",
    "ROS2",
    "Autoware",
    "ArUco",
    "Kalman Filter",
    "PID",
    "MQTT",
  ],
  "딥러닝/AI": [
    "PyTorch",
    "YOLOv8",
    "YOLOv9",
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
    "Arduino",
    "Jetson Orin",
  ],
  백엔드: ["Spring Boot", "PostgreSQL", "Redis", "MQTT", "WebSocket"],
  프론트엔드: ["Vue 3", "TypeScript", "Pinia", "Firebase"],
  기타: ["Onshape", "3D Printing", "Git"],
}

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
    subtitle: "파킹하긴해",
    period: "2026.01 - 2026.02",
    organization: "SSAFY",
    description:
      "AI 번호판 인식 + 4WD Mecanum 자율 주차 로봇을 활용한 완전 자동 주차 시스템. 차량 인식부터 적재, 자율 주행, 주차, 회수까지 전 과정 자동화.",
    highlights: [
      "YOLOv8 + LPRNet 번호판 인식 (Jetson TensorRT / RPi ONNX)",
      "ArUco 마커 기반 자율 주행 (vx + vy + wz 동시 제어)",
      "18개 상태 FSM 기반 미션 관리",
      "랙 앤 피니언 방식 적재 하드웨어 설계 (Onshape + 3D 프린팅)",
    ],
    role: ["AI", "Embedded", "Hardware"],
    techStack: [
      "ROS2 Humble",
      "Python",
      "YOLOv8",
      "TensorRT",
      "ArUco",
      "Kalman Filter",
      "MQTT",
      "Jetson Orin Nano",
      "Arduino",
      "Onshape",
    ],
    category: "자율주행 / 로봇",
  },
  {
    id: 2,
    title: "Skyautonet Level 4 자율주행",
    subtitle: "인턴십",
    period: "2024",
    organization: "Skyautonet",
    description:
      "Autoware 기반 Level 4 자율주행 시스템 개발. 센서 컴포넌트, 차량 제어, 런치 시스템 담당.",
    highlights: [
      "ARS408 Radar 드라이버 개발",
      "Vehicle Control 모듈 개발",
      "Perception/Planning/Control/Localization 런처 구성",
    ],
    role: ["Sensor Component", "Vehicle Control", "Launch System"],
    techStack: ["ROS 2", "Autoware.Universe", "C++", "Python"],
    category: "자율주행 / 로봇",
  },
  {
    id: 3,
    title: "TeamKAI - 자율주행 자작차",
    subtitle: "건국대학교 동아리",
    period: "",
    organization: "건국대학교 Team KAI",
    description:
      "콘(cone) 기반 트랙에서 LiDAR, 카메라, GPS, IMU를 활용한 ROS 기반 자율주행 시스템.",
    highlights: [
      "LiDAR 콘 검출 (RANSAC + 유클리디안 클러스터링)",
      "YOLOv5/v8 콘 객체 검출",
      "Bezier 경로 생성 + Stanley/Pure Pursuit 추적",
      "CAN 버스 조향 + ESP32 PID 속도 제어",
    ],
    role: ["Perception", "Planning", "Control"],
    techStack: [
      "ROS Noetic",
      "PCL",
      "OpenCV",
      "PyTorch",
      "SocketCAN",
      "ESP32",
    ],
    category: "자율주행 / 로봇",
  },
  {
    id: 4,
    title: "TeamPathfinders - Xycar 자율주행",
    subtitle: "",
    period: "",
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
  },
  {
    id: 5,
    title: "SSAFY AI Challenge - Korean Visual QA",
    subtitle: "VLM 기반 4지선다 VQA",
    period: "2026",
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
    id: 6,
    title: "Fire & Smoke Detection Drone",
    subtitle: "YOLOv9 + Depth Estimation",
    period: "",
    organization: "",
    description:
      "드론 탑재 카메라 기반 실시간 화재/연기 탐지 및 위험도 평가 시스템.",
    highlights: [
      "YOLOv9-c 화재/연기 탐지 (mAP50: 0.867)",
      "Lite-Mono 단안 깊이 추정으로 거리 파악",
      "Structured Pruning + TensorRT 최적화",
      "Gradio 웹 UI",
    ],
    role: ["전체"],
    techStack: [
      "YOLOv9",
      "Lite-Mono",
      "TensorRT",
      "Structured Pruning",
      "Jetson Orin",
      "Gradio",
    ],
    category: "AI / 컴퓨터비전",
  },
  {
    id: 7,
    title: "Smart Menu Board Scanner",
    subtitle: "음식 분류 + 메뉴판 OCR",
    period: "",
    organization: "",
    description:
      "외국인 관광객을 위한 한국 음식점 메뉴판 자동 인식 시스템. 음식 사진 분류 및 메뉴판 OCR 번역 제공.",
    highlights: [
      "MobileNetV2 + Food-101 (101종 음식 분류)",
      "EasyOCR 한국어/영어 메뉴판 인식",
      "Naver Papago 번역 연동",
      "인터랙티브 클릭 → 번역 검색",
    ],
    role: ["전체"],
    techStack: [
      "PyTorch",
      "MobileNetV2",
      "EasyOCR",
      "deep-text-recognition-benchmark",
    ],
    category: "AI / 컴퓨터비전",
  },
  {
    id: 8,
    title: "Vehicle Infotainment System",
    subtitle: "차량용 인포테인먼트",
    period: "",
    organization: "SSAFY",
    description:
      "차량용 인포테인먼트 시스템. 태블릿 스타일 UI의 통합 차량 서비스 플랫폼.",
    highlights: [
      "Telematics Log Viewer (차량 데이터 시각화)",
      "실시간 날씨 정보",
      "내비게이션",
      "AI Driving Assistant 챗봇",
      "Firebase 사용자 인증",
    ],
    role: ["Frontend"],
    techStack: ["Vue 3", "Vite", "Pinia", "Firebase", "Bootstrap"],
    category: "웹 / 풀스택",
  },
  {
    id: 9,
    title: "Balemale Backend/Frontend",
    subtitle: "스마트 주차 시스템 서버/키오스크",
    period: "2026.01 - 2026.02",
    organization: "SSAFY",
    description:
      "Balemale 스마트 주차 시스템의 백엔드 서버 및 키오스크 프론트엔드.",
    highlights: [
      "Spring Boot 4.0 + PostgreSQL + Redis",
      "MQTT 로봇 통신 + WebSocket 실시간 알림",
      "Dijkstra 최단 경로 탐색",
      "PortOne 결제 연동",
      "Vue 3 + TypeScript 키오스크 UI",
    ],
    role: ["Backend", "Frontend"],
    techStack: [
      "Java 17",
      "Spring Boot 4.0",
      "PostgreSQL",
      "MyBatis",
      "Redis",
      "MQTT",
      "WebSocket",
      "PortOne",
      "Vue 3",
      "TypeScript",
    ],
    category: "웹 / 풀스택",
  },
  {
    id: 10,
    title: "ResNet50 MAC Accelerator",
    subtitle: "FPGA CNN 추론 가속기",
    period: "",
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
    techStack: [
      "Vivado",
      "Verilog",
      "Xilinx SDK",
      "C",
      "AXI DMA",
      "AXI4-Lite",
    ],
    category: "임베디드 / FPGA",
  },
]
