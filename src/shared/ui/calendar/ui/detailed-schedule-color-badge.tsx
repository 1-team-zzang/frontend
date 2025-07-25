import { cva } from 'class-variance-authority'

import type { ColorType } from '@/entities/schedule'

const variants = cva('size-4 rounded-full', {
  variants: {
    badgeColor: {
      red: 'bg-calendar-red',
      yellow: 'bg-calendar-yellow',
      green: 'bg-calendar-green',
      blue: 'bg-calendar-blue',
      purple: 'bg-calendar-purple',
    },
  },
  defaultVariants: {
    badgeColor: 'red',
  },
})
export default function DetailedScheduleColorBadge({ badgeColor }: { badgeColor: ColorType }) {
  return <div className={variants({ badgeColor })} />
}
