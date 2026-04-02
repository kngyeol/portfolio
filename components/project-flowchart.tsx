"use client"

import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import { fadeInUp } from "@/lib/animations"

interface FlowchartNode {
  label: string
  sublabel?: string
  color?: string
}

interface ProjectFlowchartProps {
  title: string
  nodes: FlowchartNode[]
}

export function ProjectFlowchart({ title, nodes }: ProjectFlowchartProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="rounded-xl border border-border bg-card p-5"
    >
      <h3 className="text-sm font-semibold text-foreground">{title}</h3>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        {nodes.map((node, i) => (
          <div key={i} className="flex items-center gap-2">
            <div
              className={`rounded-lg border px-3 py-2 text-center ${
                node.color || "border-primary/30 bg-primary/10"
              }`}
            >
              <span className="text-xs font-semibold text-foreground">
                {node.label}
              </span>
              {node.sublabel && (
                <span className="block text-[10px] text-muted-foreground">
                  {node.sublabel}
                </span>
              )}
            </div>
            {i < nodes.length - 1 && (
              <ChevronRight size={16} className="text-muted-foreground" />
            )}
          </div>
        ))}
      </div>
    </motion.div>
  )
}
