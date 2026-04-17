"use client"

import { cn } from "@/lib/utils"

const steps = [
  { id: 1, label: "Core Details" },
  { id: 2, label: "Pricing & Rules" },
  { id: 3, label: "Experience Builder" },
  { id: 4, label: "Final Review" },
]

export function PackageEditorStepper({ currentStep = 1 }: { currentStep?: number }) {
  return (
    <div className="w-full px-1">
      {/* Container for scrolling */}
      <div className="no-scrollbar flex w-full items-start gap-0 overflow-x-auto py-6">
        {steps.map((step, index) => {
          const isActive = step.id === currentStep
          const isCompleted = step.id < currentStep
          const isLast = index === steps.length - 1

          return (
            <div key={step.id} className={cn("flex items-center", isLast ? "flex-none" : "flex-1 min-w-[150px]")}>
              <div className="relative flex flex-col items-center gap-3">
                {/* Connector Line */}
                {!isLast && (
                  <div 
                    className={cn(
                      "absolute left-1/2 top-5 h-[2px] w-full -translate-y-1/2 translate-x-1/2",
                      isCompleted ? "bg-[#00658D]" : "bg-border"
                    )}
                  />
                )}

                {/* Number Circle */}
                <div 
                  className={cn(
                    "relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-semibold transition-all duration-300",
                    isActive ? "border-[#00658D] bg-[#00658D] text-white shadow-lg shadow-[#00658D]/20 scale-110" : 
                    isCompleted ? "border-[#00658D] bg-[#00658D] text-white" : 
                    "border-border bg-muted text-muted-foreground"
                  )}
                >
                  {step.id}
                </div>

                {/* Label */}
                <span 
                  className={cn(
                    "text-xs font-semibold whitespace-nowrap px-2 transition-colors",
                    isActive ? "text-[#00658D]" : "text-muted-foreground"
                  )}
                >
                  {step.label}
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
