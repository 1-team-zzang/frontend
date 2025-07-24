import { useState } from 'react'

import {
  SegmentedControl,
  SegmentedControlContent,
  SegmentedControlItem,
  SegmentedControlList,
} from '@/shared/ui/segmented-control'
import Text from '@/shared/ui/text/text'

// import { useMyAppointmentsByStatus } from '../models'

import MyAppointmentCard from './my-appointment-card'

import type { MyAppointmentStatus } from '../models'

const statusMap: Record<string, MyAppointmentStatus> = {
  pending: 'REQUESTED',
  responded: 'NOTREQUESTED',
  sent: 'REQUESTED',
}

export default function MyAppointment() {
  const [status, setStatus] = useState<MyAppointmentStatus>('REQUESTED')
  // const { data, isLoading, isPending, error } = useMyAppointmentsByStatus({ page: 1, size: 10, status })

  // if (isLoading || isPending) {
  //   return <div>Loading...</div>
  // }

  // if (error) {
  //   return <div>Error</div>
  // }

  // console.log(data)

  const handleStatusChange = (value: string) => {
    setStatus(statusMap[value])
  }

  // eslint-disable-next-line no-console
  console.log(status)

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
            <MyAppointmentCard />
            <MyAppointmentCard />
            <MyAppointmentCard />
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
