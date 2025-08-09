import { useEffect, type Dispatch, type RefObject, type SetStateAction } from 'react'

import { getNextMonth, getPrevMonth } from '../utils/date'

import type { Month } from '../type/calendar.types'

interface Props {
  topRef: RefObject<HTMLDivElement | null>
  bottomRef: RefObject<HTMLDivElement | null>
  scrollContainerRef: RefObject<HTMLDivElement | null>
  setMonths: Dispatch<SetStateAction<Month[]>>
  disablePrev?: boolean
}

export function useInfiniteCalendarScroll({
  topRef,
  bottomRef,
  scrollContainerRef,
  setMonths,
  disablePrev = false, // ← 기본 false
}: Props) {
  useEffect(() => {
    const root = scrollContainerRef.current
    const top = topRef.current
    const bottom = bottomRef.current
    if (!root || !bottom || (!top && !disablePrev)) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === top && !disablePrev) {
              setMonths((prev) => {
                const first = prev[0]
                return [getPrevMonth(first), ...prev]
              })
            }
            if (entry.target === bottom) {
              setMonths((prev) => {
                const last = prev[prev.length - 1]
                return [...prev, getNextMonth(last)]
              })
            }
          }
        })
      },
      { root, rootMargin: '200px' },
    )

    if (top && !disablePrev) {
      observer.observe(top)
    }
    observer.observe(bottom!)

    return () => {
      if (top && !disablePrev) {
        observer.unobserve(top)
      }
      observer.unobserve(bottom!)
    }
  }, [topRef, bottomRef, scrollContainerRef, setMonths, disablePrev])
}
