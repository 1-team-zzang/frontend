import CalendarCellDate from './calendar-cell-date'

/**
 * @description
 * 날짜 셀 하나를 나타내는 컴포넌트입니다.
 * - 해당 날짜를 클릭하면 handleSelectedDate 함수가 호출되어 선택 이벤트를 처리합니다.
 * - 날짜의 상태(선택됨, 오늘, 주말 등)를 나타내는 variants를 CalendarCellDate에 전달하여 스타일링합니다.
 *
 * @param date 렌더링할 날짜 객체 (Date)
 * @param variants 날짜의 스타일 상태를 나타내는 플래그들 (선택됨, 오늘, 주말 등)
 * @param handleSelectedDate 사용자가 날짜를 클릭했을 때 실행할 콜백 함수
 */
interface Props {
  date: Date
  variants: {
    isSelectedDate: boolean
    isCurrentMonth: boolean
    isSunday: boolean
    isSaturday: boolean
    isTodayDate: boolean
  }
  handleSelectedDate: (date: Date) => void
}

export default function CalendarCell({ date, variants, handleSelectedDate }: Props) {
  return (
    <button
      onClick={() => handleSelectedDate(date)}
      className="h-[5rem] flex flex-col items-center border-t border-t-gray-10 gap-1"
    >
      <CalendarCellDate {...variants}>{date.getDate()}</CalendarCellDate>
    </button>
  )
}
