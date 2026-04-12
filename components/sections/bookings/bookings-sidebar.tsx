import { CalendarDays, CircleX, History } from "lucide-react"

import { cn } from "@/lib/utils"

import type { BookingCategory, BookingNavItem } from "@/types/bookings"

type BookingsSidebarProps = {
  items: BookingNavItem[]
  activeCategory: BookingCategory
  onCategoryChange: (value: BookingCategory) => void
}

const iconMap = {
  upcoming: CalendarDays,
  past: History,
  cancelled: CircleX,
} as const

export function BookingsSidebar({
  items,
  activeCategory,
  onCategoryChange,
}: BookingsSidebarProps) {
  return (
    <aside className="w-full flex-shrink-0 lg:w-64">
      <div className="flex flex-row gap-2 overflow-x-auto rounded-xl bg-surface-container-low p-2 lg:flex-col">
        {items.map((item) => {
          const Icon = iconMap[item.id]
          const isActive = activeCategory === item.id

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onCategoryChange(item.id)}
              className={cn(
                "flex items-center gap-3 rounded-xl px-6 py-3 text-sm font-semibold whitespace-nowrap transition-all",
                isActive
                  ? "bg-surface-container-lowest text-primary shadow-sm"
                  : "text-muted-foreground hover:bg-surface-container-high"
              )}
            >
              <Icon className="h-4 w-4" />
              <span>{item.label}</span>
              {item.count > 0 ? (
                <span className="text-xs opacity-70">{item.count}</span>
              ) : null}
            </button>
          )
        })}
      </div>
    </aside>
  )
}
