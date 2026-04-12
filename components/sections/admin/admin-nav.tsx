"use client"

import { Menu, Mountain } from "lucide-react"
import { SidebarContent } from "./sidebar-content"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

export function AdminNav() {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="fixed left-0 top-0 z-40 hidden h-screen w-72 border-r border-border/40 bg-background/50 backdrop-blur-xl lg:flex">
        <SidebarContent />
      </aside>

      {/* Mobile Navigation */}
      <div className="flex h-16 items-center justify-between border-b border-border/40 bg-background/50 px-6 backdrop-blur-xl lg:hidden">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#00658D]">
            <Mountain className="h-4 w-4 text-white" />
          </div>
          <h1 className="font-heading text-lg font-bold tracking-tight text-primary">
            Horizon
          </h1>
        </div>

        <Sheet>
          <SheetTrigger render={<Button variant="ghost" size="icon" className="h-10 w-10" />}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </SheetTrigger>
          <SheetContent side="right" className="w-full p-0">
            <SidebarContent />
          </SheetContent>
        </Sheet>
      </div>
    </>
  )
}
