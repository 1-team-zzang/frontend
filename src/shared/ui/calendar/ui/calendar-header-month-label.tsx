import Text from '../../text/text'
import { useCalendarContext } from '../hooks/calendar-context'

export default function CalendarHeaderMonthLabel() {
  const { visibleMonth } = useCalendarContext()
  const currentYear = new Date().getFullYear()

  return (
    <Text as="span" typography="h1-normal">
      {visibleMonth !== null ? `${currentYear}.${visibleMonth + 1}` : ''}
    </Text>
  )
}
