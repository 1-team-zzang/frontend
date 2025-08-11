import { useEffect, type Dispatch, type RefObject, type SetStateAction } from 'react'

import type { Month } from '@/entities/calendar/model'

interface Props {
  scrollContainerRef: RefObject<HTMLDivElement | null>
  setVisibleMonth: Dispatch<SetStateAction<Month | null>>
  monthRefs: RefObject<Map<string, HTMLDivElement>>
  months: Month[]
}

export function useVisibleMonthObserver({ scrollContainerRef, setVisibleMonth, monthRefs, months }: Props) {
  useEffect(() => {
    const root = scrollContainerRef.current
    const currentMonthRefs = monthRefs.current
    if (!root) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting) //지금 보이는부분만 필터링
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top) //화면에 제일 위에 있는것부터 정렬

        const firstVisible = visibleEntries[0]
        if (firstVisible) {
          const dataKey = firstVisible.target.getAttribute('data-key')
          if (dataKey) {
            const [year, month] = dataKey.split('-').map(Number)
            setVisibleMonth({ year, month })
          }
        }
      },
      {
        root,
        threshold: 0.8,
      },
    )

    currentMonthRefs.forEach((el) => observer.observe(el))
    return () => {
      currentMonthRefs.forEach((el) => observer.unobserve(el))
    }
  }, [months, monthRefs, scrollContainerRef, setVisibleMonth])
}
