import Link from "next/link"
import { Globe, Languages } from "lucide-react"

export function BookingsFooter() {
  return (
    <footer className="mt-20 border-t border-border bg-surface-container-low/40 py-12 text-sm leading-relaxed">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-8 md:grid-cols-2">
        <div className="space-y-4">
          <div className="text-lg font-bold text-foreground">
            Sunlit Horizons
          </div>
          <p className="max-w-sm text-muted-foreground">
            Elevating your travel experience with curated coastal escapes and
            mindful journeys across the world&apos;s most beautiful horizons.
          </p>
          <p className="text-muted-foreground">
            © 2024 Sunlit Horizons Travel. All rights reserved.
          </p>
        </div>

        <div className="flex flex-col gap-6 md:items-end">
          <nav className="flex flex-wrap gap-x-8 gap-y-2">
            <Link
              href="#"
              className="text-muted-foreground transition-colors hover:text-primary hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-muted-foreground transition-colors hover:text-primary hover:underline"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-muted-foreground transition-colors hover:text-primary hover:underline"
            >
              Help Center
            </Link>
            <Link
              href="#"
              className="text-muted-foreground transition-colors hover:text-primary hover:underline"
            >
              Contact Us
            </Link>
          </nav>

          <div className="flex gap-4 text-primary">
            <Globe className="h-5 w-5" />
            <Languages className="h-5 w-5" />
          </div>
        </div>
      </div>
    </footer>
  )
}
