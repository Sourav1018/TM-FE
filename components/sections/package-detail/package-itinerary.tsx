import type { PackageDetailData } from "@/types/packages"
import { PackageItineraryItem } from "./package-itinerary-item"

type PackageItineraryProps = {
  items: PackageDetailData["itinerary"]
}

export function PackageItinerary({ items }: PackageItineraryProps) {
  return (
    <section id="itinerary" className="space-y-8">
      <h2 className="text-2xl font-extrabold">Day-wise Itinerary</h2>

      <div className="relative ml-4 border-l-2 border-dashed border-border">
        {items.map((item, index) => (
          <PackageItineraryItem
            key={item.day}
            item={item}
            isLast={index === items.length - 1}
          />
        ))}
      </div>
    </section>
  )
}
