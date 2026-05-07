import { create } from "zustand"
import { PackageDetailData, PackageGalleryImage, PackageItineraryDay, PackageListItem } from "@/types/packages"

export type PackageEditorState = {
  data: PackageDetailData
  currentStep: number
  
  // Actions
  setData: (data: Partial<PackageDetailData>) => void
  setStep: (step: number) => void
  nextStep: () => void
  prevStep: () => void
  
  // Specific update helpers
  updateGallery: (images: PackageGalleryImage[]) => void
  updateItinerary: (days: PackageItineraryDay[]) => void
  updateInclusions: (items: string[]) => void
  updateExclusions: (items: string[]) => void
  reset: () => void
}

const initialData: PackageDetailData = {
  slug: "",
  title: "",
  tags: [],
  rating: 5.0,
  reviewCount: 0,
  badge: "New",
  description: "",
  days: 0,
  nights: 0,
  groupSize: "",
  activityLevel: "",
  language: "English",
  pricePerPerson: 0,
  savingsLabel: "",
  cancellationPolicy: "Free cancellation up to 30 days before departure",
  defaultTravelDate: new Date().toISOString().split('T')[0],
  defaultGuests: 2,
  gallery: [],
  quickFacts: [],
  itinerary: [],
  inclusions: [],
  exclusions: [],
  mapStops: [],
  pricingLines: [],
  trustBadges: [],
  category: "",
  minGuests: 1,
  maxGuests: 10
}

export const usePackageEditor = create<PackageEditorState>((set) => ({
  data: initialData,
  currentStep: 1,

  setData: (newData) => set((state) => ({
    data: { ...state.data, ...newData }
  })),

  setStep: (step) => set({ currentStep: step }),

  nextStep: () => set((state) => ({ currentStep: state.currentStep + 1 })),
  
  prevStep: () => set((state) => ({ currentStep: Math.max(1, state.currentStep - 1) })),

  updateGallery: (images) => set((state) => ({
    data: { ...state.data, gallery: images }
  })),

  updateItinerary: (days) => set((state) => ({
    data: { ...state.data, itinerary: days }
  })),

  updateInclusions: (items) => set((state) => ({
    data: { 
      ...state.data, 
      inclusions: items.map((label, id) => ({ id: String(id), label })) 
    }
  })),

  updateExclusions: (items) => set((state) => ({
    data: { 
      ...state.data, 
      exclusions: items.map((label, id) => ({ id: String(id), label })) 
    }
  })),

  reset: () => set({ data: initialData, currentStep: 1 })
}))
