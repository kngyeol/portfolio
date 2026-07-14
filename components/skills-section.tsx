"use client"

import { motion } from "framer-motion"
import {
  Bot,
  BrainCircuit,
  Cpu,
  Server,
  Monitor,
  Radio,
} from "lucide-react"
import type { Skills } from "@/lib/portfolio-data"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { SectionHeading } from "./section-heading"

const categoryIcons: Record<string, React.ReactNode> = {
  "자율주행/로봇": <Bot size={18} />,
  "딥러닝/AI": <BrainCircuit size={18} />,
  "FPGA/임베디드": <Cpu size={18} />,
  통신: <Radio size={18} />,
  백엔드: <Server size={18} />,
  프론트엔드: <Monitor size={18} />,
}

export function SkillsSection({ skills }: { skills: Skills }) {
  return (
    <section id="skills" className="border-y border-border/70 bg-secondary/45 px-5 py-24 sm:px-6 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <SectionHeading
            index="01"
            eyebrow="Skills"
            title="도구보다 연결 방식에 집중합니다."
            description="자율주행과 로보틱스 시스템을 구성하는 인지, 통신, 제어, 운영 기술을 프로젝트 안에서 함께 사용했습니다."
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {Object.entries(skills).map(([category, items]) => (
            <motion.div
              key={category}
              variants={fadeInUp}
              className="group rounded-2xl border border-border/90 bg-card p-5 shadow-[0_10px_30px_rgba(23,24,22,0.035)] transition-all hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_18px_45px_rgba(23,24,22,0.08)] sm:p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  {categoryIcons[category]}
                </div>
                <h3 className="text-sm font-semibold text-foreground">
                  {category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                  className="text-anywhere inline-block rounded-lg border border-border/80 bg-secondary/75 px-2.5 py-1.5 text-xs font-medium text-secondary-foreground transition-colors hover:border-primary/40 hover:bg-primary/8 hover:text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
