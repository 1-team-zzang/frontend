import { Text } from '@/shared/ui'
import { cn } from '@/shared/utils'

interface Props {
  name: string
  className: string
}

export default function ScheduleEditRequesterUser({ name, className }: Props) {
  return (
    <div className={cn('flex py-4 gap-2 border-b border-gray-10', className)}>
      <Text typography={'b2-heading'}>From</Text>
      <Text typography={'b2-normal'}>{name}</Text>
    </div>
  )
}
