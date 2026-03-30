import Image from "next/image"

import { cn } from "@/lib/utils"

import type { PackageGalleryImage } from "./types"

type PackageHeroGalleryCardProps = {
  image: PackageGalleryImage
  className?: string
  showOverlay?: boolean
  children?: React.ReactNode
}

export function PackageHeroGalleryCard({
  image,
  className,
  showOverlay = false,
  children,
}: PackageHeroGalleryCardProps) {
  return (
    <div className={cn("group relative overflow-hidden rounded-xl", className)}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        priority={Boolean(image.featured)}
      />
      {showOverlay ? (
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-foreground/55 via-foreground/10 to-transparent p-6">
          <p className="font-medium text-white">{image.title}</p>
        </div>
      ) : null}
      {children}
    </div>
  )
}
