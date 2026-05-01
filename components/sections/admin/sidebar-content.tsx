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
    <div className="flex h-full flex-col">
      {/* Logo */}
      <div className="mb-12 flex items-center gap-4 px-2">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary shadow-lg shadow-primary/20 transition-transform hover:scale-105 active:scale-95 cursor-pointer">
          <Mountain className="h-6 w-6 text-white" />
        </div>
        <div>
          <h1 className="font-heading text-xl font-bold tracking-tight text-foreground">
            Horizon <span className="text-primary">Admin</span>
          </h1>
          <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">
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
                "group flex items-center gap-4 rounded-2xl px-4 py-3.5 text-sm font-bold transition-all duration-300",
                isActive
                  ? "bg-primary/10 text-primary shadow-sm"
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
            className="group flex items-center gap-4 rounded-2xl px-4 py-3.5 text-sm font-bold text-muted-foreground transition-all duration-300 hover:bg-accent/50 hover:text-foreground"
          >
            <item.icon className="h-5 w-5 transition-colors group-hover:text-foreground" />
            {item.label}
          </Link>
        ))}
      </div>

      {/* User Profile */}
      <div className="mt-8 flex items-center gap-3 border-t border-border/40 pt-8 px-2">
        <Avatar className="h-10 w-10 ring-2 ring-border/20 transition-transform hover:scale-110 cursor-pointer">
          <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" />
          <AvatarFallback className="bg-primary/10 text-primary font-bold">AR</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <h3 className="text-sm font-bold text-foreground leading-none mb-1">
            Alex Rivers
          </h3>
          <p className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-tight">
            Agency Manager
          </p>
        </div>
      </div>
    </div>
  )
}
