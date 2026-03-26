"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { Navbar } from "@/components/ui/navbar"
import { MapPin, Calendar, Users, Star, Clock, Heart, ChevronLeft, ChevronRight, Activity } from "lucide-react"

type TravelPackage = {
  id: number
  title: string
  location: string
  category: string
  price: number
  duration: number
  image: string
  badge?: string
  rating?: number
}

const PACKAGES: TravelPackage[] = [
  {
    id: 1,
    title: "Swiss Alps Explorer",
    location: "Switzerland",
    category: "Adventure",
    price: 1850,
    duration: 7,
    image: "/images/signup-bg.png",
    badge: "Best Seller",
    rating: 4.9,
  },
  {
    id: 2,
    title: "Bali Serenity Retreat",
    location: "Indonesia",
    category: "Luxury",
    price: 2400,
    duration: 10,
    image: "/images/signup-bg.png",
    badge: "New",
    rating: 5.0,
  },
  {
    id: 3,
    title: "Amalfi Coast Wonders",
    location: "Italy",
    category: "Culture",
    price: 3150,
    duration: 8,
    image: "/images/signup-bg.png",
    rating: 4.8,
  },
  {
    id: 4,
    title: "Kenyan Safari Adventure",
    location: "Kenya",
    category: "Wildlife",
    price: 2100,
    duration: 6,
    image: "/images/signup-bg.png",
    badge: "Best Seller",
    rating: 4.9,
  },
  ...Array.from({ length: 5 }).map((_, i) => ({
    id: 5 + i,
    title: `Getaway Package ${i + 1}`,
    location: "Premium Destination",
    category: ["Adventure", "Family", "Luxury", "Eco-Friendly", "Culture"][i % 5],
    price: 1500 + i * 300,
    duration: 4 + (i % 10),
    image: "/images/signup-bg.png",
    rating: 4.5 + (i % 5) * 0.1,
  })),
]

const CATEGORIES = ["Adventure", "Family", "Luxury", "Eco-Friendly", "Culture", "Wildlife"]

export default function Page() {
  const [search, setSearch] = useState("")
  const [sortBy, setSortBy] = useState("recommended")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [minPrice, setMinPrice] = useState(500)
  const [maxPrice, setMaxPrice] = useState(5000)
  const [duration, setDuration] = useState("")

  const filtered = useMemo(() => {
    const result = PACKAGES.filter((p) => {
      if (search && !p.title.toLowerCase().includes(search.toLowerCase())) return false
      if (selectedCategories.length && !selectedCategories.includes(p.category)) return false
      if (p.price < minPrice || p.price > maxPrice) return false

      if (duration) {
        const [low, high] = duration.split("-").map(Number)
        if (p.duration < low || p.duration > high) return false
      }

      return true
    })

    if (sortBy === "price-low") result.sort((a, b) => a.price - b.price)
    if (sortBy === "price-high") result.sort((a, b) => b.price - a.price)
    if (sortBy === "rated") result.sort((a, b) => (b.rating || 0) - (a.rating || 0))

    return result
  }, [search, selectedCategories, minPrice, maxPrice, duration, sortBy])

  const toggleCategory = (cat: string) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    )
  }

  const resetFilters = () => {
    setSelectedCategories([])
    setMinPrice(500)
    setMaxPrice(5000)
    setDuration("")
    setSearch("")
  }

  return (
    <div className="min-h-screen bg-surface">
      <Navbar />

      {/* HERO SECTION */}
      <section className="pt-20 pb-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden min-h-[320px] md:min-h-[380px] flex items-center justify-center bg-primary">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-container opacity-90" />

            {/* Background Image */}
            <Image
              src="/images/signup-bg.png"
              alt="Explore destinations"
              fill
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
              priority
            />

            {/* Content */}
            <div className="relative z-10 w-full max-w-4xl px-6">
              <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-8 tracking-tight">
                Find your next horizon
              </h1>

              {/* SEARCH BAR */}
              <div className="bg-surface-container-lowest p-2 rounded-full shadow-xl flex flex-col md:flex-row items-center gap-2">
                {/* WHERE TO */}
                <div className="flex-1 flex items-center px-6 gap-3 w-full border-b md:border-b-0 md:border-r border-surface-container">
                  <MapPin size={20} className="text-primary flex-shrink-0" />
                  <div className="flex flex-col py-2 flex-1">
                    <span className="text-[10px] uppercase font-bold text-outline tracking-widest">Where to?</span>
                    <input
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Explore destinations..."
                      className="bg-transparent border-none p-0 focus:ring-0 text-on-surface font-medium placeholder:text-outline-variant w-full outline-none"
                    />
                  </div>
                </div>

                {/* WHEN */}
                <div className="flex-1 flex items-center px-6 gap-3 w-full border-b md:border-b-0 md:border-r border-surface-container">
                  <Calendar size={20} className="text-primary flex-shrink-0" />
                  <div className="flex flex-col py-2 flex-1">
                    <span className="text-[10px] uppercase font-bold text-outline tracking-widest">When?</span>
                    <input
                      placeholder="Add dates"
                      type="text"
                      title="Check-in and Check-out dates"
                      className="bg-transparent border-none p-0 focus:ring-0 text-on-surface font-medium placeholder:text-outline-variant w-full outline-none"
                    />
                  </div>
                </div>

                {/* WHO */}
                <div className="flex-1 flex items-center px-6 gap-3 w-full">
                  <Users size={20} className="text-primary flex-shrink-0" />
                  <div className="flex flex-col py-2 flex-1">
                    <span className="text-[10px] uppercase font-bold text-outline tracking-widest">Who?</span>
                    <input
                      placeholder="Add guests"
                      type="text"
                      title="Number of guests"
                      className="bg-transparent border-none p-0 focus:ring-0 text-on-surface font-medium placeholder:text-outline-variant w-full outline-none"
                    />
                  </div>
                </div>

                {/* SEARCH BUTTON */}
                <button className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform active:scale-95 shadow-md whitespace-nowrap">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* FILTER SIDEBAR */}
            <aside className="w-full lg:w-80 flex-shrink-0">
              <div className="bg-surface-container-low p-6 rounded-2xl sticky top-24 border border-outline-variant/20">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-bold">Filters</h2>
                  <button
                    onClick={resetFilters}
                    className="text-xs font-bold text-primary hover:underline transition-colors"
                  >
                    Reset All
                  </button>
                </div>

                {/* CATEGORIES */}
                <div className="mb-8">
                  <h3 className="text-xs font-bold uppercase text-outline tracking-widest mb-4">Categories</h3>
                  <div className="space-y-3">
                    {CATEGORIES.map((cat) => (
                      <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(cat)}
                          onChange={() => toggleCategory(cat)}
                          className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary cursor-pointer"
                        />
                        <span className="text-on-surface-variant group-hover:text-on-surface transition-colors text-sm">
                          {cat}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* PRICE RANGE */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xs font-bold uppercase text-outline tracking-widest">Price Range</h3>
                    <span className="text-sm font-bold text-primary">
                      ${minPrice} - ${maxPrice}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="5000"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    title="Adjust maximum price"
                    className="w-full h-2 bg-surface-container-high rounded-full appearance-none cursor-pointer accent-primary"
                  />
                </div>

                {/* DURATION */}
                <div className="mb-8">
                  <h3 className="text-xs font-bold uppercase text-outline tracking-widest mb-4">Trip Duration</h3>
                  <div className="space-y-3">
                    {["1-3", "4-7", "8-14"].map((d) => (
                      <label key={d} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="radio"
                          checked={duration === d}
                          onChange={() => setDuration(d)}
                          className="w-5 h-5 rounded-full border-outline-variant text-primary focus:ring-primary cursor-pointer"
                        />
                        <span className="text-on-surface-variant group-hover:text-on-surface transition-colors text-sm">
                          {d} Days
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-primary text-on-primary py-3 rounded-full font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/10">
                  Apply Filters
                </button>
              </div>
            </aside>

            {/* RESULTS SECTION */}
            <div className="flex-1">
              {/* HEADER */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold">Available Packages</h2>
                  <p className="text-on-surface-variant text-sm mt-1">
                    Showing {filtered.length} curated results for your search
                  </p>
                </div>

                {/* SORT DROPDOWN */}
                <div className="flex items-center gap-3 bg-surface-container-low px-4 py-2.5 rounded-full border border-outline-variant/20">
                  <span className="text-xs font-bold text-outline whitespace-nowrap">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    title="Sort packages by price, rating, or recommended"
                    className="bg-transparent border-none focus:ring-0 text-sm font-semibold p-0 pr-6 cursor-pointer outline-none"
                  >
                    <option value="recommended">Recommended</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rated">Top Rated</option>
                  </select>
                </div>
              </div>

              {/* PACKAGES GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {filtered.map((pkg) => (
                  <div
                    key={pkg.id}
                    className="group bg-surface-container-lowest rounded-lg overflow-hidden border border-outline-variant/10 hover:shadow-2xl hover:shadow-primary/5 transition-all hover:scale-105 duration-300 cursor-pointer"
                  >
                    {/* IMAGE SECTION */}
                    <div className="relative h-64 overflow-hidden bg-surface-container">
                      <Image
                        src={pkg.image}
                        alt={pkg.title}
                        fill
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />

                      {/* BADGE */}
                      {pkg.badge && (
                        <span
                          className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md text-white ${
                            pkg.badge === "Best Seller"
                              ? "bg-tertiary-container"
                              : "bg-primary"
                          }`}
                        >
                          {pkg.badge}
                        </span>
                      )}

                      {/* FAVORITE BUTTON */}
                      <button
                        className="absolute top-4 right-4 bg-white/30 backdrop-blur-md p-2 rounded-full text-white hover:bg-white/50 transition-colors"
                        aria-label="Add to favorites"
                        title="Add to favorites"
                      >
                        <Heart size={20} />
                      </button>
                    </div>

                    {/* CONTENT SECTION */}
                    <div className="p-6">
                      {/* TITLE AND RATING */}
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-lg font-bold group-hover:text-primary transition-colors pr-2">
                          {pkg.title}
                        </h3>
                        {pkg.rating && (
                          <div className="flex items-center gap-1.5 text-secondary flex-shrink-0">
                            <Star size={14} className="fill-secondary" />
                            <span className="text-sm font-bold text-on-surface whitespace-nowrap">
                              {pkg.rating}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* LOCATION */}
                      <p className="text-sm text-on-surface-variant mb-4 flex items-center gap-1">
                        <MapPin size={14} />
                        {pkg.location}
                      </p>

                      {/* META INFO */}
                      <div className="flex items-center gap-4 mb-4 text-xs text-on-surface-variant font-medium">
                        <span className="flex items-center gap-1">
                          <Clock size={14} />
                          {pkg.duration} Days
                        </span>
                        <span className="flex items-center gap-1">
                          <Activity size={14} />
                          {pkg.category}
                        </span>
                      </div>

                      {/* PRICE AND CTA */}
                      <div className="flex items-center justify-between border-t border-surface-container pt-4">
                        <div>
                          <span className="text-xs text-outline font-medium">Starting from</span>
                          <div className="text-2xl font-bold text-primary">
                            ${pkg.price}
                            <span className="text-xs text-outline font-normal ml-1">/person</span>
                          </div>
                        </div>
                        <button className="bg-primary-container text-on-primary-container px-6 py-2.5 rounded-full font-bold hover:bg-primary hover:text-white transition-all active:scale-95">
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* PAGINATION */}
              <div className="flex justify-center items-center gap-2">
                <button title="Previous page" aria-label="Previous page" className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center hover:bg-surface-container transition-colors">
                  <ChevronLeft size={18} />
                </button>

                {[1, 2, 3].map((page) => (
                  <button
                    key={page}
                    title={`Go to page ${page}`}
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${
                      page === 1
                        ? "bg-primary text-on-primary"
                        : "hover:bg-surface-container text-on-surface"
                    }`}
                  >
                    {page}
                  </button>
                ))}

                <span className="px-2 text-on-surface-variant">...</span>

                <button title="Go to page 12" className="w-10 h-10 rounded-full hover:bg-surface-container flex items-center justify-center font-bold transition-colors">
                  12
                </button>

                <button title="Next page" aria-label="Next page" className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center hover:bg-surface-container transition-colors">
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}