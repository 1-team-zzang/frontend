import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Combines and merges class names using `clsx` and resolves Tailwind CSS class conflicts with `twMerge`.
 *
 * Accepts any number of class name values, including conditional and array forms, and returns a single optimized class string.
 *
 * @returns The merged and deduplicated class string.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
