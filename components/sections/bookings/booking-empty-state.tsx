import { Compass } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

type BookingEmptyStateProps = {
  title: string
  description: string
}

export function BookingEmptyState({
  title,
  description,
}: BookingEmptyStateProps) {
  return (
    <Card className="rounded-[2rem] border-none bg-surface-container-lowest p-10 text-center shadow-[var(--shadow-ambient)]">
      <Compass className="mx-auto h-10 w-10 text-primary" />
      <h3 className="mt-4 text-2xl font-bold">{title}</h3>
      <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
        {description}
      </p>
      <Button className="mt-6">Explore Packages</Button>
    </Card>
  )
}
