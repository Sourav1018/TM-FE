import { cn } from "@/lib/utils"

import type { BookingStatus } from "./types"

type BookingStatusBadgeProps = {
  status: BookingStatus
}

const statusStyles: Record<BookingStatus, string> = {
  confirmed: "border border-emerald-100 bg-emerald-50 text-emerald-700",
  pending: "border border-secondary/30 bg-secondary/15 text-secondary",
  cancelled: "bg-destructive/10 text-destructive",
}

export function BookingStatusBadge({ status }: BookingStatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full px-4 py-1.5 text-sm font-semibold capitalize",
        statusStyles[status]
      )}
    >
      {status}
    </span>
  )
}

