export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: {
  index: string
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <div className="flex items-start gap-4 sm:gap-5">
      <span className="mt-1 font-mono text-xs font-semibold text-primary">
        {index}
      </span>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
          {eyebrow}
        </p>
        <h2 className="text-safe-wrap mt-2 text-3xl font-bold tracking-[-0.035em] text-foreground sm:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="text-safe-wrap mt-3 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
            {description}
          </p>
        )}
      </div>
    </div>
  )
}
