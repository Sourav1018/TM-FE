import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

const shortDateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
})

const numericDateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "2-digit",
  day: "2-digit",
  year: "numeric",
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatShortDate(date: Date) {
  return shortDateFormatter.format(date)
}

export function formatNumericDate(date: Date) {
  return numericDateFormatter.format(date)
}
