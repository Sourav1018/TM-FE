"use client"

import * as React from "react"
import Image from "next/image"
import { Star, Clock, Plus } from "lucide-react"

import { cn } from "@/lib/utils"
import { getTagStyles } from "@/utils"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FavoriteButton } from "./favorite-button"
export type PackageCardProps = {
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
  tags?: string[]
  isFavorite?: boolean
  variant?: "simple" | "detailed"
  onAction?: (e: React.MouseEvent) => void
  onFavoriteToggle?: (isFavorite: boolean) => void
  onClick?: (e: React.MouseEvent) => void
  showActionButton?: boolean
  actionIcon?: React.ReactNode
  actionLabel?: string
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
  tags,
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
        "group flex h-full cursor-pointer flex-col overflow-hidden border-none bg-white shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-xl",
        className
      )}
      onClick={onClick}
      {...props}
    >
      {/* Image Container */}
      <div className="relative m-0 aspect-[4/3] w-full overflow-hidden rounded-none">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Badge Overlay */}
        {badge && (
          <div className="absolute top-5 left-5">
            <span
              className={cn(
                "inline-flex items-center rounded-full px-4 py-2 text-[0.7rem] font-bold tracking-wider text-white uppercase shadow-lg",
                badgeVariant === "blue" ? "bg-primary-container" : "bg-tertiary"
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
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="flex-1">
          <div className="flex items-start justify-between gap-2">
            <div className="space-y-1">
              <h3 className="text-lg leading-tight font-bold tracking-tight text-foreground">
                {title}
              </h3>
              {location && (
                <p className="mt-0.5 flex items-center gap-2 text-xs font-medium text-muted-foreground">
                  {location}
                </p>
              )}
              {isSimple && (
                <p className="mt-0.5 text-xs font-medium text-muted-foreground">
                  {duration}
                </p>
              )}
            </div>

            {!isSimple && rating && (
              <div className="flex shrink-0 items-center gap-1.5 rounded-lg bg-tertiary/10 px-2 py-1 font-bold text-tertiary">
                <Star className="h-4 w-4 fill-tertiary" />
                <span className="text-sm">{rating}</span>
              </div>
            )}
          </div>

          {/* Info Icons (Detailed Variant) */}
          {!isSimple && (
            <div className="mt-4 space-y-4">
              {/* Duration Row */}
              <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                <Clock className="h-5 w-5 opacity-70" />
                <span>{duration}</span>
              </div>

              {/* Tags Row */}
              {tags && tags.length > 0 && (
                <div className="flex flex-wrap items-center gap-2">
                  {tags.map((tag: string) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className={cn(
                        "px-4 py-1.5 text-[0.75rem] transition-all duration-300 hover:shadow-sm",
                        getTagStyles(tag)
                      )}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
        {!isSimple && <div className="my-6 h-px w-full bg-border/30" />}

        {/* Bottom Section: Pricing & Action */}
        <div
          className={cn(
            "mt-auto flex items-end justify-between",
            isSimple ? "pt-6" : "pt-2"
          )}
        >
          <div className="flex flex-col">
            <span className="mb-0.5 text-[0.7rem] font-medium text-muted-foreground">
              {priceLabel || (isSimple ? "Starts at" : "Starting from")}
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-black text-primary">{price}</span>
              {priceSuffix && (
                <span className="text-[0.7rem] font-bold text-muted-foreground">
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
                  className="h-12 w-12 rounded-full bg-muted text-foreground transition-all hover:bg-surface-container-highest active:scale-95"
                  onClick={onAction}
                >
                  {actionIcon || <Plus className="h-6 w-6" />}
                </Button>
              ) : (
                <Button
                  className={cn(
                    "h-10 rounded-full font-bold shadow-[0_8px_20px_rgba(0,174,239,0.25)] transition-all duration-300 active:scale-95",
                    isSimple
                      ? "bg-muted px-5 text-sm text-foreground shadow-none hover:bg-surface-container-highest"
                      : "bg-primary-container px-6 text-base text-white hover:bg-primary-container/90 active:bg-primary"
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
