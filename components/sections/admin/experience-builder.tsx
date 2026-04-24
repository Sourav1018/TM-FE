"use client"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Plus, Trash2 } from "lucide-react"
import { useState } from "react"

type ItineraryDay = {
  id: string
  day: number
  title: string
  description: string
}

export function ExperienceBuilder() {
  const [days, setDays] = useState<ItineraryDay[]>([
    {
      id: "1",
      day: 1,
      title: "Arrival & Welcome Dinner",
      description: "Private transfer from Santorini Airport to Oia. Check-in to luxury suite followed by a 5-course welcome dinner at sunset.",
    },
    {
      id: "2",
      day: 2,
      title: "Private Yacht Cruise",
      description: "Half-day cruise around the volcanic caldera with swimming stops at Red Beach and hot springs.",
    },
  ])

  const addDay = () => {
    const newDay: ItineraryDay = {
      id: Math.random().toString(36).substr(2, 9),
      day: days.length + 1,
      title: "",
      description: "",
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
      {/* Header Area */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-600 shadow-sm border border-sky-200/50">
            <Calendar className="h-6 w-6" />
          </div>
          {/* Title removed as requested */}
        </div>
        <Button 
          onClick={addDay}
          className="rounded-full bg-[#00AEEF] px-8 py-6 hover:bg-[#009ED9] text-white font-bold flex items-center gap-2 shadow-lg shadow-sky-500/20 transition-all hover:scale-105 active:scale-95"
        >
          <Plus className="h-5 w-5" />
          Add Day
        </Button>
      </div>

      {/* Itinerary List */}
      <div className="relative flex flex-col gap-20">
        {/* Vertical Timeline Line */}
        <div className="absolute left-6 top-10 bottom-10 w-[1.5px] bg-slate-200" />

        {days.map((day) => (
          <div key={day.id} className="relative pl-24">
            {/* Day Number Circle */}
            <div className="absolute left-2 top-8 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[#004B71] text-white text-sm font-bold shadow-md">
              {day.day}
            </div>

            {/* Day Content Card */}
            <div className="rounded-[2.5rem] bg-[#F1F5F9] p-16 flex flex-col gap-10 shadow-sm border border-slate-200/40 group transition-all hover:shadow-lg hover:bg-[#EEF2F6]">
              <div className="flex items-center justify-between">
                <input 
                  type="text"
                  value={day.title}
                  onChange={(e) => updateDay(day.id, { title: e.target.value })}
                  placeholder="Day Title"
                  className="bg-transparent text-2xl font-extrabold text-slate-800 focus:outline-none w-full placeholder:text-slate-400"
                />
                <button 
                  onClick={() => removeDay(day.id)}
                  className="p-3 rounded-2xl text-slate-400 hover:text-red-500 hover:bg-red-50 transition-all opacity-60 group-hover:opacity-100"
                >
                  <Trash2 className="h-7 w-7" />
                </button>
              </div>

              <div className="bg-white rounded-[1.5rem] p-8 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] border border-slate-200/50">
                <Textarea 
                  value={day.description}
                  onChange={(e) => updateDay(day.id, { description: e.target.value })}
                  placeholder="Describe the activities for this day..."
                  className="min-h-[140px] bg-transparent border-none resize-none p-0 text-slate-600 text-xl leading-relaxed focus-visible:ring-0 shadow-none placeholder:text-slate-300"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
