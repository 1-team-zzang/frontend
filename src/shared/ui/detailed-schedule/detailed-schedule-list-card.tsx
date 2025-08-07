import { type ReactNode } from 'react'

import { IconLockGray } from '@/shared/assets/icons'
import Text from '@/shared/ui/text/text'

import DetailedScheduleColorBadge from './detailed-schedule-color-badge'

import type { ColorType } from '@/entities/schedule/models'

interface Props {
  title: string
  time: string
  badgeColor: ColorType
  onCardClick: () => void
  isVisible?: boolean
  children?: ReactNode
}

export default function DetailedScheduleListCard({
  title,
  time,
  badgeColor,
  isVisible = true,
  onCardClick,
  children,
}: Props) {
  return (
    <div className="relative flex items-center bg-white h-[5.625em] rounded-[0.625rem]">
      {/* 일정 정보부분 */}
      <button onClick={onCardClick} className="w-[90%] flex items-center gap-4 p-4">
        <DetailedScheduleColorBadge badgeColor={badgeColor} />
        <div className="w-3/4 flex flex-col">
          {isVisible ? (
            <Text as="span" typography="h2-heading" className="text-start truncate">
              {title}
            </Text>
          ) : (
            <IconLockGray className="size-5 my-1" />
          )}

          <Text as="span" typography="b2-normal" className="text-gray-60 text-start">
            {time}
          </Text>
        </div>
      </button>
      {/* 케밥버튼 */}
      <div className="absolute top-4 right-4">{children}</div>
    </div>
  )
}
