"use client"

import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { useState } from "react"
import { CustomAlert } from "@/components/ui/custom-alert"
import { ItineraryDayCard, type ItineraryDay } from "./itinerary-day-card"

export function ExperienceBuilder() {
  const [days, setDays] = useState<ItineraryDay[]>([
    {
      id: "1",
      day: 1,
      title: "Arrival & Welcome Dinner",
      description: "Private transfer from Santorini Airport to Oia. Check-in to luxury suite followed by a 5-course welcome dinner at sunset.",
      places: [],
    },
    {
      id: "2",
      day: 2,
      title: "Private Yacht Cruise",
      description: "Half-day cruise around the volcanic caldera with swimming stops at Red Beach and hot springs.",
      places: [],
    },
  ])

  const addDay = () => {
    const newDay: ItineraryDay = {
      id: Math.random().toString(36).substr(2, 9),
      day: days.length + 1,
      title: "",
      description: "",
      places: [],
    }
    setDays([...days, newDay])
  }

  const removeDay = (id: string) => {
    setDays(days.filter(day => day.id !== id).map((day, index) => ({ ...day, day: index + 1 })))
  }

  const updateDay = (id: string, updates: Partial<ItineraryDay>) => {
    setDays(days.map(day => day.id === id ? { ...day, ...updates } : day))
  }

  return (
    <div className="flex flex-col gap-10">
      <CustomAlert tone="amber">
        <span className="font-bold">Pro Tip:</span> A good itinerary balances active excursions with leisure time. Aim for 2-3 main activities per day.
      </CustomAlert>

      {/* Header Area */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-end gap-4">
        <Button
          onClick={addDay}
          className="rounded-full bg-primary-container hover:bg-primary-container/90 text-white font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
        >
          <Plus className="h-5 w-5" />
          Add Day
        </Button>
      </div>

      {/* Itinerary List */}
      <div className="relative flex flex-col gap-12 sm:gap-20">
        {/* Vertical Timeline Line */}
        <div className="absolute left-4 sm:left-6 top-10 bottom-10 w-[1.5px] bg-border" />

        {days.map((day) => (
          <div key={day.id} className="relative pl-12 sm:pl-24">
            {/* Day Number Circle */}
            <div className="absolute left-0 sm:left-2 top-8 z-10 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-primary text-white text-xs sm:text-sm font-bold shadow-md">
              {day.day}
            </div>

            {/* Day Content Card */}
            <ItineraryDayCard
              day={day}
              onUpdate={updateDay}
              onRemove={removeDay}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
