import { useNavigate } from 'react-router'

import { useIntersect, useQueryParamValue } from '@/shared/hooks'
import Button from '@/shared/ui/button/button.tsx'
import {
  SegmentedControl,
  SegmentedControlContent,
  SegmentedControlItem,
  SegmentedControlList,
} from '@/shared/ui/segmented-control'
import Text from '@/shared/ui/text/text'

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
    navigate(`/appointment?status=${value}`)
  }

  return (
    <div className="flex flex-col items-center py-6 gap-6 px-4">
      <SegmentedControl defaultValue={status} onValueChange={handleStatusChange}>
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
        <SegmentedControlContent value={status} className="w-full flex flex-col gap-5">
          {data.appointments.length === 0 && (
            <div className="flex flex-col items-center py-6 gap-6 px-4 text-center">
              <Text typography="b2-normal">{appointmentListEmptyMessage[status]}</Text>
              <Button intent="solid" onClick={() => navigate('/appointment/create')} className="w-full bg-primary-50">
                약속 만들기
              </Button>
            </div>
          )}

          {data.appointments.length > 0 &&
            data.appointments.map((appointment) => <AppointmentListItem key={appointment.id} {...appointment} />)}
          <div ref={ref} className="h-[1px]" />
        </SegmentedControlContent>
      </SegmentedControl>
    </div>
  )
}
