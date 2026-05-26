"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"
import Link from "next/link"
import type { ProjectMedia } from "@/lib/portfolio-data"
import { fadeInUp } from "@/lib/animations"
import { ProjectMediaBadge, ProjectMediaPreview } from "./project-media"

interface ImageGalleryProps {
  media: ProjectMedia[]
  projectSlug: string
  maxPreview?: number
}

export function ImageGallery({ media, projectSlug, maxPreview = 4 }: ImageGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const previewMedia = media.slice(0, maxPreview)
  const hasMore = media.length > maxPreview

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

  if (media.length === 0) return null

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-foreground">갤러리</h3>
        {hasMore && (
          <Link
            href={`/projects/${projectSlug}/gallery`}
            className="text-xs text-primary hover:underline"
          >
            전체 보기 ({media.length})
          </Link>
        )}
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {previewMedia.map((item, i) => (
          <button
            key={i}
            onClick={() => openLightbox(i)}
            className="group relative aspect-video overflow-hidden rounded-lg border border-border bg-secondary transition-all hover:border-primary/50"
          >
            <ProjectMediaPreview media={item} />
            <ProjectMediaBadge media={item} />
            <div className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 transition-opacity group-hover:opacity-100">
              <ZoomIn size={24} className="text-primary" />
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
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
    </motion.div>
  )
}
