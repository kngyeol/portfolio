"use client"

import Image from "next/image"
import { FileText, PlayCircle } from "lucide-react"
import type { ProjectMedia } from "@/lib/portfolio-data"
import { cn } from "@/lib/utils"

export function getMediaTypeLabel(media: ProjectMedia) {
  if (media.type === "video") return "Video"
  if (media.type === "document") return media.label ?? "Document"
  return "Image"
}

export function ProjectMediaPreview({
  media,
  priority = false,
  variant = "thumbnail",
  className,
}: {
  media: ProjectMedia
  priority?: boolean
  variant?: "thumbnail" | "hero" | "lightbox"
  className?: string
}) {
  if (media.type === "document") {
    if (variant === "lightbox") {
      return (
        <iframe
          src={media.src}
          title={media.alt}
          className={cn("h-full w-full rounded-lg border border-border bg-background", className)}
        />
      )
    }

    return (
      <div
        className={cn(
          "flex h-full w-full flex-col items-center justify-center gap-3 bg-secondary text-center",
          className,
        )}
      >
        <FileText size={variant === "thumbnail" ? 28 : 40} className="text-primary" />
        <div>
          <p className="text-sm font-semibold text-foreground">
            {media.label ?? "자료 보기"}
          </p>
          {media.caption && (
            <p className="mt-1 text-xs text-muted-foreground">{media.caption}</p>
          )}
        </div>
      </div>
    )
  }

  if (media.type === "video") {
    if (variant === "hero" || variant === "lightbox") {
      return (
        <video
          src={media.src}
          poster={media.poster}
          controls
          playsInline
          preload="metadata"
          className={cn("h-full w-full bg-black object-contain", className)}
        />
      )
    }

    return (
      <div className={cn("relative h-full w-full bg-secondary", className)}>
        {media.poster ? (
          <Image
            src={media.poster}
            alt={media.alt}
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            priority={priority}
            className="object-cover transition-transform group-hover:scale-105"
          />
        ) : (
          <video
            src={media.src}
            muted
            playsInline
            preload="metadata"
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 flex items-center justify-center bg-background/20">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-background/85 text-primary shadow-lg">
            <PlayCircle size={24} />
          </span>
        </div>
      </div>
    )
  }

  if (variant === "lightbox") {
    return (
      <Image
        src={media.src}
        alt={media.alt}
        width={1600}
        height={1000}
        priority={priority}
        className={cn("max-h-[85vh] w-auto rounded-lg object-contain", className)}
      />
    )
  }

  return (
    <Image
      src={media.src}
      alt={media.alt}
      fill
      sizes={variant === "hero" ? "100vw" : "(max-width: 640px) 100vw, 50vw"}
      priority={priority}
      className={cn(
        variant === "hero" ? "object-cover" : "object-cover transition-transform group-hover:scale-105",
        className,
      )}
    />
  )
}

export function ProjectMediaBadge({ media }: { media: ProjectMedia }) {
  return (
    <span className="absolute left-2 top-2 rounded-md bg-background/85 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-foreground shadow-sm">
      {getMediaTypeLabel(media)}
    </span>
  )
}
