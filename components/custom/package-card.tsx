"use client"

import * as React from "react"
import Image from "next/image"
import { Heart, Star, Clock, Trees, Plus } from "lucide-react"

import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface PackageCardProps {
  title: string
  location?: string
  duration: string
  price: string
  priceSuffix?: string
  priceLabel?: string
  image: string
  badge?: string
  badgeVariant?: "blue" | "orange"
  rating?: number
  category?: string
  isFavorite?: boolean
  variant?: "simple" | "detailed"
  onAction?: (e: React.MouseEvent) => void
  onFavoriteToggle?: (isFavorite: boolean) => void
  onClick?: (e: React.MouseEvent) => void
  showActionButton?: boolean
  actionIcon?: React.ReactNode
  actionLabel?: string
}

function FavoriteButton({
  initialFavorite,
  onToggle
}: {
  initialFavorite?: boolean
  onToggle?: (isFavorite: boolean) => void
}) {
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

export function PackageCard({
  title,
  location,
  duration,
  price,
  priceSuffix,
  priceLabel,
  image,
  badge,
  badgeVariant = "blue",
  rating,
  category,
  isFavorite,
  variant = "simple",
  onAction,
  onFavoriteToggle,
  onClick,
  showActionButton = true,
  actionIcon,
  actionLabel,
  className,
  ...props
}: PackageCardProps & React.HTMLAttributes<HTMLDivElement>) {
  const isSimple = variant === "simple"

  return (
    <Card
      className={cn(
        "group cursor-pointer overflow-hidden border-none bg-[#F7F9F9] shadow-none transition-all duration-300 hover:scale-[1.02] hover:shadow-xl rounded-[2rem]",
        className
      )}
      onClick={onClick}
      {...props}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] m-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Badge Overlay */}
        {badge && (
          <div className="absolute left-5 top-5">
            <span
              className={cn(
                "inline-flex items-center rounded-full px-4 py-2 text-[0.7rem] font-bold uppercase tracking-wider text-white shadow-lg",
                badgeVariant === "blue" ? "bg-[#00AEEF]" : "bg-[#EA8C21]"
              )}
            >
              {badge}
            </span>
          </div>
        )}

        {/* Favorite Button (Detailed Variant) */}
        {!isSimple && (
          <FavoriteButton
            initialFavorite={isFavorite}
            onToggle={onFavoriteToggle}
          />
        )}
      </div>

      {/* Content Area */}
      <div className="p-5 md:p-6">
        <div className="flex items-start justify-between gap-2">
          <div className="space-y-1">
            <h3 className="text-lg font-bold tracking-tight text-[#191C1D]">
              {title}
            </h3>
            {location && (
              <p className="text-xs text-muted-foreground mt-0.5 flex items-center gap-2 font-medium">
                {location}
              </p>
            )}
            {isSimple && (
              <p className="text-xs text-muted-foreground mt-0.5 font-medium">
                {duration}
              </p>
            )}
          </div>

          {!isSimple && rating && (
            <div className="flex items-center gap-1.5 font-bold shrink-0 bg-[#EA8C21]/10 text-[#EA8C21] px-2 py-1 rounded-lg">
              <Star className="h-4 w-4 fill-[#EA8C21]" />
              <span className="text-sm">{rating}</span>
            </div>
          )}
        </div>

        {/* Info Icons (Detailed Variant) */}
        {!isSimple && (
          <div className="mt-3 flex flex-wrap items-center gap-4 text-xs font-semibold text-[#40484C]">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 opacity-70" />
              <span>{duration}</span>
            </div>
            {category && (
              <div className="flex items-center gap-2">
                <Trees className="h-5 w-5 opacity-70" />
                <span>{category}</span>
              </div>
            )}
          </div>
        )}

        {!isSimple && <div className="my-6 h-px w-full bg-[#C0C8CC]/30" />}

        {/* Bottom Section: Pricing & Action */}
        <div className={cn("flex items-end justify-between", isSimple ? "mt-6" : "mt-2")}>
          <div className="flex flex-col">
            <span className="mb-0.5 text-[0.7rem] font-medium text-[#40484C]">
              {priceLabel || (isSimple ? "Starts at" : "Starting from")}
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-black text-[#00658D]">
                {price}
              </span>
              {priceSuffix && (
                <span className="text-[0.7rem] font-bold text-[#40484C]">
                  {priceSuffix}
                </span>
              )}
            </div>
          </div>

          {showActionButton && (
            <div onClick={(e) => e.stopPropagation()}>
              {isSimple && !actionLabel ? (
                <Button
                  size="icon"
                  className="h-12 w-12 rounded-full bg-[#E8ECEE] text-[#191C1D] hover:bg-[#DFE3E2]"
                  onClick={onAction}
                >
                  {actionIcon || <Plus className="h-6 w-6" />}
                </Button>
              ) : (
                <Button
                  className={cn(
                    "h-10 rounded-full font-bold transition-all duration-300 shadow-[0_8px_20px_rgba(0,174,239,0.25)]",
                    isSimple ? "bg-[#E8ECEE] text-[#191C1D] hover:bg-[#DFE3E2] px-5 shadow-none text-sm" : "bg-[#00AEEF] px-6 text-base text-white hover:bg-[#009ED9]"
                  )}
                  onClick={onAction}
                >
                  {actionLabel || (isSimple ? "Book Now" : "Details")}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </Card>
  )
}
