import { bookingsPageData } from "@/mock/bookings"
import { BookingsPage } from "@/components/sections/bookings/bookings-page"

export default function MyBookingsPage() {
  return <BookingsPage data={bookingsPageData} />
}
