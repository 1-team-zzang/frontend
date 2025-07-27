import Text from '../../text/text'

import DetailedScheduleCardContent from './detailed-schedule-card-content'
import DetailedScheduleColorBadge from './detailed-schedule-color-badge'

import type { ColorType } from '@/entities/schedule'

interface Props {
  badgeColor: ColorType
  title: string
  startDate: string
  endDate: string
  repeat: string | null
}

export default function DetailedScheduleCard({ badgeColor, title, startDate, endDate, repeat }: Props) {
  const details = [
    { label: '시작', value: startDate },
    { label: '종료', value: endDate },
    { label: '반복', value: repeat },
  ]

  return (
    <div className="w-full bg-white p-6 rounded-[0.625em] flex flex-col gap-4 mb-4">
      <div className="flex gap-4 items-center">
        <DetailedScheduleColorBadge badgeColor={badgeColor} />
        <Text as="span" typography="h2-heading">
          {title}
        </Text>
      </div>
      <div className="flex flex-col gap-4">
        {details.map(({ label, value }) => (
          <DetailedScheduleCardContent key={label} label={label} value={value ?? ''} />
        ))}
      </div>
    </div>
  )
}
