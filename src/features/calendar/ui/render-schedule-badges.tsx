import { format, isBefore, startOfDay } from 'date-fns'

import { Text } from '@/shared/ui'

import { AppointmentBadge, PrivateScheduleBadge, ScheduleBadge } from '.'

import type { Schedule } from '@/entities/schedule/models'

interface Props {
  date: Date
  scheduleMap: Record<string, Schedule[]>
  isMyCalendar?: boolean
  isShareCalendar?: boolean
}

export default function RenderScheduleBadges({
  date,
  scheduleMap,
  isMyCalendar = false,
  isShareCalendar = false,
}: Props) {
  const key = format(date, 'yyyy-MM-dd')
  const schedules = scheduleMap[key] ?? []
  const visible = schedules.slice(0, 1)
  const hiddenCount = schedules.length - visible.length

  if (isShareCalendar && isBefore(startOfDay(date), startOfDay(new Date()))) {
    return null
  }

  const renderBadge = (schedule: Schedule) => {
    const BadgeComponent = schedule.appointmentId ? AppointmentBadge : ScheduleBadge
    return (
      <BadgeComponent key={schedule.scheduleId} color={schedule.color}>
        {schedule.title}
      </BadgeComponent>
    )
  }
  return (
    <>
      {visible.map((s) => {
        if (isMyCalendar || s.isVisible) {
          return renderBadge(s)
        }
        return <PrivateScheduleBadge key={s.scheduleId} />
      })}

      {hiddenCount > 0 && (
        <Text typography="caption-10" className="w-full text-left text-gray-80 z-base">
          +{hiddenCount}
        </Text>
      )}
    </>
  )
}
