import { Check, Circle } from "lucide-react"

import { Card } from "@/components/ui/card"

import type { PackageItineraryDay } from "./data"

interface PackageItineraryItemProps {
  item: PackageItineraryDay
  isLast: boolean
}

export function PackageItineraryItem({
  item,
  isLast,
}: PackageItineraryItemProps) {
  return (
    <div className={`relative pl-10 ${isLast ? "" : "pb-10"}`}>
      <div className="absolute left-0 top-1 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full border-4 border-background bg-surface-container-high">
        {item.isActive ? (
          <div className="h-3 w-3 rounded-full bg-primary" />
        ) : (
          <Circle className="h-3 w-3 fill-muted text-muted" />
        )}
      </div>

      <Card className="rounded-xl border-none bg-surface-container-lowest p-6 shadow-[var(--shadow-ambient)]">
        <span className="block text-xs font-bold uppercase tracking-[0.18em] text-primary">
          Day {item.day}
        </span>
        <h3 className="mt-2 text-xl font-bold">{item.title}</h3>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          {item.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-3">
          {item.highlights.map((highlight) => (
            <div
              key={highlight}
              className="flex items-center gap-2 rounded-full bg-surface-container-high px-3 py-1.5 text-xs font-semibold text-foreground"
            >
              <Check className="h-3.5 w-3.5 text-primary" />
              <span>{highlight}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
