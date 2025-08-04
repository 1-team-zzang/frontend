import { cn } from '@/shared/utils'

import { FormField } from '../../../shared/ui/form'
import { Input } from '../../../shared/ui/input'
import Text from '../../../shared/ui/text/text'

export default function ScheduleEditTitle({ className }: { className?: string }) {
  return (
    <FormField name="title" className={cn('flex flex-col py-4 gap-2 border-b border-gray-10', className)}>
      <Text typography={'b2-heading'}>일정 제목</Text>
      <Input placeholder="일정 제목을 적어주세요" />
    </FormField>
  )
}
