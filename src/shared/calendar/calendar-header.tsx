import { format } from 'date-fns'

import Button from './calendar-date-button'
interface Props {
  currentMonth: Date
  onNextMonth: () => void
  onPrevMonth: () => void
}

export default function CalendarHeader({ currentMonth, onNextMonth, onPrevMonth }: Props) {
  return (
    <div className="flex gap-1">
      <Button onClick={onPrevMonth}>{'〈'}</Button>
      <span>{format(currentMonth, 'yyyy.MM')}</span>
      <Button onClick={onNextMonth}>{'〉'}</Button>
    </div>
  )
}
