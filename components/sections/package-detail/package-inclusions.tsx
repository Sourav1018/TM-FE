import { Check, X } from "lucide-react"

import type { PackageListItem } from "./types"

type PackageInclusionsProps = {
  inclusions: PackageListItem[]
  exclusions: PackageListItem[]
}

function InclusionList({
  title,
  items,
  type,
}: {
  title: string
  items: PackageListItem[]
  type: "include" | "exclude"
}) {
  const Icon = type === "include" ? Check : X
  const iconColor =
    type === "include" ? "text-primary" : "text-muted-foreground"
  const headingColor = type === "include" ? "text-primary" : "text-destructive"

  return (
    <div>
      <h2
        className={`mb-6 flex items-center gap-2 text-xl font-extrabold ${headingColor}`}
      >
        <Icon className="h-5 w-5" />
        <span>{title}</span>
      </h2>

      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item.id} className="flex items-start gap-3">
            <Icon className={`mt-0.5 h-4 w-4 ${iconColor}`} />
            <span className="text-sm leading-6 text-muted-foreground">
              {item.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function PackageInclusions({
  inclusions,
  exclusions,
}: PackageInclusionsProps) {
  return (
    <section id="inclusions" className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <InclusionList title="Inclusions" items={inclusions} type="include" />
      <InclusionList title="Exclusions" items={exclusions} type="exclude" />
    </section>
  )
}
