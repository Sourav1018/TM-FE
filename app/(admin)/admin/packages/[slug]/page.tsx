"use client"

import { PackageEditorFooter } from "@/components/sections/admin/package-editor-footer"
import { PackageEditorHeader } from "@/components/sections/admin/package-editor-header"
import { PackageEditorStepper } from "@/components/sections/admin/package-editor-stepper"
import { CoreDetailsEditor } from "@/components/sections/admin/core-details-editor"
import { PricingEditor } from "@/components/sections/admin/pricing-editor"
import { ExperienceBuilder } from "@/components/sections/admin/experience-builder"
import { EditorStepCard } from "@/components/sections/admin/editor-step-card"
import { PACKAGE_EDITOR_STEPS } from "@/constants/package-editor"
import { GalleryEditor } from "@/components/sections/admin/gallery-editor"
import { CustomAlert } from "@/components/ui/custom-alert"
import { useState } from "react"

export default function PackageEditorPage() {
  const [currentStep, setCurrentStep] = useState(1)

  const handleBack = () => setCurrentStep(prev => Math.max(1, prev - 1))
  const handleContinue = () => setCurrentStep(prev => Math.min(PACKAGE_EDITOR_STEPS.length, prev + 1))
  const handleStepClick = (stepId: number) => setCurrentStep(stepId)

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <PackageEditorHeader />

      {/* Stepper */}
      <PackageEditorStepper 
        currentStep={currentStep} 
        onStepClick={handleStepClick}
      />

      {/* Main Content Card */}
      <EditorStepCard isScrollable={currentStep === 3}>
        {currentStep === 1 && <CoreDetailsEditor />}

        {currentStep === 2 && <PricingEditor />}

        {currentStep === 3 && <ExperienceBuilder />}

        {currentStep === 4 && <GalleryEditor />}

        {currentStep >= 5 && (
           <div className="flex flex-col items-center justify-center py-20 text-center gap-4 max-w-2xl mx-auto">
              <CustomAlert className="mb-8 w-full text-left">
                 <span className="font-bold">Final Check:</span> Almost there! Review all your details carefully before publishing. You can always edit them later.
              </CustomAlert>
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                 <span className="text-2xl font-bold text-muted-foreground">{currentStep}</span>
              </div>
              <div className="space-y-1">
                 <h3 className="text-xl font-bold">Step in Development</h3>
                 <p className="text-muted-foreground">The UI for this step is coming soon.</p>
              </div>
           </div>
        )}
      </EditorStepCard>

      <PackageEditorFooter 
        currentStep={currentStep}
        totalSteps={PACKAGE_EDITOR_STEPS.length}
        onBack={handleBack}
        onContinue={handleContinue}
        nextLabel={PACKAGE_EDITOR_STEPS[currentStep - 1]?.nextLabel}
      />
    </div>
  )
}
