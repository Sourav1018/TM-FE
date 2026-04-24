"use client"

import { SearchBar } from "./search-bar"
import Image from "next/image"

type PackagesHeroProps = {
  search: string
  onSearchChange: (value: string) => void
  selectedDate: Date | undefined
  onDateChange: (date: Date | undefined) => void
  guests: number
  onGuestsChange: (update: (prev: number) => number) => void
}

export function PackagesHero({
  search,
  onSearchChange,
  selectedDate,
  onDateChange,
  guests,
  onGuestsChange,
}: PackagesHeroProps) {
  return (
    <section className="mb-12">
      <div className="bg-primary relative flex min-h-[300px] items-center justify-center overflow-hidden rounded-xl p-8">
        <div className="from-primary to-primary-container absolute inset-0 bg-gradient-to-br opacity-90" />
        <Image
          src="/images/packages/hero.jpg"
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

          <SearchBar
            search={search}
            onSearchChange={onSearchChange}
            selectedDate={selectedDate}
            onDateChange={onDateChange}
            guests={guests}
            onGuestsChange={onGuestsChange}
          />
        </div>
      </div>
    </section>
  )
}
