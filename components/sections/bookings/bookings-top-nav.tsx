import Link from "next/link"
import { Bell, CircleUserRound } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "#", label: "Discover" },
  { href: "/bookings", label: "My Bookings", active: true },
  { href: "#", label: "Favorites" },
  { href: "#", label: "Support" },
]

export function BookingsTopNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-[20px]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-xl font-bold tracking-tight text-foreground">
          Sunlit Horizons
        </Link>

        <nav className="hidden items-center gap-8 text-sm md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "border-b-2 pb-1 transition-colors",
                item.active
                  ? "border-primary text-primary font-semibold"
                  : "border-transparent text-muted-foreground hover:text-primary"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" aria-label="Notifications">
            <Bell className="h-5 w-5 text-primary" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Account">
            <CircleUserRound className="h-5 w-5 text-primary" />
          </Button>
        </div>
      </div>
    </header>
  )
}

