"use client"

import { Handshake, TrendingUp, UserPlus, Calendar as CalendarIcon } from "lucide-react"
import { KPICard } from "@/components/custom/kpi-card"
import { RevenueChart } from "@/components/sections/admin/revenue-chart"
import { KPI_DATA } from "@/mock/admin-dashboard"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"
import { format, subDays } from "date-fns"
import { DateRange } from "react-day-picker"

export default function DashboardPage() {
  const [date, setDate] = useState<DateRange | undefined>({
    from: subDays(new Date(), 30),
    to: new Date(),
  })

  return (
    <div className="flex flex-col gap-10 pb-10">
      <div className="flex flex-col gap-10">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground">
              Dashboard Overview
            </h1>
            <p className="text-lg font-medium text-muted-foreground">
              Welcome back, Alex. Here&apos;s what&apos;s happening with Horizon today.
            </p>
          </div>

          <div>
            <Popover>
              <PopoverTrigger className="flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-bold shadow-sm shadow-black/[0.1] transition-all hover:shadow-md cursor-pointer border-none outline-none">
                <CalendarIcon className="h-5 w-5 text-primary shrink-0" />
                <span>
                  {date?.from ? (
                    date.to ? (
                      <>
                        {format(date.from, "LLL dd, y")} -{" "}
                        {format(date.to, "LLL dd, y")}
                      </>
                    ) : (
                      format(date.from, "LLL dd, y")
                    )
                  ) : (
                    "Pick a date"
                  )}
                </span>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="end">
                <Calendar
                  mode="range"
                  defaultMonth={date?.from}
                  selected={date}
                  onSelect={setDate}
                  numberOfMonths={2}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        {/* KPI Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <KPICard
            title="Total Leads"
            value={KPI_DATA.totalLeads.value}
            icon={UserPlus}
            iconBg="bg-[#D3E9FA]"
            trend={KPI_DATA.totalLeads.trend}
            trendColor={KPI_DATA.totalLeads.trendColor}
            progress={KPI_DATA.totalLeads.progress}
          />
          <KPICard
            title="Converted Leads"
            value={KPI_DATA.convertedLeads.value}
            icon={Handshake}
            iconBg="bg-[#FFE68C]"
            extraStatLabel="Conversion Rate"
            extraStatValue={KPI_DATA.convertedLeads.conversionRate}
            subtitle={`Target: ${KPI_DATA.convertedLeads.target} conversions`}
          />
          <KPICard
            variant="gradient"
            title="Total Revenue"
            value={KPI_DATA.totalRevenue.value}
            icon={TrendingUp}
            iconBg="bg-white/20"
            trend={KPI_DATA.totalRevenue.trend}
          />
        </div>

        {/* Main Chart Section */}
        <div className="w-full">
          <RevenueChart />
        </div>
      </div>
    </div>
  )
}
