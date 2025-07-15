import CalendarCellDate from './calendar-cell-date'

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
