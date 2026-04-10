"use client"

import { Mountain } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ADMIN_MENU, FOOTER_MENU } from "@/constants/navigation"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"


import { SidebarContent } from "./sidebar-content"

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-72 border-r border-border/40 bg-background/50 backdrop-blur-xl lg:flex">
      <SidebarContent />
    </aside>
  )
}
