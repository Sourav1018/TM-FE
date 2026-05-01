"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CustomAlert } from "@/components/ui/custom-alert"
import { Input } from "@/components/ui/input"
import { X } from "lucide-react"
import { useState } from "react"

export function FacilitiesEditor() {
  const [inclusions, setInclusions] = useState([
    "Luxury Suite Stay",
    "Daily Breakfast",
    "Private Transfers",
    "Yacht Tour"
  ])
  const [exclusions, setExclusions] = useState([
    "Airfare",
    "Visa Fees",
    "Travel Insurance"
  ])

  const [newInclusion, setNewInclusion] = useState("")
  const [newExclusion, setNewExclusion] = useState("")
  const [showInclusionInput, setShowInclusionInput] = useState(false)
  const [showExclusionInput, setShowExclusionInput] = useState(false)

  const handleAddInclusion = () => {
    if (newInclusion.trim() && !inclusions.includes(newInclusion.trim())) {
      setInclusions([...inclusions, newInclusion.trim()])
    }
    setNewInclusion("")
    setShowInclusionInput(false)
  }

  const handleAddExclusion = () => {
    if (newExclusion.trim() && !exclusions.includes(newExclusion.trim())) {
      setExclusions([...exclusions, newExclusion.trim()])
    }
    setNewExclusion("")
    setShowExclusionInput(false)
  }

  const removeInclusion = (item: string) => {
    setInclusions(inclusions.filter(i => i !== item))
  }

  const removeExclusion = (item: string) => {
    setExclusions(exclusions.filter(e => e !== item))
  }

  return (
    <div className="flex flex-col gap-10">
      <CustomAlert tone="amber">
        <span className="font-bold">Pro Tip:</span> Clearly defining inclusions and exclusions helps prevent misunderstandings and sets the right expectations for your guests.
      </CustomAlert>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Inclusions Card */}
        <Card className="bg-white p-8 flex flex-col gap-6 shadow-sm border border-border/40 rounded-[1.25rem]">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-700">Inclusions</h3>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-primary font-bold hover:bg-primary/10"
                onClick={() => setShowInclusionInput(true)}
              >
                Add New
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {inclusions.map((item, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="rounded-full pl-4 pr-1 py-1.5 flex items-center gap-2 bg-green-50 hover:bg-green-100 border-green-100 text-green-700 transition-all font-medium text-sm shadow-none"
                >
                  {item}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6 rounded-full hover:bg-green-200 text-green-600/60 hover:text-green-700 transition-colors ml-1"
                    onClick={() => removeInclusion(item)}
                  >
                    <X className="h-3.5 w-3.5" />
                  </Button>
                </Badge>
              ))}

              {showInclusionInput && (
                <div className="flex items-center gap-2 w-full max-w-[250px]">
                  <Input 
                    autoFocus
                    value={newInclusion}
                    onChange={(e) => setNewInclusion(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleAddInclusion()
                      if (e.key === "Escape") setShowInclusionInput(false)
                    }}
                    onBlur={() => {
                      if (newInclusion.trim()) handleAddInclusion()
                      else setShowInclusionInput(false)
                    }}
                    placeholder="Add inclusion..."
                    className="h-9 rounded-full bg-green-50 border-green-200 focus-visible:ring-green-500/20 text-sm"
                  />
                </div>
              )}
            </div>
          </div>
        </Card>

        {/* Exclusions Card */}
        <Card className="bg-white p-8 flex flex-col gap-6 shadow-sm border border-border/40 rounded-[1.25rem]">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-700">Exclusions</h3>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-primary font-bold hover:bg-primary/10"
                onClick={() => setShowExclusionInput(true)}
              >
                Add New
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {exclusions.map((item, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="rounded-full pl-4 pr-1 py-1.5 flex items-center gap-2 bg-red-50 hover:bg-red-100 border-red-100 text-red-700 transition-all font-medium text-sm shadow-none"
                >
                  {item}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6 rounded-full hover:bg-red-200 text-red-600/60 hover:text-red-700 transition-colors ml-1"
                    onClick={() => removeExclusion(item)}
                  >
                    <X className="h-3.5 w-3.5" />
                  </Button>
                </Badge>
              ))}

              {showExclusionInput && (
                <div className="flex items-center gap-2 w-full max-w-[250px]">
                  <Input 
                    autoFocus
                    value={newExclusion}
                    onChange={(e) => setNewExclusion(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleAddExclusion()
                      if (e.key === "Escape") setShowExclusionInput(false)
                    }}
                    onBlur={() => {
                      if (newExclusion.trim()) handleAddExclusion()
                      else setShowExclusionInput(false)
                    }}
                    placeholder="Add exclusion..."
                    className="h-9 rounded-full bg-red-50 border-red-200 focus-visible:ring-red-500/20 text-sm"
                  />
                </div>
              )}
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
