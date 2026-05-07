import { Heart, MapPin, Share2, Star } from "lucide-react"

import { Button } from "@/components/ui/button"

import type { PackageDetailData } from "@/types/packages"
import { PackageHeroGalleryCard } from "./package-hero-gallery-card"

type PackageDetailHeroProps = {
  data: PackageDetailData
}

const PLACEHOLDER_IMAGE = {
  id: "placeholder",
  src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=2070",
  alt: "Package image placeholder",
  title: "Adventure awaits",
  featured: true,
}

export function PackageDetailHero({ data }: PackageDetailHeroProps) {
  const gallery = data.gallery.length > 0 ? data.gallery : [PLACEHOLDER_IMAGE]
  const [featuredImage, ...secondaryImages] = gallery

  return (
    <section className="mb-12">
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="mb-2 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-secondary px-4 py-1 text-xs font-bold tracking-[0.18em] text-secondary-foreground uppercase">
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
            {data.title || "Package Title"}
          </h1>
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

      <div className="grid h-auto grid-cols-1 gap-4 md:h-125 md:grid-cols-4 md:grid-rows-2">
        <PackageHeroGalleryCard
          image={featuredImage}
          showOverlay
          className="min-h-80 md:col-span-2 md:row-span-2"
        />

        {secondaryImages.slice(0, 2).map((image) => (
          <PackageHeroGalleryCard
            key={image.id}
            image={image}
            className="min-h-45"
          />
        ))}

        <PackageHeroGalleryCard
          image={secondaryImages[2] || (secondaryImages.length > 0 ? undefined : PLACEHOLDER_IMAGE)}
          className="min-h-55 md:col-span-2"
        >
          <Button
            type="button"
            variant="secondary"
            className="absolute right-4 bottom-4 bg-surface-container-lowest/95 text-primary shadow-[var(--shadow-ambient)] backdrop-blur"
          >
            View All Photos
          </Button>
        </PackageHeroGalleryCard>
      </div>
    </section>
  )
}
