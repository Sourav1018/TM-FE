"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CustomAlert } from "@/components/ui/custom-alert"
import { Input } from "@/components/ui/input"
import { X, Search, Check } from "lucide-react"
import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
const ALL_ITEMS = [
  "Luxury Suite Stay",
  "Daily Breakfast",
  "Private Transfers",
  "Yacht Tour",
  "Airfare",
  "Visa Fees",
  "Travel Insurance",
  "Lunch",
  "Dinner",
  "Spa Access",
  "Photography Session",
  "Wine Tasting"
]

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

  // Drag and Drop state
  const [draggedItem, setDraggedItem] = useState<{ item: string, sourceList: 'inclusions' | 'exclusions' } | null>(null)

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalTargetList, setModalTargetList] = useState<'inclusions' | 'exclusions'>('inclusions')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedItems, setSelectedItems] = useState<string[]>([])

  const removeInclusion = (item: string) => {
    setInclusions(inclusions.filter(i => i !== item))
  }

  const removeExclusion = (item: string) => {
    setExclusions(exclusions.filter(e => e !== item))
  }

  // --- Drag and Drop Handlers ---
  const handleDragStart = (e: React.DragEvent, item: string, sourceList: 'inclusions' | 'exclusions') => {
    setDraggedItem({ item, sourceList })
    e.dataTransfer.effectAllowed = 'move'
    // A small delay helps browser to capture the ghost image properly before any state changes
    setTimeout(() => {
      if (e.target instanceof HTMLElement) {
        e.target.style.opacity = '0.5'
      }
    }, 0)
  }

  const handleDragEnd = (e: React.DragEvent) => {
    if (e.target instanceof HTMLElement) {
      e.target.style.opacity = '1'
    }
    setDraggedItem(null)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
  }

  const handleDrop = (e: React.DragEvent, targetList: 'inclusions' | 'exclusions', dropIndex?: number) => {
    e.preventDefault()
    if (!draggedItem) return

    const { item, sourceList } = draggedItem

    if (sourceList === targetList) {
      // Reordering within the same list
      const list = targetList === 'inclusions' ? inclusions : exclusions
      const setList = targetList === 'inclusions' ? setInclusions : setExclusions
      
      const currentIndex = list.indexOf(item)
      if (currentIndex === -1) return
      
      const newList = [...list]
      newList.splice(currentIndex, 1)
      
      if (dropIndex !== undefined) {
        // adjust drop index if item was moved from before the drop point
        const adjustedIndex = currentIndex < dropIndex ? dropIndex - 1 : dropIndex
        newList.splice(adjustedIndex, 0, item)
      } else {
        newList.push(item)
      }
      
      setList(newList)
    } else {
      // Moving between lists
      const sourceState = sourceList === 'inclusions' ? inclusions : exclusions
      const setSourceState = sourceList === 'inclusions' ? setInclusions : setExclusions
      
      const targetState = targetList === 'inclusions' ? inclusions : exclusions
      const setTargetState = targetList === 'inclusions' ? setInclusions : setExclusions

      if (!targetState.includes(item)) {
        // Remove from source
        setSourceState(sourceState.filter(i => i !== item))

        // Add to target
        const newList = [...targetState]
        if (dropIndex !== undefined) {
          newList.splice(dropIndex, 0, item)
        } else {
          newList.push(item)
        }
        setTargetState(newList)
      }
    }
  }

  // --- Modal Handlers ---
  const openModal = (targetList: 'inclusions' | 'exclusions') => {
    setModalTargetList(targetList)
    setSearchQuery('')
    setSelectedItems([])
    setIsModalOpen(true)
  }

  const toggleModalItemSelection = (item: string) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter(i => i !== item))
    } else {
      setSelectedItems([...selectedItems, item])
    }
  }

  const handleConfirmModal = () => {
    const listState = modalTargetList === 'inclusions' ? inclusions : exclusions
    const setListState = modalTargetList === 'inclusions' ? setInclusions : setExclusions
    
    // Check if searchQuery is not empty and not in the selected items, maybe they want to add custom
    const itemsToAdd = [...selectedItems]
    if (searchQuery.trim() && !ALL_ITEMS.includes(searchQuery.trim()) && !itemsToAdd.includes(searchQuery.trim())) {
      itemsToAdd.push(searchQuery.trim())
    }

    const newItems = itemsToAdd.filter(item => !listState.includes(item))
    if (newItems.length > 0) {
      setListState([...listState, ...newItems])
    }
    
    setIsModalOpen(false)
  }

  // Derived state for modal
  const existingList = modalTargetList === 'inclusions' ? inclusions : exclusions
  const filteredItems = ALL_ITEMS.filter(item => item.toLowerCase().includes(searchQuery.toLowerCase()))
  const showCustomAdd = searchQuery.trim() !== '' && !ALL_ITEMS.some(item => item.toLowerCase() === searchQuery.trim().toLowerCase())

  return (
    <div className="flex flex-col gap-10">
      <CustomAlert tone="amber">
        <span className="font-bold">Pro Tip:</span> Clearly defining inclusions and exclusions helps prevent misunderstandings and sets the right expectations for your guests.
      </CustomAlert>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Inclusions Card */}
        <Card 
          className="bg-white p-4 sm:p-8 flex flex-col gap-6 shadow-sm border border-border/40 rounded-[1.25rem] min-h-[250px]"
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, 'inclusions')}
        >
          <div className="flex flex-col gap-6 h-full">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-700">Inclusions</h3>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-primary font-bold hover:bg-primary/10"
                onClick={() => openModal('inclusions')}
              >
                Add Include
              </Button>
            </div>
            
            <div className="flex flex-col gap-2 flex-grow">
              {inclusions.map((item, index) => (
                <div 
                  key={item}
                  draggable
                  onDragStart={(e) => handleDragStart(e, item, 'inclusions')}
                  onDragEnd={handleDragEnd}
                  onDragOver={handleDragOver}
                  onDrop={(e) => {
                    e.stopPropagation()
                    handleDrop(e, 'inclusions', index)
                  }}
                  className="cursor-grab active:cursor-grabbing w-fit"
                >
                  <Badge 
                    variant="secondary" 
                    className="rounded-full pl-4 pr-1 py-1.5 flex items-center gap-2 bg-green-50 hover:bg-green-100 border-green-100 text-green-700 transition-all font-medium text-sm shadow-none w-fit"
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
                </div>
              ))}
              {inclusions.length === 0 && (
                <div className="flex-grow flex items-center justify-center text-muted-foreground text-sm italic border-2 border-dashed border-border rounded-xl">
                  Drop items here
                </div>
              )}
            </div>
          </div>
        </Card>

        {/* Exclusions Card */}
        <Card 
          className="bg-white p-8 flex flex-col gap-6 shadow-sm border border-border/40 rounded-[1.25rem] min-h-[250px]"
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, 'exclusions')}
        >
          <div className="flex flex-col gap-6 h-full">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-700">Exclusions</h3>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-primary font-bold hover:bg-primary/10"
                onClick={() => openModal('exclusions')}
              >
                Add Exclude
              </Button>
            </div>
            
            <div className="flex flex-col gap-2 flex-grow">
              {exclusions.map((item, index) => (
                <div 
                  key={item}
                  draggable
                  onDragStart={(e) => handleDragStart(e, item, 'exclusions')}
                  onDragEnd={handleDragEnd}
                  onDragOver={handleDragOver}
                  onDrop={(e) => {
                    e.stopPropagation()
                    handleDrop(e, 'exclusions', index)
                  }}
                  className="cursor-grab active:cursor-grabbing w-fit"
                >
                  <Badge 
                    variant="secondary" 
                    className="rounded-full pl-4 pr-1 py-1.5 flex items-center gap-2 bg-red-50 hover:bg-red-100 border-red-100 text-red-700 transition-all font-medium text-sm shadow-none w-fit"
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
                </div>
              ))}
              {exclusions.length === 0 && (
                <div className="flex-grow flex items-center justify-center text-muted-foreground text-sm italic border-2 border-dashed border-border rounded-xl">
                  Drop items here
                </div>
              )}
            </div>
          </div>
        </Card>
      </div>

      {/* Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-md bg-white rounded-2xl">
          <DialogHeader>
            <DialogTitle className="text-xl">
              Add to {modalTargetList === 'inclusions' ? 'Inclusions' : 'Exclusions'}
            </DialogTitle>
          </DialogHeader>
          
          <div className="flex flex-col gap-4 py-4">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search previously created items..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 h-11 bg-muted/30"
              />
            </div>

            <div className="flex flex-col gap-2 max-h-[300px] overflow-y-auto pr-2">
              {filteredItems.length === 0 && !showCustomAdd && (
                <p className="text-sm text-muted-foreground text-center py-4">No results found.</p>
              )}

              {filteredItems.map(item => {
                const isAlreadyInList = existingList.includes(item)
                const isSelected = selectedItems.includes(item)
                
                return (
                  <div 
                    key={item}
                    className={`flex items-center gap-3 p-3 rounded-xl border transition-colors cursor-pointer ${
                      isAlreadyInList ? 'opacity-50 bg-muted/50 cursor-not-allowed' : 
                      isSelected ? 'border-primary bg-primary/5' : 'border-border hover:bg-muted/30'
                    }`}
                    onClick={() => {
                      if (!isAlreadyInList) toggleModalItemSelection(item)
                    }}
                  >
                    <div className={`w-5 h-5 rounded flex items-center justify-center border ${
                      isAlreadyInList ? 'bg-muted-foreground/30 border-transparent' :
                      isSelected ? 'bg-primary border-primary text-primary-foreground' : 'border-input bg-background'
                    }`}>
                      {(isSelected || isAlreadyInList) && <Check className="h-3.5 w-3.5" />}
                    </div>
                    <span className={`text-sm ${isAlreadyInList ? 'text-muted-foreground' : 'text-foreground'}`}>
                      {item}
                      {isAlreadyInList && " (Already added)"}
                    </span>
                  </div>
                )
              })}

              {showCustomAdd && (
                <div 
                  className={`flex items-center gap-3 p-3 rounded-xl border transition-colors cursor-pointer ${
                    selectedItems.includes(searchQuery.trim()) ? 'border-primary bg-primary/5' : 'border-border hover:bg-muted/30'
                  }`}
                  onClick={() => toggleModalItemSelection(searchQuery.trim())}
                >
                  <div className={`w-5 h-5 rounded flex items-center justify-center border ${
                    selectedItems.includes(searchQuery.trim()) ? 'bg-primary border-primary text-primary-foreground' : 'border-input bg-background'
                  }`}>
                    {selectedItems.includes(searchQuery.trim()) && <Check className="h-3.5 w-3.5" />}
                  </div>
                  <span className="text-sm">
                    Add custom item: <span className="font-semibold">&quot;{searchQuery.trim()}&quot;</span>
                  </span>
                </div>
              )}
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button 
              onClick={handleConfirmModal} 
              className="bg-primary text-white"
            >
              Confirm Selection
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
