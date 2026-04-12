import { Navbar } from "@/components/custom/navbar"

export default function WithNavbarLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <div className="sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur-sm">
        <Navbar />
      </div>
      <main className="flex-1">{children}</main>
    </>
  )
}
