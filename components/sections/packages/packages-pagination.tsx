"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"

interface PackagesPaginationProps {
  currentPage?: number
  onPageChange?: (page: number) => void
}

export function PackagesPagination({
  currentPage = 1,
  onPageChange,
}: PackagesPaginationProps) {
  return (
    <div className="mt-12 flex items-center justify-center gap-2">
      <button
        title="Previous page"
        aria-label="Previous page"
        className="border-outline-variant/30 flex h-10 w-10 items-center justify-center rounded-full border transition-colors hover:bg-surface-container"
      >
        <ChevronLeft size={18} />
      </button>

      {[1, 2, 3].map((page) => (
        <button
          key={page}
          onClick={() => onPageChange?.(page)}
          className={`flex h-10 w-10 items-center justify-center rounded-full font-bold transition-colors ${
            page === currentPage
              ? "text-on-primary bg-primary"
              : "hover:bg-surface-container"
          }`}
        >
          {page}
        </button>
      ))}

      <span className="px-2">...</span>

      <button
        onClick={() => onPageChange?.(12)}
        className="flex h-10 w-10 items-center justify-center rounded-full font-bold transition-colors hover:bg-surface-container"
      >
        12
      </button>

      <button
        title="Next page"
        aria-label="Next page"
        className="border-outline-variant/30 flex h-10 w-10 items-center justify-center rounded-full border transition-colors hover:bg-surface-container"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  )
}
