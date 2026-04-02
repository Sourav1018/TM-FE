import { ArrowRight, CircleHelp, Compass } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

type BookingsPromoSectionProps = {
  items: {
    id: string
    title: string
    description: string
    actionLabel: string
    tone: "primary" | "secondary"
  }[]
}

export function BookingsPromoSection({ items }: BookingsPromoSectionProps) {
  const [groupTrip, support] = items

  return (
    <section className="mt-24">
      <h2 className="mb-8 text-2xl font-bold">
        Explore more for your next journey
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card className="group relative overflow-hidden rounded-[2rem] border-none bg-primary p-12 text-primary-foreground shadow-none md:col-span-2">
          <div className="relative z-10 max-w-xl">
            <h3 className="text-3xl font-extrabold">{groupTrip.title}</h3>
            <p className="mt-4 text-lg leading-8 text-primary-foreground/90">
              {groupTrip.description}
            </p>
            <Button
              variant="secondary"
              className="mt-8 bg-white text-primary hover:bg-white/90"
            >
              {groupTrip.actionLabel}
            </Button>
          </div>

          <Compass className="absolute -right-10 -bottom-10 h-48 w-48 text-white/15 transition-transform duration-700 group-hover:scale-110" />
        </Card>

        <Card className="rounded-[2rem] border-none bg-secondary p-8 text-secondary-foreground shadow-none">
          <CircleHelp className="mb-4 h-10 w-10" />
          <h4 className="text-2xl font-bold">{support.title}</h4>
          <p className="mt-3 text-lg leading-8 text-secondary-foreground/80">
            {support.description}
          </p>
          <Button
            variant="link"
            className="mt-10 h-auto px-0 text-base font-bold text-secondary-foreground no-underline hover:no-underline"
          >
            {support.actionLabel}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Card>
      </div>
    </section>
  )
}
