import { cn } from '../utils'

/**
 * @description  일~토 요일 표시 헤더,
 *
 *
 *
 */

const WEEK = ['일', '월', '화', '수', '목', '금', '토']

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
