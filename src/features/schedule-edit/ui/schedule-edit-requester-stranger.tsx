import { FormField, Input, Text } from '@/shared/ui'
import { cn } from '@/shared/utils'

export default function ScheduleEditRequesterStranger({ className }: { className?: string }) {
  return (
    <>
      <FormField name="requesterName" className={cn('flex flex-col py-4 gap-2', className)}>
        <div className="flex gap-1">
          <Text typography={'b2-heading'}>이름</Text>
          <Text typography={'b2-heading'} className="text-gray-60">
            (필수)
          </Text>
        </div>
        <Input placeholder="이름을 입력해주세요" />
      </FormField>
      <FormField name="requesterEmail" className={cn('flex flex-col py-4 gap-2 border-b border-gray-10', className)}>
        <div className="flex gap-1">
          <Text typography={'b2-heading'}>이메일</Text>
          <Text typography={'b2-heading'} className="text-gray-60">
            (필수)
          </Text>
        </div>
        <Input placeholder="이메일을 입력해주세요" />
      </FormField>
    </>
  )
}
