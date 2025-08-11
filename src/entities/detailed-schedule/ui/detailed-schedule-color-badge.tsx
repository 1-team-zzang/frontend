import { cva } from 'class-variance-authority'

import type { ColorType } from '@/entities/schedule/lib'

const variants = cva('size-4 rounded-full', {
  variants: {
    badgeColor: {
      RED: 'bg-calendar-red',
      YELLOW: 'bg-calendar-yellow',
      GREEN: 'bg-calendar-green',
      BLUE: 'bg-calendar-blue',
      PURPLE: 'bg-calendar-purple',
    },
  },
  defaultVariants: {
    badgeColor: 'RED',
  },
})
export default function DetailedScheduleColorBadge({ badgeColor }: { badgeColor: ColorType }) {
  return <div className={variants({ badgeColor })} />
}
