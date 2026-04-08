import { Sidebar } from "@/components/sections/admin/sidebar"

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex min-h-screen bg-[#F7F9F9]">
      <Sidebar />
      <main className="ml-72 flex-1 px-8 py-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          {children}
        </div>
      </main>
    </div>
  )
}
