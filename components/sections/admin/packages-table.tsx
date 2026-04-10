"use client"

import { Edit2, Copy, Trash2, History, MoreHorizontal, AlertTriangle } from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { useState, useMemo } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

const INITIAL_PACKAGES = [
  {
    id: 1,
    name: "Maldives Azure Escape",
    category: "Luxury Resort • All-Inclusive",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=100&h=100&fit=crop",
    price: "$2,499",
    duration: "7 Days",
    status: "ACTIVE",
  },
  {
    id: 2,
    name: "Swiss Alp Expedition",
    category: "Mountain Adventure • Guided",
    image: "https://images.unsplash.com/photo-1531310197839-ccf54634509e?w=100&h=100&fit=crop",
    price: "$1,850",
    duration: "5 Days",
    status: "DRAFT",
  },
  {
    id: 3,
    name: "Golden Triangle Heritage",
    category: "Cultural Tour • Heritage",
    image: "https://images.unsplash.com/photo-1524492707947-2f85a208f7aa?w=100&h=100&fit=crop",
    price: "$1,200",
    duration: "10 Days",
    status: "ACTIVE",
  },
  {
    id: 4,
    name: "Classic Amalfi Coast (Old)",
    category: "Archived 2023",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=100&h=100&fit=crop",
    price: "$3,100",
    duration: "14 Days",
    status: "ARCHIVED",
  },
  {
    id: 5,
    name: "Santorini Sunset Cruise",
    category: "Leisure • Romantic",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=100&h=100&fit=crop",
    price: "$850",
    duration: "3 Days",
    status: "ACTIVE",
  },
  {
    id: 6,
    name: "Tokyo Neon Nights",
    category: "Urban • Nightlife",
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=100&h=100&fit=crop",
    price: "$1,400",
    duration: "4 Days",
    status: "DRAFT",
  },
]

interface PackagesTableProps {
  activeTab: string
}

export function PackagesTable({ activeTab }: PackagesTableProps) {
  const [packages, setPackages] = useState(INITIAL_PACKAGES)
  const [packageToHandle, setPackageToHandle] = useState<{ id: number; name: string; status: string } | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filteredPackages = useMemo(() => {
    if (activeTab === "All Packages") return packages
    return packages.filter((pkg) => pkg.status === activeTab.toUpperCase().replace(/S$/, ''))
  }, [packages, activeTab])

  const handleDeleteClick = (pkg: any) => {
    setPackageToHandle(pkg)
    setIsModalOpen(true)
  }

  const handleConfirmAction = () => {
    if (!packageToHandle) return

    if (packageToHandle.status === "ARCHIVED") {
      // Permanent delete
      setPackages((prev) => prev.filter((p) => p.id !== packageToHandle.id))
    } else {
      // Archive
      setPackages((prev) =>
        prev.map((p) => (p.id === packageToHandle.id ? { ...p, status: "ARCHIVED" } : p))
      )
    }
    setIsModalOpen(false)
    setPackageToHandle(null)
  }
  return (
    <>
      <div className="w-full overflow-hidden rounded-[2rem] bg-white shadow-sm shadow-black/[0.03]">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-border/40 bg-muted/20">
              <th className="px-8 py-6 text-xs font-bold uppercase tracking-widest text-muted-foreground">Package Name</th>
              <th className="px-8 py-6 text-xs font-bold uppercase tracking-widest text-muted-foreground">Starting Price</th>
              <th className="px-8 py-6 text-xs font-bold uppercase tracking-widest text-muted-foreground">Duration</th>
              <th className="px-8 py-6 text-xs font-bold uppercase tracking-widest text-muted-foreground">Status</th>
              <th className="px-8 py-6 text-right text-xs font-bold uppercase tracking-widest text-muted-foreground">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/40">
            {filteredPackages.map((pkg) => (
              <tr key={pkg.id} className="group transition-colors hover:bg-muted/10">
                <td className="px-8 py-6">
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 overflow-hidden rounded-2xl bg-muted shadow-inner">
                      <img src={pkg.image} alt={pkg.name} className="h-full w-full object-cover grayscale-[0.2] transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <div>
                      <h4 className="font-heading text-base font-bold text-foreground">{pkg.name}</h4>
                      <p className="text-xs font-medium text-muted-foreground">{pkg.category}</p>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-6 font-heading text-lg font-bold text-foreground">
                  {pkg.price}
                </td>
                <td className="px-8 py-6">
                  <Badge variant="secondary" className="rounded-full bg-[#FFF5E5] px-4 py-1.5 text-xs font-bold text-[#FF9900] border-none">
                    {pkg.duration}
                  </Badge>
                </td>
                <td className="px-8 py-6">
                  <div className="flex items-center gap-2">
                    <span className={cn(
                      "h-2 w-2 rounded-full",
                      pkg.status === "ACTIVE" ? "bg-emerald-500" : pkg.status === "DRAFT" ? "bg-amber-400" : "bg-muted-foreground/40"
                    )} />
                    <span className={cn(
                      "text-xs font-bold uppercase tracking-wider",
                      pkg.status === "ACTIVE" ? "text-emerald-500" : pkg.status === "DRAFT" ? "text-amber-500" : "text-muted-foreground"
                    )}>
                      {pkg.status}
                    </span>
                  </div>
                </td>
                <td className="px-8 py-6">
                  <div className="flex items-center justify-end gap-5">
                    {pkg.status === "ARCHIVED" ? (
                      <button className="text-muted-foreground transition-all hover:text-emerald-500 hover:scale-110">
                        <History className="h-5 w-5" />
                      </button>
                    ) : (
                      <button className="text-muted-foreground transition-all hover:text-[#00658D] hover:scale-110">
                        <Edit2 className="h-5 w-5" />
                      </button>
                    )}
                    <button
                      onClick={() => handleDeleteClick(pkg)}
                      className="text-muted-foreground transition-all hover:text-destructive hover:scale-110"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {/* Footer / Pagination Placeholder */}
        <div className="flex items-center justify-between border-t border-border/40 px-8 py-6">
          <p className="text-sm font-medium text-muted-foreground">
            Showing <span className="font-bold text-foreground">1 - {filteredPackages.length}</span> of <span className="font-bold text-foreground">{filteredPackages.length}</span> results
          </p>
          <div className="flex items-center gap-2">
            <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#00658D] text-sm font-bold text-white">1</button>
            <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-sm font-bold text-muted-foreground transition-all hover:bg-muted">2</button>
            <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-sm font-bold text-muted-foreground transition-all hover:bg-muted">Next</button>
          </div>
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-md gap-6 rounded-3xl p-8">
          <DialogHeader>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600 mb-4">
              <AlertTriangle className="h-6 w-6" />
            </div>
            <DialogTitle className="text-2xl font-bold tracking-tight">
              {packageToHandle?.status === "ARCHIVED" ? "Delete Package Permanently?" : "Archive this Package?"}
            </DialogTitle>
            <DialogDescription className="text-base font-medium leading-relaxed mt-2">
              {packageToHandle?.status === "ARCHIVED" 
                ? `You are about to permanently delete "${packageToHandle?.name}". This action cannot be undone.`
                : `Are you sure you want to move "${packageToHandle?.name}" to the archives? You can restore it later.`}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex-row gap-4 sm:justify-start mt-4">
            <Button
              variant="destructive"
              className="flex-1 rounded-full py-6 text-base font-bold shadow-lg shadow-destructive/20 hover:scale-[1.02] transition-transform"
              onClick={handleConfirmAction}
            >
              {packageToHandle?.status === "ARCHIVED" ? "Yes, delete completely" : "Yes, move to archive"}
            </Button>
            <Button
              variant="outline"
              className="flex-1 rounded-full py-6 text-base font-bold border-border/60 hover:bg-muted transition-all"
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
      
}
