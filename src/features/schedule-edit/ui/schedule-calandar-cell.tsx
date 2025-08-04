interface ScheduleCalendarCellProps {
  year: number
  month: number
  date: number
  isSelected?: boolean
  isToday?: boolean
  onClick?: () => void
}

export default function ScheduleEditCalendarCell({ date, isSelected, isToday, onClick }: ScheduleCalendarCellProps) {
  return (
    <button
      onClick={onClick}
      className={`flex p-2.5 rounded-lg justify-center items-center
        ${isSelected ? 'bg-primary-70 text-white' : 'hover:bg-primary-5'}
        ${!isSelected && isToday ? 'text-primary-80' : ''}
      `}
    >
      {date}
    </button>
  )
}
