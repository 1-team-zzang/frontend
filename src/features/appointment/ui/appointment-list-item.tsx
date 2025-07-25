import { Link } from 'react-router'

import Text from '@/shared/ui/text/text'
import { formatDateToYMD, formatDateTimeWithDay } from '@/shared/utils'

import AppointmentCard from './appointment-card'

import type { Appointment } from '@/entities/appointment/models'

export default function AppointmentListItem({
  title,
  requesterName,
  startAt,
  endAt,
  inviteAt,
}: Pick<Appointment, 'title' | 'requesterName' | 'startAt' | 'endAt' | 'inviteAt'>) {
  return (
    <Link to="/appointment/1">
      <AppointmentCard>
        <div className="flex justify-between items-center bg-gray-1 py-4 px-6">
          <div className="flex items-center gap-[0.313rem]">
            <Text typography="b2-heading">From</Text>
            <Text typography="b2-normal">{requesterName}</Text>
          </div>
          <Text typography="b2-normal" className="text-gray-60">
            {formatDateToYMD(inviteAt, 'dotted')}
          </Text>
        </div>
        <div className="flex flex-col items-center gap-[0.188rem] py-6">
          <Text typography="b2-heading">{title}</Text>
          <div className="flex items-center gap-[0.313rem]">
            <Text typography="b2-heading">시작</Text>
            <Text typography="b2-normal">{formatDateTimeWithDay(startAt)}</Text>
          </div>
          <div className="flex items-center gap-[0.313rem]">
            <Text typography="b2-heading">종료</Text>
            <Text typography="b2-normal">{formatDateTimeWithDay(endAt)}</Text>
          </div>
        </div>
      </AppointmentCard>
    </Link>
  )
}
