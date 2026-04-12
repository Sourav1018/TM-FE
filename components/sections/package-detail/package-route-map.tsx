import Image from "next/image"
import { MapPin } from "lucide-react"

import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

import type { PackageMapStop } from "@/types/packages"

type PackageRouteMapProps = {
  image: {
    src: string
    alt: string
  }
  stops: PackageMapStop[]
}

export function PackageRouteMap({ image, stops }: PackageRouteMapProps) {
  return (
    <section id="map" className="space-y-4">
      <h2 className="text-2xl font-extrabold">Our Route</h2>

      <Card className="relative h-[400px] overflow-hidden rounded-xl border-none bg-surface-container-high shadow-none">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 66vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-tr from-background/35 via-transparent to-background/20" />
        <div className="absolute top-[46%] left-[42%] h-1 w-[22%] rotate-[24deg] rounded-full border-t-4 border-dashed border-primary/70" />

        {stops.map((stop) => {
          const isPrimary = stop.tone !== "tertiary"

          return (
            <div
              key={stop.id}
              className={cn("absolute", stop.topClassName, stop.leftClassName)}
            >
              <div
                className={cn(
                  "absolute -top-10 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-bold text-white shadow-lg",
                  isPrimary ? "bg-primary" : "bg-tertiary"
                )}
              >
                {stop.label} ({stop.description})
              </div>
              <MapPin
                className={cn(
                  "h-9 w-9",
                  isPrimary
                    ? "fill-primary text-primary"
                    : "fill-tertiary text-tertiary"
                )}
              />
            </div>
          )
        })}
      </Card>
    </section>
  )
}
