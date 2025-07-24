import { useState } from 'react'

import { useIntersect } from '@/shared/hooks'
import {
  SegmentedControl,
  SegmentedControlContent,
  SegmentedControlItem,
  SegmentedControlList,
} from '@/shared/ui/segmented-control'
import Text from '@/shared/ui/text/text'

import { useMyAppointmentsByStatus } from '../models'

import MyAppointmentCard from './my-appointment-card'

import type { MyAppointmentStatus } from '../models'

const statusMap: Record<string, MyAppointmentStatus> = {
  pending: 'REQUESTED',
  responded: 'NOTREQUESTED',
  sent: 'REQUESTED',
}

export default function MyAppointment() {
  const [status, setStatus] = useState<MyAppointmentStatus>('REQUESTED')
  const { data, isLoading, isPending, error, fetchNextPage, hasNextPage } = useMyAppointmentsByStatus({
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

  if (isLoading || isPending) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error</div>
  }

  const handleStatusChange = (value: string) => {
    setStatus(statusMap[value])
  }

  return (
    <main>
      <div className="border border-gray-10 py-2.5 text-center">
        <Text typography="h2-heading">내 약속</Text>
      </div>
      <div className="flex flex-col items-center py-6 gap-6 px-4">
        <SegmentedControl defaultValue="pending" onValueChange={handleStatusChange}>
          <SegmentedControlList>
            <SegmentedControlItem value="pending">
              <Text typography="b2-normal">대기중 약속</Text>
            </SegmentedControlItem>
            <SegmentedControlItem value="responded">
              <Text typography="b2-normal">응답한 약속</Text>
            </SegmentedControlItem>
            <SegmentedControlItem value="sent">
              <Text typography="b2-normal">보낸 약속</Text>
            </SegmentedControlItem>
          </SegmentedControlList>
          <SegmentedControlContent value="pending" className="w-full flex flex-col gap-5">
            {data.appointments.map((appointment) => (
              <MyAppointmentCard key={appointment.id} />
            ))}
            {isPending && <div>Loading...</div>}
            <div ref={ref} className="h-[1px]" />
          </SegmentedControlContent>
          <SegmentedControlContent value="responded" className="w-full">
            <div>응답한 약속</div>
          </SegmentedControlContent>
          <SegmentedControlContent value="sent" className="w-full">
            <div>보낸 약속</div>
          </SegmentedControlContent>
        </SegmentedControl>
      </div>
    </main>
  )
}
