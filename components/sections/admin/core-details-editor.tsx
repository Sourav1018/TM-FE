"use client"

import { useState, useRef, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { TRAVEL_CATEGORIES } from "@/constants/package-editor"
import { MapPin, X, Link as LinkIcon, Search, Check } from "lucide-react"

import { CustomAlert } from "@/components/ui/custom-alert"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"

export function CoreDetailsEditor() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [categorySearch, setCategorySearch] = useState("")
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCategoryDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const filteredCategories = TRAVEL_CATEGORIES.filter(c => 
    c.label.toLowerCase().includes(categorySearch.toLowerCase())
  )

  const toggleCategory = (value: string) => {
    setSelectedCategories(prev => 
      prev.includes(value) ? prev.filter(c => c !== value) : [...prev, value]
    )
  }

  return (
    <>
      <CustomAlert>
        <span className="font-bold">Tip:</span> Great titles usually mention the destination and the primary vibe (e.g. &quot;Serene Amalfi Coastal Retreat&quot;).
      </CustomAlert>

      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-1">
          <Label className="text-sm font-bold text-foreground pl-1">Package Title</Label>
          <Input className="rounded-sm" placeholder="e.g. Majestic Swiss Alps Discovery" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="flex gap-4">
            <div className="flex flex-col gap-1 w-full">
              <Label className="text-sm font-bold text-foreground pl-1">Days</Label>
              <Input type="number" min="0" className="rounded-sm" placeholder="e.g. 5" />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <Label className="text-sm font-bold text-foreground pl-1">Nights</Label>
              <Input type="number" min="0" className="rounded-sm" placeholder="e.g. 4" />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <Label className="text-sm font-bold text-foreground pl-1">Travel Category</Label>
            <div className="relative" ref={dropdownRef}>
              <div 
                className="flex min-h-10 w-full flex-wrap items-center gap-2 rounded-sm border border-input bg-input/30 px-3 py-2 text-sm ring-offset-background cursor-pointer"
                onClick={() => setIsCategoryDropdownOpen(true)}
              >
                {selectedCategories.length === 0 ? (
                  <span className="text-muted-foreground">Select Categories...</span>
                ) : (
                  selectedCategories.map(val => {
                    const cat = TRAVEL_CATEGORIES.find(c => c.value === val)
                    return cat ? (
                      <Badge key={val} variant="secondary" className="flex items-center gap-1 hover:bg-secondary">
                        {cat.label}
                        <X 
                          className="h-3 w-3 cursor-pointer text-muted-foreground hover:text-foreground" 
                          onClick={(e) => {
                            e.stopPropagation()
                            toggleCategory(val)
                          }}
                        />
                      </Badge>
                    ) : null
                  })
                )}
              </div>
              {isCategoryDropdownOpen && (
                <div className="absolute top-full left-0 z-50 mt-1 max-h-60 w-full flex flex-col overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md outline-none">
                  <div className="flex items-center border-b px-3">
                    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
                    <input
                      className="flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Search categories..."
                      value={categorySearch}
                      onChange={(e) => setCategorySearch(e.target.value)}
                    />
                  </div>
                  <div className="max-h-[200px] overflow-auto p-1">
                    {filteredCategories.length === 0 ? (
                      <div className="py-6 text-center text-sm text-muted-foreground">No categories found.</div>
                    ) : (
                      filteredCategories.map(category => {
                        const isSelected = selectedCategories.includes(category.value)
                        return (
                          <div
                            key={category.value}
                            className="relative flex w-full cursor-pointer select-none items-center rounded-sm py-2 pl-2 pr-2 text-sm outline-none hover:bg-accent hover:text-accent-foreground"
                            onClick={() => toggleCategory(category.value)}
                          >
                            <Checkbox 
                              checked={isSelected}
                              onCheckedChange={() => toggleCategory(category.value)}
                              className="mr-2"
                              id={`category-${category.value}`}
                            />
                            <Label 
                              htmlFor={`category-${category.value}`}
                              className="cursor-pointer font-normal flex-1"
                              onClick={(e) => e.preventDefault()}
                            >
                              {category.label}
                            </Label>
                          </div>
                        )
                      })
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <Label className="text-sm font-bold text-foreground pl-1">Route Link</Label>
          <div className="relative">
            <LinkIcon className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input type="url" className="pl-11 rounded-sm" placeholder="Enter route/map link" />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <Label className="text-sm font-bold text-foreground pl-1">Short Pitch</Label>
          <Textarea
            className="min-h-40 resize-none rounded-sm"
            placeholder="Briefly describe what makes this trip unforgettable..."
          />
        </div>
      </div>
    </>
  )
}
