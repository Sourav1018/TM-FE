"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { SORT_OPTIONS } from "@/constants/sort-options"

interface PackagesHeaderProps {
  count: number
  sortBy: string
  onSortChange: (value: string) => void
}

export function PackagesHeader({
  count,
  sortBy,
  onSortChange,
}: PackagesHeaderProps) {
  return (
    <div className="mb-8 flex flex-col items-center justify-between gap-4 md:flex-row">
      <div>
        <h2 className="text-2xl font-extrabold">Available Packages</h2>
        <p className="text-on-surface-variant text-sm">
          Showing {count} curated results for your search
        </p>
      </div>

      <Select value={sortBy} onValueChange={(val) => val && onSortChange(val)}>
        <SelectTrigger className="border-outline-variant/20 group/trigger h-auto w-fit border bg-surface-container-low px-4 py-2 font-semibold">
          <div className="flex items-center gap-3">
            <span className="text-outline text-xs font-bold">Sort by:</span>
            <SelectValue>
              {SORT_OPTIONS.find((opt) => opt.value === sortBy)?.label}
            </SelectValue>
          </div>
        </SelectTrigger>
        <SelectContent className="p-2">
          {SORT_OPTIONS.map((opt) => (
            <SelectItem key={opt.value} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
