import { type ReactNode } from 'react'

import Text from '@/shared/ui/text/text'

import DetailedScheduleColorBadge from './detailed-schedule-color-badge'

import type { ColorType } from '@/entities/schedule'

interface Props {
  title: string
  time: string
  badgeColor: ColorType
  onCardClick: () => void
  children?: ReactNode
}

export default function DetailedScheduleListCard({ title, time, badgeColor, onCardClick, children }: Props) {
  return (
    <div className="w-full bg-white h-[5.625em] rounded-[0.625rem]">
      <div className="w-full flex justify-between p-4">
        {/* 일정 정보부분 */}
        <button onClick={onCardClick} className="flex items-center gap-4 ">
          <DetailedScheduleColorBadge badgeColor={badgeColor} />
          <div className="flex flex-col">
            <Text as="span" typography="h2-heading" className="text-start">
              {title}
            </Text>
            <Text as="span" typography="b2-normal" className="text-gray-60 text-start">
              {time}
            </Text>
          </div>
        </button>
        {children}
      </div>
    </div>
  )
}
