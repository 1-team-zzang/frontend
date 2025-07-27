import { Link } from 'react-router'

import Text from '@/shared/ui/text/text'
import { formatDateTimeWithDay } from '@/shared/utils'

import AppointmentCard from './appointment-card'
import AppointmentSender from './appointment-sender'

import type { AppointmentRequest, AppointmentStatus } from '@/entities/appointment/models'

export default function AppointmentListItem({
  title,
  requesterName,
  startAt,
  endAt,
  inviteAt,
  id,
  status,
}: Pick<AppointmentRequest, 'title' | 'requesterName' | 'startAt' | 'endAt' | 'inviteAt' | 'id'> & {
  status: AppointmentStatus
}) {
  const isResponded = status === 'RESPONDED'
  return (
    <Link to={`/appointment/requests/${id}`} className={isResponded ? 'pointer-events-none' : ''}>
      <AppointmentCard className="p-0" disabled={isResponded}>
        <AppointmentSender inviteAt={inviteAt} requesterName={requesterName} className="py-4 px-6 bg-gray-1" />
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
