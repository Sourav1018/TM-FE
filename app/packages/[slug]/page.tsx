import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { getAllPackageDetails, getPackageDetailBySlug } from "@/mock/packages"
import { PackageDetailPage } from "@/components/sections/package-detail/package-detail-page"

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

  return <PackageDetailPage data={pkg} />
}
