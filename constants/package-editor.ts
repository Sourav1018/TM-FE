export const PACKAGE_EDITOR_STEPS = [
  { id: 1, label: "Core Details", nextLabel: "Next Step: Pricing" },
  { id: 2, label: "Pricing", nextLabel: "Next Step: Experience Builder" },
  { id: 3, label: "Experience Builder", nextLabel: "Next Step: Gallery" },
  { id: 4, label: "Gallery", nextLabel: "Next Step: Final Review" },
  { id: 5, label: "Final Review", nextLabel: "Publish Package" },
]

export const TRAVEL_CATEGORIES = [
  { value: "adventure", label: "Adventure" },
  { value: "relaxation", label: "Relaxation" },
  { value: "luxury", label: "Luxury" },
  { value: "culture", label: "Culture" },
]

export const MOCK_PLACES = [
  { id: "p1", name: "Oia Village", location: "Santorini, Greece", district: "Thira", state: "South Aegean", category: "VIEWPOINT", isPopular: true, isHiddenGem: false },
  { id: "p2", name: "Fira Town", location: "Santorini, Greece", district: "Thira", state: "South Aegean", category: "CULTURE", isPopular: true, isHiddenGem: false },
  { id: "p3", name: "Red Beach", location: "Santorini, Greece", district: "Akrotiri", state: "South Aegean", category: "BEACH", isPopular: false, isHiddenGem: true },
  { id: "p4", name: "Akrotiri Ruins", location: "Santorini, Greece", district: "Akrotiri", state: "South Aegean", category: "CULTURE", isPopular: false, isHiddenGem: true },
  { id: "p5", name: "Santorini Caldera", location: "Santorini, Greece", district: "Thira", state: "South Aegean", category: "NATURE", isPopular: true, isHiddenGem: false },
  { id: "p6", name: "Amalfi Cathedral", location: "Amalfi, Italy", district: "Salerno", state: "Campania", category: "CULTURE", isPopular: true, isHiddenGem: false },
  { id: "p7", name: "Positano Beach", location: "Positano, Italy", district: "Salerno", state: "Campania", category: "BEACH", isPopular: true, isHiddenGem: false },
]
