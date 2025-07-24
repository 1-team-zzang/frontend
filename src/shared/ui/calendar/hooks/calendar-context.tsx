import { createContextScope } from '@/shared/utils'

import type { MutableRefObject, ReactNode, RefObject } from 'react'

interface CalendarContextValue {
  containerRef: RefObject<HTMLDivElement | null>
  visibleMonth: number | null
  monthRefs: MutableRefObject<(HTMLDivElement | null)[]>
  renderDateCellContent?: (date: Date) => ReactNode
  onDateClick?: (date: Date) => void
}

const createCalendarContext = createContextScope()

export const [CalendarProvider, useCalendarContext] = createCalendarContext<CalendarContextValue>()
