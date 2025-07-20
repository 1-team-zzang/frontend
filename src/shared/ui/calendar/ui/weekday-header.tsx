import { cva } from 'class-variance-authority'

import Text from '../../text/text'

/**
 * @description  일~토 요일 표시 헤더,
 *
 *
 *
 */

const WEEK = ['일', '월', '화', '수', '목', '금', '토']

const headerVariants = cva('text-center bg-gray-5 mb-1 py-1', {
  variants: {
    isSunday: { true: 'text-red' },
    isSaturday: { true: 'text-blue' },
  },
})

export default function WeekdayHeader() {
  return (
    <div className="grid grid-cols-7">
      {WEEK.map((day) => {
        return (
          <Text
            as="span"
            typography="caption-10"
            className={headerVariants({ isSunday: day === '일', isSaturday: day === '토' })}
            key={day}
            role="columnheader"
            aria-label={`${day}요일`}
          >
            {day}
          </Text>
        )
      })}
    </div>
  )
}
