"use client"

import {
  LayoutDashboard,
  Package,
  Users,
  BarChart3,
  Settings,
  HelpCircle,
  LogOut,
  Mountain,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const ADMIN_MENU = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Packages", href: "/admin/packages", icon: Package },
  { label: "Leads", href: "/admin/leads", icon: Users },
  { label: "Analytics", href: "/admin/analytics", icon: BarChart3 },
  { label: "Settings", href: "/admin/settings", icon: Settings },
]

const FOOTER_MENU = [
  { label: "Support", href: "/admin/support", icon: HelpCircle },
  { label: "Log out", href: "/auth/login", icon: LogOut },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-72 border-r border-border/40 bg-background/50 backdrop-blur-xl">
      <div className="flex h-full flex-col px-6 py-10">
        {/* Logo */}
        <div className="mb-12 flex items-center gap-3 px-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-container">
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
                    ? "bg-[#E0F2F1] text-primary"
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
              Agency Admin
            </p>
          </div>
        </div>
      </div>
    </aside>
  )
}
