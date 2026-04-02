"use client"

import * as React from "react"
import { Dialog as DialogPrimitive } from "@base-ui/react/dialog"
import { XIcon } from "lucide-react"

import { cn } from "@/lib/utils"

const Sheet = DialogPrimitive.Root
const SheetTrigger = DialogPrimitive.Trigger
const SheetClose = DialogPrimitive.Close
const SheetPortal = DialogPrimitive.Portal

function SheetBackdrop({ className, ...props }: DialogPrimitive.Backdrop.Props) {
  return (
    <DialogPrimitive.Backdrop
      data-slot="sheet-backdrop"
      className={cn(
        "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0",
        className
      )}
      {...props}
    />
  )
}

function SheetContent({
  className,
  side = "right",
  children,
  ...props
}: DialogPrimitive.Popup.Props & {
  side?: "top" | "bottom" | "left" | "right"
}) {
  return (
    <SheetPortal>
      <SheetBackdrop />
      <DialogPrimitive.Popup
        data-slot="sheet-content"
        className={cn(
          "fixed z-50 flex flex-col bg-background shadow-2xl transition-all duration-300 ease-in-out data-open:animate-in data-closed:animate-out",
          {
            "inset-y-0 right-0 h-full w-3/4 sm:max-w-sm data-open:slide-in-from-right-full data-closed:slide-out-to-right-full":
              side === "right",
            "inset-y-0 left-0 h-full w-3/4 sm:max-w-sm data-open:slide-in-from-left-full data-closed:slide-out-to-left-full":
              side === "left",
            "inset-x-0 top-0 h-auto w-full data-open:slide-in-from-top-full data-closed:slide-out-to-top-full":
              side === "top",
            "inset-x-0 bottom-0 h-auto w-full data-open:slide-in-from-bottom-full data-closed:slide-out-to-bottom-full":
              side === "bottom",
          },
          className
        )}
        {...props}
      >
        <div className="relative flex flex-col h-full bg-background p-6">
          {children}
          <SheetClose
            className="absolute top-4 right-4 rounded-full p-2 text-muted-foreground transition-all hover:bg-accent hover:text-foreground"
            aria-label="Close"
          >
            <XIcon className="size-5" />
          </SheetClose>
        </div>
      </DialogPrimitive.Popup>
    </SheetPortal>
  )
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("mb-6 flex flex-col gap-1", className)}
      {...props}
    />
  )
}

function SheetTitle({ className, ...props }: DialogPrimitive.Title.Props) {
  return (
    <DialogPrimitive.Title
      data-slot="sheet-title"
      className={cn("font-heading text-lg font-semibold", className)}
      {...props}
    />
  )
}

function SheetDescription({
  className,
  ...props
}: DialogPrimitive.Description.Props) {
  return (
    <DialogPrimitive.Description
      data-slot="sheet-description"
      className={cn("text-muted-foreground", className)}
      {...props}
    />
  )
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
}
