"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"
import { getProjectMedia, type Project } from "@/lib/portfolio-data"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { ProjectMediaBadge, ProjectMediaPreview } from "./project-media"

interface GalleryPageClientProps {
  project: Project
}

export function GalleryPageClient({ project }: GalleryPageClientProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const media = getProjectMedia(project)

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)

  const goNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! + 1) % media.length)
    }
  }, [lightboxIndex, media.length])

  const goPrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! - 1 + media.length) % media.length)
    }
  }, [lightboxIndex, media.length])

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [lightboxIndex])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowRight") goNext()
      if (e.key === "ArrowLeft") goPrev()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [lightboxIndex, goNext, goPrev])

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft size={16} />
            {project.title}
          </Link>
          <span className="text-sm text-muted-foreground">
            {media.length}개 미디어
          </span>
        </div>
      </header>

      {/* Gallery Grid */}
      <main className="mx-auto max-w-6xl px-6 py-10">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <h1 className="text-2xl font-bold text-foreground">{project.title}</h1>
          <p className="mt-2 text-sm text-muted-foreground">프로젝트 미디어 갤러리</p>
        </motion.div>

        {media.length === 0 ? (
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="flex h-64 items-center justify-center rounded-xl border border-dashed border-border"
          >
            <p className="text-sm text-muted-foreground">
              아직 등록된 미디어가 없습니다.
            </p>
          </motion.div>
        ) : (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {media.map((item, i) => (
              <motion.button
                key={i}
                variants={fadeInUp}
                onClick={() => openLightbox(i)}
                className="group relative aspect-video overflow-hidden rounded-xl border border-border bg-secondary transition-all hover:border-primary/50 hover:shadow-lg"
              >
                <ProjectMediaPreview media={item} />
                <ProjectMediaBadge media={item} />
                <div className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 transition-opacity group-hover:opacity-100">
                  <ZoomIn size={32} className="text-primary" />
                </div>
                {item.caption && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-3">
                    <p className="text-xs text-foreground">{item.caption}</p>
                  </div>
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && media.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-background/95 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              aria-label="Close lightbox"
            >
              <X size={20} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                goPrev()
              }}
              className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              aria-label="Previous media"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                goNext()
              }}
              className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              aria-label="Next media"
            >
              <ChevronRight size={20} />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className={
                media[lightboxIndex].type === "image"
                  ? "relative max-h-[85vh] max-w-[90vw]"
                  : media[lightboxIndex].type === "document"
                    ? "relative h-[85vh] w-[90vw] max-w-5xl"
                    : "relative aspect-video w-[90vw] max-w-5xl"
              }
              onClick={(e) => e.stopPropagation()}
            >
              <ProjectMediaPreview
                media={media[lightboxIndex]}
                variant="lightbox"
              />
              {media[lightboxIndex].caption && (
                <p className="mt-3 text-center text-sm text-muted-foreground">
                  {media[lightboxIndex].caption}
                </p>
              )}
              <p className="mt-2 text-center text-xs text-muted-foreground">
                {lightboxIndex + 1} / {media.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
