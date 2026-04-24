import { cn } from "@/lib/utils"
import { Info } from "lucide-react"

type EditorTipProps = {
  children: React.ReactNode
  className?: string
  tone?: "primary" | "emerald"
}

export function EditorTip({ children, className, tone = "primary" }: EditorTipProps) {
  const tones = {
    primary: "border-primary-container/20 bg-primary-container/5 text-primary",
    emerald: "border-emerald-500/20 bg-emerald-500/5 text-emerald-800",
  }
  
  const iconBg = {
    primary: "bg-primary",
    emerald: "bg-emerald-600",
  }

  return (
    <div className={cn("flex items-center gap-4 rounded-3xl border p-5 text-sm", tones[tone], className)}>
      <div className={cn("flex h-6 w-6 shrink-0 items-center justify-center rounded-full", iconBg[tone])}>
        <Info className="h-3.5 w-3.5 text-white" />
      </div>
      <div className="flex-1">
        {children}
      </div>
    </div>
  )
}
