import { Text } from '@/shared/ui'
import { cn } from '@/shared/utils'

interface Props {
  label: string
  value: string
  className?: string
}

export default function DetailedScheduleCardContent({ label, value, className }: Props) {
  return (
    <>
      <hr className="text-gray-10" />
      <div className={cn('flex items-center justify-between gap-1', className)}>
        <Text typography="b2-heading">{label}</Text>
        <Text typography="b2-normal">{value}</Text>
      </div>
    </>
  )
}
