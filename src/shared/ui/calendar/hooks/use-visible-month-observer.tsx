import { useEffect, type Dispatch, type RefObject, type SetStateAction } from 'react'

import type { Month } from '../type/calendar.types'

interface Props {
  scrollContainerRef: RefObject<HTMLDivElement | null>
  setVisibleMonth: Dispatch<SetStateAction<Month | null>>
  monthRefs: RefObject<Map<string, HTMLDivElement>>
  months: Month[]
}

export default function useVisibleMonthObserver({ scrollContainerRef, setVisibleMonth, monthRefs, months }: Props) {
  useEffect(() => {
    const root = scrollContainerRef.current
    if (!root) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        const firstVisible = visibleEntries[0]
        if (firstVisible) {
          const [year, month] = firstVisible.target.getAttribute('data-key')!.split('-').map(Number)
          setVisibleMonth({ year, month })
        }
      },
      {
        root,
        threshold: 0.8,
      },
    )

    monthRefs.current.forEach((el) => observer.observe(el))
    return () => {
      monthRefs.current.forEach((el) => observer.unobserve(el))
    }
  }, [months])
}
