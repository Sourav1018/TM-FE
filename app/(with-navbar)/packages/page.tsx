"use client"

import { useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import { packageCards } from "@/mock/packages"
import { PackagesHero } from "@/components/sections/packages/packages-hero"
import { PackagesSidebar } from "@/components/sections/packages/packages-sidebar"
import { PackagesHeader } from "@/components/sections/packages/packages-header"
import { PackagesGrid } from "@/components/sections/packages/packages-grid"
import { PackagesPagination } from "@/components/sections/packages/packages-pagination"

export default function Page() {
  const router = useRouter()
  const [search, setSearch] = useState("")
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [guests, setGuests] = useState(2)
  const [sortBy, setSortBy] = useState("recommended")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [minPrice] = useState(500)
  const [maxPrice, setMaxPrice] = useState(5000)
  const [duration, setDuration] = useState("")

  const filtered = useMemo(() => {
    const result = packageCards.filter((pkg) => {
      if (search && !pkg.title.toLowerCase().includes(search.toLowerCase()))
        return false
      if (
        selectedCategories.length &&
        !selectedCategories.includes(pkg.category)
      )
        return false
      if (pkg.price < minPrice || pkg.price > maxPrice) return false

      if (duration) {
        const [low, high] = duration.split("-").map(Number)
        if (pkg.duration < low || pkg.duration > high) return false
      }

      return true
    })

    if (sortBy === "price-low") result.sort((a, b) => a.price - b.price)
    if (sortBy === "price-high") result.sort((a, b) => b.price - a.price)
    if (sortBy === "rated")
      result.sort((a, b) => (b.rating || 0) - (a.rating || 0))

    return result
  }, [duration, maxPrice, minPrice, search, selectedCategories, sortBy])

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    )
  }

  const resetFilters = () => {
    setSelectedCategories([])
    setMaxPrice(5000)
    setDuration("")
  }

  return (
    <div className="bg-surface text-on-surface min-h-screen">
      <main className="mx-auto max-w-7xl px-4 pt-20 pb-20 md:px-8">
        <PackagesHero
          search={search}
          onSearchChange={setSearch}
          selectedDate={selectedDate}
          onDateChange={setSelectedDate}
          guests={guests}
          onGuestsChange={setGuests}
        />

        <div className="flex flex-col gap-8 lg:flex-row">
          <PackagesSidebar
            selectedCategories={selectedCategories}
            onCategoryToggle={toggleCategory}
            maxPrice={maxPrice}
            onMaxPriceChange={setMaxPrice}
            duration={duration}
            onDurationChange={setDuration}
            onReset={resetFilters}
          />

          <div className="flex-1">
            <PackagesHeader
              count={filtered.length}
              sortBy={sortBy}
              onSortChange={setSortBy}
            />

            <PackagesGrid
              packages={filtered}
              onAction={(slug) => router.push(`/packages/${slug}`)}
            />

            <PackagesPagination />
          </div>
        </div>
      </main>
    </div>
  )
}
