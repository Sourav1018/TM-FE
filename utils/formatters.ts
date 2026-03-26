/**
 * Formats a number of seconds into a M:SS string format.
 * 
 * @example
 * formatTime(59) // "0:59"
 * formatTime(125) // "2:05"
 * 
 * @param seconds - The total number of seconds to format.
 * @returns A formatted string in "minutes:seconds" format.
 */
export const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${mins}:${secs.toString().padStart(2, "0")}`
}
