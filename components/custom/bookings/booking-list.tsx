import type { BookingItem } from "./data"
import { BookingCard } from "./booking-card"
import { BookingEmptyState } from "./booking-empty-state"

interface BookingListProps {
  bookings: BookingItem[]
}

export function BookingList({ bookings }: BookingListProps) {
  if (bookings.length === 0) {
    return (
      <BookingEmptyState
        title="No bookings in this section yet"
        description="Once a trip moves into this category, it will appear here so travelers can review the details anytime."
      />
    )
  }

  return (
    <div className="space-y-8">
      {bookings.map((booking) => (
        <BookingCard key={booking.id} booking={booking} />
      ))}
    </div>
  )
}

