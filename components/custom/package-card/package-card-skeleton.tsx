import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"

export function PackageCardSkeleton({ className }: { className?: string }) {
  return (
    <Card
      className={cn(
        "overflow-hidden rounded-[2rem] border-none bg-white shadow-lg",
        className
      )}
    >
      {/* Image Skeleton */}
      <Skeleton className="aspect-[4/3] w-full rounded-none" />

      {/* Content Skeleton */}
      <div className="space-y-6 p-5 md:p-6">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 space-y-2">
            <Skeleton className="h-6 w-3/4 rounded-lg" />
            <Skeleton className="h-4 w-1/2 rounded-md" />
          </div>
          <Skeleton className="h-8 w-12 shrink-0 rounded-lg" />
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Skeleton className="h-5 w-5 rounded-full" />
            <Skeleton className="h-4 w-20 rounded-md" />
          </div>

          <div className="flex gap-2">
            <Skeleton className="h-7 w-16 rounded-full" />
            <Skeleton className="h-7 w-20 rounded-full" />
            <Skeleton className="h-7 w-14 rounded-full" />
          </div>
        </div>

        <div className="h-px w-full bg-border/30" />

        <div className="mt-2 flex items-end justify-between">
          <div className="space-y-2">
            <Skeleton className="h-3 w-20 rounded-sm" />
            <Skeleton className="h-8 w-24 rounded-md" />
          </div>
          <Skeleton className="h-10 w-24 rounded-full" />
        </div>
      </div>
    </Card>
  )
}
