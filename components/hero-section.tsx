"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react"
import { profile } from "@/lib/portfolio-data"
import { fadeInUp, staggerContainer } from "@/lib/animations"

export function HeroSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center justify-center px-6"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-3xl text-center"
      >
        {/* Status badge */}
        <motion.div variants={fadeInUp} className="mb-8 inline-block">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Open to Opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={fadeInUp}
          className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl"
        >
          {profile.name}
        </motion.h1>

        {/* Title */}
        <motion.p
          variants={fadeInUp}
          className="mt-4 text-lg font-medium text-primary sm:text-xl"
        >
          {profile.title}
        </motion.p>

        {/* Summary */}
        <motion.p
          variants={fadeInUp}
          className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          {profile.summary}
        </motion.p>

        {/* Social links */}
        <motion.div
          variants={fadeInUp}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <SocialLink
            href={`mailto:${profile.contact.email}`}
            icon={<Mail size={18} />}
            label="Email"
          />
          <SocialLink
            href={profile.contact.github}
            icon={<Github size={18} />}
            label="GitHub"
          />
          {profile.contact.linkedin && (
            <SocialLink
              href={profile.contact.linkedin}
              icon={<Linkedin size={18} />}
              label="LinkedIn"
            />
          )}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#skills"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        aria-label="Scroll to skills section"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-muted-foreground" />
        </motion.div>
      </motion.a>
    </section>
  )
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string
  icon: React.ReactNode
  label: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-secondary text-muted-foreground transition-all hover:border-primary hover:text-primary hover:shadow-[0_0_12px_rgba(6,182,212,0.15)]"
    >
      {icon}
    </a>
  )
}
