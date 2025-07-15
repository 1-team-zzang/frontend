import CalendarCellContent from './calendar-cell-content'

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

export default function CalendarDateCell({ date, variants, handleSelectedDate }: Props) {
  return (
    <button onClick={() => handleSelectedDate(date)} className="h-[5rem] flex justify-center border-t border-t-gray-10">
      <CalendarCellContent {...variants}>{date.getDate()}</CalendarCellContent>
    </button>
  )
}
