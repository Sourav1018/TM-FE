export type BookingStatus = "confirmed" | "pending" | "cancelled"
export type BookingCategory = "upcoming" | "past" | "cancelled"

export type BookingTraveler = {
  id: string
  name: string
  avatar: string
}

export type BookingItem = {
  id: string
  label: string
  packageName: string
  dateRange: string
  status: BookingStatus
  category: BookingCategory
  travelers: BookingTraveler[]
  travelerLabel: string
  image: string
  imageAlt: string
  actionLabel: string
  actionVariant: "link" | "primary" | "muted"
  refundNote?: string
}

export type BookingNavItem = {
  id: BookingCategory
  label: string
  count: number
}

export type BookingPromoCard = {
  id: string
  title: string
  description: string
  actionLabel: string
  tone: "primary" | "secondary"
}

export type BookingsPageData = {
  title: string
  description: string
  navItems: BookingNavItem[]
  bookings: BookingItem[]
  promos: BookingPromoCard[]
}
