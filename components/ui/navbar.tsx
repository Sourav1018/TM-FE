"use client"

import { Button } from "@/components/ui/button"

function Navbar() {
  return (
    <div className="flex items-center justify-between px-6 py-4 border-b bg-background">

      {/* Left: Logo */}
      <h1 className="text-lg font-semibold">Sunlit Travels</h1>

      {/* Middle: Links */}
      <div className="flex gap-6 text-sm font-medium">
        <span className="cursor-pointer hover:text-primary">Home</span>
        <span className="cursor-pointer hover:text-primary">Packages</span>
        <span className="cursor-pointer hover:text-primary">My Bookings</span>
      </div>

      {/* Right: Profile / Button */}
      <Button variant="primary">Login</Button>

    </div>
  )
}

export { Navbar }