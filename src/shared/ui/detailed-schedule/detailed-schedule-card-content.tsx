import { cn } from '@/shared/utils'

import Text from '../text/text'

interface DetailRowProps {
  label: string
  value: string
  className?: string
}

export default function DetailedScheduleCardContent({ label, value, className }: DetailRowProps) {
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
