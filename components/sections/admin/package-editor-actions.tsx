"use client"

import { Button } from "@/components/ui/button"
import { UploadCloud } from "lucide-react"
import { usePackageEditor } from "@/store/package-editor-store"

export function PackageEditorActions() {
  const { data } = usePackageEditor()

  const handleSaveDraft = () => {
    console.log("Saving draft...", data)
    // Add toast or API call here
  }

  const handlePublish = () => {
    console.log("Publishing live...", data)
    // Add toast or API call here
  }

  return (
    <div className="sticky top-4 z-50 self-end -mt-2 mb-[-60px] pointer-events-none w-full flex justify-end">
      <div className="pointer-events-auto flex items-center gap-2 bg-background/80 backdrop-blur-md p-1.5 rounded-full border shadow-sm">
        <Button 
          variant="ghost" 
          className="text-muted-foreground hover:bg-transparent hover:text-foreground hover:underline px-4 h-auto font-medium"
          onClick={handleSaveDraft}
        >
          Save Draft
        </Button>
        <Button 
          className="rounded-full bg-primary hover:brightness-90 gap-2 px-6"
          onClick={handlePublish}
        >
          <UploadCloud className="h-4 w-4" />
          Publish Live
        </Button>
      </div>
    </div>
  )
}

