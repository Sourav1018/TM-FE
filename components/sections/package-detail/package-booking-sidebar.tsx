"use client"

import { useMemo, useState } from "react"
import { CalendarDays, MessageCircleMore } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import type { PackageDetailData } from "./types"
import { BookingGuestStepper } from "./booking-guest-stepper"
import { TrustBadge } from "./trust-badge"

type PackageBookingSidebarProps = {
  data: PackageDetailData
}

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
})

export function PackageBookingSidebar({ data }: PackageBookingSidebarProps) {
  const [travelDate, setTravelDate] = useState(data.defaultTravelDate)
  const [guests, setGuests] = useState(data.defaultGuests)

  const totalEstimate = useMemo(
    () => currencyFormatter.format(data.pricePerPerson * guests),
    [data.pricePerPerson, guests]
  )

  return (
    <aside className="sticky top-28 space-y-6">
      <Card className="rounded-xl border border-border/40 bg-card p-8 shadow-[var(--shadow-ambient)]">
        <div className="mb-6 flex items-baseline justify-between gap-4">
          <div>
            <span className="text-3xl font-extrabold tracking-tight">
              {currencyFormatter.format(data.pricePerPerson)}
            </span>
            <span className="ml-1 text-sm font-medium text-muted-foreground">
              / person
            </span>
          </div>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-bold text-primary">
            {data.savingsLabel}
          </span>
        </div>

        <div className="mb-8 space-y-4">
          <div className="space-y-2">
            <Label
              htmlFor="travel-date"
              className="text-xs font-bold tracking-[0.18em] text-muted-foreground uppercase"
            >
              Travel Date
            </Label>
            <div className="relative">
              <Input
                id="travel-date"
                type="date"
                value={travelDate}
                onChange={(event) => setTravelDate(event.target.value)}
                className="h-12 rounded-xl border-none bg-surface-container-low pr-12"
              />
              <CalendarDays className="pointer-events-none absolute top-3.5 right-4 h-5 w-5 text-muted-foreground" />
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-xs font-bold tracking-[0.18em] text-muted-foreground uppercase">
              Number of Guests
            </Label>
            <BookingGuestStepper guests={guests} onGuestsChange={setGuests} />
          </div>
        </div>

        <div className="mb-8 space-y-3">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>
              Base Package ({currencyFormatter.format(data.pricePerPerson)} x{" "}
              {guests})
            </span>
            <span>{totalEstimate}</span>
          </div>

          {data.pricingLines.slice(1).map((line) => (
            <div
              key={line.id}
              className="flex items-center justify-between text-sm text-muted-foreground"
            >
              <span>{line.label}</span>
              <span>{line.value}</span>
            </div>
          ))}

          <div className="flex items-center justify-between border-t border-border pt-3">
            <span className="font-bold">Total Estimate</span>
            <span className="text-xl font-extrabold text-primary">
              {totalEstimate}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <Button className="h-12 text-base font-bold">
            Check Availability
          </Button>
          <Button
            variant="secondary"
            className="h-12 bg-surface-container-low text-foreground"
          >
            <MessageCircleMore className="h-4 w-4" />
            Inquiry
          </Button>
          <Button variant="yellow" className="h-12 text-base font-bold">
            WhatsApp Concierge
          </Button>
        </div>

        <p className="mt-4 text-center text-[10px] font-bold tracking-[0.18em] text-muted-foreground uppercase">
          {data.cancellationPolicy}
        </p>
      </Card>

      <div className="flex flex-wrap justify-center gap-2">
        {data.trustBadges.map((badge) => (
          <TrustBadge key={badge.id} badge={badge} />
        ))}
      </div>
    </aside>
  )
}
