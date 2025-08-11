import { Text } from '@/shared/ui'

import { useCalendarContext } from '../model'

export default function HeaderMonthLabel() {
  const { visibleMonth } = useCalendarContext()

  if (!visibleMonth) {
    return null
  }
  return (
    <Text typography="h2-heading">
      {visibleMonth.year}.{(visibleMonth.month + 1).toString().padStart(2, '0')}
    </Text>
  )
}
