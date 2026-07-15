"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
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
import { fadeInUp, scaleIn } from "@/lib/animations"
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
  const sorted = [...filtered].sort(
    (a, b) => Number(Boolean(b.heroMedia)) - Number(Boolean(a.heroMedia)),
  )
  const hiddenCount = sorted.filter((project) => !project.heroMedia).length
  const visibleProjects = showAll
    ? sorted
    : sorted.filter((project) => project.heroMedia)

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
            index="03"
            eyebrow="Projects"
            title="문제를 시스템 단위로 해결했습니다."
            description={`총 ${projects.length}개 프로젝트에서 인지, 경로, 통신, 제어, 검증을 하나의 실행 흐름으로 연결했습니다.`}
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
                className={`inline-flex shrink-0 items-center gap-1.5 rounded-xl px-3.5 py-2.5 text-xs font-semibold transition-all ${
                  activeCategory === cat.name
                    ? "bg-foreground text-background shadow-[0_10px_24px_rgba(23,24,22,0.14)]"
                    : "border border-border bg-card text-secondary-foreground hover:border-primary/35 hover:text-primary"
                }`}
              >
                {categoryIconMap[cat.name]}
                {cat.name}
                <span className="ml-1 rounded-full bg-background/20 px-1.5 py-0.5 text-[10px]">
                  {count}
                </span>
              </button>
            )
          })}
        </motion.div>

        {/* Project cards */}
        <motion.div layout className="mt-10 grid auto-rows-fr gap-5 sm:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {hiddenCount > 0 && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((current) => !current)}
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-xs font-semibold tracking-[0.12em] text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
              aria-expanded={showAll}
            >
              {showAll ? (
                <>
                  LESS PROJECTS
                  <ChevronUp size={15} />
                </>
              ) : (
                <>
                  MORE PROJECTS · {hiddenCount}
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
    <motion.article
      layout
      variants={scaleIn}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
      className="surface-shadow group relative flex h-full min-w-0 flex-col overflow-hidden rounded-[1.75rem] border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/35"
    >
      {/* Full-card click target (kept as overlay to avoid nested anchors) */}
      <Link
        href={`/projects/${project.slug}`}
        className="absolute inset-0 z-0"
        aria-label={`${project.title} 자세히 보기`}
      />
      <div className="relative aspect-[16/8.4] w-full overflow-hidden border-b border-border bg-secondary">
        {project.heroMedia ? (
          <ProjectMediaPreview media={project.heroMedia} />
        ) : (
          <div className="technical-grid flex h-full w-full items-center justify-between bg-gradient-to-br from-secondary via-card to-primary/10 p-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-card text-primary shadow-sm">
              {categoryIconMap[project.category]}
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              {project.slug}
            </span>
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/35 via-transparent to-transparent" />
        <span className="absolute bottom-4 left-4 rounded-lg border border-white/15 bg-foreground/78 px-2.5 py-1.5 text-[10px] font-semibold text-white backdrop-blur-md">
          {project.category}
        </span>
        {project.status === "in-progress" && (
          <span className="absolute right-4 top-4 rounded-full bg-amber-500 px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm">
            개발중
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
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
                className="relative z-10 flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary"
                aria-label="GitHub 저장소"
              >
                <Github size={14} />
              </a>
            )}
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all group-hover:border-primary group-hover:text-primary">
              <ArrowUpRight size={14} />
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

        {/* Metrics badges */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.metrics.slice(0, 2).map((metric, i) => (
              <span
                key={i}
                className="text-anywhere rounded-lg bg-primary/10 px-2.5 py-1 text-[10px] font-semibold text-primary"
              >
                {metric}
              </span>
            ))}
          </div>
        )}

        {/* Tech tags */}
        <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
          {techList.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="text-anywhere rounded-lg border border-border/80 bg-secondary/70 px-2.5 py-1 text-[10px] font-medium text-secondary-foreground"
            >
              {tech}
            </span>
          ))}
          {techList.length > 5 && (
            <span className="rounded-md bg-secondary px-2 py-0.5 text-[11px] text-muted-foreground">
              +{techList.length - 5}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  )
}
