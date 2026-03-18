# 김동열 포트폴리오

> 자율주행 / AI / 임베디드 엔지니어

Skyautonet 자율주행 인턴 출신. ROS2/Autoware 기반 인지-판단-제어 파이프라인과 CAN 통신, HILS 검증 경험.

## 배포

- **Live**: [https://portfolio-kngyeol.vercel.app](https://portfolio-kngyeol.vercel.app)

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
| **Balemale** | AI 스마트 자율 주차 로봇 (18개 FSM, ArUco 28개 마커) | ROS2, YOLOv8, TensorRT |
| **TeamKAI** | 자율주행 자작차 인지 파트장 | ROS, LiDAR, CAN |
| **ARAS** | RC Car ADAS 시스템 (Fail-Safe 설계) | MQTT, OpenCV, RPi5 |

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

### Balemale - AI 스마트 자율 주차 로봇

<!-- TODO: 이미지 추가 -->
<!-- ![Balemale Demo](./public/projects/balemale/demo.gif) -->

- ArUco 마커 기반 자율 주행
- 18개 FSM 상태 기반 입고/출차
- Spring Boot + Vue 3 키오스크

### Fire & Smoke Detection Drone

<!-- TODO: 이미지 추가 -->
<!-- ![Fire Detection](./public/projects/fire-detection/result.png) -->

- YOLOv9-c 화재/연기 탐지
- mAP50: 0.867, 4.6ms 추론
- Lite-Mono 깊이 추정

### CAN MultiECU HILS

<!-- TODO: 이미지 추가 -->
<!-- ![CAN HILS](./public/projects/can-hils/architecture.png) -->

- STM32 x2 Sensor/Control ECU 분리
- CAN A/B 이중화 Fail-over
- Python HILS 시나리오 검증

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
│   └── projects/       # 프로젝트 이미지/영상 (TODO)
└── styles/
    └── globals.css
```

## 연락처

- **Email**: kngyeol@gmail.com
- **GitHub**: [@kngyeol](https://github.com/kngyeol)

---

Built with Next.js & Tailwind CSS
