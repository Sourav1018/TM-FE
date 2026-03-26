export interface PackageGalleryImage {
  id: string
  src: string
  alt: string
  title?: string
  featured?: boolean
}

export interface PackageQuickFact {
  id: string
  label: string
  value: string
  icon: "calendar" | "users" | "activity" | "globe"
}

export interface PackageItineraryDay {
  day: number
  title: string
  description: string
  highlights: string[]
  isActive?: boolean
}

export interface PackageListItem {
  id: string
  label: string
}

export interface PackageMapStop {
  id: string
  label: string
  description: string
  topClassName: string
  leftClassName: string
  tone?: "primary" | "tertiary"
}

export interface PackagePricingLine {
  id: string
  label: string
  value: string
}

export interface PackageTrustBadge {
  id: string
  label: string
  icon: "shield" | "badge"
  tone: "warning" | "info"
}

export interface PackageDetailData {
  slug: string
  title: string
  location: string
  category: string
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
}

export const algarveCoastalEscape: PackageDetailData = {
  slug: "algarve-coastal-escape",
  title: "Algarve Coastal Escape",
  location: "Portugal, Faro District",
  category: "Best Seller",
  rating: 4.9,
  reviewCount: 124,
  badge: "Best Seller",
  description:
    "The Algarve is more than just a beach destination. This seven-day escape blends dramatic limestone cliffs, hidden sea caves, boutique stays, and intimate local experiences into one polished coastal itinerary.",
  duration: "7 Days",
  groupSize: "Max 12",
  activityLevel: "Moderate",
  language: "English",
  pricePerPerson: 1899,
  savingsLabel: "Save 15%",
  cancellationPolicy: "Free cancellation up to 30 days before",
  defaultTravelDate: "2026-09-15",
  defaultGuests: 2,
  gallery: [
    {
      id: "hero-main",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3PXu8pnevfj3NV27zdZ7o60TjT7_icp2bgDJHsz_VKqfXjzbwySKPcPglp7zRV3kX-g1rl5-uGAyu2vhzzPTGnFAWyOjThA93jkqsETLQkQHp4_o8h53wMosNAGHec5wgF3ml81_N28vYHJpJmanwsBbFEpFAzJLYddzqL2pKgP4FXBWZH7wP2kS3t3VGVPD9CTpPBNjRG_zN5NDRJPOq6fogSqCnN9rZUgmHIUfdAYKsYR5e99AStIinUxfKaV8p3ZAldmOFNaY",
      alt: "Golden limestone cliffs and turquoise water in Algarve",
      title: "Benagil Sea Cave Expedition",
      featured: true,
    },
    {
      id: "village",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAp7rYzbriU6wvma8RNS7gEKUkeM1fg9x8-pC_er55dNmskTifWzh5tIkMhRQ6YjxpboRcz0RW-qkjui3OHw95yl-PIqF2UAHOL6dFZBjbLfpHv9p05TA4WRlgTkvhxDXrZ8G0WR4xuarlvtUUbAamXuDqCrX10Rr8w2RYURVFeC0esRPoaVmW146YeNwoGInzn8SLV1HfHFSms1Zx-Vx2YoBlrGSWvs-gjYidREuxJ8fYv3VC2pLVXy07gYEhii9CcMOr3w4VqEtc",
      alt: "Traditional white houses in a Portuguese hillside village",
    },
    {
      id: "resort",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHa0gZ2f5qGc30vTWCD3P4Ff6nd3iEzF9k6kX1tINL_cvnrWY4dHUcWRcF14FVwmmo6YtH5H1ypJELQwCmZD3mmwxxMs_4Mjf1TQls_Qemq3YYqtH4ijJVhCnX6oncUoCrDyTvm2cEE7w0yqUUx6cyFBnkqWk48hvUz8CtmyfxqQPkOAsQdKTDLjDxZhoowP60EPUr8F5vsueVHLMl7jnoB4ir32OklYtFcIeR2huyfRxygZTovaInwyjG26BjWQESMuBmWwtp-FQ",
      alt: "Luxury resort pool overlooking the Atlantic Ocean",
    },
    {
      id: "boardwalk",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7MyPfQBfac2M4XGDRuyjwBx-X8QN7_B4nAJ9zcMz-Gw-KZ-koVVJgaXyo8TcpV5ra1ROT8-PZ4hueZw50WacV_uuT7TKYsWlwc02t7fuXGHECNLTYy2CsJp865c4lXhVvjUtrzIBs63jMm_1w29objB3my4OWMnXQqC_AA8h63NDPZPJQ8133YLM6MPmcz_N5OrPpdRM5_qDouzmI4EdUZVsOIvVBVlKkD7_pKOMhxVw148jt0qPLwbLjHsVINeL9NLo_n79u8Jg",
      alt: "Scenic wooden boardwalk tracing the Algarve coastline",
    },
  ],
  quickFacts: [
    { id: "duration", label: "Duration", value: "7 Days", icon: "calendar" },
    { id: "group", label: "Group Size", value: "Max 12", icon: "users" },
    { id: "activity", label: "Activity", value: "Moderate", icon: "activity" },
    { id: "language", label: "Language", value: "English", icon: "globe" },
  ],
  itinerary: [
    {
      day: 1,
      title: "Arrival in Faro and transfer to Lagos",
      description:
        "Meet your private driver at Faro Airport and settle into a boutique villa in Lagos before a welcome cocktail at sunset.",
      highlights: ["Dinner included", "Boutique villa"],
      isActive: true,
    },
    {
      day: 2,
      title: "Ponta da Piedade kayak tour",
      description:
        "Paddle through rock arches, sea caves, and bright lagoons with a local guide who knows the quieter inlets.",
      highlights: ["Breakfast included", "Guided coastal activity"],
    },
    {
      day: 3,
      title: "Wine tasting in Silves",
      description:
        "Head inland for a slower afternoon of vineyard stories, Portuguese varietals, and a tapas-style tasting session.",
      highlights: ["Local vineyard visit", "Regional tapas"],
    },
  ],
  inclusions: [
    { id: "stay", label: "6 nights in premium 5-star boutique accommodation" },
    { id: "meals", label: "Daily gourmet breakfast and 3 specialty dinners" },
    { id: "transfer", label: "Private airport transfers in a luxury SUV" },
    { id: "fees", label: "All entrance fees and activity permits" },
  ],
  exclusions: [
    { id: "flights", label: "International round-trip flights" },
    { id: "insurance", label: "Travel insurance (mandatory)" },
    { id: "personal", label: "Personal expenses and laundry" },
  ],
  mapStops: [
    {
      id: "lagos",
      label: "Lagos",
      description: "Stay",
      topClassName: "top-[36%]",
      leftClassName: "left-[38%]",
      tone: "primary",
    },
    {
      id: "benagil",
      label: "Benagil",
      description: "Tour",
      topClassName: "top-[54%]",
      leftClassName: "left-[58%]",
      tone: "tertiary",
    },
  ],
  pricingLines: [
    { id: "base", label: "Base Package ($1,899 x 2)", value: "$3,798" },
    { id: "vip", label: "Airport VIP Service", value: "Included" },
  ],
  trustBadges: [
    { id: "secure", label: "Secure Booking", icon: "shield", tone: "warning" },
    { id: "guides", label: "Expert Guides", icon: "badge", tone: "info" },
  ],
}
