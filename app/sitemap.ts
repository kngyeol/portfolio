import type { MetadataRoute } from "next"
import { getAllProjectSlugs, siteConfig } from "@/lib/portfolio-data"

export default function sitemap(): MetadataRoute.Sitemap {
  const projectPages = getAllProjectSlugs().map((slug) => ({
    url: `${siteConfig.url}/projects/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  return [
    {
      url: siteConfig.url,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projectPages,
  ]
}
