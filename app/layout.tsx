import { Plus_Jakarta_Sans, Be_Vietnam_Pro } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { Navbar } from "@/components/custom/navbar"

const fontSans = Be_Vietnam_Pro({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontHeading = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "flex min-h-screen flex-col font-sans antialiased",
        fontSans.variable,
        fontHeading.variable
      )}
    >
      <body className="flex min-h-screen flex-col">
        <ThemeProvider>
          <div className="sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur-sm">
            <Navbar />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
