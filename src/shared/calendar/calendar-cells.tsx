import { isSameDay, isSameMonth, isToday } from 'date-fns'

import DateButton from './calendar-date-button'
import { useCalendarContext } from './hooks/use-calendar-context'

/**
 * @description 캘린더의 날짜 셀들을 렌더링하는 컴포넌트입니다.
 * - context에서 현재 달 정보와 선택된 날짜 상태를 가져옵니다.
 * - Button 컴포넌트를 통해 각 날짜 셀의 스타일과 선택 여부를 설정합니다.
 */
export default function CalendarCells() {
  const { currentMonth, currentMonthAllDates, selectedDate, handleSelectedDate } = useCalendarContext()

  return (
    <div className="grid grid-cols-7">
      {currentMonthAllDates.map((date) => (
        <DateButton
          key={date.getTime()}
          onClick={() => handleSelectedDate(date)}
          isSelectedDate={isSameDay(selectedDate, date)}
          isToday={isToday(date)}
          isSunday={date.getDay() === 0 && isSameMonth(date, currentMonth)}
          isCurrentMonth={isSameMonth(date, currentMonth)}
        >
          {date.getDate()}
        </DateButton>
      ))}
    </div>
  )
}
