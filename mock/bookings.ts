import { type BookingsPageData } from "@/types/bookings"

export const bookingsPageData: BookingsPageData = {
  title: "My Bookings",
  description:
    "Manage your upcoming journeys and revisit your past coastal memories across the horizon.",
  navItems: [
    { id: "upcoming", label: "Upcoming", count: 2 },
    { id: "past", label: "Past", count: 0 },
    { id: "cancelled", label: "Cancelled", count: 1 },
  ],
  bookings: [
    {
      id: "algarve-coastal-escape",
      label: "Premium Package",
      packageName: "Algarve Coastal Escape",
      dateRange: "Oct 14 - Oct 21, 2024",
      status: "confirmed",
      category: "upcoming",
      travelers: [
        {
          id: "traveler-1",
          name: "Ava",
          avatar:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAQGTFz7MvqCf5sgO5_KhKk7O_6BuA9PJAKO_qMGv_iy1TFog3ntK-5WCKltiV_2aUO0fmsIRmqFpjqmgbc2qoxMzU2UYuuBMBOUJlxEJOyNUGcrGHxxXEJt4QkIWMpEarwbdZYhB4N8fDfY4kR8ki0tpV90KhGG5dMd1lcXZw6guvWb1--3B_o-E3x6KYdODYpeULpvP03KVvgwaCKHVtDurn2C7Nyz-VcZXBZYh41qGAtqh4nfbSxYyj1MwYqky429o1YLAgoe41C",
        },
        {
          id: "traveler-2",
          name: "Theo",
          avatar:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDutwSxPy7zQDRdFg-hIS_F2ATWvolw1hlP1KcHJrSrzbGtLv03YK0M7xgKKMTuhkXShnBOxh2xoYhqpIBVi-xsYMzVxLrYFuW2d4sfeAp7VP-HSDHhwd2P1dYeDts-wHO62x_H-y9OrdhG_CFTA1eFaQdC5bVQCtrBQ7-YPA3Jkvg1A4KJErbKKFxMmkVokI2F0STVC1Y4I-4CzJb5qOkHAxrzcFTmrY_raDfU-sSceKUKgBiuYBoaSEqqfN_TgUrYZXk94bHp9_yY",
        },
      ],
      travelerLabel: "2 Travelers",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBwSETfrUBnxTT4eeSHKMqjZshRzHbQEjdGrRq4yUEl0ybZXPY2HvLpaUMA1uiBHuXZ3Izlwsaw9af8_jk_cEb0XgennZs3LfWNQJxmpeCUhUwEfCOnhY-KzlZ5-bomIZr78NgXtck6-UHW0O-eJM9uMXwCgqcOP0TKmFGW1DWx3-Ot70e_3DxJm65p9ADjTab0IlwWjSxA9-WIP-ywZZNoL6fFLfCSnnZ5IjA-hTEotg3cyeHvf8E7Fl1jQ1ZfHvgT6DsdH9htzBW-",
      imageAlt: "Beautiful turquoise water hitting golden cliffs",
      actionLabel: "View Details",
      actionVariant: "link",
    },
    {
      id: "santorini-sunsets-sails",
      label: "Adventure Tier",
      packageName: "Santorini Sunsets & Sails",
      dateRange: "Nov 05 - Nov 12, 2024",
      status: "pending",
      category: "upcoming",
      travelers: [
        {
          id: "traveler-3",
          name: "Mila",
          avatar:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDs_3F9V2Pps8clSOCsRA3mtq-d2Qs5L4Z2MEqP-US0kXIVuRY_U85dzPJj4dDsmzj9pgEA6ijXDfcXftyVN_0dhTCYOBvKh11jU-VOIjxdFl-nR0pWRzbcauxHZra9ESQFWbeoiZ3mZSI9qL0YJVHPb4vWcDRSRlnuqRQrtvdsPhHBjZS6JaHpLyH_N9pxBRsamtsc8lZ0G7PHTWXsNJK0zoY_Ni1MznfzmYKlXcExHSQkfSfql6c9xQ6mMGdlkJk-1ld1aVHDVn0E",
        },
      ],
      travelerLabel: "1 Traveler",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB31mIYE5f_VKYiDW8p6f_N1z-zt1Mo_QStXFUiKPOxQOH5UTBfjl0t3YAiANG4gbPxBhcL3AK0RZ7L-Gq_7kuaK-agahws1ODkISAlJPlG_0OUiUeemdhVI_2mQXZAijb0hJAPqMpQBgcbptxDm0Eytw3MNVndu9ym9Zp-59ji878_egjfc9g6pl5XxTWRB2SR6YbXS_eY_i4BV2efzfCLP-Kzdq-8Q6jMc1DECAWGJwVTw62HJk2vdXwaMhSkZQgfSOyIRF64P9lH",
      imageAlt: "Whitewashed buildings against deep blue sea at sunset",
      actionLabel: "Complete Payment",
      actionVariant: "primary",
    },
    {
      id: "bali-serenity-retreat",
      label: "Nature Retreat",
      packageName: "Bali Serenity Retreat",
      dateRange: "Dec 20 - Dec 28, 2024",
      status: "cancelled",
      category: "cancelled",
      travelers: [],
      travelerLabel: "Refund processed on Sept 28",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB85FZOubbeBIeCRgzu3bUxky9Qg1GT4ASu74ZEwXcxs_Zooq4BX3LLbRtH3YJSkkHswp_4uX21kcGzsGBs4-rN3nPFlWbkGqKYgc7_WgnVAXCI9yyL7OwCu4d0zt5iqj4bMVYCb63Oug6wq8Dw-hScwYXNRlZYiII4ZjPglCONfUvBBA5Pax_OG30AfNk_nYgu_MqSR0SZB94ezZCGGH4cPOisGdS79wklbHyIW6mTkyUPWY_XBXbSrdfOqtZiav_daVzt05q4VHhu",
      imageAlt: "Lush green garden with infinity pool and villa walkway",
      actionLabel: "Rebook Trip",
      actionVariant: "muted",
      refundNote: "Refund processed on Sept 28",
    },
  ],
  promos: [
    {
      id: "group-trip",
      title: "Planning a group trip?",
      description:
        "Save up to 15% when booking for more than 4 travelers. Our helpful concierge is ready to assist with your itinerary.",
      actionLabel: "Learn More",
      tone: "primary",
    },
    {
      id: "support",
      title: "Need Help?",
      description:
        "Our specialists are available 24/7 to adjust your bookings or answer questions.",
      actionLabel: "Chat with Support",
      tone: "secondary",
    },
  ],
}
