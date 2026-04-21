"use client"

import { LucideIcon, TrendingUp } from "lucide-react"
import { cn } from "@/lib/utils"

export type KPICardProps = {
  title: string
  value: string
  icon: LucideIcon
  iconBg?: string
  trend?: string
  trendColor?: "positive" | "negative" | "neutral"
  extraStatValue?: string
  extraStatLabel?: string
  subtitle?: string | React.ReactNode
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

  return (
    <div className={cn(
      "group relative flex flex-col gap-6 overflow-hidden p-8 transition-all duration-300",
      isDark
        ? "rounded-3xl bg-primary text-white shadow-lg"
        : "rounded-[2.5rem] bg-white text-foreground shadow-sm shadow-black/[0.03] hover:shadow-md"
    )}>
      {/* Top Row: Icon and (Trend Pill OR Extra Stat OR Dynamic Label) */}
      <div className="flex items-center justify-between">
        <div className={cn(
          "flex h-14 w-14 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-105",
          isDark ? "bg-white/20 text-white" : (iconBg || "bg-primary/10 text-primary")
        )}>
          <Icon className="h-8 w-8" />
        </div>

        <div className="flex flex-col items-end text-right justify-center h-16">
          {extraStatValue ? (
            <>
              <p className={cn("text-xs font-bold uppercase tracking-widest", mutedTextColor)}>
                {extraStatLabel}
              </p>
              <p className={cn("text-2xl font-bold mt-0.5", isDark ? "text-white" : "text-[#80843E]")}>
                {extraStatValue}
              </p>
            </>
          ) : (trend && !isDark) ? (
            <div className={cn(
              "flex items-center gap-1 rounded-full px-4 py-2 text-xs font-bold",
              trendColor === "positive" ? "bg-emerald-50 text-emerald-600" : "bg-muted text-muted-foreground"
            )}>
              <TrendingUp className="h-4 w-4" />
              {trend}
            </div>
          ) : (
            <p className={cn("text-sm font-bold uppercase tracking-widest", mutedTextColor)}>
              {extraStatLabel || (isDark ? "This Month" : "")}
            </p>
          )}
        </div>
      </div>

      {/* Middle Section: Title and Value */}
      <div className="flex flex-col gap-2 mt-2">
        <p className={cn("text-lg font-bold transition-colors opacity-90", mutedTextColor)}>
          {title}
        </p>
        <h3 className={cn("font-heading text-5xl font-bold tracking-tight", textColor)}>
          {value}
        </h3>
      </div>

      {/* Bottom Section: Progress Bar, Subtitle, or Gradient Trend */}
      <div className="mt-2 space-y-4">
        {progress !== undefined && (
          <div className="h-3 w-full overflow-hidden rounded-full bg-muted/20">
            <div
              className={cn("h-full transition-all duration-1000", isDark ? "bg-white" : "bg-primary-container")}
              style={{ width: `${progress}%` }}
            />
          </div>
        )}

        {(subtitle || (isDark && trend)) && (
          <p className={cn("text-base font-bold flex items-center gap-2", mutedTextColor)}>
            {isDark && trend && <span className="h-2 w-2 rounded-full bg-yellow-400"></span>}
            {isDark ? (trend || subtitle) : subtitle}
          </p>
        )}
      </div>

      {/* Decoration for gradient variant */}
      {isDark && (
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
      )}
    </div>
  )
}
