import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

import { IconClose } from '@/shared/assets/icons'
import { BottomSheet, BottomSheetContainer, BottomSheetContent } from '@/shared/ui/bottom-sheet'
import Text from '@/shared/ui/text/text'

import handleShareLinkCopy from '../../../shared/ui/calendar/util/handle-share-link-copy'
import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalDescription,
  ModalOverlay,
  ModalTitle,
} from '../../../shared/ui/modal'
import getUserId from '../api/get-userId.API'

interface Props {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export default function ShareCalendarBottomSheet({ isOpen, setIsOpen }: Props) {
  const [copied, setCopied] = useState(false)
  const { data: userId } = useQuery({
    queryKey: ['userId'],
    queryFn: getUserId,
  })
  const link = `http://localhost:5173/share/${userId}`

  const handleCopy = handleShareLinkCopy(link, setCopied)
  return (
    <>
      <BottomSheet open={isOpen} onOpenChange={setIsOpen}>
        <BottomSheetContainer className="bg-white z-fixed">
          <BottomSheetContent className="flex flex-col gap-6 mb-[3.25rem]">
            <div className="flex items-center justify-between">
              <div className="size-6" />
              <Text as="span" typography="h2-heading">
                캘린더 공유
              </Text>
              <IconClose className="size-6 cursor-pointer" onClick={() => setIsOpen(false)} />
            </div>
            <Text as="span" typography="b2-normal" className="mt-4">
              캘린더 링크가 생성되었습니다. 과거 일정은 나만보기로 자동 전환되어 공개되지 않습니다.
            </Text>
            <div className="w-full flex justify-between items-center h-16 bg-gray-1 px-4">
              <Text as="span" typography="b2-normal" className="text-gray-60 truncate">
                {link}
              </Text>
              <button className="w-20 h-11 bg-primary-60 rounded" onClick={handleCopy}>
                복사
              </button>
            </div>
          </BottomSheetContent>
        </BottomSheetContainer>
      </BottomSheet>
      {/* 임시 디자인 */}
      {copied && (
        <Modal open={copied} onOpenChange={setCopied}>
          <ModalOverlay>
            <ModalContent className="flex flex-col items-center justify-center gap-4">
              <ModalTitle>링크 복사 완료</ModalTitle>
              <ModalDescription>링크가 복사되었습니다</ModalDescription>
              <ModalCloseButton />
            </ModalContent>
          </ModalOverlay>
        </Modal>
      )}
    </>
  )
}
