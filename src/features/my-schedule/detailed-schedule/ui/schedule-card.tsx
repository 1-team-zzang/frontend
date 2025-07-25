import { cva } from 'class-variance-authority'

import { IconKebabMenu } from '@/shared/assets/icons'
import Text from '@/shared/ui/text/text'

import type { ColorType } from '@/entities/schedule'

interface Props {
  title: string
  time: string
  badgeColor: ColorType
}

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

export default function ScheduleCard({ title, time, badgeColor }: Props) {
  return (
    <div className="w-full bg-white h-[5.625em] rounded-[0.625rem]">
      <div className="w-full flex justify-between p-4">
        {/* 일정 정보부분 */}
        <div className="flex items-center gap-4 ">
          <div className={variants({ badgeColor })} />
          <div className="flex flex-col">
            <Text as="span" typography="h2-heading">
              {title}
            </Text>
            <Text as="span" typography="b2-normal" className="text-gray-60">
              {time}
            </Text>
          </div>
        </div>
        <IconKebabMenu />
      </div>
    </div>
  )
}
