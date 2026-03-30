import {
  type PackagePricingLine,
  type PackageTrustBadge,
  type PackageDetailData,
  type PackageCardData,
} from "@/components/sections/package-detail/types"

export const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDjZqgqG3IYsqoEkT1qtxDJdEnC7b4j10sJ4dLGdNB_PoQiXW6N8JKBljGzoePHxrBRYyRm_n-ApoUuXMYPJ7u438RTQpfdsiB4fbu8a3GgcEo-RncTjgIQtUhkD3fco_gCw5vtrpRad4fpVcgtlbLgKrzP3BRrql1Wduy12M3WYUD4UVusqkO83-_Tr-0QJ-xWk8FoUpFJIboC5qYNgRUCzLYP-X0p1yQlwZZvBXsMMIgqGQiwjXfULcfav1XSf1H3bUvQZJBfrsE"

export const CATEGORIES = ["Adventure", "Family", "Luxury", "Eco-Friendly"]

const trustBadges: PackageTrustBadge[] = [
  { id: "secure", label: "Secure Booking", icon: "shield", tone: "warning" },
  { id: "guides", label: "Expert Guides", icon: "badge", tone: "info" },
]

const createPricingLines = (pricePerPerson: number, guests: number, extras?: PackagePricingLine[]) => [
  {
    id: "base",
    label: `Base Package ($${pricePerPerson.toLocaleString()} x ${guests})`,
    value: `$${(pricePerPerson * guests).toLocaleString()}`,
  },
  ...(extras ?? []),
]

const packageDetailCollection: PackageDetailData[] = [
  {
    slug: "algarve-coastal-escape",
    title: "Algarve Coastal Escape",
    location: "Portugal, Faro District",
    tags: ["CULTURE", "COASTAL", "RELAX"],
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
    pricingLines: createPricingLines(1899, 2, [
      { id: "vip", label: "Airport VIP Service", value: "Included" },
    ]),
    trustBadges,
    category: "Luxury",
  },
  {
    slug: "swiss-alps-explorer",
    title: "Swiss Alps Explorer",
    location: "Switzerland, Interlaken",
    tags: ["HIKING", "MOUNTAIN", "PHOTOGRAPHY"],
    rating: 4.9,
    reviewCount: 98,
    badge: "Best Seller",
    description:
      "A scenic alpine circuit with panoramic rail rides, glacier viewpoints, and guided mountain experiences across Interlaken, Grindelwald, and Lauterbrunnen.",
    duration: "7 Days",
    groupSize: "Max 10",
    activityLevel: "Active",
    language: "English",
    pricePerPerson: 1850,
    savingsLabel: "Save 12%",
    cancellationPolicy: "Free cancellation up to 21 days before",
    defaultTravelDate: "2026-08-12",
    defaultGuests: 2,
    gallery: [
      {
        id: "hero-main",
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzCfoNB7rRgf-6TGbYrq9RYHXMgrOSPtPA8S_DwyXGWrkRf9pb4U58x6sivHrfVAIbX2x-DTC76IDtqKdn535_W6OZ1LppptFGC3cn7YWHl6uQR7mA9_Rnn3p4361SqTymSas3P-DjiQ3vaaH2tSSGHFD5umDRlOOHGrqMSot2XLBCoESnfwMYCKHWkXpy4STLHpCGiK9AvIb7tXWggtsOZ7IqdTsnJFENIZt617dZ6NPLCQEILPkEVr-BYa9A6M_71mP8UN_RNMQ",
        alt: "Snowy peaks of the Swiss Alps at noon",
        title: "Jungfrau panorama adventure",
        featured: true,
      },
      {
        id: "train",
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzCfoNB7rRgf-6TGbYrq9RYHXMgrOSPtPA8S_DwyXGWrkRf9pb4U58x6sivHrfVAIbX2x-DTC76IDtqKdn535_W6OZ1LppptFGC3cn7YWHl6uQR7mA9_Rnn3p4361SqTymSas3P-DjiQ3vaaH2tSSGHFD5umDRlOOHGrqMSot2XLBCoESnfwMYCKHWkXpy4STLHpCGiK9AvIb7tXWggtsOZ7IqdTsnJFENIZt617dZ6NPLCQEILPkEVr-BYa9A6M_71mP8UN_RNMQ",
        alt: "Swiss train crossing through alpine meadows",
      },
      {
        id: "village",
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzCfoNB7rRgf-6TGbYrq9RYHXMgrOSPtPA8S_DwyXGWrkRf9pb4U58x6sivHrfVAIbX2x-DTC76IDtqKdn535_W6OZ1LppptFGC3cn7YWHl6uQR7mA9_Rnn3p4361SqTymSas3P-DjiQ3vaaH2tSSGHFD5umDRlOOHGrqMSot2XLBCoESnfwMYCKHWkXpy4STLHpCGiK9AvIb7tXWggtsOZ7IqdTsnJFENIZt617dZ6NPLCQEILPkEVr-BYa9A6M_71mP8UN_RNMQ",
        alt: "Chalet village in the Swiss Alps",
      },
      {
        id: "trail",
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzCfoNB7rRgf-6TGbYrq9RYHXMgrOSPtPA8S_DwyXGWrkRf9pb4U58x6sivHrfVAIbX2x-DTC76IDtqKdn535_W6OZ1LppptFGC3cn7YWHl6uQR7mA9_Rnn3p4361SqTymSas3P-DjiQ3vaaH2tSSGHFD5umDRlOOHGrqMSot2XLBCoESnfwMYCKHWkXpy4STLHpCGiK9AvIb7tXWggtsOZ7IqdTsnJFENIZt617dZ6NPLCQEILPkEVr-BYa9A6M_71mP8UN_RNMQ",
        alt: "Hiking trail with Swiss mountain views",
      },
    ],
    quickFacts: [
      { id: "duration", label: "Duration", value: "7 Days", icon: "calendar" },
      { id: "group", label: "Group Size", value: "Max 10", icon: "users" },
      { id: "activity", label: "Activity", value: "Active", icon: "activity" },
      { id: "language", label: "Language", value: "English", icon: "globe" },
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive in Zurich and transfer to Interlaken",
        description:
          "Start with a smooth rail transfer into the Bernese Oberland and settle into a mountain-view hotel.",
        highlights: ["Rail pass included", "Welcome dinner"],
        isActive: true,
      },
      {
        day: 2,
        title: "Jungfraujoch summit experience",
        description:
          "Ride Europe’s highest railway and spend the day exploring glacier tunnels and panoramic decks.",
        highlights: ["Guide included", "Premium summit access"],
      },
      {
        day: 3,
        title: "Lauterbrunnen valley hike",
        description:
          "Walk through waterfall-lined trails and enjoy a relaxed alpine lunch in a car-free village.",
        highlights: ["Easy-moderate hike", "Lunch included"],
      },
    ],
    inclusions: [
      { id: "stay", label: "6 nights in premium alpine accommodation" },
      { id: "transport", label: "Regional rail transfers and scenic train tickets" },
      { id: "meals", label: "Daily breakfast and 2 mountain dining experiences" },
      { id: "guide", label: "Guided excursions to top alpine viewpoints" },
    ],
    exclusions: [
      { id: "flights", label: "International flights" },
      { id: "insurance", label: "Travel insurance" },
      { id: "gear", label: "Personal hiking gear and winter clothing" },
    ],
    mapStops: [
      {
        id: "interlaken",
        label: "Interlaken",
        description: "Stay",
        topClassName: "top-[40%]",
        leftClassName: "left-[40%]",
      },
      {
        id: "jungfrau",
        label: "Jungfrau",
        description: "Peak",
        topClassName: "top-[25%]",
        leftClassName: "left-[57%]",
        tone: "tertiary",
      },
    ],
    pricingLines: createPricingLines(1850, 2, [
      { id: "rail", label: "Swiss Rail Pass Upgrade", value: "Included" },
    ]),
    trustBadges,
    category: "Adventure",
  },
  {
    slug: "bali-retreat",
    title: "Bali Serenity Retreat",
    location: "Indonesia, Ubud & Uluwatu",
    tags: ["LUXURY", "WELLNESS", "BEACH"],
    rating: 5,
    reviewCount: 76,
    badge: "New",
    description:
      "Balance beachfront relaxation with jungle wellness in a curated Bali escape featuring private villas, spa rituals, temple visits, and sunset dining.",
    duration: "10 Days",
    groupSize: "Max 8",
    activityLevel: "Easy",
    language: "English",
    pricePerPerson: 2400,
    savingsLabel: "Save 10%",
    cancellationPolicy: "Free cancellation up to 14 days before",
    defaultTravelDate: "2026-10-03",
    defaultGuests: 2,
    gallery: [
      {
        id: "hero-main",
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3GIsNXw8mMFQY7dGO67mHvptn0qRH3VE4rJTP0K0HiyEoqjJiI9v-MPEfY65VAIaH-m8nTyJraksf1qlvhJ504OtmjMVUc6Zk3Q8NsFAOxb3d_AHAblNuOgy7oxWM7nifmXh8S2YFzrdvgjD2jyIZaPAvYmO9rxmX4AP7Kx32Cr7pT0AvF21C8kRlULSgHaqSldBY-aIeiX5Biz7_zKoIR6J39rjygMdOXkJs9yRaMoXME8DeNv2eIa1GNf9c7zBdsnvumkwxgyE",
        alt: "Tropical villa with infinity pool in Bali",
        title: "Private villa wellness stay",
        featured: true,
      },
      {
        id: "spa",
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3GIsNXw8mMFQY7dGO67mHvptn0qRH3VE4rJTP0K0HiyEoqjJiI9v-MPEfY65VAIaH-m8nTyJraksf1qlvhJ504OtmjMVUc6Zk3Q8NsFAOxb3d_AHAblNuOgy7oxWM7nifmXh8S2YFzrdvgjD2jyIZaPAvYmO9rxmX4AP7Kx32Cr7pT0AvF21C8kRlULSgHaqSldBY-aIeiX5Biz7_zKoIR6J39rjygMdOXkJs9yRaMoXME8DeNv2eIa1GNf9c7zBdsnvumkwxgyE",
        alt: "Bali spa and wellness treatment room",
      },
      {
        id: "temple",
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3GIsNXw8mMFQY7dGO67mHvptn0qRH3VE4rJTP0K0HiyEoqjJiI9v-MPEfY65VAIaH-m8nTyJraksf1qlvhJ504OtmjMVUc6Zk3Q8NsFAOxb3d_AHAblNuOgy7oxWM7nifmXh8S2YFzrdvgjD2jyIZaPAvYmO9rxmX4AP7Kx32Cr7pT0AvF21C8kRlULSgHaqSldBY-aIeiX5Biz7_zKoIR6J39rjygMdOXkJs9yRaMoXME8DeNv2eIa1GNf9c7zBdsnvumkwxgyE",
        alt: "Balinese temple visit at sunset",
      },
      {
        id: "beach",
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3GIsNXw8mMFQY7dGO67mHvptn0qRH3VE4rJTP0K0HiyEoqjJiI9v-MPEfY65VAIaH-m8nTyJraksf1qlvhJ504OtmjMVUc6Zk3Q8NsFAOxb3d_AHAblNuOgy7oxWM7nifmXh8S2YFzrdvgjD2jyIZaPAvYmO9rxmX4AP7Kx32Cr7pT0AvF21C8kRlULSgHaqSldBY-aIeiX5Biz7_zKoIR6J39rjygMdOXkJs9yRaMoXME8DeNv2eIa1GNf9c7zBdsnvumkwxgyE",
        alt: "Sunset beach club in Bali",
      },
    ],
    quickFacts: [
      { id: "duration", label: "Duration", value: "10 Days", icon: "calendar" },
      { id: "group", label: "Group Size", value: "Max 8", icon: "users" },
      { id: "activity", label: "Activity", value: "Easy", icon: "activity" },
      { id: "language", label: "Language", value: "English", icon: "globe" },
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival and villa check-in in Ubud",
        description:
          "Ease into Bali with a private transfer, floral welcome, and evening massage at your jungle resort.",
        highlights: ["Private transfer", "Spa welcome ritual"],
        isActive: true,
      },
      {
        day: 2,
        title: "Rice terrace walk and healing session",
        description:
          "Spend the morning among emerald terraces before joining a guided mindfulness and sound healing class.",
        highlights: ["Wellness activity", "Scenic terrace route"],
      },
      {
        day: 3,
        title: "Temple trail to Uluwatu",
        description:
          "Travel south for cliffside temple views and a signature sunset dinner overlooking the Indian Ocean.",
        highlights: ["Temple visit", "Sunset dining"],
      },
    ],
    inclusions: [
      { id: "stay", label: "9 nights in handpicked villa and coastal resort stays" },
      { id: "meals", label: "Daily breakfast plus 4 curated dining experiences" },
      { id: "spa", label: "Two premium spa and wellness treatments" },
      { id: "guide", label: "Private local guide for cultural excursions" },
    ],
    exclusions: [
      { id: "flights", label: "International airfare" },
      { id: "visa", label: "Visa fees if applicable" },
      { id: "extras", label: "Optional surf lessons and personal purchases" },
    ],
    mapStops: [
      {
        id: "ubud",
        label: "Ubud",
        description: "Stay",
        topClassName: "top-[42%]",
        leftClassName: "left-[40%]",
      },
      {
        id: "uluwatu",
        label: "Uluwatu",
        description: "Sunset",
        topClassName: "top-[67%]",
        leftClassName: "left-[62%]",
        tone: "tertiary",
      },
    ],
    pricingLines: createPricingLines(2400, 2, [
      { id: "spa", label: "Wellness Package", value: "Included" },
    ]),
    trustBadges,
    category: "Luxury",
  },
  {
    slug: "kenyan-safari-adventure",
    title: "Kenyan Safari Adventure",
    location: "Kenya, Maasai Mara",
    tags: ["WILDLIFE", "SAFARI", "ADVENTURE"],
    rating: 4.9,
    reviewCount: 89,
    badge: "Best Seller",
    description:
      "A front-row safari journey through the Maasai Mara with luxury tented camps, sunrise game drives, and unforgettable wildlife encounters guided by expert trackers.",
    duration: "6 Days",
    groupSize: "Max 10",
    activityLevel: "Moderate",
    language: "English",
    pricePerPerson: 2100,
    savingsLabel: "Save 8%",
    cancellationPolicy: "Free cancellation up to 21 days before",
    defaultTravelDate: "2026-07-18",
    defaultGuests: 2,
    gallery: [
      {
        id: "hero-main",
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLrJT0h9WDXk5AcI4PmekwgO7FtQJRrPv5FylvjhxFwipg0jXM1wG6fFc0CRexx9f_5RpicvsOkgpd5AoRupCWZ2o7P3FjqswkdsEYuoyZHVQoAfiYHbN2Abes63DwQSCwKKKYABoi5mQWzFwCTwGZDF_DQsKo6KKWAb1CpvaXI6tCxjOkVaYqhLlW8ye3P6HSOxFPf-c295UQsdHs7bhK8qYCTaXlZVYCgu2O3_Jy2XoPZ5SLrmCMczVxjiwvtdFIvcR3G2tqJO0",
        alt: "Elephant walking through Kenyan savannah at dusk",
        title: "Luxury game drive experience",
        featured: true,
      },
      {
        id: "camp",
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLrJT0h9WDXk5AcI4PmekwgO7FtQJRrPv5FylvjhxFwipg0jXM1wG6fFc0CRexx9f_5RpicvsOkgpd5AoRupCWZ2o7P3FjqswkdsEYuoyZHVQoAfiYHbN2Abes63DwQSCwKKKYABoi5mQWzFwCTwGZDF_DQsKo6KKWAb1CpvaXI6tCxjOkVaYqhLlW8ye3P6HSOxFPf-c295UQsdHs7bhK8qYCTaXlZVYCgu2O3_Jy2XoPZ5SLrmCMczVxjiwvtdFIvcR3G2tqJO0",
        alt: "Luxury tented safari camp in Kenya",
      },
      {
        id: "sunrise",
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLrJT0h9WDXk5AcI4PmekwgO7FtQJRrPv5FylvjhxFwipg0jXM1wG6fFc0CRexx9f_5RpicvsOkgpd5AoRupCWZ2o7P3FjqswkdsEYuoyZHVQoAfiYHbN2Abes63DwQSCwKKKYABoi5mQWzFwCTwGZDF_DQsKo6KKWAb1CpvaXI6tCxjOkVaYqhLlW8ye3P6HSOxFPf-c295UQsdHs7bhK8qYCTaXlZVYCgu2O3_Jy2XoPZ5SLrmCMczVxjiwvtdFIvcR3G2tqJO0",
        alt: "Safari jeep at sunrise in Maasai Mara",
      },
      {
        id: "wildlife",
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLrJT0h9WDXk5AcI4PmekwgO7FtQJRrPv5FylvjhxFwipg0jXM1wG6fFc0CRexx9f_5RpicvsOkgpd5AoRupCWZ2o7P3FjqswkdsEYuoyZHVQoAfiYHbN2Abes63DwQSCwKKKYABoi5mQWzFwCTwGZDF_DQsKo6KKWAb1CpvaXI6tCxjOkVaYqhLlW8ye3P6HSOxFPf-c295UQsdHs7bhK8qYCTaXlZVYCgu2O3_Jy2XoPZ5SLrmCMczVxjiwvtdFIvcR3G2tqJO0",
        alt: "Wildlife plains in Kenya",
      },
    ],
    quickFacts: [
      { id: "duration", label: "Duration", value: "6 Days", icon: "calendar" },
      { id: "group", label: "Group Size", value: "Max 10", icon: "users" },
      { id: "activity", label: "Activity", value: "Moderate", icon: "activity" },
      { id: "language", label: "Language", value: "English", icon: "globe" },
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Nairobi and bush flight to camp",
        description:
          "Connect from Nairobi to a luxury safari camp where your guide introduces the adventure ahead.",
        highlights: ["Bush flight", "Camp sundowner"],
        isActive: true,
      },
      {
        day: 2,
        title: "Sunrise and sunset game drives",
        description:
          "Track the Big Five with experienced guides and pause for a chef-prepared breakfast in the savannah.",
        highlights: ["Two game drives", "Bush breakfast"],
      },
      {
        day: 3,
        title: "Maasai cultural immersion",
        description:
          "Visit a local Maasai community and learn about land stewardship, traditions, and storytelling.",
        highlights: ["Cultural visit", "Community-led experience"],
      },
    ],
    inclusions: [
      { id: "stay", label: "5 nights in luxury tented safari accommodation" },
      { id: "meals", label: "All meals and safari refreshments" },
      { id: "drives", label: "Twice-daily guided game drives" },
      { id: "transfer", label: "Internal bush flights and camp transfers" },
    ],
    exclusions: [
      { id: "flights", label: "International flights to Kenya" },
      { id: "visa", label: "Visa fees and vaccination costs" },
      { id: "tips", label: "Guide gratuities and personal purchases" },
    ],
    mapStops: [
      {
        id: "mara-camp",
        label: "Camp",
        description: "Stay",
        topClassName: "top-[50%]",
        leftClassName: "left-[45%]",
      },
      {
        id: "reserve",
        label: "Reserve",
        description: "Drive",
        topClassName: "top-[34%]",
        leftClassName: "left-[62%]",
        tone: "tertiary",
      },
    ],
    pricingLines: createPricingLines(2100, 2, [
      { id: "drive", label: "Private 4x4 Safari Vehicle", value: "Included" },
    ]),
    trustBadges,
    category: "Adventure",
  },
]

export const algarveCoastalEscape = packageDetailCollection[0]

export const packageCards: PackageCardData[] = packageDetailCollection.map((pkg, index) => ({
  id: index + 1,
  slug: pkg.slug,
  title: pkg.title,
  location: pkg.location.split(",")[0],
  tags: pkg.tags,
  price: pkg.pricePerPerson,
  duration: Number.parseInt(pkg.duration, 10),
  image: pkg.gallery[0].src,
  badge: pkg.badge,
  rating: pkg.rating,
  description: pkg.description,
  category: pkg.category,
}))

export function getAllPackageDetails() {
  return packageDetailCollection
}

export function getPackageDetailBySlug(slug: string) {
  return packageDetailCollection.find((pkg) => pkg.slug === slug)
}
