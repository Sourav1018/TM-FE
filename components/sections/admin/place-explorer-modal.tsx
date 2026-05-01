"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MOCK_PLACES } from "@/constants/package-editor"
import { cn } from "@/lib/utils"
import { Check, GripVertical, MapPin, Plus, Search, Trash2 } from "lucide-react"
import { useState } from "react"
import { type ItineraryDay } from "./itinerary-day-card"

const uniqueCities = Array.from(new Set(MOCK_PLACES.map(p => p.location?.split(",")[0].trim()).filter(Boolean))) as string[]
const uniqueCategories = Array.from(new Set(MOCK_PLACES.map(p => p.category).filter(Boolean))) as string[]
const uniqueDistricts = Array.from(new Set(MOCK_PLACES.map(p => p.district).filter(Boolean))) as string[]
const uniqueStates = Array.from(new Set(MOCK_PLACES.map(p => p.state).filter(Boolean))) as string[]

type PlaceExplorerModalProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  day: ItineraryDay
  onSave: (places: string[]) => void
}

export function PlaceExplorerModal({ open, onOpenChange, day, onSave }: PlaceExplorerModalProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCity, setSelectedCity] = useState<string>("all")
  const [selectedDistrict, setSelectedDistrict] = useState<string>("all")
  const [selectedState, setSelectedState] = useState<string>("all")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [isPopularFilter, setIsPopularFilter] = useState(false)
  const [isHiddenGemFilter, setIsHiddenGemFilter] = useState(false)

  // Local state for selected places so changes aren't applied until save
  const [selectedPlaces, setSelectedPlaces] = useState<string[]>(day.places || [])
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null)

  // Track previous open state to reset filters when modal opens
  const [prevOpen, setPrevOpen] = useState(open)

  if (open !== prevOpen) {
    setPrevOpen(open)
    if (open) {
      setSelectedPlaces(day.places || [])
      setSearchQuery("")
      setSelectedCity("all")
      setSelectedDistrict("all")
      setSelectedState("all")
      setSelectedCategory("all")
      setIsPopularFilter(false)
      setIsHiddenGemFilter(false)
    }
  }

  const handleAddPlace = (placeId: string) => {
    if (!selectedPlaces.includes(placeId)) {
      setSelectedPlaces([...selectedPlaces, placeId])
    }
  }

  const handleRemovePlace = (placeId: string) => {
    setSelectedPlaces(selectedPlaces.filter(id => id !== placeId))
  }

  const handleSave = () => {
    onSave(selectedPlaces)
    onOpenChange(false)
  }

  // Filter places
  const filteredPlaces = MOCK_PLACES.filter(place => {
    const matchesSearch = place.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          place.location?.toLowerCase().includes(searchQuery.toLowerCase())
    
    const placeCity = place.location?.split(",")[0].trim()
    const matchesCity = selectedCity === "all" || placeCity === selectedCity
    
    const matchesDistrict = selectedDistrict === "all" || place.district === selectedDistrict
    const matchesState = selectedState === "all" || place.state === selectedState
    
    const matchesCategory = selectedCategory === "all" || place.category === selectedCategory
    
    // If a toggle is active, it must match. If neither is active, we don't filter out by them.
    // If BOTH are active, place should ideally be both (or we can use OR logic for toggles). 
    // Let's use AND logic: if popular filter is on, place must be popular.
    const matchesPopular = !isPopularFilter || place.isPopular
    const matchesHiddenGem = !isHiddenGemFilter || place.isHiddenGem

    return matchesSearch && matchesCity && matchesDistrict && matchesState && matchesCategory && matchesPopular && matchesHiddenGem
  })

  // HTML5 Drag and Drop handlers
  const onDragStart = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    setDraggedIndex(index)
    // Effect for the drag
    e.dataTransfer.effectAllowed = "move"
    // Optional: make the dragged item slightly transparent
    setTimeout(() => {
      if (e.target instanceof HTMLElement) {
        e.target.style.opacity = "0.5"
      }
    }, 0)
  }

  const onDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    setDraggedIndex(null)
    if (e.target instanceof HTMLElement) {
      e.target.style.opacity = "1"
    }
  }

  const onDragOver = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.preventDefault()
    if (draggedIndex === null || draggedIndex === index) return

    const newSelectedPlaces = [...selectedPlaces]
    const draggedItem = newSelectedPlaces[draggedIndex]

    // Remove item from original position
    newSelectedPlaces.splice(draggedIndex, 1)
    // Insert at new position
    newSelectedPlaces.splice(index, 0, draggedItem)

    setSelectedPlaces(newSelectedPlaces)
    setDraggedIndex(index)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl h-[85vh] p-0 flex flex-col gap-0 overflow-hidden bg-background rounded-3xl">
        <DialogHeader className="p-6 pb-4 border-b">
          <DialogTitle className="text-2xl font-bold">Edit Day {day.day} Itinerary</DialogTitle>
          <DialogDescription className="text-base">
            Select places from the explorer to build your day.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-1 overflow-hidden h-full">
          {/* Left Panel: Explorer */}
          <div className="w-[55%] flex flex-col border-r h-full overflow-hidden">
            <div className="p-4 space-y-4 shrink-0 border-b">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search by name, city..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 bg-muted/50 border-none rounded-full h-10"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {/* District Filter */}
                <Select value={selectedDistrict} onValueChange={setSelectedDistrict}>
                  <SelectTrigger className="w-auto h-7 rounded-full bg-purple-50 text-purple-600 hover:bg-purple-100 border-none transition-colors px-3 py-1 text-[10px] font-bold uppercase tracking-wider gap-1 [&>svg]:h-3 [&>svg]:w-3">
                    <SelectValue placeholder="DISTRICT: ALL" />
                  </SelectTrigger>
                  <SelectContent className="rounded-2xl">
                    <SelectItem value="all" className="text-sm font-medium rounded-xl">District: All</SelectItem>
                    {uniqueDistricts.map(district => (
                      <SelectItem key={district} value={district} className="text-sm font-medium rounded-xl">{district}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* State Filter */}
                <Select value={selectedState} onValueChange={setSelectedState}>
                  <SelectTrigger className="w-auto h-7 rounded-full bg-indigo-50 text-indigo-600 hover:bg-indigo-100 border-none transition-colors px-3 py-1 text-[10px] font-bold uppercase tracking-wider gap-1 [&>svg]:h-3 [&>svg]:w-3">
                    <SelectValue placeholder="STATE: ALL" />
                  </SelectTrigger>
                  <SelectContent className="rounded-2xl">
                    <SelectItem value="all" className="text-sm font-medium rounded-xl">State: All</SelectItem>
                    {uniqueStates.map(state => (
                      <SelectItem key={state} value={state} className="text-sm font-medium rounded-xl">{state}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* City Filter */}
                <Select value={selectedCity} onValueChange={setSelectedCity}>
                  <SelectTrigger className="w-auto h-7 rounded-full bg-sky-50 text-sky-600 hover:bg-sky-100 border-none transition-colors px-3 py-1 text-[10px] font-bold uppercase tracking-wider gap-1 [&>svg]:h-3 [&>svg]:w-3">
                    <SelectValue placeholder="CITY: ALL" />
                  </SelectTrigger>
                  <SelectContent className="rounded-2xl">
                    <SelectItem value="all" className="text-sm font-medium rounded-xl">City: All</SelectItem>
                    {uniqueCities.map(city => (
                      <SelectItem key={city} value={city} className="text-sm font-medium rounded-xl">{city}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Type Filter */}
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-auto h-7 rounded-full bg-emerald-50 text-emerald-600 hover:bg-emerald-100 border-none transition-colors px-3 py-1 text-[10px] font-bold uppercase tracking-wider gap-1 [&>svg]:h-3 [&>svg]:w-3">
                    <SelectValue placeholder="TYPE: ALL" />
                  </SelectTrigger>
                  <SelectContent className="rounded-2xl">
                    <SelectItem value="all" className="text-sm font-medium rounded-xl">Type: All</SelectItem>
                    {uniqueCategories.map(category => (
                      <SelectItem key={category} value={category} className="text-sm font-medium rounded-xl">{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Badge 
                  variant="secondary" 
                  onClick={() => setIsPopularFilter(!isPopularFilter)}
                  className={cn(
                    "rounded-full px-3 py-1 cursor-pointer text-[10px] font-bold uppercase tracking-wider transition-colors",
                    isPopularFilter ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-muted text-foreground hover:bg-muted/80"
                  )}
                >
                  Popular
                </Badge>
                
                <Badge 
                  variant="secondary" 
                  onClick={() => setIsHiddenGemFilter(!isHiddenGemFilter)}
                  className={cn(
                    "rounded-full px-3 py-1 cursor-pointer text-[10px] font-bold uppercase tracking-wider transition-colors",
                    isHiddenGemFilter ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-muted text-foreground hover:bg-muted/80"
                  )}
                >
                  Hidden Gems
                </Badge>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {filteredPlaces.map(place => {
                const isAdded = selectedPlaces.includes(place.id)
                return (
                  <div key={place.id} className="flex items-center gap-4 p-3 rounded-2xl border border-border/50 bg-card hover:shadow-md transition-all">
                    {/* Placeholder for Image since user said no image needed, we will show a neat box or just text */}
                    <div className="h-16 w-16 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                       <MapPin className="h-6 w-6 text-primary/50" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-bold text-base truncate">{place.name}</h4>
                        {place.category && (
                          <Badge variant="secondary" className="text-[10px] h-5 px-1.5 bg-primary/10 text-primary rounded-md font-bold uppercase">
                            {place.category}
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        <MapPin className="h-3 w-3" /> {place.location}
                      </p>
                    </div>
                    <Button 
                      variant={isAdded ? "secondary" : "default"}
                      size="sm"
                      onClick={() => !isAdded && handleAddPlace(place.id)}
                      className={cn("rounded-full px-4 h-9 font-bold transition-all", isAdded ? "bg-muted text-muted-foreground pointer-events-none" : "bg-primary text-primary-foreground")}
                    >
                      {isAdded ? (
                        <>
                          <Check className="h-4 w-4 mr-1" /> Added
                        </>
                      ) : (
                        <>
                          <Plus className="h-4 w-4 mr-1" /> Add
                        </>
                      )}
                    </Button>
                  </div>
                )
              })}
              {filteredPlaces.length === 0 && (
                <div className="text-center py-10 text-muted-foreground">
                  No places found matching your criteria.
                </div>
              )}
            </div>
          </div>

          {/* Right Panel: Day Itinerary */}
          <div className="w-[45%] flex flex-col bg-muted/20 h-full overflow-hidden">
            <div className="p-6 pb-2 shrink-0">
              <h3 className="font-bold text-lg flex items-center gap-2">
                <div className="h-6 w-6 rounded bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin className="h-4 w-4" />
                </div>
                Day {day.day} Itinerary
              </h3>
              <p className="text-sm text-muted-foreground mt-1">{selectedPlaces.length} places selected</p>
            </div>

            <div className="flex-1 overflow-y-auto p-6 pt-2 space-y-3 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {selectedPlaces.length === 0 ? (
                <div className="border-2 border-dashed border-border rounded-2xl p-8 flex flex-col items-center justify-center text-center gap-2 text-muted-foreground bg-muted/30 h-32">
                  <p>Search and add places from the explorer</p>
                </div>
              ) : (
                <div className="space-y-3 pb-20">
                  {selectedPlaces.map((placeId, index) => {
                    const place = MOCK_PLACES.find(p => p.id === placeId)
                    if (!place) return null

                    return (
                      <div 
                        key={place.id}
                        draggable
                        onDragStart={(e) => onDragStart(e, index)}
                        onDragEnd={onDragEnd}
                        onDragOver={(e) => onDragOver(e, index)}
                        className="group flex items-center gap-3 p-3 rounded-2xl bg-background border shadow-sm cursor-grab active:cursor-grabbing hover:border-primary/30 transition-colors"
                      >
                        <div className="cursor-grab text-muted-foreground/50 hover:text-foreground p-1">
                          <GripVertical className="h-5 w-5" />
                        </div>
                        <div className="h-7 w-7 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold shrink-0">
                          {index + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-sm truncate">{place.name}</h4>
                          <p className="text-xs text-muted-foreground truncate">{place.location}</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleRemovePlace(place.id)}
                          className="h-8 w-8 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-full opacity-0 group-hover:opacity-100 transition-all"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    )
                  })}
                  
                  {selectedPlaces.length > 0 && (
                    <div className="border-2 border-dashed border-border rounded-xl p-4 flex justify-center items-center text-sm text-muted-foreground mt-4">
                      Drag places here to reorder
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        <DialogFooter className="p-4 border-t bg-background shrink-0 mt-auto flex-row justify-end gap-2">
          <DialogClose asChild>
            <Button variant="ghost" className="font-bold rounded-full px-6">Cancel</Button>
          </DialogClose>
          <Button onClick={handleSave} className="font-bold rounded-full px-6 bg-primary text-primary-foreground hover:bg-primary/90">
            Save Itinerary
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
