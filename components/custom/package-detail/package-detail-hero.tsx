import { Heart, MapPin, Share2, Star } from "lucide-react"

import { Button } from "@/components/ui/button"

import type { PackageDetailData } from "./data"
import { PackageHeroGalleryCard } from "./package-hero-gallery-card"

interface PackageDetailHeroProps {
  data: PackageDetailData
}

export function PackageDetailHero({ data }: PackageDetailHeroProps) {
  const [featuredImage, ...secondaryImages] = data.gallery

  return (
    <section className="mb-12">
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="mb-2 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-secondary px-4 py-1 text-xs font-bold uppercase tracking-[0.18em] text-secondary-foreground">
              {data.badge}
            </span>
            <div className="flex items-center gap-1 text-sm font-bold text-tertiary">
              <Star className="h-4 w-4 fill-current" />
              <span>{data.rating}</span>
              <span className="font-medium text-muted-foreground">
                ({data.reviewCount} reviews)
              </span>
            </div>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            {data.title}
          </h1>

          <div className="mt-3 flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-5 w-5 text-primary" />
            <span className="font-medium">{data.location}</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button
            type="button"
            variant="secondary"
            size="icon"
            className="bg-surface-container-lowest text-primary shadow-[var(--shadow-ambient)]"
            aria-label="Share this package"
          >
            <Share2 className="h-5 w-5" />
          </Button>
          <Button
            type="button"
            variant="secondary"
            size="icon"
            className="bg-surface-container-lowest text-destructive shadow-[var(--shadow-ambient)]"
            aria-label="Save this package"
          >
            <Heart className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="grid h-auto grid-cols-1 gap-4 md:h-[500px] md:grid-cols-4 md:grid-rows-2">
        <PackageHeroGalleryCard
          image={featuredImage}
          showOverlay
          className="min-h-[320px] md:col-span-2 md:row-span-2"
        />

        {secondaryImages.slice(0, 2).map((image) => (
          <PackageHeroGalleryCard
            key={image.id}
            image={image}
            className="min-h-[180px]"
          />
        ))}

        <PackageHeroGalleryCard
          image={secondaryImages[2]}
          className="min-h-[220px] md:col-span-2"
        >
          <Button
            type="button"
            variant="secondary"
            className="absolute bottom-4 right-4 bg-surface-container-lowest/95 text-primary shadow-[var(--shadow-ambient)] backdrop-blur"
          >
            View All Photos
          </Button>
        </PackageHeroGalleryCard>
      </div>
    </section>
  )
}
