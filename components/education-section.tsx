"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award, Languages, Trophy } from "lucide-react"
import type { Award as AwardData, Certificate, Education } from "@/lib/portfolio-data"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { SectionHeading } from "./section-heading"

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
    <section id="education" className="border-y border-border/70 bg-secondary/45 px-5 py-24 sm:px-6 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <SectionHeading
            index="04"
            eyebrow="Education & Awards"
            title="기술의 기반과 성장 기록입니다."
            description="전기전자공학 전공과 임베디드 교육을 바탕으로 로보틱스 소프트웨어 역량을 확장했습니다."
          />
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
                className="rounded-2xl border border-border bg-card p-5 shadow-[0_10px_30px_rgba(23,24,22,0.035)] transition-all hover:border-primary/30 sm:p-6"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
                  <div className="min-w-0">
                    <h4 className="text-safe-wrap font-semibold text-foreground">{edu.school}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {edu.major} · {edu.degree}
                    </p>
                  </div>
                  <span className="shrink-0 text-xs text-muted-foreground sm:text-right">
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
                className="rounded-2xl border border-border bg-card p-5 shadow-[0_10px_30px_rgba(23,24,22,0.035)] transition-all hover:border-primary/30 sm:p-6"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
                  <div className="min-w-0">
                    <h4 className="text-safe-wrap font-semibold text-foreground">{award.title}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {award.organization}
                    </p>
                    {award.description && (
                      <p className="mt-2 text-xs text-muted-foreground">
                        {award.description}
                      </p>
                    )}
                  </div>
                  <span className="shrink-0 text-xs text-muted-foreground sm:text-right">
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
                  className="flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-[0_8px_24px_rgba(23,24,22,0.035)] transition-all hover:border-primary/30"
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
              className="rounded-2xl border border-border bg-card p-5 shadow-[0_10px_30px_rgba(23,24,22,0.035)] transition-all hover:border-primary/30 sm:p-6"
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
