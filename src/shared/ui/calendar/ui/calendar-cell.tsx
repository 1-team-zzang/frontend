import CalendarCellDate from './calendar-cell-date'
import CalendarFirstDateLabel from './calendar-first-date-label'

/**
 * @description
 * 날짜 셀 하나를 나타내는 컴포넌트입니다.
 * - 날짜의 상태(선택됨, 오늘, 주말 등)를 나타내는 variants를 CalendarCellDate에 전달하여 스타일링합니다.
 *
 * @param date 렌더링할 날짜 객체 (Date)
 * @param variants 날짜의 스타일 상태를 나타내는 플래그들 (선택됨, 오늘, 주말 등)
 */
interface Props {
  date: Date
  isThisMonthDate: boolean
}

export default function CalendarCell({ date, isThisMonthDate }: Props) {
  return (
    <button className="h-[5rem] flex flex-col items-center border-t border-t-gray-10 gap-1 relative">
      <CalendarCellDate isThisMonthDate={isThisMonthDate} date={date}>
        {date.getDate()}
      </CalendarCellDate>
      <CalendarFirstDateLabel date={date} isThisMonthDate={isThisMonthDate} />
    </button>
  )
}
