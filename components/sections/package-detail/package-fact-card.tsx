import { CalendarDays, Globe2, Mountain, Users } from "lucide-react"

import { Card } from "@/components/ui/card"

import type { PackageQuickFact } from "@/types/packages"

type PackageFactCardProps = {
  fact: PackageQuickFact
}

const iconMap = {
  calendar: CalendarDays,
  users: Users,
  activity: Mountain,
  globe: Globe2,
} as const

export function PackageFactCard({ fact }: PackageFactCardProps) {
  const Icon = iconMap[fact.icon]

  return (
    <Card className="rounded-xl border-none bg-surface-container-low p-4 text-center shadow-none">
      <Icon className="mx-auto mb-2 h-5 w-5 text-primary" />
      <p className="text-xs font-medium text-muted-foreground">{fact.label}</p>
      <p className="mt-1 text-sm font-bold text-foreground">{fact.value}</p>
    </Card>
  )
}
