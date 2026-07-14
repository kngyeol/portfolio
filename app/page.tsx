import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
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

const projectCards: ProjectCardData[] = projects.map(
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
  }),
)

export default function PortfolioPage() {
  return (
    <>
      <Navigation />
      <main id="main-content" tabIndex={-1}>
        <HeroSection profile={profile} />
        <SkillsSection skills={skills} />
        <ExperienceSection experiences={experiences} />
        <ProjectsSection projects={projectCards} categories={categories} />
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
