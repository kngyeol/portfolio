"use client"

import { useState, useEffect, useCallback, useId, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"
import { getProjectMedia, type Project } from "@/lib/portfolio-data"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { ProjectMediaBadge, ProjectMediaPreview } from "./project-media"

interface GalleryPageClientProps {
  project: Project
}

const focusableSelector = [
  "a[href]",
  "button:not([disabled])",
  "iframe",
  "video[controls]",
  '[tabindex]:not([tabindex="-1"])',
].join(",")

export function GalleryPageClient({ project }: GalleryPageClientProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const lightboxRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const triggerRef = useRef<HTMLButtonElement | null>(null)
  const lightboxTitleId = useId()
  const media = getProjectMedia(project)
  const isLightboxOpen = lightboxIndex !== null

  const openLightbox = (index: number, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger
    setLightboxIndex(index)
  }
  const closeLightbox = useCallback(() => setLightboxIndex(null), [])

  const goNext = useCallback(() => {
    setLightboxIndex((current) =>
      current === null ? null : (current + 1) % media.length,
    )
  }, [media.length])

  const goPrev = useCallback(() => {
    setLightboxIndex((current) =>
      current === null ? null : (current - 1 + media.length) % media.length,
    )
  }, [media.length])

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (isLightboxOpen) {
        closeButtonRef.current?.focus()
      } else {
        triggerRef.current?.focus()
      }
    })

    return () => window.cancelAnimationFrame(frame)
  }, [isLightboxOpen])

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
      if (!isLightboxOpen) return

      if (e.key === "Escape") {
        e.preventDefault()
        closeLightbox()
        return
      }
      if (e.key === "ArrowRight") {
        goNext()
        return
      }
      if (e.key === "ArrowLeft") {
        goPrev()
        return
      }
      if (e.key !== "Tab") return

      const lightbox = lightboxRef.current
      if (!lightbox) return

      const focusableElements = Array.from(
        lightbox.querySelectorAll<HTMLElement>(focusableSelector),
      ).filter((element) => element.getAttribute("aria-hidden") !== "true")

      if (focusableElements.length === 0) {
        e.preventDefault()
        lightbox.focus()
        return
      }

      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]
      const activeElement = document.activeElement

      if (
        e.shiftKey &&
        (activeElement === firstElement || !lightbox.contains(activeElement))
      ) {
        e.preventDefault()
        lastElement.focus()
      } else if (
        !e.shiftKey &&
        (activeElement === lastElement || !lightbox.contains(activeElement))
      ) {
        e.preventDefault()
        firstElement.focus()
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [closeLightbox, goNext, goPrev, isLightboxOpen])

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
      <main id="main-content" tabIndex={-1} className="mx-auto max-w-6xl px-6 py-10">
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
                type="button"
                onClick={(event) => openLightbox(i, event.currentTarget)}
                aria-label={`${item.alt} 크게 보기`}
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
            ref={lightboxRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={lightboxTitleId}
            tabIndex={-1}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-background/95 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            <h2 id={lightboxTitleId} className="sr-only">
              {project.title} 미디어 상세 보기: {media[lightboxIndex].alt}
            </h2>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeLightbox}
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              aria-label="미디어 상세 보기 닫기"
            >
              <X size={20} />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                goPrev()
              }}
              className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              aria-label="이전 미디어"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                goNext()
              }}
              className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              aria-label="다음 미디어"
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
