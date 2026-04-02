"use client"

import { PackageCard } from "@/components/custom/package-card/package-card"

interface Package {
  id: string | number
  title: string
  location?: string
  duration: number
  price: number
  image: string
  badge?: string
  rating?: number
  category: string
  tags: string[]
  slug: string
}

interface PackagesGridProps {
  packages: Package[]
  onAction: (slug: string) => void
}

export function PackagesGrid({ packages, onAction }: PackagesGridProps) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-2">
      {packages.map((pkg) => (
        <div key={pkg.id} className="h-full">
          <PackageCard
            title={pkg.title}
            location={pkg.location}
            duration={`${pkg.duration} Days`}
            price={`$${pkg.price.toLocaleString()}`}
            image={pkg.image}
            badge={pkg.badge}
            badgeVariant={pkg.badge === "Best Seller" ? "orange" : "blue"}
            rating={pkg.rating}
            tags={Array.from(
              new Set([
                pkg.category,
                ...pkg.tags.map(
                  (t: string) => t.charAt(0) + t.slice(1).toLowerCase()
                ),
              ])
            )}
            variant="detailed"
            onAction={() => onAction(pkg.slug)}
          />
        </div>
      ))}
    </div>
  )
}
