import { BadgeCheck, Shield } from "lucide-react"

import { cn } from "@/lib/utils"

import type { PackageTrustBadge } from "./types"

type TrustBadgeProps = {
  badge: PackageTrustBadge
}

const toneStyles = {
  warning: "bg-secondary/20 text-foreground",
  info: "bg-primary/10 text-primary",
} as const

const iconMap = {
  shield: Shield,
  badge: BadgeCheck,
} as const

export function TrustBadge({ badge }: TrustBadgeProps) {
  const Icon = iconMap[badge.icon]

  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold",
        toneStyles[badge.tone]
      )}
    >
      <Icon className="h-4 w-4" />
      <span>{badge.label}</span>
    </div>
  )
}
