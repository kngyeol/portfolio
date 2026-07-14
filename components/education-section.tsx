"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award, Languages, Trophy } from "lucide-react"
import type { Award as AwardData, Certificate, Education } from "@/lib/portfolio-data"
import { fadeInUp, staggerContainer } from "@/lib/animations"

export function EducationSection({
  education,
  awards,
  certificates,
}: {
  education: Education[]
  awards: AwardData[]
  certificates: Certificate[]
}) {
  return (
    <section id="education" className="px-6 py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="text-sm font-medium uppercase tracking-widest text-primary">
            Education & Awards
          </h2>
          <p className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
            학력 및 수상
          </p>
        </motion.div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {/* Education */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-4"
          >
            <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground">
              <GraduationCap size={20} className="text-primary" />
              학력
            </h3>

            {education.map((edu) => (
              <motion.div
                key={edu.id}
                variants={fadeInUp}
                className="rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="font-semibold text-foreground">{edu.school}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {edu.major} · {edu.degree}
                    </p>
                  </div>
                  <span className="shrink-0 text-xs text-muted-foreground">
                    {edu.period}
                  </span>
                </div>
                {edu.gpa && (
                  <p className="mt-2 text-sm text-primary">GPA: {edu.gpa}</p>
                )}
                {edu.notes && (
                  <ul className="mt-2 space-y-1">
                    {edu.notes.map((note, idx) => (
                      <li key={idx} className="text-xs text-muted-foreground">
                        • {note}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Awards & Certificates */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-4"
          >
            {/* Awards */}
            <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground">
              <Trophy size={20} className="text-primary" />
              수상
            </h3>

            {awards.map((award) => (
              <motion.div
                key={award.id}
                variants={fadeInUp}
                className="rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="font-semibold text-foreground">{award.title}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {award.organization}
                    </p>
                    {award.description && (
                      <p className="mt-2 text-xs text-muted-foreground">
                        {award.description}
                      </p>
                    )}
                  </div>
                  <span className="shrink-0 text-xs text-muted-foreground">
                    {award.date}
                  </span>
                </div>
              </motion.div>
            ))}

            {/* Certificates */}
            <h3 className="mt-6 flex items-center gap-2 text-lg font-semibold text-foreground">
              <Languages size={20} className="text-primary" />
              어학
            </h3>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-3"
            >
              {certificates.map((cert) => (
                <div
                  key={cert.id}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 transition-all hover:border-primary/30"
                >
                  <div>
                    <p className="font-medium text-foreground">{cert.name}</p>
                    <p className="text-xs text-muted-foreground">{cert.date}</p>
                  </div>
                  {cert.score && (
                    <span className="rounded-lg bg-primary/10 px-2.5 py-1 text-sm font-semibold text-primary">
                      {cert.score}
                    </span>
                  )}
                </div>
              ))}
            </motion.div>

            {/* Military */}
            <h3 className="mt-6 flex items-center gap-2 text-lg font-semibold text-foreground">
              <Award size={20} className="text-primary" />
              병역
            </h3>

            <motion.div
              variants={fadeInUp}
              className="rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30"
            >
              <h4 className="font-semibold text-foreground">KATUSA (카투사)</h4>
              <p className="mt-1 text-sm text-muted-foreground">
                주한미군(USFK) 배속 · 2020.06 - 2021.12
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                한미연합 환경 복무, 영어 커뮤니케이션 실전 활용
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
