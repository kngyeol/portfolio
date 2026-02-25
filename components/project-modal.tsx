"use client"

import { useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import {
  X,
  Calendar,
  Building2,
  Users,
  CheckCircle2,
} from "lucide-react"
import type { Project } from "@/lib/portfolio-data"

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null
  onClose: () => void
}) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [project])

  const techList = project
    ? Array.isArray(project.techStack)
      ? project.techStack
      : [...Object.values(project.techStack).flat()]
    : []

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

          {/* Modal content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border bg-card shadow-2xl"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 flex items-start justify-between border-b border-border bg-card/95 px-6 py-5 backdrop-blur-sm">
              <div className="min-w-0 flex-1 pr-4">
                <h2 className="text-xl font-bold text-foreground">
                  {project.title}
                </h2>
                {project.subtitle && (
                  <p className="mt-1 text-sm text-muted-foreground">
                    {project.subtitle}
                  </p>
                )}
              </div>
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <X size={16} />
              </button>
            </div>

            <div className="px-6 py-6">
              {/* Meta info */}
              <div className="flex flex-wrap gap-3">
                {project.period && (
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-secondary px-3 py-1.5 text-xs text-secondary-foreground">
                    <Calendar size={13} />
                    {project.period}
                  </span>
                )}
                {project.organization && (
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-secondary px-3 py-1.5 text-xs text-secondary-foreground">
                    <Building2 size={13} />
                    {project.organization}
                  </span>
                )}
                {project.role.length > 0 && (
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-secondary px-3 py-1.5 text-xs text-secondary-foreground">
                    <Users size={13} />
                    {project.role.join(", ")}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              {/* Highlights */}
              <div className="mt-8">
                <h3 className="text-sm font-semibold text-foreground">
                  주요 성과
                </h3>
                <ul className="mt-3 flex flex-col gap-2.5">
                  {project.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-muted-foreground"
                    >
                      <CheckCircle2
                        size={15}
                        className="mt-0.5 shrink-0 text-primary"
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech stack */}
              <div className="mt-8">
                <h3 className="text-sm font-semibold text-foreground">
                  기술 스택
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {techList.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-primary/20 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
