import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import Button from '@/shared/ui/button/button.tsx'
import { Checkbox } from '@/shared/ui/checkbox'
import { Form } from '@/shared/ui/form'
import { Textarea } from '@/shared/ui/input'
import { Modal, ModalCloseButton, ModalContent, ModalOverlay, ModalPortal, ModalTrigger } from '@/shared/ui/modal'
import Text from '@/shared/ui/text/text'

interface Props {
  onReject: (content: string) => void
}

const rejectFormSchema = z.object({
  content: z.string().optional(),
})

type RejectFormSchema = z.infer<typeof rejectFormSchema>

export default function AppointmentDetailRejectButton({ onReject }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckedChange = (checked: boolean) => {
    setIsChecked(checked)
  }

  const methods = useForm<RejectFormSchema>({
    resolver: zodResolver(rejectFormSchema),
    mode: 'onTouched',
  })

  const handleSubmit = (data: RejectFormSchema) => {
    onReject(data.content ?? '')
    setIsOpen(false)
  }

  return (
    <Modal open={isOpen} onOpenChange={setIsOpen}>
      <ModalTrigger asChild>
        <button className="flex-1 py-3 bg-gray-80 text-white">
          <Text typography="b2-normal">거절</Text>
        </button>
      </ModalTrigger>
      <ModalPortal>
        <ModalOverlay />
        <ModalContent className="text-center px-6 pb-12 w-[calc(100%-66px)]">
          <ModalCloseButton />
          <Form methods={methods} onSubmit={handleSubmit}>
            <Text typography="h2-normal" className="pb-4">
              이 약속을 거절할까요?
            </Text>

            <div className="pb-6">
              {!isChecked && (
                <div className="flex justify-center items-center gap-2">
                  <Checkbox
                    textLabel="거절 메세지 작성하기"
                    onCheckedChange={handleCheckedChange}
                    checked={isChecked}
                  />
                </div>
              )}

              {isChecked && <Textarea placeholder="거절 메세지를 입력해주세요." name="content" />}
            </div>

            <Button intent="solid" className="w-full absolute left-0 bottom-0 rounded-t-none" type="submit">
              확인
            </Button>
          </Form>
        </ModalContent>
      </ModalPortal>
    </Modal>
  )
}
