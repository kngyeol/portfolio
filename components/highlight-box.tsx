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
  { icon: React.ReactNode; borderColor: string; bgColor: string; textColor: string }
> = {
  role: {
    icon: <CheckCircle2 size={18} />,
    borderColor: "border-amber-500/50",
    bgColor: "bg-amber-500/5",
    textColor: "text-amber-500",
  },
  trouble: {
    icon: <AlertTriangle size={18} />,
    borderColor: "border-red-500/50",
    bgColor: "bg-red-500/5",
    textColor: "text-red-500",
  },
  future: {
    icon: <Lightbulb size={18} />,
    borderColor: "border-emerald-500/50",
    bgColor: "bg-emerald-500/5",
    textColor: "text-emerald-500",
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
      className={`rounded-xl border-2 ${config.borderColor} ${config.bgColor} p-5`}
    >
      <h3 className={`flex items-center gap-2 text-sm font-semibold ${config.textColor}`}>
        {config.icon}
        {title}
      </h3>
      <ul className="mt-4 space-y-2.5">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-2.5 text-sm text-muted-foreground"
          >
            <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${config.textColor.replace("text-", "bg-")}`} />
            <RichText text={item} emphasizeLead={variant === "trouble"} autoTokens />
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
