import { useNavigate } from 'react-router'

import { IconNonSchedule } from '@/shared/assets'
import { useIntersect, useQueryParamValue } from '@/shared/hooks'
import {
  SegmentedControl,
  SegmentedControlContent,
  SegmentedControlItem,
  SegmentedControlList,
} from '@/shared/ui/segmented-control'
import Text from '@/shared/ui/text/text'
import { devLog } from '@/shared/utils'

import { appointmentListEmptyMessage } from '../consts/appointment-list-empty-message'
import { useMyAppointmentsByStatus } from '../models'

import AppointmentListItem from './appointment-list-item'

import type { AppointmentStatus } from '@/entities/appointment/models'

export default function AppointmentList() {
  const status = useQueryParamValue<AppointmentStatus>('status', 'PENDING', { uppercase: true })

  const { data, fetchNextPage, hasNextPage } = useMyAppointmentsByStatus({
    size: 10,
    status,
  })

  const ref = useIntersect<HTMLDivElement>({
    onIntersect: (entry, _observer) => {
      if (entry.isIntersecting) {
        if (hasNextPage) {
          fetchNextPage()
        }
      }
    },
  })

  const navigate = useNavigate()

  const handleStatusChange = (value: string) => {
    navigate(`/appointments?status=${value}`)
  }

  devLog('log', 'apointment', { status })
  devLog('log', 'apointment', { data })

  return (
    <div className="flex flex-col items-center py-6 gap-6 px-4 h-[calc(100vh-111px)]">
      <SegmentedControl value={status} onValueChange={handleStatusChange}>
        <SegmentedControlList>
          <SegmentedControlItem value="PENDING">
            <Text typography="b2-normal">대기중 약속</Text>
          </SegmentedControlItem>
          <SegmentedControlItem value="RESPONDED">
            <Text typography="b2-normal">응답한 약속</Text>
          </SegmentedControlItem>
          <SegmentedControlItem value="SENT">
            <Text typography="b2-normal">보낸 약속</Text>
          </SegmentedControlItem>
        </SegmentedControlList>
        <SegmentedControlContent value={status} className="w-full flex flex-col gap-5 overflow-y-auto scrollbar-hide">
          {data.appointments.length === 0 ? (
            <div className="flex flex-col items-center py-6 gap-6 px-4 text-center">
              <IconNonSchedule />
              <Text typography="b2-normal">{appointmentListEmptyMessage[status]}</Text>
            </div>
          ) : (
            data.appointments.map((appointment) => (
              <AppointmentListItem
                key={appointment.id}
                {...appointment}
                status={status}
                appointmentStatus={appointment.status}
              />
            ))
          )}

          <div ref={ref} className="h-[1px]" />
        </SegmentedControlContent>
      </SegmentedControl>
    </div>
  )
}
