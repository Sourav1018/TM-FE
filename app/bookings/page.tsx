"use client"

import { BookingList } from "@/components/sections/bookings/booking-list"
import { BookingsFooter } from "@/components/sections/bookings/bookings-footer"
import { BookingsHeader } from "@/components/sections/bookings/bookings-header"
import { BookingsPromoSection } from "@/components/sections/bookings/bookings-promo-section"
import { BookingsSidebar } from "@/components/sections/bookings/bookings-sidebar"
import { MobileBookingsNav } from "@/components/sections/bookings/mobile-bookings-nav"
import type { BookingCategory } from "@/components/sections/bookings/types"
import { bookingsPageData } from "@/mock/bookings"
import { useMemo, useState } from "react"

export default function MyBookingsPage() {
  const [activeCategory, setActiveCategory] =
    useState<BookingCategory>("upcoming")

  const filteredBookings = useMemo(() => {
    if (activeCategory === "past") {
      return bookingsPageData.bookings.filter(
        (booking) => booking.category === "past"
      )
    }

    return bookingsPageData.bookings.filter(
      (booking) => booking.category === activeCategory
    )
  }, [activeCategory])

  return (
    <div className="min-h-screen bg-background text-foreground">

      <main className="mx-auto max-w-7xl px-6 pt-24 pb-28 md:pb-20">
        <BookingsHeader
          title={bookingsPageData.title}
          description={bookingsPageData.description}
        />

        <div className="flex flex-col gap-12 lg:flex-row">
          <BookingsSidebar
            items={bookingsPageData.navItems}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          <div className="flex-1">
            <BookingList bookings={filteredBookings} />
          </div>
        </div>

        <BookingsPromoSection items={bookingsPageData.promos} />
      </main>

      <BookingsFooter />
      <MobileBookingsNav />
    </div>
  )
}
