"use client"

import * as React from "react"
import { Info, Image as ImageIcon, MapPin, Search } from "lucide-react"
import { PackageEditorHeader } from "@/components/sections/admin/package-editor-header"
import { PackageEditorStepper } from "@/components/sections/admin/package-editor-stepper"
import { PackageEditorFooter } from "@/components/sections/admin/package-editor-footer"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"

export default function PackageEditorPage() {
  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <PackageEditorHeader />

      {/* Stepper */}
      <PackageEditorStepper currentStep={1} />

      {/* Main Content Card */}
      <div className="rounded-[2.5rem] bg-white p-8 shadow-sm border border-border/40">
        <div className="flex flex-col gap-10">
          
          {/* Tip Box */}
          <div className="flex items-center gap-4 rounded-3xl border border-[#00AEEF]/20 bg-[#00AEEF]/5 p-5 text-sm">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#00658D]">
              <Info className="h-3.5 w-3.5 text-white" />
            </div>
            <p className="text-[#00658D]">
              <span className="font-bold">Tip:</span> Great titles usually mention the destination and the primary vibe (e.g., "Serene Amalfi Coastal Retreat").
            </p>
          </div>

          {/* Form Content */}
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
                      <SelectItem value="adventure">Adventure</SelectItem>
                      <SelectItem value="relaxation">Relaxation</SelectItem>
                      <SelectItem value="luxury">Luxury</SelectItem>
                      <SelectItem value="culture">Culture</SelectItem>
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

            {/* Right Column */}
            <div className="flex flex-col gap-8">
              <div className="space-y-3">
                <Label className="text-sm font-bold text-foreground pl-1">Featured Backdrop</Label>
                <div className="group relative flex min-h-[280px] cursor-pointer flex-col items-center justify-center rounded-[2rem] border-2 border-dashed border-border/60 bg-muted/30 transition-all hover:border-[#00658D]/40 hover:bg-muted/50">
                  <div className="flex flex-col items-center gap-3 text-center">
                    <div className="rounded-xl bg-muted p-4 group-hover:bg-[#00658D]/10 group-hover:text-[#00658D] transition-colors">
                      <ImageIcon className="h-8 w-8 text-muted-foreground group-hover:text-[#00658D]" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-bold text-muted-foreground group-hover:text-foreground transition-colors">Upload Hero Image</p>
                      <p className="text-xs text-muted-foreground/60">Recommended: 1920x1080px</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between rounded-3xl border border-border/40 bg-muted/10 p-5 pr-6">
                <div className="space-y-0.5">
                  <p className="text-sm font-bold">Enable Custom Branding</p>
                  <p className="text-xs text-muted-foreground">Add your agency watermark to itinerary docs.</p>
                </div>
                <Switch />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Footer */}
      <PackageEditorFooter />
    </div>
  )
}
