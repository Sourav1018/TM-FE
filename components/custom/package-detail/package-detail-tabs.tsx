const tabs = [
  { id: "overview", label: "Overview" },
  { id: "itinerary", label: "Itinerary" },
  { id: "inclusions", label: "Inclusions" },
  { id: "map", label: "Map" },
  { id: "policies", label: "Policies" },
]

export function PackageDetailTabs() {
  return (
    <div className="sticky top-0 z-40 flex gap-8 overflow-x-auto border-b border-border bg-background/95 backdrop-blur-sm">
      {tabs.map((tab, index) => (
        <a
          key={tab.id}
          href={`#${tab.id}`}
          className={`whitespace-nowrap border-b-2 py-4 text-sm font-bold transition-colors ${
            index === 0
              ? "border-primary text-primary"
              : "border-transparent text-muted-foreground hover:text-primary"
          }`}
        >
          {tab.label}
        </a>
      ))}
    </div>
  )
}
