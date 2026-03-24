"use client"

import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-md border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 active:translate-y-px disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        //  Main primary button (used for Book Now, View Details)
        default: "bg-primary text-primary-foreground hover:bg-primary/80",

        primary:
          "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",

        //  Secondary button
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",

        //  Yellow CTA button (from your design)
        yellow:
          "bg-yellow-400 text-black hover:bg-yellow-500",

        //  Outline button
        outline:
          "border-border bg-transparent hover:bg-muted hover:text-foreground",

        //  Ghost button
        ghost:
          "hover:bg-muted hover:text-foreground dark:hover:bg-muted/50",

        //  Destructive button
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20",

        //  Link style
        link: "text-primary underline-offset-4 hover:underline",
      },

      size: {
        default:
          "h-9 gap-1.5 px-3 has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5",

        xs: "h-6 gap-1 px-2.5 text-xs has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-3",

        sm: "h-8 gap-1 px-3 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",

        lg: "h-10 gap-1.5 px-4 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",

        icon: "size-9",

        "icon-xs": "size-6 [&_svg:not([class*='size-'])]:size-3",

        "icon-sm": "size-8",

        "icon-lg": "size-10",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }