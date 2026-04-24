"use client"

import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ImagePlus, Trash2 } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const GALLERY_IMAGES = [
  { id: "1", src: "/images/gallery/amalfi.png", alt: "Amalfi Coast" },
  { id: "2", src: "/images/gallery/venice.png", alt: "Venice Canal" },
  { id: "3", src: "/images/gallery/alps.png", alt: "Swiss Alps" },
]

export function GalleryEditor() {
  const [heroImage, setHeroImage] = useState<string | null>("/images/packages/hero.jpg")
  const [galleryImages, setGalleryImages] = useState(GALLERY_IMAGES)

  const handleHeroUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setHeroImage(url)
    }
  }

  const handleGalleryUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      const newImages = Array.from(files).map(file => ({
        id: Math.random().toString(36).substr(2, 9),
        src: URL.createObjectURL(file),
        alt: file.name
      }))
      setGalleryImages([...galleryImages, ...newImages])
    }
  }

  const removeGalleryImage = (id: string) => {
    setGalleryImages(galleryImages.filter(img => img.id !== id))
  }

  return (
    <div className="flex flex-col gap-12">
      {/* Hidden Inputs */}
      <Input 
        type="file" 
        id="hero-upload" 
        className="hidden" 
        accept="image/*" 
        onChange={handleHeroUpload} 
      />
      <Input 
        type="file" 
        id="gallery-upload" 
        className="hidden" 
        accept="image/*" 
        multiple 
        onChange={handleGalleryUpload} 
      />

      {/* Hero Image Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between px-1">
          <Label className="text-sm font-bold text-foreground">Hero Image (Cover)</Label>
        </div>
        
        {heroImage ? (
          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-[2.5rem] border border-border bg-muted/20 group shadow-sm transition-all hover:shadow-md">
            <Image 
              src={heroImage} 
              alt="Hero" 
              fill 
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Overlay Actions - Only Delete */}
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <Button 
                variant="secondary"
                size="icon"
                onClick={() => setHeroImage(null)}
                className="h-14 w-14 rounded-full bg-background shadow-lg border border-border hover:scale-110 hover:text-destructive transition-all duration-300 group/btn"
              >
                <Trash2 className="w-6 h-6 text-muted-foreground group-hover/btn:text-destructive" />
              </Button>
            </div>
          </div>
        ) : (
          <Button 
            variant="ghost"
            onClick={() => document.getElementById("hero-upload")?.click()}
            className="flex flex-col items-center justify-center aspect-[21/9] w-full h-auto rounded-[2.5rem] border-2 border-dashed border-border bg-muted/10 hover:bg-muted/20 hover:border-primary/40 transition-all gap-4 group"
          >
            <div className="p-4 rounded-2xl bg-background shadow-sm border border-border group-hover:scale-110 group-hover:border-primary/20 group-hover:text-primary transition-all duration-300">
              <ImagePlus className="w-8 h-8 text-muted-foreground group-hover:text-primary" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-base font-bold text-muted-foreground group-hover:text-primary transition-colors">Upload Hero Image</span>
              <span className="text-xs text-muted-foreground/60">Recommended size: 1920x820px</span>
            </div>
          </Button>
        )}
      </div>

      {/* Gallery Photos Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between px-1">
          <Label className="text-sm font-bold text-foreground">Gallery Photos</Label>
          <span className="text-xs font-medium text-muted-foreground">{galleryImages.length} / 12 photos</span>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {galleryImages.map((img) => (
            <div 
              key={img.id} 
              className="group relative aspect-square overflow-hidden rounded-[2rem] border border-border bg-muted/20 shadow-sm transition-all hover:shadow-md"
            >
              <Image 
                src={img.src} 
                alt={img.alt} 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay Actions */}
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-all duration-300 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                <Button 
                  variant="secondary"
                  size="icon"
                  onClick={() => removeGalleryImage(img.id)}
                  className="h-10 w-10 rounded-full bg-background/90 text-foreground/60 hover:text-destructive hover:bg-background transition-all shadow-sm"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
          
          {/* Upload More Button */}
          <Button 
            variant="ghost"
            onClick={() => document.getElementById("gallery-upload")?.click()}
            className="flex flex-col items-center justify-center aspect-square h-auto rounded-[2rem] border-2 border-dashed border-border bg-muted/10 hover:bg-muted/20 hover:border-primary/40 transition-all gap-4 group"
          >
            <div className="p-4 rounded-2xl bg-background shadow-sm border border-border group-hover:scale-110 group-hover:border-primary/20 group-hover:text-primary transition-all duration-300">
              <ImagePlus className="w-6 h-6 text-muted-foreground group-hover:text-primary" />
            </div>
            <span className="text-sm font-bold text-muted-foreground group-hover:text-primary transition-colors">Upload More</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
