"use client"

import { motion } from "framer-motion"
import { CheckCircle2, AlertTriangle, Lightbulb } from "lucide-react"
import { fadeInUp } from "@/lib/animations"
import { RichText } from "./rich-text"

type BoxVariant = "role" | "trouble" | "future"

interface HighlightBoxProps {
  variant: BoxVariant
  title: string
  items: string[]
}

const variantConfig: Record<
  BoxVariant,
  { icon: React.ReactNode }
> = {
  role: {
    icon: <CheckCircle2 size={18} />,
  },
  trouble: {
    icon: <AlertTriangle size={18} />,
  },
  future: {
    icon: <Lightbulb size={18} />,
  },
}

export function HighlightBox({ variant, title, items }: HighlightBoxProps) {
  const config = variantConfig[variant]

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="border-y border-border py-5 sm:py-6"
    >
      <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground">
        <span className="text-primary">{config.icon}</span>
        {title}
      </h3>
      <ul className="mt-4 space-y-2.5">
        {items.map((item, i) => (
          <li
            key={i}
            className="text-safe-wrap flex items-start gap-3 text-sm leading-7 text-muted-foreground"
          >
            <span className="mt-2 h-px w-3 shrink-0 bg-primary" />
            <RichText text={item} emphasizeLead={variant === "trouble"} autoTokens />
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
