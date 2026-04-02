"use client"

import { CircleUser } from "lucide-react"
import Link from "next/link"

function Navbar() {
  return (
    <div className="flex items-center justify-between border-b bg-background px-6 py-4">
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

      {/* Right: Profile / Link */}
      <Link
        href="#"
        className="rounded-full p-2 text-muted-foreground transition-all duration-200 hover:bg-accent hover:text-foreground"
      >
        <CircleUser className="h-6 w-6" />
      </Link>
    </div>
  )
}

export { Navbar }
