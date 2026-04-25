import { cn } from "@/lib/utils"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Info, LucideIcon } from "lucide-react"

type CustomAlertProps = {
  children: React.ReactNode
  className?: string
  tone?: "primary" | "emerald" | "amber" | "rose"
  icon?: LucideIcon
}

export function CustomAlert({ 
  children, 
  className, 
  tone = "primary",
  icon: Icon = Info
}: CustomAlertProps) {
  const tones = {
    primary: {
      alert: "border-primary-container/20 bg-primary-container/5 text-primary",
      icon: "bg-primary"
    },
    emerald: {
      alert: "border-emerald-500/20 bg-emerald-500/5 text-emerald-800",
      icon: "bg-emerald-600"
    },
    amber: {
      alert: "border-amber-500/20 bg-amber-500/5 text-amber-800",
      icon: "bg-amber-600"
    },
    rose: {
      alert: "border-rose-500/20 bg-rose-500/5 text-rose-800",
      icon: "bg-rose-600"
    },
  }

  return (
    <Alert className={cn("rounded-2xl p-5 flex items-center gap-4 border", tones[tone].alert, className)}>
      <div className={cn("flex h-6 w-6 shrink-0 items-center justify-center rounded-full", tones[tone].icon)}>
        <Icon className="h-3.5 w-3.5 text-white" />
      </div>
      <AlertDescription className="text-sm font-medium flex-1">
        {children}
      </AlertDescription>
    </Alert>
  )
}
