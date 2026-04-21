"use client"

import { cn } from "@/lib/utils"

const steps = [
  { id: 1, label: "Core Details" },
  { id: 2, label: "Pricing" },
  { id: 3, label: "Experience Builder" },
  { id: 4, label: "Gallery" },
  { id: 5, label: "Final Review" },
]

interface PackageEditorStepperProps {
  currentStep?: number
  onStepClick?: (stepId: number) => void
}

export function PackageEditorStepper({ 
  currentStep = 1,
  onStepClick
}: PackageEditorStepperProps) {
  return (
    <div className="w-full px-1">
      {/* Container for scrolling */}
      <div className="no-scrollbar flex w-full items-start gap-0 overflow-x-auto py-6">
        {steps.map((step, index) => {
          const isActive = step.id === currentStep
          const isCompleted = step.id < currentStep
          const isLast = index === steps.length - 1

          return (
            <div 
              key={step.id} 
              className={cn(
                "flex items-center group", 
                isLast ? "flex-none" : "flex-1 min-w-37.5"
              )}
            >
              <div 
                className={cn(
                  "relative flex flex-col items-center gap-3 transition-all",
                  onStepClick && "cursor-pointer"
                )}
                onClick={() => onStepClick?.(step.id)}
              >
                {/* Connector Line */}
                {!isLast && (
                  <div 
                    className={cn(
                      "absolute left-1/2 top-5 h-0.5 w-full -translate-y-1/2 translate-x-1/2",
                      isCompleted ? "bg-primary" : "bg-border"
                    )}
                  />
                )}

                {/* Number Circle */}
                <div 
                  className={cn(
                    "relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-semibold transition-all duration-300",
                    isActive ? "border-primary bg-primary text-white shadow-lg shadow-primary/20 scale-110" : 
                    isCompleted ? "border-primary bg-primary text-white" : 
                    "border-border bg-muted text-muted-foreground",
                    onStepClick && !isActive && !isCompleted && "group-hover:border-primary group-hover:bg-primary/5 group-hover:text-primary"
                  )}
                >
                  {step.id}
                </div>

                {/* Label */}
                <span 
                  className={cn(
                    "text-xs font-semibold whitespace-nowrap px-2 transition-colors",
                    isActive ? "text-primary" : "text-muted-foreground",
                    onStepClick && !isActive && "group-hover:text-primary"
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
