import { FormField, Text, Textarea } from '@/shared/ui'

export default function ScheduleEditContent() {
  return (
    <FormField name="content" className="flex flex-col py-4 gap-2">
      <Text typography={'b2-heading'}>일정 내용</Text>
      <Textarea className="h-[7.5rem] px-4 py-2.5" placeholder="내용을 적어주세요" />
    </FormField>
  )
}
