"use client"

import { motion } from "framer-motion"
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react"
import type { Profile } from "@/lib/portfolio-data"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { SectionHeading } from "./section-heading"

export function ContactSection({ profile }: { profile: Profile }) {
  const links = [
    profile.contact.email && {
      label: "Email",
      href: `mailto:${profile.contact.email}`,
      icon: <Mail size={18} />,
      value: profile.contact.email,
    },
    profile.contact.github && {
      label: "GitHub",
      href: profile.contact.github,
      icon: <Github size={18} />,
      value: profile.contact.github.replace(/^https?:\/\//, ""),
    },
    profile.contact.linkedin && {
      label: "LinkedIn",
      href: profile.contact.linkedin,
      icon: <Linkedin size={18} />,
      value: "LinkedIn",
    },
  ].filter(Boolean) as {
    label: string
    href: string
    icon: React.ReactNode
    value: string
  }[]

  return (
    <section id="contact" className="px-5 py-24 sm:px-6 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mx-auto max-w-2xl"
        >
          <motion.div variants={fadeInUp}>
            <SectionHeading
              eyebrow="Contact"
              title="다음 시스템을 함께 만들 준비가 되어 있습니다."
              description="프로젝트 협업이나 채용 관련 문의는 아래 채널로 연락해 주세요."
            />
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-10 grid gap-3 sm:grid-cols-2"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-w-0 items-center justify-between rounded-2xl border border-border bg-card px-5 py-4 shadow-[0_10px_30px_rgba(23,24,22,0.04)] transition-all hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-[0_16px_40px_rgba(23,24,22,0.08)]"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {link.icon}
                  </div>
                  <div className="min-w-0 text-left">
                    <p className="text-xs text-muted-foreground">
                      {link.label}
                    </p>
                    <p className="text-anywhere text-sm font-medium text-foreground">
                      {link.value}
                    </p>
                  </div>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-muted-foreground transition-colors group-hover:text-primary"
                />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
