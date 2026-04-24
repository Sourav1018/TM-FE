"use client"

import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
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
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-sm border border-primary/20">
            <Calendar className="h-6 w-6" />
          </div>
          {/* Title removed as requested */}
        </div>
        <Button
          onClick={addDay}
          className="rounded-full bg-primary-container px-8 py-6 hover:bg-primary-container/90 text-white font-bold flex items-center gap-2 shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95"
        >
          <Plus className="h-5 w-5" />
          Add Day
        </Button>
      </div>

      {/* Itinerary List */}
      <div className="relative flex flex-col gap-20">
        {/* Vertical Timeline Line */}
        <div className="absolute left-6 top-10 bottom-10 w-[1.5px] bg-border" />

        {days.map((day) => (
          <div key={day.id} className="relative pl-24">
            {/* Day Number Circle */}
            <div className="absolute left-2 top-8 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white text-sm font-bold shadow-md">
              {day.day}
            </div>

            {/* Day Content Card */}
            <Card className="bg-surface-container-low p-8 flex flex-col gap-10 shadow-sm border border-border/40 group transition-all hover:shadow-lg hover:bg-surface-container">
              <CardHeader className="flex-row items-center justify-between p-0 space-y-0">
                <Input
                  type="text"
                  value={day.title}
                  onChange={(e) => updateDay(day.id, { title: e.target.value })}
                  placeholder="Day Title"
                  className="bg-transparent text-2xl font-extrabold text-foreground focus-visible:ring-0 border-none w-full placeholder:text-muted-foreground px-1 h-auto"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeDay(day.id)}
                  className="p-3 h-auto w-auto rounded-full text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-all opacity-60 group-hover:opacity-100"
                >
                  <Trash2 className="h-7 w-7" />
                </Button>
              </CardHeader>

              <CardContent className="bg-white rounded-[1.5rem] p-5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] border border-border/50">
                <Textarea
                  value={day.description}
                  onChange={(e) => updateDay(day.id, { description: e.target.value })}
                  placeholder="Describe the activities for this day..."
                  className="min-h-[140px] bg-transparent border-none resize-none px-1 py-0 text-foreground/70 text-lg leading-relaxed focus-visible:ring-0 shadow-none placeholder:text-muted-foreground/50"
                />
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
