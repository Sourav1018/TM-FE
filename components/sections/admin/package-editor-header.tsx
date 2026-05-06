"use client"

import Link from "next/link"
import { ChevronRight, UploadCloud } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PackageEditorHeader() {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
      <div className="space-y-1">
        <nav className="flex items-center gap-1 text-sm text-muted-foreground">
          <Link href="/admin/packages" className="transition-colors hover:text-foreground">
            Packages
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-primary font-medium">Create New Package</span>
        </nav>
        <h1 className="text-3xl font-bold tracking-tight">
          Design Your Next Adventure
        </h1>
        <p className="text-muted-foreground">
          Let&apos;s build a premium travel experience step-by-step.
        </p>
      </div>

    </div>
  )
}
