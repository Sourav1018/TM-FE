import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { MOCK_PLACES } from "@/constants/package-editor"
import { Badge } from "@/components/ui/badge"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Label } from "@/components/ui/label"
import { Plus, Trash2, X } from "lucide-react"

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
  const handleAddPlace = (placeId: string) => {
    const currentPlaces = day.places || []
    if (!currentPlaces.includes(placeId)) {
      onUpdate(day.id, { places: [...currentPlaces, placeId] })
    }
  }

  const handleRemovePlace = (placeId: string) => {
    onUpdate(day.id, { places: (day.places || []).filter(id => id !== placeId) })
  }

  return (
    <Card className="bg-surface-container-low p-8 flex flex-col gap-10 shadow-sm border border-border/40 group transition-all hover:shadow-lg hover:bg-surface-container rounded-[1.25rem]">
      <CardHeader className="flex-row items-center justify-between p-0 space-y-0">
        <Input
          type="text"
          value={day.title}
          onChange={(e) => onUpdate(day.id, { title: e.target.value })}
          placeholder="Day Title"
          className="bg-transparent text-2xl font-extrabold text-foreground focus-visible:ring-0 border-none w-full placeholder:text-muted-foreground px-1 h-auto"
        />
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onRemove(day.id)}
          className="p-3 h-auto w-auto rounded-full text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-all opacity-60 group-hover:opacity-100"
        >
          <Trash2 className="h-7 w-7" />
        </Button>
      </CardHeader>

      <div className="flex flex-col gap-8">
        <CardContent className="bg-white rounded-[1.25rem] p-5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] border border-border/50">
          <Textarea
            value={day.description}
            onChange={(e) => onUpdate(day.id, { description: e.target.value })}
            placeholder="Describe the activities for this day..."
            className="min-h-35 bg-transparent border-none resize-none px-1 py-0 text-foreground/70 text-lg leading-relaxed focus-visible:ring-0 shadow-none placeholder:text-muted-foreground/50"
          />
        </CardContent>

        <div className="space-y-4 px-1">
          <Label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest pl-1">Places to visit</Label>
          <div className="flex flex-wrap gap-3">
            {day.places?.map(placeId => {
              const place = MOCK_PLACES.find(p => p.id === placeId)
              return (
                <Badge key={placeId} variant="secondary" className="rounded-full pl-4 pr-1 py-1.5 flex items-center gap-2 bg-primary/5 hover:bg-primary/10 border-primary/10 text-primary transition-all font-bold">
                  {place?.name}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6 rounded-full hover:bg-primary/20 text-primary/60 hover:text-primary transition-colors"
                    onClick={() => handleRemovePlace(placeId)}
                  >
                    <X className="h-3.5 w-3.5" />
                  </Button>
                </Badge>
              )
            })}
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="sm" className="rounded-full border-dashed h-10 px-6 text-xs font-bold gap-2 hover:bg-primary/5 hover:text-primary hover:border-primary/30 transition-all">
                  <Plus className="h-4 w-4" /> Add Place
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-64 p-2 rounded-2xl shadow-xl border-border/40" align="start">
                <div className="flex flex-col gap-1">
                  <p className="px-3 py-2 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Available Places</p>
                  <div className="max-h-60 overflow-y-auto pr-1">
                    {MOCK_PLACES.filter(p => !day.places?.includes(p.id)).length > 0 ? (
                      MOCK_PLACES.filter(p => !day.places?.includes(p.id)).map(place => (
                        <Button
                          key={place.id}
                          variant="ghost"
                          className="w-full justify-start text-sm font-medium rounded-xl hover:bg-primary/5 hover:text-primary py-5"
                          onClick={() => handleAddPlace(place.id)}
                        >
                          {place.name}
                        </Button>
                      ))
                    ) : (
                      <p className="px-3 py-4 text-xs text-muted-foreground italic">No more places to add</p>
                    )}
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </Card>
  )
}
