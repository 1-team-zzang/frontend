import { useParams } from 'react-router'

import useAppointmentById from '../models/use-appointment-by-id'

import AppointmentSender from './appointment-sender'

import { AppointmentCard, AppointmentHeader, AppointmentOverview, AppointmentSchedule } from '.'

export default function AppointmentDetail() {
  const { id } = useParams()

  if (!id) {
    throw new Error('요청하신 약속 페이지가 존재하지 않아요.')
  }

  const { data: appointment } = useAppointmentById(id)

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
          <AppointmentSchedule title={appointment.title} startAt={appointment.startAt} endAt={appointment.endAt} />
        </AppointmentCard>
      </div>
    </section>
  )
}
