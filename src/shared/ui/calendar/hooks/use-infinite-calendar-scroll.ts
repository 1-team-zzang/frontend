import { useEffect, type Dispatch, type RefObject, type SetStateAction } from 'react'

import { getNextMonth, getPrevMonth } from '../utils/date'

import type { Month } from '../type/calendar.types'

interface Props {
  topRef: RefObject<HTMLDivElement | null>
  bottomRef: RefObject<HTMLDivElement | null>
  scrollContainerRef: RefObject<HTMLDivElement | null>
  setMonths: Dispatch<SetStateAction<Month[]>>
}

export default function useInfiniteCalendarScroll({ topRef, bottomRef, scrollContainerRef, setMonths }: Props) {
  useEffect(() => {
    const top = topRef.current
    const bottom = bottomRef.current
    const root = scrollContainerRef.current

    if (!top || !bottom || !root) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            //위에 닿았을 때
            if (entry.target === top) {
              setMonths((prev) => {
                const first = prev[0]
                const newMonth = getPrevMonth(first)
                return [newMonth, ...prev]
              })
            }
            //아래에 닿았을때
            if (entry.target === bottom) {
              setMonths((prev) => {
                const last = prev[prev.length - 1]
                const newMonth = getNextMonth(last)
                return [...prev, newMonth]
              })
            }
          }
        })
      },
      { root, rootMargin: '200px' },
    )

    observer.observe(top)
    observer.observe(bottom)

    return () => {
      observer.unobserve(top)
      observer.unobserve(bottom)
    }
  }, [topRef, bottomRef, scrollContainerRef, setMonths])
}
