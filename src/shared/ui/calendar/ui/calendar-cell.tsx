import { cva } from 'class-variance-authority'

import { cn } from '@/shared/utils'

import Text from '../../text/text'
import { useCalendarContext } from '../hooks/calendar-context'
import { getDayInfo } from '../util/get-day-info'

interface Props {
  year: number
  month: number
  date: number
  showMonthLabel?: boolean
}

const contentVariants = cva('w-6 h-6 mt-1 rounded-full flex items-center justify-center', {
  variants: {
    isSunday: { true: 'text-red' },
    isSaturday: { true: 'text-blue' },
    isTodayDate: { true: 'bg-primary-30' },
  },
})
export default function CalendarCell({ year, month, date, showMonthLabel }: Props) {
  const { renderDateCellContent } = useCalendarContext()
  const { isSunday, isSaturday, isToday } = getDayInfo(year, month, date)

  const fullDate = new Date(year, month, date)
  return (
    <button className=" h-20 flex flex-col border-t border-gray-10">
      <div className="relative flex justify-center mb-1">
        <Text
          as="span"
          typography="caption"
          className={cn(contentVariants({ isSunday, isSaturday, isTodayDate: isToday }))}
        >
          {date}
        </Text>
        {showMonthLabel && (
          <Text as="span" typography="title-heading" className="absolute top-6 text-primary-1 z-base">
            0{month + 1}
          </Text>
        )}
      </div>

      <div>{renderDateCellContent?.(fullDate)}</div>
    </button>
  )
}
