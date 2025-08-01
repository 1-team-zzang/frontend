import { format } from 'date-fns'

import { AppointmentBadge, PrivateScheduleBadge, Text } from '@/shared/ui'
import { ScheduleBadge } from '@/shared/ui/calendar'

import type { Schedule } from '@/entities/schedule'

interface Props {
  date: Date
  scheduleMap: Record<string, Schedule[]>
  isMine?: boolean
}

export default function RenderScheduleBadges({ date, scheduleMap, isMine = false }: Props) {
  const key = format(date, 'yyyy-MM-dd')
  const schedules = scheduleMap[key] ?? []
  const visible = schedules.slice(0, 1)
  const hiddenCount = schedules.length - visible.length

  return (
    <>
      {visible.map((s) => {
        if (isMine) {
          return s.appointmentId ? (
            <AppointmentBadge key={s.scheduleId} color={s.color}>
              {s.title}
            </AppointmentBadge>
          ) : (
            <ScheduleBadge key={s.scheduleId} color={s.color}>
              {s.title}
            </ScheduleBadge>
          )
        } else {
          return s.isVisible ? (
            s.appointmentId ? (
              <AppointmentBadge key={s.scheduleId} color={s.color}>
                {s.title}
              </AppointmentBadge>
            ) : (
              <ScheduleBadge key={s.scheduleId} color={s.color}>
                {s.title}
              </ScheduleBadge>
            )
          ) : (
            <PrivateScheduleBadge key={s.scheduleId} />
          )
        }
      })}

      {hiddenCount > 0 && (
        <Text typography="caption-10" className="w-full text-left text-gray-80 z-base">
          +{hiddenCount}
        </Text>
      )}
    </>
  )
}
