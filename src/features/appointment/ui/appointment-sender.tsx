import Text from '@/shared/ui/text/text'
import { cn, formatDateToYMD } from '@/shared/utils'

import type { Appointment } from '@/entities/appointment/models/appointment.types'

interface Props {
  className?: string
  children?: string
}

export default function AppointmentSender({
  requesterName,
  inviteAt,
  className,
  children,
}: Pick<Appointment, 'requesterName' | 'inviteAt'> & Props) {
  return (
    <div className={cn('flex justify-between items-center', className)}>
      <div className="flex items-center gap-[0.3125rem]">
        <Text typography="b2-heading">{children}</Text>
        <Text typography="b2-normal">{requesterName}</Text>
      </div>
      <div>
        <Text typography="b2-normal" className="text-gray-60">
          {formatDateToYMD(inviteAt, 'dotted')}
        </Text>
      </div>
    </div>
  )
}
