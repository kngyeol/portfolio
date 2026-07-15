"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  ArrowLeft,
  BarChart3,
  Building2,
  Calendar,
  CheckCircle2,
  ExternalLink,
  Github,
  Images,
  Layers3,
  Users,
} from "lucide-react"
import {
  getProjectHeroMedia,
  getProjectMedia,
  type Project,
} from "@/lib/portfolio-data"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { ImageGallery } from "./image-gallery"
import { HighlightBox } from "./highlight-box"
import { ProjectFlowchart } from "./project-flowchart"
import { ProjectTable } from "./project-table"
import { ProjectMediaPreview } from "./project-media"
import { RichText } from "./rich-text"

interface ProjectDetailClientProps {
  project: Project
}

export function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  const techList = Array.isArray(project.techStack)
    ? project.techStack
    : [...Object.values(project.techStack).flat()]

  const media = getProjectMedia(project)
  const heroMedia = getProjectHeroMedia(project)
  const hasGallery = media.length > 0

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-6">
          <Link
            href="/#projects"
            className="inline-flex min-w-0 items-center gap-2 rounded-lg px-1 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft size={16} className="shrink-0" />
            <span className="truncate">프로젝트 목록</span>
          </Link>
          <div className="flex items-center gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                aria-label="GitHub 저장소"
              >
                <Github size={15} />
              </a>
            )}
            {hasGallery && (
              <Link
                href={`/projects/${project.slug}/gallery`}
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-2 text-xs font-semibold text-muted-foreground transition-all hover:border-primary/40 hover:text-primary"
              >
                <Images size={14} />
                갤러리
              </Link>
            )}
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-border/70 bg-secondary/45 px-5 py-12 sm:px-6 sm:py-16 lg:py-20">
        <div className="technical-grid pointer-events-none absolute inset-0 opacity-45 [mask-image:linear-gradient(to_right,black,transparent)]" />
        <div className="pointer-events-none absolute -left-24 top-4 h-72 w-72 rounded-full bg-primary/10 blur-[100px]" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="min-w-0"
          >
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
                {project.category}
              </span>
              {project.status === "in-progress" && (
                <span className="rounded-full bg-amber-500 px-3 py-1.5 text-[10px] font-semibold text-white">
                  개발중
                </span>
              )}
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-safe-wrap mt-5 text-4xl font-bold leading-[1.1] tracking-[-0.05em] text-foreground sm:text-5xl"
            >
              {project.title}
            </motion.h1>
            {project.subtitle && (
              <motion.p
                variants={fadeInUp}
                className="text-safe-wrap mt-4 text-base font-medium leading-7 text-muted-foreground sm:text-lg"
              >
                {project.subtitle}
              </motion.p>
            )}

            <motion.div variants={fadeInUp} className="mt-7 flex flex-wrap gap-2">
              {project.period && (
                <MetaBadge icon={<Calendar size={13} />} text={project.period} />
              )}
              {project.organization && (
                <MetaBadge icon={<Building2 size={13} />} text={project.organization} />
              )}
              {project.role.length > 0 && (
                <MetaBadge icon={<Users size={13} />} text={project.role.join(", ")} />
              )}
            </motion.div>

            {project.github && (
              <motion.div variants={fadeInUp} className="mt-7">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-foreground px-4 py-2.5 text-sm font-semibold text-background shadow-[0_10px_26px_rgba(23,24,22,0.16)] transition-all hover:-translate-y-0.5 hover:bg-primary"
                >
                  <Github size={16} />
                  GitHub 저장소
                  <ExternalLink size={13} className="opacity-70" />
                </a>
              </motion.div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="surface-shadow relative aspect-[4/3] min-w-0 overflow-hidden rounded-[2rem] border border-border bg-card"
          >
            {heroMedia ? (
              <ProjectMediaPreview media={heroMedia} variant="hero" priority />
            ) : (
              <div className="technical-grid flex h-full w-full items-center justify-center bg-gradient-to-br from-card to-primary/10">
                <div className="text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-foreground text-3xl font-bold text-background">
                    {project.title.charAt(0)}
                  </div>
                  <p className="mt-4 text-sm font-medium text-muted-foreground">
                    {project.category}
                  </p>
                </div>
              </div>
            )}
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/20" />
          </motion.div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-16">
        <div className="grid min-w-0 gap-12 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="min-w-0 space-y-10"
          >
            <ContentSection title="프로젝트 개요">
              <p className="text-safe-wrap text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                <RichText text={project.description} autoTokens />
              </p>
            </ContentSection>

            <ContentSection title="주요 구현">
              <ul className="space-y-3">
                {project.highlights.map((highlight, i) => (
                  <li
                    key={i}
                    className="text-safe-wrap flex items-start gap-3 text-sm leading-7 text-muted-foreground sm:text-base"
                  >
                    <CheckCircle2 size={16} className="mt-1 shrink-0 text-primary" />
                    <RichText text={highlight} emphasizeLead autoTokens />
                  </li>
                ))}
              </ul>
            </ContentSection>

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

            {project.role.length > 0 && (
              <HighlightBox
                variant="role"
                title="본인 담당 업무"
                items={project.role.map((r) => `${r} 역할 수행`)}
              />
            )}

            {project.troubleshooting && project.troubleshooting.length > 0 && (
              <HighlightBox
                variant="trouble"
                title="트러블슈팅"
                items={project.troubleshooting}
              />
            )}

            {project.futureWork && project.futureWork.length > 0 && (
              <HighlightBox
                variant="future"
                title="추가 개발 예정"
                items={project.futureWork}
              />
            )}

            {hasGallery && (
              <ImageGallery media={media} projectSlug={project.slug} maxPreview={4} />
            )}
          </motion.div>

          <motion.aside
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="min-w-0 space-y-5 lg:sticky lg:top-24"
          >
            {project.metrics && project.metrics.length > 0 && (
              <SidebarCard
                title="핵심 지표"
                icon={<BarChart3 size={15} className="text-primary" />}
              >
                <div className="space-y-2">
                  {project.metrics.map((metric, i) => (
                    <div
                      key={i}
                      className="text-safe-wrap rounded-xl border border-primary/15 bg-primary/8 px-3 py-2.5 text-center text-sm font-semibold text-primary"
                    >
                      {metric}
                    </div>
                  ))}
                </div>
              </SidebarCard>
            )}

            <SidebarCard
              title="기술 스택"
              icon={<Layers3 size={15} className="text-primary" />}
            >
              <div className="flex flex-wrap gap-2">
                {techList.map((tech) => (
                  <span
                    key={tech}
                    className="text-anywhere rounded-lg border border-border bg-secondary/70 px-2.5 py-1.5 text-xs font-medium text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </SidebarCard>
          </motion.aside>
        </div>
      </main>
    </div>
  )
}

function MetaBadge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <span className="text-anywhere inline-flex max-w-full items-center gap-1.5 rounded-xl border border-border bg-card/85 px-3 py-2 text-xs font-medium text-secondary-foreground shadow-sm">
      <span className="shrink-0 text-primary">{icon}</span>
      {text}
    </span>
  )
}

function ContentSection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <motion.section variants={fadeInUp}>
      <h2 className="flex items-center gap-3 text-lg font-bold tracking-[-0.025em] text-foreground">
        <span className="h-5 w-1.5 rounded-full bg-primary" />
        {title}
      </h2>
      <div className="mt-5">{children}</div>
    </motion.section>
  )
}

function SidebarCard({
  title,
  icon,
  children,
}: {
  title: string
  icon: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-[0_10px_30px_rgba(23,24,22,0.04)]">
      <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground">
        {icon}
        {title}
      </h3>
      <div className="mt-4">{children}</div>
    </div>
  )
}
