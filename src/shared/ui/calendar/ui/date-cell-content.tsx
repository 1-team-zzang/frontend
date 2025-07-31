// src/features/my-schedule/ui/render-my-schedule-cell-content.ts

import { format } from 'date-fns'

import { PrivateSchedule, ScheduleBadgeFill, ScheduleBadgeMarker } from '@/shared/ui/calendar'
import Text from '@/shared/ui/text/text'

import type { Schedule } from '@/entities/schedule'

interface Props {
  scheduleMap: Record<string, Schedule[]> // 날짜별 스케줄 목록
  date: Date // 현재 날짜
  isPast?: boolean // 과거 날짜 여부
  isMine?: boolean // 내 일정 여부
}

export default function DateCellContent({ scheduleMap, date, isPast = false, isMine = false }: Props) {
  const key = format(date, 'yyyy-MM-dd') //2025-01-01
  const items = scheduleMap[key] || [] // 해당 날짜에 대한 스케줄 목록
  const visible = items.slice(0, 1) // 최대 1개만 표시 2개 이상이면 +n 표시
  const hiddenCount = items.length - visible.length // 숨겨진 스케줄 개수

  return (
    <div className="flex flex-col gap-1 w-full px-1">
      {!isPast &&
        visible.map((item) => {
          if (!(isMine || item.isVisible)) {
            return <PrivateSchedule key={item.title} />
          }

          if (item.appointmentId) {
            return (
              <ScheduleBadgeMarker key={item.title} color={item.color}>
                {item.title}
              </ScheduleBadgeMarker>
            )
          }

          return (
            <ScheduleBadgeFill key={item.title} color={item.color}>
              {item.title}
            </ScheduleBadgeFill>
          )
        })}

      {!isPast && hiddenCount > 0 && (
        <Text as="span" typography="caption-10" className="w-full text-left text-gray-80 z-base">
          +{hiddenCount}
        </Text>
      )}
    </div>
  )
}
