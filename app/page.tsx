import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ApproachSection } from "@/components/approach-section"
import { SkillsSection } from "@/components/skills-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { EducationSection } from "@/components/education-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import {
  awards,
  categories,
  certificates,
  education,
  experiences,
  profile,
  projects,
  skills,
  type ProjectCardData,
} from "@/lib/portfolio-data"

const prioritizedProjectSlugs = [
  "fodro",
  "skyautonet-lv4",
  "scv",
  "balemale",
  "teamkai",
  "aras",
  "pathfinders",
  "fire-detection-drone",
  "divary",
  "ivi-dashboard",
] as const

const projectPriority = new Map<string, number>(
  prioritizedProjectSlugs.map((slug, index) => [slug, index]),
)

const orderedProjects = [...projects].sort(
  (a, b) =>
    (projectPriority.get(a.slug) ?? Number.MAX_SAFE_INTEGER) -
    (projectPriority.get(b.slug) ?? Number.MAX_SAFE_INTEGER),
)

const projectCards: ProjectCardData[] = orderedProjects.map(
  ({
    id,
    slug,
    title,
    subtitle,
    period,
    organization,
    description,
    role,
    techStack,
    category,
    github,
    metrics,
    status,
    heroMedia,
  }) => ({
    id,
    slug,
    title,
    subtitle,
    period,
    organization,
    description,
    role,
    techStack,
    category,
    github,
    metrics,
    status,
    heroMedia,
  }),
)

export default function PortfolioPage() {
  return (
    <>
      <Navigation />
      <main id="main-content" tabIndex={-1}>
        <HeroSection profile={profile} />
        <ApproachSection />
        <ExperienceSection experiences={experiences} />
        <ProjectsSection projects={projectCards} categories={categories} />
        <SkillsSection skills={skills} />
        <EducationSection
          education={education}
          awards={awards}
          certificates={certificates}
        />
        <ContactSection profile={profile} />
      </main>
      <Footer />
    </>
  )
}
