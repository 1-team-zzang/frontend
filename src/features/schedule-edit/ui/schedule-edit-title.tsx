import { FormField, Input, Text } from '@/shared/ui'
import { cn } from '@/shared/utils'

export default function ScheduleEditTitle({ className }: { className?: string }) {
  return (
    <FormField name="title" className={cn('flex flex-col py-4 border-b border-gray-10', className)}>
      <Text typography={'b2-heading'}>일정 제목</Text>
      <Input placeholder="일정 제목을 적어주세요" />
    </FormField>
  )
}
