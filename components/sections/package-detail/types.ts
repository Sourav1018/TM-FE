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
  day: number
  title: string
  description: string
  highlights: string[]
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
  location: string
  tags: string[]
  rating: number
  reviewCount: number
  badge: string
  description: string
  duration: string
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
}

export type PackageCardData = {
  id: number
  slug: string
  title: string
  location: string
  tags: string[]
  price: number
  duration: number
  image: string
  badge?: string
  rating?: number
  description: string
  category: string
}
