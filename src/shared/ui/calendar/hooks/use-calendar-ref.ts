import { useRef } from 'react'

export function useCalendarRef() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null)
  const topRef = useRef<HTMLDivElement | null>(null)
  const bottomRef = useRef<HTMLDivElement | null>(null)
  const currentMonthRef = useRef<HTMLDivElement | null>(null)
  const monthRefs = useRef<Map<string, HTMLDivElement>>(new Map())

  const setMonthRef = (key: string, isCurrent: boolean) => (el: HTMLDivElement | null) => {
    if (el) {
      monthRefs.current.set(key, el)
      if (isCurrent) {
        currentMonthRef.current = el
      }
    }
  }

  return {
    scrollContainerRef,
    topRef,
    bottomRef,
    currentMonthRef,
    monthRefs,
    setMonthRef,
  }
}
