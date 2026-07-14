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
            index="02"
            eyebrow="Experience"
            title="실제 차량 시스템의 경계를 다뤘습니다."
            description="경로 생성부터 CAN 변환, HILS와 HMI 연동까지 인터페이스 사이의 문제를 분리하고 반복 검증했습니다."
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mt-10 space-y-6"
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              variants={fadeInUp}
              className="surface-shadow group relative overflow-hidden rounded-[1.75rem] border border-border bg-card p-6 transition-all hover:border-primary/35 sm:p-8"
            >
              {/* Color accent bar */}
              <div className="absolute left-0 top-0 h-full w-1.5 bg-primary" />

              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Briefcase size={20} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-xl font-bold tracking-[-0.025em] text-foreground">
                        {exp.company}
                      </h3>
                      <p className="text-safe-wrap mt-1 text-sm font-medium text-primary">{exp.position}</p>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-safe-wrap mt-5 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <ul className="mt-4 space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="text-safe-wrap flex items-start gap-3 text-sm leading-6 text-foreground/80"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-primary/10 px-2 py-0.5 text-[11px] font-medium text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
