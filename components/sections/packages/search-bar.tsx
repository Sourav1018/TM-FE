"use client"

import { Button } from "@/components/ui/button"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { Calendar, MapPin, Minus, Plus, Users } from "lucide-react"

interface SearchBarProps {
  search: string
  onSearchChange: (value: string) => void
  selectedDate: Date | undefined
  onDateChange: (date: Date | undefined) => void
  guests: number
  onGuestsChange: (update: (prev: number) => number) => void
  onSearch?: () => void
}

export function SearchBar({
  search,
  onSearchChange,
  selectedDate,
  onDateChange,
  guests,
  onGuestsChange,
  onSearch,
}: SearchBarProps) {
  return (
    <div className="bg-surface-container-lowest flex flex-col items-center gap-2 rounded-full p-2 shadow-xl md:flex-row">
      <div className="border-surface-container flex w-full flex-1 items-center gap-3 border-b px-6 md:border-b-0 md:border-r">
        <MapPin size={20} className="text-primary shrink-0" />
        <div className="flex min-w-0 flex-1 flex-col py-2">
          <span className="text-outline text-[10px] font-bold tracking-wider uppercase">
            Where to?
          </span>
          <input
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Explore destinations..."
            className="text-on-surface placeholder:text-outline-variant w-full border-none bg-transparent p-0 font-medium outline-none"
          />
        </div>
      </div>

      <div className="border-surface-container flex w-full flex-1 items-center gap-3 border-b px-6 md:border-b-0 md:border-r">
        <Calendar size={20} className="text-primary shrink-0" />
        <div className="flex min-w-0 flex-1 flex-col py-2">
          <span className="text-outline text-[10px] font-bold tracking-wider uppercase">
            When?
          </span>
          <Popover>
            <PopoverTrigger className="text-on-surface w-full text-left font-medium outline-none">
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
                onSelect={onDateChange}
                disabled={(date) =>
                  date < new Date(new Date().setHours(0, 0, 0, 0))
                }
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div className="flex w-full flex-1 items-center gap-3 px-6">
        <Users size={20} className="text-primary shrink-0" />
        <div className="flex min-w-0 flex-1 flex-col py-2">
          <span className="text-outline text-[10px] font-bold tracking-wider uppercase">
            Who?
          </span>
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Decrease guests"
              onClick={() => onGuestsChange((prev) => Math.max(1, prev - 1))}
              className="text-on-surface bg-surface-container flex h-7 w-7 items-center justify-center rounded-full transition-colors hover:bg-surface-container-high"
            >
              <Minus size={14} />
            </button>
            <span className="text-on-surface min-w-[72px] font-medium">
              {guests} {guests === 1 ? "Guest" : "Guests"}
            </span>
            <button
              type="button"
              aria-label="Increase guests"
              onClick={() => onGuestsChange((prev) => prev + 1)}
              className="text-on-surface bg-surface-container flex h-7 w-7 items-center justify-center rounded-full transition-colors hover:bg-surface-container-high"
            >
              <Plus size={14} />
            </button>
          </div>
        </div>
      </div>

      <Button
        variant="yellow"
        size="lg"
        onClick={onSearch}
        className="font-bold shadow-md transition-transform hover:scale-105 active:scale-95"
      >
        Search
      </Button>
    </div>
  )
}
