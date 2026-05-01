"use client"

import { cn } from "@/lib/utils"
import { PACKAGE_EDITOR_STEPS } from "@/constants/package-editor"

type PackageEditorStepperProps = {
  currentStep?: number
  onStepClick?: (stepId: number) => void
}

export function PackageEditorStepper({
  currentStep = 1,
  onStepClick
}: PackageEditorStepperProps) {
  return (
    <div className="w-full px-2">
      <div 
        className="grid w-full py-6"
        style={{ 
          gridTemplateColumns: `repeat(${PACKAGE_EDITOR_STEPS.length}, 1fr)` 
        }}
      >
        {PACKAGE_EDITOR_STEPS.map((step, index) => {
          const isActive = step.id === currentStep
          const isCompleted = step.id < currentStep
          const isLast = index === PACKAGE_EDITOR_STEPS.length - 1

          return (
            <div key={step.id} className="relative flex flex-col items-center group">
              {/* CONNECTOR LINE */}
              {!isLast && (
                <div 
                  className={cn(
                    "absolute top-5 left-[calc(50%+38px)] w-[calc(100%-80px)] h-[2px] transition-colors",
                    isCompleted ? "bg-primary" : "bg-border"
                  )}
                />
              )}

              {/* STEP */}
              <div
                className={cn(
                  "relative z-10 flex flex-col items-center gap-2 text-center",
                  onStepClick && "cursor-pointer"
                )}
                onClick={() => onStepClick?.(step.id)}
              >
                <div
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-semibold transition-all bg-background",
                    isActive
                      ? "border-primary bg-primary text-white scale-110 shadow-lg shadow-primary/20"
                      : isCompleted
                      ? "border-primary bg-primary text-white"
                      : "border-border bg-muted text-muted-foreground",
                    onStepClick &&
                      !isActive &&
                      !isCompleted &&
                      "group-hover:border-primary group-hover:bg-primary/5 group-hover:text-primary"
                  )}
                >
                  {step.id}
                </div>

                <span
                  className={cn(
                    "text-xs font-medium whitespace-nowrap px-1",
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