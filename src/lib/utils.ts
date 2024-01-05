import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format viewer count to be more readable
 * @param count The viewer count
 * @returns The formatted viewer count
 */
export function formatViewerCount(count: number | null, short = false): string {
  if (count === null || count === 0) return "0"

  if (short) {
    if (count < 1_000) {
      return String(count)
    } else {
      const divisor = count < 1_000_000 ? 1_000 : 1_000_000
      const symbol = count < 1_000_000 ? "k" : "m"
      const value = count / divisor
      const formattedValue =
        value % 1 === 0 ? Math.floor(value).toString() : value.toFixed(1)
      return `${formattedValue}${symbol}`
    }
  }

  return count.toLocaleString()
}
