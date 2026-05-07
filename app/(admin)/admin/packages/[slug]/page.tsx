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
import { FacilitiesEditor } from "@/components/sections/admin/facilities-editor"
import { PackageEditorActions } from "@/components/sections/admin/package-editor-actions"
import { PackagePreview } from "@/components/sections/admin/package-preview"
import { usePackageEditor } from "@/store/package-editor-store"

export default function PackageEditorPage() {
  const { currentStep, setStep, prevStep, nextStep } = usePackageEditor()

  const handleStepClick = (stepId: number) => setStep(stepId)

  return (
    <div className="flex flex-col gap-6 relative">
      {/* Sticky Action Bar */}
      <PackageEditorActions />

      {/* Header */}
      <PackageEditorHeader />

      {/* Stepper */}
      <PackageEditorStepper
        currentStep={currentStep}
        onStepClick={handleStepClick}
      />

      {/* Main Content Card */}
      <EditorStepCard >
        {currentStep === 1 && <CoreDetailsEditor />}

        {currentStep === 2 && <PricingEditor />}

        {currentStep === 3 && <ExperienceBuilder />}

        {currentStep === 4 && <GalleryEditor />}

        {currentStep === 5 && <FacilitiesEditor />}

        {currentStep >= 6 && <PackagePreview />}
      </EditorStepCard>

      <PackageEditorFooter
        currentStep={currentStep}
        totalSteps={PACKAGE_EDITOR_STEPS.length}
        onBack={prevStep}
        onContinue={nextStep}
        nextLabel={PACKAGE_EDITOR_STEPS[currentStep - 1]?.nextLabel}
      />
    </div>
  )
}
