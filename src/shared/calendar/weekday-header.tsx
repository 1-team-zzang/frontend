import { cn } from '../utils'

const WEEK = ['일', '월', '화', '수', '목', '금', '토']

/**일~토 요일 헤더 */
export default function WeekdayHeader() {
  return (
    <div className="grid grid-cols-7">
      {WEEK.map((day) => {
        return (
          <p className={cn(day === '일' && 'text-primary-99')} key={day}>
            {day}
          </p>
        )
      })}
    </div>
  )
}
