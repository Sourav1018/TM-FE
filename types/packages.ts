export type Package = {
  id: number
  name: string
  category: string
  image: string
  price: string
  days: number
  nights: number
  status: string
  previousStatus?: string
}

export type PACKAGE_STATUS = "ACTIVE" | "DRAFT" | "ARCHIVED"
export type PackageGalleryImage = {
  id: string
  src: string
  alt: string
  title?: string
  featured?: boolean
}

export type PackageQuickFact = {
  id: string
  label: string
  value: string
  icon: "calendar" | "users" | "activity" | "globe"
}

export type PackageItineraryDay = {
  id: string
  day: number
  title: string
  description: string
  highlights: string[]
  places: string[]
  isActive?: boolean
}

export type PackageListItem = {
  id: string
  label: string
}

export type PackageMapStop = {
  id: string
  label: string
  description: string
  topClassName: string
  leftClassName: string
  tone?: "primary" | "tertiary"
}

export type PackagePricingLine = {
  id: string
  label: string
  value: string
}

export type PackageTrustBadge = {
  id: string
  label: string
  icon: "shield" | "badge"
  tone: "warning" | "info"
}

export type PackageDetailData = {
  slug: string
  title: string
  tags: string[]
  rating: number
  reviewCount: number
  badge: string
  description: string
  days: number
  nights: number
  groupSize: string
  activityLevel: string
  language: string
  pricePerPerson: number
  savingsLabel: string
  cancellationPolicy: string
  defaultTravelDate: string
  defaultGuests: number
  gallery: PackageGalleryImage[]
  quickFacts: PackageQuickFact[]
  itinerary: PackageItineraryDay[]
  inclusions: PackageListItem[]
  exclusions: PackageListItem[]
  mapStops: PackageMapStop[]
  pricingLines: PackagePricingLine[]
  trustBadges: PackageTrustBadge[]
  category: string
  minGuests?: number
  maxGuests?: number
}

export type PackageCardData = {
  id: number
  slug: string
  title: string
  tags: string[]
  price: number
  days: number
  nights: number
  image: string
  badge?: string
  rating?: number
  description: string
  category: string
}
