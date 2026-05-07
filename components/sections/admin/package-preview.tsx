"use client"

import { usePackageEditor } from "@/store/package-editor-store"
import { PackageDetailHero } from "@/components/sections/package-detail/package-detail-hero"
import { PackageDetailTabs } from "@/components/sections/package-detail/package-detail-tabs"
import { PackageOverview } from "@/components/sections/package-detail/package-overview"
import { PackageItinerary } from "@/components/sections/package-detail/package-itinerary"
import { PackageInclusions } from "@/components/sections/package-detail/package-inclusions"
import { PackageRouteMap } from "@/components/sections/package-detail/package-route-map"
import { PackageBookingSidebar } from "@/components/sections/package-detail/package-booking-sidebar"
import { CustomAlert } from "@/components/ui/custom-alert"

export function PackagePreview() {
  const { data } = usePackageEditor()

  // Default image for route map if not enough gallery images
  const routeMapImage = data.gallery?.[3] || data.gallery?.[0] || {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=2070",
    alt: "Placeholder route map"
  }

  return (
    <div className="flex flex-col gap-8 w-full animate-in fade-in duration-500">
      <CustomAlert className="w-full text-left bg-primary/5 border-primary/20">
        <span className="font-bold">Live Preview:</span> This is how your package will look to customers. Take a moment to ensure everything is perfect.
      </CustomAlert>

      <div className="rounded-2xl border bg-background shadow-2xl overflow-hidden scale-[0.98] origin-top transition-transform hover:scale-100 duration-500">
        <div className="max-h-[80vh] overflow-y-auto custom-scrollbar">
          <main className="mx-auto max-w-7xl px-4 pt-8 pb-12 md:px-8">
            <PackageDetailHero data={data} />

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 mt-12">
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
                    src: routeMapImage.src,
                    alt: routeMapImage.alt || "Route map",
                  }}
                  stops={data.mapStops}
                />

                <section id="policies" className="space-y-4">
                  <h2 className="text-2xl font-extrabold">Policies</h2>
                  <p className="max-w-3xl text-sm leading-7 text-muted-foreground">
                    {data.cancellationPolicy || "Cancellation policy details will appear here."}
                  </p>
                </section>
              </div>

              <div className="lg:col-span-1">
                <PackageBookingSidebar data={data} />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

