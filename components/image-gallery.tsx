"use client"

import { useState, useEffect, useCallback, useId, useRef } from "react"
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

const focusableSelector = [
  "a[href]",
  "button:not([disabled])",
  "iframe",
  "video[controls]",
  '[tabindex]:not([tabindex="-1"])',
].join(",")

export function ImageGallery({ media, projectSlug, maxPreview = 4 }: ImageGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const lightboxRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const triggerRef = useRef<HTMLButtonElement | null>(null)
  const lightboxTitleId = useId()
  const previewMedia = media.slice(0, maxPreview)
  const hasMore = media.length > maxPreview
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
            type="button"
            onClick={(event) => openLightbox(i, event.currentTarget)}
            aria-label={`${item.alt} 크게 보기`}
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
              프로젝트 미디어 상세 보기: {media[lightboxIndex].alt}
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
    </motion.div>
  )
}
