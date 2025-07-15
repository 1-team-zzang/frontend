import CalendarDateCell from './calendar-date-cell'
import { isSameDay, isSameMonth, isToday } from 'date-fns'
import { useCalendarContext } from './hooks/use-calendar-context'

/**
 * @description
 * 한 달 단위의 날짜 셀(그리드)을 렌더링하는 컴포넌트입니다.
 * - 날짜 배열(dates[10])을 기준으로 해당 달을 대표하는 월을 판단합니다.
 * - 각 날짜 셀은 CalendarDateCell을 통해 렌더링되며,
 *   선택됨/오늘/토요일/일요일 등의 상태를 props로 전달받아 스타일링됩니다.
 */
interface Props {
  dates: Date[]
}

export default function CalendarMonth({ dates }: Props) {
  const { selectedDate, handleSelectedDate } = useCalendarContext()
  const month = dates[10]

  return (
    <div className="grid grid-cols-7">
      {dates.map((date) => (
        <CalendarDateCell
          key={date.getTime()}
          date={date}
          handleSelectedDate={handleSelectedDate}
          variants={{
            isSelectedDate: !!selectedDate && isSameDay(selectedDate, date),
            isCurrentMonth: isSameMonth(date, month),
            isSunday: date.getDay() === 0,
            isSaturday: date.getDay() === 6,
            isTodayDate: isToday(date),
          }}
        />
      ))}
    </div>
  )
}
