import type { PackageDetailData } from "./types"
import { PackageFactCard } from "./package-fact-card"

type PackageOverviewProps = {
  data: PackageDetailData
}

export function PackageOverview({ data }: PackageOverviewProps) {
  return (
    <section id="overview" className="pt-4">
      <h2 className="text-2xl font-extrabold">Experience the Golden Coast</h2>
      <p className="mt-4 max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">
        {data.description}
      </p>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {data.quickFacts.map((fact) => (
          <PackageFactCard key={fact.id} fact={fact} />
        ))}
      </div>
    </section>
  )
}
