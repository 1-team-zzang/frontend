import { formatColor } from '@/features/schedule-edit/model/format-color-map'
import Text from '@/shared/ui/text/text'
import { formatDateTimeWithDay } from '@/shared/utils'

import type { AppointmentDetail } from '@/entities/appointment/models/appointment.types'

export default function AppointmentSchedule({
  title,
  startAt,
  endAt,
  color,
}: Pick<AppointmentDetail, 'title' | 'startAt' | 'endAt' | 'color'>) {
  const colorMap = formatColor()
  return (
    <div className="flex flex-col gap-4 px-6 pt-5 pb-6">
      <div className="flex items-center gap-4">
        <div className={`w-4 h-4 rounded-full ${colorMap[color]}`} />
        <Text typography="b2-heading">{title}</Text>
      </div>
      <div>
        <div className="flex gap-2">
          <Text typography="b2-heading">시작</Text>
          <Text typography="b2-normal">{formatDateTimeWithDay(startAt)}</Text>
        </div>
        <div className="flex gap-2">
          <Text typography="b2-heading">종료</Text>
          <Text typography="b2-normal">{formatDateTimeWithDay(endAt)}</Text>
        </div>
      </div>
    </div>
  )
}
