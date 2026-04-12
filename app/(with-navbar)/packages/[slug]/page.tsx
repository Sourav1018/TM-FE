import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { getAllPackageDetails, getPackageDetailBySlug } from "@/mock/packages"
import { PackageBookingSidebar } from "@/components/sections/package-detail/package-booking-sidebar"
import { PackageDetailHero } from "@/components/sections/package-detail/package-detail-hero"
import { PackageDetailTabs } from "@/components/sections/package-detail/package-detail-tabs"
import { PackageInclusions } from "@/components/sections/package-detail/package-inclusions"
import { PackageItinerary } from "@/components/sections/package-detail/package-itinerary"
import { PackageOverview } from "@/components/sections/package-detail/package-overview"
import { PackageRouteMap } from "@/components/sections/package-detail/package-route-map"

type PackageDetailRouteProps = {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return getAllPackageDetails().map((pkg) => ({
    slug: pkg.slug,
  }))
}

export async function generateMetadata({
  params,
}: PackageDetailRouteProps): Promise<Metadata> {
  const { slug } = await params
  const pkg = getPackageDetailBySlug(slug)

  if (!pkg) {
    return {
      title: "Package Not Found",
      description: "The requested travel package could not be found.",
    }
  }

  return {
    title: `${pkg.title} | Travel Packages`,
    description: pkg.description,
    openGraph: {
      title: pkg.title,
      description: pkg.description,
      images: pkg.gallery.slice(0, 1).map((image) => ({
        url: image.src,
        alt: image.alt,
      })),
    },
  }
}

export default async function PackageSlugPage({
  params,
}: PackageDetailRouteProps) {
  const { slug } = await params
  const pkg = getPackageDetailBySlug(slug)

  if (!pkg) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto max-w-7xl px-4 pt-8 pb-12 md:px-8">
        <PackageDetailHero data={pkg} />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="space-y-12 lg:col-span-2">
            <PackageDetailTabs />
            <PackageOverview data={pkg} />
            <PackageItinerary items={pkg.itinerary} />
            <PackageInclusions
              inclusions={pkg.inclusions}
              exclusions={pkg.exclusions}
            />
            <PackageRouteMap
              image={{
                src: pkg.gallery[3].src,
                alt: "Stylized travel route across the Algarve coast",
              }}
              stops={pkg.mapStops}
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
            <PackageBookingSidebar data={pkg} />
          </div>
        </div>
      </main>
    </div>
  )
}
