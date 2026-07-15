"use client"

import { motion } from "framer-motion"
import {
  ArrowDownRight,
  ArrowRight,
  CheckCircle2,
  Github,
  Mail,
} from "lucide-react"
import type { Profile } from "@/lib/portfolio-data"
import { fadeInUp, staggerContainer } from "@/lib/animations"

const capabilityCards = [
  { label: "System", value: "ROS2 · Nav2" },
  { label: "Interface", value: "CAN · HILS" },
  { label: "Perception", value: "AI · Vision" },
] as const

const systemFlow = [
  { index: "01", label: "Sensor · Perception", detail: "LiDAR · Camera · AI" },
  { index: "02", label: "ROS2 System", detail: "Planning · Integration" },
  { index: "03", label: "CAN · Actuator", detail: "Control · Runtime" },
] as const

export function HeroSection({ profile }: { profile: Profile }) {
  return (
    <section
      id="about"
      className="relative flex min-h-[780px] items-center overflow-hidden px-5 pb-20 pt-28 sm:px-6 lg:min-h-screen lg:py-32"
    >
      <div className="technical-grid pointer-events-none absolute inset-0 opacity-55 [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />
      <div className="pointer-events-none absolute -left-32 top-24 h-80 w-80 rounded-full bg-primary/10 blur-[110px]" />
      <div className="pointer-events-none absolute right-[-10rem] top-1/3 h-96 w-96 rounded-full bg-foreground/5 blur-[130px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="min-w-0"
        >
          <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/8 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_0_4px_rgba(236,91,32,0.12)]" />
              {profile.role}
            </span>
            <span className="text-xs font-medium text-muted-foreground">
              {profile.nameEn}
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-safe-wrap mt-7 max-w-3xl text-[4.6rem] font-bold leading-[0.94] tracking-[-0.065em] text-foreground sm:text-[6.25rem] lg:text-[5.5rem] xl:text-[7rem]"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-safe-wrap mt-5 text-2xl font-semibold leading-tight tracking-[-0.04em] text-foreground sm:text-3xl lg:text-[1.7rem] xl:text-3xl"
          >
            인지부터 제어까지, <span className="text-primary">한 흐름으로.</span>
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="text-safe-wrap mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8"
          >
            {profile.summary}
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-foreground px-5 py-3 text-sm font-semibold text-background shadow-[0_12px_30px_rgba(23,24,22,0.18)] transition-all hover:-translate-y-0.5 hover:bg-primary"
            >
              프로젝트 보기
              <ArrowDownRight size={16} />
            </a>
            <a
              href={profile.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/80 px-5 py-3 text-sm font-semibold text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
            >
              <Github size={16} />
              GitHub
            </a>
            <a
              href={`mailto:${profile.contact.email}`}
              className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-card/80 text-muted-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
              aria-label="이메일 보내기"
            >
              <Mail size={17} />
            </a>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-10 grid max-w-2xl grid-cols-1 gap-2 sm:grid-cols-3"
          >
            {capabilityCards.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-border/80 bg-card/65 px-4 py-3 backdrop-blur-sm"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {item.label}
                </p>
                <p className="mt-1 text-sm font-semibold text-foreground">
                  {item.value}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="surface-shadow relative mx-auto w-full max-w-lg overflow-hidden rounded-[2rem] border border-border bg-card/90 p-5 backdrop-blur-xl sm:p-7"
        >
          <div className="flex items-start justify-between gap-4 border-b border-border pb-5">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                System flow
              </p>
              <h2 className="text-safe-wrap mt-2 text-xl font-bold tracking-[-0.03em] text-foreground">
                연결하고, 측정하고, 검증합니다.
              </h2>
            </div>
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <ArrowRight size={18} />
            </span>
          </div>

          <div className="relative mt-6 space-y-3">
            <div className="absolute bottom-8 left-[1.3rem] top-8 w-px bg-gradient-to-b from-primary/20 via-primary to-primary/20" />
            {systemFlow.map((node) => (
              <div
                key={node.index}
                className="relative flex items-center gap-4 rounded-2xl border border-border bg-background/75 p-4"
              >
                <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-foreground font-mono text-xs font-bold text-background">
                  {node.index}
                </span>
                <div className="min-w-0">
                  <p className="text-safe-wrap text-sm font-semibold text-foreground">
                    {node.label}
                  </p>
                  <p className="text-anywhere mt-1 text-xs text-muted-foreground">
                    {node.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-2xl bg-foreground p-5 text-background">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-background/60">
              <CheckCircle2 size={14} className="text-primary" />
              Verification loop
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {['vcan HILS', 'real2sim SILS', '실측 디버깅'].map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-white/10 bg-white/8 px-3 py-1.5 text-xs font-medium text-background/90"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
