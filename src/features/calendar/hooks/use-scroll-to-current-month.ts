import { useCallback } from 'react'

import { useCalendarContext } from '../ui/calendar-context'

/**
 *
 * 클릭했을 때 이번달로 이동하는 훅
 */

export function useScrollToCurrentMonth() {
  const { currentMonthRef } = useCalendarContext()

  return useCallback(() => {
    if (currentMonthRef?.current) {
      currentMonthRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }, [currentMonthRef])
}
