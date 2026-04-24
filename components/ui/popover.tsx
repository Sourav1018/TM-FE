"use client"

import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"

import { cn } from "@/lib/utils"

const Popover = PopoverPrimitive.Root

const PopoverTrigger = PopoverPrimitive.Trigger

const PopoverAnchor = PopoverPrimitive.Anchor

const PopoverContent = ({
  className,
  align = "center",
  sideOffset = 4,
  alignOffset = 0,
  ref,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Content> & {
  alignOffset?: number
}) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      alignOffset={alignOffset}
      className={cn(
        "z-50 w-72 rounded-2xl border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
)
PopoverContent.displayName = PopoverPrimitive.Content.displayName

const PopoverHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("flex flex-col space-y-1.5 text-center sm:text-left", className)}
    {...props}
  />
)
PopoverHeader.displayName = "PopoverHeader"

const PopoverTitle = ({
  className,
  ref,
  ...props
}: React.ComponentProps<"h3">) => (
  <h3
    ref={ref}
    className={cn("text-base font-semibold leading-none tracking-tight font-heading", className)}
    {...props}
  />
)
PopoverTitle.displayName = "PopoverTitle"

const PopoverDescription = ({
  className,
  ref,
  ...props
}: React.ComponentProps<"p">) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
)
PopoverDescription.displayName = "PopoverDescription"

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor, PopoverHeader, PopoverTitle, PopoverDescription }
