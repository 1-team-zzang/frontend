/* eslint-disable react/jsx-no-useless-fragment */
import type { ReactNode } from 'react'

/**
 * Renders its children without introducing an extra DOM element.
 *
 * Useful for slotting content while preserving the DOM structure.
 *
 * @param children - The content to render
 */
export function Slottable({ children }: { children: ReactNode }) {
  return <>{children}</>
}
