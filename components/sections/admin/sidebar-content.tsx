"use client"

import { Mountain } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ADMIN_MENU, FOOTER_MENU } from "@/constants/navigation"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function SidebarContent() {
  const pathname = usePathname()

  return (
    <div className="flex h-full flex-col p-0 lg:px-6 lg:py-10">
      {/* Logo */}
      <div className="mb-12 flex items-center gap-3 px-2">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
          <Mountain className="h-6 w-6 text-white" />
        </div>
        <div>
          <h1 className="font-heading text-xl font-bold tracking-tight text-primary">
            Horizon Admin
          </h1>
          <p className="text-sm font-medium text-muted-foreground">
            Concierge Portal
          </p>
        </div>
      </div>

      {/* Primary Navigation */}
      <nav className="flex-1 space-y-2">
        {ADMIN_MENU.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group flex items-center gap-4 rounded-2xl px-4 py-4 text-base font-semibold transition-all duration-300",
                isActive
                  ? "bg-primary-container/20 text-primary"
                  : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
              )}
            >
              <item.icon
                className={cn(
                  "h-6 w-6 transition-colors",
                  isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                )}
              />
              {item.label}
            </Link>
          )
        })}
      </nav>

      {/* Footer Navigation */}
      <div className="mt-auto space-y-2 pt-8">
        {FOOTER_MENU.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group flex items-center gap-4 rounded-2xl px-4 py-4 text-base font-semibold text-muted-foreground transition-all duration-300 hover:bg-accent/50 hover:text-foreground"
          >
            <item.icon className="h-6 w-6 transition-colors group-hover:text-foreground" />
            {item.label}
          </Link>
        ))}
      </div>

      {/* User Profile */}
      <div className="mt-8 flex items-center gap-4 border-t border-border/40 pt-8">
        <Avatar className="h-12 w-12 ring-2 ring-border/20">
          <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" />
          <AvatarFallback>AR</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-heading text-base font-bold text-foreground">
            Alex Rivers
          </h3>
          <p className="text-sm font-medium text-muted-foreground">
            Agency Manager
          </p>
        </div>
      </div>
    </div>
  )
}
