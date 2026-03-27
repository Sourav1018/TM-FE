"use client"

import { CircleUser } from "lucide-react"
import Link from "next/link"

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

      {/* Right: Profile / Link */}
      <Link href="#" className="p-2 rounded-full hover:bg-accent text-muted-foreground hover:text-foreground transition-all duration-200">
        <CircleUser className="w-6 h-6" />
      </Link>

    </div>
  )
}

export { Navbar }