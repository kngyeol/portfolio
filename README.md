# 김동열 포트폴리오

> 자율주행 / AI / 임베디드 엔지니어

ROS2/Nav2 기반 실내 이동 로봇, Autoware 기반 자율주행, CAN/HILS 검증과 AI 컴퓨터비전을 다루는 포트폴리오 사이트입니다.

## 배포

- **Live**: [https://kngyeol-portfolio.vercel.app](https://kngyeol-portfolio.vercel.app)

## 기술 스택

| 분야 | 기술 |
|------|------|
| Framework | Next.js 16, React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Animation | Framer Motion |
| UI Components | shadcn/ui, Radix UI |
| Deployment | Vercel |

## 주요 프로젝트

### 자율주행 / 로봇

| 프로젝트 | 설명 | 핵심 기술 |
|---------|------|----------|
| **[SCV](https://github.com/kngyeol/Project-SCV)** | 자연어 명령 기반 Smart Companion Vehicle | ROS2, Nav2, RoboCrew |
| **[Balemale](https://github.com/kngyeol/Project-Balemale)** | AI 스마트 자율 주차 로봇 (18개 FSM, ArUco 28개 마커) | ROS2, YOLOv8, TensorRT |
| **[TeamKAI](https://github.com/kngyeol/Project-TeamKAI)** | 자율주행 자작차 인지 파트장 | ROS, LiDAR, CAN |
| **[ARAS](https://github.com/kngyeol/Project-ARAS)** | RC Car 주행 보조 시스템 (모드별 센서 fallback) | MQTT, OpenCV, RPi5 |

### AI / 컴퓨터비전

| 프로젝트 | 설명 | 핵심 기술 |
|---------|------|----------|
| **[Fire Detection Drone](https://github.com/kngyeol/Project-FireDrone)** | 화재/연기 탐지 (mAP50: 0.867) | YOLOv9, TensorRT |
| **[Divary](https://github.com/kngyeol/Project-DIVARY)** | 다이빙 로그북 AI 자동 생성 | YOLO-World, BioCLIP-2 |
| **[Korean VQA](https://github.com/kngyeol/Project-Korean-VQA)** | VLM 기반 4지선다 VQA | Qwen-VL, LoRA |

### 임베디드 / FPGA

| 프로젝트 | 설명 | 핵심 기술 |
|---------|------|----------|
| **ResNet50 MAC** | FPGA CNN 추론 가속기 | Verilog, AXI DMA |

외부 링크는 공개 `Project-*` 소개 저장소만 사용합니다. 원본 소스 스냅샷은 비공개이며, 공개 소개 저장소의 다이어그램과 아티팩트는 코드 기여율을 대신하는 증빙이 아닙니다.

## 프로젝트 미리보기

### SCV - Smart Companion Vehicle

- 자연어 명령을 LLM planner와 ROS2 drive bridge로 연결
- Nav2/AMCL/SLAM 기반 실내 주행, 비전 정렬, 로봇팔 runtime 통합
- 최종 발표자료 PDF와 영상 포트폴리오 mp4를 프로젝트 상세 페이지에 연결

### Fire & Smoke Detection Drone

- YOLOv9-c 화재/연기 탐지
- mAP50: 0.867, RTX 4090 기준 YOLO 추론 4.6ms
- Lite-Mono 깊이 추정

## 로컬 실행

```bash
# 의존성 설치
pnpm install

# 개발 서버
pnpm dev

# 빌드
pnpm build
```

## 디렉토리 구조

```
├── app/                # Next.js App Router
├── components/         # React 컴포넌트
│   ├── ui/            # shadcn/ui 컴포넌트
│   ├── hero-section.tsx
│   ├── skills-section.tsx
│   ├── experience-section.tsx
│   ├── projects-section.tsx
│   ├── education-section.tsx
│   └── contact-section.tsx
├── lib/
│   ├── portfolio-data.ts  # 프로젝트/경력 데이터
│   ├── animations.ts      # Framer Motion 설정
│   └── utils.ts
├── public/
│   └── projects/       # 프로젝트 이미지/영상/PDF
└── styles/
    └── globals.css
```

## 연락처

- **Email**: henry3447@naver.com
- **GitHub**: [@kngyeol](https://github.com/kngyeol)

---

Built with Next.js & Tailwind CSS
