import { cn } from '../utils'

/**일~토 요일 보여주는 컴포너트 */
export default function DayOfWeek() {
  const week = ['일', '월', '화', '수', '목', '금', '토']
  return (
    <div className="grid grid-cols-7">
      {week.map((day, idx) => {
        return (
          <p className={cn(day === '일' && 'text-primary-99')} key={idx}>
            {day}
          </p>
        )
      })}
    </div>
  )
}
