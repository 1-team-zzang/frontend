// src/features/my-schedule/ui/render-my-schedule-cell-content.ts

import { format } from 'date-fns'

import { ScheduleBadgeFill } from '@/shared/ui/calendar'
import Text from '@/shared/ui/text/text'

import type { Schedule } from '@/entities/schedule'

interface Props {
  scheduleMap: Record<string, Schedule[]>
  date: Date
}

export function renderMyScheduleCellContent({ scheduleMap, date }: Props) {
  const key = format(date, 'yyyy-MM-dd')
  const items = scheduleMap[key] || []
  const visible = items.slice(0, 1)
  const hiddenCount = items.length - visible.length

  return (
    <div className="flex flex-col gap-1 w-full px-1">
      {visible.map((item) => (
        <ScheduleBadgeFill key={item.title} color={item.color}>
          {item.title}
        </ScheduleBadgeFill>
      ))}
      {hiddenCount > 0 && (
        <Text as="span" typography="caption-10" className="w-full text-left text-gray-80">
          +{hiddenCount}
        </Text>
      )}
    </div>
  )
}
