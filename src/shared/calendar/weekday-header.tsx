import { cva } from 'class-variance-authority'

/**
 * @description  일~토 요일 표시 헤더,
 *
 *
 *
 */

const WEEK = ['일', '월', '화', '수', '목', '금', '토']

const headerVariants = cva('', {
  variants: {
    isSunday: { true: 'text-red' },
  },
})

export default function WeekdayHeader() {
  return (
    <div className="grid grid-cols-7">
      {WEEK.map((day) => {
        return (
          <p className={headerVariants({ isSunday: day === '일' })} key={day}>
            {day}
          </p>
        )
      })}
    </div>
  )
}
