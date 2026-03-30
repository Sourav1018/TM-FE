"use client"

import Image from "next/image"
import { useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import { format } from "date-fns"
import { Navbar } from "@/components/custom/navbar"
import { PackageCard } from "@/components/custom/package-card/package-card"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { packageCards, HERO_IMAGE, CATEGORIES } from "@/mock/packages"
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Minus,
  Plus,
  Users,
} from "lucide-react"

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

  const SORT_OPTIONS = [
    { value: "recommended", label: "Recommended" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "rated", label: "Top Rated" },
  ]

  const filtered = useMemo(() => {
    const result = packageCards.filter((pkg) => {
      if (search && !pkg.title.toLowerCase().includes(search.toLowerCase())) return false
      if (selectedCategories.length && !selectedCategories.includes(pkg.category)) return false
      if (pkg.price < minPrice || pkg.price > maxPrice) return false

      if (duration) {
        const [low, high] = duration.split("-").map(Number)
        if (pkg.duration < low || pkg.duration > high) return false
      }

      return true
    })

    if (sortBy === "price-low") result.sort((a, b) => a.price - b.price)
    if (sortBy === "price-high") result.sort((a, b) => b.price - a.price)
    if (sortBy === "rated") result.sort((a, b) => (b.rating || 0) - (a.rating || 0))

    return result
  }, [duration, maxPrice, minPrice, search, selectedCategories, sortBy])

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((item) => item !== category) : [...prev, category]
    )
  }

  const resetFilters = () => {
    setSelectedCategories([])
    setMaxPrice(5000)
    setDuration("")
  }

  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 pt-20 pb-20 md:px-8">
        <section className="mb-12">
          <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden rounded-xl bg-primary p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-container opacity-90" />
            <Image
              src={HERO_IMAGE}
              alt="Sunlit mountain landscape"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1280px"
              className="absolute inset-0 h-full w-full object-cover mix-blend-overlay"
            />

            <div className="relative w-full">
              <h1 className="mb-8 text-center text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                Find your next horizon
              </h1>

              <div className="flex flex-col items-center gap-2 rounded-full bg-surface-container-lowest p-2 shadow-xl md:flex-row">
                <div className="flex w-full flex-1 items-center gap-3 border-b border-surface-container px-6 md:border-r md:border-b-0">
                  <MapPin size={20} className="shrink-0 text-primary" />
                  <div className="flex min-w-0 flex-1 flex-col py-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-outline">
                      Where to?
                    </span>
                    <input
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Explore destinations..."
                      className="w-full border-none bg-transparent p-0 font-medium text-on-surface outline-none placeholder:text-outline-variant"
                    />
                  </div>
                </div>

                <div className="flex w-full flex-1 items-center gap-3 border-b border-surface-container px-6 md:border-r md:border-b-0">
                  <Calendar size={20} className="shrink-0 text-primary" />
                  <div className="flex min-w-0 flex-1 flex-col py-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-outline">
                      When?
                    </span>
                    <Popover>
                      <PopoverTrigger className="w-full text-left font-medium text-on-surface outline-none">
                        {selectedDate ? (
                          format(selectedDate, "MMM d, yyyy")
                        ) : (
                          <span className="text-outline-variant">Select date...</span>
                        )}
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <CalendarComponent
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                <div className="flex w-full flex-1 items-center gap-3 px-6">
                  <Users size={20} className="shrink-0 text-primary" />
                  <div className="flex min-w-0 flex-1 flex-col py-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-outline">
                      Who?
                    </span>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        aria-label="Decrease guests"
                        onClick={() => setGuests((prev) => Math.max(1, prev - 1))}
                        className="flex h-7 w-7 items-center justify-center rounded-full bg-surface-container text-on-surface transition-colors hover:bg-surface-container-high"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="min-w-[72px] font-medium text-on-surface">
                        {guests} {guests === 1 ? "Guest" : "Guests"}
                      </span>
                      <button
                        type="button"
                        aria-label="Increase guests"
                        onClick={() => setGuests((prev) => prev + 1)}
                        className="flex h-7 w-7 items-center justify-center rounded-full bg-surface-container text-on-surface transition-colors hover:bg-surface-container-high"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                </div>

                <button className="rounded-full bg-secondary-container px-8 py-4 font-bold text-on-secondary-container shadow-md transition-transform hover:scale-105 active:scale-95">
                  Search
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className="flex flex-col gap-8 lg:flex-row">
          <aside className="w-full flex-shrink-0 lg:w-72">
            <div className="sticky top-[4.5rem] rounded-DEFAULT bg-surface-container-low p-6">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-lg font-bold">Filters</h2>
                <button
                  onClick={resetFilters}
                  className="text-xs font-bold text-primary transition-colors hover:underline"
                >
                  Reset All
                </button>
              </div>

              <div className="mb-8">
                <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-outline">
                  Categories
                </h3>
                <div className="space-y-3">
                  {CATEGORIES.map((category) => (
                    <label key={category} className="group flex cursor-pointer items-center gap-3">
                      <Checkbox
                        checked={selectedCategories.includes(category)}
                        onCheckedChange={() => toggleCategory(category)}
                      />
                      <span className="text-on-surface-variant transition-colors group-hover:text-on-surface">
                        {category}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-outline">
                    Price Range
                  </h3>
                  <span className="text-sm font-bold text-primary">$500 - ${maxPrice.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="5000"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  title="Price range slider"
                  className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-surface-container-high accent-primary"
                />
              </div>

              <div className="mb-8">
                <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-outline">
                  Trip Duration
                </h3>
                <div className="space-y-3">
                  {["1-3", "4-7", "8-14"].map((value) => (
                    <label key={value} className="group flex cursor-pointer items-center gap-3">
                      <Checkbox
                        checked={duration === value}
                        onCheckedChange={() => setDuration(duration === value ? "" : value)}
                      />
                      <span className="text-on-surface-variant transition-colors group-hover:text-on-surface">
                        {value.replace("-", " - ")} Days
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <button className="w-full rounded-full bg-primary py-3 font-bold text-white shadow-lg shadow-primary/10 transition-colors hover:bg-on-primary-container">
                Apply Filters
              </button>
            </div>
          </aside>

          <div className="flex-1">
            <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <div>
                <h2 className="text-2xl font-extrabold">Available Packages</h2>
                <p className="text-sm text-on-surface-variant">
                  Showing {filtered.length} curated results for your search
                </p>
              </div>

              <Select value={sortBy} onValueChange={(val) => val && setSortBy(val)}>
                <SelectTrigger className="rounded-full border-outline-variant/20 bg-surface-container-low px-4 h-auto py-2 border font-semibold group/trigger">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-outline">Sort by:</span>
                    <SelectValue>
                      {SORT_OPTIONS.find((opt) => opt.value === sortBy)?.label}
                    </SelectValue>
                  </div>
                </SelectTrigger>
                <SelectContent className="rounded-2xl p-2 min-w-[200px]" align="end">
                  {SORT_OPTIONS.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value} className="rounded-xl px-4 py-2.5">
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-2">
              {filtered.map((pkg) => (
                <div key={pkg.id} className="h-full">
                  <PackageCard
                    title={pkg.title}
                    location={pkg.location}
                    duration={`${pkg.duration} Days`}
                    price={`$${pkg.price.toLocaleString()}`}
                    image={pkg.image}
                    badge={pkg.badge}
                    badgeVariant={pkg.badge === "Best Seller" ? "orange" : "blue"}
                    rating={pkg.rating}
                    tags={Array.from(new Set([pkg.category, ...pkg.tags.map(t => t.charAt(0) + t.slice(1).toLowerCase())]))}
                    variant="detailed"
                    onAction={() => router.push(`/packages/${pkg.slug}`)}
                  />
                </div>
              ))}
            </div>

            <div className="mt-12 flex items-center justify-center gap-2">
              <button
                title="Previous page"
                aria-label="Previous page"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-outline-variant/30 transition-colors hover:bg-surface-container"
              >
                <ChevronLeft size={18} />
              </button>

              {[1, 2, 3].map((page) => (
                <button
                  key={page}
                  className={`flex h-10 w-10 items-center justify-center rounded-full font-bold transition-colors ${page === 1
                    ? "bg-primary text-on-primary"
                    : "hover:bg-surface-container"
                    }`}
                >
                  {page}
                </button>
              ))}

              <span className="px-2">...</span>

              <button className="flex h-10 w-10 items-center justify-center rounded-full font-bold transition-colors hover:bg-surface-container">
                12
              </button>

              <button
                title="Next page"
                aria-label="Next page"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-outline-variant/30 transition-colors hover:bg-surface-container"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
