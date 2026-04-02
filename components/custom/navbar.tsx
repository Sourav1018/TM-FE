"use client"

import { CircleUser, Menu } from "lucide-react"
import Link from "next/link"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Packages", href: "/packages" },
  { label: "My Bookings", href: "/bookings" },
]

function Navbar() {
  return (
    <div className="flex items-center justify-between border-b bg-background px-4 py-4 md:px-6">
      {/* Left: Logo & Mobile Toggle */}
      <div className="flex items-center gap-4">
        <Sheet>
          <SheetTrigger className="rounded-full p-2 text-muted-foreground transition-all hover:bg-accent hover:text-foreground md:hidden">
            <Menu className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px]">
            <SheetHeader>
              <SheetTitle className="text-left font-heading text-xl font-bold">
                Sunlit Travels
              </SheetTitle>
            </SheetHeader>
            <div className="mt-8 flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <SheetClose key={link.href} render={<Link href={link.href} />}>
                  <span className="text-lg font-semibold transition-colors hover:text-primary">
                    {link.label}
                  </span>
                </SheetClose>
              ))}
            </div>
            <div className="mt-auto border-t pt-8">
              <Link
                href="/auth/login"
                className="flex items-center gap-3 rounded-xl bg-accent/50 p-4 font-bold transition-colors hover:bg-accent"
              >
                <CircleUser className="h-6 w-6" />
                <span>Account Login</span>
              </Link>
            </div>
          </SheetContent>
        </Sheet>

        <Link href="/" className="text-lg font-bold tracking-tight">
          Sunlit Travels
        </Link>
      </div>

      {/* Middle: Desktop Links */}
      <div className="hidden gap-8 text-sm font-semibold md:flex">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="cursor-pointer transition-colors hover:text-primary"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Right: Profile Link */}
      <Link
        href="/auth/login"
        title="Account Login"
        className="rounded-full p-2 text-muted-foreground transition-all duration-200 hover:bg-accent hover:text-foreground"
      >
        <CircleUser className="h-6 w-6" />
      </Link>
    </div>
  )
}

export { Navbar }
