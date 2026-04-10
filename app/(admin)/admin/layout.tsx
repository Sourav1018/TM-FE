import { Sidebar } from "@/components/sections/admin/sidebar"
import { MobileNav } from "@/components/sections/admin/mobile-nav"
import { LayoutProps } from "@/types/layout"

export default function AdminLayout({
  children,
}: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-[#F7F9F9] lg:flex-row">
      <Sidebar />
      <MobileNav />
      <main className="flex-1 px-4 py-8 lg:ml-72 lg:px-12 lg:py-10">
        <div className="mx-auto max-w-7xl">
          {children}
        </div>
      </main>
    </div>
  )
}
