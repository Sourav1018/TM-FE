"use client"

import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export type PackageEditorFooterProps = {
  currentStep: number
  totalSteps: number
  onBack: () => void
  onContinue: () => void
  nextLabel?: string
}

export function PackageEditorFooter({
  currentStep,
  totalSteps,
  onBack,
  onContinue,
  nextLabel
}: PackageEditorFooterProps) {
  return (
    <div className="flex items-center justify-between border-t border-border pt-8 mt-8">
      <Button 
        variant="ghost" 
        className="text-muted-foreground gap-2 hover:bg-transparent hover:text-foreground h-12 px-6 font-bold"
        disabled={currentStep === 1}
        onClick={onBack}
      >
        <ArrowLeft className="h-4 w-4" />
        Previous
      </Button>

      <div className="text-sm font-bold text-muted-foreground uppercase tracking-widest">
        Step {currentStep} of {totalSteps}
      </div>

      <Button 
        className="rounded-full bg-primary hover:brightness-90 gap-2 px-10 py-6 h-auto text-base font-bold shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95"
        onClick={onContinue}
      >
        {currentStep === totalSteps ? "Finish & Save" : (nextLabel || "Next Step")}
        <ArrowRight className="h-4 w-4" />
      </Button>
    </div>
  )
}
