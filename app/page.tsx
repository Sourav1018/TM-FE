export default function RootPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="flex min-h-[calc(100vh-80px)] flex-col items-center justify-center p-6">
        <h1 className="mb-6 text-center text-4xl font-bold text-foreground md:text-6xl">
          Welcome to Travel Management
        </h1>
        <p className="max-w-2xl text-center text-lg text-muted-foreground">
          Explore our beautifully crafted travel packages and components.
        </p>
      </main>
    </div>
  )
}
