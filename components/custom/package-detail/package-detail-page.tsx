import { Navbar } from "@/components/ui/navbar"

import type { PackageDetailData } from "./data"
import { PackageBookingSidebar } from "./package-booking-sidebar"
import { PackageDetailHero } from "./package-detail-hero"
import { PackageDetailTabs } from "./package-detail-tabs"
import { PackageInclusions } from "./package-inclusions"
import { PackageItinerary } from "./package-itinerary"
import { PackageOverview } from "./package-overview"
import { PackageRouteMap } from "./package-route-map"

interface PackageDetailPageProps {
  data: PackageDetailData
}

export function PackageDetailPage({ data }: PackageDetailPageProps) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 pb-12 pt-24 md:px-8">
        <PackageDetailHero data={data} />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="space-y-12 lg:col-span-2">
            <PackageDetailTabs />
            <PackageOverview data={data} />
            <PackageItinerary items={data.itinerary} />
            <PackageInclusions
              inclusions={data.inclusions}
              exclusions={data.exclusions}
            />
            <PackageRouteMap
              image={{
                src: data.gallery[3].src,
                alt: "Stylized travel route across the Algarve coast",
              }}
              stops={data.mapStops}
            />

            <section id="policies" className="space-y-4">
              <h2 className="text-2xl font-extrabold">Policies</h2>
              <p className="max-w-3xl text-sm leading-7 text-muted-foreground">
                Reserve with a 20% deposit, complete your balance 30 days before
                departure, and enjoy flexible changes subject to local supplier
                availability. Travel insurance remains mandatory for all guests.
              </p>
            </section>
          </div>

          <div className="lg:col-span-1">
            <PackageBookingSidebar data={data} />
          </div>
        </div>
      </main>
    </div>
  )
}
