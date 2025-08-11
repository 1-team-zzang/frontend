import { FormField, Text, Textarea } from '@/shared/ui'

export default function ScheduleEditMessage() {
  return (
    <FormField name="message" className="flex flex-col py-4">
      <Text typography={'b2-heading'}>초대 메시지</Text>
      <Textarea className="h-[7.5rem] px-4 py-2.5" placeholder="내용을 적어주세요." />
    </FormField>
  )
}
