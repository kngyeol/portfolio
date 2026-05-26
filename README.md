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
| **SCV** | 자연어 명령 기반 Smart Companion Vehicle | ROS2, Nav2, RoboCrew |
| **Balemale** | AI 스마트 자율 주차 로봇 (18개 FSM, ArUco 28개 마커) | ROS2, YOLOv8, TensorRT |
| **TeamKAI** | 자율주행 자작차 인지 파트장 | ROS, LiDAR, CAN |
| **ARAS** | RC Car ADAS 시스템 (Fail-Safe 설계) | MQTT, OpenCV, RPi5 |
| **Bimanual Manipulation** | 양손 로봇 조작 시나리오 영상 아카이브 | Robot Arm, Video Analysis |

### AI / 컴퓨터비전

| 프로젝트 | 설명 | 핵심 기술 |
|---------|------|----------|
| **Fire Detection Drone** | 화재/연기 탐지 (mAP50: 0.867) | YOLOv9, TensorRT |
| **Divery** | 다이빙 로그북 AI 자동 생성 | YOLO-World, BioCLIP |
| **Korean VQA** | VLM 기반 4지선다 VQA | Qwen-VL, LoRA |

### 임베디드 / FPGA

| 프로젝트 | 설명 | 핵심 기술 |
|---------|------|----------|
| **CAN MultiECU HILS** | CAN 이중화 검증 플랫폼 | STM32, FreeRTOS, CAN |
| **ResNet50 MAC** | FPGA CNN 추론 가속기 | Verilog, AXI DMA |

## 프로젝트 미리보기

### SCV - Smart Companion Vehicle

- 자연어 명령을 LLM planner와 ROS2 drive bridge로 연결
- Nav2/AMCL/SLAM 기반 실내 주행, 비전 정렬, 로봇팔 runtime 통합
- 최종 발표자료 PDF와 영상 포트폴리오 mp4를 프로젝트 상세 페이지에 연결

### Fire & Smoke Detection Drone

- YOLOv9-c 화재/연기 탐지
- mAP50: 0.867, 4.6ms 추론
- Lite-Mono 깊이 추정

### Bimanual Manipulation

- 양손 조작 시나리오 4개 영상 연결
- 음료수, 치약/칫솔, 소형 물체 조작 장면 정리
- 영상별 타임스탬프 설명은 추가 정리 예정

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

- **Email**: kngyeol@gmail.com
- **GitHub**: [@kngyeol](https://github.com/kngyeol)

---

Built with Next.js & Tailwind CSS
