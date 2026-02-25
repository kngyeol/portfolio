"use client"

import { motion } from "framer-motion"
import {
  Bot,
  BrainCircuit,
  Cpu,
  Server,
  Monitor,
  Wrench,
} from "lucide-react"
import { skills } from "@/lib/portfolio-data"
import { fadeInUp, staggerContainer } from "@/lib/animations"

const categoryIcons: Record<string, React.ReactNode> = {
  "자율주행/로봇": <Bot size={18} />,
  "딥러닝/AI": <BrainCircuit size={18} />,
  "FPGA/임베디드": <Cpu size={18} />,
  백엔드: <Server size={18} />,
  프론트엔드: <Monitor size={18} />,
  기타: <Wrench size={18} />,
}

export function SkillsSection() {
  return (
    <section id="skills" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="text-sm font-medium uppercase tracking-widest text-primary">
            Skills
          </h2>
          <p className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
            기술 스택
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {Object.entries(skills).map(([category, items]) => (
            <motion.div
              key={category}
              variants={fadeInUp}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-[0_0_24px_rgba(6,182,212,0.06)]"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
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
                    className="inline-block rounded-md border border-border bg-secondary px-2.5 py-1 text-xs text-secondary-foreground transition-colors hover:border-primary/40 hover:text-primary"
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
