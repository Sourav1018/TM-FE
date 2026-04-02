export const getTagStyles = (tag: string) => {
  const normalized = tag.toUpperCase()
  if (normalized.includes("HIKING") || normalized.includes("TREKKING"))
    return "border-primary text-primary bg-white font-bold"
  if (normalized.includes("MOUNTAIN") || normalized.includes("SNOW"))
    return "border-muted-foreground text-muted-foreground bg-white font-bold"
  if (normalized.includes("PHOTOGRAPHY") || normalized.includes("LUXURY"))
    return "border-tertiary text-tertiary bg-white font-bold"
  if (
    normalized.includes("ADVENTURE") ||
    normalized.includes("WILDLIFE") ||
    normalized.includes("SAFARI")
  )
    return "border-primary-container text-primary-container bg-white font-bold"
  if (
    normalized.includes("CULTURE") ||
    normalized.includes("HISTORY") ||
    normalized.includes("ART")
  )
    return "border-secondary text-[#B8860B] bg-white font-bold"
  if (
    normalized.includes("WELLNESS") ||
    normalized.includes("RELAX") ||
    normalized.includes("SPA")
  )
    return "border-pink-400 text-pink-400 bg-white font-bold"
  if (
    normalized.includes("BEACH") ||
    normalized.includes("COASTAL") ||
    normalized.includes("OCEAN")
  )
    return "border-cyan-500 text-cyan-500 bg-white font-bold"
  if (normalized.includes("FAMILY") || normalized.includes("KIDS"))
    return "border-orange-400 text-orange-400 bg-white font-bold"
  return "border-border text-muted-foreground bg-white font-bold"
}
