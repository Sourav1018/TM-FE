"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { CATEGORIES } from "@/mock/packages"

interface PackagesSidebarProps {
  selectedCategories: string[]
  onCategoryToggle: (category: string) => void
  maxPrice: number
  onMaxPriceChange: (value: number) => void
  duration: string
  onDurationChange: (value: string) => void
  onReset: () => void
}

export function PackagesSidebar({
  selectedCategories,
  onCategoryToggle,
  maxPrice,
  onMaxPriceChange,
  duration,
  onDurationChange,
  onReset,
}: PackagesSidebarProps) {
  return (
    <aside className="w-full flex-shrink-0 lg:w-72">
      <div className="bg-surface-container-low rounded-lg sticky top-20 p-6 shadow-md">
        <div className="mb-6 flex items-center justify-between">
          <Label className="text-lg font-bold">Filters</Label>
          <Button
            variant="link"
            onClick={onReset}
            className="text-primary h-auto p-0 text-xs font-bold transition-all hover:underline"
          >
            Reset All
          </Button>
        </div>

        <div className="mb-8">
          <Label className="text-outline mb-4 block text-xs font-bold tracking-widest uppercase">
            Categories
          </Label>
          <div className="space-y-3">
            {CATEGORIES.map((category) => (
              <label
                key={category}
                className="group flex cursor-pointer items-center gap-3"
              >
                <Checkbox
                  checked={selectedCategories.includes(category)}
                  onCheckedChange={() => onCategoryToggle(category)}
                />
                <span className="text-on-surface-variant group-hover:text-on-surface transition-colors">
                  {category}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <div className="mb-4 flex items-center justify-between">
            <Label className="text-outline text-xs font-bold tracking-widest uppercase">
              Price Range
            </Label>
            <span className="text-primary text-sm font-bold">
              $500 - ${maxPrice.toLocaleString()}
            </span>
          </div>
          <input
            type="range"
            min="500"
            max="5000"
            value={maxPrice}
            onChange={(e) => onMaxPriceChange(Number(e.target.value))}
            title="Price range slider"
            className="accent-primary bg-surface-container-high h-1.5 w-full cursor-pointer appearance-none rounded-full"
          />
        </div>

        <div className="mb-8">
          <Label className="text-outline mb-4 block text-xs font-bold tracking-widest uppercase">
            Trip Duration
          </Label>
          <div className="space-y-3">
            {["1-3", "4-7", "8-14"].map((value) => (
              <label
                key={value}
                className="group flex cursor-pointer items-center gap-3"
              >
                <Checkbox
                  checked={duration === value}
                  onCheckedChange={() =>
                    onDurationChange(duration === value ? "" : value)
                  }
                />
                <span className="text-on-surface-variant group-hover:text-on-surface transition-colors">
                  {value.replace("-", " - ")} Days
                </span>
              </label>
            ))}
          </div>
        </div>

        <Button 
          variant="primary" 
          size="lg" 
          className="w-full rounded-full font-bold shadow-lg shadow-primary/10"
        >
          Apply Filters
        </Button>
      </div>
    </aside>
  )
}
