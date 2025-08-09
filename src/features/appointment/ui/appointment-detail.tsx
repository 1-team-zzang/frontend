import { useNavigate, useParams } from 'react-router'

import { useUserStore } from '@/entities/user/models/use-user-store'

import useAppointmentById from '../models/use-appointment-by-id'
import { useRespondToMyAppointmentRequest } from '../models/use-respond-to-my-appointment-request'

import AppointmentDetailAcceptButton from './appointment-detail-accept-button'
import AppointmentDetailRejectButton from './appointment-detail-reject-button'
import AppointmentSender from './appointment-sender'

import { AppointmentCard, AppointmentHeader, AppointmentOverview, AppointmentSchedule } from '.'

export default function AppointmentDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const currentUser = useUserStore((state) => state.user)

  if (!id) {
    throw new Error('요청하신 약속 페이지가 존재하지 않아요.')
  }

  const { data: appointment } = useAppointmentById(id)
  const { mutateAsync: respondToMyAppointmentRequest } = useRespondToMyAppointmentRequest()

  // 권한 체크: 받은 약속인지 확인
  const canRespond =
    currentUser &&
    (appointment.receiverName === currentUser.name || appointment.receiverName === undefined) &&
    (appointment.status === 'REQUESTED' || appointment.status === undefined)

  const handleRespondToAppointment = async (status: 'ACCEPT' | 'REJECT', content: string = '') => {
    await respondToMyAppointmentRequest({ appointmentId: id, status, content })
    navigate('/appointments?status=RESPONDED')
  }

  const handleAccept = () => {
    handleRespondToAppointment('ACCEPT')
  }

  const handleReject = (content: string) => {
    handleRespondToAppointment('REJECT', content)
  }

  return (
    <section>
      <AppointmentHeader>약속 상세</AppointmentHeader>
      <div className="flex flex-col gap-4 mx-4 mt-6">
        <AppointmentCard className="bg-gray-1 pt-4 pb-5">
          <AppointmentSender
            className="pb-3"
            inviteAt={appointment.inviteAt}
            requesterName={appointment.requesterName}
          />
          <AppointmentOverview content={appointment.content} />
        </AppointmentCard>

        <AppointmentCard className="p-0">
          <AppointmentSchedule
            color={appointment.color}
            title={appointment.title}
            startAt={appointment.startAt}
            endAt={appointment.endAt}
          />
          {canRespond && (
            <div className="flex">
              <AppointmentDetailRejectButton onReject={handleReject} />
              <AppointmentDetailAcceptButton onAccept={handleAccept} />
            </div>
          )}
        </AppointmentCard>
      </div>
    </section>
  )
}
