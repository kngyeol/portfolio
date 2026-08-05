"use client"

import { motion } from "framer-motion"
import {
  Bot,
  BrainCircuit,
  Code2,
  Cpu,
  Server,
  Monitor,
  Radio,
} from "lucide-react"
import type { Skills } from "@/lib/portfolio-data"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { SectionHeading } from "./section-heading"

const categoryIcons: Record<string, React.ReactNode> = {
  언어: <Code2 size={18} />,
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
            eyebrow="03"
            title="기술"
            description="프로젝트에서 사용한 기술을 시스템 역할별로 정리했습니다."
          />
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mt-12 border-t border-border/90"
        >
          {Object.entries(skills).map(([category, items]) => (
            <motion.li
              key={category}
              variants={fadeInUp}
              className="grid gap-4 border-b border-border/90 py-5 sm:grid-cols-[minmax(11rem,0.36fr)_minmax(0,1fr)] sm:items-start sm:gap-8 sm:py-6"
            >
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="flex h-8 w-8 shrink-0 items-center justify-center text-primary"
                >
                  {categoryIcons[category]}
                </span>
                <h3 className="text-sm font-semibold text-foreground">
                  {category}
                </h3>
              </div>
              <ul className="flex flex-wrap gap-x-5 gap-y-2">
                {items.map((skill) => (
                  <li
                    key={skill}
                    className="text-anywhere text-sm leading-6 text-secondary-foreground before:mr-2 before:text-primary/45 before:content-['/']"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
