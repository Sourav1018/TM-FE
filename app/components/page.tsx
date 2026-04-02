"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/custom/navbar"
import {
  PackageCard,
  PackageCardSkeleton,
} from "@/components/custom/package-card"

export default function ComponentsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <div className="flex flex-col gap-16 bg-white p-6 md:p-12">
        {/* Package Cards Showcase */}
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-bold text-[#1D1B20]">Package Cards</h2>
          <div className="flex h-fit flex-wrap gap-8 pb-8">
            {/* Santorini - Simple Variant */}
            <PackageCard
              title="Santorini, Greece"
              location="Greece"
              duration="7 Days / 6 Nights"
              price="$1,250"
              image="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80&w=800"
              badge="BEST SELLER"
              badgeVariant="blue"
              variant="simple"
              className="h-[26rem] w-[18rem]"
            />

            {/* Swiss Alps - Detailed Variant */}
            <PackageCard
              title="Swiss Alps Explorer"
              location="Switzerland"
              duration="7 Days"
              tags={["HIKING", "MOUNTAIN", "PHOTOGRAPHY"]}
              price="$1,850"
              priceSuffix="/person"
              priceLabel="Starting from"
              image="https://images.unsplash.com/photo-1531310197839-ccf54634509e?auto=format&fit=crop&q=80&w=800"
              badge="BEST SELLER"
              badgeVariant="orange"
              rating={4.9}
              variant="detailed"
              isFavorite={true}
              className="w-[24rem]"
              actionLabel="Details"
              onClick={() => console.log("Card clicked!")}
              onAction={(e) => {
                e.stopPropagation()
                console.log("Action button clicked!")
              }}
              onFavoriteToggle={(fav) => console.log("Favorite toggled:", fav)}
            />
          </div>
        </div>

        {/* Buttons section */}
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-bold text-[#1D1B20]">Buttons</h2>
          <div className="flex flex-wrap items-center gap-4 rounded-[2rem] border bg-slate-50 p-8">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="inverted">Inverted</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="yellow">Yellow</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
        </div>

        {/* Card section */}
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-bold text-[#1D1B20]">Cards</h2>
          <Card className="w-80 rounded-[2rem] border-none bg-slate-50 p-2">
            <CardContent className="p-6">
              <CardTitle className="text-2xl font-bold">Goa Trip</CardTitle>
              <p className="mt-1 font-medium text-muted-foreground">
                3 Days / 2 Nights
              </p>

              {/* Button inside card */}
              <Button variant="primary" className="mt-6 w-full">
                View Details
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Input test */}
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-bold text-[#1D1B20]">Inputs</h2>
          <div className="flex w-80 flex-col gap-4">
            <Input
              placeholder="Enter your email"
              className="h-12 rounded-2xl px-6"
            />
          </div>
        </div>

        {/* Badge test */}
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-bold text-[#1D1B20]">Badges</h2>
          <div className="flex items-center gap-3">
            <Badge variant="confirmed" className="px-4 py-1">
              Confirmed
            </Badge>
            <Badge variant="pending" className="px-4 py-1">
              Pending
            </Badge>
            <Badge variant="cancelled" className="px-4 py-1">
              Cancelled
            </Badge>
          </div>
        </div>

        {/* Skeleton Section */}
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-bold text-[#1D1B20]">
            Skeleton Loaders
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-4">
              <p className="text-sm font-medium text-muted-foreground">
                Package Card Skeleton
              </p>
              <PackageCardSkeleton className="w-[380px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
