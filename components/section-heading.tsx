export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
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
  )
}
