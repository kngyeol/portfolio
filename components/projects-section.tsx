"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
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
} from "lucide-react"
import { projects, categories, type Project } from "@/lib/portfolio-data"
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations"
import { ProjectModal } from "./project-modal"

const categoryIconMap: Record<string, React.ReactNode> = {
  전체: <Layers size={16} />,
  "자율주행 / 로봇": <Bot size={16} />,
  "AI / 컴퓨터비전": <BrainCircuit size={16} />,
  "웹 / 풀스택": <Globe size={16} />,
  "임베디드 / FPGA": <Cpu size={16} />,
}

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("전체")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filtered =
    activeCategory === "전체"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="text-sm font-medium uppercase tracking-widest text-primary">
            Projects
          </h2>
          <p className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
            프로젝트
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mt-8 flex flex-wrap gap-2"
        >
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-medium transition-all ${
                activeCategory === cat.name
                  ? "bg-primary text-primary-foreground shadow-[0_0_16px_rgba(6,182,212,0.2)]"
                  : "border border-border bg-secondary text-secondary-foreground hover:border-primary/30 hover:text-primary"
              }`}
            >
              {categoryIconMap[cat.name]}
              {cat.name}
            </button>
          ))}
        </motion.div>

        {/* Project cards */}
        <motion.div
          layout
          className="mt-10 grid gap-5 sm:grid-cols-2"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Detail modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  onClick,
}: {
  project: Project
  onClick: () => void
}) {
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
      onClick={onClick}
      className="group cursor-pointer overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.08)]"
    >
      {/* Header area with category color bar */}
      <div className="relative h-2 w-full bg-primary/20">
        <div className="absolute inset-y-0 left-0 w-1/3 bg-primary/60" />
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <h3 className="text-base font-semibold leading-snug text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="mt-1 text-xs text-muted-foreground">
                {project.subtitle}
              </p>
            )}
          </div>
          <div className="shrink-0 flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all group-hover:border-primary group-hover:text-primary">
            <ArrowUpRight size={14} />
          </div>
        </div>

        {/* Meta */}
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
          {project.period && (
            <span className="inline-flex items-center gap-1">
              <Calendar size={12} />
              {project.period}
            </span>
          )}
          {project.organization && (
            <span className="inline-flex items-center gap-1">
              <Building2 size={12} />
              {project.organization}
            </span>
          )}
          {project.role.length > 0 && (
            <span className="inline-flex items-center gap-1">
              <Users size={12} />
              {project.role.join(", ")}
            </span>
          )}
        </div>

        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {techList.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-primary/10 px-2 py-0.5 text-[11px] font-medium text-primary"
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
