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
              eyebrow="05"
              title="연락처"
              description="채용 및 프로젝트 관련 연락은 이메일이나 GitHub로 부탁드립니다."
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
                className="group flex min-h-20 min-w-0 items-center justify-between rounded-lg border border-border bg-card px-5 py-4 transition-colors hover:border-primary/40"
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
