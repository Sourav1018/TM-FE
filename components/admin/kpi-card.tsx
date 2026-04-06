"use client"

import { LucideIcon, TrendingUp } from "lucide-react"
import { cn } from "@/lib/utils"

interface KPICardProps {
  title: string
  value: string
  icon: LucideIcon
  iconBg?: string
  trend?: string
  trendColor?: "positive" | "negative" | "neutral"
  extraStatValue?: string
  extraStatLabel?: string
  subtitle?: string
  variant?: "default" | "gradient"
  progress?: number
}

export function KPICard({
  title,
  value,
  icon: Icon,
  iconBg,
  trend,
  trendColor = "neutral",
  extraStatValue,
  extraStatLabel,
  subtitle,
  variant = "default",
  progress,
}: KPICardProps) {
  const isDark = variant === "gradient"
  const textColor = isDark ? "text-white" : "text-foreground"
  const mutedTextColor = isDark ? "text-white/80" : "text-muted-foreground"

  if (variant === "gradient") {
    return (
      <div className="group relative overflow-hidden rounded-3xl bg-[#006085] p-8 text-white shadow-lg transition-all duration-300">
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white">
              <Icon className="h-6 w-6" />
            </div>
            <p className="text-sm font-bold uppercase tracking-widest opacity-80">This Month</p>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-base font-semibold opacity-90">{title}</p>
            <h3 className={cn("font-heading text-4xl font-bold tracking-tight", textColor)}>{value}</h3>
          </div>

          {trend && (
            <p className={cn("flex items-center gap-2 text-sm font-semibold", mutedTextColor)}>
              <span className="h-2 w-2 rounded-full bg-yellow-400"></span>
              {trend}
            </p>
          )}
        </div>

        {/* Decoration: Stack of banknotes */}
        <div className="absolute -bottom-2 -right-2 opacity-10 pointer-events-none text-white">
          <svg width="140" height="100" viewBox="0 0 140 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            <rect x="40" y="40" width="80" height="50" rx="8" />
            <circle cx="80" cy="65" r="10" />
            <rect x="25" y="25" width="80" height="50" rx="8" />
            <circle cx="65" cy="50" r="10" />
            <rect x="10" y="10" width="80" height="50" rx="8" />
            <circle cx="50" cy="35" r="10" />
          </svg>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-6 rounded-[2.5rem] bg-white p-8 shadow-sm shadow-black/[0.03] transition-all duration-300 hover:shadow-md">
      <div className="flex items-start justify-between">
        <div className={cn("flex h-16 w-16 items-center justify-center rounded-full", iconBg || "bg-primary/10")}>
          <Icon className={cn("h-8 w-8", iconBg ? "text-primary/80" : "text-primary")} />
        </div>
        
        {trend && (
          <div className={cn(
            "flex items-center gap-1 rounded-full px-4 py-2 text-xs font-bold",
            trendColor === "positive" ? "bg-emerald-50 text-emerald-600" : "bg-muted text-muted-foreground"
          )}>
            <TrendingUp className="h-4 w-4" />
            {trend}
          </div>
        )}

        {extraStatValue && (
          <div className="flex flex-col items-end text-right">
            <p className="text-xs font-bold text-foreground opacity-80 uppercase tracking-tight">{extraStatLabel}</p>
            <p className="text-2xl font-bold text-[#80843E]">{extraStatValue}</p>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-2 mt-2">
        <p className="text-lg font-bold text-muted-foreground opacity-80">{title}</p>
        <h3 className="font-heading text-5xl font-bold tracking-tight text-foreground">{value}</h3>
      </div>

      <div className="mt-2">
        {progress !== undefined && (
          <div className="h-3 w-full overflow-hidden rounded-full bg-[#E8ECEE]">
            <div 
              className="h-full bg-[#00AEEF] transition-all duration-1000" 
              style={{ width: `${progress}%` }}
            />
          </div>
        )}

        {subtitle && (
          <p className="text-base font-bold text-muted-foreground opacity-80">{subtitle}</p>
        )}
      </div>
    </div>
  )
}
