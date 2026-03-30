"use client"

import * as React from "react"
import { Heart } from "lucide-react"
import { cn } from "@/lib/utils"

type FavoriteButtonProps = {
  initialFavorite?: boolean
  onToggle?: (isFavorite: boolean) => void
}

export function FavoriteButton({
  initialFavorite,
  onToggle
}: FavoriteButtonProps) {
  const [isFavorite, setIsFavorite] = React.useState(initialFavorite)
  return (
    <button
      aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
      className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-all hover:bg-white/40 group/heart"
      onClick={(e) => {
        e.stopPropagation()
        const newFavorite = !isFavorite
        setIsFavorite(newFavorite)
        onToggle?.(newFavorite)
      }}
    >
      <Heart
        className={cn(
          "h-6 w-6 transition-all duration-300",
          isFavorite ? "fill-red-500 text-red-500 scale-110" : "text-white"
        )}
      />
    </button>
  )
}
