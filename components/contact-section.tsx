"use client"

import { motion } from "framer-motion"
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react"
import { profile } from "@/lib/portfolio-data"
import { fadeInUp, staggerContainer } from "@/lib/animations"

const links = [
  {
    label: "Email",
    href: `mailto:${profile.contact.email}`,
    icon: <Mail size={18} />,
    value: profile.contact.email || "email@example.com",
  },
  {
    label: "GitHub",
    href: profile.contact.github || "#",
    icon: <Github size={18} />,
    value: "GitHub",
  },
  {
    label: "LinkedIn",
    href: profile.contact.linkedin || "#",
    icon: <Linkedin size={18} />,
    value: "LinkedIn",
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mx-auto max-w-xl text-center"
        >
          <motion.div variants={fadeInUp}>
            <h2 className="text-sm font-medium uppercase tracking-widest text-primary">
              Contact
            </h2>
            <p className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
              연락하기
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              프로젝트 협업이나 채용 관련 문의는 언제든 환영합니다.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-col gap-3"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-border bg-card px-5 py-4 transition-all hover:border-primary/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.06)]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {link.icon}
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-muted-foreground">
                      {link.label}
                    </p>
                    <p className="text-sm font-medium text-foreground">
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
