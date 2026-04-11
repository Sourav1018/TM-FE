import { AdminNav } from "@/components/sections/admin/admin-nav"
import { LayoutProps } from "@/types/layout"

export default function AdminLayout({
  children,
}: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-[#F7F9F9] lg:flex-row">
      <AdminNav />
      <main className="flex-1 px-4 py-8 lg:ml-72 lg:px-12 lg:py-10">
        <div className="mx-auto max-w-7xl">
          {children}
        </div>
      </main>
    </div>
  )
}
