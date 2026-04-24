"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { TRAVEL_CATEGORIES } from "@/constants/package-editor"
import { MapPin } from "lucide-react"

import { Card } from "@/components/ui/card"
import { EditorTip } from "./editor-tip"

export function CoreDetailsEditor() {
  return (
    <>
      <EditorTip>
        <span className="font-bold">Tip:</span> Great titles usually mention the destination and the primary vibe (e.g. &quot;Serene Amalfi Coastal Retreat&quot;).
      </EditorTip>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        
        {/* Left Column */}
        <div className="flex flex-col gap-8">
          <div className="space-y-3">
            <Label className="text-sm font-bold text-foreground pl-1">Package Title</Label>
            <Input placeholder="e.g. Majestic Swiss Alps Discovery" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-3">
              <Label className="text-sm font-bold text-foreground pl-1">Destination</Label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input className="pl-11" placeholder="Search City/Coun" />
              </div>
            </div>
            <div className="space-y-3 flex flex-col">
              <Label className="text-sm font-bold text-foreground pl-1">Travel Category</Label>
              <Select>
                <SelectTrigger className="w-full h-10 rounded-4xl bg-input/30 px-4">
                  <SelectValue placeholder="Select Vibe" />
                </SelectTrigger>
                <SelectContent>
                  {TRAVEL_CATEGORIES.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-3">
            <Label className="text-sm font-bold text-foreground pl-1">Short Pitch</Label>
            <Textarea 
              className="min-h-[160px] resize-none"
              placeholder="Briefly describe what makes this trip unforgettable..." 
            />
          </div>
        </div>

        {/* Right Column - Placeholder */}
        <div className="flex flex-col gap-8">
          <Card className="rounded-[2.5rem] bg-muted/20 border border-dashed border-border/60 h-full flex items-center justify-center p-8 transition-none hover:shadow-none">
            <div className="text-center space-y-2">
              <p className="text-sm font-bold text-muted-foreground">Additional Settings</p>
              <p className="text-xs text-muted-foreground/60 max-w-[200px]">Other core details will appear here as the configuration evolves.</p>
            </div>
          </Card>
        </div>
      </div>
    </>
  )
}
