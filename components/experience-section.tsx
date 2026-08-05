"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar } from "lucide-react"
import type { Experience } from "@/lib/portfolio-data"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { SectionHeading } from "./section-heading"

export function ExperienceSection({
  experiences,
}: {
  experiences: Experience[]
}) {
  return (
    <section id="experience" className="px-5 py-24 sm:px-6 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <SectionHeading
            eyebrow="01"
            title="경력"
            description="실제 차량 시스템에서 경로 생성, CAN 변환, HILS와 HMI 연동을 담당했습니다."
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mt-10 border-y border-border"
        >
          {experiences.map((exp) => (
            <motion.article
              key={exp.id}
              variants={fadeInUp}
              className="grid gap-6 border-b border-border py-7 last:border-b-0 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-10 lg:py-9"
            >
              <div className="min-w-0">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-primary/20 text-primary">
                    <Briefcase size={18} />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-xl font-bold tracking-[-0.025em] text-foreground">
                      {exp.company}
                    </h3>
                    <p className="text-safe-wrap mt-1 text-sm font-medium text-primary">
                      {exp.position}
                    </p>
                  </div>
                </div>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm tabular-nums text-muted-foreground">
                  <Calendar size={14} />
                  {exp.period}
                </span>
              </div>

              <div className="min-w-0">
                <p className="text-safe-wrap max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
                  {exp.description}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {exp.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="text-safe-wrap flex items-start gap-3 text-sm leading-6 text-foreground/80"
                    >
                      <span className="mt-2 h-px w-3 shrink-0 bg-primary" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <p className="text-safe-wrap mt-5 border-t border-border pt-4 text-xs leading-6 text-muted-foreground">
                  {exp.techStack.join(" · ")}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
