import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { MOCK_PLACES } from "@/constants/package-editor"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Plus, Trash2, X } from "lucide-react"
import { useState } from "react"
import { PlaceExplorerModal } from "./place-explorer-modal"

export type ItineraryDay = {
  id: string
  day: number
  title: string
  description: string
  places: string[]
}

type ItineraryDayCardProps = {
  day: ItineraryDay
  onUpdate: (id: string, updates: Partial<ItineraryDay>) => void
  onRemove: (id: string) => void
}

export function ItineraryDayCard({ day, onUpdate, onRemove }: ItineraryDayCardProps) {
  const [isExplorerOpen, setIsExplorerOpen] = useState(false)

  const handleSavePlaces = (places: string[]) => {
    onUpdate(day.id, { places })
  }


  const handleRemovePlace = (placeId: string) => {
    onUpdate(day.id, { places: (day.places || []).filter(id => id !== placeId) })
  }

  return (
    <Card className="bg-surface-container-low p-4 sm:p-8 flex flex-col gap-6 sm:gap-10 shadow-sm border border-border/40 group transition-all hover:shadow-lg hover:bg-surface-container rounded-[1.25rem]">
      <CardHeader className="flex-row items-center justify-between p-0 space-y-0">
        <Input
          type="text"
          value={day.title}
          onChange={(e) => onUpdate(day.id, { title: e.target.value })}
          placeholder="Day Title"
          className="bg-transparent text-xl sm:text-2xl font-extrabold text-foreground focus-visible:ring-0 border-none w-full placeholder:text-muted-foreground px-1 h-auto"
        />
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onRemove(day.id)}
          className="p-2 sm:p-3 h-auto w-auto rounded-full text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-all opacity-60 group-hover:opacity-100"
        >
          <Trash2 className="h-5 w-5 sm:h-7 sm:w-7" />
        </Button>
      </CardHeader>

      <div className="flex flex-col gap-6 sm:gap-8">
        <CardContent className="bg-white rounded-[1.25rem] p-4 sm:p-5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] border border-border/50">
          <Textarea
            value={day.description}
            onChange={(e) => onUpdate(day.id, { description: e.target.value })}
            placeholder="Describe the activities for this day..."
            className="min-h-30 sm:min-h-35 bg-transparent border-none resize-none px-1 py-0 text-foreground/70 text-base sm:text-lg leading-relaxed focus-visible:ring-0 shadow-none placeholder:text-muted-foreground/50"
          />
        </CardContent>

        <div className="flex flex-col gap-2 px-1">
          <Label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest pl-1">Places to visit</Label>
          <div className="flex flex-wrap gap-3">
            {day.places?.map(placeId => {
              const place = MOCK_PLACES.find(p => p.id === placeId)
              return (
                <Badge key={placeId} variant="secondary" className="rounded-full pl-4 pr-1 py-1.5 flex items-center gap-2 bg-primary/5 hover:bg-primary/10 border-primary/10 text-primary transition-all font-bold">
                  {place?.name}
                  {place?.category && (
                    <span className="text-[9px] bg-primary/10 px-1.5 py-0.5 rounded-md uppercase tracking-wider">
                      {place.category}
                    </span>
                  )}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6 rounded-full hover:bg-primary/20 text-primary/60 hover:text-primary transition-colors ml-1"
                    onClick={() => handleRemovePlace(placeId)}
                  >
                    <X className="h-3.5 w-3.5" />
                  </Button>
                </Badge>
              )
            })}
            
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setIsExplorerOpen(true)}
              className="rounded-full border-dashed h-10 px-6 text-xs font-bold gap-2 hover:bg-primary/5 hover:text-primary hover:border-primary/30 transition-all"
            >
              <Plus className="h-4 w-4" /> Add Places
            </Button>

            <PlaceExplorerModal 
              open={isExplorerOpen}
              onOpenChange={setIsExplorerOpen}
              day={day}
              onSave={handleSavePlaces}
            />
          </div>
        </div>
      </div>
    </Card>
  )
}
