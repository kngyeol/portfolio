"use client"

import { motion } from "framer-motion"
import { RefreshCcw } from "lucide-react"
import { fadeInUp, staggerContainer } from "@/lib/animations"

const systemFlow = [
  {
    index: "01",
    label: "Sensor · Perception",
    description: "LiDAR와 Camera 입력을 AI·Vision 인지 결과로 정리합니다.",
    stack: "LiDAR · Camera · AI · Vision",
  },
  {
    index: "02",
    label: "ROS2 System",
    description: "ROS2와 Nav2에서 Planning과 시스템 상태 흐름을 연결합니다.",
    stack: "ROS2 · Nav2 · Planning · Integration",
  },
  {
    index: "03",
    label: "CAN · Actuator",
    description: "제어 명령과 차량 상태를 CAN 경계에서 변환해 액추에이터와 연결합니다.",
    stack: "CAN · Control · Runtime · Actuator",
  },
] as const

const verificationLoop = [
  {
    index: "A",
    label: "vcan HILS",
    detail: "가상 CAN 환경에서 상태와 액추에이터 재현",
  },
  {
    index: "B",
    label: "real2sim SILS",
    detail: "실차 기록과 rosbag을 반영해 SILS 조건 반복 검증",
  },
  {
    index: "C",
    label: "실측 디버깅",
    detail: "전압·포트 교차시험·로그로 원인 분리",
  },
] as const

export function ApproachSection() {
  return (
    <section
      id="approach"
      aria-labelledby="approach-title"
      className="min-h-[calc(100svh-4.5rem)] border-y border-border/70 bg-secondary/35 px-5 pb-20 pt-24 sm:px-6 sm:pb-24 lg:pb-28 lg:pt-28"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="mx-auto max-w-6xl"
      >
        <motion.header
          variants={fadeInUp}
          className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,0.78fr)] lg:items-end lg:gap-14"
        >
          <div>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
              System approach
            </p>
            <h2
              id="approach-title"
              className="text-safe-wrap mt-3 text-3xl font-bold tracking-[-0.045em] text-foreground sm:text-4xl lg:text-5xl"
            >
              연결에서 끝내지 않고,
              <br className="hidden sm:block" /> 재현과 실측으로 검증합니다.
            </h2>
          </div>
        </motion.header>

        <motion.div
          variants={fadeInUp}
          className="mt-12 grid border-y border-border lg:grid-cols-3"
        >
          {systemFlow.map((node, index) => (
            <article
              key={node.index}
              className={`relative min-w-0 py-7 lg:px-7 lg:py-8 ${index > 0 ? "border-t border-border lg:border-l lg:border-t-0" : ""}`}
            >
              <span className="font-mono text-4xl font-semibold tracking-[-0.06em] text-primary/80">
                {node.index}
              </span>
              <h3 className="text-safe-wrap mt-7 text-xl font-bold tracking-[-0.03em] text-foreground">
                {node.label}
              </h3>
              <p className="text-safe-wrap mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
                {node.description}
              </p>
              <p className="text-anywhere mt-6 border-t border-border pt-4 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-foreground/65">
                {node.stack}
              </p>
            </article>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="mt-8 bg-foreground text-background lg:grid lg:grid-cols-[15rem_minmax(0,1fr)]"
        >
          <div className="p-6 sm:p-7">
            <p className="flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-background/60">
              <RefreshCcw size={14} className="text-chart-2" />
              Verification loop
            </p>
            <h3 className="text-safe-wrap mt-3 text-lg font-bold tracking-[-0.025em] text-background">
              재현하고 원인을 분리해 다시 검증
            </h3>
          </div>

          <div className="grid border-t border-white/12 md:grid-cols-3 lg:border-l lg:border-t-0">
            {verificationLoop.map((item, index) => (
              <div
                key={item.index}
                className={`min-w-0 p-6 sm:p-7 ${index > 0 ? "border-t border-white/12 md:border-l md:border-t-0" : ""}`}
              >
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-chart-2">
                  {item.index}
                </p>
                <p className="mt-3 text-sm font-semibold text-background">
                  {item.label}
                </p>
                <p className="text-safe-wrap mt-2 text-xs leading-5 text-background/60">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
