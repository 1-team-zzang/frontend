import { cn } from '@/shared/utils'

import { FormField } from '../form'
import { Input } from '../input'
import Text from '../text/text'

import type { HTMLAttributes } from 'react'

export default function ScheduleEditTitle(className: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <FormField name="title" className={cn('flex flex-col py-4 gap-2 border-b border-gray-10', className)}>
      <Text typography={'b2-heading'}>일정 제목</Text>
      <Input placeholder="일정 제목을 적어주세요" />
    </FormField>
  )
}
