"use client"

import { ConfirmationDialog } from "@/components/custom/confirmation-dialog"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Edit2, History, Trash2 } from "lucide-react"
import { useMemo, useState } from "react"
import Image from "next/image"
import { INITIAL_PACKAGES } from "@/constants/packages"
import { Package } from "@/types/packages"

export type PackagesTableProps = {
  activeTab: string
}

export function PackagesTable({ activeTab }: PackagesTableProps) {
  const [packages, setPackages] = useState(INITIAL_PACKAGES)
  const [packageToHandle, setPackageToHandle] = useState<Package | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filteredPackages = useMemo(() => {
    return packages.filter((pkg) => pkg.status === activeTab.toUpperCase().replace(/S$/, ""))
  }, [packages, activeTab])

  const handleDeleteClick = (pkg: Package) => {
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
      <div className="w-full overflow-x-auto rounded-[2rem] bg-white shadow-sm shadow-black/[0.03]">
        <table className="w-full min-w-[900px] border-collapse text-left">
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
                    <div className="relative h-14 w-14 overflow-hidden rounded-2xl bg-muted shadow-inner">
                      <Image 
                        src={pkg.image} 
                        alt={pkg.name} 
                        fill
                        className="object-cover grayscale-[0.2] transition-transform duration-500 group-hover:scale-110" 
                      />
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

      <ConfirmationDialog
        isOpen={isModalOpen}
        onOpenChange={setIsModalOpen}
        title={packageToHandle?.status === "ARCHIVED" ? "Delete Package Permanently?" : "Archive this Package?"}
        description={
          packageToHandle?.status === "ARCHIVED" 
            ? `You are about to permanently delete "${packageToHandle?.name}". This action cannot be undone.`
            : `Are you sure you want to move "${packageToHandle?.name}" to the archives? You can restore it later.`
        }
        confirmText={packageToHandle?.status === "ARCHIVED" ? "Yes, delete completely" : "Yes, move to archive"}
        onConfirm={handleConfirmAction}
        variant="destructive"
      />
    </>
  )
      
}
