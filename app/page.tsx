import { Navbar } from "@/components/ui/navbar"

export default function RootPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] p-6">
        <h1 className="text-4xl md:text-6xl font-bold text-[#1D1B20] text-center mb-6">
          Welcome to Travel Management
        </h1>
        <p className="text-lg text-muted-foreground text-center max-w-2xl">
          Explore our beautifully crafted travel packages and components.
        </p>
      </main>
    </div>
  )
}