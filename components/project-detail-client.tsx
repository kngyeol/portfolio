"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowLeft,
  Calendar,
  Building2,
  Users,
  Github,
  ExternalLink,
  CheckCircle2,
  BarChart3,
  Images,
} from "lucide-react"
import type { Project } from "@/lib/portfolio-data"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { ImageGallery } from "./image-gallery"
import { HighlightBox } from "./highlight-box"
import { ProjectFlowchart } from "./project-flowchart"
import { ProjectTable } from "./project-table"

interface ProjectDetailClientProps {
  project: Project
}

export function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  const techList = Array.isArray(project.techStack)
    ? project.techStack
    : [...Object.values(project.techStack).flat()]

  const hasGallery = project.images && project.images.length > 0

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft size={16} />
            프로젝트 목록
          </Link>
          {hasGallery && (
            <Link
              href={`/projects/${project.slug}/gallery`}
              className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-all hover:border-primary hover:text-primary"
            >
              <Images size={14} />
              갤러리
            </Link>
          )}
        </div>
      </header>

      {/* Hero Image */}
      <section className="relative h-[40vh] w-full overflow-hidden bg-gradient-to-br from-primary/20 via-background to-background sm:h-[50vh]">
        {project.heroImage ? (
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                <span className="text-3xl font-bold text-primary">
                  {project.title.charAt(0)}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">Hero Image Placeholder</p>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </section>

      {/* Content */}
      <main className="mx-auto max-w-5xl px-6 py-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
          {/* Left Column - Main Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Project Header */}
            <motion.div variants={fadeInUp}>
              <div className="flex items-start gap-3">
                <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
                  {project.title}
                </h1>
                {project.status === "in-progress" && (
                  <span className="shrink-0 rounded-full bg-amber-500 px-2.5 py-1 text-[10px] font-semibold text-white">
                    개발중
                  </span>
                )}
              </div>
              {project.subtitle && (
                <p className="mt-2 text-base text-muted-foreground">
                  {project.subtitle}
                </p>
              )}

              {/* Meta */}
              <div className="mt-4 flex flex-wrap gap-3">
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

              {/* GitHub */}
              {project.github && (
                <div className="mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-4 py-2 text-sm font-medium text-foreground transition-all hover:border-primary hover:text-primary"
                  >
                    <Github size={16} />
                    GitHub 저장소
                    <ExternalLink size={14} className="opacity-60" />
                  </a>
                </div>
              )}
            </motion.div>

            {/* Description */}
            <motion.div variants={fadeInUp}>
              <h2 className="text-sm font-semibold text-foreground">프로젝트 개요</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
            </motion.div>

            {/* Highlights */}
            <motion.div variants={fadeInUp}>
              <h2 className="text-sm font-semibold text-foreground">주요 성과</h2>
              <ul className="mt-3 space-y-2.5">
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
            </motion.div>

            {/* Custom Sections (Flowchart, Table) */}
            {project.sections?.map((section, i) => {
              if (section.type === "flowchart") {
                return (
                  <ProjectFlowchart
                    key={i}
                    title={section.title}
                    nodes={section.content as { label: string; sublabel?: string }[]}
                  />
                )
              }
              if (section.type === "table") {
                const tableData = section.content as { headers: string[]; rows: string[][] }
                return (
                  <ProjectTable
                    key={i}
                    title={section.title}
                    headers={tableData.headers}
                    rows={tableData.rows}
                  />
                )
              }
              return null
            })}

            {/* Role Highlight Box */}
            {project.role.length > 0 && (
              <HighlightBox
                variant="role"
                title="본인 담당 업무"
                items={project.role.map((r) => `${r} 역할 수행`)}
              />
            )}

            {/* Troubleshooting */}
            {project.troubleshooting && project.troubleshooting.length > 0 && (
              <HighlightBox
                variant="trouble"
                title="트러블슈팅"
                items={project.troubleshooting}
              />
            )}

            {/* Future Work */}
            {project.futureWork && project.futureWork.length > 0 && (
              <HighlightBox
                variant="future"
                title="추가 개발 예정"
                items={project.futureWork}
              />
            )}

            {/* Image Gallery */}
            {hasGallery && (
              <ImageGallery
                images={project.images!}
                projectSlug={project.slug}
                maxPreview={4}
              />
            )}
          </motion.div>

          {/* Right Column - Sidebar */}
          <motion.aside
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {/* Metrics */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="rounded-xl border border-border bg-card p-5">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <BarChart3 size={15} className="text-primary" />
                  핵심 지표
                </h3>
                <div className="mt-4 space-y-2">
                  {project.metrics.map((metric, i) => (
                    <div
                      key={i}
                      className="rounded-lg bg-emerald-500/10 px-3 py-2 text-center text-sm font-semibold text-emerald-500"
                    >
                      {metric}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack */}
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="text-sm font-semibold text-foreground">기술 스택</h3>
              <div className="mt-4 flex flex-wrap gap-2">
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

            {/* Category */}
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="text-sm font-semibold text-foreground">카테고리</h3>
              <p className="mt-2 text-sm text-muted-foreground">{project.category}</p>
            </div>
          </motion.aside>
        </div>
      </main>
    </div>
  )
}
