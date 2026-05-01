import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type EditorStepCardProps = {
  children: React.ReactNode
  className?: string
  contentClassName?: string
  isScrollable?: boolean
}

export function EditorStepCard({ 
  children, 
  className,
  contentClassName,
  isScrollable = false
}: EditorStepCardProps) {
  return (
    <Card className={cn("rounded-lg bg-white p-6 sm:p-12 lg:p-16 shadow-sm border border-border/40 overflow-hidden", className)}>
      <div className={cn(
        "flex flex-col gap-10",
        isScrollable && "overflow-y-auto max-h-[calc(100vh-400px)] pr-2 custom-scrollbar",
        contentClassName
      )}>
        {children}
      </div>
    </Card>
  )
}
