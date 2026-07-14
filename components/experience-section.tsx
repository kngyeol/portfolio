"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar } from "lucide-react"
import type { Experience } from "@/lib/portfolio-data"
import { fadeInUp, staggerContainer } from "@/lib/animations"

export function ExperienceSection({
  experiences,
}: {
  experiences: Experience[]
}) {
  return (
    <section id="experience" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="text-sm font-medium uppercase tracking-widest text-primary">
            Experience
          </h2>
          <p className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
            경력
          </p>
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
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-[0_0_30px_rgba(242,107,29,0.08)]"
            >
              {/* Color accent bar */}
              <div className="absolute left-0 top-0 h-full w-1 bg-primary/60" />

              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Briefcase size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {exp.company}
                      </h3>
                      <p className="text-sm text-primary">{exp.position}</p>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <ul className="mt-4 space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-foreground/80"
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
