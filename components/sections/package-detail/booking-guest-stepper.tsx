"use client"

import { Minus, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"

type BookingGuestStepperProps = {
  guests: number
  onGuestsChange: (value: number) => void
}

export function BookingGuestStepper({
  guests,
  onGuestsChange,
}: BookingGuestStepperProps) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-surface-container-low p-3">
      <Button
        type="button"
        variant="outline"
        size="icon-sm"
        className="border-border bg-surface-container-lowest"
        onClick={() => onGuestsChange(Math.max(1, guests - 1))}
        aria-label="Decrease guests"
      >
        <Minus className="h-4 w-4" />
      </Button>

      <span className="text-sm font-bold text-foreground">
        {guests} {guests === 1 ? "Guest" : "Guests"}
      </span>

      <Button
        type="button"
        variant="outline"
        size="icon-sm"
        className="border-border bg-surface-container-lowest"
        onClick={() => onGuestsChange(guests + 1)}
        aria-label="Increase guests"
      >
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  )
}
