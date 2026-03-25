"use client"

import { cn } from "@/lib/utils"

type BadgeProps = {
  status: "confirmed" | "pending" | "cancelled"
  className?: string
}

function Badge({ status, className }: BadgeProps) {
  const styles = {
    confirmed: "bg-green-100 text-green-700",
    pending: "bg-yellow-100 text-yellow-700",
    cancelled: "bg-red-100 text-red-700",
  }

  return (
    <span
      className={cn(
        "px-2 py-1 rounded-md text-xs font-medium capitalize",
        styles[status],
        className
      )}
    >
      {status}
    </span>
  )
}

export { Badge }