import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/portfolio-data"
import { ProjectDetailClient } from "@/components/project-detail-client"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return { title: "Project Not Found" }
  return {
    title: `${project.title} | 김동열 포트폴리오`,
    description: project.description,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | 김동열 포트폴리오`,
      description: project.description,
      url: `/projects/${project.slug}`,
      type: "article",
    },
  }
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return <ProjectDetailClient project={project} />
}
