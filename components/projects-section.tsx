"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import {
  Bot,
  BrainCircuit,
  Globe,
  Cpu,
  Layers,
  ArrowUpRight,
  Calendar,
  Building2,
  Users,
  Github,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import type { Category, ProjectCardData } from "@/lib/portfolio-data"
import { fadeInUp } from "@/lib/animations"
import { RichText } from "./rich-text"
import { ProjectMediaPreview } from "./project-media"
import { SectionHeading } from "./section-heading"

const categoryIconMap: Record<string, React.ReactNode> = {
  전체: <Layers size={16} />,
  "자율주행 / 로봇": <Bot size={16} />,
  "AI / 컴퓨터비전": <BrainCircuit size={16} />,
  "웹 / 풀스택": <Globe size={16} />,
  "임베디드 / FPGA": <Cpu size={16} />,
}

const INITIAL_PROJECT_COUNT = 6

export function ProjectsSection({
  projects,
  categories,
}: {
  projects: ProjectCardData[]
  categories: readonly Category[]
}) {
  const [activeCategory, setActiveCategory] = useState("전체")
  const [showAll, setShowAll] = useState(false)

  const filtered =
    activeCategory === "전체"
      ? projects
      : projects.filter((p) => p.category === activeCategory)
  const sorted = [...filtered]
  const hiddenCount = Math.max(sorted.length - INITIAL_PROJECT_COUNT, 0)
  const visibleProjects = showAll
    ? sorted
    : sorted.slice(0, INITIAL_PROJECT_COUNT)

  return (
    <section id="projects" className="px-5 py-24 sm:px-6 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <SectionHeading
            eyebrow="02"
            title="주요 프로젝트"
            description={`총 ${projects.length}개 프로젝트 중 대표 작업을 먼저 보여드립니다. 각 상세 페이지에서 역할, 구현, 검증 근거를 확인할 수 있습니다.`}
          />
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="-mx-5 mt-8 flex gap-2 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0"
        >
          {categories.map((cat) => {
            const count =
              cat.name === "전체"
                ? projects.length
                : projects.filter((p) => p.category === cat.name).length
            return (
              <button
                key={cat.name}
                onClick={() => {
                  setActiveCategory(cat.name)
                  setShowAll(false)
                }}
                aria-pressed={activeCategory === cat.name}
                className={`inline-flex min-h-11 shrink-0 items-center gap-1.5 rounded-lg border px-3.5 py-2.5 text-xs font-semibold transition-colors duration-200 ${
                  activeCategory === cat.name
                    ? "border-foreground bg-foreground text-background"
                    : "border border-border bg-card text-secondary-foreground hover:border-primary/35 hover:text-primary"
                }`}
              >
                {categoryIconMap[cat.name]}
                {cat.name}
                <span className="ml-0.5 text-[10px] tabular-nums opacity-70">
                  ({count})
                </span>
              </button>
            )
          })}
        </motion.div>

        {/* Project cards */}
        <motion.div
          key={`${activeCategory}-${showAll}`}
          initial={{ opacity: 0.45 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.16, ease: "easeOut" }}
          id="project-results"
          className="mt-10 grid auto-rows-fr gap-5 sm:grid-cols-2"
        >
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        <p className="sr-only" aria-live="polite">
          {activeCategory} 카테고리의 프로젝트 {visibleProjects.length}개를 표시합니다.
        </p>

        {hiddenCount > 0 && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((current) => !current)}
              className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-xs font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
              aria-expanded={showAll}
              aria-controls="project-results"
            >
              {showAll ? (
                <>
                  접기
                  <ChevronUp size={15} />
                </>
              ) : (
                <>
                  프로젝트 {hiddenCount}개 더 보기
                  <ChevronDown size={15} />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: ProjectCardData }) {
  const techList = Array.isArray(project.techStack)
    ? project.techStack
    : [...Object.values(project.techStack).flat()]

  return (
    <article
      className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors duration-200 hover:border-primary/40"
    >
      {/* Full-card click target (kept as overlay to avoid nested anchors) */}
      <Link
        href={`/projects/${project.slug}`}
        className="absolute inset-0 z-0"
        aria-label={`${project.title} 자세히 보기`}
      />
      <div className="relative aspect-[3/2] w-full overflow-hidden border-b border-border bg-secondary">
        {project.heroMedia ? (
          <ProjectMediaPreview
            media={project.heroMedia}
            className="bg-secondary object-cover"
          />
        ) : (
          <div className="technical-grid h-full w-full bg-gradient-to-br from-secondary via-card to-primary/8 p-6 sm:p-7">
            <div className="flex h-full flex-col justify-between">
              <div className="flex items-start justify-between gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-card text-primary">
                  {categoryIconMap[project.category]}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  {project.slug}
                </span>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                  Case study
                </p>
                <p className="text-safe-wrap mt-2 max-w-sm text-lg font-semibold leading-snug text-foreground sm:text-xl">
                  {project.metrics?.slice(0, 2).join(" · ") || project.category}
                </p>
              </div>
            </div>
          </div>
        )}
        {project.status === "in-progress" && (
          <span className="absolute right-3 top-3 rounded-md bg-foreground px-2.5 py-1 text-[10px] font-semibold text-background">
            진행 중
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
          {project.category}
        </p>
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <h3 className="text-safe-wrap text-lg font-bold leading-snug tracking-[-0.025em] text-foreground transition-colors group-hover:text-primary">
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="text-safe-wrap mt-1.5 text-xs leading-5 text-muted-foreground">
                {project.subtitle}
              </p>
            )}
          </div>
          <div className="flex shrink-0 items-center gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="relative z-10 flex h-11 w-11 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                aria-label="공개 프로젝트 소개"
              >
                <Github size={16} />
              </a>
            )}
            <div className="flex h-11 w-7 items-center justify-center text-muted-foreground transition-colors group-hover:text-primary" aria-hidden="true">
              <ArrowUpRight size={16} />
            </div>
          </div>
        </div>

        {/* Meta */}
        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11px] text-muted-foreground">
          {project.period && (
            <span className="inline-flex min-w-0 items-center gap-1">
              <Calendar size={12} />
              {project.period}
            </span>
          )}
          {project.organization && (
            <span className="inline-flex min-w-0 items-center gap-1">
              <Building2 size={12} />
              {project.organization}
            </span>
          )}
          {project.role.length > 0 && (
            <span className="text-anywhere inline-flex min-w-0 items-center gap-1">
              <Users size={12} />
              {project.role.slice(0, 2).join(", ")}
              {project.role.length > 2 && ` +${project.role.length - 2}`}
            </span>
          )}
        </div>

        <p className="text-safe-wrap mt-4 line-clamp-3 text-sm leading-6 text-muted-foreground">
          <RichText text={project.description} autoTokens />
        </p>

        {/* Key evidence */}
        {project.metrics && project.metrics.length > 0 && (
          <p className="text-safe-wrap mt-4 border-l-2 border-primary pl-3 text-xs font-medium leading-5 text-foreground/80">
            {project.metrics.slice(0, 2).join(" · ")}
          </p>
        )}

        <p className="text-safe-wrap mt-auto border-t border-border pt-4 text-[11px] leading-5 text-muted-foreground">
          {techList.slice(0, 5).join(" · ")}
          {techList.length > 5 && ` · +${techList.length - 5}`}
        </p>
      </div>
    </article>
  )
}
