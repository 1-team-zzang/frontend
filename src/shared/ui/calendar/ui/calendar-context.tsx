import { createContextScope } from '@/shared/utils'

import type { Month } from '../type/calendar.types'
import type { Dispatch, SetStateAction } from 'react'

export interface CalendarContextValue {
  visibleMonth: Month | null
  setVisibleMonth: Dispatch<SetStateAction<Month | null>>
  onDateClick?: (date: Date) => void
}

const createBottomSheetContext = createContextScope()

export const [CalendarProvider, useCalendarContext] = createBottomSheetContext<CalendarContextValue>()
