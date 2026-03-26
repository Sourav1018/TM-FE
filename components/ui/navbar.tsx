"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

function Navbar() {
  return (
    <div className="flex items-center justify-between px-6 py-4 border-b bg-background">

      {/* Left: Logo */}
      <Link href="/" className="text-lg font-semibold">
        Sunlit Travels
      </Link>

      {/* Middle: Links */}
      <div className="flex gap-6 text-sm font-medium">
        <Link href="/" className="cursor-pointer hover:text-primary">
          Home
        </Link>
        <Link href="/packages" className="cursor-pointer hover:text-primary">
          Packages
        </Link>
        <Link href="/bookings" className="cursor-pointer hover:text-primary">
          My Bookings
        </Link>
      </div>

      {/* Right: Profile / Button */}
      <Button variant="primary">Login</Button>

    </div>
  )
}

export { Navbar }