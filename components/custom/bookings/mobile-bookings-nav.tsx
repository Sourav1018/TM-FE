import { Compass, Heart, Ticket, UserCircle2 } from "lucide-react"

import { cn } from "@/lib/utils"

export function MobileBookingsNav() {
  const items = [
    { id: "discover", label: "Discover", icon: Compass },
    { id: "bookings", label: "Bookings", icon: Ticket, active: true },
    { id: "favorites", label: "Favorites", icon: Heart },
    { id: "profile", label: "Profile", icon: UserCircle2 },
  ]

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-between border-t border-border bg-card px-6 py-3 shadow-[0_-2px_10px_rgba(0,0,0,0.05)] md:hidden">
      {items.map((item) => {
        const Icon = item.icon

        return (
          <button
            key={item.id}
            type="button"
            className={cn(
              "flex flex-col items-center gap-1 text-[10px] font-medium",
              item.active ? "text-primary" : "text-muted-foreground"
            )}
          >
            <Icon className={cn("h-5 w-5", item.active ? "fill-current" : "")} />
            <span className={item.active ? "font-bold" : ""}>{item.label}</span>
          </button>
        )
      })}
    </nav>
  )
}

