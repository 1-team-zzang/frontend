import { Link } from 'react-router'

import { useUserStore } from '@/entities/user/models/use-user-store'
import Text from '@/shared/ui/text/text'
import { formatDateTimeWithDay } from '@/shared/utils'

import AppointmentCard from './appointment-card'
import AppointmentSender from './appointment-sender'

import type { AppointmentStatus } from '@/entities/appointment/models'

interface AppointmentListItemProps {
  title: string
  requesterName: string
  receiverName: string
  startAt: string
  endAt: string
  inviteAt: string
  id: number
  status: AppointmentStatus
  appointmentStatus: string
}

export default function AppointmentListItem({
  title,
  requesterName,
  receiverName,
  startAt,
  endAt,
  inviteAt,
  id,
  status,
  appointmentStatus,
}: AppointmentListItemProps) {
  const currentUser = useUserStore((state) => state.user)

  // 응답한 약속이거나 권한이 없는 약속은 클릭 불가
  const isResponded = status === 'RESPONDED' || appointmentStatus === 'ACCEPTED' || appointmentStatus === 'REJECTED'
  const canRespond = currentUser && receiverName === currentUser.name && appointmentStatus === 'REQUESTED'
  const isClickable = !isResponded && (canRespond || requesterName === currentUser?.name)

  return (
    <Link to={`/appointments/requests/${id}`} className={!isClickable ? 'pointer-events-none' : ''}>
      <AppointmentCard className="p-0" disabled={!isClickable}>
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
