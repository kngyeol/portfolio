"use client"

import { motion } from "framer-motion"
import {
  ArrowDownRight,
  Github,
  Mail,
} from "lucide-react"
import type { Profile } from "@/lib/portfolio-data"
import { fadeInUp, staggerContainer } from "@/lib/animations"

export function HeroSection({ profile }: { profile: Profile }) {
  return (
    <section
      id="about"
      className="relative flex min-h-[100svh] items-center overflow-hidden px-5 py-24 sm:px-6 sm:py-28"
    >
      <div className="technical-grid pointer-events-none absolute inset-0 opacity-35 [mask-image:linear-gradient(to_bottom,black,transparent_78%)]" />

      <div className="relative z-10 mx-auto w-full max-w-4xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="min-w-0"
        >
          <motion.p
            variants={fadeInUp}
            className="text-xs font-semibold tracking-[0.08em] text-primary"
          >
            {profile.title}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-5 flex flex-wrap items-baseline gap-x-4 gap-y-1 min-[360px]:flex-nowrap"
          >
            <h1 className="text-safe-wrap text-[3.5rem] font-bold leading-[0.94] tracking-[-0.065em] text-foreground sm:text-[6.25rem] lg:text-[5.5rem] xl:text-[6.5rem]">
              {profile.name}
            </h1>
            <span className="shrink-0 whitespace-nowrap text-[11px] font-semibold tracking-[0.06em] text-muted-foreground sm:text-sm lg:text-base">
              {profile.nameEn}
            </span>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="text-safe-wrap mt-5 text-2xl font-semibold leading-tight tracking-[-0.04em] text-foreground sm:text-3xl lg:text-[1.7rem] xl:text-3xl"
          >
            인지부터 제어까지, <span className="text-primary">한 흐름으로.</span>
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="text-safe-wrap mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8"
          >
            {profile.summary}
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-foreground px-5 py-3 text-sm font-semibold text-background transition-colors hover:bg-primary"
            >
              프로젝트 보기
              <ArrowDownRight size={16} />
            </a>
            <a
              href={profile.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/45 hover:text-primary"
            >
              <Github size={16} />
              GitHub
            </a>
            <a
              href={`mailto:${profile.contact.email}`}
              className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:border-primary/45 hover:text-primary"
              aria-label="이메일 보내기"
            >
              <Mail size={17} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
