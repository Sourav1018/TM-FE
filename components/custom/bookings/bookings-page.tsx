"use client"

import { useMemo, useState } from "react"

import type { BookingCategory, BookingsPageData } from "./types"
import { BookingList } from "./booking-list"
import { BookingsFooter } from "./bookings-footer"
import { BookingsHeader } from "./bookings-header"
import { BookingsPromoSection } from "./bookings-promo-section"
import { BookingsSidebar } from "./bookings-sidebar"
import { BookingsTopNav } from "./bookings-top-nav"
import { MobileBookingsNav } from "./mobile-bookings-nav"

type BookingsPageProps = {
  data: BookingsPageData
}

export function BookingsPage({ data }: BookingsPageProps) {
  const [activeCategory, setActiveCategory] = useState<BookingCategory>("upcoming")

  const filteredBookings = useMemo(() => {
    if (activeCategory === "past") {
      return data.bookings.filter((booking) => booking.category === "past")
    }

    return data.bookings.filter((booking) => booking.category === activeCategory)
  }, [activeCategory, data.bookings])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <BookingsTopNav />

      <main className="mx-auto max-w-7xl px-6 pb-28 pt-24 md:pb-20">
        <BookingsHeader title={data.title} description={data.description} />

        <div className="flex flex-col gap-12 lg:flex-row">
          <BookingsSidebar
            items={data.navItems}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          <div className="flex-1">
            <BookingList bookings={filteredBookings} />
          </div>
        </div>

        <BookingsPromoSection items={data.promos} />
      </main>

      <BookingsFooter />
      <MobileBookingsNav />
    </div>
  )
}

