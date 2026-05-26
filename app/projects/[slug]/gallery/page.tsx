import { notFound } from "next/navigation"
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/portfolio-data"
import { GalleryPageClient } from "@/components/gallery-page-client"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return { title: "Gallery Not Found" }
  return {
    title: `${project.title} 갤러리 | 김동열 포트폴리오`,
    description: `${project.title} 프로젝트 미디어 갤러리`,
  }
}

export default async function GalleryPage({ params }: Props) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return <GalleryPageClient project={project} />
}
