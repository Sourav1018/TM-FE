"use client"

import { Filter, Plus, Package, Users, FileText, RefreshCw, Star } from "lucide-react"
import { KPICard } from "@/components/custom/kpi-card"
import { PackagesTable } from "@/components/sections/admin/packages-table"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { useState } from "react"

const TABS = ["All Packages", "Active", "Drafts", "Archived"]

export default function PackagesPage() {
  const [activeTab, setActiveTab] = useState("All Packages")

  return (
    <div className="flex flex-col gap-8 pb-10">
      <div className="flex flex-col gap-10">
        {/* Inventory Overview Section */}
        <section>
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#00658D]">Inventory</p>
              <h2 className="mt-1 font-heading text-4xl font-bold tracking-tight text-foreground">Experience Catalog</h2>
              <p className="mt-2 max-w-2xl text-base font-medium text-muted-foreground leading-relaxed">
                Manage your premium travel offerings, availability, and promotional pricing from a central dashboard.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="outline" className="rounded-full border-border/40 bg-white px-5 py-3 text-sm font-bold shadow-sm hover:bg-muted transition-all">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
              <Button className="rounded-full bg-[#00658D] px-5 py-3 text-sm font-bold shadow-md hover:bg-[#004d6b] transition-all">
                <Plus className="mr-2 h-4 w-4" />
                Add New Package
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <KPICard
              title="ACTIVE PACKAGES"
              value="24"
              icon={Package}
              iconBg="bg-[#D3E9FA]"
              trend="+3 this month"
              trendColor="positive"
            />
            <KPICard
              title="DRAFTS"
              value="8"
              icon={FileText}
              iconBg="bg-[#FFF8E1]"
              subtitle="Review required"
            />
            <div className="group relative flex flex-col gap-6 overflow-hidden p-8 rounded-3xl bg-muted/30 transition-all duration-300 hover:shadow-md border border-border/40">
              <div className="flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-600 transition-transform duration-300 group-hover:scale-110">
                  <Star className="h-7 w-7 fill-blue-600" />
                </div>
                <div className="flex flex-col items-end text-right">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Status</p>
                  <p className="text-sm font-bold text-blue-600 uppercase tracking-widest">Auto-Sync</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 mt-2">
                <p className="text-lg font-bold text-muted-foreground opacity-90">Cloud Sync</p>
                <h3 className="font-heading text-3xl font-bold tracking-tight text-foreground">Active</h3>
              </div>
              <p className="mt-2 text-xs font-bold text-muted-foreground flex items-center gap-2">
                <RefreshCw className="h-3 w-3" />
                Last synced: 2m ago
              </p>
            </div>
          </div>
        </section>

        {/* Packages List Section */}
        <section className="flex flex-col gap-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className={'border-b'}>
            <div className="flex items-center justify-between">
              <TabsList className="border-none">
                {TABS.map((tab) => (
                  <TabsTrigger key={tab} value={tab} className="border-b w-30">
                    {tab}
                  </TabsTrigger>
                ))}
              </TabsList>

              <div className="flex items-center gap-4 text-sm font-bold text-muted-foreground">
                <span className="shrink-0">Show:</span>
                <Select defaultValue="10">
                  <SelectTrigger className="border-none bg-transparent hover:bg-muted/50 transition-all font-bold text-foreground focus-visible:ring-0">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent align="end">
                    <SelectItem value="10">10 rows</SelectItem>
                    <SelectItem value="25">25 rows</SelectItem>
                    <SelectItem value="50">50 rows</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </Tabs>

          <PackagesTable />
        </section>
      </div>
    </div>
  )
}
