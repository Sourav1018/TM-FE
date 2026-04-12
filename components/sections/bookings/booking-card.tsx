import Image from "next/image"
import { CalendarDays, ChevronRight, RefreshCw } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

import type { BookingItem } from "@/types/bookings"
import { BookingStatusBadge } from "./booking-status-badge"

type BookingCardProps = {
  booking: BookingItem
}

export function BookingCard({ booking }: BookingCardProps) {
  const isCancelled = booking.status === "cancelled"

  return (
    <Card
      className={cn(
        "overflow-hidden rounded-[2rem] border-none bg-surface-container-lowest shadow-[var(--shadow-ambient)] transition-transform duration-300 md:flex",
        isCancelled ? "opacity-80" : "hover:scale-[1.01]"
      )}
    >
      <div
        className={cn(
          "relative h-48 w-full overflow-hidden md:h-auto md:w-56",
          isCancelled ? "grayscale" : ""
        )}
      >
        <Image
          src={booking.image}
          alt={booking.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 224px"
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between p-8">
        <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <span className="mb-2 block text-xs font-bold tracking-[0.18em] text-primary/60 uppercase">
              {booking.label}
            </span>
            <h3
              className={cn(
                "text-2xl font-bold",
                isCancelled ? "text-muted-foreground" : "text-foreground"
              )}
            >
              {booking.packageName}
            </h3>
            <p className="mt-2 flex items-center gap-2 text-muted-foreground">
              <CalendarDays className="h-4 w-4" />
              <span className="font-medium">{booking.dateRange}</span>
            </p>
          </div>

          <BookingStatusBadge status={booking.status} />
        </div>

        <div className="flex flex-col gap-4 border-t border-surface-container pt-6 md:flex-row md:items-center md:justify-between">
          {isCancelled ? (
            <span className="text-sm text-muted-foreground italic">
              {booking.refundNote}
            </span>
          ) : (
            <div className="flex items-center gap-4">
              <AvatarGroup>
                {booking.travelers.map((traveler) => (
                  <Avatar key={traveler.id}>
                    <AvatarImage src={traveler.avatar} alt={traveler.name} />
                    <AvatarFallback>{traveler.name.slice(0, 1)}</AvatarFallback>
                  </Avatar>
                ))}
              </AvatarGroup>
              <span className="text-sm font-medium text-muted-foreground">
                {booking.travelerLabel}
              </span>
            </div>
          )}

          {booking.actionVariant === "link" ? (
            <Button
              variant="link"
              className="h-auto px-0 text-base font-semibold no-underline hover:no-underline"
            >
              {booking.actionLabel}
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          ) : booking.actionVariant === "primary" ? (
            <Button variant="yellow" className="font-bold">
              {booking.actionLabel}
            </Button>
          ) : (
            <Button
              variant="ghost"
              className="justify-start px-0 text-base font-semibold text-muted-foreground hover:bg-transparent hover:text-primary"
            >
              {booking.actionLabel}
              <RefreshCw className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </Card>
  )
}
