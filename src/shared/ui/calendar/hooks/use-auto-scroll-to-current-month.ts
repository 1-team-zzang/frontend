import { useEffect } from 'react'

import { useCalendarContext } from '../ui/calendar-context'

/**
 * 초기 페이지 진입시 자동으로 이번달로 이동하는 훅
 */

export default function useAutoScrollToCurrentMonth() {
  const { currentMonthRef } = useCalendarContext()
  useEffect(() => {
    currentMonthRef?.current?.scrollIntoView({
      behavior: 'auto',
      block: 'start',
    })
  }, [])
}
