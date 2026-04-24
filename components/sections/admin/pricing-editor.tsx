"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DollarSign, Info, Users, Users2 } from "lucide-react"

import { EditorTip } from "./editor-tip"
import { Card } from "@/components/ui/card"

export function PricingEditor() {
  return (
    <>
      <EditorTip tone="emerald">
        <span className="font-bold">Tip:</span> Set a competitive base price. You can add seasonal surcharges or early-bird discounts later in the advanced rules.
      </EditorTip>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        
        {/* Pricing & Occupancy Column */}
        <div className="flex flex-col gap-10">
          <div className="space-y-8">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-foreground">Standard Pricing</h3>
              <p className="text-sm text-muted-foreground">Define your baseline cost per traveler.</p>
            </div>
            
            <div className="space-y-4">
              <Label className="text-sm font-bold text-foreground pl-1">Base Price (USD)</Label>
              <div className="relative group max-w-md">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full bg-emerald-100 text-emerald-600 transition-all duration-300 group-focus-within:bg-emerald-600 group-focus-within:text-white group-focus-within:scale-110">
                  <DollarSign className="h-5 w-5" />
                </div>
                <Input 
                  type="number" 
                  className="pl-16 h-16 text-2xl font-bold bg-muted/20 border-none rounded-[1.25rem] focus-visible:ring-emerald-500/20 focus-visible:bg-white transition-all shadow-none focus-visible:shadow-sm" 
                  placeholder="0.00" 
                />
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-foreground">Occupancy Limits</h3>
              <p className="text-sm text-muted-foreground">Set the minimum and maximum group size for this package.</p>
            </div>

            <div className="grid grid-cols-2 gap-8 max-w-md">
              <div className="space-y-4">
                <Label className="text-sm font-bold text-foreground pl-1">Min. Guests</Label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center">
                    <Users className="h-5 w-5 text-muted-foreground transition-colors group-focus-within:text-primary" />
                  </div>
                  <Input 
                    type="number" 
                    className="pl-12 h-14 bg-muted/20 border-none rounded-[1rem] focus-visible:ring-primary/20 focus-visible:bg-white transition-all font-bold text-lg shadow-none focus-visible:shadow-sm" 
                    placeholder="1" 
                  />
                </div>
              </div>
              <div className="space-y-4">
                <Label className="text-sm font-bold text-foreground pl-1">Max. Guests</Label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center">
                    <Users2 className="h-5 w-5 text-muted-foreground transition-colors group-focus-within:text-primary" />
                  </div>
                  <Input 
                    type="number" 
                    className="pl-12 h-14 bg-muted/20 border-none rounded-[1rem] focus-visible:ring-primary/20 focus-visible:bg-white transition-all font-bold text-lg shadow-none focus-visible:shadow-sm" 
                    placeholder="10" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Visual Summary */}
        <div className="hidden lg:flex flex-col justify-center items-center rounded-[3rem] bg-gradient-to-br from-primary/5 to-emerald-500/5 p-12 border border-primary/10">
           <div className="relative">
              <div className="absolute -top-10 -left-10 w-24 h-24 rounded-full bg-emerald-500/10 blur-2xl animate-pulse" />
              <div className="absolute -bottom-10 -right-10 w-24 h-24 rounded-full bg-primary/10 blur-2xl animate-pulse delay-700" />
              
              <Card className="relative bg-white rounded-[2rem] shadow-2xl p-10 border border-border/40 w-[300px] space-y-8 transform transition-transform hover:scale-105 duration-500">
                 <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center shadow-inner">
                       <DollarSign className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div className="text-right">
                       <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Base Rate</p>
                       <div className="text-3xl font-bold text-emerald-600">$0.00</div>
                    </div>
                 </div>
                 
                 <div className="space-y-4">
                    <div className="space-y-2">
                       <div className="flex justify-between text-[10px] font-bold text-muted-foreground uppercase">
                          <span>Profit Margin</span>
                          <span>75%</span>
                       </div>
                       <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                          <div className="h-full w-3/4 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                       </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 pt-2">
                       <div className="bg-muted/30 rounded-xl p-3 border border-border/20">
                          <p className="text-[8px] font-bold text-muted-foreground uppercase">Min Guests</p>
                          <p className="text-sm font-bold text-foreground">1 Pers.</p>
                       </div>
                       <div className="bg-muted/30 rounded-xl p-3 border border-border/20">
                          <p className="text-[8px] font-bold text-muted-foreground uppercase">Max Guests</p>
                          <p className="text-sm font-bold text-foreground">10 Pers.</p>
                       </div>
                    </div>
                 </div>

                 <div className="pt-4 border-t border-dashed border-border/60">
                    <div className="flex items-center gap-2 text-primary">
                       <Info className="w-3 h-3" />
                       <span className="text-[10px] font-medium leading-tight">Configuring baseline metrics for revenue projection.</span>
                    </div>
                 </div>
              </Card>
           </div>
           <p className="mt-12 text-center text-sm font-medium text-muted-foreground leading-relaxed max-w-[280px]">
              Your configuration builds a <span className="text-emerald-600 font-bold">real-time summary</span> of the package&apos;s market positioning.
           </p>
        </div>

      </div>
    </>
  )
}
