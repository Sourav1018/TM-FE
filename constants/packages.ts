import { Package } from "@/types/packages"

export const INITIAL_PACKAGES: Package[] = [
  {
    id: 1,
    name: "Maldives Azure Escape",
    category: "Luxury Resort • All-Inclusive",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=100&h=100&fit=crop",
    price: "$2,499",
    duration: "7 Days",
    status: "ACTIVE",
  },
  {
    id: 2,
    name: "Swiss Alp Expedition",
    category: "Mountain Adventure • Guided",
    image: "https://images.unsplash.com/photo-1531310197839-ccf54634509e?w=100&h=100&fit=crop",
    price: "$1,850",
    duration: "5 Days",
    status: "DRAFT",
  },
  {
    id: 3,
    name: "Golden Triangle Heritage",
    category: "Cultural Tour • Heritage",
    image: "https://images.unsplash.com/photo-1524492707947-2f85a208f7aa?w=100&h=100&fit=crop",
    price: "$1,200",
    duration: "10 Days",
    status: "ACTIVE",
  },
  {
    id: 4,
    name: "Classic Amalfi Coast (Old)",
    category: "Archived 2023",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=100&h=100&fit=crop",
    price: "$3,100",
    duration: "14 Days",
    status: "ARCHIVED",
  },
  {
    id: 5,
    name: "Santorini Sunset Cruise",
    category: "Leisure • Romantic",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=100&h=100&fit=crop",
    price: "$850",
    duration: "3 Days",
    status: "ACTIVE",
  },
  {
    id: 6,
    name: "Tokyo Neon Nights",
    category: "Urban • Nightlife",
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=100&h=100&fit=crop",
    price: "$1,400",
    duration: "4 Days",
    status: "DRAFT",
  },
]

export const PACKAGE_TABS = ["Active", "Drafts", "Archived"]
