import { format } from 'date-fns'

import { useCalendarContext } from './hooks/use-calendar-context'
import Text from '../text/text'

/**
 * @description  YYYY.MM 표시 헤더
 *
 */

export default function CalendarHeader() {
  const { currentMonth } = useCalendarContext()
  return (
    <div className="w-full flex items-center justify-between p-1">
      <Text as="button" typography="b2-normal">
        오늘
      </Text>
      <Text as="h2" typography="h2-normal">
        {format(currentMonth, 'yyyy.MM')}
      </Text>
      <Text as="button" typography="b2-normal">
        공유
      </Text>
    </div>
  )
}
