"use client"

import { AlertTriangle, Info } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ConfirmationDialogProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  title: string
  description: string
  confirmText?: string
  cancelText?: string
  onConfirm: () => void
  variant?: "destructive" | "default" | "warning"
  icon?: React.ReactNode
}

export function ConfirmationDialog({
  isOpen,
  onOpenChange,
  title,
  description,
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  variant = "destructive",
  icon,
}: ConfirmationDialogProps) {
  const defaultIcon = variant === "destructive" || variant === "warning" ? (
    <div className={cn(
      "flex h-12 w-12 items-center justify-center rounded-full mb-4",
      variant === "destructive" ? "bg-red-100 text-red-600" : "bg-amber-100 text-amber-600"
    )}>
      <AlertTriangle className="h-6 w-6" />
    </div>
  ) : (
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
      <Info className="h-6 w-6" />
    </div>
  )

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md gap-6 rounded-[2rem] p-8">
        <DialogHeader>
          {icon || defaultIcon}
          <DialogTitle className="text-2xl font-bold tracking-tight">
            {title}
          </DialogTitle>
          <DialogDescription className="text-base font-medium leading-relaxed mt-2 text-muted-foreground">
            {description}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex-row gap-4 sm:justify-start mt-4">
          <Button
            variant="outline"
            className="flex-1 rounded-full py-6 text-base font-bold border-border/60 hover:bg-muted transition-all"
            onClick={() => onOpenChange(false)}
          >
            {cancelText}
          </Button>
          <Button
            variant={variant === "warning" ? "default" : variant}
            className={cn(
              "flex-1 rounded-full py-6 text-base font-bold transition-transform hover:scale-[1.02]",
              variant === "destructive" && "shadow-lg shadow-destructive/20",
              variant === "warning" && "bg-amber-600 hover:bg-amber-700 shadow-lg shadow-amber-200"
            )}
            onClick={() => {
              onConfirm()
              onOpenChange(false)
            }}
          >
            {confirmText}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
