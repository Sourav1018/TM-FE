"use client"

import { KPICard } from "@/components/custom/kpi-card"
import { PackagesTable } from "@/components/sections/admin/packages-table"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PACKAGE_TABS } from "@/constants/packages"
import { FileText, Filter, Package, Plus } from "lucide-react"
import { motion } from "motion/react"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function PackagesPage() {
  const [activeTab, setActiveTab] = useState("Active")
  const router = useRouter()

  const handleAddNew = () => {
    const randomSlug = Math.random().toString(36).substring(2, 10)
    router.push(`/admin/packages/${randomSlug}`)
  }

  return (
    <div className="flex flex-col gap-8 pb-10">
      <div className="flex flex-col gap-10">
        {/* Inventory Overview Section */}
        <section>
          <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#00658D]">Inventory</p>
              <h1 className="mt-1 font-heading text-3xl font-bold tracking-tight text-foreground lg:text-4xl">Experience Catalog</h1>
              <p className="mt-2 max-w-2xl text-sm font-medium text-muted-foreground leading-relaxed lg:text-base">
                Manage your premium travel offerings, availability, and promotional pricing from a central dashboard.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button variant="outline" className="flex-1 border-border/40 bg-white px-5 py-3 text-sm font-bold shadow-sm hover:bg-muted transition-all lg:flex-none w-full xl:w-fit">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
              <Button 
                onClick={handleAddNew}
                className="flex-1 bg-[#00658D] px-5 py-3 text-sm font-bold shadow-md hover:bg-[#004d6b] transition-all lg:flex-none w-full xl:w-fit"
              >
                <Plus className="mr-2 h-4 w-4" />
                Add New
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
            {/* <div className="group relative flex flex-col gap-6 overflow-hidden p-8 rounded-3xl bg-muted/30 transition-all duration-300 hover:shadow-md border border-border/40">
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
            </div> */}
          </div>
        </section>

        {/* Packages List Section */}
        <section className="flex flex-col gap-6">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="w-full overflow-x-auto pb-1 lg:overflow-x-visible">
                <TabsList className="relative flex w-max items-center gap-0 border-none bg-transparent p-0">
                  {PACKAGE_TABS.map((tab) => (
                    <TabsTrigger
                      key={tab}
                      value={tab}
                      className="relative h-12 w-28 border-none bg-transparent px-2 text-md font-bold text-muted-foreground transition-colors hover:text-foreground data-[selected]:text-[#00658D] after:hidden cursor-pointer lg:w-36 lg:px-4"
                    >
                      <span className={`relative z-10 transition-colors duration-200 ${activeTab === tab ? "text-[#00658D]" : "text-muted-foreground hover:text-foreground"}`}>
                        {tab}
                      </span>
                      {activeTab === tab && (
                        <motion.div
                          layoutId="active-tab-indicator"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00658D] rounded-t-full"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              <div className="flex items-center justify-between gap-4 text-md font-bold text-muted-foreground lg:justify-end">
                <span className="shrink-0">Rows per page</span>
                <Select defaultValue="10">
                  <SelectTrigger className="h-10 w-[85px] border border-border/60 bg-white/50 backdrop-blur-sm hover:bg-white hover:shadow-sm transition-all font-bold text-foreground focus:ring-0 focus:ring-offset-0 px-3">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent align="end" className="w-[85px] border-border/60 shadow-lg p-1">
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="25">25</SelectItem>
                    <SelectItem value="50">50</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </Tabs>

          <PackagesTable activeTab={activeTab} />
        </section>
      </div>
    </div>
  )
}
