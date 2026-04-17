"use client"

import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PackageEditorFooter() {
  return (
    <div className="flex items-center justify-between border-t border-border pt-8 mt-8">
      <Button 
        variant="ghost" 
        className="text-muted-foreground gap-2 hover:bg-transparent hover:text-foreground"
        disabled
      >
        <ArrowLeft className="h-4 w-4" />
        Previous
      </Button>

      <div className="text-sm font-medium text-muted-foreground">
        Step 1 of 4
      </div>

      <Button className="rounded-full bg-[#00658D] hover:bg-[#005575] gap-2 px-8 py-6 h-auto text-base">
        Next Step: Pricing
        <ArrowRight className="h-4 w-4" />
      </Button>
    </div>
  )
}
