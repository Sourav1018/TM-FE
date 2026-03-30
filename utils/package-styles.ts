export const getTagStyles = (tag: string) => {
  const normalized = tag.toUpperCase()
  if (normalized.includes("HIKING")) return "border-primary text-primary bg-white font-bold"
  if (normalized.includes("MOUNTAIN")) return "border-muted-foreground text-muted-foreground bg-white font-bold"
  if (normalized.includes("PHOTOGRAPHY") || normalized.includes("LUXURY")) return "border-tertiary text-tertiary bg-white font-bold"
  if (normalized.includes("ADVENTURE") || normalized.includes("WILDLIFE")) return "border-primary-container text-primary-container bg-white font-bold"
  return "border-border text-muted-foreground bg-white font-bold"
}
